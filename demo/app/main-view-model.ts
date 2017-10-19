import { Observable } from 'data/observable';
import { TNSPSPDFKit } from 'nativescript-pspdfkit';
import * as frame from 'ui/frame';
import * as dialogs from 'ui/dialogs';
var app = require('application');

export class HelloWorldModel extends Observable {
    public message: string;
    private pspdfkit: TNSPSPDFKit;
    private licenseKey: string;

    constructor() {
        super();

        if (app.ios) {
            this.licenseKey = "DFhJq8E9e15vLqvkK2S6gi10H6NwbE2SlYy4NhPyAzCd00KVSriFJQtXcht0YPkra0kauUyxZnjnDRgSyWM0K2XYYQjsGAOr/7VhrqezJxSsOEuJa/tKJvaFaIgnZeSwiFusuBJ6eQf2mWy9i+Xm/46RXu5Wih7UVD0zNavh4X2rFyECwhNWijkRiS5/ttgHzckjd8rqe56Ps/qGVIgb2IcgB/aULETas/u1gzHXtqwHN+1BNu8Y3wpuGyvYl1AsKHY6bS4Qmjkk/Fsk6mIgfJTiaYnPCi4aFz+4NuN3vAHxjyH7MTBBysZi7D3MZdwgvn8edPl9LBvZDhYk3g00BeKuVrUdToZqx4aZx7K260xMY9xAoP0QgY8I3KcxgDhm6trM2QC9HivCBZ/Fn43WV3MSZ5we+aZWOo7APgYmJmLdt4FD+HHvL5DqnMrDrvrU";
        }
        if (app.android) {
            this.licenseKey = 'WH434PCsmv_l7sCKpXfhRMownUPWmVibyIwk6MXNaBA0iRv_iACfquzNgm-qJcjgECglc-J-bfwS91t4_2sxWcpHKOSfGIAFhjNK3T9CQHnWftVNPdLpfGYwXamZinu_2m3uxciKsGce8OJ43O3Q7SbvYmVqGeWwRDLe5ouOgHXFwlDYmjYA5nX9fNL5Ex_myyd72sPoLpgkeUjQIuEA7RFO-rQ0DmozKd9N-LC65dbiwuuLfbdjKf0_ctuRVpKuPjLe9QICdrVHVQFfjhj9VQNnzFIVkZq7fJjhQ6qC_KaqiZlKzGsx13Cwssi3WzQf_uAQBzm4Ty6RX8LJ4FyiELxwvcsy_vUgoY61P2KuOce9s6KgJ4M9tpFsa0-oZBrbuvOnkK0vGovwb1kvr5Wb6iRGyLhhQzAuwztCyNPh-la-RQ0l277asDhM4HlCyhAX';
        }

        this.pspdfkit = new TNSPSPDFKit(this.licenseKey);
    }
    destroyViewer() {
        const pdf = frame.topmost().getViewById('pdf');
        //pdf.parent._removeView(pdf);
    }
    firstViewer() {
        frame.topmost().navigate('first');
    }
    formViewer() {
        frame.topmost().navigate('form');
    }
    secondViewer() {
        frame.topmost().navigate('second');
    }
    getName() {
        const pdf: any = frame.topmost().getViewById('pdf');
        dialogs.alert(pdf.getFormField('Given Name Text Box'));
    }

    fillForm() {
        const pdf: any = frame.topmost().getViewById('pdf');
        pdf.setFormFields({ "Given Name Text Box": { "value": "Osei" }, "Family Name Text Box": { "value": "Fortune" }, "House nr Text Box": { "value": "3" }, "Address 2 Text Box": { "value": "" }, "Postcode Text Box": { "value": "000000" }, "Country Combo Box": { "value": "Trinidad & Tobago" }, "Height Formatted Field": { "value": "180" }, "City Text Box": { "value": "Siparia" }, "Driving License CheckBox": { "value": "Yes" }, "Favourite Colour List Box": { "value": "White" }, "Language 1 Check Box": { "value": "Yes" }, "Language 2 Check Box": { "value": "Yes" }, "Language 3 Check Box": { "value": "Yes" }, "Language 4 Check Box": { "value": "Yes" }, "Language 5 Check Box": { "value": "Yes" }, "Gender List Box": { "value": "Woman" }, "Address 1 Text Box": { "value": "Happy Hill Quinam Road" } });
    }
    clearForm() {
        const pdf: any = frame.topmost().getViewById('pdf');
        pdf.setFormFields({ "Given Name Text Box": { "value": "" }, "Family Name Text Box": { "value": "" }, "House nr Text Box": { "value": "" }, "Address 2 Text Box": { "value": "" }, "Postcode Text Box": { "value": "" }, "Country Combo Box": { "value": "" }, "Height Formatted Field": { "value": "" }, "City Text Box": { "value": "" }, "Driving License CheckBox": { "value": "" }, "Favourite Colour List Box": { "value": "" }, "Language 1 Check Box": { "value": "" }, "Language 2 Check Box": { "value": "" }, "Language 3 Check Box": { "value": "" }, "Language 4 Check Box": { "value": "" }, "Language 5 Check Box": { "value": "" }, "Gender List Box": { "value": "" }, "Address 1 Text Box": { "value": "" } })
    }
}
