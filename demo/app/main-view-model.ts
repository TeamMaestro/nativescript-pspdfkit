import { Observable } from 'tns-core-modules/data/observable';
import { TNSPSPDFKit } from 'nativescript-pspdfkit';
import * as frame from 'tns-core-modules/ui/frame';
import * as dialogs from 'tns-core-modules/ui/dialogs';
import * as app from 'tns-core-modules/application';

export class HelloWorldModel extends Observable {
  public message: string;
  private pspdfkit: TNSPSPDFKit;
  private licenseKey: string;
  selectedIndex: number = 0;
  constructor() {
    super();

    if (app.ios) {
      this.licenseKey =
        'lWADJTw/qh+L4wMOibqKrg3UM/9VVbcFHbMAE8sX0uQtl5gMo9je6VLG77Dd+NQQgpgSubFsVKjMb93jGvl6aLwxFm4CUQiJe7AAI3UjyZJmltxAbezy0sqKbw80wNPeM83Div1YyJmiWYopMdLhODPJcstr1PVyERSw7iosQLF7iXJ98iQNZbK0DEGmbXIdOmeCVeNubOjEkxtZfeqSET5p3CpA0txIrFwr0OAjUcKBan3vZI4KcQaiAtwbcRKxEiTfhCy/jve+QdouoAIO/cduUQwrw2GwplosadI+zWF9PKMsUYSbojeieS2evmeSy4zQCmRqrsHP/m3bJxBdyqUMWqaFCidqf+NzHNdnyh9PnZn/qNAaRdOYLWkK7FaFqF1rXg57Ajq7UYt0UA2OGGpZGVPqh5kkZQ5nteHHlqnmDj5nsXSC4GvM8sv+ONwH';
    }
    if (app.android) {
      this.licenseKey =
        'WH434PCsmv_l7sCKpXfhRMownUPWmVibyIwk6MXNaBA0iRv_iACfquzNgm-qJcjgECglc-J-bfwS91t4_2sxWcpHKOSfGIAFhjNK3T9CQHnWftVNPdLpfGYwXamZinu_2m3uxciKsGce8OJ43O3Q7SbvYmVqGeWwRDLe5ouOgHXFwlDYmjYA5nX9fNL5Ex_myyd72sPoLpgkeUjQIuEA7RFO-rQ0DmozKd9N-LC65dbiwuuLfbdjKf0_ctuRVpKuPjLe9QICdrVHVQFfjhj9VQNnzFIVkZq7fJjhQ6qC_KaqiZlKzGsx13Cwssi3WzQf_uAQBzm4Ty6RX8LJ4FyiELxwvcsy_vUgoY61P2KuOce9s6KgJ4M9tpFsa0-oZBrbuvOnkK0vGovwb1kvr5Wb6iRGyLhhQzAuwztCyNPh-la-RQ0l277asDhM4HlCyhAX';
    }
    this.pspdfkit = new TNSPSPDFKit(this.licenseKey);
  }
  showFullScreen() {
    this.pspdfkit.display(
      'https://www.ets.org/Media/Tests/GRE/pdf/gre_research_validity_data.pdf',
      { backgroundColor: 'red', scrollDirection: 'vertical' }
    );
  }
  destroyViewer() {
    const pdf = frame.topmost().getViewById('pdf');
  }
  firstViewer() {
    frame.topmost().navigate('first');
  }
  formViewer() {
    frame.topmost().navigate('form');
  }
  webContentViewer() {
    frame.topmost().navigate('webcontent');
  }
  secondViewer() {
    frame.topmost().navigate('second');
  }

  getAllFormFields() {
    const pdf: any = frame.topmost().getViewById('pdf');
    console.dir(pdf.getAllFormFields());
  }
  getName() {
    const pdf: any = frame.topmost().getViewById('pdf');
    dialogs.alert(pdf.getFormField('Given Name Text Box') || 'Nada');
  }

  fillForm() {
    const pdf: any = frame.topmost().getViewById('pdf');
    if (pdf) {
      pdf.setFormFields({
        'Given Name Text Box': { value: 'Osei' },
        'Family Name Text Box': { value: 'Fortune' },
        'House nr Text Box': { value: '3' },
        'Address 2 Text Box': { value: '' },
        'Postcode Text Box': { value: '000000' },
        'Country Combo Box': { value: 'Trinidad & Tobago' },
        'Height Formatted Field': { value: '180' },
        'City Text Box': { value: 'Siparia' },
        'Driving License CheckBox': { value: true },
        'Favourite Colour List Box': { value: 'White' },
        'Language 1 Check Box': { value: true },
        'Language 2 Check Box': { value: true },
        'Language 3 Check Box': { value: true },
        'Language 4 Check Box': { value: true },
        'Language 5 Check Box': { value: true },
        'Gender List Box': { value: 'Woman' },
        'Address 1 Text Box': { value: 'Happy Hill Quinam Road' }
      });
    }
  }
  clearForm() {
    const pdf: any = frame.topmost().getViewById('pdf');
    pdf.setFormFields({
      'Given Name Text Box': { value: '' },
      'Family Name Text Box': { value: '' },
      'House nr Text Box': { value: '' },
      'Address 2 Text Box': { value: '' },
      'Postcode Text Box': { value: '' },
      'Country Combo Box': { value: '' },
      'Height Formatted Field': { value: '' },
      'City Text Box': { value: '' },
      'Driving License CheckBox': { value: '' },
      'Favourite Colour List Box': { value: '' },
      'Language 1 Check Box': { value: '' },
      'Language 2 Check Box': { value: '' },
      'Language 3 Check Box': { value: '' },
      'Language 4 Check Box': { value: '' },
      'Language 5 Check Box': { value: '' },
      'Gender List Box': { value: '' },
      'Address 1 Text Box': { value: '' }
    });
  }

  loadWebContent() {
    this.pspdfkit
      .convert(
        'https://ol.baker.edu/webapps/dur-browserCheck-bb_bb60/samples/sample.xlsx'
      )
      .then(file => {
        this.set('webcontent', file);
      })
      .catch(error => {
        console.log(error);
      });
  }
  loadHtmlString() {
    this.pspdfkit
      .convert(
        `<html>
<head>
<title>       </title>
<style type="text/css">
<!--
h1	{text-align:center;
	font-family:Arial, Helvetica, Sans-Serif;
	}

p	{text-indent:20px;
	}
-->
</style>
</head>
<body bgcolor = "#ffffcc" text = "#000000">
<h1>Hello, World!</h1>

<p>You can modify the text in the box to the left any way you like, and
then click the "Show Page" button below the box to display the
result here. Go ahead and do this as often and as long as you like.</p>

<p>You can also use this page to test your Javascript functions and local
style declarations. Everything you do will be handled entirely by your own
browser; nothing you type into the text box will be sent back to the
server.</p>

<p>When you are satisfied with your page, you can select all text in the
textarea and copy it to a new text file, with an extension of
either <b>.htm</b> or <b>.html</b>, depending on your Operating System.
This file can then be moved to your Web server.</p>

</body>
</html>
	`
      )
      .then(file => {
        this.set('webcontent', file);
      })
      .catch(error => {
        console.log(error);
      });
  }
}
