import * as app from 'tns-core-modules/application';
import { View, Property } from 'tns-core-modules/ui/core/view';
import * as types from 'tns-core-modules/utils/types';
import * as utils from 'tns-core-modules/utils/utils';
import * as fs from 'tns-core-modules/file-system';
import { Observable, fromObject } from 'tns-core-modules/data/observable';
import * as frame from 'tns-core-modules/ui/frame';
import { Color } from 'tns-core-modules/color/color';
import * as common from '../common';
import { PageMode } from '../common';
declare var com: any;
const PSPDFKit = com.pspdfkit.PSPDFKit;
const PSPDFDocument = com.pspdfkit.document.PSPDFDocument;
const PdfActivityConfiguration = com.pspdfkit.configuration.activity.PdfActivityConfiguration;
const PdfConfiguration = com.pspdfkit.configuration.PdfConfiguration;
const Uri = android.net.Uri;
const PdfActivity = com.pspdfkit.ui.PdfActivity;
const DownloadJob = com.pspdfkit.document.download.DownloadJob;
const DownloadRequest = com.pspdfkit.document.download.DownloadRequest;
const DownloadSource = com.pspdfkit.document.download.source.DownloadSource;
const PdfFragment = com.pspdfkit.ui.PdfFragment;
const FormType = com.pspdfkit.forms.FormType;
const FRAGMENT_TAG = "PSPDFKitFragmentTag";
export class TNSPSPDFKit {
    private worker: Worker;
    private context: any = app.android.context;
    events: Observable;
    private config;
    constructor(licenseKey: string) {
        this.events = fromObject({});
        PSPDFKit.initialize(app.android.context, licenseKey);
    }

    private initWorker() {
        if (global["TNS_WEBPACK"]) {
            const WorkerScript = require('nativescript-worker-loader!./worker.js');
            this.worker = new WorkerScript();
        } else {
            this.worker = new Worker('./worker.js');
        }
        this.worker.onmessage = (msg) => {
            if (msg.data.status === 1) {
                this.events.notify({
                    eventName: 'status',
                    object: fromObject({ value: 'downloading' })
                });
            } else if (msg.data.status === 2 && msg.data.filePath) {
                this.events.notify({
                    eventName: 'status',
                    object: fromObject({ value: 'completed' })
                });
                PdfActivity.showDocument(app.android.context, android.net.Uri.fromFile(new java.io.File(msg.data.filePath)), this.config);

            }
            if (msg.data.progress) {
                this.events.notify({
                    eventName: 'progress',
                    object: fromObject({ value: msg.data.progress })
                });
            }
        };
        this.worker.onerror = (err) => {
            this.events.notify({
                eventName: 'status',
                object: fromObject({ value: 'failed' })
            });
        };
    }
    display(documentName: string) {
        this.initWorker();
        if (PSPDFKit.isInitialized()) {
            this.config = new PdfActivityConfiguration.Builder(app.android.context).build();
            let file;
            if (types.isString(documentName) && documentName.startsWith('~')) {
                file = new java.io.File(fs.path.join(fs.knownFolders.currentApp().path, documentName.replace('~', '')));
                PdfActivity.showDocument(app.android.context, android.net.Uri.fromFile(file), this.config);
            } else if (types.isString(documentName) && documentName.startsWith('/')) {
                file = new java.io.File(documentName);
                PdfActivity.showDocument(app.android.context, android.net.Uri.fromFile(file), this.config);
            } else if (types.isString(documentName) && documentName.startsWith('http://') || documentName.startsWith('https://')) {
                this.downloadDocument(documentName);
            }
        }
    }

    private downloadDocument(src) {
        const tempPath = fs.path.join(fs.knownFolders.temp().path, `${+new Date()}.pdf`);
        if (!this.worker) {
            if (global["TNS_WEBPACK"]) {
                const WorkerScript = require('nativescript-worker-loader!./worker.js');
                this.worker = new WorkerScript();
            } else {
                this.worker = new Worker('./worker.js');
            }
        } else {
            this.worker.postMessage({
                action: 'download',
                path: tempPath,
                url: src
            });
        }
    }

}

export class TNSPSPDFView extends common.TNSPSPDFView {
    _scrollDirection: string;
    _searchResultZoomScale: number;
    _formElementZoomEnabled: boolean;
    _maximumZoomScale: number;
    _minimumZoomScale: number;
    _pageMode: any;
    _backgroundColor: string;
    _formsEnabled = true;
    config: any;
    private _pageFragment: any;
    private _fragment: any;
    private _layoutId: number;
    private worker: Worker;
    public static toggleMemoryMode() { }
    public clearCache() { }
    public createNativeView() {
        this.config = new PdfConfiguration.Builder();

        if (this._formsEnabled) {
            this.config.enableFormEditing();
        } else {
            this.config.disableFormEditing();
        }

        if (this._backgroundColor) {
            this.config.backgroundColor = new Color(this._backgroundColor).android;
        }


        if (this._pageMode) {
            switch (this._pageMode) {
                case PageMode.SINGLE:
                case 'single':
                    this.config.layoutMode(com.pspdfkit.configuration.page.PageLayoutMode.SINGLE);
                    break;
                case PageMode.DOUBLE:
                case 'double':
                    this.config.layoutMode(com.pspdfkit.configuration.page.PageLayoutMode.DOUBLE);
                    break;
                default:
                    this.config.layoutMode(com.pspdfkit.configuration.page.PageLayoutMode.AUTO);
                    break;
            }
        }

        if (this._scrollDirection) {
            switch (this._scrollDirection) {
                case 'horizontal':
                    this.config.scrollDirection(com.pspdfkit.configuration.page.PageScrollDirection.HORIZONTAL);
                    break;
                default:
                    this.config.scrollDirection(com.pspdfkit.configuration.page.PageScrollDirection.VERTICAL);
                    break;
            }
        }

        if (this._maximumZoomScale) {
            this.config.maxZoomScale(new java.lang.Float(this._maximumZoomScale));
        }

        if (global["TNS_WEBPACK"]) {
            const WorkerScript = require('nativescript-worker-loader!./worker.js');
            this.worker = new WorkerScript();
        } else {
            this.worker = new Worker('./worker.js');
        }
        this.worker.onmessage = (msg) => {
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
                this.init(msg.data.filePath);
            }
            if (msg.data.progress) {
                this.notify({
                    eventName: 'progress',
                    object: fromObject({ value: msg.data.progress })
                });
            }
        };
        this.worker.onerror = (err) => {
            this.notify({
                eventName: 'status',
                object: fromObject({ value: 'failed' })
            });
        };
        this._layoutId = android.view.View.generateViewId();
        return new android.widget.LinearLayout(this._context);
    }


    getAnnotationField(name: string) {
        // TODO
        return;
    }

    getFormField(name: string) {
        if (this._fragment) {
            let field = this._fragment.getDocument().getFormProvider().getFormElementWithName(name);
            if (field) {
                return field.getText();
            }
        }
        return;
    }

    getAllFormFields(): Object {
        let obj = {};
        const array = this._fragment.getDocument().getFormProvider().getFormFields();
        if (array) {
            const len = array.size();
            for (let i = 0; i < len; i++) {
                const item = array.get(i);
                switch (item.getType()) {
                    case FormType.RADIOBUTTON:
                    case FormType.CHECKBOX:
                        const checkField = item.getFormElement();
                        if (checkField.isSelected()) {
                            obj[item.getFullyQualifiedName()] = { value: true };
                        } else {
                            obj[item.getFullyQualifiedName()] = { value: false };
                        }
                        break;
                    case FormType.LISTBOX:
                    case FormType.COMBOBOX:
                        const comboField = item.getFormElement();
                        const comboFieldOptions = comboField.getOptions();
                        const comboFieldSelectedArray = comboField.getSelectedIndexes();
                        const comboFieldSelectedArraySize = comboFieldSelectedArray.size();
                        if (comboFieldSelectedArraySize === 1) {
                            if (comboFieldSelectedArray.get(0)) {
                                const selectedIndex = Number(comboFieldSelectedArray.get(0));
                                if (comboFieldOptions.get(selectedIndex)) {
                                    obj[comboField.getFullyQualifiedName()] = { value: comboFieldOptions.get(selectedIndex).getValue() };
                                } else {
                                    obj[comboField.getFullyQualifiedName()] = { value: "" };
                                }
                            } else {
                                obj[comboField.getFullyQualifiedName()] = { value: "" };
                            }
                        } else if (comboFieldSelectedArray > 1) {
                            // TODO
                        }
                        break;
                    case FormType.SIGNATURE:
                        // const signatureField = item.getFormElement();
                        // obj[item.getFullyQualifiedName()] = { value: item.getText() };
                        // TODO
                        break;
                    case FormType.TEXT:
                        const textField = item.getFormElement();
                        obj[item.getFullyQualifiedName()] = { value: textField.getText() };
                        break;
                    default:
                        // TODO
                        break;
                }
            }
        }
        return obj;
    }

    setFormField(name: string, value: any) {
        if (name && value) {
            const array = this._fragment.getDocument().getFormProvider().getFormFields();
            if (array) {
                const len = array.size();
                for (let i = 0; i < len; i++) {
                    const item = array.get(i);
                    if (item.getFullyQualifiedName() === name) {
                        switch (item.getType()) {
                            case FormType.RADIOBUTTON:
                            case FormType.PUSHBUTTON:
                            case FormType.CHECKBOX:
                                if (common.boolParse(value)) {
                                    item.select();
                                } else {
                                    item.deselect();
                                }
                                break;
                            case FormType.COMBOBOX:
                            case FormType.LISTBOX:
                                const comboField = item.getFormElement();
                                const comboFieldOptions = comboField.getOptions();
                                const comboFieldSelectedArray = comboField.getSelectedIndexes();
                                const comboFieldSelectedArraySize = comboFieldSelectedArray.size();
                                if (comboFieldSelectedArraySize === 1) {
                                    if (comboFieldSelectedArray.get(0)) {
                                        const selectedIndex = Number(comboFieldSelectedArray.get(0));
                                        if (comboFieldOptions.get(selectedIndex)) {
                                            comboFieldOptions.get(selectedIndex).setValue(value);
                                        }
                                    }
                                } else if (comboFieldSelectedArray > 1) {
                                    // TODO
                                }
                                break;
                            case FormType.SIGNATURE:
                                // TODO
                                break;
                            case FormType.TEXT:
                                item.setText(value);
                                break;
                            default:
                                break;
                        }
                        break;
                    }
                }
            }
        }
    }

    setFormFields(obj: Object) {
        Object.keys(obj).forEach((key, index) => {
            const data = obj[key];
            const array = this._fragment.getDocument().getFormProvider().getFormFields();
            if (array) {
                const len = array.size();
                for (let i = 0; i < len; i++) {
                    const item = array.get(i);
                    if (item.getFullyQualifiedName() === key) {
                        switch (item.getType()) {
                            case FormType.RADIOBUTTON:
                            case FormType.PUSHBUTTON:
                            case FormType.CHECKBOX:
                                const checkField = item.getFormElement();
                                if (common.boolParse(data["value"])) {
                                    checkField.select();
                                } else {
                                    checkField.deselect();
                                }
                                break;
                            case FormType.COMBOBOX:
                            case FormType.LISTBOX:
                                const comboField = item.getFormElement();
                                const comboFieldOptions = comboField.getOptions();
                                const comboFieldOptionsSize = comboFieldOptions.size();
                                const comboFieldSelectedArray = comboField.getSelectedIndexes();
                                const comboFieldSelectedArraySize = comboFieldSelectedArray.size();

                                const list = new java.util.ArrayList();
                                for (let i = 0; i < comboFieldOptionsSize; i++) {
                                    const _item = comboFieldOptions.get(i);
                                    if (_item.getValue() === data["value"]) {
                                        list.add(new java.lang.Integer(i));
                                        comboField.setSelectedIndexes(list);
                                        break;
                                    }
                                }
                                break;
                            case FormType.SIGNATURE:
                                // TODO
                                break;
                            case FormType.TEXT:
                                item.getFormElement().setText(data["value"]);
                                break;
                            default:
                                break;
                        }
                        break;
                    }
                }
            }
        });
    }

    set scrollDirection(direction: string) {
        this._scrollDirection = direction;
    }

    set maxZoom(value: number) {
        this._maximumZoomScale = value;
    }
    set minZoom(value: number) {
        this._minimumZoomScale = value;
    }
    set enableFormElementsZoom(value: boolean) {
        this._formElementZoomEnabled = value;
    }
    set searchResultZoom(value: number) {
        this._searchResultZoomScale = value;
    }
    set pageMode(value: any) {
        this._pageMode = value;
    }

    set backgroundColor(value: string) {
        this._backgroundColor = value;
    }
    public initNativeView() {
        this.nativeView.setId(this._layoutId);
    }

    set formsEnabled(enabled: boolean) {
        this._formsEnabled = enabled;
    }
    get formsEnabled(): boolean {
        return this._formsEnabled;
    }

    private init(documentName) {
        let file;
        let uri;
        if (documentName.startsWith('~')) {
            file = new java.io.File(fs.path.join(fs.knownFolders.currentApp().path, documentName.replace('~', '')));
        } else if (types.isString(documentName) && documentName.startsWith('/')) {
            file = new java.io.File(documentName);
        }
        uri = android.net.Uri.fromFile(file);
        this._fragment = com.pspdfkit.ui.PdfFragment.newInstance(uri, this.config.build());
        let page = frame.topmost().currentPage;
        let f = page.frame;
        this._pageFragment = f.android.fragmentForPage(page);
        if (this._pageFragment) {
            let fragmentManager = this._pageFragment.getActivity().getSupportFragmentManager();
            let transaction = fragmentManager.beginTransaction();
            transaction.replace(this._layoutId, <any>this._fragment, FRAGMENT_TAG);
            transaction.commit();
        }
    }

    [common.srcProperty.setNative](src: string) {
        if (src.startsWith('http://') || src.startsWith('https://')) {
            this.downloadDocument(src);
        } else {
            this.init(src);
        }
    }

    private downloadDocument(src) {
        const tempPath = fs.path.join(fs.knownFolders.temp().path, `${+new Date()}.pdf`);
        if (!this.worker) {
            if (global["TNS_WEBPACK"]) {
                const WorkerScript = require('nativescript-worker-loader!./worker.js');
                this.worker = new WorkerScript();
            } else {
                this.worker = new Worker('./worker.js');
            }
        } else {
            this.worker.postMessage({
                action: 'download',
                path: tempPath,
                url: src
            });
        }
    }
}