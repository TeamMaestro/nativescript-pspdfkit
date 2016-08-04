import {topmost} from 'ui/frame';

declare var PSPDFKit: any,
            PSPDFDocument: any,
            PSPDFViewController: any,
            UINavigationController: any;

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
        let fileUrl = NSBundle.mainBundle().bundleURL.URLByAppendingPathComponent(documentName);
        let document = PSPDFDocument.documentWithURL(fileUrl);
        let controller = new PSPDFViewController(document);
        let navCtrl = UINavigationController.alloc().initWithRootViewController(controller);

        topmost().currentPage.ios.presentViewControllerAnimatedCompletion(navCtrl, true, null);
    }
}