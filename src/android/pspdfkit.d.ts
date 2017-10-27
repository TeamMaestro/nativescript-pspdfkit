import { Observable } from 'tns-core-modules/data/observable';
import * as common from '../common';
export declare class TNSPSPDFKit {
    private worker;
    private context;
    events: Observable;
    private config;
    constructor(licenseKey: string);
    private initWorker();
    display(documentName: string): void;
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
    config: any;
    private _pageFragment;
    private _fragment;
    private _layoutId;
    private worker;
    static toggleMemoryMode(): void;
    clearCache(): void;
    createNativeView(): android.widget.LinearLayout;
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
    formsEnabled: boolean;
    private init(documentName);
    private downloadDocument(src);
}
