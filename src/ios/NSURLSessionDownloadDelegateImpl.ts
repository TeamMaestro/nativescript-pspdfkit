var main_queue = dispatch_get_current_queue();
import * as fs from "file-system";
import * as utils from "utils/utils";
export class NSURLSessionDownloadDelegateImpl extends NSObject implements NSURLSessionDownloadDelegate {
    public static ObjCProtocols = [NSURLSessionDownloadDelegate];
    private _path: string;
    private _progress: Function;
    private _completion: Function;
    public static initWithPath(owner: WeakRef<any>, path) {
        let nsUrlDel = new NSURLSessionDownloadDelegateImpl();
        nsUrlDel._path = path;
        return nsUrlDel;
    }
    public static initWithPathProgress(path, progress) {
        let nsUrlDel = new NSURLSessionDownloadDelegateImpl();
        nsUrlDel._path = path;
        nsUrlDel._progress = progress;
        return nsUrlDel;
    }
    public static initWithPathProgressCompletion(path, progress, completion) {
        let nsUrlDel = new NSURLSessionDownloadDelegateImpl();
        nsUrlDel._path = path;
        nsUrlDel._progress = progress;
        nsUrlDel._completion = completion;
        return nsUrlDel;
    }

    // NSURLSessionDownloadDelegate
    URLSessionDownloadTaskDidResumeAtOffsetExpectedTotalBytes(urlSession, downloadTask, didResumeAtOffset, expectedTotalBytes) {
    }
    URLSessionDownloadTaskDidWriteDataTotalBytesWrittenTotalBytesExpectedToWrite(urlSession, downloadTask, didWriteData, totalBytesWritten, totalBytesExpectedToWrite) {
        dispatch_async(main_queue, () => {
            var dl_progress = Math.floor(Math.round((totalBytesWritten * 100) / totalBytesExpectedToWrite));
            if (typeof this._progress === "function") {
                this._progress({ progress: dl_progress });
            }
        })
    }
    URLSessionDownloadTaskDidFinishDownloadingToURL(urlSession, downloadTask, location: NSURL) {
        if (typeof this._completion === "function") {
            this._completion(true,location.path);
        }
        /*
        const fileManager = utils.ios.getter(NSFileManager, NSFileManager.defaultManager);
        if (fileManager.fileExistsAtPath(this._path)) {
            try {
                fileManager.removeItemAtPathError(this._path);
                const success = fileManager.moveItemAtPathToPathError(location.path, this._path);
            } catch (ex) {
                console.log(ex);
                throw new Error("Failed")
            }
        } else {
            try {
                //fs.Folder.fromPath(this._path);
                const success = fileManager.moveItemAtPathToPathError(location.path, this._path);
            } catch (ex) {
                console.log(ex);
                throw new Error("Failed")
            }
        }
        */

    }

}