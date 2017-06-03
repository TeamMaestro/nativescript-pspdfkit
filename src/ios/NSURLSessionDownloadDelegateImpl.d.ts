export declare class NSURLSessionDownloadDelegateImpl extends NSObject implements NSURLSessionDownloadDelegate {
    static ObjCProtocols: {
        prototype: NSURLSessionDownloadDelegate;
    }[];
    private _path;
    private _progress;
    private _completion;
    static initWithPath(owner: WeakRef<any>, path: any): NSURLSessionDownloadDelegateImpl;
    static initWithPathProgress(path: any, progress: any): NSURLSessionDownloadDelegateImpl;
    static initWithPathProgressCompletion(path: any, progress: any, completion: any): NSURLSessionDownloadDelegateImpl;
    URLSessionDownloadTaskDidResumeAtOffsetExpectedTotalBytes(urlSession: any, downloadTask: any, didResumeAtOffset: any, expectedTotalBytes: any): void;
    URLSessionDownloadTaskDidWriteDataTotalBytesWrittenTotalBytesExpectedToWrite(urlSession: any, downloadTask: any, didWriteData: any, totalBytesWritten: any, totalBytesExpectedToWrite: any): void;
    URLSessionDownloadTaskDidFinishDownloadingToURL(urlSession: any, downloadTask: any, location: NSURL): void;
}
