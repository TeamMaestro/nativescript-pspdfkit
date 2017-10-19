import * as app from 'tns-core-modules/application';

declare var com: any;

const PSPDFKit = com.pspdfkit.PSPDFKit;
const PSPDFDocument = com.pspdfkit.document.PSPDFDocument;
const PSPDFActivityConfiguration = com.pspdfkit.configuration.activity;
const PSPDFActivityConfigurationBuilder = com.pspdfkit.configuration.PSPDFConfiguration.Builder;
const Uri = android.net.Uri;

export class TNSPSPDFKit {

    context: any = app.android.context;;

    constructor(licenseKey: string) {
        PSPDFKit.initialize(this.context, licenseKey);
    }

    display(documentName: string) {
        if(PSPDFKit.isInitialized()) {
            PSPDFKit.openDocument(app.android.context, Uri.parse('file:///android_asset/app/' + documentName));
        }
    }

}