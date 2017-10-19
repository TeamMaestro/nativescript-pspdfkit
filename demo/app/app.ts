import "./bundle-config";
import * as application from 'tns-core-modules/application';
import { TNSPSPDFView } from 'nativescript-pspdfkit';
TNSPSPDFView.toggleMemoryMode();
application.start({ moduleName: "main-page" });
