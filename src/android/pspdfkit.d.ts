import { View } from 'ui/core/view';
export declare class TNSPSPDFKit {
    _ctx: any;
    _config: any;
    constructor(licenseKey: string, context?: any);
    display(documentName: string): void;
}
export declare class TNSPSPDFKitActivity {
    _ctx: any;
    _config: any;
    constructor(licenseKey: string, context?: any);
    display(documentName: string): void;
}
export declare class PDFViewer extends View {
    _android: android.widget.ImageView;
    _src: string;
    _androidViewId: any;
    static onCompletedEvent: string;
    static onErrorEvent: string;
    static onNextEvent: string;
    android: android.widget.ImageView;
    src: string;
    _createUI(): void;
    loadPDF(_content: any): void;
}
