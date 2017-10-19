import { topmost } from 'tns-core-modules/ui/frame';
import { ContentView } from 'tns-core-modules/ui/content-view';
import { View, Property, layout } from 'tns-core-modules/ui/core/view';
import * as fs from 'tns-core-modules/file-system'
import { Guid, PageMode } from '../common';
import { fromObject } from 'tns-core-modules/data/observable';
import * as types from 'tns-core-modules/utils/types';
import { Color } from 'tns-core-modules/color';
import * as utils from 'tns-core-modules/utils/utils';
export const PROGRESS_EVENT = 'progress';
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
    progress: number;
    private _downloadTask: NSURLSessionDownloadTask;
    src: string;
    nativeView: UIView;
    controller: PSPDFViewController;
    config: PSPDFConfigurationBuilder;
    private _progress = 0;
    private _file: any;
    constructor() {
        super();
        this.controller = PSPDFViewController.new();
        this.backgroundColor = "#fff";
    }

    public static toggleMemoryMode() {
        const instance = utils.ios.getter(PSPDFKit, PSPDFKit.sharedInstance);
        if (instance.valueForKey('com.pspdfkit.low-memory-mode')) {
            instance.setValueForKey(false, 'com.pspdfkit.low-memory-mode');
        } else {
            instance.setValueForKey(true, 'com.pspdfkit.low-memory-mode');
        }
    }
    public createNativeView() {
        if (!this.controller) {
            this.controller = PSPDFViewController.new();
        }
        return UIView.new();
    }
    public initNativeView() {
        if (this.src) {
            if (this.src.startsWith('http://') || this.src.startsWith('https://')) {
                this.downloadDocument(this.src);
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

    public clearCache() {
        if (this.controller && this.controller.document) {
            this.controller.document.clearCache();
        }
    }
    public disposeNativeView() {
        if (this._downloadTask) {
            this._downloadTask.cancel();
        }
        this.controller.willMoveToParentViewController(null);
        if (this.controller.view) {
            this.controller.view.removeFromSuperview();
        }
        this.controller.removeFromParentViewController();
        this._downloadTask = null;
        this.controller = null;
        super.disposeNativeView();
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
            this.downloadDocument(src);
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
    set undoEnabled(enabled: boolean) {
        if (this.controller && this.controller.document) {
            this.controller.document.undoEnabled = enabled;
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
    set backgroundSaving(enabled: boolean) {
        this.controller.updateConfigurationWithoutReloadingWithBuilder((config) => {
            config.allowBackgroundSaving = enabled;
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

    set spreadFitting(fit:string) {
        switch (fit) {
            case "fit":
            this.controller.updateConfigurationWithoutReloadingWithBuilder((config) => {
                config.spreadFitting = PSPDFConfigurationSpreadFitting.Fit;
            });
                break;
            case "fill":
            this.controller.updateConfigurationWithoutReloadingWithBuilder((config) => {
                config.spreadFitting = PSPDFConfigurationSpreadFitting.Fill;
            });
                break;
            default:
            this.controller.updateConfigurationWithoutReloadingWithBuilder((config) => {
                config.spreadFitting = PSPDFConfigurationSpreadFitting.Adaptive;
            });
                break;

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
    set maxZoom(value: number) {
        this.controller.updateConfigurationWithoutReloadingWithBuilder((config) => {
            config.maximumZoomScale = value;
        });
    }
    set minZoom(value: number) {
        this.controller.updateConfigurationWithoutReloadingWithBuilder((config) => {
            config.minimumZoomScale = value;
        });
    }
    set enableFormElementsZoom(value: boolean) {
        this.controller.updateConfigurationWithoutReloadingWithBuilder((config) => {
            config.formElementZoomEnabled = value;
        });
    }
    set searchResultZoom(value: number) {
        this.controller.updateConfigurationWithoutReloadingWithBuilder((config) => {
            config.searchResultZoomScale = value;
        });
    }
    set pageMode(value: any) {
        switch (value) {
            case PageMode.SINGLE:
            case 'single':
                this.controller.updateConfigurationWithoutReloadingWithBuilder((config) => {
                    config.pageMode = PSPDFPageMode.Single;
                });
                break;
            case PageMode.DOUBLE:
            case 'double':
                this.controller.updateConfigurationWithoutReloadingWithBuilder((config) => {
                    config.pageMode = PSPDFPageMode.Double;
                });
                break;
            default:
                this.controller.updateConfigurationWithoutReloadingWithBuilder((config) => {
                    config.pageMode = PSPDFPageMode.Automatic;
                });
                break;
        }
    }

    downloadDocument(src: string) {
        const url = NSString.stringWithString(src);
        const parts = url.componentsSeparatedByString("/");
        const filename = parts.lastObject;
        const tempPath = fs.knownFolders.temp().path;
        const fullPath = fs.path.join(tempPath, filename);
        const configuration = NSURLSessionConfiguration.defaultSessionConfiguration;
        const manager = AFURLSessionManager.alloc().initWithSessionConfiguration(configuration);
        const URL = NSURL.URLWithString(src)
        const request = NSURLRequest.requestWithURL(URL);
        this._downloadTask = manager.downloadTaskWithRequestProgressDestinationCompletionHandler(request, (progress) => {
            if (this._downloadTask && this._downloadTask.state === NSURLSessionTaskState.Running) {
                if (Math.floor(Math.round(progress.fractionCompleted * 100)) > this._progress) {
                    this._progress = Math.floor(Math.round(progress.fractionCompleted * 100));
                    this.notify({
                        eventName: PROGRESS_EVENT,
                        object: fromObject({
                            value: Math.floor(Math.round(progress.fractionCompleted * 100))
                        })
                    })
                };
            }
        }, (targetPath, response) => {
            return NSURL.fileURLWithPath(fullPath);
        }, (response, filePath, error) => {
            if (error) {
                this.notify({
                    eventName: 'status',
                    object: fromObject({ value: 'error', msg: error.localizedDescription, message: error.localizedDescription })
                });
            } else {
                if (this._downloadTask && this._downloadTask.state === NSURLSessionTaskState.Completed && !this._downloadTask.error) {
                    this.controller.document = getDocument(filePath.path);
                    this.controller.view.autoresizingMask = UIViewAutoresizing.FlexibleWidth | UIViewAutoresizing.FlexibleHeight;
                    let parent = topmost().ios.controller.visibleViewController;
                    parent.addChildViewController(this.controller);
                    this.controller.view.frame = this.nativeView.bounds;
                    this.nativeView.addSubview(this.controller.view);
                    this.controller.didMoveToParentViewController(parent);
                    this.notify({
                        eventName: 'status',
                        object: fromObject({ value: 'completed' })
                    });
                }
            }
        })
        this._downloadTask.resume();
        this.notify({
            eventName: 'status',
            object: fromObject({ value: 'downloading' })
        });
    }

}

srcProperty.register(TNSPSPDFView);


type DOWNLOAD_STATUS = 'downloading' | 'completed' | 'failed';

function getDocument(src: string) {
    let fileUrl;
    let document;
    if (src.startsWith('~')) {
        fileUrl = fs.path.join(fs.knownFolders.currentApp().path, src.replace('~', ''));
        document = PSPDFDocument.alloc().initWithURL(NSURL.fileURLWithPath(fileUrl));
    } else if (src.startsWith('/')) {
        document = PSPDFDocument.alloc().initWithURL(NSURL.fileURLWithPath(src));
    }
    return document;
}
