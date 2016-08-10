import * as app from 'application';
import * as fs from 'file-system';
import {View} from 'ui/core/view';
const PSPDFKit = com.pspdfkit.PSPDFKit;
const PSPDFDocument = com.pspdfkit.document.PSPDFDocument;
const PSPDFActivityConfiguration = com.pspdfkit.configuration.activity.PSPDFActivityConfiguration;
const PSPDFActivityConfigurationBuilder = com.pspdfkit.configuration.PSPDFConfiguration.Builder;
const PSPDFActivity = com.pspdfkit.ui.PSPDFActivity;
const Uri = android.net.Uri;
const AndroidSchedulers = rx.android.schedulers.AndroidSchedulers;

export class TNSPSPDFKit {
    _ctx: any;
    _config: any;
    constructor(licenseKey: string, context?: any) {
        this._ctx = context || app.android.currentContext;
        PSPDFKit.initialize(this._ctx, licenseKey);
        this._config =
            new PSPDFActivityConfiguration.Builder(this._ctx, licenseKey)
                .build();
    }

    display(documentName: string) {}

}


export class TNSPSPDFKitActivity {
    _ctx: any;
    _config: any;
    constructor(licenseKey: string, context?: any) {
        this._ctx = context || app.android.currentContext;
        PSPDFKit.initialize(this._ctx, licenseKey);
        this._config =
            new PSPDFActivityConfiguration.Builder(this._ctx, licenseKey)
                .build();
    }

    display(documentName: string) {
        //Using Activity
        if (documentName.charAt(0) === '~') {
            const _docs = fs.knownFolders.currentApp();
            const _path = fs.path.join(_docs.path, documentName.replace(documentName.charAt(0), ''));
            const _content = Uri.fromFile(new java.io.File(_path));
            PSPDFActivity.showDocument(this._ctx, _content, this._config);
        } else if (documentName.substr(0, 7) === 'file:///') {
            const _content = Uri.parse(documentName);
            PSPDFActivity.showDocument(this._ctx, _content, this._config);
        } else if (documentName.substr(0, 9) === 'content://') {
            const _content = Uri.parse(documentName);
            PSPDFActivity.showDocument(this._ctx, _content, this._config);
        }

    }
}



export class PDFViewer extends View {
    _android: android.widget.ImageView;
    _src: string;
    _androidViewId: any;
    public static onCompletedEvent = "onCompleted";
    public static onErrorEvent = "onError";
    public static onNextEvent = "onNext";
    get android() {
        return this._android;
    }
    get src() {
        return this._src;
    }
    set src(value: string) {
        this._src = value;
    }
    _createUI() {
        if (!PSPDFKit.isInitialized()) {
            return;
        }
        this._android = new org.nativescript.widgets.ImageView(this._context);
        if (!this._androidViewId) {
            this._androidViewId = android.view.View.generateViewId();
        }
        this._android.setId(this._androidViewId);

        if (this.src.charAt(0) === '~') {
            const _docs = fs.knownFolders.currentApp();
            const _path = fs.path.join(_docs.path, this.src.replace(this.src.charAt(0), ''));
            const _content = Uri.fromFile(new java.io.File(_path));
            this.loadPDF(_content);

        } else if (this.src.substr(0, 7) === 'file:///') {
            const _content = Uri.parse(this.src);
            this.loadPDF(_content);

        } else if (this.src.substr(0, 9) === 'content://') {
            const _content = Uri.parse(this.src);
            this.loadPDF(_content);
        }
    }

    loadPDF(_content) {
        const that = new WeakRef(this);
        const _pdf = PSPDFKit.openDocument(this._context, _content);
        const _pageIndex = 0;
        const _pageSize = _pdf.getPageSize(_pageIndex);
        const _width = 2048;
        const _height = _pageSize.height * (_width / _pageSize.width);
        const _pageBitmap = _pdf.renderPageToBitmap(this._context, _pageIndex, _width, _height);


        _pdf.renderPageToBitmapAsync(this._context, _pageIndex, _width, _height)
            .observeOn(AndroidSchedulers.mainThread())
            .subscribe(new rx.Observer({
                owner() {
                    return that.get();
                },
                onNext(data) {
                    const owner = that.get();
                    if (owner) {
                        owner.notify({ eventName: PDFViewer.onNextEvent, object: owner, data: data });
                        owner._android.setImageBitmap(data);
                    }

                },
                onError(e) {
                    const owner = that.get();
                    if (owner) {
                        owner.notify({ eventName: PDFViewer.onNextEvent, object: owner, message: e.getMessage() });
                    }
                },
                onCompleted() {
                    const owner = that.get();
                    if (owner) {
                        owner.notify({ eventName: PDFViewer.onNextEvent, object: owner });
                    }
                }
            }));
    }
}