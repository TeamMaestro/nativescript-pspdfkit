import { topmost } from 'tns-core-modules/ui/frame';
import { ContentView } from "tns-core-modules/ui/content-view";
import { View, Property, layout } from "tns-core-modules/ui/core/view";
import * as fs from "file-system";
import { Guid } from "../common";
import { fromObject } from "tns-core-modules/data/observable";
import * as types from 'utils/types';
import { Color } from "tns-core-modules/color";
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
        this.controller = PSPDFViewController.new();
        this.backgroundColor = "#fff";
    }
    public createNativeView() {
        if (!this.controller) {
            this.controller = PSPDFViewController.new();
        }
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

                this.controller.document = getDocument(msg.data.filePath);
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
        return UIView.new();
    }
    public initNativeView() {
        if (this.src) {
            if (this.src.startsWith('http://') || this.src.startsWith('https://')) {
                downloadDocument(this.src, this._worker);
            } else {
                this.controller.document = getDocument(this.src);
                this.controller.view.autoresizingMask = UIViewAutoresizing.FlexibleWidth | UIViewAutoresizing.FlexibleHeight;
                let parent = topmost().ios.controller.visibleViewController;
                parent.addChildViewController(this.controller);
                this.controller.view.frame = this.nativeView.bounds;
                this.nativeView.addSubview(this.controller.view);
                this.controller.didMoveToParentViewController(parent);
            }
        }

    }

    public disposeNativeView() {
        this.controller = null;
    }

    public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number) {
        const nativeView = this.nativeView;
        if (nativeView) {
            const width = layout.getMeasureSpecSize(widthMeasureSpec);
            const height = layout.getMeasureSpecSize(heightMeasureSpec);
            this.setMeasuredDimension(width, height);
        }
    }

    set backgroundColor(value: string) {
        this.controller.updateConfigurationWithoutReloadingWithBuilder((config) => {
            config.backgroundColor = new Color(value).ios;
        })
    }

    [srcProperty.setNative](src: string) {
        if (src.startsWith('http://') || src.startsWith('https://')) {
            downloadDocument(src, this._worker);
        } else if (this.controller) {
            this.controller.document = getDocument(src);
        }
    }

    getAnnotationField(name: string) {
        if (this.controller && this.controller.document) {
            const field = this.controller.document.formParser.findAnnotationWithFieldName(name);
            if (field) {
                return field.exportValue;
            } else {
                return;
            }
        }
        return;
    }

    getFormField(name: string) {
        if (this.controller && this.controller.document) {
            const field = this.controller.document.formParser.findFieldWithFullFieldName(name);
            if (field) {
                return field.exportValue;
            } else {
                return;
            }
        }
        return;
    }

    getAllFormFields(): Object {
        const array = this.controller.document.formParser.formFields
        let obj = {};
        const len = array.count;
        for (let i = 0; i < len; i++) {
            const item = array.objectAtIndex(i);
            obj[item.fullyQualifiedName] = { value: item.value };
        }
        return obj;
    }

    setFormField(name: string, value: any) {
        if (name && value) {
            const array = this.controller.document.formParser.formFields
            const len = array.count;
            for (let i = 0; i < len; i++) {
                const item = array.objectAtIndex(i);
                if (item.fullyQualifiedName === name) {
                    item.value = value;
                    break;
                }
            }

        }
    }

    setFormFields(obj: Object) {
        const arr = this.controller.document.formParser.formFields;
        const len = arr.count;
        Object.keys(obj).forEach((key, index) => {
            const item = obj[key];
            for (let i = 0; i < len; i++) {
                const field = arr.objectAtIndex(i);
                if (field.fullyQualifiedName === key) {
                    field.value = item['value'];
                    break;
                }
            }
        });
    }
    set formsEnabled(enabled: boolean) {
        if (this.controller && this.controller.document) {
            this.controller.document.formsEnabled = enabled;
        }
    }
    get formsEnabled(): boolean {
        if (this.controller && this.controller.document) {
            return this.controller.document.formsEnabled;
        }
        return false;
    }
    set scrollDirection(direction: string) {
        switch (direction) {
            case 'horizontal':
                this.controller.updateConfigurationWithoutReloadingWithBuilder((config) => {
                    config.scrollDirection = PSPDFScrollDirection.Horizontal;
                });
                break;
            default:
                this.controller.updateConfigurationWithoutReloadingWithBuilder((config) => {
                    config.scrollDirection = PSPDFScrollDirection.Vertical;
                });
                break;
        }
    }
    set fitToWidth(fit: boolean) {
        if (fit) {
            this.controller.updateConfigurationWithoutReloadingWithBuilder((config) => {
                config.fitToWidthEnabled = PSPDFAdaptiveConditional.YES;
            });
        } else {
            this.controller.updateConfigurationWithoutReloadingWithBuilder((config) => {
                config.fitToWidthEnabled = PSPDFAdaptiveConditional.Adaptive;
            });
        }
    }
    set thumbnailBar(bar: string) {
        switch (bar) {
            case "scrollable":
                this.controller.updateConfigurationWithoutReloadingWithBuilder((config) => {
                    config.thumbnailBarMode = PSPDFThumbnailBarMode.Scrollable;
                });
                break;
            case "scrubber":
                this.controller.updateConfigurationWithoutReloadingWithBuilder((config) => {
                    config.thumbnailBarMode = PSPDFThumbnailBarMode.ScrubberBar;
                });
                break;
            default:
                this.controller.updateConfigurationWithoutReloadingWithBuilder((config) => {
                    config.thumbnailBarMode = PSPDFThumbnailBarMode.None;
                });
                break;
        }
    }
    set scrubberBar(bar: string) {
        switch (bar) {
            case "verticalRight":
                this.controller.updateConfigurationWithoutReloadingWithBuilder((config) => {
                    config.scrubberBarType = PSPDFScrubberBarType.VerticalRight;
                });
                break;
            case "verticalLeft":
                this.controller.updateConfigurationWithoutReloadingWithBuilder((config) => {
                    config.scrubberBarType = PSPDFScrubberBarType.VerticalLeft;
                });
                break;
            default:
                this.controller.updateConfigurationWithoutReloadingWithBuilder((config) => {
                    config.scrubberBarType = PSPDFScrubberBarType.Horizontal;
                });
                break;
        }
    }
    set thumbnailSize(size: string) {
        let sizes = size.split(' ');
        if (sizes.length === 2) {
            this.controller.updateConfigurationWithoutReloadingWithBuilder((config) => {
                config.thumbnailSize = CGSizeMake(parseInt(sizes[0]), parseInt(sizes[1]));
            });
        } else {
            this.controller.updateConfigurationWithoutReloadingWithBuilder((config) => {
                config.thumbnailSize = CGSizeMake(parseInt(size), parseInt(size));
            });
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
    document
    return document;
}

type DOWNLOAD_STATUS = 'downloading' | 'completed' | 'failed';