import * as application from 'application';
import { TNSPSPDFView } from 'nativescript-pspdfkit';
TNSPSPDFView.toggleMemoryMode();
application.start({ moduleName: 'main-page' });