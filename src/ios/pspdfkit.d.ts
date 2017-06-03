import { View } from "tns-core-modules/ui/core/view";
export declare class TNSPSPDFKit {
    private appDelegate;
    constructor(licenseKey: string);
    display(documentName: string): void;
}
export declare class TNSPSPDFView extends View {
    src: string;
    nativeView: UIView;
    controller: PSPDFViewController;
    config: PSPDFConfigurationBuilder;
    private _worker;
    constructor();
    createNativeView(): UIView;
    initNativeView(): void;
    disposeNativeView(): void;
    onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void;
    scrollDirection: string;
    fitToWidth: boolean;
    thumbnailBar: string;
    scrubberBar: string;
    thumbnailSize: string;
}
