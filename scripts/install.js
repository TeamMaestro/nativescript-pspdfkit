#!/usr/bin/env node

var fs = require('fs');
var prompt = require('prompt');

console.log('NativeScript PSPDFKit Plugin Installation');

prompt.start();

prompt.get([{
    name: 'ios_token',
    description: 'Enter iOS POD token',
    required: true
}, {
    name: 'android_token',
    description: 'Enter android gradle token',
    required: true
}, {
    name: 'android_license',
    description: '(Optional) Enter Android license key',
    required: false
}], function(err, result) {
    if(err) {
        return console.log(err);
    }
    if(result.ios_token) {
        writeiOSPOD(result.ios_token.trim());
    }
    if(result.android_token) {
        writeAndroidGradle(result.android_token.trim(), result.android_license);
    }
});

function writeiOSPOD(token) {
    fs.writeFile('./platforms/ios/Podfile', 'pod \'PSPDFKit\', podspec: \'https://customers.pspdfkit.com/cocoapods/' + token + '/latest.podspec\'', function(err) {
        if(err) {
            return console.log(err);
        }
        console.log('PSPDFKit iOS Podfile generated successfully.');
    });
}
function writeAndroidGradle(token, license) {
    fs.writeFile('./platforms/android/include.gradle', `android {
        productFlavors {
            "nativescript-pspdfkit" {
                dimension "nativescript-pspdfkit"
            }
        }
        defaultConfig {
            buildConfigField 'String', 'PSPDFKIT_LICENSE_KEY', "\\"` + license + `\\""
        }
    }

    allprojects {
        repositories {
            maven {
                url 'https://customers.pspdfkit.com/maven/'

                credentials {
                    username 'pspdfkit'
                    password '` + token + `'
                }
            }
        }
    }

    dependencies {
        compile 'com.pspdfkit:pspdfkit-demo:2.4.2'
    }`);
}