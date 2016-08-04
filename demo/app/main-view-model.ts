import {Observable} from 'data/observable';
import {TNSPSPDFKit} from 'nativescript-pspdfkit';

var app = require('application');

export class HelloWorldModel extends Observable {
    public message: string;
    private pspdfkit: TNSPSPDFKit;
    private licenseKey: string = 'UFftF6AAASrcEEz7OIoUeu5b4oeVhEkkp2zLT/ZVGA/3jBJsKmERHG7ujW7QEWIvQ96iTAIwQ0y/iL+AGIIOrTp3dxgozUUvSnvuDct3/b/dMXvI0AGJACfNmnN/am/kzpVOvx2PjtClBgjUfbaqMa29p4292a1lRQlTKHHET/FyJugz94FLZWPtyZksjWxsDghfH2vxEJl76Rt1H0zt/BNW8iljyNAOO3RzKPI7nm8XDTxGoAZrexSk5Rq2M9ARM9ld3zMt5wiIXWVe0MvO1yh39d/WUqCXfqQa/9rmvSBbGebdcc889o9IcuA/tjx2Olv1mKC7D54wMAGjMpfQqbuYR9qjCu8bTYvPZ6CJj4lhJUChHUb1OQVr/+JaXTQy9lxcF3e4lohNVPmPZmnml9LL/tlaviggxvGuTmXVNo/sRPyPH/SDj/K6tHPyIMud';

    constructor() {
        super();

        if(app.ios) {
            this.licenseKey = 'UFftF6AAASrcEEz7OIoUeu5b4oeVhEkkp2zLT/ZVGA/3jBJsKmERHG7ujW7QEWIvQ96iTAIwQ0y/iL+AGIIOrTp3dxgozUUvSnvuDct3/b/dMXvI0AGJACfNmnN/am/kzpVOvx2PjtClBgjUfbaqMa29p4292a1lRQlTKHHET/FyJugz94FLZWPtyZksjWxsDghfH2vxEJl76Rt1H0zt/BNW8iljyNAOO3RzKPI7nm8XDTxGoAZrexSk5Rq2M9ARM9ld3zMt5wiIXWVe0MvO1yh39d/WUqCXfqQa/9rmvSBbGebdcc889o9IcuA/tjx2Olv1mKC7D54wMAGjMpfQqbuYR9qjCu8bTYvPZ6CJj4lhJUChHUb1OQVr/+JaXTQy9lxcF3e4lohNVPmPZmnml9LL/tlaviggxvGuTmXVNo/sRPyPH/SDj/K6tHPyIMud';
        }
        if(app.android) {
            this.licenseKey = 'd04Z1gawu-vIGgDOI59iXoJ8_cAj5YIzybrgDFcxelVd5Xa95tPE38TeUdE3Y0PjYUrtUc2lv71sSJdtQt7xsf4o-aTXpUDjpyK-HYrSDJ7kb-NoX5xYAL9I_Dcg2IrA2FiMDWc-pS7530C4uOyHzV06UlFYvfC4j35_C3r1j-VjRyKm5nLxEvyk7O26voFFoDQ9MdCDVnc7yAsmr1VT4Pk4Xn4usHuj0QKTm4lIURu_OurwljbaZaGNG4rr3b9rxXTLbxBbHsznqB2NfIY3xdpxEXiWtykacX7-voQikzfzIdWUPogwNywPIYvTwCZNaY6n2Hv2Fn5jLhT5iljHhxVGz9XAFbS2ro8bwE6tgoWYKPAVLbJI04qWSz18Wm7s-rqua7f0D2-WnnosdHSGV58IvI1bFEZgA7UDZqmF7cLlfz0ax1ZcP0wC-cTCHpKX';
        }

        this.pspdfkit = new TNSPSPDFKit(this.licenseKey);
        this.pspdfkit.display('example.pdf');
    }

}