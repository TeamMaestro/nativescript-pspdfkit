import { Component, OnInit } from "@angular/core";

import { TNSPSPDFKit } from 'nativescript-pspdfkit';
import * as dialogs from 'tns-core-modules/ui/dialogs';
import { Page } from "tns-core-modules/ui/page";
import { RouterExtensions } from "nativescript-angular/router";
var app = require('application');

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./items.component.html",
})
export class ItemsComponent {
    private pspdfkit: TNSPSPDFKit;
    private licenseKey: string;

    constructor(private page: Page, private router: RouterExtensions) {
        if (app.ios) {
            this.licenseKey = "DFhJq8E9e15vLqvkK2S6gi10H6NwbE2SlYy4NhPyAzCd00KVSriFJQtXcht0YPkra0kauUyxZnjnDRgSyWM0K2XYYQjsGAOr/7VhrqezJxSsOEuJa/tKJvaFaIgnZeSwiFusuBJ6eQf2mWy9i+Xm/46RXu5Wih7UVD0zNavh4X2rFyECwhNWijkRiS5/ttgHzckjd8rqe56Ps/qGVIgb2IcgB/aULETas/u1gzHXtqwHN+1BNu8Y3wpuGyvYl1AsKHY6bS4Qmjkk/Fsk6mIgfJTiaYnPCi4aFz+4NuN3vAHxjyH7MTBBysZi7D3MZdwgvn8edPl9LBvZDhYk3g00BeKuVrUdToZqx4aZx7K260xMY9xAoP0QgY8I3KcxgDhm6trM2QC9HivCBZ/Fn43WV3MSZ5we+aZWOo7APgYmJmLdt4FD+HHvL5DqnMrDrvrU";
        }
        if (app.android) {
            this.licenseKey = 'WH434PCsmv_l7sCKpXfhRMownUPWmVibyIwk6MXNaBA0iRv_iACfquzNgm-qJcjgECglc-J-bfwS91t4_2sxWcpHKOSfGIAFhjNK3T9CQHnWftVNPdLpfGYwXamZinu_2m3uxciKsGce8OJ43O3Q7SbvYmVqGeWwRDLe5ouOgHXFwlDYmjYA5nX9fNL5Ex_myyd72sPoLpgkeUjQIuEA7RFO-rQ0DmozKd9N-LC65dbiwuuLfbdjKf0_ctuRVpKuPjLe9QICdrVHVQFfjhj9VQNnzFIVkZq7fJjhQ6qC_KaqiZlKzGsx13Cwssi3WzQf_uAQBzm4Ty6RX8LJ4FyiELxwvcsy_vUgoY61P2KuOce9s6KgJ4M9tpFsa0-oZBrbuvOnkK0vGovwb1kvr5Wb6iRGyLhhQzAuwztCyNPh-la-RQ0l277asDhM4HlCyhAX';
        }

        this.pspdfkit = new TNSPSPDFKit(this.licenseKey);
    }

    destroyViewer() {
        const pdf = this.page.getViewById('pdf');
    }
    firstViewer(event) {
        console.log('nav')
        this.router.navigate(['/item', 1]);
    }
    formViewer(event) {
        this.router.navigate(['/item', 3]);
    }
    secondViewer(event) {
        this.router.navigate(['/item', 2]);
    }
}