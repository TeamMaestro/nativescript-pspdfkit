import { topmost } from 'tns-core-modules/ui/frame';
import { ContentView } from "tns-core-modules/ui/content-view";
import { View, Property, layout } from "tns-core-modules/ui/core/view";
import * as fs from "file-system";
import { Guid } from "../common";
import { fromObject } from "tns-core-modules/data/observable";

export class TNSPSPDFKit {

    private appDelegate: any;

    /**
     * Creates an instance of TNSPSPDFKit.
     *
     * @param {string} licenseKey The license key
     */
    constructor(licenseKey: string) {
        PSPDFKit.setLicenseKey(licenseKey);
    }

    display(documentName: string) {
        let controller = PSPDFViewController.new();
        controller.document = getDocument(documentName);
        let navCtrl = (<UINavigationController>topmost().ios.controller).initWithRootViewController(controller);
    }
}

const srcProperty = new Property<TNSPSPDFView, string>({
    name: 'src'
});

export class TNSPSPDFView extends View {
    src: string;
    nativeView: UIView;
    controller: PSPDFViewController;
    config: PSPDFConfigurationBuilder;
    private _worker: Worker;
    constructor() {
        super();
        this.config = PSPDFConfigurationBuilder.alloc();
        this._worker = new Worker('../worker');
        this._worker.onmessage = (msg) => {
            if (msg.data.status === 1) {
                this.notify({
                    eventName: 'status',
                    object: fromObject({ value: 'downloading' })
                });
            } else if (msg.data.status === 2 && msg.data.filePath) {
                this.notify({
                    eventName: 'status',
                    object: fromObject({ value: 'completed' })
                });
                this.controller = PSPDFViewController.alloc().initWithDocumentConfiguration(getDocument(msg.data.filePath), PSPDFConfiguration.alloc().initWithBuilder(this.config));
                this.controller.view.autoresizingMask = UIViewAutoresizing.FlexibleWidth | UIViewAutoresizing.FlexibleHeight;
                let parent = topmost().ios.controller.visibleViewController;
                parent.addChildViewController(this.controller);
                this.controller.view.frame = this.nativeView.bounds;
                this.nativeView.addSubview(this.controller.view);
                this.controller.didMoveToParentViewController(parent);
            }
            if (msg.data.progress) {
                this.notify({
                    eventName: 'progress',
                    object: fromObject({ value: msg.data.progress })
                });
            }
        }

        this._worker.onerror = (err) => {
            this.notify({
                eventName: 'status',
                object: fromObject({ value: 'failed' })
            });
        }
    }
    public createNativeView() {
        return UIView.new();
    }
    public initNativeView() {
        if (this.src) {
            if (this.src.startsWith('http://') || this.src.startsWith('https://')) {
                downloadDocument(this.src, this._worker);
            } else {
                this.controller = PSPDFViewController.alloc().initWithDocumentConfiguration(getDocument(this.src), PSPDFConfiguration.alloc().initWithBuilder(this.config));
                this.controller.view.autoresizingMask = UIViewAutoresizing.FlexibleWidth | UIViewAutoresizing.FlexibleHeight;
                let parent = topmost().ios.controller.visibleViewController;
                parent.addChildViewController(this.controller);
                this.controller.view.frame = this.nativeView.bounds;
                this.nativeView.addSubview(this.controller.view);
                this.controller.didMoveToParentViewController(parent);
            }
        }

    }
    public disposeNativeView() { }

    public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number) {
        const nativeView = this.nativeView;
        if (nativeView) {
            const width = layout.getMeasureSpecSize(widthMeasureSpec);
            const height = layout.getMeasureSpecSize(heightMeasureSpec);
            this.setMeasuredDimension(width, height);
        }
    }
    [srcProperty.setNative](src: string) {
        if (this.controller) {
            this.controller.document = getDocument(src);
        } else if (this.src.startsWith('http://') || this.src.startsWith('https://')) {
            downloadDocument(this.src, this._worker);
        }
    }

    set scrollDirection(direction: string) {
        switch (direction) {
            case 'horizontal':
                this.config.scrollDirection = PSPDFScrollDirection.Horizontal;
                break;
            default:
                this.config.scrollDirection = PSPDFScrollDirection.Vertical;
                break;
        }
    }
    set fitToWidth(fit: boolean) {
        if (fit) {
            this.config.fitToWidthEnabled = PSPDFAdaptiveConditional.YES;
        } else {
            this.config.fitToWidthEnabled = PSPDFAdaptiveConditional.Adaptive;
        }
    }
    set thumbnailBar(bar: string) {
        switch (bar) {
            case "scrollable":
                this.config.thumbnailBarMode = PSPDFThumbnailBarMode.Scrollable;
                break;
            case "scrubber":
                this.config.thumbnailBarMode = PSPDFThumbnailBarMode.ScrubberBar;
                break;
            case "none":
                this.config.thumbnailBarMode = PSPDFThumbnailBarMode.None;
                break;
        }
    }
    set scrubberBar(bar: string) {
        switch (bar) {
            case "verticalRight":
                this.config.scrubberBarType = PSPDFScrubberBarType.VerticalRight;
                break;
            case "verticalLeft":
                this.config.scrubberBarType = PSPDFScrubberBarType.VerticalLeft;
                break;
            default:
                this.config.scrubberBarType = PSPDFScrubberBarType.Horizontal;
                break;
        }
    }
    set thumbnailSize(size: string) {
        let sizes = size.split(' ');
        if (sizes.length === 2) {
            this.config.thumbnailSize = CGSizeMake(parseInt(sizes[0]), parseInt(sizes[1]));
        } else {
            this.config.thumbnailSize = CGSizeMake(parseInt(size), parseInt(size));

        }

    }
}

srcProperty.register(TNSPSPDFView);

function downloadDocument(src: string, worker: Worker) {
    const url = NSString.stringWithString(src);
    const parts = url.componentsSeparatedByString("/");
    const filename = parts.lastObject;
    const tempPath = fs.knownFolders.temp().path;
    const fullPath = fs.path.join(tempPath, filename);
    worker.postMessage({
        link: src,
        path: fullPath
    });
}
function getDocument(src: string) {
    let fileUrl;
    let document;
    if (src.startsWith('~')) {
        fileUrl = fs.path.join(fs.knownFolders.currentApp().path, src.replace('~', ''));
        document = PSPDFDocument.documentWithURL(NSURL.fileURLWithPath(fileUrl));
    } else if (src.startsWith('/')) {
        document = PSPDFDocument.documentWithURL(NSURL.fileURLWithPath(src));
    }
    return document;
}

type DOWNLOAD_STATUS = 'downloading' | 'completed' | 'failed';