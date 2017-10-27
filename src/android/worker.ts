import * as platform from 'tns-core-modules/platform';

import File = java.io.File;
import URI = java.net.URI;
import URL = java.net.URL;
import HttpURLConnection = java.net.HttpURLConnection;

function downloadFile(msg) {
    const path = msg.data.path;
    const link = msg.data.url;
    let output;
    let input;
    let progress = 0;
    let previous = 0;
    try {
        let count = 0;
        const uri: URI = new URI(link);
        const url: URL = uri.toURL();
        const connection: HttpURLConnection = <HttpURLConnection>url.openConnection();
        const file = new File(path);
        const fileSize = connection.getContentLength();
        const data = Array.create('byte', 4096);
        let total = 0;
        const responseCode = connection.getResponseCode();
        if (responseCode === 200) {
            input = new java.io.BufferedInputStream(url.openStream());
            output = new java.io.FileOutputStream(file);
            (<any>global).postMessage({
                status: 1,
            });
            (<any>global).postMessage({ progress });
            while ((count = input.read(data)) != -1) {
                total += count;
                progress = Math.floor((total * 100) / fileSize);
                if (progress > previous) {
                    (<any>global).postMessage({ progress });
                    previous = progress;
                }
                output.write(data, 0, count);
            }
            if ((count = input.read(data)) === -1) {
                (<any>global).global.postMessage({
                    status: 2,
                    filePath: path
                });
                output.flush();
                output.close();
                input.close();
            }
        } else {
            (<any>global).postMessage({ type: 'error', code: responseCode });
        }
    } catch (e) {
        (<any>global).postMessage({ type: 'error', code: e });
    }
}

(<any>global).onmessage = (msg: MessageEvent) => {
    switch (msg.data.action) {
        case 'download':
            downloadFile(msg);
            break;
    }
};