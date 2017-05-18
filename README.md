# Nativescript PSPDFKit
NativeScript implementation of PSPDFKit (https://pspdfkit.com/). Currently for iOS only, Android support is coming soon.

Please note that this plugin is not production ready. You will have to fork this project to get your licensed version POD installed correctly (currently). 

## Installation
`npm install nativescript-pspdfkit`

## Example Implementation
```ts
import {TNSPSPDFKit} from 'nativescript-pspdfkit';
let licenseKey = '';
let pspdfkit = new TNSPSPDFKit(licenseKey);
pspdfkit.display('~/example.pdf');
```

IMPORTANT: Make sure you include xmlns:pspdfkit="nativescript-pspdfkit" on the Page tag

```xml
<pdfView:TNSPSPDFView scrollDirection="horizontal" scrubberBar="verticalRight" thumbnailBar="scrubber" fitToWidth="true" src="~/example.pdf"/>
```

### Angular

```ts
import { TNSPSPDFView } from 'nativescript-pspdfkit';
import { registerElement } from "nativescript-angular/element-registry";
registerElement("TNSPSPDFView", () => require("nativescript-pspdfkit").TNSPSPDFView);
```

## Example Image
![Image](http://i.imgur.com/FM1ZxuV.png)
