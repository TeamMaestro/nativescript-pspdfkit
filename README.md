# Nativescript PSPDFKit
NativeScript implementation of PSPDFKit (https://pspdfkit.com/). Currently for iOS only, Android support is coming soon.

Please note that this plugin is not production ready. You will have to fork this project to get your licensed version POD installed correctly (currently). 

## Installation
`npm install nativescript-pspdfkit`

## Example Implementation
```
import {TNSPSPDFKit} from 'nativescript-pspdfkit';

let licenseKey = '';
let pspdfkit = new TNSPSPDFKit(licenseKey);
pspdfkit.display('example.pdf');
```

You will need to store the files in a local path, currently under `app/App_Resources/iOS`.

## Example Image
![Image](http://i.imgur.com/FM1ZxuV.png)
