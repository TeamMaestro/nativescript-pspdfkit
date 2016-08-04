#!/usr/bin/env node

var fs = require('fs');
var prompt = require('prompt');

var directory = {
    ios: './platforms/ios',
    android: './platforms/android'
};

console.log('NativeScript PSPDFKit Plugin Installation');

prompt.start();

prompt.get({
    name: 'using_ios',
    description: 'Are you using iOS (y/n)',
    default: 'Y'
}, function(err, result) {
    if(err) {
        return console.log(err);
    }
    if(result.using_ios && result.using_ios.toLowerCase() === 'y') {
        promptiOSDialog();
    }
    else {
        usingAndroidPrompt();
    }
});

function usingAndroidPrompt() {
    prompt.get({
        name: 'using_android',
        description: 'Are you using Android (y/n)',
        default: 'Y'
    }, function(err, result) {
        if(err) {
            return console.log(err);
        }
        if(result.using_android && result.using_android.toLowerCase() === 'y') {
            promptAndroidDialog();
        }
    });
}

function promptAndroidDialog() {
    prompt.get([{
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
        if(result.android_token) {
            writeAndroidGradle(result.android_token.trim(), result.android_license);
        }
    });
}

function promptiOSDialog() {
    prompt.get({
        name: 'ios_token',
        description: 'Enter iOS POD token',
        required: true
    }, function(err, result) {
        if(err) {
            return console.log(err);
        }
        if(result.ios_token) {
            writeiOSPOD(result.ios_token);
        }
        usingAndroidPrompt();
    });
}

function writeiOSPOD(token) {
    if(!fs.existsSync(directory.ios)) {
        fs.mkdirSync(directory.ios);
    }
    fs.writeFile(directory.ios + '/Podfile', 'pod \'PSPDFKit\', podspec: \'https://customers.pspdfkit.com/cocoapods/' + token + '/latest.podspec\'', function(err) {
        if(err) {
            return console.log(err);
        }
    });
}
function writeAndroidGradle(token, license) {
    if(!fs.existsSync(directory.android)) {
        fs.mkdirSync(directory.android);
    }
    fs.writeFile(directory.android + '/include.gradle', `android {
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