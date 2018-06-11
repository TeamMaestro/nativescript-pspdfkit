import { Observable } from 'tns-core-modules/data/observable';
import * as common from '../common';
export { PageMode, documentTitleProperty } from '../common';
export interface TNSPSPDFKitOptions {
    scrollDirection?: 'vertical' | 'horizontal';
    backgroundColor?: string;
    spreadFitting?: 'adaptive' | 'fit' | 'fill';
    thumbnailBar?: 'scrollable' | 'none' | 'scrubber';
    scrubberBar?: 'verticalRight' | 'verticalLeft';
    thumbnailSize?: string;
    pageMode?: 'automatic' | 'single' | 'double';
    minZoom?: number;
    maxZoom?: number;
}
export declare class TNSPSPDFKit {
    private worker;
    private context;
    events: Observable;
    private config;
    constructor(licenseKey: string);
    private initWorker();
    convert(src: string, outPut?: string): Promise<any>;
    display(documentName: string, options?: TNSPSPDFKitOptions): void;
    private downloadDocument(src);
}
export declare class TNSPSPDFView extends common.TNSPSPDFView {
    _scrollDirection: string;
    _searchResultZoomScale: number;
    _formElementZoomEnabled: boolean;
    _maximumZoomScale: number;
    _minimumZoomScale: number;
    _pageMode: any;
    _backgroundColor: string;
    _formsEnabled: boolean;
    _spreadFitting: any;
    _thumbnailBar: any;
    config: any;
    private _pageFragment;
    private _fragment;
    private _layoutId;
    private worker;
    private _initialLoad;
    static toggleMemoryMode(): void;
    clearCache(): void;
    createNativeView(): android.widget.LinearLayout;
    spreadFitting: string;
    getPageIndex(): number;
    setPageIndex(index: number, animated: boolean): void;
    getAnnotationField(name: string): void;
    getFormField(name: string): any;
    getAllFormFields(): Object;
    setFormField(name: string, value: any): void;
    setFormFields(obj: Object): void;
    scrollDirection: string;
    maxZoom: number;
    minZoom: number;
    enableFormElementsZoom: boolean;
    searchResultZoom: number;
    pageMode: any;
    backgroundColor: string;
    initNativeView(): void;
    disposeNativeView(): void;
    formsEnabled: boolean;
    private init(documentName);
    onLoaded(): void;
    onUnloaded(): void;
    private downloadDocument(src);
}
