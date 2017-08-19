import { View } from "tns-core-modules/ui/core/view";
export declare const PROGRESS_EVENT = "progress";
export declare class TNSPSPDFKit {
    private appDelegate;
    constructor(licenseKey: string);
    display(documentName: string): void;
}
export declare class TNSPSPDFView extends View {
    progress: number;
    private _downloadTask;
    src: string;
    nativeView: UIView;
    controller: PSPDFViewController;
    config: PSPDFConfigurationBuilder;
    private _progress;
    private _file;
    private _cache;
    constructor();
    static toggleMemoryMode(): void;
    createNativeView(): UIView;
    initNativeView(): void;
    clearCache(): void;
    disposeNativeView(): void;
    onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void;
    backgroundColor: string;
    cache: any;
    getAnnotationField(name: string): any;
    getFormField(name: string): any;
    getAllFormFields(): Object;
    setFormField(name: string, value: any): void;
    undoEnabled: boolean;
    setFormFields(obj: Object): void;
    backgroundSaving: boolean;
    formsEnabled: boolean;
    scrollDirection: string;
    fitToWidth: boolean;
    thumbnailBar: string;
    scrubberBar: string;
    thumbnailSize: string;
    enableSmallDocumentsZoom: boolean;
    maxZoom: number;
    minZoom: number;
    enableFormElementsZoom: boolean;
    searchResultZoom: number;
    pageMode: any;
    downloadDocument(src: string): void;
}
