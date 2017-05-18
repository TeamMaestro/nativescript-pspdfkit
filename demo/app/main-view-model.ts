import {Observable} from 'data/observable';
import {TNSPSPDFKit} from 'nativescript-pspdfkit';

var app = require('application');

export class HelloWorldModel extends Observable {
    public message: string;
    private pspdfkit: TNSPSPDFKit;
    private licenseKey: string;

    constructor() {
        super();

        if(app.ios) {
            this.licenseKey = "Zw/2zlrEdeA/A43T8SPR8bYVwMZ1GgXc3RzCRTSuTc91YpqDNcMcIc5hCG/OD3Gsok9yjfSf0BEx8QRnPpk59XDUIwhAK/ye3/abUyexgqG1QS+JVd4sf5X+8UOeqg1PTLIEJa8CS3LAUQneC8anyL/QVY+IG0ODnSIoXr+8cthEr/Sa4CGtifs1VP+hFCQMS+4r0AKuwXPEOcBPGdsXSXOIMe9XSqNRDrUVoc7g9/8Sw4V4aykmQdrkem/tsvvvm0SbEcUSNMs1F0QpOiM9DEGw4G/83TyjKNkh+446z50dG3u7j+JWhPv6MP7AmQ3lQOAV6Svh5oL0sQ1dpzNk2UmhrUqJ7hZGPJXPO4imGqcquGfH6uvoTgSUMZVp+Auck/EkkAbKD6yeFGko8VAi968v2PhcRX65Ud/O6jIV2AjfqbrHqxxxlzwdnD2vwuAq";
        }
        if(app.android) {
            this.licenseKey = 'd04Z1gawu-vIGgDOI59iXoJ8_cAj5YIzybrgDFcxelVd5Xa95tPE38TeUdE3Y0PjYUrtUc2lv71sSJdtQt7xsf4o-aTXpUDjpyK-HYrSDJ7kb-NoX5xYAL9I_Dcg2IrA2FiMDWc-pS7530C4uOyHzV06UlFYvfC4j35_C3r1j-VjRyKm5nLxEvyk7O26voFFoDQ9MdCDVnc7yAsmr1VT4Pk4Xn4usHuj0QKTm4lIURu_OurwljbaZaGNG4rr3b9rxXTLbxBbHsznqB2NfIY3xdpxEXiWtykacX7-voQikzfzIdWUPogwNywPIYvTwCZNaY6n2Hv2Fn5jLhT5iljHhxVGz9XAFbS2ro8bwE6tgoWYKPAVLbJI04qWSz18Wm7s-rqua7f0D2-WnnosdHSGV58IvI1bFEZgA7UDZqmF7cLlfz0ax1ZcP0wC-cTCHpKX';
        }

        this.pspdfkit = new TNSPSPDFKit(this.licenseKey);
       // this.pspdfkit.display('~/example.pdf');
    }

}