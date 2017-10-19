# Nativescript PSPDFKit

[![npm](https://img.shields.io/npm/v/nativescript-pspdfkit.svg?maxAge=2592000?style=plastic)](https://www.npmjs.com/package/nativescript-pspdfkit)
[![npm](https://img.shields.io/npm/dt/nativescript-pspdfkit.svg?maxAge=2592000?style=plastic)](https://www.npmjs.com/package/nativescript-pspdfkit)

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
<pdfView:TNSPSPDFView scrollDirection="horizontal" scrubberBar="verticalRight" thumbnailBar="scrubber" spreadFitting="fill" src="~/example.pdf"/>
```

### Angular

```ts
import { TNSPSPDFView } from 'nativescript-pspdfkit';
import { registerElement } from "nativescript-angular/element-registry";
registerElement("TNSPSPDFView", () => require("nativescript-pspdfkit").TNSPSPDFView);
```

```html
<pdfView:TNSPSPDFView scrollDirection="horizontal" scrubberBar="verticalRight" thumbnailBar="scrubber" spreadFitting="fill" src="~/example.pdf"/>
```
## API

| Property | Default | Type | Required | Description  |
| --- | --- | --- | ---| ---|
| scrollDirection | vertical | string | <ul><li>- [ ] </li></ul> |
| scrubberBar | horizontal | string  | <ul><li>- [ ] </li></ul> |
| thumbnailBar | none | boolean | <ul><li>- [ ] </li></ul> | |
| spreadFitting | "adaptive" | string | <ul><li>- [ ] </li></ul> |
| thumbnailSize| Defaults to 88x125 on iPad and 53x75 on iPhone | string | <ul><li>- [ ] </li></ul> |
| pageMode| automatic | string | <ul><li>- [ ] </li></ul> |
| minZoom | 1 | number | <ul><li>- [ ] </li></ul> |
| maxZoom | 20 | number | <ul><li>- [ ] </li></ul> |
| searchResultZoom | 2 | number | <ul><li>- [ ] </li></ul> |
| formsEnabled | true | boolean | <ul><li>- [ ] </li></ul> |
| src | null | string | <ul><li>- [x] </li></ul> |

## Example Image
![Image](http://i.imgur.com/FM1ZxuV.png)