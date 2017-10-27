import * as common from '../common';
import { Observable } from 'tns-core-modules/data/observable';
export declare const PROGRESS_EVENT = "progress";
export declare class TNSPSPDFKit {
    _downloadTask: any;
    private _progress;
    private appDelegate;
    events: Observable;
    constructor(licenseKey: string);
    display(documentName: string): void;
    private downloadDocument(src);
}
export declare class TNSPSPDFView extends common.TNSPSPDFView {
    progress: number;
    private _downloadTask;
    nativeView: UIView;
    controller: any;
    config: any;
    private _progress;
    private _file;
    constructor();
    static toggleMemoryMode(): void;
    createNativeView(): UIView;
    initNativeView(): void;
    clearCache(): void;
    disposeNativeView(): void;
    onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void;
    backgroundColor: string;
    getAnnotationField(name: string): any;
    getFormField(name: string): any;
    getAllFormFields(): Object;
    setFormField(name: string, value: any): void;
    undoEnabled: boolean;
    setFormFields(obj: Object): void;
    backgroundSaving: boolean;
    formsEnabled: boolean;
    scrollDirection: string;
    spreadFitting: string;
    thumbnailBar: string;
    scrubberBar: string;
    thumbnailSize: string;
    maxZoom: number;
    minZoom: number;
    enableFormElementsZoom: boolean;
    searchResultZoom: number;
    pageMode: any;
    downloadDocument(src: string): void;
}
