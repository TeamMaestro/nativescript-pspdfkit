
declare function NSStringFromPSPDFGalleryItemContentState(state: PSPDFGalleryItemContentState): string;

declare class PSPDFAESCryptoDataProvider extends NSObject implements PSPDFDataProvider {

	static alloc(): PSPDFAESCryptoDataProvider; // inherited from NSObject

	static new(): PSPDFAESCryptoDataProvider; // inherited from NSObject

	readonly UID: string; // inherited from PSPDFDataProvider

	readonly additionalOperationsSupported: PSPDFDataProviderAdditionalOperations; // inherited from PSPDFDataProvider

	readonly data: NSData; // inherited from PSPDFDataProvider

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly size: number; // inherited from PSPDFDataProvider

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { legacyFileFormatURL: NSURL; passphraseProvider: () => string; });

	constructor(o: { URL: NSURL; binaryKeyProvider: () => NSData; });

	constructor(o: { URL: NSURL; passphraseDataProvider: () => NSData; salt: NSData; rounds: number; });

	constructor(o: { URL: NSURL; passphraseProvider: () => string; });

	constructor(o: { URL: NSURL; passphraseProvider: () => string; salt: string; rounds: number; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	createDataSinkWithOptionsError(options: PSPDFDataSinkOptions): PSPDFDataSink;

	deleteDataWithError(): boolean;

	encodeWithCoder(aCoder: NSCoder): void;

	initWithCoder(aDecoder: NSCoder): this;

	initWithLegacyFileFormatURLPassphraseProvider(URL: NSURL, passphraseProvider: () => string): this;

	initWithURLBinaryKeyProvider(URL: NSURL, binaryKeyProvider: () => NSData): this;

	initWithURLPassphraseDataProviderSaltRounds(URL: NSURL, passphraseDataProvider: () => NSData, saltData: NSData, rounds: number): this;

	initWithURLPassphraseProvider(URL: NSURL, passphraseProvider: () => string): this;

	initWithURLPassphraseProviderSaltRounds(URL: NSURL, passphraseProvider: () => string, salt: string, rounds: number): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	readDataWithSizeAtOffset(size: number, offset: number): NSData;

	replaceWithDataSink(replacementDataSink: PSPDFDataSink): boolean;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class PSPDFAESCryptoInputStream extends PSPDFCryptoInputStream {

	static alloc(): PSPDFAESCryptoInputStream; // inherited from NSObject

	static inputStreamWithData(data: NSData): PSPDFAESCryptoInputStream; // inherited from NSInputStream

	static inputStreamWithFileAtPath(path: string): PSPDFAESCryptoInputStream; // inherited from NSInputStream

	static inputStreamWithURL(url: NSURL): PSPDFAESCryptoInputStream; // inherited from NSInputStream

	static new(): PSPDFAESCryptoInputStream; // inherited from NSObject

	constructor(o: { inputStream: NSInputStream; passphrase: string; });

	closeWithData(): NSData;

	initWithInputStreamPassphrase(stream: NSInputStream, passphrase: string): this;
}

declare const enum PSPDFAESCryptoInputStreamErrorCode {

	ErrorCodeAESCryptoInputStreamUnknownVersionInFileHeader = 110,

	ErrorCodeAESCryptoInputStreamWrongCloseCalled = 120,

	ErrorCodeAESCryptoInputStreamCryptorCreationFailed = 130,

	ErrorCodeAESCryptoInputStreamCryptorResetToIVFailed = 140,

	ErrorCodeAESCryptoInputStreamCloseExpectedInsteadOfRead = 150,

	ErrorCodeAESCryptoInputStreamErrorDecryptingBlock = 160,

	ErrorCodeAESCryptoInputStreamCryptorFinalFailed = 170,

	ErrorCodeAESCryptoInputStreamHMACCheckFailed = 180,

	ErrorCodeAESCryptoInputStreamIncorrectHMACInFile = 190,

	ErrorCodeAESCryptoInputStreamFailedToAllocateMemory = 200,

	ErrorCodeAESCryptoInputStreamUnknown = 2147483647
}

declare var PSPDFAESCryptoInputStreamErrorDomain: string;

declare class PSPDFAESCryptoOutputStream extends PSPDFCryptoOutputStream {

	static alloc(): PSPDFAESCryptoOutputStream; // inherited from NSObject

	static new(): PSPDFAESCryptoOutputStream; // inherited from NSObject

	static outputStreamToBufferCapacity(buffer: string, capacity: number): PSPDFAESCryptoOutputStream; // inherited from NSOutputStream

	static outputStreamToFileAtPathAppend(path: string, shouldAppend: boolean): PSPDFAESCryptoOutputStream; // inherited from NSOutputStream

	static outputStreamToMemory(): PSPDFAESCryptoOutputStream; // inherited from NSOutputStream

	static outputStreamWithURLAppend(url: NSURL, shouldAppend: boolean): PSPDFAESCryptoOutputStream; // inherited from NSOutputStream

	constructor(o: { outputStream: NSOutputStream; passphrase: string; });

	initWithOutputStreamPassphrase(stream: NSOutputStream, passphrase: string): this;
}

declare const enum PSPDFAESCryptoOutputStreamErrorCode {

	ErrorCodeAESCryptoOutputStreamEncryptionFailed = 100,

	ErrorCodeAESCryptoOutputStreamCryptorFinalFailed = 170,

	ErrorCodeAESCryptoOutputStreamWritingToParentStreamFailed = 120,

	ErrorCodeAESCryptoOutputStreamFailedToAllocateMemory = 200,

	ErrorCodeAESCryptoOutputStreamUnknown = 2147483647
}

declare var PSPDFAESCryptoOutputStreamErrorDomain: string;

declare class PSPDFAbstractFormAction extends PSPDFAction {

	static alloc(): PSPDFAbstractFormAction; // inherited from NSObject

	static modelWithDictionaryError(dictionaryValue: NSDictionary<string, any>): PSPDFAbstractFormAction; // inherited from PSPDFModel

	static new(): PSPDFAbstractFormAction; // inherited from NSObject

	fields: NSArray<any>;
}

declare class PSPDFAbstractLineAnnotation extends PSPDFAbstractShapeAnnotation {

	static alloc(): PSPDFAbstractLineAnnotation; // inherited from NSObject

	static modelWithDictionaryError(dictionaryValue: NSDictionary<string, any>): PSPDFAbstractLineAnnotation; // inherited from PSPDFModel

	static new(): PSPDFAbstractLineAnnotation; // inherited from NSObject

	readonly bezierPath: UIBezierPath;

	lineEnd1: PSPDFLineEndType;

	lineEnd2: PSPDFLineEndType;

	constructor(o: { points: NSArray<NSValue>; });

	initWithPoints(points: NSArray<NSValue>): this;

	recalculateBoundingBox(): void;

	setBoundingBoxTransformPoints(boundingBox: CGRect, transformPoints: boolean): void;
}

declare class PSPDFAbstractShapeAnnotation extends PSPDFAnnotation {

	static alloc(): PSPDFAbstractShapeAnnotation; // inherited from NSObject

	static modelWithDictionaryError(dictionaryValue: NSDictionary<string, any>): PSPDFAbstractShapeAnnotation; // inherited from PSPDFModel

	static new(): PSPDFAbstractShapeAnnotation; // inherited from NSObject

	pointSequences: NSArray<NSArray<NSValue>>;
}

declare class PSPDFAbstractTextOverlayAnnotation extends PSPDFAnnotation {

	static alloc(): PSPDFAbstractTextOverlayAnnotation; // inherited from NSObject

	static modelWithDictionaryError(dictionaryValue: NSDictionary<string, any>): PSPDFAbstractTextOverlayAnnotation; // inherited from PSPDFModel

	static new(): PSPDFAbstractTextOverlayAnnotation; // inherited from NSObject

	static textOverlayAnnotationWithGlyphsPageRotation(glyphs: NSArray<PSPDFGlyph>, pageRotation: number): PSPDFAbstractTextOverlayAnnotation;

	readonly highlightedString: string;
}

declare class PSPDFAction extends PSPDFModel implements NSSecureCoding, PSPDFJSONSerializing {

	static JSONKeyPathsByPropertyKey(): NSDictionary<string, any>;

	static JSONTransformerForKey(key: string): NSValueTransformer;

	static actionClassForType(actionType: PSPDFActionType): typeof NSObject;

	static alloc(): PSPDFAction; // inherited from NSObject

	static classForParsingJSONDictionary(JSONDictionary: NSDictionary<string, any>): typeof NSObject;

	static modelWithDictionaryError(dictionaryValue: NSDictionary<string, any>): PSPDFAction; // inherited from PSPDFModel

	static new(): PSPDFAction; // inherited from NSObject

	readonly options: NSDictionary<string, any>;

	readonly parentAction: PSPDFAction;

	subActions: NSArray<PSPDFAction>;

	readonly type: PSPDFActionType;

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	encodeWithCoder(aCoder: NSCoder): void;

	initWithCoder(aDecoder: NSCoder): this;

	localizedDescriptionWithDocumentProvider(documentProvider: PSPDFDocumentProvider): string;
}

declare var PSPDFActionEventChangeKey: string;

declare var PSPDFActionEventNameKey: string;

declare var PSPDFActionEventNameValueBlur: string;

declare var PSPDFActionEventNameValueCalculate: string;

declare var PSPDFActionEventNameValueFocus: string;

declare var PSPDFActionEventNameValueFormat: string;

declare var PSPDFActionEventNameValueKeystroke: string;

declare var PSPDFActionEventNameValueMouseDown: string;

declare var PSPDFActionEventNameValueMouseEnter: string;

declare var PSPDFActionEventNameValueMouseExit: string;

declare var PSPDFActionEventNameValueMouseUp: string;

declare var PSPDFActionEventNameValueValidate: string;

declare var PSPDFActionEventRCKey: string;

declare var PSPDFActionEventSelEndKey: string;

declare var PSPDFActionEventSelStartKey: string;

declare var PSPDFActionEventSourceKey: string;

declare var PSPDFActionEventTargetKey: string;

declare var PSPDFActionEventTargetNameKey: string;

declare var PSPDFActionEventTypeKey: string;

declare var PSPDFActionEventTypeValueField: string;

declare var PSPDFActionEventValueKey: string;

declare var PSPDFActionEventWillCommitKey: string;

declare var PSPDFActionOptionAutoplayKey: string;

declare var PSPDFActionOptionButtonKey: string;

declare var PSPDFActionOptionCloseButtonKey: string;

declare var PSPDFActionOptionControlsKey: string;

declare var PSPDFActionOptionCoverKey: string;

declare var PSPDFActionOptionFullscreenKey: string;

declare var PSPDFActionOptionLoopKey: string;

declare var PSPDFActionOptionModalKey: string;

declare var PSPDFActionOptionOffsetKey: string;

declare var PSPDFActionOptionPageKey: string;

declare var PSPDFActionOptionPopoverKey: string;

declare var PSPDFActionOptionSizeKey: string;

declare const enum PSPDFActionType {

	URL = 0,

	GoTo = 1,

	RemoteGoTo = 2,

	Named = 3,

	Launch = 4,

	JavaScript = 5,

	Rendition = 6,

	RichMediaExecute = 7,

	SubmitForm = 8,

	ResetForm = 9,

	Sound = 10,

	Movie = 11,

	Hide = 12,

	Thread = 13,

	ImportData = 14,

	SetOCGState = 15,

	Trans = 16,

	GoTo3DView = 17,

	GoToEmbedded = 18,

	Unknown = 255
}

declare var PSPDFActionTypeTransformerName: string;

declare var PSPDFActivityTypeBookmarks: string;

declare var PSPDFActivityTypeGoToPage: string;

declare var PSPDFActivityTypeOpenIn: string;

declare var PSPDFActivityTypeOutline: string;

declare var PSPDFActivityTypeSearch: string;

declare class PSPDFActivityViewController extends UIActivityViewController {

	static alloc(): PSPDFActivityViewController; // inherited from NSObject

	static new(): PSPDFActivityViewController; // inherited from NSObject
}

declare const enum PSPDFAdaptiveConditional {

	NO = 0,

	YES = 1,

	Adaptive = 2
}

declare var PSPDFAllowImagesForMenuItems: boolean;

declare class PSPDFAnalytics extends NSObject implements PSPDFAnalyticsClient {

	static alloc(): PSPDFAnalytics; // inherited from NSObject

	static new(): PSPDFAnalytics; // inherited from NSObject

	enabled: boolean;

	addAnalyticsClient(analyticsClient: PSPDFAnalyticsClient): void;

	logEvent(event: string): void;

	logEventAttributes(event: string, attributes: NSDictionary<string, any>): void;

	removeAnalyticsClient(analyticsClient: PSPDFAnalyticsClient): void;
}

interface PSPDFAnalyticsClient {

	logEventAttributes(event: string, attributes: NSDictionary<string, any>): void;
}
declare var PSPDFAnalyticsClient: {

	prototype: PSPDFAnalyticsClient;
};

declare var PSPDFAnalyticsEventAttributeNameAction: string;

declare var PSPDFAnalyticsEventAttributeNameActivityType: string;

declare var PSPDFAnalyticsEventAttributeNameAnnotationType: string;

declare var PSPDFAnalyticsEventAttributeValueActionDuplicateSelectedPages: string;

declare var PSPDFAnalyticsEventAttributeValueActionExportSelectedPages: string;

declare var PSPDFAnalyticsEventAttributeValueActionInsertNewPage: string;

declare var PSPDFAnalyticsEventAttributeValueActionRedo: string;

declare var PSPDFAnalyticsEventAttributeValueActionRemoveSelectedPages: string;

declare var PSPDFAnalyticsEventAttributeValueActionRotateSelectedPages: string;

declare var PSPDFAnalyticsEventAttributeValueActionSelectAllPages: string;

declare var PSPDFAnalyticsEventAttributeValueActionUndo: string;

declare var PSPDFAnalyticsEventAttributeValueToolbarPosition: string;

declare var PSPDFAnalyticsEventNameAnnotationCreate: string;

declare var PSPDFAnalyticsEventNameAnnotationCreationModeEnter: string;

declare var PSPDFAnalyticsEventNameAnnotationCreationModeExit: string;

declare var PSPDFAnalyticsEventNameAnnotationCreatorDialogCancel: string;

declare var PSPDFAnalyticsEventNameAnnotationCreatorDialogShow: string;

declare var PSPDFAnalyticsEventNameAnnotationCreatorSet: string;

declare var PSPDFAnalyticsEventNameAnnotationDelete: string;

declare var PSPDFAnalyticsEventNameAnnotationInspectorShow: string;

declare var PSPDFAnalyticsEventNameAnnotationSelect: string;

declare var PSPDFAnalyticsEventNameBookmarkAdd: string;

declare var PSPDFAnalyticsEventNameBookmarkEdit: string;

declare var PSPDFAnalyticsEventNameBookmarkRemove: string;

declare var PSPDFAnalyticsEventNameBookmarkRename: string;

declare var PSPDFAnalyticsEventNameBookmarkSelect: string;

declare var PSPDFAnalyticsEventNameBookmarkSort: string;

declare var PSPDFAnalyticsEventNameDocumentEditorAction: string;

declare var PSPDFAnalyticsEventNameDocumentEditorOpen: string;

declare var PSPDFAnalyticsEventNameDocumentLoad: string;

declare var PSPDFAnalyticsEventNameOutlineAnnotationSelect: string;

declare var PSPDFAnalyticsEventNameOutlineElementSelect: string;

declare var PSPDFAnalyticsEventNameOutlineOpen: string;

declare var PSPDFAnalyticsEventNamePageChange: string;

declare var PSPDFAnalyticsEventNameSearchResultSelect: string;

declare var PSPDFAnalyticsEventNameSearchStart: string;

declare var PSPDFAnalyticsEventNameShare: string;

declare var PSPDFAnalyticsEventNameTextSelect: string;

declare var PSPDFAnalyticsEventNameThumbnailGridOpen: string;

declare var PSPDFAnalyticsEventNameToolbarMove: string;

declare var PSPDFAnalyticsEventPrefix: string;

declare class PSPDFAnnotation extends PSPDFModel implements PSPDFJSONSerializing, PSPDFUndoProtocol {

	static JSONKeyPathsByPropertyKey(): NSDictionary<string, any>;

	static JSONTransformerForKey(key: string): NSValueTransformer;

	static alloc(): PSPDFAnnotation; // inherited from NSObject

	static annotationFromJSONDictionaryDocumentProviderError(JSONDictionary: NSDictionary<string, any>, documentProvider: PSPDFDocumentProvider): PSPDFAnnotation;

	static classForParsingJSONDictionary(JSONDictionary: NSDictionary<string, any>): typeof NSObject;

	static fixedSize(): CGSize;

	static isDeletable(): boolean;

	static isFixedSize(): boolean;

	static isWriteable(): boolean;

	static keysForValuesToObserveForUndo(): NSSet<string>;

	static localizedUndoActionNameForKey(key: string): string;

	static modelWithDictionaryError(dictionaryValue: NSDictionary<string, any>): PSPDFAnnotation; // inherited from PSPDFModel

	static new(): PSPDFAnnotation; // inherited from NSObject

	static undoCoalescingForKey(key: string): PSPDFUndoCoalescing;

	absolutePageIndex: number;

	additionalActions: NSDictionary<number, PSPDFAction>;

	alpha: number;

	readonly annotationIcon: UIImage;

	readonly attributedString: NSAttributedString;

	borderColor: UIColor;

	borderEffect: PSPDFAnnotationBorderEffect;

	borderEffectIntensity: number;

	borderStyle: PSPDFAnnotationBorderStyle;

	boundingBox: CGRect;

	color: UIColor;

	contents: string;

	creationDate: Date;

	dashArray: NSArray<number>;

	deleted: boolean;

	dirty: boolean;

	readonly document: PSPDFDocument;

	documentProvider: PSPDFDocumentProvider;

	editable: boolean;

	fillColor: UIColor;

	flags: PSPDFAnnotationFlags;

	fontAttributes: NSDictionary<string, any>;

	fontName: string;

	fontSize: number;

	group: string;

	readonly hasAppearanceStream: boolean;

	hidden: boolean;

	readonly indexOnPage: number;

	lastModified: Date;

	lineWidth: number;

	readonly localizedDescription: string;

	readonly locked: boolean;

	readonly minimumSize: CGSize;

	readonly movable: boolean;

	name: string;

	readonly noteIconPoint: CGPoint;

	readonly objectNumber: number;

	overlay: boolean;

	pageIndex: number;

	points: NSArray<NSValue>;

	readonly readOnly: boolean;

	rects: NSArray<NSValue>;

	readonly requiresPopupAnnotation: boolean;

	readonly resizable: boolean;

	rotation: number;

	readonly shouldDeleteAnnotation: boolean;

	readonly shouldMaintainAspectRatio: boolean;

	readonly shouldUpdateOptionalPropertiesOnBoundsChange: boolean;

	readonly shouldUpdatePropertiesOnBoundsChange: boolean;

	subject: string;

	textAlignment: NSTextAlignment;

	readonly type: PSPDFAnnotationType;

	typeString: string;

	user: string;

	value: any;

	verticalTextAlignment: PSPDFVerticalAlignment;

	readonly wantsSelectionBorder: boolean;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	attributedStringWithContents(contents: string): NSAttributedString;

	boundingBoxForPageRect(pageRect: CGRect): CGRect;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	copyToClipboard(): void;

	defaultFont(): UIFont;

	defaultFontName(): string;

	defaultFontSize(): number;

	didUndoOrRedoChange(key: string): void;

	drawInContextWithOptions(context: any, options: NSDictionary<string, any>): void;

	extractImageFromAppearanceStreamWithTransformError(transform: interop.Pointer | interop.Reference<CGAffineTransform>): UIImage;

	hitTestMinDiameter(point: CGPoint, minDiameter: number): boolean;

	imageWithSizeWithOptions(size: CGSize, options: NSDictionary<string, any>): UIImage;

	insertUndoObjectsForKey(objects: NSSet<any>, key: string): void;

	isEqual(object: any): boolean;

	isEqualToAnnotation(otherAnnotation: PSPDFAnnotation): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	removeUndoObjectsForKey(objects: NSSet<any>, key: string): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	setBoundingBoxTransformIncludeOptional(boundingBox: CGRect, transform: boolean, optionalProperties: boolean): void;

	updateOptionalPropertiesWithTransformIsSizeChangeMeanScale(transform: CGAffineTransform, isSizeChange: boolean, meanScale: number): void;

	updatePropertiesWithTransformIsSizeChangeMeanScale(transform: CGAffineTransform, isSizeChange: boolean, meanScale: number): void;
}

declare const enum PSPDFAnnotationBorderEffect {

	NoEffect = 0,

	Cloudy = 1
}

declare const enum PSPDFAnnotationBorderStyle {

	None = 0,

	Solid = 1,

	Dashed = 2,

	Beveled = 3,

	Inset = 4,

	Underline = 5,

	Unknown = 6
}

declare class PSPDFAnnotationCell extends PSPDFNonAnimatingTableViewCell {

	static alloc(): PSPDFAnnotationCell; // inherited from NSObject

	static appearance(): PSPDFAnnotationCell; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PSPDFAnnotationCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PSPDFAnnotationCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): PSPDFAnnotationCell; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PSPDFAnnotationCell; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): PSPDFAnnotationCell; // inherited from UIAppearance

	static dateAndUserStringForAnnotation(annotation: PSPDFAnnotation): string;

	static heightForAnnotationInTableView(annotation: PSPDFAnnotation, tableView: UITableView): number;

	static new(): PSPDFAnnotationCell; // inherited from NSObject

	annotation: PSPDFAnnotation;

	readonly dateAndUserLabel: UILabel;

	readonly nameLabel: UILabel;
}

declare const enum PSPDFAnnotationChange {

	Flatten = 0,

	Remove = 1,

	Embed = 2,

	Print = 3
}

declare var PSPDFAnnotationChangedNotification: string;

declare var PSPDFAnnotationChangedNotificationAnimatedKey: string;

declare var PSPDFAnnotationChangedNotificationIgnoreUpdateKey: string;

declare var PSPDFAnnotationChangedNotificationKeyPathKey: string;

declare class PSPDFAnnotationContainerView extends PSPDFRelayTouchesView {

	static alloc(): PSPDFAnnotationContainerView; // inherited from NSObject

	static appearance(): PSPDFAnnotationContainerView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PSPDFAnnotationContainerView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PSPDFAnnotationContainerView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): PSPDFAnnotationContainerView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PSPDFAnnotationContainerView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): PSPDFAnnotationContainerView; // inherited from UIAppearance

	static new(): PSPDFAnnotationContainerView; // inherited from NSObject
}

declare var PSPDFAnnotationDrawCenteredKey: string;

declare var PSPDFAnnotationDrawFlattenedKey: string;

declare const enum PSPDFAnnotationFlags {

	Invisible = 1,

	Hidden = 2,

	Print = 4,

	NoZoom = 8,

	NoRotate = 16,

	NoView = 32,

	ReadOnly = 64,

	Locked = 128,

	ToggleNoView = 256,

	LockedContents = 512
}

declare class PSPDFAnnotationGridViewController extends PSPDFBaseViewController implements PSPDFStyleable, UICollectionViewDataSource, UICollectionViewDelegate {

	static alloc(): PSPDFAnnotationGridViewController; // inherited from NSObject

	static new(): PSPDFAnnotationGridViewController; // inherited from NSObject

	readonly collectionView: UICollectionView;

	dataSource: PSPDFAnnotationGridViewControllerDataSource;

	delegate: PSPDFAnnotationGridViewControllerDelegate;

	barStyle: UIBarStyle; // inherited from PSPDFStyleable

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	forcesStatusBarHidden: boolean; // inherited from PSPDFStyleable

	readonly hash: number; // inherited from NSObjectProtocol

	isBarTranslucent: boolean; // inherited from PSPDFStyleable

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	close(sender: any): void;

	collectionViewCanFocusItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): boolean;

	collectionViewCanMoveItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): boolean;

	collectionViewCanPerformActionForItemAtIndexPathWithSender(collectionView: UICollectionView, action: string, indexPath: NSIndexPath, sender: any): boolean;

	collectionViewCellForItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): UICollectionViewCell;

	collectionViewDidDeselectItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): void;

	collectionViewDidEndDisplayingCellForItemAtIndexPath(collectionView: UICollectionView, cell: UICollectionViewCell, indexPath: NSIndexPath): void;

	collectionViewDidEndDisplayingSupplementaryViewForElementOfKindAtIndexPath(collectionView: UICollectionView, view: UICollectionReusableView, elementKind: string, indexPath: NSIndexPath): void;

	collectionViewDidHighlightItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): void;

	collectionViewDidSelectItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): void;

	collectionViewDidUnhighlightItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): void;

	collectionViewDidUpdateFocusInContextWithAnimationCoordinator(collectionView: UICollectionView, context: UICollectionViewFocusUpdateContext, coordinator: UIFocusAnimationCoordinator): void;

	collectionViewIndexPathForIndexTitleAtIndex(collectionView: UICollectionView, title: string, index: number): NSIndexPath;

	collectionViewMoveItemAtIndexPathToIndexPath(collectionView: UICollectionView, sourceIndexPath: NSIndexPath, destinationIndexPath: NSIndexPath): void;

	collectionViewNumberOfItemsInSection(collectionView: UICollectionView, section: number): number;

	collectionViewPerformActionForItemAtIndexPathWithSender(collectionView: UICollectionView, action: string, indexPath: NSIndexPath, sender: any): void;

	collectionViewShouldDeselectItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): boolean;

	collectionViewShouldHighlightItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): boolean;

	collectionViewShouldSelectItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): boolean;

	collectionViewShouldShowMenuForItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): boolean;

	collectionViewShouldUpdateFocusInContext(collectionView: UICollectionView, context: UICollectionViewFocusUpdateContext): boolean;

	collectionViewTargetContentOffsetForProposedContentOffset(collectionView: UICollectionView, proposedContentOffset: CGPoint): CGPoint;

	collectionViewTargetIndexPathForMoveFromItemAtIndexPathToProposedIndexPath(collectionView: UICollectionView, originalIndexPath: NSIndexPath, proposedIndexPath: NSIndexPath): NSIndexPath;

	collectionViewTransitionLayoutForOldLayoutNewLayout(collectionView: UICollectionView, fromLayout: UICollectionViewLayout, toLayout: UICollectionViewLayout): UICollectionViewTransitionLayout;

	collectionViewViewForSupplementaryElementOfKindAtIndexPath(collectionView: UICollectionView, kind: string, indexPath: NSIndexPath): UICollectionReusableView;

	collectionViewWillDisplayCellForItemAtIndexPath(collectionView: UICollectionView, cell: UICollectionViewCell, indexPath: NSIndexPath): void;

	collectionViewWillDisplaySupplementaryViewForElementKindAtIndexPath(collectionView: UICollectionView, view: UICollectionReusableView, elementKind: string, indexPath: NSIndexPath): void;

	configureCellForIndexPath(annotationSetCell: PSPDFAnnotationSetCell, indexPath: NSIndexPath): void;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	indexPathForPreferredFocusedViewInCollectionView(collectionView: UICollectionView): NSIndexPath;

	indexTitlesForCollectionView(collectionView: UICollectionView): NSArray<string>;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	numberOfSectionsInCollectionView(collectionView: UICollectionView): number;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	reloadData(): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	scrollViewDidEndDecelerating(scrollView: UIScrollView): void;

	scrollViewDidEndDraggingWillDecelerate(scrollView: UIScrollView, decelerate: boolean): void;

	scrollViewDidEndScrollingAnimation(scrollView: UIScrollView): void;

	scrollViewDidEndZoomingWithViewAtScale(scrollView: UIScrollView, view: UIView, scale: number): void;

	scrollViewDidScroll(scrollView: UIScrollView): void;

	scrollViewDidScrollToTop(scrollView: UIScrollView): void;

	scrollViewDidZoom(scrollView: UIScrollView): void;

	scrollViewShouldScrollToTop(scrollView: UIScrollView): boolean;

	scrollViewWillBeginDecelerating(scrollView: UIScrollView): void;

	scrollViewWillBeginDragging(scrollView: UIScrollView): void;

	scrollViewWillBeginZoomingWithView(scrollView: UIScrollView, view: UIView): void;

	scrollViewWillEndDraggingWithVelocityTargetContentOffset(scrollView: UIScrollView, velocity: CGPoint, targetContentOffset: interop.Pointer | interop.Reference<CGPoint>): void;

	self(): this;

	updatePopoverSize(): void;

	viewForZoomingInScrollView(scrollView: UIScrollView): UIView;
}

interface PSPDFAnnotationGridViewControllerDataSource extends NSObjectProtocol {

	annotationGridViewControllerAnnotationSetForIndexPath(annotationGridController: PSPDFAnnotationGridViewController, indexPath: NSIndexPath): PSPDFAnnotationSet;

	annotationGridViewControllerNumberOfAnnotationsInSection(annotationGridController: PSPDFAnnotationGridViewController, section: number): number;

	numberOfSectionsInAnnotationGridViewController(annotationGridController: PSPDFAnnotationGridViewController): number;
}
declare var PSPDFAnnotationGridViewControllerDataSource: {

	prototype: PSPDFAnnotationGridViewControllerDataSource;
};

interface PSPDFAnnotationGridViewControllerDelegate extends PSPDFOverridable {

	annotationGridViewControllerDidCancel?(annotationGridController: PSPDFAnnotationGridViewController): void;

	annotationGridViewControllerDidSelectAnnotationSet?(annotationGridController: PSPDFAnnotationGridViewController, annotationSet: PSPDFAnnotationSet): void;
}
declare var PSPDFAnnotationGridViewControllerDelegate: {

	prototype: PSPDFAnnotationGridViewControllerDelegate;
};

declare class PSPDFAnnotationGroup extends PSPDFModel {

	static alloc(): PSPDFAnnotationGroup; // inherited from NSObject

	static groupWithItems(items: NSArray<PSPDFAnnotationGroupItem>): PSPDFAnnotationGroup;

	static groupWithItemsChoice(items: NSArray<PSPDFAnnotationGroupItem>, choice: number): PSPDFAnnotationGroup;

	static modelWithDictionaryError(dictionaryValue: NSDictionary<string, any>): PSPDFAnnotationGroup; // inherited from PSPDFModel

	static new(): PSPDFAnnotationGroup; // inherited from NSObject

	choice: number;

	readonly editableItems: NSArray<PSPDFAnnotationGroupItem>;

	readonly items: NSArray<PSPDFAnnotationGroupItem>;

	updateChoiceToItemWithTypeVariant(type: string, variant: string): boolean;
}

declare class PSPDFAnnotationGroupItem extends PSPDFModel {

	static alloc(): PSPDFAnnotationGroupItem; // inherited from NSObject

	static defaultConfigurationBlock(): (p1: PSPDFAnnotationGroupItem, p2: any, p3: UIColor) => UIImage;

	static freeTextConfigurationBlock(): (p1: PSPDFAnnotationGroupItem, p2: any, p3: UIColor) => UIImage;

	static inkConfigurationBlock(): (p1: PSPDFAnnotationGroupItem, p2: any, p3: UIColor) => UIImage;

	static itemWithType(type: string): PSPDFAnnotationGroupItem;

	static itemWithTypeVariant(type: string, variant: string): PSPDFAnnotationGroupItem;

	static itemWithTypeVariantConfigurationBlock(type: string, variant: string, block: (p1: PSPDFAnnotationGroupItem, p2: any, p3: UIColor) => UIImage): PSPDFAnnotationGroupItem;

	static lineConfigurationBlock(): (p1: PSPDFAnnotationGroupItem, p2: any, p3: UIColor) => UIImage;

	static modelWithDictionaryError(dictionaryValue: NSDictionary<string, any>): PSPDFAnnotationGroupItem; // inherited from PSPDFModel

	static new(): PSPDFAnnotationGroupItem; // inherited from NSObject

	readonly configurationBlock: (p1: PSPDFAnnotationGroupItem, p2: any, p3: UIColor) => UIImage;

	readonly type: string;

	readonly variant: string;
}

declare var PSPDFAnnotationIgnoreNoteIndicatorIconKey: string;

declare class PSPDFAnnotationManager extends NSObject implements PSPDFAnnotationProviderChangeNotifier {

	static alloc(): PSPDFAnnotationManager; // inherited from NSObject

	static fileTypeTranslationTable(): NSDictionary<string, number>;

	static mediaFileTypes(): NSArray<string>;

	static new(): PSPDFAnnotationManager; // inherited from NSObject

	annotationProviders: NSArray<PSPDFAnnotationProvider>;

	readonly dirtyAnnotations: NSDictionary<number, NSArray<PSPDFAnnotation>>;

	readonly documentProvider: PSPDFDocumentProvider;

	readonly fileAnnotationProvider: PSPDFFileAnnotationProvider;

	protocolStrings: NSArray<string>;

	readonly shouldSaveAnnotations: boolean;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly parentDocumentProvider: PSPDFDocumentProvider; // inherited from PSPDFAnnotationProviderChangeNotifier

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { documentProvider: PSPDFDocumentProvider; });

	addAnnotationsOptions(annotations: NSArray<PSPDFAnnotation>, options: NSDictionary<string, any>): boolean;

	allAnnotationsOfType(annotationType: PSPDFAnnotationType): NSDictionary<number, NSArray<PSPDFAnnotation>>;

	annotationViewClassForAnnotation(annotation: PSPDFAnnotation): typeof NSObject;

	annotationsForPageAtIndexType(pageIndex: number, type: PSPDFAnnotationType): NSArray<PSPDFAnnotation>;

	annotationsIncludingGroupsFromAnnotations(annotations: NSArray<PSPDFAnnotation>): NSArray<PSPDFAnnotation>;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	defaultAnnotationViewClassForAnnotation(annotation: PSPDFAnnotation): typeof NSObject;

	didChangeAnnotationKeyPathsOptions(annotation: PSPDFAnnotation, keyPaths: NSArray<string>, options: NSDictionary<string, any>): void;

	hasLoadedAnnotationsForPageAtIndex(pageIndex: number): boolean;

	initWithDocumentProvider(documentProvider: PSPDFDocumentProvider): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	removeAnnotationsOptions(annotations: NSArray<PSPDFAnnotation>, options: NSDictionary<string, any>): boolean;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	saveAnnotationsWithOptionsError(options: NSDictionary<string, any>): boolean;

	self(): this;

	updateAnnotationsAnimated(annotations: NSArray<PSPDFAnnotation>, animated: boolean): void;
}

declare var PSPDFAnnotationMarginKey: string;

declare var PSPDFAnnotationMenuAlignment: string;

declare var PSPDFAnnotationMenuAlignmentCenter: string;

declare var PSPDFAnnotationMenuAlignmentLeft: string;

declare var PSPDFAnnotationMenuAlignmentRight: string;

declare var PSPDFAnnotationMenuCancel: string;

declare var PSPDFAnnotationMenuColor: string;

declare var PSPDFAnnotationMenuContinueRecording: string;

declare var PSPDFAnnotationMenuCopy: string;

declare var PSPDFAnnotationMenuCustomColor: string;

declare var PSPDFAnnotationMenuCustomerSignature: string;

declare var PSPDFAnnotationMenuEdit: string;

declare var PSPDFAnnotationMenuFillColor: string;

declare var PSPDFAnnotationMenuFinishRecording: string;

declare var PSPDFAnnotationMenuFitToText: string;

declare var PSPDFAnnotationMenuFont: string;

declare var PSPDFAnnotationMenuGroup: string;

declare var PSPDFAnnotationMenuHighlight: string;

declare var PSPDFAnnotationMenuHighlightType: string;

declare var PSPDFAnnotationMenuInspector: string;

declare var PSPDFAnnotationMenuLineEnd: string;

declare var PSPDFAnnotationMenuLineStart: string;

declare var PSPDFAnnotationMenuLineTypeButt: string;

declare var PSPDFAnnotationMenuLineTypeCircle: string;

declare var PSPDFAnnotationMenuLineTypeClosedArrow: string;

declare var PSPDFAnnotationMenuLineTypeDiamond: string;

declare var PSPDFAnnotationMenuLineTypeNone: string;

declare var PSPDFAnnotationMenuLineTypeOpenArrow: string;

declare var PSPDFAnnotationMenuLineTypeReverseClosedArrow: string;

declare var PSPDFAnnotationMenuLineTypeReverseOpenArrow: string;

declare var PSPDFAnnotationMenuLineTypeSlash: string;

declare var PSPDFAnnotationMenuLineTypeSquare: string;

declare var PSPDFAnnotationMenuMerge: string;

declare var PSPDFAnnotationMenuMySignature: string;

declare var PSPDFAnnotationMenuNote: string;

declare var PSPDFAnnotationMenuOpacity: string;

declare var PSPDFAnnotationMenuPaste: string;

declare var PSPDFAnnotationMenuPause: string;

declare var PSPDFAnnotationMenuPauseRecording: string;

declare var PSPDFAnnotationMenuPlay: string;

declare var PSPDFAnnotationMenuPreviewFile: string;

declare var PSPDFAnnotationMenuRemove: string;

declare var PSPDFAnnotationMenuSave: string;

declare var PSPDFAnnotationMenuSize: string;

declare var PSPDFAnnotationMenuSquiggle: string;

declare var PSPDFAnnotationMenuStrikeout: string;

declare var PSPDFAnnotationMenuStyle: string;

declare var PSPDFAnnotationMenuThickness: string;

declare var PSPDFAnnotationMenuUnderline: string;

declare var PSPDFAnnotationMenuUngroup: string;

declare var PSPDFAnnotationOptionSuppressNotificationsKey: string;

declare var PSPDFAnnotationOptionUserCreatedKey: string;

interface PSPDFAnnotationProvider extends NSObjectProtocol {

	dirtyAnnotations?: NSDictionary<number, NSArray<PSPDFAnnotation>>;

	providerDelegate?: PSPDFAnnotationProviderChangeNotifier;

	shouldSaveAnnotations?: boolean;

	addAnnotationsOptions?(annotations: NSArray<PSPDFAnnotation>, options: NSDictionary<string, any>): NSArray<PSPDFAnnotation>;

	annotationViewClassForAnnotation?(annotation: PSPDFAnnotation): typeof NSObject;

	annotationsForPageAtIndex(pageIndex: number): NSArray<PSPDFAnnotation>;

	didChangeAnnotationKeyPathsOptions?(annotation: PSPDFAnnotation, keyPaths: NSArray<string>, options: NSDictionary<string, any>): void;

	hasLoadedAnnotationsForPageAtIndex?(pageIndex: number): boolean;

	removeAnnotationsOptions?(annotations: NSArray<PSPDFAnnotation>, options: NSDictionary<string, any>): NSArray<PSPDFAnnotation>;

	saveAnnotationsWithOptionsError?(options: NSDictionary<string, any>): boolean;
}
declare var PSPDFAnnotationProvider: {

	prototype: PSPDFAnnotationProvider;
};

interface PSPDFAnnotationProviderChangeNotifier extends NSObjectProtocol {

	parentDocumentProvider: PSPDFDocumentProvider;

	updateAnnotationsAnimated(annotations: NSArray<PSPDFAnnotation>, animated: boolean): void;
}
declare var PSPDFAnnotationProviderChangeNotifier: {

	prototype: PSPDFAnnotationProviderChangeNotifier;
};

declare function PSPDFAnnotationRegisterOverrideClasses(unarchiver: NSKeyedUnarchiver, document: PSPDFDocument): void;

declare const enum PSPDFAnnotationSaveMode {

	Disabled = 0,

	ExternalFile = 1,

	Embedded = 2,

	EmbeddedWithExternalFileAsFallback = 3
}

declare class PSPDFAnnotationSet extends PSPDFModel implements NSFastEnumeration {

	static alloc(): PSPDFAnnotationSet; // inherited from NSObject

	static modelWithDictionaryError(dictionaryValue: NSDictionary<string, any>): PSPDFAnnotationSet; // inherited from PSPDFModel

	static new(): PSPDFAnnotationSet; // inherited from NSObject

	static unarchiveFromClipboard(): PSPDFAnnotationSet;

	readonly annotations: NSArray<PSPDFAnnotation>;

	boundingBox: CGRect;
	[Symbol.iterator](): Iterator<any>;

	constructor(o: { annotations: NSArray<PSPDFAnnotation>; });

	copyToClipboard(): void;

	drawInContextWithOptions(context: any, options: NSDictionary<string, any>): void;

	initWithAnnotations(annotations: NSArray<PSPDFAnnotation>): this;
}

declare class PSPDFAnnotationSetCell extends PSPDFSelectableCollectionViewCell {

	static alloc(): PSPDFAnnotationSetCell; // inherited from NSObject

	static appearance(): PSPDFAnnotationSetCell; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PSPDFAnnotationSetCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PSPDFAnnotationSetCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): PSPDFAnnotationSetCell; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PSPDFAnnotationSetCell; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): PSPDFAnnotationSetCell; // inherited from UIAppearance

	static new(): PSPDFAnnotationSetCell; // inherited from NSObject

	annotationSet: PSPDFAnnotationSet;

	edgeInsets: UIEdgeInsets;
}

interface PSPDFAnnotationSetStore extends NSObjectProtocol {

	annotationSets: NSArray<PSPDFAnnotationSet>;
}
declare var PSPDFAnnotationSetStore: {

	prototype: PSPDFAnnotationSetStore;
};

declare class PSPDFAnnotationSetsCell extends PSPDFTableViewCell implements UICollectionViewDataSource, UICollectionViewDelegate {

	static alloc(): PSPDFAnnotationSetsCell; // inherited from NSObject

	static appearance(): PSPDFAnnotationSetsCell; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PSPDFAnnotationSetsCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PSPDFAnnotationSetsCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): PSPDFAnnotationSetsCell; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PSPDFAnnotationSetsCell; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): PSPDFAnnotationSetsCell; // inherited from UIAppearance

	static new(): PSPDFAnnotationSetsCell; // inherited from NSObject

	annotations: NSArray<any>;

	border: number;

	readonly collectionView: UICollectionView;

	collectionViewUpdateBlock: (p1: PSPDFAnnotationSetsCell) => void;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	collectionViewCanFocusItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): boolean;

	collectionViewCanMoveItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): boolean;

	collectionViewCanPerformActionForItemAtIndexPathWithSender(collectionView: UICollectionView, action: string, indexPath: NSIndexPath, sender: any): boolean;

	collectionViewCellForItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): UICollectionViewCell;

	collectionViewDidDeselectItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): void;

	collectionViewDidEndDisplayingCellForItemAtIndexPath(collectionView: UICollectionView, cell: UICollectionViewCell, indexPath: NSIndexPath): void;

	collectionViewDidEndDisplayingSupplementaryViewForElementOfKindAtIndexPath(collectionView: UICollectionView, view: UICollectionReusableView, elementKind: string, indexPath: NSIndexPath): void;

	collectionViewDidHighlightItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): void;

	collectionViewDidSelectItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): void;

	collectionViewDidUnhighlightItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): void;

	collectionViewDidUpdateFocusInContextWithAnimationCoordinator(collectionView: UICollectionView, context: UICollectionViewFocusUpdateContext, coordinator: UIFocusAnimationCoordinator): void;

	collectionViewIndexPathForIndexTitleAtIndex(collectionView: UICollectionView, title: string, index: number): NSIndexPath;

	collectionViewMoveItemAtIndexPathToIndexPath(collectionView: UICollectionView, sourceIndexPath: NSIndexPath, destinationIndexPath: NSIndexPath): void;

	collectionViewNumberOfItemsInSection(collectionView: UICollectionView, section: number): number;

	collectionViewPerformActionForItemAtIndexPathWithSender(collectionView: UICollectionView, action: string, indexPath: NSIndexPath, sender: any): void;

	collectionViewShouldDeselectItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): boolean;

	collectionViewShouldHighlightItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): boolean;

	collectionViewShouldSelectItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): boolean;

	collectionViewShouldShowMenuForItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): boolean;

	collectionViewShouldUpdateFocusInContext(collectionView: UICollectionView, context: UICollectionViewFocusUpdateContext): boolean;

	collectionViewTargetContentOffsetForProposedContentOffset(collectionView: UICollectionView, proposedContentOffset: CGPoint): CGPoint;

	collectionViewTargetIndexPathForMoveFromItemAtIndexPathToProposedIndexPath(collectionView: UICollectionView, originalIndexPath: NSIndexPath, proposedIndexPath: NSIndexPath): NSIndexPath;

	collectionViewTransitionLayoutForOldLayoutNewLayout(collectionView: UICollectionView, fromLayout: UICollectionViewLayout, toLayout: UICollectionViewLayout): UICollectionViewTransitionLayout;

	collectionViewViewForSupplementaryElementOfKindAtIndexPath(collectionView: UICollectionView, kind: string, indexPath: NSIndexPath): UICollectionReusableView;

	collectionViewWillDisplayCellForItemAtIndexPath(collectionView: UICollectionView, cell: UICollectionViewCell, indexPath: NSIndexPath): void;

	collectionViewWillDisplaySupplementaryViewForElementKindAtIndexPath(collectionView: UICollectionView, view: UICollectionReusableView, elementKind: string, indexPath: NSIndexPath): void;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	indexPathForPreferredFocusedViewInCollectionView(collectionView: UICollectionView): NSIndexPath;

	indexTitlesForCollectionView(collectionView: UICollectionView): NSArray<string>;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	numberOfSectionsInCollectionView(collectionView: UICollectionView): number;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	scrollViewDidEndDecelerating(scrollView: UIScrollView): void;

	scrollViewDidEndDraggingWillDecelerate(scrollView: UIScrollView, decelerate: boolean): void;

	scrollViewDidEndScrollingAnimation(scrollView: UIScrollView): void;

	scrollViewDidEndZoomingWithViewAtScale(scrollView: UIScrollView, view: UIView, scale: number): void;

	scrollViewDidScroll(scrollView: UIScrollView): void;

	scrollViewDidScrollToTop(scrollView: UIScrollView): void;

	scrollViewDidZoom(scrollView: UIScrollView): void;

	scrollViewShouldScrollToTop(scrollView: UIScrollView): boolean;

	scrollViewWillBeginDecelerating(scrollView: UIScrollView): void;

	scrollViewWillBeginDragging(scrollView: UIScrollView): void;

	scrollViewWillBeginZoomingWithView(scrollView: UIScrollView, view: UIView): void;

	scrollViewWillEndDraggingWithVelocityTargetContentOffset(scrollView: UIScrollView, velocity: CGPoint, targetContentOffset: interop.Pointer | interop.Reference<CGPoint>): void;

	self(): this;

	viewForZoomingInScrollView(scrollView: UIScrollView): UIView;
}

declare function PSPDFAnnotationStateFromStateVariantIdentifier(p1: string): string;

declare class PSPDFAnnotationStateManager extends NSObject implements PSPDFOverridable {

	static alloc(): PSPDFAnnotationStateManager; // inherited from NSObject

	static new(): PSPDFAnnotationStateManager; // inherited from NSObject

	allowedImageQualities: PSPDFImageQuality;

	borderEffect: PSPDFAnnotationBorderEffect;

	borderEffectIntensity: number;

	dashArray: NSArray<number>;

	drawColor: UIColor;

	readonly drawViews: NSDictionary<number, PSPDFDrawView>;

	drawingInputMode: PSPDFDrawViewInputMode;

	fillColor: UIColor;

	fontName: string;

	fontSize: number;

	lineEnd1: PSPDFLineEndType;

	lineEnd2: PSPDFLineEndType;

	lineWidth: number;

	readonly pdfController: PSPDFViewController;

	state: string;

	readonly stateVariantIdentifier: string;

	stylusMode: PSPDFAnnotationStateManagerStylusMode;

	textAlignment: NSTextAlignment;

	variant: string;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	addDelegate(delegate: PSPDFAnnotationStateManagerDelegate): void;

	cancelDrawingAnimated(animated: boolean): void;

	class(): typeof NSObject;

	classForClass(originalClass: typeof NSObject): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	doneDrawingAnimated(animated: boolean): void;

	isDrawingState(state: string): boolean;

	isEqual(object: any): boolean;

	isHighlightAnnotationState(state: string): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	lastUsedColorForAnnotationString(annotationString: string): UIColor;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	removeDelegate(delegate: PSPDFAnnotationStateManagerDelegate): boolean;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	setLastUsedColorAnnotationString(lastUsedDrawColor: UIColor, annotationString: string): void;

	setStateVariant(state: string, variant: string): void;

	stateShowsStylePicker(state: string): boolean;

	toggleImagePickerControllerPresentationOptions(sender: any, options: NSDictionary<string, any>): UIViewController;

	toggleSignatureControllerPresentationOptions(sender: any, options: NSDictionary<string, any>): UIViewController;

	toggleStampControllerIncludeSavedAnnotationsPresentationOptions(sender: any, includeSavedAnnotations: boolean, options: NSDictionary<string, any>): UIViewController;

	toggleState(state: string): void;

	toggleStateVariant(state: string, variant: string): void;

	toggleStylePickerPresentationOptions(sender: any, options: NSDictionary<string, any>): PSPDFAnnotationStyleViewController;
}

interface PSPDFAnnotationStateManagerDelegate extends NSObjectProtocol {

	annotationStateManagerDidChangeStateToVariantTo?(manager: PSPDFAnnotationStateManager, oldState: string, newState: string, oldVariant: string, newVariant: string): void;

	annotationStateManagerDidChangeUndoStateRedoState?(manager: PSPDFAnnotationStateManager, undoEnabled: boolean, redoEnabled: boolean): void;

	annotationStateManagerShouldChangeStateToVariantTo?(manager: PSPDFAnnotationStateManager, currentState: string, proposedState: string, currentVariant: string, proposedVariant: string): boolean;
}
declare var PSPDFAnnotationStateManagerDelegate: {

	prototype: PSPDFAnnotationStateManagerDelegate;
};

declare const enum PSPDFAnnotationStateManagerStylusMode {

	FromStylusManager = 0,

	Direct = 1,

	Stylus = 2
}

declare function PSPDFAnnotationStateVariantIdentifier(p1: string, variant: string): string;

declare var PSPDFAnnotationString3D: string;

declare var PSPDFAnnotationStringCaret: string;

declare var PSPDFAnnotationStringCircle: string;

declare var PSPDFAnnotationStringEraser: string;

declare var PSPDFAnnotationStringFile: string;

declare var PSPDFAnnotationStringFreeText: string;

declare var PSPDFAnnotationStringFreeTextVariantCallout: string;

declare var PSPDFAnnotationStringHighlight: string;

declare var PSPDFAnnotationStringImage: string;

declare var PSPDFAnnotationStringInk: string;

declare var PSPDFAnnotationStringInkVariantHighlighter: string;

declare var PSPDFAnnotationStringInkVariantPen: string;

declare var PSPDFAnnotationStringLine: string;

declare var PSPDFAnnotationStringLineVariantArrow: string;

declare var PSPDFAnnotationStringLink: string;

declare var PSPDFAnnotationStringNote: string;

declare var PSPDFAnnotationStringPolyLine: string;

declare var PSPDFAnnotationStringPolygon: string;

declare var PSPDFAnnotationStringPopup: string;

declare var PSPDFAnnotationStringRedact: string;

declare var PSPDFAnnotationStringRichMedia: string;

declare var PSPDFAnnotationStringSavedAnnotations: string;

declare var PSPDFAnnotationStringScreen: string;

declare var PSPDFAnnotationStringSelectionTool: string;

declare var PSPDFAnnotationStringSignature: string;

declare var PSPDFAnnotationStringSound: string;

declare var PSPDFAnnotationStringSquare: string;

declare var PSPDFAnnotationStringSquiggly: string;

declare var PSPDFAnnotationStringStamp: string;

declare var PSPDFAnnotationStringStrikeOut: string;

declare var PSPDFAnnotationStringTrapNet: string;

declare var PSPDFAnnotationStringUnderline: string;

declare var PSPDFAnnotationStringWatermark: string;

declare var PSPDFAnnotationStringWidget: string;

declare class PSPDFAnnotationStyle extends PSPDFModel {

	static alloc(): PSPDFAnnotationStyle; // inherited from NSObject

	static modelWithDictionaryError(dictionaryValue: NSDictionary<string, any>): PSPDFAnnotationStyle; // inherited from PSPDFModel

	static new(): PSPDFAnnotationStyle; // inherited from NSObject

	styleDictionary: NSDictionary<string, any>;

	styleName: string;

	constructor(o: { name: string; });

	applyStyleToAnnotation(annotation: PSPDFAnnotation): void;

	initWithName(styleName: string): this;

	setStyleForKey(style: any, key: string): void;
}

interface PSPDFAnnotationStyleManager {

	shouldUpdateDefaultsForAnnotationChanges: boolean;

	styleKeys: NSSet<string>;

	addStyleForKey(style: PSPDFAnnotationStyle, key: string): void;

	defaultPresetsForKeyType(key: string, type: string): NSArray<PSPDFModel>;

	isPresetModifiedAtIndexForKeyType(index: number, key: string, type: string): boolean;

	lastUsedPropertyForKey(styleProperty: string, key: string): any;

	lastUsedStyleForKey(key: string): PSPDFAnnotationStyle;

	presetsForKeyType(key: string, type: string): NSArray<PSPDFModel>;

	removeStyleForKey(style: PSPDFAnnotationStyle, key: string): void;

	resetPresetAtIndexForKeyType(idx: number, key: string, type: string): boolean;

	setLastUsedValueForPropertyForKey(value: any, styleProperty: string, key: string): void;

	setPresetsForKeyType(presets: NSArray<PSPDFModel>, key: string, type: string): void;

	setupDefaultStylesIfNeeded(): void;

	stylesForKey(key: string): NSArray<PSPDFAnnotationStyle>;
}
declare var PSPDFAnnotationStyleManager: {

	prototype: PSPDFAnnotationStyleManager;
};

declare class PSPDFAnnotationStyleViewController extends PSPDFStaticTableViewController implements PSPDFFontPickerViewControllerDelegate, PSPDFStyleable {

	static alloc(): PSPDFAnnotationStyleViewController; // inherited from NSObject

	static new(): PSPDFAnnotationStyleViewController; // inherited from NSObject

	annotations: NSArray<PSPDFAnnotation>;

	delegate: PSPDFAnnotationStyleViewControllerDelegate;

	persistsColorPresetChanges: boolean;

	propertiesForAnnotations: NSDictionary<string, any>;

	showPreviewArea: boolean;

	typesShowingColorPresets: PSPDFAnnotationType;

	barStyle: UIBarStyle; // inherited from PSPDFStyleable

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	forcesStatusBarHidden: boolean; // inherited from PSPDFStyleable

	readonly hash: number; // inherited from NSObjectProtocol

	isBarTranslucent: boolean; // inherited from PSPDFStyleable

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { annotations: NSArray<PSPDFAnnotation>; });

	class(): typeof NSObject;

	classForClass(originalClass: typeof NSObject): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	fontPickerViewControllerDidSelectFont(fontPickerViewController: PSPDFFontPickerViewController, selectedFont: UIFont): void;

	initWithAnnotations(annotations: NSArray<PSPDFAnnotation>): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

interface PSPDFAnnotationStyleViewControllerDelegate extends PSPDFOverridable {

	annotationStyleControllerAnnotationViewForAnnotation?(styleController: PSPDFAnnotationStyleViewController, annotation: PSPDFAnnotation): UIView;

	annotationStyleControllerDidChangeProperties(styleController: PSPDFAnnotationStyleViewController, propertyNames: NSArray<string>): void;

	annotationStyleControllerDidEndChangingProperty?(styleController: PSPDFAnnotationStyleViewController, propertyName: string): void;

	annotationStyleControllerWillStartChangingProperty?(styleController: PSPDFAnnotationStyleViewController, propertyName: string): void;
}
declare var PSPDFAnnotationStyleViewControllerDelegate: {

	prototype: PSPDFAnnotationStyleViewControllerDelegate;
};

declare class PSPDFAnnotationSummarizer extends NSObject {

	static alloc(): PSPDFAnnotationSummarizer; // inherited from NSObject

	static annotationSummaryForDocuments(documents: NSArray<PSPDFDocument>): NSAttributedString;

	static new(): PSPDFAnnotationSummarizer; // inherited from NSObject

	static temporaryTextFileURLForDocumentsError(documents: NSArray<PSPDFDocument>): NSURL;

	readonly document: PSPDFDocument;

	constructor(o: { document: PSPDFDocument; });

	annotationSummaryForPages(pages: NSIndexSet): NSAttributedString;

	initWithDocument(document: PSPDFDocument): this;

	temporaryTextFileURLForPagesError(pages: NSIndexSet): NSURL;
}

declare class PSPDFAnnotationTableViewController extends PSPDFStatefulTableViewController implements PSPDFStyleable {

	static alloc(): PSPDFAnnotationTableViewController; // inherited from NSObject

	static new(): PSPDFAnnotationTableViewController; // inherited from NSObject

	allowCopy: boolean;

	delegate: PSPDFAnnotationTableViewControllerDelegate;

	document: PSPDFDocument;

	editableAnnotationTypes: NSSet<string>;

	searchEnabled: boolean;

	showDeleteAllOption: boolean;

	readonly viewForTableViewFooter: UIView;

	visibleAnnotationTypes: NSSet<string>;

	barStyle: UIBarStyle; // inherited from PSPDFStyleable

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	forcesStatusBarHidden: boolean; // inherited from PSPDFStyleable

	readonly hash: number; // inherited from NSObjectProtocol

	isBarTranslucent: boolean; // inherited from PSPDFStyleable

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { document: PSPDFDocument; });

	annotationForIndexPath(indexPath: NSIndexPath): PSPDFAnnotation;

	annotationForIndexPathInTableView(indexPath: NSIndexPath, tableView: UITableView): PSPDFAnnotation;

	annotationsForPageAtIndex(pageIndex: number): NSArray<PSPDFAnnotation>;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	deleteAllAction(sender: any): void;

	initWithDocument(document: PSPDFDocument): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	reloadData(): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

interface PSPDFAnnotationTableViewControllerDelegate extends PSPDFOverridable {

	annotationTableViewControllerDidSelectAnnotation(annotationController: PSPDFAnnotationTableViewController, annotation: PSPDFAnnotation): void;
}
declare var PSPDFAnnotationTableViewControllerDelegate: {

	prototype: PSPDFAnnotationTableViewControllerDelegate;
};

declare class PSPDFAnnotationToolbar extends PSPDFFlexibleToolbar implements PSPDFAnnotationStateManagerDelegate {

	static alloc(): PSPDFAnnotationToolbar; // inherited from NSObject

	static appearance(): PSPDFAnnotationToolbar; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PSPDFAnnotationToolbar; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PSPDFAnnotationToolbar; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): PSPDFAnnotationToolbar; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PSPDFAnnotationToolbar; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): PSPDFAnnotationToolbar; // inherited from UIAppearance

	static new(): PSPDFAnnotationToolbar; // inherited from NSObject

	additionalButtons: NSArray<UIButton>;

	readonly annotationGroups: NSArray<PSPDFAnnotationGroup>;

	annotationStateManager: PSPDFAnnotationStateManager;

	collapseUndoButtonsForCompactSizes: boolean;

	configurations: NSArray<PSPDFAnnotationToolbarConfiguration>;

	readonly doneButton: UIButton;

	editableAnnotationTypes: NSSet<string>;

	readonly redoButton: UIButton;

	saveAfterToolbarHiding: boolean;

	showingStylusButton: boolean;

	showsStylusButtonAutomatically: boolean;

	readonly strokeColorButton: PSPDFColorButton;

	readonly stylusButton: PSPDFToolbarButton;

	readonly undoButton: UIButton;

	readonly undoRedoButton: PSPDFToolbarDualButton;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { annotationStateManager: PSPDFAnnotationStateManager; });

	annotationStateManagerDidChangeStateToVariantTo(manager: PSPDFAnnotationStateManager, oldState: string, newState: string, oldVariant: string, newVariant: string): void;

	annotationStateManagerDidChangeUndoStateRedoState(manager: PSPDFAnnotationStateManager, undoEnabled: boolean, redoEnabled: boolean): void;

	annotationStateManagerShouldChangeStateToVariantTo(manager: PSPDFAnnotationStateManager, currentState: string, proposedState: string, currentVariant: string, proposedVariant: string): boolean;

	buttonWithTypeVariantCreateFromGroup(type: string, variant: string, createFromGroup: boolean): UIButton;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	done(sender: any): void;

	initWithAnnotationStateManager(annotationStateManager: PSPDFAnnotationStateManager): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	setShowingStylusButtonAnimated(showingStylusButton: boolean, animated: boolean): void;
}

declare class PSPDFAnnotationToolbarConfiguration extends PSPDFModel {

	static alloc(): PSPDFAnnotationToolbarConfiguration; // inherited from NSObject

	static modelWithDictionaryError(dictionaryValue: NSDictionary<string, any>): PSPDFAnnotationToolbarConfiguration; // inherited from PSPDFModel

	static new(): PSPDFAnnotationToolbarConfiguration; // inherited from NSObject

	readonly annotationGroups: NSArray<PSPDFAnnotationGroup>;

	constructor(o: { annotationGroups: NSArray<PSPDFAnnotationGroup>; });

	initWithAnnotationGroups(annotationGroups: NSArray<PSPDFAnnotationGroup>): this;
}

declare class PSPDFAnnotationToolbarController extends PSPDFFlexibleToolbarController {

	static alloc(): PSPDFAnnotationToolbarController; // inherited from NSObject

	static new(): PSPDFAnnotationToolbarController; // inherited from NSObject

	readonly annotationToolbar: PSPDFAnnotationToolbar;

	delegate: PSPDFFlexibleToolbarContainerDelegate;

	constructor(o: { annotationToolbar: PSPDFAnnotationToolbar; });

	initWithAnnotationToolbar(annotationToolbar: PSPDFAnnotationToolbar): this;
}

declare var PSPDFAnnotationToolbarControllerVisibilityAnimatedKey: string;

declare var PSPDFAnnotationToolbarControllerVisibilityDidChangeNotification: string;

declare const enum PSPDFAnnotationTriggerEvent {

	CursorEnters = 0,

	CursorExits = 1,

	MouseDown = 2,

	MouseUp = 3,

	ReceiveFocus = 4,

	LooseFocus = 5,

	PageOpened = 6,

	PageClosed = 7,

	PageVisible = 8,

	FormChanged = 9,

	FieldFormat = 10,

	FormValidate = 11,

	FormCalculate = 12
}

declare var PSPDFAnnotationTriggerEventTransformerName: string;

declare const enum PSPDFAnnotationType {

	None = 0,

	Undefined = 1,

	Link = 2,

	Highlight = 4,

	StrikeOut = 131072,

	Underline = 262144,

	Squiggly = 524288,

	FreeText = 8,

	Ink = 16,

	Square = 32,

	Circle = 1048576,

	Line = 64,

	Note = 128,

	Stamp = 256,

	Caret = 512,

	RichMedia = 1024,

	Screen = 2048,

	Widget = 4096,

	File = 8192,

	Sound = 16384,

	Polygon = 32768,

	PolyLine = 65536,

	Popup = 2097152,

	Watermark = 4194304,

	TrapNet = 8388608,

	ThreeDimensional = 16777216,

	Redact = 33554432,

	All = 4294967295
}

declare function PSPDFAnnotationTypeFromString(string: string): PSPDFAnnotationType;

declare var PSPDFAnnotationTypeTextMarkup: PSPDFAnnotationType;

declare class PSPDFAnnotationView extends UIView implements PSPDFAnnotationViewProtocol {

	static alloc(): PSPDFAnnotationView; // inherited from NSObject

	static appearance(): PSPDFAnnotationView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PSPDFAnnotationView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PSPDFAnnotationView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): PSPDFAnnotationView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PSPDFAnnotationView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): PSPDFAnnotationView; // inherited from UIAppearance

	static new(): PSPDFAnnotationView; // inherited from NSObject

	shouldAnimatedAnnotationChanges: boolean;

	PDFScale: number; // inherited from PSPDFAnnotationViewProtocol

	annotation: PSPDFAnnotation; // inherited from PSPDFAnnotationViewProtocol

	configuration: PSPDFConfiguration; // inherited from PSPDFAnnotationViewProtocol

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	pageView: PSPDFPageView; // inherited from PSPDFAnnotationViewProtocol

	selected: boolean; // inherited from PSPDFAnnotationViewProtocol

	readonly shouldSyncRemovalFromSuperview: boolean; // inherited from PSPDFAnnotationViewProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	zIndex: number; // inherited from PSPDFAnnotationViewProtocol

	readonly  // inherited from NSObjectProtocol

	zoomScale: number; // inherited from PSPDFAnnotationViewProtocol

	annotationChangedNotification(notification: NSNotification): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	didChangePageBounds(bounds: CGRect): void;

	didHidePageView(pageView: PSPDFPageView): void;

	didShowPageView(pageView: PSPDFPageView): void;

	didTapAtPoint(point: CGPoint): void;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	willRemoveFromSuperview(): void;
}

interface PSPDFAnnotationViewProtocol extends NSObjectProtocol {

	PDFScale?: number;

	annotation?: PSPDFAnnotation;

	configuration?: PSPDFConfiguration;

	pageView?: PSPDFPageView;

	selected?: boolean;

	shouldSyncRemovalFromSuperview?: boolean;

	zIndex?: number;

	zoomScale?: number;

	didChangePageBounds?(bounds: CGRect): void;

	didHidePageView?(pageView: PSPDFPageView): void;

	didShowPageView?(pageView: PSPDFPageView): void;

	didTapAtPoint?(point: CGPoint): void;

	willRemoveFromSuperview?(): void;
}
declare var PSPDFAnnotationViewProtocol: {

	prototype: PSPDFAnnotationViewProtocol;
};

declare var PSPDFAnnotationWriteOptionsGenerateAppearanceStreamForTypeKey: string;

declare var PSPDFAnnotationsAddedNotification: string;

declare var PSPDFAnnotationsRemovedNotification: string;

declare const enum PSPDFAppearanceMode {

	Default = 0,

	Sepia = 1,

	Night = 2,

	All = 3
}

declare var PSPDFAppearanceModeChangedAnimatedKey: string;

declare var PSPDFAppearanceModeChangedNotification: string;

declare class PSPDFAppearanceModeManager extends NSObject {

	static alloc(): PSPDFAppearanceModeManager; // inherited from NSObject

	static new(): PSPDFAppearanceModeManager; // inherited from NSObject

	appearanceMode: PSPDFAppearanceMode;

	delegate: PSPDFAppearanceModeManagerDelegate;

	setAppearanceModeAnimated(appearanceMode: PSPDFAppearanceMode, animated: boolean): void;
}

interface PSPDFAppearanceModeManagerDelegate extends NSObjectProtocol {

	appearanceManagerApplyAppearanceSettingsForMode?(manager: PSPDFAppearanceModeManager, mode: PSPDFAppearanceMode): void;

	appearanceManagerRenderOptionsForMode?(manager: PSPDFAppearanceModeManager, mode: PSPDFAppearanceMode): NSDictionary<string, any>;

	appearanceManagerUpdateConfigurationForMode?(manager: PSPDFAppearanceModeManager, builder: PSPDFConfigurationBuilder, mode: PSPDFAppearanceMode): void;
}
declare var PSPDFAppearanceModeManagerDelegate: {

	prototype: PSPDFAppearanceModeManagerDelegate;
};

declare var PSPDFApplePencilDetectedChangedNotification: string;

declare var PSPDFApplePencilDetectedNotification: string;

declare class PSPDFApplePencilDriver extends NSObject implements PSPDFStylusDriver {

	static alloc(): PSPDFApplePencilDriver; // inherited from NSObject

	static driverInfo(): NSDictionary<string, any>;

	static new(): PSPDFApplePencilDriver; // inherited from NSObject

	delegate: PSPDFStylusDriverDelegate;

	static detected: boolean;

	readonly connectedStylusInfo: NSDictionary<string, any>; // inherited from PSPDFStylusDriver

	readonly connectionStatus: PSPDFStylusConnectionStatus; // inherited from PSPDFStylusDriver

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly settingsController: UIViewController; // inherited from PSPDFStylusDriver

	readonly settingsControllerInfo: NSDictionary<string, any>; // inherited from PSPDFStylusDriver

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { delegate: PSPDFStylusDriverDelegate; }); // inherited from PSPDFStylusDriver

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	disableDriver(): void;

	enableDriverWithOptionsError(options: NSDictionary<string, any>): boolean;

	initWithDelegate(delegate: PSPDFStylusDriverDelegate): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	registerView(view: UIView): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	touchInfoForTouch(touch: UITouch): PSPDFStylusTouch;

	unregisterView(view: UIView): void;
}

interface PSPDFApplication extends NSObjectProtocol {

	networkIndicatorManager: PSPDFNetworkActivityIndicatorManager;

	canOpenURL(url: NSURL): boolean;

	openURLOptionsCompletionHandler(url: NSURL, options: NSDictionary<string, any>, completionHandler: (p1: boolean) => void): void;
}
declare var PSPDFApplication: {

	prototype: PSPDFApplication;
};

interface PSPDFApplicationJSExport extends JSExport, NSObjectProtocol {

	pageNum: number;

	viewerVersion: number;

	alert(params: any): void;

	buttonImportIconPageSourceForm(cPath: string, nPage: number, formElement: PSPDFFormElement): number;

	buttonImportIconPageSourceForm__JS_EXPORT_AS__buttonImportIcon?(cPath: string, nPage: number, formElement: PSPDFFormElement, argument: any): number;

	launchURLNewFrame(cURL: string, bNewFrame: number): void;

	launchURLNewFrame__JS_EXPORT_AS__launchURL?(cURL: string, bNewFrame: number, argument: any): void;

	mailDoc(params: NSDictionary<any, any>): void;

	print(params: any): void;

	resetForm(names: NSArray<string>): void;
}
declare var PSPDFApplicationJSExport: {

	prototype: PSPDFApplicationJSExport;
};

interface PSPDFApplicationPolicy {

	hasPermissionForEventIsUserAction(event: string, isUserAction: boolean): boolean;
}
declare var PSPDFApplicationPolicy: {

	prototype: PSPDFApplicationPolicy;
};

declare var PSPDFApplicationPolicyKey: string;

declare class PSPDFAssetAnnotation extends PSPDFLinkAnnotation {

	static alloc(): PSPDFAssetAnnotation; // inherited from NSObject

	static modelWithDictionaryError(dictionaryValue: NSDictionary<string, any>): PSPDFAssetAnnotation; // inherited from PSPDFModel

	static new(): PSPDFAssetAnnotation; // inherited from NSObject

	readonly assetName: string;

	fileURLWithError(): NSURL;
}

declare class PSPDFAvoidingScrollView extends UIScrollView {

	static alloc(): PSPDFAvoidingScrollView; // inherited from NSObject

	static appearance(): PSPDFAvoidingScrollView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PSPDFAvoidingScrollView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PSPDFAvoidingScrollView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): PSPDFAvoidingScrollView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PSPDFAvoidingScrollView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): PSPDFAvoidingScrollView; // inherited from UIAppearance

	static new(): PSPDFAvoidingScrollView; // inherited from NSObject

	readonly avoidingKeyboard: boolean;

	enableAvoidance: boolean;

	readonly firstResponderIsTextInput: boolean;

	readonly isHalfModalVisible: boolean;
}

interface PSPDFAvoidingScrollViewDelegate extends UIScrollViewDelegate {

	scrollViewShouldAvoidKeyboard?(scrollView: PSPDFAvoidingScrollView): boolean;
}
declare var PSPDFAvoidingScrollViewDelegate: {

	prototype: PSPDFAvoidingScrollViewDelegate;
};

declare const enum PSPDFBackButtonStyle {

	Flat = 0,

	Modern = 1
}

declare class PSPDFBackForwardActionList extends NSObject {

	static alloc(): PSPDFBackForwardActionList; // inherited from NSObject

	static new(): PSPDFBackForwardActionList; // inherited from NSObject

	readonly backAction: PSPDFAction;

	readonly backList: NSArray<PSPDFAction>;

	backListCap: number;

	delegate: PSPDFBackForwardActionListDelegate;

	readonly forwardAction: PSPDFAction;

	readonly forwardList: NSArray<PSPDFAction>;

	constructor(o: { delegate: PSPDFBackForwardActionListDelegate; });

	initWithDelegate(delegate: PSPDFBackForwardActionListDelegate): this;

	registerAction(action: PSPDFAction): void;

	requestBack(): void;

	requestBackToAction(action: PSPDFAction): void;

	requestForward(): void;

	requestForwardToAction(action: PSPDFAction): void;

	reset(): void;

	resetBackList(): void;

	resetForwardList(): void;
}

interface PSPDFBackForwardActionListDelegate extends NSObjectProtocol {

	backForwardListDidUpdate?(list: PSPDFBackForwardActionList): void;

	backForwardListRequestedBackActionExecution(list: PSPDFBackForwardActionList, actions: NSArray<PSPDFAction>): void;

	backForwardListRequestedForwardActionExecution(list: PSPDFBackForwardActionList, actions: NSArray<PSPDFAction>): void;
}
declare var PSPDFBackForwardActionListDelegate: {

	prototype: PSPDFBackForwardActionListDelegate;
};

declare class PSPDFBackForwardButton extends PSPDFButton {

	static alloc(): PSPDFBackForwardButton; // inherited from NSObject

	static appearance(): PSPDFBackForwardButton; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PSPDFBackForwardButton; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PSPDFBackForwardButton; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): PSPDFBackForwardButton; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PSPDFBackForwardButton; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): PSPDFBackForwardButton; // inherited from UIAppearance

	static backButton(): PSPDFBackForwardButton;

	static buttonWithType(buttonType: UIButtonType): PSPDFBackForwardButton; // inherited from UIButton

	static forwardButton(): PSPDFBackForwardButton;

	static new(): PSPDFBackForwardButton; // inherited from NSObject

	blurEffectStyle: UIBlurEffectStyle;

	buttonStyle: PSPDFBackButtonStyle;

	readonly longPressRecognizer: UILongPressGestureRecognizer;
}

declare class PSPDFBaseConfiguration<BuilderType> extends PSPDFModel {

	static alloc<BuilderType>(): PSPDFBaseConfiguration<BuilderType>; // inherited from NSObject

	static configurationWithBuilder<BuilderType>(builderBlock: (p1: BuilderType) => void): PSPDFBaseConfiguration<BuilderType>;

	static defaultConfiguration<BuilderType>(): PSPDFBaseConfiguration<BuilderType>;

	static modelWithDictionaryError<BuilderType>(dictionaryValue: NSDictionary<string, any>): PSPDFBaseConfiguration<BuilderType>; // inherited from PSPDFModel

	static new<BuilderType>(): PSPDFBaseConfiguration<BuilderType>; // inherited from NSObject

	constructor(o: { builder: BuilderType; });

	configurationUpdatedWithBuilder(builderBlock: (p1: BuilderType) => void): this;

	initWithBuilder(builder: BuilderType): this;
}

declare class PSPDFBaseConfigurationBuilder extends NSObject {

	static alloc(): PSPDFBaseConfigurationBuilder; // inherited from NSObject

	static new(): PSPDFBaseConfigurationBuilder; // inherited from NSObject

	readonly build: PSPDFBaseConfiguration<any>;

	static readonly configurationTargetClass: typeof NSObject;

	reset(): void;
}

declare class PSPDFBaseTableViewController extends UITableViewController {

	static alloc(): PSPDFBaseTableViewController; // inherited from NSObject

	static new(): PSPDFBaseTableViewController; // inherited from NSObject
}

declare class PSPDFBaseViewController extends UIViewController {

	static alloc(): PSPDFBaseViewController; // inherited from NSObject

	static new(): PSPDFBaseViewController; // inherited from NSObject

	contentSizeDidChange(): void;
}

declare class PSPDFBlurView extends UIView {

	static alloc(): PSPDFBlurView; // inherited from NSObject

	static appearance(): PSPDFBlurView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PSPDFBlurView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PSPDFBlurView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): PSPDFBlurView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PSPDFBlurView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): PSPDFBlurView; // inherited from UIAppearance

	static new(): PSPDFBlurView; // inherited from NSObject

	blurEnabled: boolean;

	blurEnabledObject: number;

	containerView: UIView;

	renderView: UIView;
}

declare class PSPDFBookmark extends PSPDFModel {

	static alloc(): PSPDFBookmark; // inherited from NSObject

	static modelWithDictionaryError(dictionaryValue: NSDictionary<string, any>): PSPDFBookmark; // inherited from PSPDFModel

	static new(): PSPDFBookmark; // inherited from NSObject

	readonly action: PSPDFAction;

	readonly displayName: string;

	name: string;

	readonly pageIndex: number;

	readonly pageOrNameString: string;

	constructor(o: { action: PSPDFAction; });

	constructor(o: { pageIndex: number; });

	initWithAction(action: PSPDFAction): this;

	initWithPageIndex(pageIndex: number): this;
}

declare class PSPDFBookmarkCell extends PSPDFNonAnimatingTableViewCell implements UITextFieldDelegate {

	static alloc(): PSPDFBookmarkCell; // inherited from NSObject

	static appearance(): PSPDFBookmarkCell; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PSPDFBookmarkCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PSPDFBookmarkCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): PSPDFBookmarkCell; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PSPDFBookmarkCell; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): PSPDFBookmarkCell; // inherited from UIAppearance

	static new(): PSPDFBookmarkCell; // inherited from NSObject

	bookmarkString: string;

	delegate: PSPDFBookmarkTableViewCellDelegate;

	textField: UITextField;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	textFieldDidBeginEditing(textField: UITextField): void;

	textFieldDidEndEditing(textField: UITextField): void;

	textFieldDidEndEditingReason(textField: UITextField, reason: UITextFieldDidEndEditingReason): void;

	textFieldShouldBeginEditing(textField: UITextField): boolean;

	textFieldShouldChangeCharactersInRangeReplacementString(textField: UITextField, range: NSRange, string: string): boolean;

	textFieldShouldClear(textField: UITextField): boolean;

	textFieldShouldEndEditing(textField: UITextField): boolean;

	textFieldShouldReturn(textField: UITextField): boolean;
}

declare class PSPDFBookmarkIndicatorButton extends UIButton {

	static alloc(): PSPDFBookmarkIndicatorButton; // inherited from NSObject

	static appearance(): PSPDFBookmarkIndicatorButton; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PSPDFBookmarkIndicatorButton; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PSPDFBookmarkIndicatorButton; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): PSPDFBookmarkIndicatorButton; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PSPDFBookmarkIndicatorButton; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): PSPDFBookmarkIndicatorButton; // inherited from UIAppearance

	static buttonWithType(buttonType: UIButtonType): PSPDFBookmarkIndicatorButton; // inherited from UIButton

	static new(): PSPDFBookmarkIndicatorButton; // inherited from NSObject

	imageType: PSPDFBookmarkIndicatorImageType;

	normalTintColor: UIColor;

	selectedTintColor: UIColor;
}

declare const enum PSPDFBookmarkIndicatorImageType {

	Large = 0,

	Medium = 1,

	Small = 2
}

declare class PSPDFBookmarkManager extends NSObject {

	static alloc(): PSPDFBookmarkManager; // inherited from NSObject

	static new(): PSPDFBookmarkManager; // inherited from NSObject

	readonly bookmarks: NSArray<PSPDFBookmark>;

	provider: NSArray<PSPDFBookmarkProvider>;

	constructor(o: { document: PSPDFDocument; });

	addBookmark(bookmark: PSPDFBookmark): void;

	addBookmarkForPageAtIndex(pageIndex: number): void;

	bookmarkForPageAtIndex(pageIndex: number): PSPDFBookmark;

	bookmarksWithSortOrder(sortOrder: PSPDFBookmarkManagerSortOrder): NSArray<PSPDFBookmark>;

	initWithDocument(document: PSPDFDocument): this;

	moveBookmarkAtIndexToIndex(sourceIndex: number, destinationIndex: number): void;

	performBlock(block: () => void): void;

	performBlockAndWait(block: () => void): void;

	removeBookmark(bookmark: PSPDFBookmark): void;

	removeBookmarkForPageAtIndex(pageIndex: number): void;
}

declare const enum PSPDFBookmarkManagerSortOrder {

	Custom = 0,

	PageBased = 1
}

interface PSPDFBookmarkProvider extends NSObjectProtocol {

	bookmarks: NSArray<PSPDFBookmark>;

	addBookmark(bookmark: PSPDFBookmark): boolean;

	removeBookmark(bookmark: PSPDFBookmark): boolean;

	save(): void;
}
declare var PSPDFBookmarkProvider: {

	prototype: PSPDFBookmarkProvider;
};

interface PSPDFBookmarkTableViewCellDelegate extends NSObjectProtocol {

	bookmarkCellDidUpdateBookmarkString(cell: PSPDFBookmarkCell, bookmarkString: string): void;
}
declare var PSPDFBookmarkTableViewCellDelegate: {

	prototype: PSPDFBookmarkTableViewCellDelegate;
};

declare class PSPDFBookmarkViewController extends PSPDFStatefulTableViewController implements PSPDFBookmarkTableViewCellDelegate, PSPDFStyleable {

	static alloc(): PSPDFBookmarkViewController; // inherited from NSObject

	static new(): PSPDFBookmarkViewController; // inherited from NSObject

	allowCopy: boolean;

	delegate: PSPDFBookmarkViewControllerDelegate;

	document: PSPDFDocument;

	sortOrder: PSPDFBookmarkManagerSortOrder;

	barStyle: UIBarStyle; // inherited from PSPDFStyleable

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	forcesStatusBarHidden: boolean; // inherited from PSPDFStyleable

	readonly hash: number; // inherited from NSObjectProtocol

	isBarTranslucent: boolean; // inherited from PSPDFStyleable

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { document: PSPDFDocument; });

	addBookmarkAction(sender: any): void;

	bookmarkCellDidUpdateBookmarkString(cell: PSPDFBookmarkCell, bookmarkString: string): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	doneAction(sender: any): void;

	initWithDocument(document: PSPDFDocument): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	updateBookmarkViewAnimated(animated: boolean): void;
}

interface PSPDFBookmarkViewControllerDelegate extends PSPDFOverridable {

	bookmarkViewControllerDidSelectBookmark(bookmarkController: PSPDFBookmarkViewController, bookmark: PSPDFBookmark): void;

	currentPageForBookmarkViewController(bookmarkController: PSPDFBookmarkViewController): number;
}
declare var PSPDFBookmarkViewControllerDelegate: {

	prototype: PSPDFBookmarkViewControllerDelegate;
};

declare var PSPDFBookmarksChangedNotification: string;

declare var PSPDFBorderEffectTransformerName: string;

declare var PSPDFBorderStyleTransformerName: string;

declare function PSPDFBoundingBoxFromGlyphs(glyphs: NSArray<PSPDFGlyph>, pageRotation: number): CGRect;

declare function PSPDFBoundingBoxFromLines(lines: NSArray<any>, lineWidth: number): CGRect;

declare class PSPDFBrightnessManager extends NSObject {

	static alloc(): PSPDFBrightnessManager; // inherited from NSObject

	static new(): PSPDFBrightnessManager; // inherited from NSObject

	additionalBrightnessDimmingFactor: number;

	brightness: number;

	maximumAdditionalBrightnessDimmingFactor: number;

	wantsAdditionalSoftwareDimming: boolean;

	wantsSoftwareDimming: boolean;
}

declare class PSPDFBrightnessViewController extends PSPDFStaticTableViewController {

	static alloc(): PSPDFBrightnessViewController; // inherited from NSObject

	static new(): PSPDFBrightnessViewController; // inherited from NSObject

	allowedAppearanceModes: PSPDFAppearanceMode;

	appearanceModeManager: PSPDFAppearanceModeManager;

	brightnessManager: PSPDFBrightnessManager;
}

declare class PSPDFButton extends UIButton {

	static alloc(): PSPDFButton; // inherited from NSObject

	static appearance(): PSPDFButton; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PSPDFButton; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PSPDFButton; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): PSPDFButton; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PSPDFButton; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): PSPDFButton; // inherited from UIAppearance

	static buttonWithType(buttonType: UIButtonType): PSPDFButton; // inherited from UIButton

	static new(): PSPDFButton; // inherited from NSObject

	actionBlock: (p1: PSPDFButton) => void;

	positionImageOnRight: boolean;

	touchAreaInsets: UIEdgeInsets;

	setActionBlockForControlEvents(actionBlock: (p1: PSPDFButton) => void, controlEvents: UIControlEvents): void;
}

declare const enum PSPDFButtonFlag {

	NoToggleToOff = 16384,

	Radio = 32768,

	PushButton = 65536,

	RadiosInUnison = 33554432
}

declare class PSPDFButtonFormElement extends PSPDFFormElement {

	static alloc(): PSPDFButtonFormElement; // inherited from NSObject

	static modelWithDictionaryError(dictionaryValue: NSDictionary<string, any>): PSPDFButtonFormElement; // inherited from PSPDFModel

	static new(): PSPDFButtonFormElement; // inherited from NSObject

	readonly buttonFormField: PSPDFButtonFormField;

	readonly onState: string;

	readonly options: NSArray<PSPDFFormOption>;

	readonly selected: boolean;

	deselect(): void;

	select(): void;

	toggleButtonSelectionState(): boolean;
}

declare class PSPDFButtonFormElementView extends PSPDFFormElementView {

	static alloc(): PSPDFButtonFormElementView; // inherited from NSObject

	static appearance(): PSPDFButtonFormElementView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PSPDFButtonFormElementView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PSPDFButtonFormElementView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): PSPDFButtonFormElementView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PSPDFButtonFormElementView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): PSPDFButtonFormElementView; // inherited from UIAppearance

	static new(): PSPDFButtonFormElementView; // inherited from NSObject
}

declare class PSPDFButtonFormField extends PSPDFFormField {

	static alloc(): PSPDFButtonFormField; // inherited from NSObject

	static modelWithDictionaryError(dictionaryValue: NSDictionary<string, any>): PSPDFButtonFormField; // inherited from PSPDFModel

	static new(): PSPDFButtonFormField; // inherited from NSObject

	readonly isCheckBox: boolean;

	readonly isPushButton: boolean;

	readonly isRadioButton: boolean;

	readonly options: NSArray<PSPDFFormOption>;

	selectedAnnotationObjectNumbers: NSArray<number>;

	deselectButton(annotation: PSPDFWidgetAnnotation): void;

	isSelected(annotation: PSPDFWidgetAnnotation): boolean;

	onStateForButton(annotation: PSPDFWidgetAnnotation): string;

	selectButton(annotation: PSPDFWidgetAnnotation): void;

	toggleButton(annotation: PSPDFWidgetAnnotation): void;

	valueForButton(annotation: PSPDFWidgetAnnotation): string;
}

declare class PSPDFCache extends NSObject {

	static alloc(): PSPDFCache; // inherited from NSObject

	static new(): PSPDFCache; // inherited from NSObject

	JPGFormatCompression: number;

	allowedDiskSpace: number;

	cacheDirectory: string;

	decryptFromPathBlock: (p1: PSPDFDocument, p2: string) => NSData;

	readonly diskCache: PSPDFDiskCache;

	diskCacheStrategy: PSPDFDiskCacheStrategy;

	encryptDataBlock: (p1: PSPDFDocument, p2: NSMutableData) => void;

	readonly memoryCache: PSPDFMemoryCache;

	useJPGFormat: boolean;

	readonly usedDiskSpace: number;

	constructor(o: { settings: PSPDFKit; });

	cacheDocumentPageSizesWithDiskCacheStrategyAroundPageAtIndex(document: PSPDFDocument, sizes: NSArray<NSValue>, strategy: PSPDFDiskCacheStrategy, pageIndex: number): void;

	cacheDocumentPageSizesWithDiskCacheStrategyAroundPageAtIndexImageRenderingCompletionBlock(document: PSPDFDocument, sizes: NSArray<NSValue>, strategy: PSPDFDiskCacheStrategy, pageIndex: number, pageCompletionBlock: (p1: UIImage, p2: PSPDFDocument, p3: number, p4: CGSize) => void): void;

	cacheStatusForRequestImageSizeMatching(request: PSPDFRenderRequest, imageSizeMatching: PSPDFCacheImageSizeMatching): PSPDFCacheStatus;

	clearCache(): void;

	imageForRequestImageSizeMatching(request: PSPDFRenderRequest, imageSizeMatching: PSPDFCacheImageSizeMatching): UIImage;

	initWithSettings(pspdfkit: PSPDFKit): this;

	invalidateImageFromDocumentPageIndex(document: PSPDFDocument, pageIndex: number): void;

	pauseCachingForService(service: any): void;

	removeCacheForDocument(document: PSPDFDocument): void;

	resumeCachingForService(service: any): void;

	saveImageForRequest(image: UIImage, request: PSPDFRenderRequest): void;

	stopCachingDocument(document: PSPDFDocument): void;
}

declare const enum PSPDFCacheImageSizeMatching {

	Exact = 0,

	AllowLarger = 1,

	AllowSmaller = 2,

	Default = 0
}

declare const enum PSPDFCacheStatus {

	NotCached = 0,

	InMemory = 1,

	OnDisk = 2
}

declare const enum PSPDFCacheStoragePolicy {

	Automatic = 0,

	Allowed = 1,

	AllowedInMemoryOnly = 2,

	NotAllowed = 3
}

declare class PSPDFCaretAnnotation extends PSPDFAnnotation {

	static alloc(): PSPDFCaretAnnotation; // inherited from NSObject

	static modelWithDictionaryError(dictionaryValue: NSDictionary<string, any>): PSPDFCaretAnnotation; // inherited from PSPDFModel

	static new(): PSPDFCaretAnnotation; // inherited from NSObject
}

declare function PSPDFChildViewControllerForClass(controller: UIViewController, controllerClass: typeof NSObject): any;

declare const enum PSPDFChoiceFlag {

	Combo = 131072,

	Edit = 262144,

	Sort = 524288,

	MultiSelect = 2097152,

	DoNotSpellCheck = 4194304,

	CommitOnSelChange = 67108864
}

declare class PSPDFChoiceFormElement extends PSPDFFormElement {

	static alloc(): PSPDFChoiceFormElement; // inherited from NSObject

	static modelWithDictionaryError(dictionaryValue: NSDictionary<string, any>): PSPDFChoiceFormElement; // inherited from PSPDFModel

	static new(): PSPDFChoiceFormElement; // inherited from NSObject

	readonly choiceFormField: PSPDFChoiceFormField;

	readonly customSelection: boolean;

	customText: string;

	readonly options: NSArray<PSPDFFormOption>;

	selectedIndices: NSIndexSet;

	readonly selectedOptions: NSArray<PSPDFFormOption>;

	readonly topIndex: number;
}

declare class PSPDFChoiceFormElementView extends PSPDFFormElementView {

	static alloc(): PSPDFChoiceFormElementView; // inherited from NSObject

	static appearance(): PSPDFChoiceFormElementView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PSPDFChoiceFormElementView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PSPDFChoiceFormElementView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): PSPDFChoiceFormElementView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PSPDFChoiceFormElementView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): PSPDFChoiceFormElementView; // inherited from UIAppearance

	static new(): PSPDFChoiceFormElementView; // inherited from NSObject
}

declare class PSPDFChoiceFormField extends PSPDFFormField {

	static alloc(): PSPDFChoiceFormField; // inherited from NSObject

	static modelWithDictionaryError(dictionaryValue: NSDictionary<string, any>): PSPDFChoiceFormField; // inherited from PSPDFModel

	static new(): PSPDFChoiceFormField; // inherited from NSObject

	readonly commitOnSelChange: boolean;

	readonly customSelection: boolean;

	customText: string;

	readonly doNotSpellCheck: boolean;

	readonly isCombo: boolean;

	readonly isEdit: boolean;

	readonly isMultiSelect: boolean;

	options: NSArray<PSPDFFormOption>;

	selectedIndices: NSIndexSet;
}

declare class PSPDFCircleAnnotation extends PSPDFAbstractShapeAnnotation {

	static alloc(): PSPDFCircleAnnotation; // inherited from NSObject

	static modelWithDictionaryError(dictionaryValue: NSDictionary<string, any>): PSPDFCircleAnnotation; // inherited from PSPDFModel

	static new(): PSPDFCircleAnnotation; // inherited from NSObject

	readonly bezierPath: UIBezierPath;
}

declare class PSPDFCollectionReusableFilterView extends UICollectionReusableView {

	static alloc(): PSPDFCollectionReusableFilterView; // inherited from NSObject

	static appearance(): PSPDFCollectionReusableFilterView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PSPDFCollectionReusableFilterView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PSPDFCollectionReusableFilterView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): PSPDFCollectionReusableFilterView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PSPDFCollectionReusableFilterView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): PSPDFCollectionReusableFilterView; // inherited from UIAppearance

	static new(): PSPDFCollectionReusableFilterView; // inherited from NSObject

	backgroundStyle: PSPDFCollectionReusableFilterViewStyle;

	filterElement: UISegmentedControl;

	filterElementOffset: CGPoint;

	minimumFilterMargin: UIEdgeInsets;
}

declare var PSPDFCollectionReusableFilterViewCenterPriority: number;

declare var PSPDFCollectionReusableFilterViewDefaultMargin: number;

declare const enum PSPDFCollectionReusableFilterViewStyle {

	None = 0,

	LightBlur = 1,

	DarkBlur = 2,

	ExtraLightBlur = 3
}

interface PSPDFCollectionViewDelegateThumbnailFlowLayout extends NSObjectProtocol {

	collectionViewLayoutItemSizeAtIndexPath?(collectionView: UICollectionView, layout: UICollectionViewLayout, indexPath: NSIndexPath): CGSize;

	collectionViewLayoutItemSizeAtIndexPathCompletionHandler?(collectionView: UICollectionView, layout: UICollectionViewLayout, indexPath: NSIndexPath, completionHandler: (p1: CGSize) => void): CGSize;

	collectionViewLayoutReferenceSizeForHeaderInSection?(collectionView: UICollectionView, layout: UICollectionViewLayout, section: number): CGSize;
}
declare var PSPDFCollectionViewDelegateThumbnailFlowLayout: {

	prototype: PSPDFCollectionViewDelegateThumbnailFlowLayout;
};

declare class PSPDFColorButton extends PSPDFButton {

	static alloc(): PSPDFColorButton; // inherited from NSObject

	static appearance(): PSPDFColorButton; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PSPDFColorButton; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PSPDFColorButton; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): PSPDFColorButton; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PSPDFColorButton; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): PSPDFColorButton; // inherited from UIAppearance

	static buttonWithType(buttonType: UIButtonType): PSPDFColorButton; // inherited from UIButton

	static new(): PSPDFColorButton; // inherited from NSObject

	borderWidth: number;

	color: UIColor;

	displayAsEllipse: boolean;

	indicatorSize: CGSize;
}

declare class PSPDFColorPalette extends NSObject {

	static alloc(): PSPDFColorPalette; // inherited from NSObject

	static colorPaletteWithTitleColorPatches(title: string, patches: NSArray<PSPDFColorPatch>): PSPDFColorPalette;

	static hsvColorPalette(): PSPDFColorPalette;

	static hsvColorPaletteWithTitle(title: string): PSPDFColorPalette;

	static modernColorPalette(): PSPDFColorPalette;

	static monochromeColorPalette(): PSPDFColorPalette;

	static monochromeTransparentPalette(): PSPDFColorPalette;

	static new(): PSPDFColorPalette; // inherited from NSObject

	static paperColorPalette(): PSPDFColorPalette;

	static rainbowColorPalette(): PSPDFColorPalette;

	static vintageColorPalette(): PSPDFColorPalette;

	readonly colorPatches: NSArray<PSPDFColorPatch>;

	readonly title: string;
}

declare class PSPDFColorPatch extends NSObject {

	static alloc(): PSPDFColorPatch; // inherited from NSObject

	static colorPatchWithColor(color: UIColor): PSPDFColorPatch;

	static colorPatchWithColors(colors: NSArray<UIColor>): PSPDFColorPatch;

	static new(): PSPDFColorPatch; // inherited from NSObject

	readonly colors: NSArray<UIColor>;
}

declare class PSPDFColorPickerFactory extends NSObject {

	static alloc(): PSPDFColorPickerFactory; // inherited from NSObject

	static colorPalettesInColorSet(colorSet: PSPDFColorSet): NSArray<PSPDFColorPalette>;

	static new(): PSPDFColorPickerFactory; // inherited from NSObject
}

declare class PSPDFColorPreset extends PSPDFModel {

	static alloc(): PSPDFColorPreset; // inherited from NSObject

	static modelWithDictionaryError(dictionaryValue: NSDictionary<string, any>): PSPDFColorPreset; // inherited from PSPDFModel

	static new(): PSPDFColorPreset; // inherited from NSObject

	static presetWithColor(color: UIColor): PSPDFColorPreset;

	static presetWithColorFillColorAlpha(color: UIColor, fillColor: UIColor, alpha: number): PSPDFColorPreset;

	readonly alpha: number;

	readonly color: UIColor;

	readonly colorWithAlpha: UIColor;

	readonly fillColor: UIColor;

	readonly fillColorWithAlpha: UIColor;
}

declare const enum PSPDFColorSet {

	Default = 0,

	DefaultWithTransparency = 1,

	PageBackgrounds = 2
}

declare class PSPDFCompression extends PSPDFModel {

	static alloc(): PSPDFCompression; // inherited from NSObject

	static compressionName(compression: number, name: string): PSPDFCompression;

	static modelWithDictionaryError(dictionaryValue: NSDictionary<string, any>): PSPDFCompression; // inherited from PSPDFModel

	static new(): PSPDFCompression; // inherited from NSObject

	readonly compression: number;

	readonly localizedName: string;

	readonly name: string;

	constructor(o: { compression: number; name: string; });

	initWithCompressionName(compression: number, name: string): this;
}

declare class PSPDFConfiguration extends PSPDFBaseConfiguration<PSPDFConfigurationBuilder> implements PSPDFOverridable {

	static alloc(): PSPDFConfiguration; // inherited from NSObject

	static configurationWithBuilder(builderBlock: (p1: BuilderType) => void): PSPDFConfiguration; // inherited from PSPDFBaseConfiguration

	static defaultConfiguration(): PSPDFConfiguration; // inherited from PSPDFBaseConfiguration

	static modelWithDictionaryError(dictionaryValue: NSDictionary<string, any>): PSPDFConfiguration; // inherited from PSPDFModel

	static new(): PSPDFConfiguration; // inherited from NSObject

	readonly HUDViewAnimation: PSPDFHUDViewAnimation;

	readonly HUDViewMode: PSPDFHUDViewMode;

	readonly allowBackgroundSaving: boolean;

	readonly allowToolbarTitleChange: boolean;

	readonly allowedAppearanceModes: PSPDFAppearanceMode;

	readonly allowedMenuActions: PSPDFTextSelectionMenuAction;

	readonly alwaysBouncePages: boolean;

	readonly annotationAnimationDuration: number;

	readonly annotationEntersEditModeAfterSecondTapEnabled: boolean;

	readonly annotationGroupingEnabled: boolean;

	readonly applicationActivities: NSArray<any>;

	readonly autosaveEnabled: boolean;

	readonly backgroundColor: UIColor;

	readonly bookmarkIndicatorInteractionEnabled: boolean;

	readonly bookmarkIndicatorMode: PSPDFPageBookmarkIndicatorMode;

	readonly bookmarkSortOrder: PSPDFBookmarkManagerSortOrder;

	readonly clipToPageBoundaries: boolean;

	readonly createAnnotationMenuEnabled: boolean;

	readonly createAnnotationMenuGroups: NSArray<PSPDFAnnotationGroup>;

	readonly customerSignatureFeatureEnabled: boolean;

	readonly documentLabelEnabled: PSPDFAdaptiveConditional;

	readonly doublePageModeOnFirstPage: boolean;

	readonly doubleTapAction: PSPDFTapAction;

	readonly drawCreateMode: PSPDFDrawCreateMode;

	readonly editableAnnotationTypes: NSSet<string>;

	readonly excludedActivityTypes: NSArray<string>;

	readonly firstPageAlwaysSingle: boolean;

	readonly fitToWidthEnabled: PSPDFAdaptiveConditional;

	readonly fixedVerticalPositionForFitToWidthEnabledMode: boolean;

	readonly formElementZoomEnabled: boolean;

	readonly freeTextAccessoryViewEnabled: boolean;

	readonly galleryConfiguration: PSPDFGalleryConfiguration;

	readonly imageSelectionEnabled: boolean;

	readonly internalTapGesturesEnabled: boolean;

	readonly linkAction: PSPDFLinkAction;

	readonly mailSharingOptions: PSPDFDocumentSharingOptions;

	readonly margin: UIEdgeInsets;

	readonly maximumZoomScale: number;

	readonly messageSharingOptions: PSPDFDocumentSharingOptions;

	readonly minimumZoomScale: number;

	readonly naturalDrawingAnnotationEnabled: boolean;

	readonly naturalSignatureDrawingEnabled: boolean;

	readonly openInSharingOptions: PSPDFDocumentSharingOptions;

	readonly padding: UIEdgeInsets;

	readonly pageCurlDirectionLeftToRight: boolean;

	readonly pageLabelEnabled: boolean;

	readonly pageMode: PSPDFPageMode;

	readonly pagePadding: number;

	readonly pageTransition: PSPDFPageTransition;

	readonly printConfiguration: PSPDFPrintConfiguration;

	readonly printSharingOptions: PSPDFDocumentSharingOptions;

	readonly propertiesForAnnotations: NSDictionary<string, any>;

	readonly renderAnimationEnabled: boolean;

	readonly renderStatusViewPosition: PSPDFRenderStatusViewPosition;

	readonly scrollDirection: PSPDFScrollDirection;

	readonly scrollOnTapPageEndAnimationEnabled: boolean;

	readonly scrollOnTapPageEndEnabled: boolean;

	readonly scrollOnTapPageEndMargin: number;

	readonly scrollViewInsetAdjustment: PSPDFScrollInsetAdjustment;

	readonly scrubberBarType: PSPDFScrubberBarType;

	readonly searchMode: PSPDFSearchMode;

	readonly searchResultZoomScale: number;

	readonly settingsOptions: PSPDFSettingsOptions;

	readonly shadowEnabled: boolean;

	readonly shadowOpacity: number;

	readonly shouldAskForAnnotationUsername: boolean;

	readonly shouldCacheThumbnails: boolean;

	readonly shouldHideHUDOnPageChange: boolean;

	readonly shouldHideNavigationBarWithHUD: boolean;

	readonly shouldHideStatusBar: boolean;

	readonly shouldHideStatusBarWithHUD: boolean;

	readonly shouldScrollToChangedPage: boolean;

	readonly shouldShowHUDOnViewWillAppear: boolean;

	readonly showAnnotationMenuAfterCreation: boolean;

	readonly showBackActionButton: boolean;

	readonly showBackForwardActionButtonLabels: boolean;

	readonly showForwardActionButton: boolean;

	readonly showsHorizontalScrollIndicator: boolean;

	readonly showsVerticalScrollIndicator: boolean;

	readonly signatureSavingEnabled: boolean;

	readonly signatureStore: PSPDFSignatureStore;

	readonly soundAnnotationRecordingOptions: NSDictionary<string, any>;

	readonly soundAnnotationTimeLimit: number;

	readonly textSelectionEnabled: boolean;

	readonly textSelectionMode: PSPDFTextSelectionMode;

	readonly textSelectionShouldSnapToWord: boolean;

	readonly thumbnailBarMode: PSPDFThumbnailBarMode;

	readonly thumbnailGrouping: PSPDFThumbnailGrouping;

	readonly thumbnailInteritemSpacing: number;

	readonly thumbnailLineSpacing: number;

	readonly thumbnailMargin: UIEdgeInsets;

	readonly thumbnailSize: CGSize;

	readonly typesShowingColorPresets: PSPDFAnnotationType;

	readonly useParentNavigationBar: boolean;

	readonly zoomingSmallDocumentsEnabled: boolean;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	classForClass(originalClass: typeof NSObject): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class PSPDFConfigurationBuilder extends PSPDFBaseConfigurationBuilder {

	static alloc(): PSPDFConfigurationBuilder; // inherited from NSObject

	static new(): PSPDFConfigurationBuilder; // inherited from NSObject

	HUDViewAnimation: PSPDFHUDViewAnimation;

	HUDViewMode: PSPDFHUDViewMode;

	allowBackgroundSaving: boolean;

	allowToolbarTitleChange: boolean;

	allowedAppearanceModes: PSPDFAppearanceMode;

	allowedMenuActions: PSPDFTextSelectionMenuAction;

	alwaysBouncePages: boolean;

	annotationAnimationDuration: number;

	annotationEntersEditModeAfterSecondTapEnabled: boolean;

	annotationGroupingEnabled: boolean;

	applicationActivities: NSArray<any>;

	autosaveEnabled: boolean;

	backgroundColor: UIColor;

	bookmarkIndicatorInteractionEnabled: boolean;

	bookmarkIndicatorMode: PSPDFPageBookmarkIndicatorMode;

	bookmarkSortOrder: PSPDFBookmarkManagerSortOrder;

	clipToPageBoundaries: boolean;

	createAnnotationMenuEnabled: boolean;

	createAnnotationMenuGroups: NSArray<PSPDFAnnotationGroup>;

	customerSignatureFeatureEnabled: boolean;

	documentLabelEnabled: PSPDFAdaptiveConditional;

	doublePageModeOnFirstPage: boolean;

	doubleTapAction: PSPDFTapAction;

	drawCreateMode: PSPDFDrawCreateMode;

	editableAnnotationTypes: NSSet<string>;

	excludedActivityTypes: NSArray<string>;

	firstPageAlwaysSingle: boolean;

	fitToWidthEnabled: PSPDFAdaptiveConditional;

	fixedVerticalPositionForFitToWidthEnabledMode: boolean;

	formElementZoomEnabled: boolean;

	freeTextAccessoryViewEnabled: boolean;

	galleryConfiguration: PSPDFGalleryConfiguration;

	imageSelectionEnabled: boolean;

	internalTapGesturesEnabled: boolean;

	linkAction: PSPDFLinkAction;

	mailSharingOptions: PSPDFDocumentSharingOptions;

	margin: UIEdgeInsets;

	maximumZoomScale: number;

	messageSharingOptions: PSPDFDocumentSharingOptions;

	minimumZoomScale: number;

	naturalDrawingAnnotationEnabled: boolean;

	naturalSignatureDrawingEnabled: boolean;

	openInSharingOptions: PSPDFDocumentSharingOptions;

	padding: UIEdgeInsets;

	pageCurlDirectionLeftToRight: boolean;

	pageLabelEnabled: boolean;

	pageMode: PSPDFPageMode;

	pagePadding: number;

	pageTransition: PSPDFPageTransition;

	printConfiguration: PSPDFPrintConfiguration;

	printSharingOptions: PSPDFDocumentSharingOptions;

	propertiesForAnnotations: NSDictionary<string, any>;

	renderAnimationEnabled: boolean;

	renderStatusViewPosition: PSPDFRenderStatusViewPosition;

	scrollDirection: PSPDFScrollDirection;

	scrollOnTapPageEndAnimationEnabled: boolean;

	scrollOnTapPageEndEnabled: boolean;

	scrollOnTapPageEndMargin: number;

	scrollViewInsetAdjustment: PSPDFScrollInsetAdjustment;

	scrubberBarType: PSPDFScrubberBarType;

	searchMode: PSPDFSearchMode;

	searchResultZoomScale: number;

	settingsOptions: PSPDFSettingsOptions;

	shadowEnabled: boolean;

	shadowOpacity: number;

	shouldAskForAnnotationUsername: boolean;

	shouldCacheThumbnails: boolean;

	shouldHideHUDOnPageChange: boolean;

	shouldHideNavigationBarWithHUD: boolean;

	shouldHideStatusBar: boolean;

	shouldHideStatusBarWithHUD: boolean;

	shouldRestoreNavigationBarStyle: boolean;

	shouldScrollToChangedPage: boolean;

	shouldShowHUDOnViewWillAppear: boolean;

	showAnnotationMenuAfterCreation: boolean;

	showBackActionButton: boolean;

	showBackForwardActionButtonLabels: boolean;

	showForwardActionButton: boolean;

	showsHorizontalScrollIndicator: boolean;

	showsVerticalScrollIndicator: boolean;

	signatureSavingEnabled: boolean;

	signatureStore: PSPDFSignatureStore;

	soundAnnotationRecordingOptions: NSDictionary<string, any>;

	soundAnnotationTimeLimit: number;

	textSelectionEnabled: boolean;

	textSelectionMode: PSPDFTextSelectionMode;

	textSelectionShouldSnapToWord: boolean;

	thumbnailBarMode: PSPDFThumbnailBarMode;

	thumbnailGrouping: PSPDFThumbnailGrouping;

	thumbnailInteritemSpacing: number;

	thumbnailLineSpacing: number;

	thumbnailMargin: UIEdgeInsets;

	thumbnailSize: CGSize;

	typesShowingColorPresets: PSPDFAnnotationType;

	useParentNavigationBar: boolean;

	zoomingSmallDocumentsEnabled: boolean;

	overrideClassWithClass(builtinClass: typeof NSObject, subclass: typeof NSObject): void;
}

declare class PSPDFContainerAnnotationProvider extends NSObject implements PSPDFAnnotationProvider, PSPDFUndoProtocol {

	static alloc(): PSPDFContainerAnnotationProvider; // inherited from NSObject

	static keysForValuesToObserveForUndo(): NSSet<string>;

	static localizedUndoActionNameForKey(key: string): string;

	static new(): PSPDFContainerAnnotationProvider; // inherited from NSObject

	static undoCoalescingForKey(key: string): PSPDFUndoCoalescing;

	readonly allAnnotations: NSArray<PSPDFAnnotation>;

	readonly annotationCache: NSMutableDictionary<number, NSArray<PSPDFAnnotation>>;

	readonly annotations: NSDictionary<number, NSArray<PSPDFAnnotation>>;

	readonly documentProvider: PSPDFDocumentProvider;

	readonly undoController: PSPDFUndoController;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly dirtyAnnotations: NSDictionary<number, NSArray<PSPDFAnnotation>>; // inherited from PSPDFAnnotationProvider

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	providerDelegate: PSPDFAnnotationProviderChangeNotifier; // inherited from PSPDFAnnotationProvider

	readonly shouldSaveAnnotations: boolean; // inherited from PSPDFAnnotationProvider

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { documentProvider: PSPDFDocumentProvider; });

	addAnnotationsOptions(annotations: NSArray<PSPDFAnnotation>, options: NSDictionary<string, any>): NSArray<PSPDFAnnotation>;

	annotationViewClassForAnnotation(annotation: PSPDFAnnotation): typeof NSObject;

	annotationsForPageAtIndex(pageIndex: number): NSArray<PSPDFAnnotation>;

	class(): typeof NSObject;

	clearNeedsSaveFlag(): void;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	didChangeAnnotationKeyPathsOptions(annotation: PSPDFAnnotation, keyPaths: NSArray<string>, options: NSDictionary<string, any>): void;

	didUndoOrRedoChange(key: string): void;

	hasLoadedAnnotationsForPageAtIndex(pageIndex: number): boolean;

	initWithDocumentProvider(documentProvider: PSPDFDocumentProvider): this;

	insertUndoObjectsForKey(objects: NSSet<any>, key: string): void;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performBlockForReading(block: () => void): void;

	performBlockForWriting(block: () => void): void;

	performBlockForWritingAndWait(block: () => void): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	registerAnnotationsForUndo(annotations: NSArray<PSPDFAnnotation>): void;

	removeAllAnnotationsWithOptions(options: NSDictionary<string, any>): void;

	removeAnnotationsOptions(annotations: NSArray<PSPDFAnnotation>, options: NSDictionary<string, any>): NSArray<PSPDFAnnotation>;

	removeUndoObjectsForKey(objects: NSSet<any>, key: string): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	saveAnnotationsWithOptionsError(options: NSDictionary<string, any>): boolean;

	self(): this;

	setAnnotationCacheDirect(annotationCache: NSDictionary<number, NSArray<PSPDFAnnotation>>): void;

	setAnnotationsAppend(annotations: NSArray<PSPDFAnnotation>, append: boolean): void;

	setAnnotationsForPageAtIndexAppend(annotations: NSArray<PSPDFAnnotation>, pageIndex: number, append: boolean): void;

	willInsertAnnotations(annotations: NSArray<PSPDFAnnotation>): void;
}

declare class PSPDFContainerViewController extends PSPDFBaseViewController implements PSPDFStyleable {

	static alloc(): PSPDFContainerViewController; // inherited from NSObject

	static new(): PSPDFContainerViewController; // inherited from NSObject

	delegate: PSPDFContainerViewControllerDelegate;

	readonly filterSegment: UISegmentedControl;

	lastVisibleViewControllerTitleKey: string;

	shouldAnimateChanges: boolean;

	readonly viewControllers: NSArray<UIViewController>;

	visibleViewControllerIndex: number;

	barStyle: UIBarStyle; // inherited from PSPDFStyleable

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	forcesStatusBarHidden: boolean; // inherited from PSPDFStyleable

	readonly hash: number; // inherited from NSObjectProtocol

	isBarTranslucent: boolean; // inherited from PSPDFStyleable

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { controllers: NSArray<UIViewController>; titles: NSArray<string>; });

	addViewController(controller: UIViewController): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithControllersTitles(controllers: NSArray<UIViewController>, titles: NSArray<string>): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	removeViewController(controller: UIViewController): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	setVisibleViewControllerIndexAnimated(visibleViewControllerIndex: number, animated: boolean): void;
}

interface PSPDFContainerViewControllerDelegate extends NSObjectProtocol {

	containerViewControllerDidUpdateSelectedIndex?(controller: PSPDFContainerViewController, selectedIndex: number): void;
}
declare var PSPDFContainerViewControllerDelegate: {

	prototype: PSPDFContainerViewControllerDelegate;
};

declare class PSPDFContentScrollView extends PSPDFScrollView {

	static alloc(): PSPDFContentScrollView; // inherited from NSObject

	static appearance(): PSPDFContentScrollView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PSPDFContentScrollView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PSPDFContentScrollView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): PSPDFContentScrollView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PSPDFContentScrollView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): PSPDFContentScrollView; // inherited from UIAppearance

	static new(): PSPDFContentScrollView; // inherited from NSObject

	readonly contentController: UIViewController;

	constructor(o: { transitionViewController: UIViewController; });

	initWithTransitionViewController(viewController: UIViewController): this;
}

interface PSPDFControlDelegate extends PSPDFErrorHandler, PSPDFHUDControls, PSPDFPageControls, PSPDFPresentationActions {
}
declare var PSPDFControlDelegate: {

	prototype: PSPDFControlDelegate;
};

declare const enum PSPDFControllerState {

	Empty = 0,

	Loading = 1,

	Default = 2,

	Error = 3,

	Locked = 4
}

interface PSPDFControllerStateHandling extends NSObjectProtocol {

	document: PSPDFDocument;

	setControllerStateErrorAnimated(state: PSPDFControllerState, error: NSError, animated: boolean): void;
}
declare var PSPDFControllerStateHandling: {

	prototype: PSPDFControllerStateHandling;
};

declare class PSPDFConversionOperation extends NSOperation {

	static alloc(): PSPDFConversionOperation; // inherited from NSObject

	static new(): PSPDFConversionOperation; // inherited from NSObject

	readonly error: NSError;

	readonly inputURL: NSURL;

	readonly options: NSDictionary<string, any>;

	readonly outputData: NSData;

	readonly outputURL: NSURL;
}

declare var PSPDFConvertFreeTextAnnotationCalloutActionKey: string;

declare function PSPDFConvertPDFLinesToViewLines(lines: NSArray<NSArray<NSValue>>, cropBox: CGRect, rotation: number, bounds: CGRect): NSArray<NSArray<NSValue>>;

declare function PSPDFConvertPDFPointToViewPoint(pdfPoint: CGPoint, cropBox: CGRect, rotation: number, bounds: CGRect): CGPoint;

declare function PSPDFConvertPDFRectToViewRect(pdfRect: CGRect, cropBox: CGRect, rotation: number, bounds: CGRect): CGRect;

declare function PSPDFConvertViewLineToPDFLines(line: NSArray<NSValue>, cropBox: CGRect, rotation: number, bounds: CGRect): NSArray<NSValue>;

declare function PSPDFConvertViewLinesToPDFLines(lines: NSArray<NSArray<NSValue>>, cropBox: CGRect, rotation: number, bounds: CGRect): NSArray<NSArray<NSValue>>;

declare function PSPDFConvertViewPointToPDFPoint(viewPoint: CGPoint, cropBox: CGRect, rotation: number, bounds: CGRect): CGPoint;

declare function PSPDFConvertViewRectToPDFRect(viewRect: CGRect, cropBox: CGRect, rotation: number, bounds: CGRect): CGRect;

declare function PSPDFConvertXFDFSoundEncodingToPDF(encoding: string): string;

declare var PSPDFCoordinatedFileManagerKey: string;

declare class PSPDFCryptoInputStream extends NSInputStream {

	static alloc(): PSPDFCryptoInputStream; // inherited from NSObject

	static inputStreamWithData(data: NSData): PSPDFCryptoInputStream; // inherited from NSInputStream

	static inputStreamWithFileAtPath(path: string): PSPDFCryptoInputStream; // inherited from NSInputStream

	static inputStreamWithURL(url: NSURL): PSPDFCryptoInputStream; // inherited from NSInputStream

	static new(): PSPDFCryptoInputStream; // inherited from NSObject

	decryptionBlock: (p1: PSPDFCryptoInputStream, p2: string, p3: number) => number;

	constructor(o: { inputStream: NSInputStream; decryptionBlock: (p1: PSPDFCryptoInputStream, p2: string, p3: number) => number; });

	initWithInputStreamDecryptionBlock(stream: NSInputStream, decryptionBlock: (p1: PSPDFCryptoInputStream, p2: string, p3: number) => number): this;
}

declare class PSPDFCryptoOutputStream extends NSOutputStream {

	static alloc(): PSPDFCryptoOutputStream; // inherited from NSObject

	static new(): PSPDFCryptoOutputStream; // inherited from NSObject

	static outputStreamToBufferCapacity(buffer: string, capacity: number): PSPDFCryptoOutputStream; // inherited from NSOutputStream

	static outputStreamToFileAtPathAppend(path: string, shouldAppend: boolean): PSPDFCryptoOutputStream; // inherited from NSOutputStream

	static outputStreamToMemory(): PSPDFCryptoOutputStream; // inherited from NSOutputStream

	static outputStreamWithURLAppend(url: NSURL, shouldAppend: boolean): PSPDFCryptoOutputStream; // inherited from NSOutputStream

	encryptionBlock: (p1: PSPDFCryptoOutputStream, p2: string, p3: number) => NSData;

	constructor(o: { outputStream: NSOutputStream; encryptionBlock: (p1: PSPDFCryptoOutputStream, p2: string, p3: number) => NSData; });

	initWithOutputStreamEncryptionBlock(stream: NSOutputStream, encryptionBlock: (p1: PSPDFCryptoOutputStream, p2: string, p3: number) => NSData): this;
}

declare class PSPDFCryptor extends NSObject {

	static alloc(): PSPDFCryptor; // inherited from NSObject

	static new(): PSPDFCryptor; // inherited from NSObject

	fileManager: PSPDFFileManager;

	decryptFromURLToURLKeyError(sourceURL: NSURL, targetURL: NSURL, key: NSData): boolean;

	decryptFromURLToURLPassphraseError(sourceURL: NSURL, targetURL: NSURL, passphrase: string): boolean;

	encryptFromURLToURLKeyError(sourceURL: NSURL, targetURL: NSURL, key: NSData): boolean;

	encryptFromURLToURLPassphraseError(sourceURL: NSURL, targetURL: NSURL, passphrase: string): boolean;

	keyFromPassphraseSalt(passphrase: string, salt: string): NSData;

	legacyKeyFromPassphraseSalt(passphrase: string, salt: string): NSData;
}

declare const enum PSPDFCryptorErrorCode {

	FailedToInitCryptor = 100,

	FailedToProcessFile = 110,

	InvalidIV = 200,

	WritingOutputFile = 600,

	ReadingInputFile = 700
}

declare var PSPDFCryptorErrorDomain: string;

declare class PSPDFDataContainerProvider extends NSObject implements PSPDFDataProvider {

	static alloc(): PSPDFDataContainerProvider; // inherited from NSObject

	static new(): PSPDFDataContainerProvider; // inherited from NSObject

	readonly UID: string; // inherited from PSPDFDataProvider

	readonly additionalOperationsSupported: PSPDFDataProviderAdditionalOperations; // inherited from PSPDFDataProvider

	readonly data: NSData; // inherited from PSPDFDataProvider

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly size: number; // inherited from PSPDFDataProvider

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { data: NSData; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	createDataSinkWithOptionsError(options: PSPDFDataSinkOptions): PSPDFDataSink;

	deleteDataWithError(): boolean;

	encodeWithCoder(aCoder: NSCoder): void;

	initWithCoder(aDecoder: NSCoder): this;

	initWithData(data: NSData): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	readDataWithSizeAtOffset(size: number, offset: number): NSData;

	replaceWithDataSink(replacementDataSink: PSPDFDataSink): boolean;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class PSPDFDataContainerSink extends NSObject implements PSPDFDataSink {

	static alloc(): PSPDFDataContainerSink; // inherited from NSObject

	static new(): PSPDFDataContainerSink; // inherited from NSObject

	readonly data: NSData;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isFinished: boolean; // inherited from PSPDFDataSink

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { data: NSData; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	finish(): boolean;

	initWithData(data: NSData): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	writeData(data: NSData): boolean;
}

interface PSPDFDataProvider extends NSObjectProtocol, NSSecureCoding {

	UID: string;

	additionalOperationsSupported: PSPDFDataProviderAdditionalOperations;

	data: NSData;

	size: number;

	createDataSinkWithOptionsError?(options: PSPDFDataSinkOptions): PSPDFDataSink;

	deleteDataWithError?(): boolean;

	readDataWithSizeAtOffset(size: number, offset: number): NSData;

	replaceWithDataSink?(replacementDataSink: PSPDFDataSink): boolean;
}
declare var PSPDFDataProvider: {

	prototype: PSPDFDataProvider;
};

declare const enum PSPDFDataProviderAdditionalOperations {

	None = 0,

	Write = 1
}

interface PSPDFDataSink extends NSObjectProtocol {

	isFinished: boolean;

	finish(): boolean;

	writeData(data: NSData): boolean;
}
declare var PSPDFDataSink: {

	prototype: PSPDFDataSink;
};

declare const enum PSPDFDataSinkOptions {

	None = 0,

	Append = 1
}

interface PSPDFDatabaseEncryptionProvider extends NSObjectProtocol {

	encryptDatabaseWithKey(db: interop.Pointer | interop.Reference<any>, keyData: NSData): boolean;

	reEncryptDatabaseWithKey(db: interop.Pointer | interop.Reference<any>, keyData: NSData): boolean;
}
declare var PSPDFDatabaseEncryptionProvider: {

	prototype: PSPDFDatabaseEncryptionProvider;
};

declare class PSPDFDefaultAnnotationStyleManager extends NSObject implements PSPDFAnnotationStyleManager {

	static alloc(): PSPDFDefaultAnnotationStyleManager; // inherited from NSObject

	static new(): PSPDFDefaultAnnotationStyleManager; // inherited from NSObject

	shouldUpdateDefaultsForAnnotationChanges: boolean; // inherited from PSPDFAnnotationStyleManager

	styleKeys: NSSet<string>; // inherited from PSPDFAnnotationStyleManager

	addStyleForKey(style: PSPDFAnnotationStyle, key: string): void;

	defaultPresetsForKeyType(key: string, type: string): NSArray<PSPDFModel>;

	isPresetModifiedAtIndexForKeyType(index: number, key: string, type: string): boolean;

	lastUsedPropertyForKey(styleProperty: string, key: string): any;

	lastUsedStyleForKey(key: string): PSPDFAnnotationStyle;

	presetsForKeyType(key: string, type: string): NSArray<PSPDFModel>;

	removeStyleForKey(style: PSPDFAnnotationStyle, key: string): void;

	resetPresetAtIndexForKeyType(idx: number, key: string, type: string): boolean;

	setLastUsedValueForPropertyForKey(value: any, styleProperty: string, key: string): void;

	setPresetsForKeyType(presets: NSArray<PSPDFModel>, key: string, type: string): void;

	setupDefaultStylesIfNeeded(): void;

	stylesForKey(key: string): NSArray<PSPDFAnnotationStyle>;
}

declare class PSPDFDefaultApplication extends NSObject implements PSPDFApplication {

	static alloc(): PSPDFDefaultApplication; // inherited from NSObject

	static new(): PSPDFDefaultApplication; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly networkIndicatorManager: PSPDFNetworkActivityIndicatorManager; // inherited from PSPDFApplication

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	canOpenURL(url: NSURL): boolean;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	openURLOptionsCompletionHandler(url: NSURL, options: NSDictionary<string, any>, completionHandler: (p1: boolean) => void): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class PSPDFDefaultApplicationPolicy extends NSObject implements PSPDFApplicationPolicy {

	static alloc(): PSPDFDefaultApplicationPolicy; // inherited from NSObject

	static new(): PSPDFDefaultApplicationPolicy; // inherited from NSObject

	hasPermissionForEventIsUserAction(event: string, isUserAction: boolean): boolean;
}

declare class PSPDFDefaultFileManager extends NSObject implements PSPDFFileManager {

	static alloc(): PSPDFDefaultFileManager; // inherited from NSObject

	static new(): PSPDFDefaultFileManager; // inherited from NSObject

	readonly applicationSupportDirectory: string; // inherited from PSPDFFileManager

	readonly cachesDirectory: string; // inherited from PSPDFFileManager

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly documentDirectory: string; // inherited from PSPDFFileManager

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly libraryDirectory: string; // inherited from PSPDFFileManager

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly usesEncryption: boolean; // inherited from PSPDFFileManager

	readonly  // inherited from NSObjectProtocol

	constructor(o: { options: NSDictionary<string, any>; });

	allowsPolicyEvent(policyEvent: string): boolean;

	attributesOfFileSystemForPathError(path: string): NSDictionary<string, any>;

	attributesOfItemAtPathError(path: string): NSDictionary<string, any>;

	class(): typeof NSObject;

	cleanupIfTemporaryFile(URL: NSURL): boolean;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	contentsOfDirectoryAtPathError(path: string): NSArray<string>;

	copyFileToUnencryptedLocationIfRequiredPolicyEventError(fileURL: NSURL, policyEvent: string): NSURL;

	copyItemAtURLToURLError(sourceURL: NSURL, destinationURL: NSURL): boolean;

	createDirectoryAtPathWithIntermediateDirectoriesAttributesError(path: string, createIntermediates: boolean, attributes: NSDictionary<string, any>): boolean;

	createFileAtPathContentsAttributes(path: string, data: NSData, attributes: NSDictionary<string, any>): boolean;

	createTemporaryWritableDataProviderWithPrefix(prefix: string): PSPDFDataProvider;

	dataWithContentsOfFileOptionsError(path: string, readOptionsMask: NSDataReadingOptions): NSData;

	dataWithContentsOfURLOptionsError(fileURL: NSURL, readOptionsMask: NSDataReadingOptions): NSData;

	destinationOfSymbolicLinkAtPathError(path: string): string;

	enumeratorAtPath(path: string): NSDirectoryEnumerator<string>;

	enumeratorAtURLIncludingPropertiesForKeysOptionsErrorHandler(url: NSURL, keys: NSArray<string>, mask: NSDirectoryEnumerationOptions, handler: (p1: NSURL, p2: NSError) => boolean): NSDirectoryEnumerator<NSURL>;

	fileExistsAtPath(path: string): boolean;

	fileExistsAtPathIsDirectory(path: string, isDirectory: interop.Pointer | interop.Reference<boolean>): boolean;

	fileExistsAtURL(url: NSURL): boolean;

	fileExistsAtURLIsDirectory(url: NSURL, isDirectory: interop.Pointer | interop.Reference<boolean>): boolean;

	fileHandleForReadingFromURLErrorWithBlock(url: NSURL, error: interop.Pointer | interop.Reference<NSError>, reader: (p1: NSFileHandle) => boolean): boolean;

	fileHandleForUpdatingURLErrorWithBlock(url: NSURL, error: interop.Pointer | interop.Reference<NSError>, updater: (p1: NSFileHandle) => boolean): boolean;

	fileHandleForWritingToURLErrorWithBlock(url: NSURL, error: interop.Pointer | interop.Reference<NSError>, writer: (p1: NSFileHandle) => boolean): boolean;

	fileSystemRepresentationForPath(path: string): string;

	initWithOptions(options: NSDictionary<string, any>): this;

	isDeletableFileAtPath(path: string): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	isNativePath(path: string): boolean;

	isWritableFileAtPath(path: string): boolean;

	moveItemAtURLToURLError(sourceURL: NSURL, destinationURL: NSURL): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	removeItemAtPathError(path: string): boolean;

	removeItemAtURLError(URL: NSURL): boolean;

	replaceItemAtURLWithItemAtURLBackupItemNameOptionsResultingItemURLError(originalItemURL: NSURL, newItemURL: NSURL, backupItemName: string, options: NSFileManagerItemReplacementOptions, resultingURL: interop.Pointer | interop.Reference<NSURL>): boolean;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	subpathsOfDirectoryAtPathError(path: string): NSArray<string>;

	temporaryDirectoryWithUID(UID: string): string;

	unencryptedTemporaryDirectoryWithUID(UID: string): string;

	writeDataToFileOptionsError(data: NSData, path: string, writeOptionsMask: NSDataWritingOptions): boolean;

	writeDataToURLOptionsError(data: NSData, fileURL: NSURL, writeOptionsMask: NSDataWritingOptions): boolean;
}

declare var PSPDFDefaultIntensity: number;

declare class PSPDFDefaultNetworkActivityIndicatorManager extends NSObject implements PSPDFNetworkActivityIndicatorManager {

	static alloc(): PSPDFDefaultNetworkActivityIndicatorManager; // inherited from NSObject

	static new(): PSPDFDefaultNetworkActivityIndicatorManager; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	enabled: boolean; // inherited from PSPDFNetworkActivityIndicatorManager

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isNetworkActivityIndicatorVisible: boolean; // inherited from PSPDFNetworkActivityIndicatorManager

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	decrementActivityCount(): void;

	incrementActivityCount(): void;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare var PSPDFDefaultPBKDFNumberOfRounds: number;

declare class PSPDFDefaultStylusTouch extends NSObject implements PSPDFStylusTouch {

	static alloc(): PSPDFDefaultStylusTouch; // inherited from NSObject

	static new(): PSPDFDefaultStylusTouch; // inherited from NSObject

	readonly classification: PSPDFStylusTouchClassification; // inherited from PSPDFStylusTouch

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly pressure: number; // inherited from PSPDFStylusTouch

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { classification: PSPDFStylusTouchClassification; pressure: number; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithClassificationPressure(classification: PSPDFStylusTouchClassification, pressure: number): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	locationInView(view: UIView): CGPoint;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare var PSPDFDefaultTextPaddingFactor: number;

declare class PSPDFDigitalSignatureReference extends PSPDFModel {

	static alloc(): PSPDFDigitalSignatureReference; // inherited from NSObject

	static modelWithDictionaryError(dictionaryValue: NSDictionary<string, any>): PSPDFDigitalSignatureReference; // inherited from PSPDFModel

	static new(): PSPDFDigitalSignatureReference; // inherited from NSObject

	digestLocation: NSRange;

	digestMethod: string;

	digestValue: string;

	transformMethod: PSPDFDigitalSignatureReferenceTransformMethod;

	transformParams: NSDictionary<string, any>;
}

declare const enum PSPDFDigitalSignatureReferenceTransformMethod {

	DocMDP = 1,

	UR = 2,

	FieldMDP = 4,

	Identity = 8
}

declare class PSPDFDirectory extends PSPDFModel {

	static alloc(): PSPDFDirectory; // inherited from NSObject

	static directoryWithPath(path: string): PSPDFDirectory;

	static directoryWithPathName(path: string, name: string): PSPDFDirectory;

	static modelWithDictionaryError(dictionaryValue: NSDictionary<string, any>): PSPDFDirectory; // inherited from PSPDFModel

	static new(): PSPDFDirectory; // inherited from NSObject

	readonly localizedName: string;

	readonly name: string;

	readonly path: string;

	constructor(o: { path: string; name: string; });

	initWithPathName(path: string, name: string): this;
}

declare class PSPDFDiskCache extends NSObject {

	static alloc(): PSPDFDiskCache; // inherited from NSObject

	static new(): PSPDFDiskCache; // inherited from NSObject

	allowedDiskSpace: number;

	cacheDirectory: string;

	decryptionHelper: (p1: PSPDFRenderRequest, p2: NSData) => NSData;

	encryptionHelper: (p1: PSPDFRenderRequest, p2: NSData) => NSData;

	fileFormat: PSPDFDiskCacheFileFormat;

	jpegCompression: number;

	readonly usedDiskSpace: number;

	constructor(o: { cacheDirectory: string; fileFormat: PSPDFDiskCacheFileFormat; settings: PSPDFKit; });

	initWithCacheDirectoryFileFormatSettings(cacheDirectory: string, fileFormat: PSPDFDiskCacheFileFormat, settings: PSPDFKit): this;
}

declare const enum PSPDFDiskCacheFileFormat {

	JPEG = 0,

	PNG = 1
}

declare const enum PSPDFDiskCacheStrategy {

	Nothing = 0,

	Thumbnails = 1,

	NearPages = 2,

	Everything = 3
}

declare class PSPDFDocument extends NSObject implements NSCopying, NSFastEnumeration, NSSecureCoding, PSPDFDocumentProviderDelegate, PSPDFOverridable {

	static alloc(): PSPDFDocument; // inherited from NSObject

	static deserializeLibraryMetadataError(data: NSData): NSDictionary<any, any>;

	static document(): PSPDFDocument;

	static documentWithBaseURLFileTemplateStartPageEndPage(baseURL: NSURL, fileTemplate: string, startPage: number, endPage: number): PSPDFDocument;

	static documentWithBaseURLFiles(baseURL: NSURL, files: NSArray<string>): PSPDFDocument;

	static documentWithContent(content: any): PSPDFDocument;

	static documentWithContentSignatures(content: any, signatures: NSArray<NSData>): PSPDFDocument;

	static documentWithData(data: NSData): PSPDFDocument;

	static documentWithDataArray(dataArray: NSArray<NSData>): PSPDFDocument;

	static documentWithDataProvider(dataProvider: PSPDFDataProvider): PSPDFDocument;

	static documentWithDataProviderArray(dataProviders: NSArray<PSPDFDataProvider>): PSPDFDocument;

	static documentWithURL(URL: NSURL): PSPDFDocument;

	static new(): PSPDFDocument; // inherited from NSObject

	static serializeLibraryMetadataError(metadata: NSDictionary<any, any>): NSData;

	static validateLibraryMetadata(metadata: NSDictionary<any, any>): boolean;

	UID: string;

	readonly allEmbeddedFiles: NSArray<PSPDFEmbeddedFile>;

	readonly allowAnnotationChanges: boolean;

	alwaysRewriteOnSave: boolean;

	annotationSaveMode: PSPDFAnnotationSaveMode;

	annotationWritingOptions: NSDictionary<string, number>;

	annotationsEnabled: boolean;

	autodetectTextLinkTypes: PSPDFTextCheckingType;

	readonly baseURL: NSURL;

	readonly bookmarkManager: PSPDFBookmarkManager;

	readonly bookmarks: NSArray<PSPDFBookmark>;

	bookmarksEnabled: boolean;

	readonly canEmbedAnnotations: boolean;

	readonly canSaveAnnotations: boolean;

	readonly containsAnnotations: boolean;

	readonly contentSignatures: NSArray<NSData>;

	readonly data: NSData;

	readonly dataArray: NSArray<NSData>;

	dataDirectory: string;

	readonly dataProviderArray: NSArray<PSPDFDataProvider>;

	defaultAnnotationUsername: string;

	delegate: PSPDFDocumentDelegate;

	didCreateDocumentProviderBlock: (p1: PSPDFDocumentProvider) => void;

	diskCacheStrategy: PSPDFDiskCacheStrategy;

	readonly documentId: NSData;

	readonly documentIdString: string;

	readonly documentProviders: NSArray<PSPDFDocumentProvider>;

	readonly encryptionFilter: string;

	readonly error: NSError;

	readonly fileName: string;

	readonly fileNamesWithDataDictionary: NSDictionary<string, NSData>;

	readonly fileURL: NSURL;

	readonly files: NSArray<string>;

	readonly filesWithBasePath: NSArray<NSURL>;

	readonly formParser: PSPDFFormParser;

	formsEnabled: boolean;

	readonly hasDirtyAnnotations: boolean;

	readonly isEncrypted: boolean;

	readonly isLocked: boolean;

	javaScriptEnabled: boolean;

	libraryMetadata: NSDictionary<any, any>;

	readonly metadata: NSDictionary<string, any>;

	originalFile: PSPDFFile;

	pageBinding: PSPDFPageBinding;

	readonly pageCount: number;

	pageLabelsEnabled: boolean;

	readonly permissions: PSPDFDocumentPermissions;

	readonly pspdfkit: PSPDFKit;

	renderAnnotationTypes: PSPDFAnnotationType;

	title: string;

	readonly titleLoaded: boolean;

	readonly undoController: PSPDFUndoController;

	undoEnabled: boolean;

	readonly valid: boolean;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding
	[Symbol.iterator](): Iterator<any>;

	constructor(o: { baseURL: NSURL; fileTemplate: string; startPage: number; endPage: number; });

	constructor(o: { baseURL: NSURL; files: NSArray<string>; });

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { content: any; });

	constructor(o: { content: any; signatures: NSArray<NSData>; });

	constructor(o: { data: NSData; });

	constructor(o: { dataArray: NSArray<NSData>; });

	constructor(o: { dataProvider: PSPDFDataProvider; });

	constructor(o: { dataProviderArray: NSArray<PSPDFDataProvider>; });

	constructor(o: { URL: NSURL; });

	URLForFileIndex(fileIndex: number): NSURL;

	addAnnotationsOptions(annotations: NSArray<PSPDFAnnotation>, options: NSDictionary<string, any>): boolean;

	allAnnotationsOfType(annotationType: PSPDFAnnotationType): NSDictionary<number, NSArray<PSPDFAnnotation>>;

	annotationsForPageAtIndexType(pageIndex: number, type: PSPDFAnnotationType): NSArray<PSPDFAnnotation>;

	annotationsFromDetectingLinkTypesPagesInRangeOptionsProgressError(textLinkTypes: PSPDFTextCheckingType, pageRange: NSIndexSet, options: NSDictionary<string, NSDictionary<number, NSArray<PSPDFAnnotation>>>, progressBlock: (p1: NSArray<PSPDFAnnotation>, p2: number, p3: interop.Pointer | interop.Reference<boolean>) => void): NSDictionary<number, NSArray<PSPDFAnnotation>>;

	class(): typeof NSObject;

	classForClass(originalClass: typeof NSObject): typeof NSObject;

	clearCache(): void;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	deleteFiles(): boolean;

	didCreateDocumentProvider(documentProvider: PSPDFDocumentProvider): PSPDFDocumentProvider;

	documentByAppendingObjects(objects: NSArray<any>): this;

	documentProviderDidAppendData(documentProvider: PSPDFDocumentProvider, data: NSData): void;

	documentProviderForPageAtIndex(pageIndex: number): PSPDFDocumentProvider;

	documentProviderShouldAppendData(documentProvider: PSPDFDocumentProvider, data: NSData): boolean;

	encodeWithCoder(aCoder: NSCoder): void;

	ensureDataDirectoryExistsWithError(): boolean;

	fileIndexForPageAtIndex(pageIndex: number): number;

	fileNameForIndex(fileIndex: number): string;

	fileNameForPageAtIndex(pageIndex: number): string;

	fillCache(): void;

	imageForPageAtIndexSizeClippedToRectAnnotationsOptionsError(pageIndex: number, size: CGSize, clipRect: CGRect, annotations: NSArray<PSPDFAnnotation>, options: NSDictionary<string, any>): UIImage;

	initWithBaseURLFileTemplateStartPageEndPage(baseURL: NSURL, fileTemplate: string, startPage: number, endPage: number): this;

	initWithBaseURLFiles(baseURL: NSURL, files: NSArray<string>): this;

	initWithCoder(aDecoder: NSCoder): this;

	initWithContent(content: any): this;

	initWithContentSignatures(content: any, signatures: NSArray<NSData>): this;

	initWithData(data: NSData): this;

	initWithDataArray(data: NSArray<NSData>): this;

	initWithDataProvider(dataProvider: PSPDFDataProvider): this;

	initWithDataProviderArray(dataProviders: NSArray<PSPDFDataProvider>): this;

	initWithURL(URL: NSURL): this;

	isEqual(object: any): boolean;

	isEqualToDocument(otherDocument: PSPDFDocument): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	lock(): void;

	nearestPageInfoForPageAtIndex(pageIndex: number): PSPDFPageInfo;

	objectsAtPDFPointPageIndexOptions(pdfPoint: CGPoint, pageIndex: number, options: NSDictionary<string, number>): NSDictionary<string, any>;

	objectsAtPDFRectPageIndexOptions(pdfRect: CGRect, pageIndex: number, options: NSDictionary<string, number>): NSDictionary<string, any>;

	overrideClassWithClass(builtinClass: typeof NSObject, subclass: typeof NSObject): void;

	pageForPageLabelPartialMatching(pageLabel: string, partialMatching: boolean): number;

	pageInfoForPageAtIndex(pageIndex: number): PSPDFPageInfo;

	pageLabelForPageAtIndexSubstituteWithPlainLabel(pageIndex: number, substitute: boolean): string;

	pageOffsetForDocumentProvider(documentProvider: PSPDFDocumentProvider): number;

	pathForPageAtIndex(pageIndex: number): NSURL;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	relativePageIndexForPageAtIndex(pageIndex: number): number;

	removeAnnotationsOptions(annotations: NSArray<PSPDFAnnotation>, options: NSDictionary<string, any>): boolean;

	renderOptionsForTypeContext(type: PSPDFRenderType, context: any): NSDictionary<string, any>;

	renderPageAtIndexContextSizeClippedToRectAnnotationsOptionsError(pageIndex: number, context: any, size: CGSize, clipRect: CGRect, annotations: NSArray<PSPDFAnnotation>, options: NSDictionary<string, any>): boolean;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	save(): boolean;

	saveWithCompletionHandler(completionHandler: (p1: NSError, p2: NSArray<PSPDFAnnotation>) => void): void;

	searchableItemAttributeSetWithThumbnail(renderThumbnail: boolean): CSSearchableItemAttributeSet;

	self(): this;

	setRenderOptionsType(options: NSDictionary<string, any>, type: PSPDFRenderType): void;

	textParserForPageAtIndex(pageIndex: number): PSPDFTextParser;

	unlockWithPassword(password: string): boolean;

	updateRenderOptionsType(options: NSDictionary<string, any>, type: PSPDFRenderType): void;
}

declare var PSPDFDocumentActionEmail: string;

declare class PSPDFDocumentActionExecutor extends NSObject implements PSPDFDocumentSharingCoordinatorDelegate {

	static alloc(): PSPDFDocumentActionExecutor; // inherited from NSObject

	static new(): PSPDFDocumentActionExecutor; // inherited from NSObject

	delegate: PSPDFDocumentActionExecutorDelegate;

	readonly document: PSPDFDocument;

	documents: NSArray<PSPDFDocument>;

	readonly sourceViewController: UIViewController;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { sourceViewController: UIViewController; });

	canExecuteAction(action: string): boolean;

	class(): typeof NSObject;

	classForClass(originalClass: typeof NSObject): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	documentSharingCoordinatorDidFinishWithError(coordinator: PSPDFDocumentSharingCoordinator, error: NSError): void;

	executeActionOptionsSenderAnimatedCompletion(action: string, options: NSDictionary<string, any>, sender: any, animated: boolean, completion: () => void): void;

	initWithSourceViewController(sourceViewController: UIViewController): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

interface PSPDFDocumentActionExecutorDelegate extends PSPDFErrorHandler, PSPDFOverridable {

	documentActionExecutorDefaultOptionsForAction?(documentActionExecutor: PSPDFDocumentActionExecutor, action: string): NSDictionary<string, any>;
}
declare var PSPDFDocumentActionExecutorDelegate: {

	prototype: PSPDFDocumentActionExecutorDelegate;
};

declare var PSPDFDocumentActionMessage: string;

declare var PSPDFDocumentActionOpenIn: string;

declare var PSPDFDocumentActionPrint: string;

declare var PSPDFDocumentActionSharingOptionsKey: string;

declare var PSPDFDocumentActionVisiblePagesKey: string;

declare var PSPDFDocumentDefaultAnnotationUsernameKey: string;

interface PSPDFDocumentDelegate extends NSObjectProtocol {

	pdfDocumentDidRenderPageAtIndexInContextWithSizeClippedToRectAnnotationsOptions?(document: PSPDFDocument, pageIndex: number, context: any, fullSize: CGSize, clipRect: CGRect, annotations: NSArray<PSPDFAnnotation>, options: NSDictionary<string, any>): void;

	pdfDocumentDidSave?(document: PSPDFDocument): void;

	pdfDocumentDidSaveAnnotations?(document: PSPDFDocument, annotations: NSArray<PSPDFAnnotation>): void;

	pdfDocumentFailedToSaveAnnotationsError?(document: PSPDFDocument, annotations: NSArray<PSPDFAnnotation>, error: NSError): void;

	pdfDocumentProviderShouldSaveAnnotations?(document: PSPDFDocument, documentProvider: PSPDFDocumentProvider, annotations: NSArray<PSPDFAnnotation>): boolean;

	pdfDocumentResolveCustomAnnotationPathToken?(document: PSPDFDocument, pathToken: string): string;

	pdfDocumentSaveDidFailWithError?(document: PSPDFDocument, error: NSError): void;

	pdfDocumentUnderlyingFileDidChange?(document: PSPDFDocument, fileURL: NSURL): void;
}
declare var PSPDFDocumentDelegate: {

	prototype: PSPDFDocumentDelegate;
};

declare class PSPDFDocumentEditor extends NSObject {

	static alloc(): PSPDFDocumentEditor; // inherited from NSObject

	static new(): PSPDFDocumentEditor; // inherited from NSObject

	readonly canRedo: boolean;

	readonly canSave: boolean;

	readonly canUndo: boolean;

	readonly document: PSPDFDocument;

	readonly pageCount: number;

	saveOptions: PSPDFProcessorSaveOptions;

	constructor(o: { document: PSPDFDocument; });

	addDelegate(delegate: PSPDFDocumentEditorDelegate): void;

	addPageAtWithConfiguration(index: number, configuration: PSPDFNewPageConfiguration): NSArray<PSPDFEditingChange>;

	duplicatePages(pageIndexes: NSIndexSet): NSArray<PSPDFEditingChange>;

	exportPagesToPathWithCompletionBlock(pageIndexes: NSIndexSet, path: string, block: (p1: PSPDFDocument, p2: NSError) => void): void;

	imageForPageAtIndexSizeScale(pageIndex: number, size: CGSize, scale: number): UIImage;

	initWithDocument(document: PSPDFDocument): this;

	movePagesTo(pageIndexes: NSIndexSet, destination: number): NSArray<PSPDFEditingChange>;

	pageSizeForPageAtIndex(pageIndex: number): CGSize;

	redo(): NSArray<PSPDFEditingChange>;

	removeDelegate(delegate: PSPDFDocumentEditorDelegate): boolean;

	removePages(pageIndexes: NSIndexSet): NSArray<PSPDFEditingChange>;

	rotatePagesRotation(pageIndexes: NSIndexSet, rotation: number): NSArray<PSPDFEditingChange>;

	saveToPathWithCompletionBlock(path: string, block: (p1: PSPDFDocument, p2: NSError) => void): void;

	saveWithCompletionBlock(block: (p1: PSPDFDocument, p2: NSError) => void): void;

	undo(): NSArray<PSPDFEditingChange>;
}

declare class PSPDFDocumentEditorCell extends PSPDFPageCell {

	static alloc(): PSPDFDocumentEditorCell; // inherited from NSObject

	static appearance(): PSPDFDocumentEditorCell; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PSPDFDocumentEditorCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PSPDFDocumentEditorCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): PSPDFDocumentEditorCell; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PSPDFDocumentEditorCell; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): PSPDFDocumentEditorCell; // inherited from UIAppearance

	static new(): PSPDFDocumentEditorCell; // inherited from NSObject
}

declare class PSPDFDocumentEditorConfiguration extends NSObject {

	static alloc(): PSPDFDocumentEditorConfiguration; // inherited from NSObject

	static new(): PSPDFDocumentEditorConfiguration; // inherited from NSObject

	compressions: NSArray<PSPDFCompression>;

	currentDocumentDirectory: PSPDFDirectory;

	currentDocumentPageSize: PSPDFPageSize;

	pagePatterns: NSArray<PSPDFPagePattern>;

	pageSizes: NSArray<PSPDFPageSize>;

	saveDirectories: NSArray<PSPDFDirectory>;

	selectedColor: UIColor;

	selectedCompression: PSPDFCompression;

	selectedImage: UIImage;

	selectedImagePageSize: PSPDFPageSize;

	selectedOrientation: PSPDFDocumentOrientation;

	selectedPagePattern: PSPDFPagePattern;

	selectedPageSize: PSPDFPageSize;

	selectedSaveDirectory: PSPDFDirectory;

	userFacingCompressionEnabled: boolean;
}

interface PSPDFDocumentEditorConfigurationConfigurable extends NSObjectProtocol {

	documentEditorConfiguration: PSPDFDocumentEditorConfiguration;

	initWithDocumentEditorConfiguration?(configuration: PSPDFDocumentEditorConfiguration): PSPDFDocumentEditorConfigurationConfigurable;
}
declare var PSPDFDocumentEditorConfigurationConfigurable: {

	prototype: PSPDFDocumentEditorConfigurationConfigurable;
};

interface PSPDFDocumentEditorDelegate extends NSObjectProtocol {

	documentEditorDidPerformChanges?(editor: PSPDFDocumentEditor, changes: NSArray<PSPDFEditingChange>): void;
}
declare var PSPDFDocumentEditorDelegate: {

	prototype: PSPDFDocumentEditorDelegate;
};

declare class PSPDFDocumentEditorToolbar extends PSPDFFlexibleToolbar {

	static alloc(): PSPDFDocumentEditorToolbar; // inherited from NSObject

	static appearance(): PSPDFDocumentEditorToolbar; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PSPDFDocumentEditorToolbar; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PSPDFDocumentEditorToolbar; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): PSPDFDocumentEditorToolbar; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PSPDFDocumentEditorToolbar; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): PSPDFDocumentEditorToolbar; // inherited from UIAppearance

	static new(): PSPDFDocumentEditorToolbar; // inherited from NSObject

	readonly addPageButton: PSPDFToolbarButton;

	allPagesSelected: boolean;

	readonly deletePagesButton: PSPDFToolbarButton;

	readonly doneButton: PSPDFToolbarButton;

	readonly duplicatePagesButton: PSPDFToolbarButton;

	readonly exportPagesButton: PSPDFToolbarButton;

	readonly redoButton: PSPDFToolbarButton;

	readonly rotatePagesButton: PSPDFToolbarButton;

	readonly selectAllPagesButton: PSPDFToolbarButton;

	readonly undoButton: PSPDFToolbarButton;

	buttonsForWidth(width: number): NSArray<PSPDFToolbarButton>;
}

declare class PSPDFDocumentEditorToolbarController extends PSPDFFlexibleToolbarController implements PSPDFDocumentEditorDelegate, PSPDFNewPageViewControllerDelegate, PSPDFSaveViewControllerDelegate {

	static alloc(): PSPDFDocumentEditorToolbarController; // inherited from NSObject

	static new(): PSPDFDocumentEditorToolbarController; // inherited from NSObject

	delegate: PSPDFDocumentEditorToolbarControllerDelegate;

	documentEditor: PSPDFDocumentEditor;

	readonly documentEditorConfiguration: PSPDFDocumentEditorConfiguration;

	readonly documentEditorToolbar: PSPDFDocumentEditorToolbar;

	presentationContext: PSPDFPresentationContext;

	selectedPages: NSIndexSet;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { documentEditorToolbar: PSPDFDocumentEditorToolbar; });

	class(): typeof NSObject;

	classForClass(originalClass: typeof NSObject): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	documentEditorDidPerformChanges(editor: PSPDFDocumentEditor, changes: NSArray<PSPDFEditingChange>): void;

	initWithDocumentEditorToolbar(documentEditorToolbar: PSPDFDocumentEditorToolbar): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	newPageControllerDidFinishSelectingConfiguration(controller: PSPDFNewPageViewController, configuration: PSPDFNewPageConfiguration): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	saveViewControllerDidEndShouldSave(controller: PSPDFSaveViewController, shouldSave: boolean): void;

	saveViewControllerShouldSaveToPathError(controller: PSPDFSaveViewController, path: string): boolean;

	self(): this;

	toggleNewPageControllerPresentationOptions(sender: any, options: NSDictionary<string, any>): PSPDFNewPageViewController;

	toggleSaveActionSheetPresentationOptionsCompletionHandler(sender: any, options: NSDictionary<string, any>, completionHandler: (p1: boolean) => void): UIAlertController;

	toggleSaveControllerPresentationOptionsCompletionHandler(sender: any, options: NSDictionary<string, any>, completionHandler: (p1: boolean) => void): PSPDFSaveViewController;
}

interface PSPDFDocumentEditorToolbarControllerDelegate extends PSPDFFlexibleToolbarContainerDelegate {

	documentEditorToolbarControllerDidSelectPages(controller: PSPDFDocumentEditorToolbarController, pages: NSIndexSet): void;

	documentEditorToolbarControllerIndexForNewPageWithConfiguration?(controller: PSPDFDocumentEditorToolbarController, configuration: PSPDFNewPageConfiguration): number;
}
declare var PSPDFDocumentEditorToolbarControllerDelegate: {

	prototype: PSPDFDocumentEditorToolbarControllerDelegate;
};

declare var PSPDFDocumentEditorToolbarControllerVisibilityAnimatedKey: string;

declare var PSPDFDocumentEditorToolbarControllerVisibilityDidChangeNotification: string;

declare class PSPDFDocumentEditorViewController extends UICollectionViewController implements PSPDFDocumentEditorDelegate, PSPDFViewModePresenter {

	static alloc(): PSPDFDocumentEditorViewController; // inherited from NSObject

	static new(): PSPDFDocumentEditorViewController; // inherited from NSObject

	readonly documentEditor: PSPDFDocumentEditor;

	readonly toolbarController: PSPDFDocumentEditorToolbarController;

	cellClass: typeof NSObject; // inherited from PSPDFViewModePresenter

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	document: PSPDFDocument; // inherited from PSPDFViewModePresenter

	fixedItemSizeEnabled: boolean; // inherited from PSPDFViewModePresenter

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	presentationContext: PSPDFPresentationContext; // inherited from PSPDFViewModePresenter

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { collectionViewLayout: UICollectionViewLayout; }); // inherited from PSPDFViewModePresenter

	constructor(o: { document: PSPDFDocument; }); // inherited from PSPDFViewModePresenter

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	documentEditorDidPerformChanges(editor: PSPDFDocumentEditor, changes: NSArray<PSPDFEditingChange>): void;

	initWithCollectionViewLayout(layout: UICollectionViewLayout): this;

	initWithDocument(document: PSPDFDocument): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	updateInsetsForTopOverlapHeight(overlapHeight: number): void;
}

declare class PSPDFDocumentInfoCoordinator extends NSObject {

	static alloc(): PSPDFDocumentInfoCoordinator; // inherited from NSObject

	static new(): PSPDFDocumentInfoCoordinator; // inherited from NSObject

	readonly available: boolean;

	availableControllerOptions: NSArray<string>;

	delegate: PSPDFOverridable;

	didCreateControllerBlock: (p1: UIViewController, p2: string) => void;

	document: PSPDFDocument;

	controllerForOption(option: string): UIViewController;

	isOptionAvailable(option: string): boolean;

	presentToViewControllerOptionsSenderAnimatedCompletion(targetController: UIViewController, options: NSDictionary<string, any>, sender: any, animated: boolean, completion: () => void): UIViewController;
}

declare var PSPDFDocumentInfoOptionAnnotations: string;

declare var PSPDFDocumentInfoOptionBookmarks: string;

declare var PSPDFDocumentInfoOptionEmbeddedFiles: string;

declare var PSPDFDocumentInfoOptionOutline: string;

declare var PSPDFDocumentInteractionControllerDidEndSendingToApplicationNotification: string;

declare var PSPDFDocumentInteractionControllerWillBeginSendingToApplicationNotification: string;

declare class PSPDFDocumentLabelView extends PSPDFLabelView {

	static alloc(): PSPDFDocumentLabelView; // inherited from NSObject

	static appearance(): PSPDFDocumentLabelView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PSPDFDocumentLabelView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PSPDFDocumentLabelView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): PSPDFDocumentLabelView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PSPDFDocumentLabelView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): PSPDFDocumentLabelView; // inherited from UIAppearance

	static new(): PSPDFDocumentLabelView; // inherited from NSObject
}

declare const enum PSPDFDocumentOrientation {

	Portrait = 0,

	Landscape = 1
}

declare class PSPDFDocumentPDFMetadata extends NSObject {

	static alloc(): PSPDFDocumentPDFMetadata; // inherited from NSObject

	static new(): PSPDFDocumentPDFMetadata; // inherited from NSObject

	readonly allInfoKeys: NSArray<string>;

	readonly document: PSPDFDocument;

	readonly documentProvider: PSPDFDocumentProvider;

	constructor(o: { document: PSPDFDocument; });

	constructor(o: { documentProvider: PSPDFDocumentProvider; });

	initWithDocument(document: PSPDFDocument): this;

	initWithDocumentProvider(documentProvider: PSPDFDocumentProvider): this;

	objectForInfoDictionaryKey(key: string): any;

	objectForKeyedSubscript(key: any): any;

	setObjectForInfoDictionaryKey(object: any, key: string): void;

	setObjectForKeyedSubscript(object: any, key: any): void;
}

declare const enum PSPDFDocumentPermissions {

	NoFlags = 0,

	Printing = 1,

	Modification = 2,

	Extract = 4,

	AnnotationsAndForms = 8,

	FillForms = 16,

	ExtractAccessibility = 32,

	Assemble = 64,

	PrintHighQuality = 128
}

declare class PSPDFDocumentPickerCell extends PSPDFTableViewCell {

	static alloc(): PSPDFDocumentPickerCell; // inherited from NSObject

	static appearance(): PSPDFDocumentPickerCell; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PSPDFDocumentPickerCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PSPDFDocumentPickerCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): PSPDFDocumentPickerCell; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PSPDFDocumentPickerCell; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): PSPDFDocumentPickerCell; // inherited from UIAppearance

	static detailLabelFont(): UIFont;

	static new(): PSPDFDocumentPickerCell; // inherited from NSObject

	static titleLabelFont(): UIFont;

	detailLabel: UILabel;

	document: PSPDFDocument;

	pageImageView: UIImageView;

	pageIndex: number;

	pagePreviewImage: UIImage;

	titleLabel: UILabel;

	configureWithDocumentUseDocumentTitleDetailTextPageIndexPreviewImage(document: PSPDFDocument, useDocumentTitle: boolean, detailText: NSAttributedString, pageIndex: number, previewImage: UIImage): void;

	setPagePreviewImageAnimated(pagePreviewImage: UIImage, animated: boolean): void;
}

declare class PSPDFDocumentPickerController extends PSPDFStatefulTableViewController implements UISearchBarDelegate, UISearchDisplayDelegate {

	static alloc(): PSPDFDocumentPickerController; // inherited from NSObject

	static documentsFromDirectoryIncludeSubdirectories(directoryName: string, includeSubdirectories: boolean): NSArray<PSPDFDocument>;

	static new(): PSPDFDocumentPickerController; // inherited from NSObject

	alwaysShowDocuments: boolean;

	delegate: PSPDFDocumentPickerControllerDelegate;

	readonly directory: string;

	readonly documents: NSArray<PSPDFDocument>;

	fullTextSearchEnabled: boolean;

	fullTextSearchExactWordMatch: boolean;

	readonly isSearchingIndex: boolean;

	readonly library: PSPDFLibrary;

	maximumNumberOfSearchPreviewLines: number;

	maximumNumberOfSearchResultsDisplayed: number;

	maximumNumberOfSearchResultsPerDocument: number;

	showSearchPageResults: boolean;

	showSearchPreviewText: boolean;

	showSectionIndexes: boolean;

	useDocumentTitles: boolean;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { directory: string; includeSubdirectories: boolean; library: PSPDFLibrary; });

	constructor(o: { documents: NSArray<PSPDFDocument>; library: PSPDFLibrary; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	enqueueDocumentsIfRequired(): void;

	initWithDirectoryIncludeSubdirectoriesLibrary(directory: string, includeSubdirectories: boolean, library: PSPDFLibrary): this;

	initWithDocumentsLibrary(documents: NSArray<PSPDFDocument>, library: PSPDFLibrary): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	positionForBar(bar: UIBarPositioning): UIBarPosition;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	searchBarBookmarkButtonClicked(searchBar: UISearchBar): void;

	searchBarCancelButtonClicked(searchBar: UISearchBar): void;

	searchBarResultsListButtonClicked(searchBar: UISearchBar): void;

	searchBarSearchButtonClicked(searchBar: UISearchBar): void;

	searchBarSelectedScopeButtonIndexDidChange(searchBar: UISearchBar, selectedScope: number): void;

	searchBarShouldBeginEditing(searchBar: UISearchBar): boolean;

	searchBarShouldChangeTextInRangeReplacementText(searchBar: UISearchBar, range: NSRange, text: string): boolean;

	searchBarShouldEndEditing(searchBar: UISearchBar): boolean;

	searchBarTextDidBeginEditing(searchBar: UISearchBar): void;

	searchBarTextDidChange(searchBar: UISearchBar, searchText: string): void;

	searchBarTextDidEndEditing(searchBar: UISearchBar): void;

	searchDisplayControllerDidBeginSearch(controller: UISearchDisplayController): void;

	searchDisplayControllerDidEndSearch(controller: UISearchDisplayController): void;

	searchDisplayControllerDidHideSearchResultsTableView(controller: UISearchDisplayController, tableView: UITableView): void;

	searchDisplayControllerDidLoadSearchResultsTableView(controller: UISearchDisplayController, tableView: UITableView): void;

	searchDisplayControllerDidShowSearchResultsTableView(controller: UISearchDisplayController, tableView: UITableView): void;

	searchDisplayControllerShouldReloadTableForSearchScope(controller: UISearchDisplayController, searchOption: number): boolean;

	searchDisplayControllerShouldReloadTableForSearchString(controller: UISearchDisplayController, searchString: string): boolean;

	searchDisplayControllerWillBeginSearch(controller: UISearchDisplayController): void;

	searchDisplayControllerWillEndSearch(controller: UISearchDisplayController): void;

	searchDisplayControllerWillHideSearchResultsTableView(controller: UISearchDisplayController, tableView: UITableView): void;

	searchDisplayControllerWillShowSearchResultsTableView(controller: UISearchDisplayController, tableView: UITableView): void;

	searchDisplayControllerWillUnloadSearchResultsTableView(controller: UISearchDisplayController, tableView: UITableView): void;

	self(): this;

	updateStatusCell(cell: PSPDFDocumentPickerIndexStatusCell): void;
}

interface PSPDFDocumentPickerControllerDelegate extends PSPDFOverridable {

	documentPickerControllerDidBeginSearch?(controller: PSPDFDocumentPickerController): void;

	documentPickerControllerDidEndSearch?(controller: PSPDFDocumentPickerController): void;

	documentPickerControllerDidSelectDocumentPageIndexSearchString(controller: PSPDFDocumentPickerController, document: PSPDFDocument, pageIndex: number, searchString: string): void;

	documentPickerControllerWillBeginSearch?(controller: PSPDFDocumentPickerController): void;

	documentPickerControllerWillEndSearch?(controller: PSPDFDocumentPickerController): void;
}
declare var PSPDFDocumentPickerControllerDelegate: {

	prototype: PSPDFDocumentPickerControllerDelegate;
};

declare class PSPDFDocumentPickerIndexStatusCell extends PSPDFSpinnerCell {

	static alloc(): PSPDFDocumentPickerIndexStatusCell; // inherited from NSObject

	static appearance(): PSPDFDocumentPickerIndexStatusCell; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PSPDFDocumentPickerIndexStatusCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PSPDFDocumentPickerIndexStatusCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): PSPDFDocumentPickerIndexStatusCell; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PSPDFDocumentPickerIndexStatusCell; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): PSPDFDocumentPickerIndexStatusCell; // inherited from UIAppearance

	static new(): PSPDFDocumentPickerIndexStatusCell; // inherited from NSObject
}

declare class PSPDFDocumentProvider extends NSObject {

	static alloc(): PSPDFDocumentProvider; // inherited from NSObject

	static new(): PSPDFDocumentProvider; // inherited from NSObject

	readonly XMPMetadata: string;

	readonly allowAnnotationChanges: boolean;

	readonly annotationManager: PSPDFAnnotationManager;

	readonly canEmbedAnnotations: boolean;

	readonly contentSignature: NSData;

	readonly dataProvider: PSPDFDataProvider;

	delegate: PSPDFDocumentProviderDelegate;

	readonly document: PSPDFDocument;

	readonly fileId: NSData;

	readonly fileSize: number;

	readonly fileURL: NSURL;

	readonly formParser: PSPDFFormParser;

	readonly isEncrypted: boolean;

	readonly isLocked: boolean;

	readonly labelParser: PSPDFLabelParser;

	readonly metadata: NSDictionary<string, any>;

	readonly outlineParser: PSPDFOutlineParser;

	readonly pageCount: number;

	readonly pageOffsetForDocument: number;

	readonly password: string;

	readonly permissions: PSPDFDocumentPermissions;

	readonly title: string;

	dataRepresentationWithError(): NSData;

	executeFormatActionWithActionContainerApplicationEventParamsError(actionContainer: any, application: PSPDFApplicationJSExport, eventParams: NSDictionary<string, any>): string;

	executeValueChangedJSActionSequenceWithActionContainerApplicationEventParamsError(actionContainer: any, application: PSPDFApplicationJSExport, eventParams: NSDictionary<string, any>): NSDictionary<string, any>;

	pageInfoForPageAtIndex(pageIndex: number): PSPDFPageInfo;

	resolveTokenizedPathAlwaysLocal(path: string, alwaysLocal: boolean): string;

	saveAnnotationsWithOptionsError(options: NSDictionary<string, any>): boolean;

	setRotationForPageAtIndex(rotation: number, pageIndex: number): void;

	textParserForPageAtIndex(pageIndex: number): PSPDFTextParser;

	updateCalculatedFieldsDependingOnFormError(sourceForm: PSPDFFormElement): boolean;
}

interface PSPDFDocumentProviderDelegate extends NSObjectProtocol {

	documentProviderDidAppendData?(documentProvider: PSPDFDocumentProvider, data: NSData): void;

	documentProviderShouldAppendData?(documentProvider: PSPDFDocumentProvider, data: NSData): boolean;
}
declare var PSPDFDocumentProviderDelegate: {

	prototype: PSPDFDocumentProviderDelegate;
};

declare class PSPDFDocumentSharingCoordinator extends NSObject implements PSPDFDocumentSharingViewControllerDelegate {

	static alloc(): PSPDFDocumentSharingCoordinator; // inherited from NSObject

	static new(): PSPDFDocumentSharingCoordinator; // inherited from NSObject

	readonly available: boolean;

	readonly commitButtonTitle: string;

	delegate: PSPDFDocumentSharingCoordinatorDelegate;

	readonly documents: NSArray<PSPDFDocument>;

	readonly executing: boolean;

	fileManager: PSPDFFileManager;

	policy: PSPDFApplicationPolicy;

	readonly policyEvent: string;

	readonly sharingController: PSPDFDocumentSharingViewController;

	sharingOptions: PSPDFDocumentSharingOptions;

	readonly title: string;

	visiblePageIndexes: NSOrderedSet<number>;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { document: PSPDFDocument; });

	constructor(o: { documents: NSArray<PSPDFDocument>; });

	class(): typeof NSObject;

	classForClass(originalClass: typeof NSObject): typeof NSObject;

	configureSharingController(sharingController: PSPDFDocumentSharingViewController): boolean;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	documentSharingViewControllerConfigureCustomProcessorConfigurationOptions(shareController: PSPDFDocumentSharingViewController, processorConfiguration: PSPDFProcessorConfiguration): void;

	documentSharingViewControllerDidCancel(shareController: PSPDFDocumentSharingViewController): void;

	documentSharingViewControllerDidFinishWithSelectedOptionsFilesAnnotationSummaryError(shareController: PSPDFDocumentSharingViewController, selectedSharingOption: PSPDFDocumentSharingOptions, files: NSArray<PSPDFFile>, annotationSummary: NSAttributedString, error: NSError): void;

	documentSharingViewControllerPreparationProgress(shareController: PSPDFDocumentSharingViewController, progress: number): void;

	documentSharingViewControllerShouldPrepareWithSelectedOptionsSelectedPageRange(shareController: PSPDFDocumentSharingViewController, selectedSharingOption: PSPDFDocumentSharingOptions, selectedPageRange: NSRange): boolean;

	documentSharingViewControllerSubtitleForOption(shareController: PSPDFDocumentSharingViewController, option: PSPDFDocumentSharingOptions): string;

	documentSharingViewControllerTitleForOption(shareController: PSPDFDocumentSharingViewController, option: PSPDFDocumentSharingOptions): string;

	documentSharingViewControllerWillShareFiles(shareController: PSPDFDocumentSharingViewController, files: NSArray<PSPDFFile>): NSArray<PSPDFFile>;

	initWithDocument(document: PSPDFDocument): this;

	initWithDocuments(documents: NSArray<PSPDFDocument>): this;

	isAvailableUserInvokedError(userInvoked: boolean): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	presentToViewControllerOptionsSenderAnimatedCompletion(targetController: UIViewController, options: NSDictionary<string, any>, sender: any, animated: boolean, completion: () => void): void;

	processorSaveOptionsForDocumentSharingViewController(shareController: PSPDFDocumentSharingViewController): PSPDFProcessorSaveOptions;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	showActionControllerToViewControllerSenderSendOptionsFilesAnnotationSummaryAnimated(targetController: UIViewController, sender: any, sendOptions: PSPDFDocumentSharingOptions, files: NSArray<PSPDFFile>, annotationSummary: NSAttributedString, animated: boolean): void;

	temporaryDirectoryForDocumentSharingViewController(shareController: PSPDFDocumentSharingViewController): string;
}

interface PSPDFDocumentSharingCoordinatorDelegate extends PSPDFOverridable {

	documentSharingCoordinatorDidFinishWithError(coordinator: PSPDFDocumentSharingCoordinator, error: NSError): void;
}
declare var PSPDFDocumentSharingCoordinatorDelegate: {

	prototype: PSPDFDocumentSharingCoordinatorDelegate;
};

declare const enum PSPDFDocumentSharingOptions {

	None = 0,

	CurrentPageOnly = 1,

	PageRange = 2,

	AllPages = 4,

	AnnotatedPages = 16,

	VisiblePages = 2,

	EmbedAnnotations = 256,

	FlattenAnnotations = 512,

	AnnotationsSummary = 1024,

	RemoveAnnotations = 2048,

	FlattenAnnotationsForPrint = 4096,

	OriginalFile = 65536,

	Image = 131072
}

declare var PSPDFDocumentSharingOptionsAnnotationsMask: number;

declare var PSPDFDocumentSharingOptionsFileMask: number;

declare var PSPDFDocumentSharingOptionsPageMask: number;

declare class PSPDFDocumentSharingViewController extends PSPDFStaticTableViewController implements PSPDFStyleable {

	static alloc(): PSPDFDocumentSharingViewController; // inherited from NSObject

	static new(): PSPDFDocumentSharingViewController; // inherited from NSObject

	readonly checkIfControllerHasOptionsAvailableAndCallDelegateIfNot: boolean;

	commitButtonTitle: string;

	delegate: PSPDFDocumentSharingViewControllerDelegate;

	readonly delegateProcessorSaveOptions: PSPDFProcessorSaveOptions;

	readonly document: PSPDFDocument;

	readonly documents: NSArray<PSPDFDocument>;

	selectedOptions: PSPDFDocumentSharingOptions;

	sharingOptions: PSPDFDocumentSharingOptions;

	barStyle: UIBarStyle; // inherited from PSPDFStyleable

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	forcesStatusBarHidden: boolean; // inherited from PSPDFStyleable

	readonly hash: number; // inherited from NSObjectProtocol

	isBarTranslucent: boolean; // inherited from PSPDFStyleable

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { document: PSPDFDocument; visiblePageRange: NSRange; allowedSharingOptions: PSPDFDocumentSharingOptions; });

	constructor(o: { documents: NSArray<PSPDFDocument>; visiblePageRange: NSRange; allowedSharingOptions: PSPDFDocumentSharingOptions; });

	class(): typeof NSObject;

	commitWithCurrentSettings(): boolean;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	delegateConfigureCustomProcessorConfigurationOptions(processorConfiguration: PSPDFProcessorConfiguration): void;

	initWithDocumentVisiblePageRangeAllowedSharingOptions(document: PSPDFDocument, visiblePageRange: NSRange, sharingOptions: PSPDFDocumentSharingOptions): this;

	initWithDocumentsVisiblePageRangeAllowedSharingOptions(documents: NSArray<PSPDFDocument>, visiblePageRange: NSRange, sharingOptions: PSPDFDocumentSharingOptions): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

interface PSPDFDocumentSharingViewControllerDelegate extends PSPDFOverridable {

	documentSharingViewControllerConfigureCustomProcessorConfigurationOptions?(shareController: PSPDFDocumentSharingViewController, processorConfiguration: PSPDFProcessorConfiguration): void;

	documentSharingViewControllerDidCancel?(shareController: PSPDFDocumentSharingViewController): void;

	documentSharingViewControllerDidFinishWithSelectedOptionsFilesAnnotationSummaryError(shareController: PSPDFDocumentSharingViewController, selectedSharingOption: PSPDFDocumentSharingOptions, files: NSArray<PSPDFFile>, annotationSummary: NSAttributedString, error: NSError): void;

	documentSharingViewControllerPreparationProgress?(shareController: PSPDFDocumentSharingViewController, progress: number): void;

	documentSharingViewControllerShouldPrepareWithSelectedOptionsSelectedPageRange?(shareController: PSPDFDocumentSharingViewController, selectedSharingOption: PSPDFDocumentSharingOptions, selectedPageRange: NSRange): boolean;

	documentSharingViewControllerSubtitleForOption?(shareController: PSPDFDocumentSharingViewController, option: PSPDFDocumentSharingOptions): string;

	documentSharingViewControllerTitleForOption?(shareController: PSPDFDocumentSharingViewController, option: PSPDFDocumentSharingOptions): string;

	documentSharingViewControllerWillShareFiles?(shareController: PSPDFDocumentSharingViewController, files: NSArray<PSPDFFile>): NSArray<PSPDFFile>;

	processorSaveOptionsForDocumentSharingViewController?(shareController: PSPDFDocumentSharingViewController): PSPDFProcessorSaveOptions;

	temporaryDirectoryForDocumentSharingViewController?(shareController: PSPDFDocumentSharingViewController): string;
}
declare var PSPDFDocumentSharingViewControllerDelegate: {

	prototype: PSPDFDocumentSharingViewControllerDelegate;
};

declare var PSPDFDocumentUnderlyingFileChangedNotification: string;

declare var PSPDFDocumentUnderlyingFileURLKey: string;

declare var PSPDFDocumentWillSaveAnnotationsNotification: string;

declare class PSPDFDocumentXMPMetadata extends NSObject {

	static alloc(): PSPDFDocumentXMPMetadata; // inherited from NSObject

	static new(): PSPDFDocumentXMPMetadata; // inherited from NSObject

	readonly document: PSPDFDocument;

	readonly documentProvider: PSPDFDocumentProvider;

	constructor(o: { document: PSPDFDocument; });

	constructor(o: { documentProvider: PSPDFDocumentProvider; });

	initWithDocument(document: PSPDFDocument): this;

	initWithDocumentProvider(documentProvider: PSPDFDocumentProvider): this;

	setStringForXMPKeyNamespaceSuggestedNamespacePrefix(string: string, key: string, ns: string, nsPrefix: string): void;

	stringForXMPKeyNamespace(key: string, ns: string): string;
}

declare class PSPDFDownloadManager extends NSObject {

	static alloc(): PSPDFDownloadManager; // inherited from NSObject

	static new(): PSPDFDownloadManager; // inherited from NSObject

	delegate: PSPDFDownloadManagerDelegate;

	enableDynamicNumberOfConcurrentDownloads: boolean;

	readonly failedObjects: NSArray<PSPDFRemoteContentObject>;

	readonly loadingObjects: NSArray<PSPDFRemoteContentObject>;

	numberOfConcurrentDownloads: number;

	readonly reachability: PSPDFReachability;

	shouldFinishLoadingObjectsInBackground: boolean;

	readonly waitingObjects: NSArray<PSPDFRemoteContentObject>;

	cancelAllObjects(): void;

	cancelObject(object: PSPDFRemoteContentObject): void;

	enqueueObject(object: PSPDFRemoteContentObject): void;

	enqueueObjectAtFront(object: PSPDFRemoteContentObject, enqueueAtFront: boolean): void;

	enqueueObjects(objects: NSArray<PSPDFRemoteContentObject>): void;

	enqueueObjectsAtFront(objects: NSArray<PSPDFRemoteContentObject>, enqueueAtFront: boolean): void;

	handlesObject(object: PSPDFRemoteContentObject): boolean;

	objectsPassingTest(predicate: (p1: PSPDFRemoteContentObject, p2: number, p3: interop.Pointer | interop.Reference<boolean>) => boolean): NSArray<PSPDFRemoteContentObject>;

	stateForObject(object: PSPDFRemoteContentObject): PSPDFDownloadManagerObjectState;
}

interface PSPDFDownloadManagerDelegate extends NSObjectProtocol {

	downloadManagerAuthenticationChallengeCompletionHandler?(downloadManager: PSPDFDownloadManager, authenticationChallenge: NSURLAuthenticationChallenge, completionHandler: (p1: NSURLSessionAuthChallengeDisposition, p2: NSURLCredential) => void): void;

	downloadManagerDidChangeObject?(downloadManager: PSPDFDownloadManager, object: PSPDFRemoteContentObject): void;

	downloadManagerReachabilityDidChange?(downloadManager: PSPDFDownloadManager, reachability: PSPDFReachability): void;
}
declare var PSPDFDownloadManagerDelegate: {

	prototype: PSPDFDownloadManagerDelegate;
};

declare var PSPDFDownloadManagerDidFailToLoadTaskNotification: string;

declare var PSPDFDownloadManagerDidFinishLoadingTaskNotification: string;

declare var PSPDFDownloadManagerDidStartLoadingTaskNotification: string;

declare const enum PSPDFDownloadManagerObjectState {

	NotHandled = 0,

	Waiting = 1,

	Loading = 2,

	Failed = 3
}

interface PSPDFDownloadManagerPolicy extends NSObjectProtocol {

	hasPermissionForNetworkEvent: boolean;
}
declare var PSPDFDownloadManagerPolicy: {

	prototype: PSPDFDownloadManagerPolicy;
};

declare const enum PSPDFDrawCreateMode {

	Separate = 0,

	MergeIfPossible = 1
}

declare class PSPDFDrawView extends UIView implements PSPDFAnnotationViewProtocol, PSPDFOverridable {

	static alloc(): PSPDFDrawView; // inherited from NSObject

	static appearance(): PSPDFDrawView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PSPDFDrawView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PSPDFDrawView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): PSPDFDrawView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PSPDFDrawView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): PSPDFDrawView; // inherited from UIAppearance

	static new(): PSPDFDrawView; // inherited from NSObject

	allowedTouchTypes: NSArray<number>;

	annotationType: PSPDFAnnotationType;

	annotationVariant: string;

	readonly annotations: NSArray<PSPDFAnnotation>;

	borderEffect: PSPDFAnnotationBorderEffect;

	borderEffectIntensity: number;

	dashArray: NSArray<number>;

	drawCreateMode: PSPDFDrawCreateMode;

	fillColor: UIColor;

	guideBorderColor: UIColor;

	guideSnapAllowance: number;

	inputMode: PSPDFDrawViewInputMode;

	lineEnd1: PSPDFLineEndType;

	lineEnd2: PSPDFLineEndType;

	lineWidth: number;

	naturalDrawingEnabled: boolean;

	predictiveTouchesEnabled: boolean;

	scale: number;

	strokeColor: UIColor;

	PDFScale: number; // inherited from PSPDFAnnotationViewProtocol

	annotation: PSPDFAnnotation; // inherited from PSPDFAnnotationViewProtocol

	configuration: PSPDFConfiguration; // inherited from PSPDFAnnotationViewProtocol

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	pageView: PSPDFPageView; // inherited from PSPDFAnnotationViewProtocol

	selected: boolean; // inherited from PSPDFAnnotationViewProtocol

	readonly shouldSyncRemovalFromSuperview: boolean; // inherited from PSPDFAnnotationViewProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	zIndex: number; // inherited from PSPDFAnnotationViewProtocol

	readonly  // inherited from NSObjectProtocol

	zoomScale: number; // inherited from PSPDFAnnotationViewProtocol

	cancelDrawing(): void;

	class(): typeof NSObject;

	classForClass(originalClass: typeof NSObject): typeof NSObject;

	clearAllLayers(): void;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	continueDrawingAtPointsPredictedPoints(locations: NSArray<NSValue>, predictedLocations: NSArray<NSValue>): void;

	didChangePageBounds(bounds: CGRect): void;

	didHidePageView(pageView: PSPDFPageView): void;

	didShowPageView(pageView: PSPDFPageView): void;

	didTapAtPoint(point: CGPoint): void;

	endDrawing(): void;

	endErase(): void;

	eraseAt(locations: NSArray<NSValue>): void;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	shouldProcessTouchesWithEvent(touches: NSSet<UITouch>, event: UIEvent): boolean;

	startDrawingAtPoint(location: PSPDFDrawingPoint): void;

	willRemoveFromSuperview(): void;
}

declare const enum PSPDFDrawViewInputMode {

	Draw = 0,

	Erase = 1
}

interface PSPDFDrawingPoint {
	location: CGPoint;
	intensity: number;
}
declare var PSPDFDrawingPoint: interop.StructType<PSPDFDrawingPoint>;

declare function PSPDFDrawingPointFromString(string: string): PSPDFDrawingPoint;

declare function PSPDFDrawingPointIsEqualToPoint(point: PSPDFDrawingPoint, otherPoint: PSPDFDrawingPoint): boolean;

declare function PSPDFDrawingPointIsValid(point: PSPDFDrawingPoint): boolean;

declare var PSPDFDrawingPointNull: PSPDFDrawingPoint;

declare function PSPDFDrawingPointToString(point: PSPDFDrawingPoint): string;

declare var PSPDFDrawingPointZero: PSPDFDrawingPoint;

declare class PSPDFEditingChange extends PSPDFModel {

	static alloc(): PSPDFEditingChange; // inherited from NSObject

	static modelWithDictionaryError(dictionaryValue: NSDictionary<string, any>): PSPDFEditingChange; // inherited from PSPDFModel

	static new(): PSPDFEditingChange; // inherited from NSObject

	readonly affectedPageIndex: number;

	readonly destinationPageIndex: number;

	readonly operation: PSPDFEditingOperation;

	constructor(o: { operation: PSPDFEditingOperation; affectedPageIndex: number; destinationPageIndex: number; });

	initWithOperationAffectedPageIndexDestinationPageIndex(operation: PSPDFEditingOperation, affectedPageIndex: number, destinationPageIndex: number): this;
}

declare const enum PSPDFEditingOperation {

	Remove = 0,

	Move = 1,

	Insert = 2,

	Rotate = 3
}

declare class PSPDFEmbeddedFile extends PSPDFModel {

	static alloc(): PSPDFEmbeddedFile; // inherited from NSObject

	static modelWithDictionaryError(dictionaryValue: NSDictionary<string, any>): PSPDFEmbeddedFile; // inherited from PSPDFModel

	static new(): PSPDFEmbeddedFile; // inherited from NSObject

	readonly document: PSPDFDocument;

	readonly fileDescription: string;

	readonly fileName: string;

	readonly fileSize: number;

	readonly fileURL: NSURL;

	readonly modificationDate: Date;

	fileURLWithError(): NSURL;
}

declare class PSPDFEmbeddedFileCell extends PSPDFNonAnimatingTableViewCell {

	static alloc(): PSPDFEmbeddedFileCell; // inherited from NSObject

	static appearance(): PSPDFEmbeddedFileCell; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PSPDFEmbeddedFileCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PSPDFEmbeddedFileCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): PSPDFEmbeddedFileCell; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PSPDFEmbeddedFileCell; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): PSPDFEmbeddedFileCell; // inherited from UIAppearance

	static new(): PSPDFEmbeddedFileCell; // inherited from NSObject
}

declare class PSPDFEmbeddedFilesViewController extends PSPDFStatefulTableViewController {

	static alloc(): PSPDFEmbeddedFilesViewController; // inherited from NSObject

	static new(): PSPDFEmbeddedFilesViewController; // inherited from NSObject

	delegate: PSPDFEmbeddedFilesViewControllerDelegate;

	document: PSPDFDocument;

	constructor(o: { document: PSPDFDocument; });

	initWithDocument(document: PSPDFDocument): this;
}

interface PSPDFEmbeddedFilesViewControllerDelegate extends NSObjectProtocol {

	embeddedFilesControllerDidSelectFileSender(embeddedFilesController: PSPDFEmbeddedFilesViewController, embeddedFile: PSPDFEmbeddedFile, sender: any): void;
}
declare var PSPDFEmbeddedFilesViewControllerDelegate: {

	prototype: PSPDFEmbeddedFilesViewControllerDelegate;
};

declare class PSPDFEmbeddedGoToAction extends PSPDFGoToAction {

	static alloc(): PSPDFEmbeddedGoToAction; // inherited from NSObject

	static modelWithDictionaryError(dictionaryValue: NSDictionary<string, any>): PSPDFEmbeddedGoToAction; // inherited from PSPDFModel

	static new(): PSPDFEmbeddedGoToAction; // inherited from NSObject

	readonly openInNewWindow: boolean;

	readonly relativePath: string;

	readonly targetRelationship: PSPDFEmbeddedGoToActionTarget;

	constructor(o: { relativePath: string; targetRelationship: PSPDFEmbeddedGoToActionTarget; openInNewWindow: boolean; pageIndex: number; });

	initWithRelativePathTargetRelationshipOpenInNewWindowPageIndex(remotePath: string, targetRelationship: PSPDFEmbeddedGoToActionTarget, openInNewWindow: boolean, pageIndex: number): this;
}

declare const enum PSPDFEmbeddedGoToActionTarget {

	ParentOfCurrentDocument = 0,

	ChildOfCurrentDocument = 1
}

declare class PSPDFEraseOverlay extends UIView {

	static alloc(): PSPDFEraseOverlay; // inherited from NSObject

	static appearance(): PSPDFEraseOverlay; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PSPDFEraseOverlay; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PSPDFEraseOverlay; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): PSPDFEraseOverlay; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PSPDFEraseOverlay; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): PSPDFEraseOverlay; // inherited from UIAppearance

	static new(): PSPDFEraseOverlay; // inherited from NSObject

	circleColor: UIColor;

	circleLineWidth: number;

	circleRadius: number;

	circleVisible: boolean;

	dataSource: PSPDFEraseOverlayDataSource;

	readonly shapeLayer: CAShapeLayer;

	touchPosition: CGPoint;

	tracking: boolean;

	setTrackingAnimated(tracking: boolean, animated: boolean): void;
}

interface PSPDFEraseOverlayDataSource extends NSObjectProtocol {

	zoomScaleForEraseOverlay(overlay: PSPDFEraseOverlay): number;
}
declare var PSPDFEraseOverlayDataSource: {

	prototype: PSPDFEraseOverlayDataSource;
};

declare const enum PSPDFErrorCode {

	OutOfMemory = 10,

	PageInvalid = 100,

	DocumentContainsNoPages = 101,

	DocumentNotValid = 102,

	DocumentLocked = 103,

	DocumentInvalidFormat = 104,

	UnableToOpenPDF = 200,

	UnableToGetPageReference = 210,

	UnableToGetStream = 211,

	DocumentNotSet = 212,

	DocumentProviderNotSet = 213,

	StreamPathNotSet = 214,

	AssetNameNotSet = 215,

	CantCreateStreamFile = 216,

	CantCreateStream = 217,

	CoreAnnotationNotSet = 218,

	PageRenderSizeIsEmpty = 220,

	PageRenderClipRectTooLarge = 230,

	PageRenderGraphicsContextNil = 240,

	DocumentUnsupportedSecurityScheme = 302,

	FailedToLoadAnnotations = 400,

	FailedToWriteAnnotations = 410,

	WriteAnnotationsCancelled = 411,

	CannotEmbedAnnotations = 420,

	FailedToSaveBookmarks = 460,

	FailedToSaveDocument = 470,

	OutlineParser = 500,

	UnableToConvertToDataRepresentation = 600,

	RemoveCacheError = 700,

	FailedToConvertToPDF = 800,

	FailedToGeneratePDFInvalidArguments = 810,

	FailedToGeneratePDFDocumentInvalid = 820,

	FailedToGeneratePDFCouldNotCreateContext = 830,

	FailedToCopyPages = 840,

	FailedToUpdatePageObject = 850,

	FailedToMemoryMapFile = 860,

	MicPermissionNotGranted = 900,

	XFDFParserLackingInputStream = 1000,

	XFDFParserAlreadyCompleted = 1010,

	XFDFParserAlreadyStarted = 1020,

	XMLParserError = 1100,

	DigitalSignatureVerificationFailed = 1150,

	XFDFWriterCannotWriteToStream = 1200,

	FDFWriterCannotWriteToStream = 1250,

	SoundEncoderInvalidInput = 1300,

	GalleryInvalidManifest = 1400,

	GalleryUnknownItem = 1450,

	InvalidRemoteContent = 1500,

	FailedToSendStatistics = 1600,

	LibraryFailedToInitialize = 1700,

	FormValidationError = 5000,

	ImageProcessorInvalidImage = 6000,

	OpenInNoApplicationsFound = 7000,

	MessageNotSent = 7100,

	EmailNotConfigured = 7200,

	ProcessorAnnotationModificationError = 7300,

	ProcessorUnableToInsertPage = 7301,

	ProcessorUnableToFlattenAnnotation = 7302,

	ProcessorUnableToRemoveAnnotation = 7304,

	ProcessorUnableToIncludeDrawingBlock = 7305,

	ProcessorUnableToAddItem = 7306,

	ProcessorUnableToWriteFile = 7307,

	ProcessorMiscError = 7308,

	DocumentEditorUnableToWriteFile = 7400,

	DocumentEditorInvalidDocument = 7401,

	FailedToFetchResource = 8000,

	FailedToSetResource = 8500,

	FileCoordinationBackgroundTaskCreationFailed = 9000,

	JSONDeserializationError = 9500,

	FeatureNotEnabled = 100000,

	SecurityNoPermission = 200000,

	PKCS12CannotReadData = 300000,

	PKCS12CannotCopyData = 300001,

	PKCS12UnlockFailed = 300002,

	Unknown = 2147483647
}

declare var PSPDFErrorDomain: string;

interface PSPDFErrorHandler extends NSObjectProtocol {

	handleErrorTitleMessage(error: NSError, title: string, message: string): void;
}
declare var PSPDFErrorHandler: {

	prototype: PSPDFErrorHandler;
};

declare class PSPDFExtensionApplication extends PSPDFDefaultApplication implements PSPDFApplication {

	static alloc(): PSPDFExtensionApplication; // inherited from NSObject

	static new(): PSPDFExtensionApplication; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly networkIndicatorManager: PSPDFNetworkActivityIndicatorManager; // inherited from PSPDFApplication

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { extensionContext: NSExtensionContext; });

	canOpenURL(url: NSURL): boolean;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithExtensionContext(extensionContext: NSExtensionContext): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	openURLOptionsCompletionHandler(url: NSURL, options: NSDictionary<string, any>, completionHandler: (p1: boolean) => void): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

interface PSPDFExternalURLHandler extends NSObjectProtocol {

	handleExternalURLCompletionBlock(URL: NSURL, completionBlock: (p1: boolean) => void): boolean;
}
declare var PSPDFExternalURLHandler: {

	prototype: PSPDFExternalURLHandler;
};

declare const enum PSPDFFeatureMask {

	MaskNone = 0,

	MaskPDFViewer = 1,

	MaskTextSelection = 2,

	MaskStrongEncryption = 4,

	MaskPDFCreation = 8,

	MaskAnnotationEditing = 16,

	MaskAcroForms = 32,

	MaskIndexedFTS = 64,

	MaskDigitalSignatures = 128,

	RequireSignedSource = 256,

	MaskDocumentEditing = 512,

	MaskAll = 4294967295
}

declare class PSPDFFile extends PSPDFModel {

	static alloc(): PSPDFFile; // inherited from NSObject

	static modelWithDictionaryError(dictionaryValue: NSDictionary<string, any>): PSPDFFile; // inherited from PSPDFModel

	static new(): PSPDFFile; // inherited from NSObject

	readonly fileData: NSData;

	readonly fileName: string;

	readonly fileURL: NSURL;

	readonly mimeType: string;

	constructor(o: { name: string; URL: NSURL; data: NSData; });

	fileDataMappedWithError(): NSData;

	initWithNameURLData(fileName: string, fileURL: NSURL, fileData: NSData): this;
}

declare class PSPDFFileAnnotation extends PSPDFAnnotation {

	static alloc(): PSPDFFileAnnotation; // inherited from NSObject

	static modelWithDictionaryError(dictionaryValue: NSDictionary<string, any>): PSPDFFileAnnotation; // inherited from PSPDFModel

	static new(): PSPDFFileAnnotation; // inherited from NSObject

	appearanceName: string;

	embeddedFile: PSPDFEmbeddedFile;
}

declare class PSPDFFileAnnotationProvider extends PSPDFContainerAnnotationProvider {

	static alloc(): PSPDFFileAnnotationProvider; // inherited from NSObject

	static new(): PSPDFFileAnnotationProvider; // inherited from NSObject

	annotationsPath: string;

	autodetectTextLinkTypes: PSPDFTextCheckingType;

	parsableTypes: PSPDFAnnotationType;

	saveableTypes: PSPDFAnnotationType;

	clearCache(): void;

	loadAnnotationsWithError(): NSDictionary<number, NSArray<PSPDFAnnotation>>;

	parseAnnotationsForPageAtIndex(pageIndex: number): NSArray<PSPDFAnnotation>;

	tryLoadAnnotationsFromFileWithError(): boolean;
}

declare class PSPDFFileDataProvider extends NSObject implements PSPDFDataProvider {

	static alloc(): PSPDFFileDataProvider; // inherited from NSObject

	static new(): PSPDFFileDataProvider; // inherited from NSObject

	readonly fileURL: NSURL;

	readonly UID: string; // inherited from PSPDFDataProvider

	readonly additionalOperationsSupported: PSPDFDataProviderAdditionalOperations; // inherited from PSPDFDataProvider

	readonly data: NSData; // inherited from PSPDFDataProvider

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly size: number; // inherited from PSPDFDataProvider

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { fileURL: NSURL; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	createDataSinkWithOptionsError(options: PSPDFDataSinkOptions): PSPDFDataSink;

	deleteDataWithError(): boolean;

	encodeWithCoder(aCoder: NSCoder): void;

	initWithCoder(aDecoder: NSCoder): this;

	initWithFileURLError(fileURL: NSURL): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	readDataWithSizeAtOffset(size: number, offset: number): NSData;

	replaceWithDataSink(replacementDataSink: PSPDFDataSink): boolean;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class PSPDFFileDataSink extends NSObject implements PSPDFDataSink {

	static alloc(): PSPDFFileDataSink; // inherited from NSObject

	static new(): PSPDFFileDataSink; // inherited from NSObject

	readonly fileURL: NSURL;

	readonly options: PSPDFDataSinkOptions;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isFinished: boolean; // inherited from PSPDFDataSink

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { fileURL: NSURL; options: PSPDFDataSinkOptions; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	finish(): boolean;

	initWithFileURLOptionsError(fileURL: NSURL, options: PSPDFDataSinkOptions): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	writeData(data: NSData): boolean;
}

declare class PSPDFFileIndexItemDescriptor extends NSObject {

	static alloc(): PSPDFFileIndexItemDescriptor; // inherited from NSObject

	static new(): PSPDFFileIndexItemDescriptor; // inherited from NSObject

	readonly documentPath: string;

	readonly documentUID: string;

	readonly lastModificationDate: Date;

	isEqualToFileIndexItemDescriptor(other: PSPDFFileIndexItemDescriptor): boolean;
}

interface PSPDFFileManager extends NSObjectProtocol {

	applicationSupportDirectory: string;

	cachesDirectory: string;

	documentDirectory: string;

	libraryDirectory: string;

	usesEncryption: boolean;

	allowsPolicyEvent(policyEvent: string): boolean;

	attributesOfFileSystemForPathError(path: string): NSDictionary<string, any>;

	attributesOfItemAtPathError(path: string): NSDictionary<string, any>;

	cleanupIfTemporaryFile(URL: NSURL): boolean;

	contentsOfDirectoryAtPathError(path: string): NSArray<string>;

	copyFileToUnencryptedLocationIfRequiredPolicyEventError(fileURL: NSURL, policyEvent: string): NSURL;

	copyItemAtURLToURLError(sourceURL: NSURL, destinationURL: NSURL): boolean;

	createDirectoryAtPathWithIntermediateDirectoriesAttributesError(path: string, createIntermediates: boolean, attributes: NSDictionary<string, any>): boolean;

	createFileAtPathContentsAttributes(path: string, data: NSData, attributes: NSDictionary<string, any>): boolean;

	createTemporaryWritableDataProviderWithPrefix(prefix: string): PSPDFDataProvider;

	dataWithContentsOfFileOptionsError(path: string, readOptionsMask: NSDataReadingOptions): NSData;

	dataWithContentsOfURLOptionsError(fileURL: NSURL, readOptionsMask: NSDataReadingOptions): NSData;

	destinationOfSymbolicLinkAtPathError(path: string): string;

	enumeratorAtPath(path: string): NSDirectoryEnumerator<string>;

	enumeratorAtURLIncludingPropertiesForKeysOptionsErrorHandler(url: NSURL, keys: NSArray<string>, mask: NSDirectoryEnumerationOptions, handler: (p1: NSURL, p2: NSError) => boolean): NSDirectoryEnumerator<NSURL>;

	fileExistsAtPath(path: string): boolean;

	fileExistsAtPathIsDirectory(path: string, isDirectory: interop.Pointer | interop.Reference<boolean>): boolean;

	fileExistsAtURL(url: NSURL): boolean;

	fileExistsAtURLIsDirectory(url: NSURL, isDirectory: interop.Pointer | interop.Reference<boolean>): boolean;

	fileHandleForReadingFromURLErrorWithBlock(url: NSURL, error: interop.Pointer | interop.Reference<NSError>, reader: (p1: NSFileHandle) => boolean): boolean;

	fileHandleForUpdatingURLErrorWithBlock(url: NSURL, error: interop.Pointer | interop.Reference<NSError>, updater: (p1: NSFileHandle) => boolean): boolean;

	fileHandleForWritingToURLErrorWithBlock(url: NSURL, error: interop.Pointer | interop.Reference<NSError>, writer: (p1: NSFileHandle) => boolean): boolean;

	fileSystemRepresentationForPath(path: string): string;

	isDeletableFileAtPath(path: string): boolean;

	isNativePath(path: string): boolean;

	isWritableFileAtPath(path: string): boolean;

	moveItemAtURLToURLError(sourceURL: NSURL, destinationURL: NSURL): boolean;

	removeItemAtPathError(path: string): boolean;

	removeItemAtURLError(URL: NSURL): boolean;

	replaceItemAtURLWithItemAtURLBackupItemNameOptionsResultingItemURLError(originalItemURL: NSURL, newItemURL: NSURL, backupItemName: string, options: NSFileManagerItemReplacementOptions, resultingURL: interop.Pointer | interop.Reference<NSURL>): boolean;

	subpathsOfDirectoryAtPathError(path: string): NSArray<string>;

	temporaryDirectoryWithUID(UID: string): string;

	unencryptedTemporaryDirectoryWithUID(UID: string): string;

	writeDataToFileOptionsError(data: NSData, path: string, writeOptionsMask: NSDataWritingOptions): boolean;

	writeDataToURLOptionsError(data: NSData, fileURL: NSURL, writeOptionsMask: NSDataWritingOptions): boolean;
}
declare var PSPDFFileManager: {

	prototype: PSPDFFileManager;
};

declare var PSPDFFileManagerKey: string;

declare var PSPDFFileManagerOptionCoordinatedAccess: string;

declare var PSPDFFileManagerOptionFilePresenter: string;

declare class PSPDFFlexibleToolbar extends PSPDFToolbar {

	static alloc(): PSPDFFlexibleToolbar; // inherited from NSObject

	static appearance(): PSPDFFlexibleToolbar; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PSPDFFlexibleToolbar; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PSPDFFlexibleToolbar; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): PSPDFFlexibleToolbar; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PSPDFFlexibleToolbar; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): PSPDFFlexibleToolbar; // inherited from UIAppearance

	static new(): PSPDFFlexibleToolbar; // inherited from NSObject

	borderedToolbarPositions: PSPDFFlexibleToolbarPosition;

	dragEnabled: boolean;

	readonly dragView: PSPDFFlexibleToolbarDragView;

	selectedBackgroundColor: UIColor;

	selectedButton: UIButton;

	selectedTintColor: UIColor;

	shadowedToolbarPositions: PSPDFFlexibleToolbarPosition;

	supportedToolbarPositions: PSPDFFlexibleToolbarPosition;

	toolbarDelegate: PSPDFFlexibleToolbarDelegate;

	toolbarPosition: PSPDFFlexibleToolbarPosition;

	hideToolbarAnimatedCompletion(animated: boolean, completionBlock: (p1: boolean) => void): void;

	matchUIBarAppearance(navigationBarOrToolbar: UIView): void;

	menuItemForButton(button: UIButton): PSPDFMenuItem;

	preferredSizeFittingForToolbarPosition(availableSize: CGSize, position: PSPDFFlexibleToolbarPosition): CGSize;

	setSelectedButtonAnimated(button: UIButton, animated: boolean): void;

	setToolbarPositionAnimated(toolbarPosition: PSPDFFlexibleToolbarPosition, animated: boolean): void;

	showMenuForCollapsedButtonsFromButtonAnimated(buttons: NSArray<UIButton>, sourceButton: UIButton, animated: boolean): void;

	showMenuWithItemsTargetAnimated(menuItems: NSArray<PSPDFMenuItem>, target: UIView, animated: boolean): void;

	showToolbarAnimatedCompletion(animated: boolean, completionBlock: (p1: boolean) => void): void;
}

declare class PSPDFFlexibleToolbarContainer extends UIView {

	static alloc(): PSPDFFlexibleToolbarContainer; // inherited from NSObject

	static appearance(): PSPDFFlexibleToolbarContainer; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PSPDFFlexibleToolbarContainer; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PSPDFFlexibleToolbarContainer; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): PSPDFFlexibleToolbarContainer; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PSPDFFlexibleToolbarContainer; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): PSPDFFlexibleToolbarContainer; // inherited from UIAppearance

	static new(): PSPDFFlexibleToolbarContainer; // inherited from NSObject

	anchorViewBackgroundColor: UIColor;

	containerDelegate: PSPDFFlexibleToolbarContainerDelegate;

	readonly dragging: boolean;

	flexibleToolbar: PSPDFFlexibleToolbar;

	flickToCloseEnabled: boolean;

	overlaidBar: UIView;

	animateToolbarPositionChangeFromTo(currentPosition: PSPDFFlexibleToolbarPosition, newPosition: PSPDFFlexibleToolbarPosition): void;

	hideAndRemoveAnimatedCompletion(animated: boolean, completionBlock: (p1: boolean) => void): void;

	hideAnimatedCompletion(animated: boolean, completionBlock: (p1: boolean) => void): void;

	rectForToolbarPosition(toolbarPosition: PSPDFFlexibleToolbarPosition): CGRect;

	showAnimatedCompletion(animated: boolean, completionBlock: (p1: boolean) => void): void;
}

interface PSPDFFlexibleToolbarContainerDelegate extends NSObjectProtocol {

	flexibleToolbarContainerContentRectForToolbarPosition?(container: PSPDFFlexibleToolbarContainer, position: PSPDFFlexibleToolbarPosition): CGRect;

	flexibleToolbarContainerDidEndDraggingWithPosition?(container: PSPDFFlexibleToolbarContainer, position: PSPDFFlexibleToolbarPosition): void;

	flexibleToolbarContainerDidHide?(container: PSPDFFlexibleToolbarContainer): void;

	flexibleToolbarContainerDidShow?(container: PSPDFFlexibleToolbarContainer): void;

	flexibleToolbarContainerWillHide?(container: PSPDFFlexibleToolbarContainer): void;

	flexibleToolbarContainerWillShow?(container: PSPDFFlexibleToolbarContainer): void;

	flexibleToolbarContainerWillStartDragging?(container: PSPDFFlexibleToolbarContainer): void;
}
declare var PSPDFFlexibleToolbarContainerDelegate: {

	prototype: PSPDFFlexibleToolbarContainerDelegate;
};

declare class PSPDFFlexibleToolbarController extends NSObject implements PSPDFFlexibleToolbarContainerDelegate {

	static alloc(): PSPDFFlexibleToolbarController; // inherited from NSObject

	static new(): PSPDFFlexibleToolbarController; // inherited from NSObject

	readonly flexibleToolbarContainer: PSPDFFlexibleToolbarContainer;

	readonly hostToolbar: UIView;

	readonly hostView: UIView;

	readonly hostViewController: UIViewController;

	readonly toolbar: PSPDFFlexibleToolbar;

	readonly toolbarVisible: boolean;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { toolbar: PSPDFFlexibleToolbar; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	flexibleToolbarContainerContentRectForToolbarPosition(container: PSPDFFlexibleToolbarContainer, position: PSPDFFlexibleToolbarPosition): CGRect;

	flexibleToolbarContainerDidEndDraggingWithPosition(container: PSPDFFlexibleToolbarContainer, position: PSPDFFlexibleToolbarPosition): void;

	flexibleToolbarContainerDidHide(container: PSPDFFlexibleToolbarContainer): void;

	flexibleToolbarContainerDidShow(container: PSPDFFlexibleToolbarContainer): void;

	flexibleToolbarContainerWillHide(container: PSPDFFlexibleToolbarContainer): void;

	flexibleToolbarContainerWillShow(container: PSPDFFlexibleToolbarContainer): void;

	flexibleToolbarContainerWillStartDragging(container: PSPDFFlexibleToolbarContainer): void;

	hideToolbarAnimated(animated: boolean): boolean;

	initWithToolbar(toolbar: PSPDFFlexibleToolbar): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	showToolbarAnimated(animated: boolean): boolean;

	toggleToolbarAnimated(animated: boolean): void;

	updateHostViewContainerViewController(hostView: UIView, container: any, viewController: UIViewController): void;
}

interface PSPDFFlexibleToolbarDelegate extends NSObjectProtocol {

	flexibleToolbarDidChangePosition?(toolbar: PSPDFFlexibleToolbar, position: PSPDFFlexibleToolbarPosition): void;

	flexibleToolbarDidHide?(toolbar: PSPDFFlexibleToolbar): void;

	flexibleToolbarDidShow?(toolbar: PSPDFFlexibleToolbar): void;

	flexibleToolbarWillHide?(toolbar: PSPDFFlexibleToolbar): void;

	flexibleToolbarWillShow?(toolbar: PSPDFFlexibleToolbar): void;
}
declare var PSPDFFlexibleToolbarDelegate: {

	prototype: PSPDFFlexibleToolbarDelegate;
};

declare class PSPDFFlexibleToolbarDragView extends UIView {

	static alloc(): PSPDFFlexibleToolbarDragView; // inherited from NSObject

	static appearance(): PSPDFFlexibleToolbarDragView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PSPDFFlexibleToolbarDragView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PSPDFFlexibleToolbarDragView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): PSPDFFlexibleToolbarDragView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PSPDFFlexibleToolbarDragView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): PSPDFFlexibleToolbarDragView; // inherited from UIAppearance

	static new(): PSPDFFlexibleToolbarDragView; // inherited from NSObject

	barColor: UIColor;

	inverted: boolean;

	setInvertedAnimated(inverted: boolean, animated: boolean): void;
}

declare var PSPDFFlexibleToolbarHeight: number;

declare var PSPDFFlexibleToolbarHeightCompact: number;

declare const enum PSPDFFlexibleToolbarPosition {

	None = 0,

	InTopBar = 1,

	Left = 2,

	Right = 4,

	sVertical = 6,

	sAll = 7
}

declare var PSPDFFlexibleToolbarTopAttachedExtensionHeight: number;

declare class PSPDFFontPickerViewController extends PSPDFStaticTableViewController {

	static alloc(): PSPDFFontPickerViewController; // inherited from NSObject

	static new(): PSPDFFontPickerViewController; // inherited from NSObject

	delegate: PSPDFFontPickerViewControllerDelegate;

	readonly fontFamilyDescriptors: NSArray<UIFontDescriptor>;

	highlightedFontFamilyDescriptors: NSArray<UIFontDescriptor>;

	searchEnabled: boolean;

	selectedFont: UIFont;

	showDownloadableFonts: boolean;

	constructor(o: { fontFamilyDescriptors: NSArray<UIFontDescriptor>; });

	initWithFontFamilyDescriptors(fontFamilyDescriptors: NSArray<UIFontDescriptor>): this;
}

interface PSPDFFontPickerViewControllerDelegate extends PSPDFOverridable {

	fontPickerViewControllerDidSelectFont(fontPickerViewController: PSPDFFontPickerViewController, selectedFont: UIFont): void;
}
declare var PSPDFFontPickerViewControllerDelegate: {

	prototype: PSPDFFontPickerViewControllerDelegate;
};

declare class PSPDFFormElement extends PSPDFWidgetAnnotation {

	static alloc(): PSPDFFormElement; // inherited from NSObject

	static modelWithDictionaryError(dictionaryValue: NSDictionary<string, any>): PSPDFFormElement; // inherited from PSPDFModel

	static new(): PSPDFFormElement; // inherited from NSObject

	readonly calculationOrderIndex: number;

	readonly defaultValue: any;

	readonly exportValue: any;

	readonly fieldName: string;

	readonly formField: PSPDFFormField;

	readonly formTypeName: string;

	readonly fullyQualifiedFieldName: string;

	highlightColor: UIColor;

	isMultiline: boolean;

	maxLength: number;

	next: PSPDFFormElement;

	readonly noExport: boolean;

	previous: PSPDFFormElement;

	readonly required: boolean;

	readonly resettable: boolean;

	drawHighlightInContextOptionsMultiply(context: any, renderOptions: NSDictionary<any, any>, shouldMultiply: boolean): void;
}

declare const enum PSPDFFormElementFlag {

	ReadOnly = 1,

	Required = 2,

	NoExport = 4
}

declare class PSPDFFormElementView extends PSPDFHostingAnnotationView implements PSPDFFormInputAccessoryViewDelegate {

	static alloc(): PSPDFFormElementView; // inherited from NSObject

	static appearance(): PSPDFFormElementView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PSPDFFormElementView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PSPDFFormElementView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): PSPDFFormElementView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PSPDFFormElementView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): PSPDFFormElementView; // inherited from UIAppearance

	static new(): PSPDFFormElementView; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	clearButtonPressedOnFormInputView(inputView: PSPDFFormInputAccessoryView): void;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	doneButtonPressedOnFormInputView(inputView: PSPDFFormInputAccessoryView): void;

	formInputViewShouldEnableClearButton(inputView: PSPDFFormInputAccessoryView): boolean;

	formInputViewShouldEnableNextButton(inputView: PSPDFFormInputAccessoryView): boolean;

	formInputViewShouldEnablePreviousButton(inputView: PSPDFFormInputAccessoryView): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	nextButtonPressedOnFormInputView(inputView: PSPDFFormInputAccessoryView): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	previousButtonPressedOnFormInputView(inputView: PSPDFFormInputAccessoryView): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class PSPDFFormField extends PSPDFModel implements PSPDFJSONSerializing, PSPDFUndoProtocol {

	static JSONKeyPathsByPropertyKey(): NSDictionary<string, any>;

	static JSONTransformerForKey(key: string): NSValueTransformer;

	static alloc(): PSPDFFormField; // inherited from NSObject

	static classForParsingJSONDictionary(JSONDictionary: NSDictionary<string, any>): typeof NSObject;

	static keysForValuesToObserveForUndo(): NSSet<string>;

	static localizedUndoActionNameForKey(key: string): string;

	static modelWithDictionaryError(dictionaryValue: NSDictionary<string, any>): PSPDFFormField; // inherited from PSPDFModel

	static new(): PSPDFFormField; // inherited from NSObject

	static undoCoalescingForKey(key: string): PSPDFUndoCoalescing;

	readonly alternateFieldName: string;

	readonly annotations: NSArray<PSPDFFormElement>;

	readonly calculationOrderIndex: number;

	readonly defaultValue: any;

	readonly dirty: boolean;

	readonly documentProvider: PSPDFDocumentProvider;

	readonly exportValue: any;

	readonly fullyQualifiedName: string;

	isEditable: boolean;

	readonly isNoExport: boolean;

	readonly isReadOnly: boolean;

	readonly isRequired: boolean;

	readonly mappingName: string;

	readonly name: string;

	readonly type: PSPDFFormFieldType;

	value: any;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	didUndoOrRedoChange(key: string): void;

	fullyQualifiedNameForAnnotation(annotation: PSPDFFormElement): string;

	insertUndoObjectsForKey(objects: NSSet<any>, key: string): void;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	nameForAnnotation(annotation: PSPDFFormElement): string;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	removeUndoObjectsForKey(objects: NSSet<any>, key: string): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare const enum PSPDFFormFieldType {

	Unknown = 0,

	PushButton = 1,

	RadioButton = 2,

	CheckBox = 3,

	Text = 4,

	ListBox = 5,

	ComboBox = 6,

	Signature = 7
}

declare class PSPDFFormInputAccessoryView extends UIView {

	static alloc(): PSPDFFormInputAccessoryView; // inherited from NSObject

	static appearance(): PSPDFFormInputAccessoryView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PSPDFFormInputAccessoryView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PSPDFFormInputAccessoryView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): PSPDFFormInputAccessoryView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PSPDFFormInputAccessoryView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): PSPDFFormInputAccessoryView; // inherited from UIAppearance

	static new(): PSPDFFormInputAccessoryView; // inherited from NSObject

	readonly clearButton: UIBarButtonItem;

	delegate: PSPDFFormInputAccessoryViewDelegate;

	displayClearButton: boolean;

	displayDoneButton: boolean;

	readonly doneButton: UIBarButtonItem;

	readonly nextButton: UIBarButtonItem;

	readonly prevButton: UIBarButtonItem;

	clearButtonPressed(sender: any): void;

	doneButtonPressed(sender: any): void;

	nextButtonPressed(sender: any): void;

	prevButtonPressed(sender: any): void;

	updateToolbar(): void;
}

interface PSPDFFormInputAccessoryViewDelegate extends NSObjectProtocol {

	clearButtonPressedOnFormInputView(inputView: PSPDFFormInputAccessoryView): void;

	doneButtonPressedOnFormInputView(inputView: PSPDFFormInputAccessoryView): void;

	formInputViewShouldEnableClearButton(inputView: PSPDFFormInputAccessoryView): boolean;

	formInputViewShouldEnableNextButton(inputView: PSPDFFormInputAccessoryView): boolean;

	formInputViewShouldEnablePreviousButton(inputView: PSPDFFormInputAccessoryView): boolean;

	nextButtonPressedOnFormInputView(inputView: PSPDFFormInputAccessoryView): void;

	previousButtonPressedOnFormInputView(inputView: PSPDFFormInputAccessoryView): void;
}
declare var PSPDFFormInputAccessoryViewDelegate: {

	prototype: PSPDFFormInputAccessoryViewDelegate;
};

declare var PSPDFFormInputAccessoryViewDidPressClearButtonNotification: string;

declare class PSPDFFormOption extends NSObject {

	static alloc(): PSPDFFormOption; // inherited from NSObject

	static new(): PSPDFFormOption; // inherited from NSObject

	readonly label: string;

	readonly value: string;

	constructor(o: { label: string; value: string; });

	initWithLabelValue(label: string, value: string): this;
}

declare class PSPDFFormParser extends NSObject {

	static alloc(): PSPDFFormParser; // inherited from NSObject

	static new(): PSPDFFormParser; // inherited from NSObject

	readonly dirtyForms: NSArray<PSPDFFormElement>;

	readonly documentProvider: PSPDFDocumentProvider;

	readonly formFields: NSArray<PSPDFFormField>;

	readonly forms: NSArray<PSPDFFormElement>;

	findAnnotationWithFieldName(fieldName: string): PSPDFFormElement;

	findFieldWithFullFieldName(fullFieldName: string): PSPDFFormField;
}

declare class PSPDFFormRequest extends NSObject {

	static alloc(): PSPDFFormRequest; // inherited from NSObject

	static new(): PSPDFFormRequest; // inherited from NSObject

	readonly formValues: NSDictionary<string, any>;

	readonly request: NSURLRequest;

	readonly submissionFormat: PSPDFSubmitFormActionFormat;

	constructor(o: { format: PSPDFSubmitFormActionFormat; values: NSDictionary<string, any>; request: NSURLRequest; });

	initWithFormatValuesRequest(format: PSPDFSubmitFormActionFormat, values: NSDictionary<string, any>, request: NSURLRequest): this;
}

interface PSPDFFormSubmissionDelegate extends NSObjectProtocol {
}
declare var PSPDFFormSubmissionDelegate: {

	prototype: PSPDFFormSubmissionDelegate;
};

declare class PSPDFFreeTextAccessoryView extends PSPDFToolbar implements PSPDFAnnotationStyleViewControllerDelegate, PSPDFFontPickerViewControllerDelegate {

	static alloc(): PSPDFFreeTextAccessoryView; // inherited from NSObject

	static appearance(): PSPDFFreeTextAccessoryView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PSPDFFreeTextAccessoryView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PSPDFFreeTextAccessoryView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): PSPDFFreeTextAccessoryView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PSPDFFreeTextAccessoryView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): PSPDFFreeTextAccessoryView; // inherited from UIAppearance

	static new(): PSPDFFreeTextAccessoryView; // inherited from NSObject

	annotation: PSPDFFreeTextAnnotation;

	borderVisible: boolean;

	readonly centerAlignButton: PSPDFToolbarSelectableButton;

	readonly clearButton: PSPDFToolbarButton;

	readonly colorButton: PSPDFToolbarButton;

	readonly decreaseFontSizeButton: PSPDFToolbarButton;

	delegate: PSPDFFreeTextAccessoryViewDelegate;

	readonly doneButton: PSPDFToolbarButton;

	readonly fontNameButton: PSPDFToolbarButton;

	readonly fontSizeButton: PSPDFToolbarButton;

	readonly increaseFontSizeButton: PSPDFToolbarButton;

	readonly leftAlignButton: PSPDFToolbarSelectableButton;

	presentationContext: PSPDFPresentationContext;

	propertiesForAnnotations: NSDictionary<string, any>;

	readonly rightAlignButton: PSPDFToolbarSelectableButton;

	separatorColor: UIColor;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	annotationStyleControllerAnnotationViewForAnnotation(styleController: PSPDFAnnotationStyleViewController, annotation: PSPDFAnnotation): UIView;

	annotationStyleControllerDidChangeProperties(styleController: PSPDFAnnotationStyleViewController, propertyNames: NSArray<string>): void;

	annotationStyleControllerDidEndChangingProperty(styleController: PSPDFAnnotationStyleViewController, propertyName: string): void;

	annotationStyleControllerWillStartChangingProperty(styleController: PSPDFAnnotationStyleViewController, propertyName: string): void;

	buttonsForWidth(width: number): NSArray<PSPDFToolbarButton>;

	class(): typeof NSObject;

	classForClass(originalClass: typeof NSObject): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	dismissPresentedViewControllersAnimated(animated: boolean): void;

	fontPickerViewControllerDidSelectFont(fontPickerViewController: PSPDFFontPickerViewController, selectedFont: UIFont): void;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

interface PSPDFFreeTextAccessoryViewDelegate extends NSObjectProtocol {

	clearButtonPressedOnFreeTextAccessoryView?(inputView: PSPDFFreeTextAccessoryView): void;

	doneButtonPressedOnFreeTextAccessoryView?(inputView: PSPDFFreeTextAccessoryView): void;

	freeTextAccessoryViewDidChangeProperty?(styleController: PSPDFFreeTextAccessoryView, propertyName: string): void;

	freeTextAccessoryViewDidRequestInspector?(inputView: PSPDFFreeTextAccessoryView): PSPDFAnnotationStyleViewController;

	freeTextAccessoryViewShouldChangeProperty?(styleController: PSPDFFreeTextAccessoryView, propertyName: string): boolean;
}
declare var PSPDFFreeTextAccessoryViewDelegate: {

	prototype: PSPDFFreeTextAccessoryViewDelegate;
};

declare var PSPDFFreeTextAccessoryViewDidPressClearButtonNotification: string;

declare class PSPDFFreeTextAnnotation extends PSPDFAnnotation {

	static alloc(): PSPDFFreeTextAnnotation; // inherited from NSObject

	static modelWithDictionaryError(dictionaryValue: NSDictionary<string, any>): PSPDFFreeTextAnnotation; // inherited from PSPDFModel

	static new(): PSPDFFreeTextAnnotation; // inherited from NSObject

	enableHorizontalResizing: boolean;

	enableVerticalResizing: boolean;

	innerRectInset: UIEdgeInsets;

	intentType: PSPDFFreeTextAnnotationIntent;

	kneePoint: CGPoint;

	lineEnd: PSPDFLineEndType;

	point1: CGPoint;

	point2: CGPoint;

	textBoundingBox: CGRect;

	constructor(o: { contents: string; });

	constructor(o: { contents: string; calloutPoint1: CGPoint; });

	convertToIntentType(intentType: PSPDFFreeTextAnnotationIntent): NSArray<string>;

	initWithContents(contents: string): this;

	initWithContentsCalloutPoint1(contents: string, point1: CGPoint): this;

	setBoundingBoxTransformSize(boundingBox: CGRect, transformSize: boolean): void;

	setTextBoundingBoxSize(size: CGSize): void;

	sizeToFit(): void;

	sizeWithConstraints(constraints: CGSize): CGSize;
}

declare const enum PSPDFFreeTextAnnotationIntent {

	FreeText = 0,

	FreeTextCallout = 1,

	FreeTextTypeWriter = 2
}

declare var PSPDFFreeTextAnnotationIntentTransformerName: string;

declare class PSPDFFreeTextAnnotationView extends PSPDFHostingAnnotationView implements UITextViewDelegate {

	static alloc(): PSPDFFreeTextAnnotationView; // inherited from NSObject

	static appearance(): PSPDFFreeTextAnnotationView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PSPDFFreeTextAnnotationView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PSPDFFreeTextAnnotationView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): PSPDFFreeTextAnnotationView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PSPDFFreeTextAnnotationView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): PSPDFFreeTextAnnotationView; // inherited from UIAppearance

	static new(): PSPDFFreeTextAnnotationView; // inherited from NSObject

	resizableView: PSPDFResizableView;

	readonly textView: UITextView;

	readonly textViewForEditing: UITextView;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	beginEditing(): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	endEditing(): void;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	scrollViewDidEndDecelerating(scrollView: UIScrollView): void;

	scrollViewDidEndDraggingWillDecelerate(scrollView: UIScrollView, decelerate: boolean): void;

	scrollViewDidEndScrollingAnimation(scrollView: UIScrollView): void;

	scrollViewDidEndZoomingWithViewAtScale(scrollView: UIScrollView, view: UIView, scale: number): void;

	scrollViewDidScroll(scrollView: UIScrollView): void;

	scrollViewDidScrollToTop(scrollView: UIScrollView): void;

	scrollViewDidZoom(scrollView: UIScrollView): void;

	scrollViewShouldScrollToTop(scrollView: UIScrollView): boolean;

	scrollViewWillBeginDecelerating(scrollView: UIScrollView): void;

	scrollViewWillBeginDragging(scrollView: UIScrollView): void;

	scrollViewWillBeginZoomingWithView(scrollView: UIScrollView, view: UIView): void;

	scrollViewWillEndDraggingWithVelocityTargetContentOffset(scrollView: UIScrollView, velocity: CGPoint, targetContentOffset: interop.Pointer | interop.Reference<CGPoint>): void;

	self(): this;

	textViewDidBeginEditing(textView: UITextView): void;

	textViewDidChange(textView: UITextView): void;

	textViewDidChangeSelection(textView: UITextView): void;

	textViewDidEndEditing(textView: UITextView): void;

	textViewShouldBeginEditing(textView: UITextView): boolean;

	textViewShouldChangeTextInRangeReplacementText(textView: UITextView, range: NSRange, text: string): boolean;

	textViewShouldEndEditing(textView: UITextView): boolean;

	textViewShouldInteractWithTextAttachmentInRange(textView: UITextView, textAttachment: NSTextAttachment, characterRange: NSRange): boolean;

	textViewShouldInteractWithTextAttachmentInRangeInteraction(textView: UITextView, textAttachment: NSTextAttachment, characterRange: NSRange, interaction: UITextItemInteraction): boolean;

	textViewShouldInteractWithURLInRange(textView: UITextView, URL: NSURL, characterRange: NSRange): boolean;

	textViewShouldInteractWithURLInRangeInteraction(textView: UITextView, URL: NSURL, characterRange: NSRange, interaction: UITextItemInteraction): boolean;

	viewForZoomingInScrollView(scrollView: UIScrollView): UIView;
}

declare class PSPDFGalleryConfiguration extends PSPDFBaseConfiguration<PSPDFGalleryConfigurationBuilder> {

	static alloc(): PSPDFGalleryConfiguration; // inherited from NSObject

	static configurationWithBuilder(builderBlock: (p1: BuilderType) => void): PSPDFGalleryConfiguration; // inherited from PSPDFBaseConfiguration

	static defaultConfiguration(): PSPDFGalleryConfiguration; // inherited from PSPDFBaseConfiguration

	static modelWithDictionaryError(dictionaryValue: NSDictionary<string, any>): PSPDFGalleryConfiguration; // inherited from PSPDFModel

	static new(): PSPDFGalleryConfiguration; // inherited from NSObject

	readonly allowPlayingMultipleInstances: boolean;

	readonly displayModeUserInteractionEnabled: boolean;

	readonly fullscreenDismissPanThreshold: number;

	readonly fullscreenZoomEnabled: boolean;

	readonly loopEnabled: boolean;

	readonly loopHUDEnabled: boolean;

	readonly maximumConcurrentDownloads: number;

	readonly maximumFullscreenZoomScale: number;

	readonly maximumPrefetchDownloads: number;

	readonly minimumFullscreenZoomScale: number;

	readonly usesExternalPlaybackWhileExternalScreenIsActive: boolean;
}

declare class PSPDFGalleryConfigurationBuilder extends PSPDFBaseConfigurationBuilder {

	static alloc(): PSPDFGalleryConfigurationBuilder; // inherited from NSObject

	static new(): PSPDFGalleryConfigurationBuilder; // inherited from NSObject

	allowPlayingMultipleInstances: boolean;

	displayModeUserInteractionEnabled: boolean;

	fullscreenDismissPanThreshold: number;

	fullscreenZoomEnabled: boolean;

	loopEnabled: boolean;

	loopHUDEnabled: boolean;

	maximumConcurrentDownloads: number;

	maximumFullscreenZoomScale: number;

	maximumPrefetchDownloads: number;

	minimumFullscreenZoomScale: number;

	usesExternalPlaybackWhileExternalScreenIsActive: boolean;
}

declare class PSPDFGalleryContainerView extends UIView {

	static alloc(): PSPDFGalleryContainerView; // inherited from NSObject

	static appearance(): PSPDFGalleryContainerView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PSPDFGalleryContainerView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PSPDFGalleryContainerView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): PSPDFGalleryContainerView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PSPDFGalleryContainerView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): PSPDFGalleryContainerView; // inherited from UIAppearance

	static new(): PSPDFGalleryContainerView; // inherited from NSObject

	backgroundView: PSPDFGalleryEmbeddedBackgroundView;

	readonly contentContainerView: UIView;

	contentState: PSPDFGalleryContainerViewContentState;

	fullscreenBackgroundView: PSPDFGalleryFullscreenBackgroundView;

	galleryView: PSPDFGalleryView;

	loadingView: UIView;

	readonly overrideDelegate: PSPDFOverridable;

	presentationMode: PSPDFGalleryContainerViewPresentationMode;

	statusHUDView: PSPDFStatusHUDView;

	constructor(o: { frame: CGRect; overrideDelegate: PSPDFOverridable; });

	dismissStatusHUDAnimated(animated: boolean): void;

	initWithFrameOverrideDelegate(frame: CGRect, overrideDelegate: PSPDFOverridable): this;

	presentStatusHUDWithTimeoutAnimated(timeout: number, animated: boolean): void;
}

declare const enum PSPDFGalleryContainerViewContentState {

	Loading = 0,

	Ready = 1,

	Error = 2
}

declare const enum PSPDFGalleryContainerViewPresentationMode {

	Embedded = 0,

	Fullscreen = 1
}

declare class PSPDFGalleryContentCaptionView extends UIView implements PSPDFGalleryContentViewCaption {

	static alloc(): PSPDFGalleryContentCaptionView; // inherited from NSObject

	static appearance(): PSPDFGalleryContentCaptionView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PSPDFGalleryContentCaptionView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PSPDFGalleryContentCaptionView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): PSPDFGalleryContentCaptionView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PSPDFGalleryContentCaptionView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): PSPDFGalleryContentCaptionView; // inherited from UIAppearance

	static new(): PSPDFGalleryContentCaptionView; // inherited from NSObject

	contentInset: UIEdgeInsets;

	readonly label: UILabel;

	caption: string; // inherited from PSPDFGalleryContentViewCaption

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class PSPDFGalleryContentView extends UIView {

	static alloc(): PSPDFGalleryContentView; // inherited from NSObject

	static appearance(): PSPDFGalleryContentView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PSPDFGalleryContentView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PSPDFGalleryContentView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): PSPDFGalleryContentView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PSPDFGalleryContentView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): PSPDFGalleryContentView; // inherited from UIAppearance

	static captionViewClass(): typeof NSObject;

	static contentViewClass(): typeof NSObject;

	static errorViewClass(): typeof NSObject;

	static loadingViewClass(): typeof NSObject;

	static new(): PSPDFGalleryContentView; // inherited from NSObject

	readonly captionView: UIView;

	readonly captionViewFrame: CGRect;

	content: PSPDFGalleryItem;

	readonly contentView: UIView;

	readonly contentViewFrame: CGRect;

	readonly errorView: UIView;

	readonly errorViewFrame: CGRect;

	readonly loadingView: UIView;

	readonly loadingViewFrame: CGRect;

	reuseIdentifier: string;

	shouldHideCaption: boolean;

	constructor(o: { reuseIdentifier: string; });

	contentDidChange(): void;

	initWithReuseIdentifier(reuseIdentifier: string): this;

	prepareForReuse(): void;

	updateCaptionView(): void;

	updateContentView(): void;

	updateErrorView(): void;

	updateLoadingView(): void;

	updateSubviewVisibility(): void;
}

interface PSPDFGalleryContentViewCaption extends NSObjectProtocol {

	caption: string;
}
declare var PSPDFGalleryContentViewCaption: {

	prototype: PSPDFGalleryContentViewCaption;
};

interface PSPDFGalleryContentViewError extends NSObjectProtocol {

	error: NSError;
}
declare var PSPDFGalleryContentViewError: {

	prototype: PSPDFGalleryContentViewError;
};

interface PSPDFGalleryContentViewLoading extends NSObjectProtocol {

	hasUnspecifiedProgress?: boolean;

	progress: number;
}
declare var PSPDFGalleryContentViewLoading: {

	prototype: PSPDFGalleryContentViewLoading;
};

declare class PSPDFGalleryEmbeddedBackgroundView extends PSPDFBlurView {

	static alloc(): PSPDFGalleryEmbeddedBackgroundView; // inherited from NSObject

	static appearance(): PSPDFGalleryEmbeddedBackgroundView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PSPDFGalleryEmbeddedBackgroundView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PSPDFGalleryEmbeddedBackgroundView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): PSPDFGalleryEmbeddedBackgroundView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PSPDFGalleryEmbeddedBackgroundView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): PSPDFGalleryEmbeddedBackgroundView; // inherited from UIAppearance

	static new(): PSPDFGalleryEmbeddedBackgroundView; // inherited from NSObject
}

declare class PSPDFGalleryFullscreenBackgroundView extends PSPDFBlurView {

	static alloc(): PSPDFGalleryFullscreenBackgroundView; // inherited from NSObject

	static appearance(): PSPDFGalleryFullscreenBackgroundView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PSPDFGalleryFullscreenBackgroundView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PSPDFGalleryFullscreenBackgroundView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): PSPDFGalleryFullscreenBackgroundView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PSPDFGalleryFullscreenBackgroundView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): PSPDFGalleryFullscreenBackgroundView; // inherited from UIAppearance

	static new(): PSPDFGalleryFullscreenBackgroundView; // inherited from NSObject
}

declare class PSPDFGalleryImageContentView extends PSPDFGalleryContentView {

	static alloc(): PSPDFGalleryImageContentView; // inherited from NSObject

	static appearance(): PSPDFGalleryImageContentView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PSPDFGalleryImageContentView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PSPDFGalleryImageContentView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): PSPDFGalleryImageContentView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PSPDFGalleryImageContentView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): PSPDFGalleryImageContentView; // inherited from UIAppearance

	static new(): PSPDFGalleryImageContentView; // inherited from NSObject

	content: PSPDFGalleryImageItem;

	readonly contentView: UIImageView;

	maximumZoomScale: number;

	minimumZoomScale: number;

	zoomEnabled: boolean;

	zoomScale: number;

	setZoomScaleAnimated(zoomScale: number, animated: boolean): void;
}

declare class PSPDFGalleryImageItem extends PSPDFGalleryItem {

	static alloc(): PSPDFGalleryImageItem; // inherited from NSObject

	static new(): PSPDFGalleryImageItem; // inherited from NSObject

	readonly content: UIImage;
}

declare class PSPDFGalleryItem extends NSObject {

	static alloc(): PSPDFGalleryItem; // inherited from NSObject

	static itemFromLinkAnnotationError(annotation: PSPDFLinkAnnotation): PSPDFGalleryItem;

	static itemsFromJSONDataError(data: NSData): NSArray<PSPDFGalleryItem>;

	static new(): PSPDFGalleryItem; // inherited from NSObject

	readonly caption: string;

	readonly content: any;

	readonly contentState: PSPDFGalleryItemContentState;

	readonly contentURL: NSURL;

	controlsEnabled: boolean;

	readonly error: NSError;

	fullscreenEnabled: boolean;

	readonly options: NSDictionary<string, any>;

	readonly progress: number;

	readonly validContent: boolean;

	constructor(o: { contentURL: NSURL; caption: string; options: NSDictionary<string, any>; });

	constructor(o: { dictionary: NSDictionary<string, any>; });

	initWithContentURLCaptionOptions(contentURL: NSURL, caption: string, options: NSDictionary<string, any>): this;

	initWithDictionary(dictionary: NSDictionary<string, any>): this;
}

declare var PSPDFGalleryItemCaptionKey: string;

declare const enum PSPDFGalleryItemContentState {

	Waiting = 0,

	Loading = 1,

	Ready = 2,

	Error = 3
}

declare var PSPDFGalleryItemContentStateDidChangeNotification: string;

declare var PSPDFGalleryItemContentURLKey: string;

declare var PSPDFGalleryItemOptionsKey: string;

declare var PSPDFGalleryItemTypeKey: string;

declare class PSPDFGalleryManifest extends NSObject {

	static alloc(): PSPDFGalleryManifest; // inherited from NSObject

	static new(): PSPDFGalleryManifest; // inherited from NSObject

	readonly linkAnnotation: PSPDFLinkAnnotation;

	readonly loading: boolean;

	constructor(o: { linkAnnotation: PSPDFLinkAnnotation; });

	cancel(): void;

	initWithLinkAnnotation(linkAnnotation: PSPDFLinkAnnotation): this;

	loadItemsWithCompletionBlock(completionBlock: (p1: NSArray<any>, p2: NSError) => void): void;
}

declare var PSPDFGalleryOptionAutoplay: string;

declare var PSPDFGalleryOptionControls: string;

declare var PSPDFGalleryOptionCover: string;

declare var PSPDFGalleryOptionCoverImage: string;

declare var PSPDFGalleryOptionCoverMode: string;

declare var PSPDFGalleryOptionCoverPreviewCaptureTime: string;

declare var PSPDFGalleryOptionEndTime: string;

declare var PSPDFGalleryOptionFullscreen: string;

declare var PSPDFGalleryOptionLoop: string;

declare var PSPDFGalleryOptionPreferredVideoQualities: string;

declare var PSPDFGalleryOptionStartTime: string;

declare class PSPDFGalleryUnknownItem extends PSPDFGalleryItem {

	static alloc(): PSPDFGalleryUnknownItem; // inherited from NSObject

	static new(): PSPDFGalleryUnknownItem; // inherited from NSObject
}

declare class PSPDFGalleryVideoContentView extends PSPDFGalleryContentView {

	static alloc(): PSPDFGalleryVideoContentView; // inherited from NSObject

	static appearance(): PSPDFGalleryVideoContentView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PSPDFGalleryVideoContentView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PSPDFGalleryVideoContentView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): PSPDFGalleryVideoContentView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PSPDFGalleryVideoContentView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): PSPDFGalleryVideoContentView; // inherited from UIAppearance

	static new(): PSPDFGalleryVideoContentView; // inherited from NSObject
}

declare class PSPDFGalleryVideoItem extends PSPDFGalleryItem {

	static alloc(): PSPDFGalleryVideoItem; // inherited from NSObject

	static new(): PSPDFGalleryVideoItem; // inherited from NSObject

	autoplayEnabled: boolean;

	readonly content: NSURL;

	coverImageURL: NSURL;

	coverMode: PSPDFGalleryVideoItemCoverMode;

	coverPreviewCaptureTime: number;

	endTime: number;

	loopEnabled: boolean;

	readonly playableRange: CMTimeRange;

	preferredVideoQualities: NSArray<number>;

	seekTime: number;

	startTime: number;

	constructor(o: { internallyWithDictionary: NSDictionary<string, any>; });

	initInternallyWithDictionary(dictionary: NSDictionary<string, any>): this;
}

declare const enum PSPDFGalleryVideoItemCoverMode {

	None = 0,

	Preview = 1,

	Image = 2,

	Clear = 3
}

declare function PSPDFGalleryVideoItemCoverModeFromString(string: string): PSPDFGalleryVideoItemCoverMode;

declare const enum PSPDFGalleryVideoItemQuality {

	QualityUnknown = 0,

	Quality240p = 1,

	Quality360p = 2,

	Quality720p = 3,

	Quality1080p = 4
}

declare function PSPDFGalleryVideoItemQualityFromString(string: string): PSPDFGalleryVideoItemQuality;

declare class PSPDFGalleryView extends UIScrollView {

	static alloc(): PSPDFGalleryView; // inherited from NSObject

	static appearance(): PSPDFGalleryView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PSPDFGalleryView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PSPDFGalleryView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): PSPDFGalleryView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PSPDFGalleryView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): PSPDFGalleryView; // inherited from UIAppearance

	static new(): PSPDFGalleryView; // inherited from NSObject

	readonly activeContentViews: NSSet<any>;

	contentPadding: number;

	currentItemIndex: number;

	dataSource: PSPDFGalleryViewDataSource;

	loopEnabled: boolean;

	contentViewForItemAtIndex(index: number): PSPDFGalleryContentView;

	delegate(): PSPDFGalleryViewDelegate;

	dequeueReusableContentViewWithIdentifier(identifier: string): PSPDFGalleryContentView;

	itemIndexForContentView(contentView: PSPDFGalleryContentView): number;

	reload(): void;

	setCurrentItemIndexAnimated(currentItemIndex: number, animated: boolean): void;

	setDelegate(delegate: PSPDFGalleryViewDelegate): void;
}

declare class PSPDFGalleryViewController extends PSPDFBaseViewController implements PSPDFMultimediaViewController, PSPDFOverridable {

	static alloc(): PSPDFGalleryViewController; // inherited from NSObject

	static new(): PSPDFGalleryViewController; // inherited from NSObject

	configuration: PSPDFGalleryConfiguration;

	readonly doubleTapGestureRecognizer: UITapGestureRecognizer;

	readonly items: NSArray<PSPDFGalleryItem>;

	readonly linkAnnotation: PSPDFLinkAnnotation;

	readonly panGestureRecognizer: UIPanGestureRecognizer;

	readonly singleTapGestureRecognizer: UITapGestureRecognizer;

	readonly state: PSPDFGalleryViewControllerState;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	fullscreen: boolean; // inherited from PSPDFMultimediaViewController

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	overrideDelegate: PSPDFOverridable; // inherited from PSPDFMultimediaViewController

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	transitioning: boolean; // inherited from PSPDFMultimediaViewController

	readonly  // inherited from NSObjectProtocol

	zoomScale: number; // inherited from PSPDFMultimediaViewController

	constructor(o: { linkAnnotation: PSPDFLinkAnnotation; });

	class(): typeof NSObject;

	classForClass(originalClass: typeof NSObject): typeof NSObject;

	configure(configuration: PSPDFConfiguration): void;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithLinkAnnotation(linkAnnotation: PSPDFLinkAnnotation): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performAction(action: PSPDFAction): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	setFullscreenAnimated(fullscreen: boolean, animated: boolean): void;
}

declare const enum PSPDFGalleryViewControllerState {

	Idle = 0,

	Loading = 1,

	Ready = 2,

	Error = 3
}

interface PSPDFGalleryViewDataSource extends NSObjectProtocol {

	galleryViewContentViewForItemAtIndex(galleryView: PSPDFGalleryView, index: number): PSPDFGalleryContentView;

	numberOfItemsInGalleryView(galleryView: PSPDFGalleryView): number;
}
declare var PSPDFGalleryViewDataSource: {

	prototype: PSPDFGalleryViewDataSource;
};

interface PSPDFGalleryViewDelegate extends UIScrollViewDelegate {

	galleryViewDidScrollToItemAtIndex?(galleryView: PSPDFGalleryView, index: number): void;

	galleryViewWillReuseContentView?(galleryView: PSPDFGalleryView, contentView: PSPDFGalleryContentView): void;

	galleryViewWillScrollToItemAtIndex?(galleryView: PSPDFGalleryView, index: number): void;
}
declare var PSPDFGalleryViewDelegate: {

	prototype: PSPDFGalleryViewDelegate;
};

declare class PSPDFGalleryWebContentView extends PSPDFGalleryContentView {

	static alloc(): PSPDFGalleryWebContentView; // inherited from NSObject

	static appearance(): PSPDFGalleryWebContentView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PSPDFGalleryWebContentView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PSPDFGalleryWebContentView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): PSPDFGalleryWebContentView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PSPDFGalleryWebContentView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): PSPDFGalleryWebContentView; // inherited from UIAppearance

	static new(): PSPDFGalleryWebContentView; // inherited from NSObject

	readonly webView: UIView;
}

declare class PSPDFGalleryWebItem extends PSPDFGalleryItem {

	static alloc(): PSPDFGalleryWebItem; // inherited from NSObject

	static new(): PSPDFGalleryWebItem; // inherited from NSObject
}

declare class PSPDFGlyph extends NSObject implements NSCopying, NSSecureCoding {

	static alloc(): PSPDFGlyph; // inherited from NSObject

	static new(): PSPDFGlyph; // inherited from NSObject

	readonly content: string;

	readonly frame: CGRect;

	readonly indexOnPage: number;

	readonly isWordBreaker: boolean;

	readonly isWordOrLineBreaker: boolean;

	readonly lineBreaker: boolean;

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	encodeWithCoder(aCoder: NSCoder): void;

	initWithCoder(aDecoder: NSCoder): this;
}

declare class PSPDFGoToAction extends PSPDFAction {

	static alloc(): PSPDFGoToAction; // inherited from NSObject

	static modelWithDictionaryError(dictionaryValue: NSDictionary<string, any>): PSPDFGoToAction; // inherited from PSPDFModel

	static new(): PSPDFGoToAction; // inherited from NSObject

	readonly pageIndex: number;

	constructor(o: { pageIndex: number; });

	initWithPageIndex(pageIndex: number): this;
}

declare var PSPDFGuideSnapAllowanceAlways: number;

interface PSPDFHUDControls extends NSObjectProtocol {

	shouldShowControls: boolean;

	hideControlsAndPageElementsAnimated(animated: boolean): boolean;

	hideControlsAnimated(animated: boolean): boolean;

	hideControlsForUserScrollActionAnimated(animated: boolean): boolean;

	showControlsAnimated(animated: boolean): boolean;

	showMenuIfSelectedAnimatedAllowPopovers(animated: boolean, allowPopovers: boolean): void;

	toggleControlsAnimated(animated: boolean): boolean;
}
declare var PSPDFHUDControls: {

	prototype: PSPDFHUDControls;
};

declare class PSPDFHUDView extends PSPDFRelayTouchesView implements PSPDFPageLabelViewDelegate, PSPDFScrubberBarDelegate, PSPDFThumbnailBarDelegate {

	static alloc(): PSPDFHUDView; // inherited from NSObject

	static appearance(): PSPDFHUDView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PSPDFHUDView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PSPDFHUDView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): PSPDFHUDView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PSPDFHUDView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): PSPDFHUDView; // inherited from UIAppearance

	static new(): PSPDFHUDView; // inherited from NSObject

	readonly backButton: PSPDFBackForwardButton;

	dataSource: PSPDFPresentationContext;

	readonly documentLabel: PSPDFDocumentLabelView;

	documentLabelInsets: UIEdgeInsets;

	readonly forwardButton: PSPDFBackForwardButton;

	readonly pageLabel: PSPDFPageLabelView;

	pageLabelInsets: UIEdgeInsets;

	readonly scrubberBar: PSPDFScrubberBar;

	scrubberBarInsets: UIEdgeInsets;

	readonly thumbnailBar: PSPDFThumbnailBar;

	thumbnailBarInsets: UIEdgeInsets;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { frame: CGRect; dataSource: PSPDFPresentationContext; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithFrameDataSource(frame: CGRect, dataSource: PSPDFPresentationContext): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	layoutSubviewsAnimated(animated: boolean): void;

	pageLabelViewDidPressThumbnailGridButton(pageLabelView: PSPDFPageLabelView, sender: UIButton): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	reloadData(): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	scrubberBarDidSelectPageAtIndex(scrubberBar: PSPDFScrubberBar, pageIndex: number): void;

	self(): this;

	thumbnailBarDidSelectPageAtIndex(thumbnailBar: PSPDFThumbnailBar, pageIndex: number): void;

	updateDocumentLabelFrameAnimated(animated: boolean): void;

	updatePageLabelFrameAnimated(animated: boolean): void;

	updateScrubberBarFrameAnimated(animated: boolean): void;

	updateThumbnailBarFrameAnimated(animated: boolean): void;
}

declare const enum PSPDFHUDViewAnimation {

	None = 0,

	Fade = 1,

	Slide = 2
}

declare const enum PSPDFHUDViewMode {

	Always = 0,

	Automatic = 1,

	AutomaticNoFirstLastPage = 2,

	Never = 3
}

declare class PSPDFHideAction extends PSPDFAction {

	static alloc(): PSPDFHideAction; // inherited from NSObject

	static modelWithDictionaryError(dictionaryValue: NSDictionary<string, any>): PSPDFHideAction; // inherited from PSPDFModel

	static new(): PSPDFHideAction; // inherited from NSObject

	readonly annotations: NSArray<PSPDFAnnotation>;

	readonly shouldHide: boolean;

	constructor(o: { associatedAnnotations: NSArray<PSPDFAnnotation>; shouldHide: boolean; });

	initWithAssociatedAnnotationsShouldHide(annotations: NSArray<PSPDFAnnotation>, shouldHide: boolean): this;
}

declare class PSPDFHighlightAnnotation extends PSPDFAbstractTextOverlayAnnotation {

	static alloc(): PSPDFHighlightAnnotation; // inherited from NSObject

	static modelWithDictionaryError(dictionaryValue: NSDictionary<string, any>): PSPDFHighlightAnnotation; // inherited from PSPDFModel

	static new(): PSPDFHighlightAnnotation; // inherited from NSObject

	static textOverlayAnnotationWithGlyphsPageRotation(glyphs: NSArray<PSPDFGlyph>, pageRotation: number): PSPDFHighlightAnnotation; // inherited from PSPDFAbstractTextOverlayAnnotation
}

declare class PSPDFHostingAnnotationView extends PSPDFAnnotationView implements PSPDFRenderTaskDelegate {

	static alloc(): PSPDFHostingAnnotationView; // inherited from NSObject

	static appearance(): PSPDFHostingAnnotationView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PSPDFHostingAnnotationView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PSPDFHostingAnnotationView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): PSPDFHostingAnnotationView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PSPDFHostingAnnotationView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): PSPDFHostingAnnotationView; // inherited from UIAppearance

	static new(): PSPDFHostingAnnotationView; // inherited from NSObject

	readonly annotationImageView: UIImageView;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	renderTaskDidFinish(task: PSPDFRenderTask): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

interface PSPDFIdentifiable extends NSObjectProtocol {

	uniqueIdentifier: string;
}
declare var PSPDFIdentifiable: {

	prototype: PSPDFIdentifiable;
};

declare var PSPDFIgnoreDisplaySettingsKey: string;

declare class PSPDFImageInfo extends NSObject implements NSCopying, NSSecureCoding {

	static alloc(): PSPDFImageInfo; // inherited from NSObject

	static new(): PSPDFImageInfo; // inherited from NSObject

	readonly boundingBox: CGRect;

	readonly displaySize: CGSize;

	readonly documentProvider: PSPDFDocumentProvider;

	readonly horizontalResolution: number;

	readonly index: number;

	readonly pageIndex: number;

	readonly pixelSize: CGSize;

	readonly transform: CGAffineTransform;

	readonly verticalResolution: number;

	readonly vertices: NSArray<NSValue>;

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	encodeWithCoder(aCoder: NSCoder): void;

	hitTest(point: CGPoint): boolean;

	imageInRGBColorSpaceWithError(): UIImage;

	imageWithError(): UIImage;

	initWithCoder(aDecoder: NSCoder): this;
}

declare class PSPDFImagePickerController extends UIImagePickerController {

	static alloc(): PSPDFImagePickerController; // inherited from NSObject

	static new(): PSPDFImagePickerController; // inherited from NSObject

	imageDelegate: PSPDFImagePickerControllerDelegate;

	shouldShowImageEditor: boolean;
}

interface PSPDFImagePickerControllerDelegate extends NSObjectProtocol {

	imagePickerControllerCancelled?(picker: PSPDFImagePickerController): void;

	imagePickerControllerDidFinishWithImageAndInfo?(picker: PSPDFImagePickerController, image: UIImage, info: NSDictionary<string, any>): void;

	imagePickerControllerDidSelectImage?(picker: PSPDFImagePickerController, image: UIImage): void;
}
declare var PSPDFImagePickerControllerDelegate: {

	prototype: PSPDFImagePickerControllerDelegate;
};

declare var PSPDFImagePickerTargetPoint: string;

declare const enum PSPDFImageQuality {

	Low = 1,

	Medium = 2,

	High = 4,

	All = 4294967295
}

declare class PSPDFInkAnnotation extends PSPDFAbstractShapeAnnotation {

	static alloc(): PSPDFInkAnnotation; // inherited from NSObject

	static modelWithDictionaryError(dictionaryValue: NSDictionary<string, any>): PSPDFInkAnnotation; // inherited from PSPDFModel

	static new(): PSPDFInkAnnotation; // inherited from NSObject

	readonly bezierPath: UIBezierPath;

	readonly empty: boolean;

	isSignature: boolean;

	lines: NSArray<NSArray<NSValue>>;

	naturalDrawingEnabled: boolean;

	constructor(o: { lines: NSArray<NSArray<NSValue>>; });

	copyLinesByApplyingTransform(transform: CGAffineTransform): NSArray<any>;

	initWithLines(lines: NSArray<NSArray<NSValue>>): this;

	setBoundingBoxTransformLines(boundingBox: CGRect, transformLines: boolean): void;
}

declare class PSPDFInlineSearchManager extends NSObject {

	static alloc(): PSPDFInlineSearchManager; // inherited from NSObject

	static new(): PSPDFInlineSearchManager; // inherited from NSObject

	readonly beingDismissed: boolean;

	readonly beingPresented: boolean;

	delegate: PSPDFInlineSearchManagerDelegate;

	document: PSPDFDocument;

	maximumNumberOfSearchResultsDisplayed: number;

	readonly presentationContext: PSPDFPresentationContext;

	readonly searchResults: NSArray<PSPDFSearchResult>;

	searchResultsLabelDistance: number;

	readonly searchStatus: PSPDFSearchStatus;

	readonly searchText: string;

	readonly searchVisible: boolean;

	searchableAnnotationTypes: PSPDFAnnotationType;

	readonly textSearch: PSPDFTextSearch;

	constructor(o: { presentationContext: PSPDFPresentationContext; });

	hideInlineSearchAnimated(animated: boolean): boolean;

	hideKeyboard(): void;

	initWithPresentationContext(presentationContext: PSPDFPresentationContext): this;

	presentInlineSearchWithSearchTextAnimated(text: string, animated: boolean): void;
}

interface PSPDFInlineSearchManagerDelegate extends PSPDFOverridable, PSPDFTextSearchDelegate {

	inlineSearchManagerContainerView(manager: PSPDFInlineSearchManager): UIView;

	inlineSearchManagerDidClearAllSearchResults?(manager: PSPDFInlineSearchManager): void;

	inlineSearchManagerDidFocusSearchResult?(manager: PSPDFInlineSearchManager, searchResult: PSPDFSearchResult): void;

	inlineSearchManagerSearchDidAppear?(manager: PSPDFInlineSearchManager): void;

	inlineSearchManagerSearchDidDisappear?(manager: PSPDFInlineSearchManager): void;

	inlineSearchManagerSearchWillAppear?(manager: PSPDFInlineSearchManager): void;

	inlineSearchManagerSearchWillDisappear?(manager: PSPDFInlineSearchManager): void;
}
declare var PSPDFInlineSearchManagerDelegate: {

	prototype: PSPDFInlineSearchManagerDelegate;
};

declare const enum PSPDFItemZPosition {

	Foreground = 0,

	Background = 1
}

declare class PSPDFJSONAdapter extends NSObject {

	static JSONDictionaryFromModel(model: PSPDFModel): NSDictionary<string, any>;

	static alloc(): PSPDFJSONAdapter; // inherited from NSObject

	static modelOfClassFromJSONDictionaryError(modelClass: typeof NSObject, JSONDictionary: NSDictionary<string, any>): PSPDFModel;

	static new(): PSPDFJSONAdapter; // inherited from NSObject

	readonly JSONDictionary: NSDictionary<string, any>;

	readonly model: PSPDFModel;

	constructor(o: { JSONDictionary: NSDictionary<string, any>; modelClass: typeof NSObject; });

	constructor(o: { model: PSPDFModel; });

	initWithJSONDictionaryModelClassError(JSONDictionary: NSDictionary<string, any>, modelClass: typeof NSObject): this;

	initWithModel(model: PSPDFModel): this;
}

declare var PSPDFJSONAdapterErrorDomain: string;

declare var PSPDFJSONAdapterErrorNoClassFound: number;

interface PSPDFJSONSerializing {
}
declare var PSPDFJSONSerializing: {

	prototype: PSPDFJSONSerializing;

	JSONKeyPathsByPropertyKey(): NSDictionary<string, any>;

	JSONTransformerForKey?(key: string): NSValueTransformer;

	classForParsingJSONDictionary?(JSONDictionary: NSDictionary<string, any>): typeof NSObject;
};

declare class PSPDFJavaScriptAction extends PSPDFAction {

	static alloc(): PSPDFJavaScriptAction; // inherited from NSObject

	static modelWithDictionaryError(dictionaryValue: NSDictionary<string, any>): PSPDFJavaScriptAction; // inherited from PSPDFModel

	static new(): PSPDFJavaScriptAction; // inherited from NSObject

	readonly script: string;

	constructor(o: { script: string; });

	executeScriptAppliedToDocumentProviderApplicationEventDictionarySenderError(documentProvider: PSPDFDocumentProvider, application: PSPDFApplicationJSExport, eventDictionary: NSDictionary<string, any>, sender: any): NSDictionary<string, any>;

	initWithScript(script: string): this;
}

declare const enum PSPDFJavascriptErrorCode {

	ScriptExecutionFailed = 100
}

declare var PSPDFJavascriptErrorDomain: string;

declare class PSPDFKeychainAnnotationSetsStore extends NSObject implements PSPDFAnnotationSetStore {

	static alloc(): PSPDFKeychainAnnotationSetsStore; // inherited from NSObject

	static new(): PSPDFKeychainAnnotationSetsStore; // inherited from NSObject

	annotationSets: NSArray<PSPDFAnnotationSet>; // inherited from PSPDFAnnotationSetStore

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class PSPDFKeychainSignatureStore extends NSObject implements PSPDFSignatureStore {

	static alloc(): PSPDFKeychainSignatureStore; // inherited from NSObject

	static new(): PSPDFKeychainSignatureStore; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	signatures: NSArray<PSPDFInkAnnotation>; // inherited from PSPDFSignatureStore

	readonly storeName: string; // inherited from PSPDFSignatureStore

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { storeName: string; }); // inherited from PSPDFSignatureStore

	addSignature(signature: PSPDFInkAnnotation): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	encodeWithCoder(aCoder: NSCoder): void;

	initWithCoder(aDecoder: NSCoder): this;

	initWithStoreName(storeName: string): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	removeSignature(signature: PSPDFInkAnnotation): boolean;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare var PSPDFKeychainSignatureStoreDefaultStoreName: string;

declare class PSPDFKit extends NSObject implements PSPDFSettings {

	static alloc(): PSPDFKit; // inherited from NSObject

	static imageNamed(name: string): UIImage;

	static isFeatureEnabled(feature: PSPDFFeatureMask): boolean;

	static new(): PSPDFKit; // inherited from NSObject

	static setLicenseKey(licenseKey: string): void;

	static setLicenseKeyOptions(licenseKey: string, options: NSDictionary<string, any>): void;

	readonly analytics: PSPDFAnalytics;

	application: PSPDFApplication;

	readonly cache: PSPDFCache;

	databaseEncryptionProvider: PSPDFDatabaseEncryptionProvider;

	readonly fileManager: PSPDFFileManager;

	imageLoadingHandler: (p1: string) => UIImage;

	library: PSPDFLibrary;

	logHandler: (p1: PSPDFLogLevelMask, p2: string, p3: () => string, p4: string, p5: string, p6: number) => void;

	logLevel: PSPDFLogLevelMask;

	readonly policy: PSPDFApplicationPolicy;

	readonly renderManager: PSPDFRenderManager;

	readonly signatureManager: PSPDFSignatureManager;

	readonly speechController: PSPDFSpeechController;

	readonly styleManager: PSPDFAnnotationStyleManager;

	readonly stylusManager: PSPDFStylusManager;

	static readonly buildNumber: number;

	static readonly compiledAt: Date;

	static readonly sharedInstance: PSPDFKit;

	static readonly versionNumber: string;

	static readonly versionString: string;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	boolForKey(key: string): boolean;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	injectDependentProperties(object: any): number;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	objectForKeyedSubscript(key: any): any;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	setObjectForKeyedSubscript(object: any, key: any): void;
}

declare const enum PSPDFKnobType {

	Outer = 0,

	Inner = 1
}

interface PSPDFKnobView extends NSObjectProtocol {

	knobSize: CGSize;

	type: PSPDFKnobType;
}
declare var PSPDFKnobView: {

	prototype: PSPDFKnobView;
};

declare class PSPDFLabelParser extends NSObject {

	static alloc(): PSPDFLabelParser; // inherited from NSObject

	static new(): PSPDFLabelParser; // inherited from NSObject

	readonly documentProvider: PSPDFDocumentProvider;

	readonly labels: NSDictionary<number, string>;

	pageForPageLabelPartialMatching(pageLabel: string, partialMatching: boolean): number;

	pageLabelForPageAtIndex(pageIndex: number): string;
}

declare const enum PSPDFLabelStyle {

	Flat = 0,

	Modern = 1
}

declare class PSPDFLabelView extends UIView {

	static alloc(): PSPDFLabelView; // inherited from NSObject

	static appearance(): PSPDFLabelView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PSPDFLabelView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PSPDFLabelView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): PSPDFLabelView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PSPDFLabelView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): PSPDFLabelView; // inherited from UIAppearance

	static new(): PSPDFLabelView; // inherited from NSObject

	blurEffectStyle: UIBlurEffectStyle;

	readonly label: UILabel;

	labelMargin: number;

	labelStyle: PSPDFLabelStyle;

	textColor: UIColor;
}

declare class PSPDFLibrary extends NSObject {

	static alloc(): PSPDFLibrary; // inherited from NSObject

	static defaultLibraryPath(): string;

	static encryptedLibraryWithPathEncryptionKeyProviderError(path: string, encryptionKeyProvider: () => NSData): PSPDFLibrary;

	static encryptedLibraryWithPathEncryptionKeyProviderFtsVersionTokenizerError(path: string, encryptionKeyProvider: () => NSData, ftsVersion: PSPDFLibraryFTSVersion, tokenizer: string): PSPDFLibrary;

	static encryptedLibraryWithPathEncryptionKeyProviderTokenizerError(path: string, encryptionKeyProvider: () => NSData, tokenizer: string): PSPDFLibrary;

	static libraryWithPathError(path: string): PSPDFLibrary;

	static libraryWithPathFtsVersionTokenizerError(path: string, ftsVersion: PSPDFLibraryFTSVersion, tokenizer: string): PSPDFLibrary;

	static libraryWithPathTokenizerError(path: string, tokenizer: string): PSPDFLibrary;

	static new(): PSPDFLibrary; // inherited from NSObject

	dataSource: PSPDFLibraryDataSource;

	readonly encrypted: boolean;

	readonly indexedUIDCount: number;

	readonly indexedUIDs: NSOrderedSet<string>;

	readonly indexing: boolean;

	readonly path: string;

	readonly queuedUIDs: NSOrderedSet<string>;

	saveReversedPageText: boolean;

	spotlightIndexingType: PSPDFLibrarySpotlightIndexingType;

	suspended: boolean;

	readonly tokenizer: string;

	cancelAllPreviewTextOperations(): void;

	clearAllIndexes(): void;

	documentUIDsMatchingStringOptionsCompletionHandler(searchString: string, options: NSDictionary<string, any>, completionHandler: (p1: string, p2: NSDictionary<string, NSIndexSet>) => void): void;

	documentUIDsMatchingStringOptionsCompletionHandlerPreviewTextHandler(searchString: string, options: NSDictionary<string, any>, completionHandler: (p1: string, p2: NSDictionary<string, NSIndexSet>) => void, previewTextHandler: (p1: string, p2: NSDictionary<string, NSSet<PSPDFSearchResult>>) => void): void;

	enqueueDocuments(documents: NSArray<PSPDFDocument>): void;

	fetchSpotlightIndexedDocumentForUserActivityCompletionHandler(userActivity: NSUserActivity, completionHandler: (p1: PSPDFDocument) => void): void;

	indexStatusForUIDWithProgress(UID: string, outProgress: interop.Pointer | interop.Reference<number>): PSPDFLibraryIndexStatus;

	indexedDocumentWithUID(UID: string): PSPDFDocument;

	metadataForUID(UID: string): NSDictionary<any, any>;

	removeIndexForUID(UID: string): void;

	updateIndex(): void;
}

interface PSPDFLibraryDataSource extends NSObjectProtocol {

	libraryDocumentWithUID(library: PSPDFLibrary, UID: string): PSPDFDocument;

	libraryWillBeginIndexing?(library: PSPDFLibrary): void;

	uidsOfDocumentsToBeIndexedByLibrary(library: PSPDFLibrary): NSArray<string>;

	uidsOfDocumentsToBeRemovedFromLibrary(library: PSPDFLibrary): NSArray<string>;
}
declare var PSPDFLibraryDataSource: {

	prototype: PSPDFLibraryDataSource;
};

declare var PSPDFLibraryDidClearIndexesNotification: string;

declare var PSPDFLibraryDidFinishIndexingDocumentNotification: string;

declare var PSPDFLibraryDidRemoveDocumentNotification: string;

declare const enum PSPDFLibraryFTSVersion {

	VersionHighestAvailable = 0,

	Version4 = 1,

	Version5 = 2
}

declare class PSPDFLibraryFileSystemDataSource extends NSObject implements PSPDFLibraryDataSource {

	static alloc(): PSPDFLibraryFileSystemDataSource; // inherited from NSObject

	static new(): PSPDFLibraryFileSystemDataSource; // inherited from NSObject

	directoryEnumerationOptions: NSDirectoryEnumerationOptions;

	documentHandler: (p1: PSPDFDocument, p2: interop.Pointer | interop.Reference<boolean>) => boolean;

	documentProvider: PSPDFLibraryFileSystemDataSourceDocumentProvider;

	readonly documentsDirectoryURL: NSURL;

	explicitModeEnabled: boolean;

	readonly library: PSPDFLibrary;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { library: PSPDFLibrary; documentsDirectoryURL: NSURL; documentHandler: (p1: PSPDFDocument, p2: interop.Pointer | interop.Reference<boolean>) => boolean; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	didAddOrModifyDocumentAtURL(URL: NSURL): void;

	didRemoveDocumentAtURL(URL: NSURL): void;

	indexItemDescriptorForDocumentWithUID(UID: string): PSPDFFileIndexItemDescriptor;

	initWithLibraryDocumentsDirectoryURLDocumentHandler(library: PSPDFLibrary, URL: NSURL, documentHandler: (p1: PSPDFDocument, p2: interop.Pointer | interop.Reference<boolean>) => boolean): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	libraryDocumentWithUID(library: PSPDFLibrary, UID: string): PSPDFDocument;

	libraryWillBeginIndexing(library: PSPDFLibrary): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	uidsOfDocumentsToBeIndexedByLibrary(library: PSPDFLibrary): NSArray<string>;

	uidsOfDocumentsToBeRemovedFromLibrary(library: PSPDFLibrary): NSArray<string>;
}

interface PSPDFLibraryFileSystemDataSourceDocumentProvider extends NSObjectProtocol {

	dataSourceDocumentWithUIDAtURL(dataSource: PSPDFLibraryFileSystemDataSource, UID: string, fileURL: NSURL): PSPDFDocument;
}
declare var PSPDFLibraryFileSystemDataSourceDocumentProvider: {

	prototype: PSPDFLibraryFileSystemDataSourceDocumentProvider;
};

declare const enum PSPDFLibraryIndexStatus {

	Unknown = 0,

	Queued = 1,

	Partial = 2,

	PartialAndIndexing = 3,

	Finished = 4
}

declare var PSPDFLibraryInvalidOperationException: string;

declare var PSPDFLibraryMatchExactPhrasesOnlyKey: string;

declare var PSPDFLibraryMatchExactWordsOnlyKey: string;

declare var PSPDFLibraryMaximumPreviewResultsPerDocumentKey: string;

declare var PSPDFLibraryMaximumPreviewResultsTotalKey: string;

declare var PSPDFLibraryMaximumSearchResultsPerDocumentKey: string;

declare var PSPDFLibraryMaximumSearchResultsTotalKey: string;

declare var PSPDFLibraryNotificationSuccessKey: string;

declare var PSPDFLibraryNotificationUIDKey: string;

declare var PSPDFLibraryPreviewRangeKey: string;

declare const enum PSPDFLibrarySpotlightIndexingType {

	Disabled = 0,

	Enabled = 1,

	EnabledWithFullText = 2
}

declare var PSPDFLibraryVersion: number;

declare var PSPDFLibraryWillStartIndexingDocumentNotification: string;

declare class PSPDFLineAnnotation extends PSPDFAbstractLineAnnotation {

	static alloc(): PSPDFLineAnnotation; // inherited from NSObject

	static modelWithDictionaryError(dictionaryValue: NSDictionary<string, any>): PSPDFLineAnnotation; // inherited from PSPDFModel

	static new(): PSPDFLineAnnotation; // inherited from NSObject

	point1: CGPoint;

	point2: CGPoint;

	constructor(o: { point1: CGPoint; point2: CGPoint; });

	initWithPoint1Point2(point1: CGPoint, point2: CGPoint): this;
}

declare const enum PSPDFLineEndType {

	None = 0,

	Square = 1,

	Circle = 2,

	Diamond = 3,

	OpenArrow = 4,

	ClosedArrow = 5,

	Butt = 6,

	ReverseOpenArrow = 7,

	ReverseClosedArrow = 8,

	Slash = 9
}

declare const enum PSPDFLinkAction {

	None = 0,

	AlertView = 1,

	OpenSafari = 2,

	InlineBrowser = 3,

	InlineBrowserLegacy = 4
}

declare class PSPDFLinkAnnotation extends PSPDFAnnotation {

	static alloc(): PSPDFLinkAnnotation; // inherited from NSObject

	static modelWithDictionaryError(dictionaryValue: NSDictionary<string, any>): PSPDFLinkAnnotation; // inherited from PSPDFModel

	static new(): PSPDFLinkAnnotation; // inherited from NSObject

	readonly URL: NSURL;

	readonly URLAction: PSPDFURLAction;

	action: PSPDFAction;

	autoplayEnabled: boolean;

	controlsEnabled: boolean;

	fullscreenEnabled: boolean;

	linkType: PSPDFLinkAnnotationType;

	loopEnabled: boolean;

	readonly multimediaExtension: boolean;

	readonly showAsLinkView: boolean;

	readonly targetString: string;

	constructor(o: { action: PSPDFAction; });

	constructor(o: { linkAnnotationType: PSPDFLinkAnnotationType; });

	constructor(o: { URL: NSURL; });

	initWithAction(action: PSPDFAction): this;

	initWithLinkAnnotationType(linkAnnotationType: PSPDFLinkAnnotationType): this;

	initWithURL(URL: NSURL): this;
}

declare class PSPDFLinkAnnotationBaseView extends UIView implements PSPDFAnnotationViewProtocol {

	static alloc(): PSPDFLinkAnnotationBaseView; // inherited from NSObject

	static appearance(): PSPDFLinkAnnotationBaseView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PSPDFLinkAnnotationBaseView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PSPDFLinkAnnotationBaseView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): PSPDFLinkAnnotationBaseView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PSPDFLinkAnnotationBaseView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): PSPDFLinkAnnotationBaseView; // inherited from UIAppearance

	static new(): PSPDFLinkAnnotationBaseView; // inherited from NSObject

	readonly contentView: UIView;

	readonly contentViewVisible: boolean;

	readonly linkAnnotation: PSPDFLinkAnnotation;

	PDFScale: number; // inherited from PSPDFAnnotationViewProtocol

	annotation: PSPDFAnnotation; // inherited from PSPDFAnnotationViewProtocol

	configuration: PSPDFConfiguration; // inherited from PSPDFAnnotationViewProtocol

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	pageView: PSPDFPageView; // inherited from PSPDFAnnotationViewProtocol

	selected: boolean; // inherited from PSPDFAnnotationViewProtocol

	readonly shouldSyncRemovalFromSuperview: boolean; // inherited from PSPDFAnnotationViewProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	zIndex: number; // inherited from PSPDFAnnotationViewProtocol

	readonly  // inherited from NSObjectProtocol

	zoomScale: number; // inherited from PSPDFAnnotationViewProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	didChangePageBounds(bounds: CGRect): void;

	didHidePageView(pageView: PSPDFPageView): void;

	didShowPageView(pageView: PSPDFPageView): void;

	didTapAtPoint(point: CGPoint): void;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	populateContentView(): void;

	prepareForReuse(): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	setContentViewVisibleAnimated(visible: boolean, animated: boolean): void;

	willRemoveFromSuperview(): void;
}

declare const enum PSPDFLinkAnnotationType {

	Page = 0,

	WebURL = 1,

	Document = 2,

	Video = 3,

	YouTube = 4,

	Audio = 5,

	Image = 6,

	Browser = 7,

	Custom = 8
}

declare class PSPDFLinkAnnotationView extends PSPDFLinkAnnotationBaseView {

	static alloc(): PSPDFLinkAnnotationView; // inherited from NSObject

	static appearance(): PSPDFLinkAnnotationView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PSPDFLinkAnnotationView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PSPDFLinkAnnotationView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): PSPDFLinkAnnotationView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PSPDFLinkAnnotationView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): PSPDFLinkAnnotationView; // inherited from UIAppearance

	static new(): PSPDFLinkAnnotationView; // inherited from NSObject

	borderColor: UIColor;

	cornerRadius: number;

	strokeWidth: number;
}

declare function PSPDFLocalize(stringToken: string): string;

declare const enum PSPDFLogLevelMask {

	Nothing = 0,

	Error = 1,

	Warning = 2,

	Info = 4,

	Debug = 8,

	Verbose = 16,

	All = 4294967295
}

declare class PSPDFMailCoordinator extends PSPDFDocumentSharingCoordinator implements MFMailComposeViewControllerDelegate {

	static alloc(): PSPDFMailCoordinator; // inherited from NSObject

	static new(): PSPDFMailCoordinator; // inherited from NSObject

	readonly mailComposeViewController: MFMailComposeViewController;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	addAttachmentDataMimeTypeFileName(attachment: NSData, mimeType: string, filename: string): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	mailComposeControllerDidFinishWithResultError(controller: MFMailComposeViewController, result: MFMailComposeResult, error: NSError): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare const enum PSPDFMediaPlayerControlStyle {

	None = 0,

	Default = 1
}

declare class PSPDFMediaPlayerController extends NSObject {

	static alloc(): PSPDFMediaPlayerController; // inherited from NSObject

	static new(): PSPDFMediaPlayerController; // inherited from NSObject

	static pauseAllInstances(): void;

	readonly contentError: NSError;

	readonly contentState: PSPDFMediaPlayerControllerContentState;

	readonly contentURL: NSURL;

	controlStyle: PSPDFMediaPlayerControlStyle;

	coverImagePreviewCaptureTime: CMTime;

	coverImageURL: NSURL;

	coverMode: PSPDFMediaPlayerCoverMode;

	delegate: PSPDFMediaPlayerControllerDelegate;

	readonly didFinishPlaying: boolean;

	readonly didStartPlaying: boolean;

	readonly externalPlaybackActive: boolean;

	readonly internalPlayer: AVPlayer;

	loopEnabled: boolean;

	playableRange: CMTimeRange;

	readonly playing: boolean;

	shouldHideToolbar: boolean;

	readonly tapGestureRecognizer: UITapGestureRecognizer;

	usesExternalPlaybackWhileExternalScreenIsActive: boolean;

	constructor(o: { contentURL: NSURL; });

	initWithContentURL(contentURL: NSURL): this;

	pause(): void;

	play(): void;

	seekToTime(time: CMTime): void;

	setShouldHideToolbarAnimated(shouldHideToolbar: boolean, animated: boolean): void;
}

declare const enum PSPDFMediaPlayerControllerContentState {

	Idle = 0,

	Loading = 1,

	Ready = 2,

	Error = 3
}

interface PSPDFMediaPlayerControllerDelegate extends NSObjectProtocol {

	mediaPlayerControllerContentStateDidChange?(controller: PSPDFMediaPlayerController, contentState: PSPDFMediaPlayerControllerContentState): void;

	mediaPlayerControllerDidFinishPlaying?(controller: PSPDFMediaPlayerController): void;

	mediaPlayerControllerDidHideToolbar?(controller: PSPDFMediaPlayerController, hidden: boolean): void;

	mediaPlayerControllerDidPause?(controller: PSPDFMediaPlayerController): void;

	mediaPlayerControllerDidStartPlaying?(controller: PSPDFMediaPlayerController): void;

	mediaPlayerControllerExternalPlaybackActiveDidChange?(controller: PSPDFMediaPlayerController, externalPlaybackActive: boolean): void;

	mediaPlayerControllerShouldPauseOtherInstances?(controller: PSPDFMediaPlayerController): boolean;
}
declare var PSPDFMediaPlayerControllerDelegate: {

	prototype: PSPDFMediaPlayerControllerDelegate;
};

declare const enum PSPDFMediaPlayerCoverMode {

	Preview = 0,

	Custom = 1,

	Hidden = 2,

	Clear = 3
}

declare class PSPDFMediaPlayerCoverView extends UIView {

	static alloc(): PSPDFMediaPlayerCoverView; // inherited from NSObject

	static appearance(): PSPDFMediaPlayerCoverView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PSPDFMediaPlayerCoverView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PSPDFMediaPlayerCoverView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): PSPDFMediaPlayerCoverView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PSPDFMediaPlayerCoverView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): PSPDFMediaPlayerCoverView; // inherited from UIAppearance

	static new(): PSPDFMediaPlayerCoverView; // inherited from NSObject

	playButtonColor: UIColor;

	playButtonImage: UIImage;
}

declare const enum PSPDFMediaScreenWindowType {

	Floating = 0,

	Fullscreen = 1,

	Hidden = 2,

	UseAnnotationRectangle = 3
}

declare class PSPDFMemoryCache extends NSObject {

	static alloc(): PSPDFMemoryCache; // inherited from NSObject

	static new(): PSPDFMemoryCache; // inherited from NSObject

	readonly count: number;

	maxNumberOfPixels: number;

	maxNumberOfPixelsUnderStress: number;

	readonly numberOfPixels: number;

	constructor(o: { settings: PSPDFKit; });

	initWithSettings(settings: PSPDFKit): this;
}

declare class PSPDFMenuItem extends UIMenuItem {

	static alloc(): PSPDFMenuItem; // inherited from NSObject

	static installMenuHandlerForObject(object: any): void;

	static new(): PSPDFMenuItem; // inherited from NSObject

	actionBlock: () => void;

	enabled: boolean;

	identifier: string;

	ps_image: UIImage;

	shouldInvokeAutomatically: boolean;

	constructor(o: { title: string; block: () => void; });

	constructor(o: { title: string; block: () => void; identifier: string; });

	constructor(o: { title: string; image: UIImage; block: () => void; identifier: string; });

	constructor(o: { title: string; image: UIImage; block: () => void; identifier: string; allowImageColors: boolean; });

	initWithTitleBlock(title: string, block: () => void): this;

	initWithTitleBlockIdentifier(title: string, block: () => void, identifier: string): this;

	initWithTitleImageBlockIdentifier(title: string, image: UIImage, block: () => void, identifier: string): this;

	initWithTitleImageBlockIdentifierAllowImageColors(title: string, image: UIImage, block: () => void, identifier: string, allowImageColors: boolean): this;

	performBlock(): void;
}

declare class PSPDFMessageCoordinator extends PSPDFDocumentSharingCoordinator implements MFMessageComposeViewControllerDelegate {

	static alloc(): PSPDFMessageCoordinator; // inherited from NSObject

	static new(): PSPDFMessageCoordinator; // inherited from NSObject

	readonly messageComposeViewController: MFMessageComposeViewController;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	messageComposeViewControllerDidFinishWithResult(controller: MFMessageComposeViewController, result: MessageComposeResult): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare var PSPDFMetadataAuthorKey: string;

declare var PSPDFMetadataCreationDateKey: string;

declare var PSPDFMetadataCreatorKey: string;

declare var PSPDFMetadataKeywordsKey: string;

declare var PSPDFMetadataModDateKey: string;

declare var PSPDFMetadataProducerKey: string;

declare var PSPDFMetadataSubjectKey: string;

declare var PSPDFMetadataTitleKey: string;

declare var PSPDFMetadataTrappedKey: string;

declare class PSPDFModel extends NSObject implements NSCoding, NSCoding, NSCopying {

	static alloc(): PSPDFModel; // inherited from NSObject

	static allowedSecureCodingClassesByPropertyKey(): NSDictionary<string, NSSet<typeof NSObject>>;

	static cachedEncodingBehaviorsByPropertyKey(): NSDictionary<string, number>;

	static cachedPropertyKeySet(): any;

	static cachedPropertyKeys(): NSArray<string>;

	static encodingBehaviorsByPropertyKey(): NSDictionary<string, number>;

	static modelVersion(): number;

	static modelWithDictionaryError(dictionaryValue: NSDictionary<string, any>): PSPDFModel;

	static new(): PSPDFModel; // inherited from NSObject

	static propertyKeys(): NSOrderedSet<string>;

	static propertyKeysWithReferentialEquality(): NSOrderedSet<string>;

	readonly dictionaryValue: NSDictionary<string, any>;

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { dictionary: NSDictionary<string, any>; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	decodeAdditionalValuesModel(coder: NSCoder, model: number): NSDictionary<string, any>;

	decodeValueForKeyWithCoderModelVersion(key: string, coder: NSCoder, modelVersion: number): any;

	encodeWithCoder(aCoder: NSCoder): void;

	initWithCoder(aDecoder: NSCoder): this;

	initWithDictionaryError(dictionaryValue: NSDictionary<string, any>): this;

	mergeValueForKeyFromModel(key: string, model: PSPDFModel): void;

	mergeValuesForKeysFromModel(model: PSPDFModel): void;
}

declare const enum PSPDFModelEncodingBehavior {

	Excluded = 0,

	Unconditional = 1,

	Conditional = 2,

	PointerValue = 3
}

declare class PSPDFMultiDocumentListController extends PSPDFBaseTableViewController {

	static alloc(): PSPDFMultiDocumentListController; // inherited from NSObject

	static new(): PSPDFMultiDocumentListController; // inherited from NSObject

	delegate: PSPDFMultiDocumentListControllerDelegate;

	tabbedViewController: PSPDFTabbedViewController;
}

interface PSPDFMultiDocumentListControllerDelegate extends NSObjectProtocol {

	multiDocumentListControllerDidCancel?(multiDocumentListController: PSPDFMultiDocumentListController): void;

	multiDocumentListControllerDidSelectDocumentAtIndex?(multiDocumentListController: PSPDFMultiDocumentListController, idx: number): void;
}
declare var PSPDFMultiDocumentListControllerDelegate: {

	prototype: PSPDFMultiDocumentListControllerDelegate;
};

declare class PSPDFMultiDocumentViewController extends PSPDFBaseViewController {

	static alloc(): PSPDFMultiDocumentViewController; // inherited from NSObject

	static new(): PSPDFMultiDocumentViewController; // inherited from NSObject

	delegate: PSPDFMultiDocumentViewControllerDelegate;

	documents: NSArray<PSPDFDocument>;

	enableAutomaticStatePersistence: boolean;

	readonly pdfController: PSPDFViewController;

	readonly restoreState: boolean;

	showTitle: boolean;

	statePersistenceKey: string;

	thumbnailViewIncludesAllDocuments: boolean;

	visibleDocument: PSPDFDocument;

	constructor(o: { PDFViewController: PSPDFViewController; });

	commonInitWithPDFController(pdfController: PSPDFViewController): void;

	initWithPDFViewController(pdfController: PSPDFViewController): this;

	persistState(): void;

	persistViewStateForCurrentVisibleDocument(): void;

	restoreStateAndMergeWithDocuments(documents: NSArray<PSPDFDocument>): boolean;

	restoreViewStateForCurrentVisibleDocument(): void;

	titleDidChangeForDocumentAtIndex(idx: number): void;

	titleForDocumentAtIndex(idx: number): string;
}

interface PSPDFMultiDocumentViewControllerDelegate extends NSObjectProtocol {

	multiPDFControllerDidChangeDocuments?(multiPDFController: PSPDFMultiDocumentViewController, oldDocuments: NSArray<PSPDFDocument>): void;

	multiPDFControllerDidChangeVisibleDocument?(multiPDFController: PSPDFMultiDocumentViewController, oldDocument: PSPDFDocument): void;

	multiPDFControllerWillChangeDocuments?(multiPDFController: PSPDFMultiDocumentViewController, newDocuments: NSArray<PSPDFDocument>): void;

	multiPDFControllerWillChangeVisibleDocument?(multiPDFController: PSPDFMultiDocumentViewController, newDocument: PSPDFDocument): void;
}
declare var PSPDFMultiDocumentViewControllerDelegate: {

	prototype: PSPDFMultiDocumentViewControllerDelegate;
};

declare class PSPDFMultimediaAnnotationView extends PSPDFLinkAnnotationBaseView {

	static alloc(): PSPDFMultimediaAnnotationView; // inherited from NSObject

	static appearance(): PSPDFMultimediaAnnotationView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PSPDFMultimediaAnnotationView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PSPDFMultimediaAnnotationView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): PSPDFMultimediaAnnotationView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PSPDFMultimediaAnnotationView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): PSPDFMultimediaAnnotationView; // inherited from UIAppearance

	static new(): PSPDFMultimediaAnnotationView; // inherited from NSObject

	readonly multimediaViewController: UIViewController;
}

interface PSPDFMultimediaViewController extends NSObjectProtocol {

	fullscreen: boolean;

	overrideDelegate: PSPDFOverridable;

	transitioning: boolean;

	zoomScale: number;

	configure?(configuration: PSPDFConfiguration): void;

	performAction(action: PSPDFAction): void;

	setFullscreenAnimated(fullscreen: boolean, animated: boolean): void;
}
declare var PSPDFMultimediaViewController: {

	prototype: PSPDFMultimediaViewController;
};

declare class PSPDFMutableRenderRequest extends PSPDFRenderRequest {

	static alloc(): PSPDFMutableRenderRequest; // inherited from NSObject

	static new(): PSPDFMutableRenderRequest; // inherited from NSObject

	annotations: NSArray<PSPDFAnnotation>;

	cachePolicy: PSPDFRenderRequestCachePolicy;

	document: PSPDFDocument;

	imageSize: CGSize;

	options: NSDictionary<string, any>;

	pageIndex: number;

	pdfRect: CGRect;

	userInfo: NSDictionary<any, any>;
}

declare class PSPDFNamedAction extends PSPDFAction {

	static alloc(): PSPDFNamedAction; // inherited from NSObject

	static modelWithDictionaryError(dictionaryValue: NSDictionary<string, any>): PSPDFNamedAction; // inherited from PSPDFModel

	static new(): PSPDFNamedAction; // inherited from NSObject

	readonly namedAction: string;

	readonly namedActionType: PSPDFNamedActionType;

	constructor(o: { actionNamedString: string; });

	initWithActionNamedString(actionNameString: string): this;

	pageIndexWithCurrentPageFromDocument(currentPage: number, document: PSPDFDocument): number;
}

declare const enum PSPDFNamedActionType {

	None = 0,

	NextPage = 1,

	PreviousPage = 2,

	FirstPage = 3,

	LastPage = 4,

	GoBack = 5,

	GoForward = 6,

	GoToPage = 7,

	Find = 8,

	Print = 9,

	Outline = 10,

	Search = 11,

	Brightness = 12,

	ZoomIn = 13,

	ZoomOut = 14,

	SaveAs = 15,

	Info = 16,

	Unknown = 4294967295
}

declare var PSPDFNamedActionTypeTransformerName: string;

declare class PSPDFNavigationController extends UINavigationController implements UINavigationControllerDelegate {

	static alloc(): PSPDFNavigationController; // inherited from NSObject

	static new(): PSPDFNavigationController; // inherited from NSObject

	persistentCloseButton: UIBarButtonItem;

	persistentCloseButtonMode: PSPDFPersistentCloseButtonMode;

	rotationForwardingEnabled: boolean;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	navigationControllerAnimationControllerForOperationFromViewControllerToViewController(navigationController: UINavigationController, operation: UINavigationControllerOperation, fromVC: UIViewController, toVC: UIViewController): UIViewControllerAnimatedTransitioning;

	navigationControllerDidShowViewControllerAnimated(navigationController: UINavigationController, viewController: UIViewController, animated: boolean): void;

	navigationControllerInteractionControllerForAnimationController(navigationController: UINavigationController, animationController: UIViewControllerAnimatedTransitioning): UIViewControllerInteractiveTransitioning;

	navigationControllerPreferredInterfaceOrientationForPresentation(navigationController: UINavigationController): UIInterfaceOrientation;

	navigationControllerSupportedInterfaceOrientations(navigationController: UINavigationController): UIInterfaceOrientationMask;

	navigationControllerWillShowViewControllerAnimated(navigationController: UINavigationController, viewController: UIViewController, animated: boolean): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class PSPDFNavigationItem extends UINavigationItem {

	static alloc(): PSPDFNavigationItem; // inherited from NSObject

	static new(): PSPDFNavigationItem; // inherited from NSObject

	closeBarButtonItem: UIBarButtonItem;

	leftBarButtonItemsForViewMode(viewMode: PSPDFViewMode): NSArray<UIBarButtonItem>;

	rightBarButtonItemsForViewMode(viewMode: PSPDFViewMode): NSArray<UIBarButtonItem>;

	setLeftBarButtonItemsForViewModeAnimated(barButtonItems: NSArray<UIBarButtonItem>, viewMode: PSPDFViewMode, animated: boolean): void;

	setRightBarButtonItemsForViewModeAnimated(barButtonItems: NSArray<UIBarButtonItem>, viewMode: PSPDFViewMode, animated: boolean): void;
}

declare var PSPDFNetworkActivityDidFinishNotification: string;

declare var PSPDFNetworkActivityDidStartNotification: string;

interface PSPDFNetworkActivityIndicatorManager extends NSObjectProtocol {

	enabled: boolean;

	isNetworkActivityIndicatorVisible: boolean;

	decrementActivityCount(): void;

	incrementActivityCount(): void;
}
declare var PSPDFNetworkActivityIndicatorManager: {

	prototype: PSPDFNetworkActivityIndicatorManager;
};

declare class PSPDFNeverAnimatingTableViewCell extends PSPDFTableViewCell {

	static alloc(): PSPDFNeverAnimatingTableViewCell; // inherited from NSObject

	static appearance(): PSPDFNeverAnimatingTableViewCell; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PSPDFNeverAnimatingTableViewCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PSPDFNeverAnimatingTableViewCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): PSPDFNeverAnimatingTableViewCell; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PSPDFNeverAnimatingTableViewCell; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): PSPDFNeverAnimatingTableViewCell; // inherited from UIAppearance

	static new(): PSPDFNeverAnimatingTableViewCell; // inherited from NSObject
}

declare class PSPDFNewPageConfiguration extends NSObject {

	static alloc(): PSPDFNewPageConfiguration; // inherited from NSObject

	static new(): PSPDFNewPageConfiguration; // inherited from NSObject

	static newPageConfigurationWithDocumentSourcePageIndexBuilderBlock(sourceDocument: PSPDFDocument, sourcePageIndex: number, builderBlock: (p1: PSPDFNewPageConfigurationBuilder) => void): PSPDFNewPageConfiguration;

	static newPageConfigurationWithEmptyPageBuilder(builderBlock: (p1: PSPDFNewPageConfigurationBuilder) => void): PSPDFNewPageConfiguration;

	static newPageConfigurationWithTiledPatternBuilderBlock(tiledPattern: string, builderBlock: (p1: PSPDFNewPageConfigurationBuilder) => void): PSPDFNewPageConfiguration;

	readonly backgroundColor: UIColor;

	readonly item: PSPDFProcessorItem;

	readonly newPageType: PSPDFNewPageType;

	readonly pageMargins: UIEdgeInsets;

	readonly pageRotation: number;

	readonly pageSize: CGSize;

	readonly sourceDocument: PSPDFDocument;

	readonly sourcePageIndex: number;

	readonly tiledPattern: string;
}

declare class PSPDFNewPageConfigurationBuilder extends PSPDFModel {

	static alloc(): PSPDFNewPageConfigurationBuilder; // inherited from NSObject

	static modelWithDictionaryError(dictionaryValue: NSDictionary<string, any>): PSPDFNewPageConfigurationBuilder; // inherited from PSPDFModel

	static new(): PSPDFNewPageConfigurationBuilder; // inherited from NSObject

	backgroundColor: UIColor;

	item: PSPDFProcessorItem;

	pageMargins: UIEdgeInsets;

	pageRotation: number;

	pageSize: CGSize;
}

declare var PSPDFNewPagePatternDot5mm: string;

declare var PSPDFNewPagePatternGrid5mm: string;

declare var PSPDFNewPagePatternLines5mm: string;

declare var PSPDFNewPagePatternLines7mm: string;

declare const enum PSPDFNewPageType {

	EmptyPage = 0,

	TiledPatternPage = 1,

	FromDocument = 2
}

declare class PSPDFNewPageViewController extends PSPDFStaticTableViewController implements PSPDFDocumentEditorConfigurationConfigurable {

	static alloc(): PSPDFNewPageViewController; // inherited from NSObject

	static new(): PSPDFNewPageViewController; // inherited from NSObject

	delegate: PSPDFNewPageViewControllerDelegate;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly documentEditorConfiguration: PSPDFDocumentEditorConfiguration; // inherited from PSPDFDocumentEditorConfigurationConfigurable

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { documentEditorConfiguration: PSPDFDocumentEditorConfiguration; }); // inherited from PSPDFDocumentEditorConfigurationConfigurable

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithDocumentEditorConfiguration(configuration: PSPDFDocumentEditorConfiguration): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

interface PSPDFNewPageViewControllerDelegate extends NSObjectProtocol, PSPDFOverridable {

	newPageControllerDidFinishSelectingConfiguration(controller: PSPDFNewPageViewController, configuration: PSPDFNewPageConfiguration): void;
}
declare var PSPDFNewPageViewControllerDelegate: {

	prototype: PSPDFNewPageViewControllerDelegate;
};

declare class PSPDFNonAnimatingTableViewCell extends PSPDFTableViewCell {

	static alloc(): PSPDFNonAnimatingTableViewCell; // inherited from NSObject

	static appearance(): PSPDFNonAnimatingTableViewCell; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PSPDFNonAnimatingTableViewCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PSPDFNonAnimatingTableViewCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): PSPDFNonAnimatingTableViewCell; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PSPDFNonAnimatingTableViewCell; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): PSPDFNonAnimatingTableViewCell; // inherited from UIAppearance

	static new(): PSPDFNonAnimatingTableViewCell; // inherited from NSObject
}

declare class PSPDFNoteAnnotation extends PSPDFAnnotation {

	static alloc(): PSPDFNoteAnnotation; // inherited from NSObject

	static modelWithDictionaryError(dictionaryValue: NSDictionary<string, any>): PSPDFNoteAnnotation; // inherited from PSPDFModel

	static new(): PSPDFNoteAnnotation; // inherited from NSObject

	readonly boundingBoxIfRenderedAsText: CGRect;

	iconName: string;

	readonly renderAnnotationIcon: UIImage;

	constructor(o: { contents: string; });

	drawImageInContextBoundingBoxOptions(context: any, boundingBox: CGRect, options: NSDictionary<string, any>): void;

	initWithContents(contents: string): this;
}

declare class PSPDFNoteAnnotationView extends PSPDFAnnotationView {

	static alloc(): PSPDFNoteAnnotationView; // inherited from NSObject

	static appearance(): PSPDFNoteAnnotationView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PSPDFNoteAnnotationView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PSPDFNoteAnnotationView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): PSPDFNoteAnnotationView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PSPDFNoteAnnotationView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): PSPDFNoteAnnotationView; // inherited from UIAppearance

	static new(): PSPDFNoteAnnotationView; // inherited from NSObject

	annotationImageView: UIImageView;

	readonly renderNoteImage: UIImage;

	constructor(o: { annotation: PSPDFAnnotation; });

	initWithAnnotation(noteAnnotation: PSPDFAnnotation): this;

	updateImageAnimated(animated: boolean): void;
}

declare class PSPDFNoteAnnotationViewController extends PSPDFBaseViewController implements PSPDFStyleable {

	static alloc(): PSPDFNoteAnnotationViewController; // inherited from NSObject

	static new(): PSPDFNoteAnnotationViewController; // inherited from NSObject

	allowEditing: boolean;

	annotation: PSPDFAnnotation;

	readonly backgroundView: UIView;

	borderColor: UIColor;

	delegate: PSPDFNoteAnnotationViewControllerDelegate;

	readonly deleteAnnotationActionTitle: string;

	readonly optionsView: UIView;

	shouldBeginEditModeWhenPresented: boolean;

	showColorAndIconOptions: boolean;

	showCopyButton: boolean;

	readonly tapGesture: UITapGestureRecognizer;

	readonly textView: UITextView;

	barStyle: UIBarStyle; // inherited from PSPDFStyleable

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	forcesStatusBarHidden: boolean; // inherited from PSPDFStyleable

	readonly hash: number; // inherited from NSObjectProtocol

	isBarTranslucent: boolean; // inherited from PSPDFStyleable

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { annotation: PSPDFAnnotation; });

	beginEditing(): boolean;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	deleteAnnotation(barButtonItem: UIBarButtonItem): void;

	deleteOrClearAnnotationWithoutConfirmation(): void;

	initWithAnnotation(annotation: PSPDFAnnotation): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	setupToolbar(): void;

	updateTextView(): void;

	updateToolbar(): void;
}

interface PSPDFNoteAnnotationViewControllerDelegate extends PSPDFOverridable {

	noteAnnotationControllerDidChangeAnnotation?(noteController: PSPDFNoteAnnotationViewController, annotation: PSPDFAnnotation): void;

	noteAnnotationControllerDidClearContentsForAnnotation?(noteController: PSPDFNoteAnnotationViewController, annotation: PSPDFAnnotation): void;

	noteAnnotationControllerDidDeleteAnnotation?(noteController: PSPDFNoteAnnotationViewController, annotation: PSPDFAnnotation): void;

	noteAnnotationControllerWillDismissWithAnnotation?(noteController: PSPDFNoteAnnotationViewController, annotation: PSPDFAnnotation): void;
}
declare var PSPDFNoteAnnotationViewControllerDelegate: {

	prototype: PSPDFNoteAnnotationViewControllerDelegate;
};

declare var PSPDFObjectMinDiameterKey: string;

declare var PSPDFObjectsAnnotationIncludedGroupedKey: string;

declare var PSPDFObjectsAnnotationPageBoundsKey: string;

declare var PSPDFObjectsAnnotationTypesKey: string;

declare var PSPDFObjectsAnnotationsKey: string;

declare var PSPDFObjectsFindFirstOnlyKey: string;

declare var PSPDFObjectsGlyphsKey: string;

declare var PSPDFObjectsIgnoreLargeTextBlocksKey: string;

declare var PSPDFObjectsImagesKey: string;

declare var PSPDFObjectsPageZoomLevelKey: string;

declare var PSPDFObjectsSmartSortKey: string;

declare var PSPDFObjectsTestIntersectionKey: string;

declare var PSPDFObjectsTextBlocksKey: string;

declare var PSPDFObjectsTextFlowKey: string;

declare var PSPDFObjectsTextKey: string;

declare var PSPDFObjectsWordsKey: string;

declare class PSPDFOpenInCoordinator extends PSPDFDocumentSharingCoordinator implements UIDocumentInteractionControllerDelegate {

	static alloc(): PSPDFOpenInCoordinator; // inherited from NSObject

	static new(): PSPDFOpenInCoordinator; // inherited from NSObject

	readonly documentInteractionController: UIDocumentInteractionController;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	documentInteractionControllerCanPerformAction(controller: UIDocumentInteractionController, action: string): boolean;

	documentInteractionControllerDidDismissOpenInMenu(controller: UIDocumentInteractionController): void;

	documentInteractionControllerDidDismissOptionsMenu(controller: UIDocumentInteractionController): void;

	documentInteractionControllerDidEndPreview(controller: UIDocumentInteractionController): void;

	documentInteractionControllerDidEndSendingToApplication(controller: UIDocumentInteractionController, application: string): void;

	documentInteractionControllerPerformAction(controller: UIDocumentInteractionController, action: string): boolean;

	documentInteractionControllerRectForPreview(controller: UIDocumentInteractionController): CGRect;

	documentInteractionControllerViewControllerForPreview(controller: UIDocumentInteractionController): UIViewController;

	documentInteractionControllerViewForPreview(controller: UIDocumentInteractionController): UIView;

	documentInteractionControllerWillBeginPreview(controller: UIDocumentInteractionController): void;

	documentInteractionControllerWillBeginSendingToApplication(controller: UIDocumentInteractionController, application: string): void;

	documentInteractionControllerWillPresentOpenInMenu(controller: UIDocumentInteractionController): void;

	documentInteractionControllerWillPresentOptionsMenu(controller: UIDocumentInteractionController): void;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class PSPDFOutlineCell extends PSPDFTableViewCell {

	static alloc(): PSPDFOutlineCell; // inherited from NSObject

	static appearance(): PSPDFOutlineCell; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PSPDFOutlineCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PSPDFOutlineCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): PSPDFOutlineCell; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PSPDFOutlineCell; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): PSPDFOutlineCell; // inherited from UIAppearance

	static fontForOutlineElement(outlineElement: PSPDFOutlineElement): UIFont;

	static heightForCellWithOutlineElementDocumentProviderConstrainedToSizeOutlineIntentLeftOffsetOutlineIntentMultiplierShowPageLabel(outlineElement: PSPDFOutlineElement, documentProvider: PSPDFDocumentProvider, constraintSize: CGSize, leftOffset: number, multiplier: number, showPageLabel: boolean): number;

	static new(): PSPDFOutlineCell; // inherited from NSObject

	static pageLabelFontForOutlineElement(outlineElement: PSPDFOutlineElement): UIFont;

	delegate: PSPDFOutlineCellDelegate;

	disclosureButton: UIButton;

	maximumNumberOfLines: number;

	nameLabel: UILabel;

	readonly outlineElement: PSPDFOutlineElement;

	outlineIndentMultiplier: number;

	outlineIntentLeftOffset: number;

	pageLabel: UILabel;

	readonly pageLabelString: string;

	showExpandCollapseButton: boolean;

	showPageLabel: boolean;

	configureWithOutlineElementDocumentProvider(outlineElement: PSPDFOutlineElement, documentProvider: PSPDFDocumentProvider): void;

	expandOrCollapse(): void;

	updateDisclosureButton(): void;
}

interface PSPDFOutlineCellDelegate extends NSObjectProtocol {

	outlineCellDidTapDisclosureButton(outlineCell: PSPDFOutlineCell): void;
}
declare var PSPDFOutlineCellDelegate: {

	prototype: PSPDFOutlineCellDelegate;
};

declare class PSPDFOutlineElement extends PSPDFModel {

	static alloc(): PSPDFOutlineElement; // inherited from NSObject

	static modelWithDictionaryError(dictionaryValue: NSDictionary<string, any>): PSPDFOutlineElement; // inherited from PSPDFModel

	static new(): PSPDFOutlineElement; // inherited from NSObject

	readonly action: PSPDFAction;

	readonly allFlattenedChildren: NSArray<PSPDFOutlineElement>;

	readonly children: NSArray<PSPDFOutlineElement>;

	readonly color: UIColor;

	expanded: boolean;

	readonly flattenedChildren: NSArray<PSPDFOutlineElement>;

	readonly fontTraits: UIFontDescriptorSymbolicTraits;

	readonly level: number;

	readonly pageIndex: number;

	readonly parent: PSPDFOutlineElement;

	readonly title: string;

	constructor(o: { title: string; color: UIColor; fontTraits: UIFontDescriptorSymbolicTraits; action: PSPDFAction; children: NSArray<PSPDFOutlineElement>; level: number; });

	initWithTitleColorFontTraitsActionChildrenLevel(title: string, color: UIColor, fontTraits: UIFontDescriptorSymbolicTraits, action: PSPDFAction, children: NSArray<PSPDFOutlineElement>, level: number): this;
}

declare class PSPDFOutlineParser extends NSObject {

	static alloc(): PSPDFOutlineParser; // inherited from NSObject

	static new(): PSPDFOutlineParser; // inherited from NSObject

	readonly documentProvider: PSPDFDocumentProvider;

	outline: PSPDFOutlineElement;

	readonly outlineAvailable: boolean;

	readonly outlineParsed: boolean;

	outlineElementForPageAtIndexExactPageOnly(pageIndex: number, exactPageOnly: boolean): PSPDFOutlineElement;
}

declare class PSPDFOutlineViewController extends PSPDFStatefulTableViewController implements PSPDFStyleable, UISearchDisplayDelegate {

	static alloc(): PSPDFOutlineViewController; // inherited from NSObject

	static new(): PSPDFOutlineViewController; // inherited from NSObject

	allowCopy: boolean;

	delegate: PSPDFOutlineViewControllerDelegate;

	document: PSPDFDocument;

	maximumNumberOfLines: number;

	outlineIndentMultiplier: number;

	outlineIntentLeftOffset: number;

	readonly searchController: UISearchController;

	searchEnabled: boolean;

	readonly shouldExpandCollapseOnRowSelection: boolean;

	showPageLabels: boolean;

	barStyle: UIBarStyle; // inherited from PSPDFStyleable

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	forcesStatusBarHidden: boolean; // inherited from PSPDFStyleable

	readonly hash: number; // inherited from NSObjectProtocol

	isBarTranslucent: boolean; // inherited from PSPDFStyleable

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { document: PSPDFDocument; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithDocument(document: PSPDFDocument): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	outlineCellDidTapDisclosureButton(cell: PSPDFOutlineCell): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	searchDisplayControllerDidBeginSearch(controller: UISearchDisplayController): void;

	searchDisplayControllerDidEndSearch(controller: UISearchDisplayController): void;

	searchDisplayControllerDidHideSearchResultsTableView(controller: UISearchDisplayController, tableView: UITableView): void;

	searchDisplayControllerDidLoadSearchResultsTableView(controller: UISearchDisplayController, tableView: UITableView): void;

	searchDisplayControllerDidShowSearchResultsTableView(controller: UISearchDisplayController, tableView: UITableView): void;

	searchDisplayControllerShouldReloadTableForSearchScope(controller: UISearchDisplayController, searchOption: number): boolean;

	searchDisplayControllerShouldReloadTableForSearchString(controller: UISearchDisplayController, searchString: string): boolean;

	searchDisplayControllerWillBeginSearch(controller: UISearchDisplayController): void;

	searchDisplayControllerWillEndSearch(controller: UISearchDisplayController): void;

	searchDisplayControllerWillHideSearchResultsTableView(controller: UISearchDisplayController, tableView: UITableView): void;

	searchDisplayControllerWillShowSearchResultsTableView(controller: UISearchDisplayController, tableView: UITableView): void;

	searchDisplayControllerWillUnloadSearchResultsTableView(controller: UISearchDisplayController, tableView: UITableView): void;

	self(): this;
}

interface PSPDFOutlineViewControllerDelegate extends PSPDFOverridable {

	outlineControllerDidTapAtElement(outlineController: PSPDFOutlineViewController, outlineElement: PSPDFOutlineElement): boolean;
}
declare var PSPDFOutlineViewControllerDelegate: {

	prototype: PSPDFOutlineViewControllerDelegate;
};

interface PSPDFOverridable extends NSObjectProtocol {

	classForClass?(originalClass: typeof NSObject): typeof NSObject;
}
declare var PSPDFOverridable: {

	prototype: PSPDFOverridable;
};

declare class PSPDFPKCS12 extends NSObject {

	static alloc(): PSPDFPKCS12; // inherited from NSObject

	static new(): PSPDFPKCS12; // inherited from NSObject

	constructor(o: { data: NSData; });

	initWithData(data: NSData): this;

	unlockWithPasswordDone(password: string, done: (p1: PSPDFX509, p2: PSPDFRSAKey, p3: NSError) => void): void;
}

declare class PSPDFPKCS12Signer extends PSPDFSigner {

	static alloc(): PSPDFPKCS12Signer; // inherited from NSObject

	static new(): PSPDFPKCS12Signer; // inherited from NSObject

	readonly p12: PSPDFPKCS12;

	pkey: PSPDFRSAKey;

	constructor(o: { displayName: string; PKCS12: PSPDFPKCS12; });

	initWithDisplayNamePKCS12(displayName: string, p12: PSPDFPKCS12): this;

	signFormElementUsingPasswordWriteToCompletion(element: PSPDFSignatureFormElement, password: string, path: string, completionBlock: (p1: boolean, p2: PSPDFDocument, p3: NSError) => void): void;
}

declare const enum PSPDFPageBinding {

	Unknown = 0,

	LeftEdge = 1,

	RightEdge = 2
}

declare const enum PSPDFPageBookmarkIndicatorMode {

	Off = 0,

	AlwaysOn = 1,

	OnWhenBookmarked = 2
}

declare class PSPDFPageCell extends UICollectionViewCell {

	static alloc(): PSPDFPageCell; // inherited from NSObject

	static appearance(): PSPDFPageCell; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PSPDFPageCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PSPDFPageCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): PSPDFPageCell; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PSPDFPageCell; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): PSPDFPageCell; // inherited from UIAppearance

	static new(): PSPDFPageCell; // inherited from NSObject

	edgeInsets: UIEdgeInsets;

	image: UIImage;

	imageLoader: PSPDFPageCellImageLoading;

	readonly imageView: UIImageView;

	pageIndex: number;

	readonly pageLabel: UILabel;

	pageLabelEnabled: boolean;

	shadowEnabled: boolean;

	contentRectForBounds(bounds: CGRect): CGRect;

	imageRectForContentRect(contentRect: CGRect): CGRect;

	pathShadowForView(imageView: UIView): UIBezierPath;

	setNeedsUpdateImage(): void;
}

interface PSPDFPageCellImageLoading extends NSObjectProtocol {

	requestImageForPageAtIndexAvailableSizeCompletionHandler(pageIndex: number, size: CGSize, completionHandler: (p1: UIImage) => void): PSPDFPageCellImageRequestToken;
}
declare var PSPDFPageCellImageLoading: {

	prototype: PSPDFPageCellImageLoading;
};

interface PSPDFPageCellImageRequestToken extends NSObjectProtocol {

	expectedSize: CGSize;

	placeholderImage?: UIImage;

	cancel?(): void;
}
declare var PSPDFPageCellImageRequestToken: {

	prototype: PSPDFPageCellImageRequestToken;
};

interface PSPDFPageControls extends NSObjectProtocol {

	documentActionExecutor: PSPDFDocumentActionExecutor;

	executePDFActionTargetRectPageIndexAnimatedActionContainer(action: PSPDFAction, targetRect: CGRect, pageIndex: number, animated: boolean, actionContainer: any): boolean;

	presentDocumentInfoViewControllerWithOptionsSenderAnimatedCompletion(options: NSDictionary<string, any>, sender: any, animated: boolean, completion: () => void): UIViewController;

	presentPreviewControllerForURLTitleOptionsSenderAnimatedCompletion(fileURL: NSURL, title: string, options: NSDictionary<string, any>, sender: any, animated: boolean, completion: () => void): void;

	reloadData(): void;

	scrollToNextPageAnimated(animated: boolean): boolean;

	scrollToPreviousPageAnimated(animated: boolean): boolean;

	searchForStringOptionsSenderAnimated(searchText: string, options: NSDictionary<string, any>, sender: any, animated: boolean): void;

	setPageIndexAnimated(pageIndex: number, animated: boolean): boolean;

	setPageIndexOptionsAnimated(pageIndex: number, options: NSDictionary<string, number>, animated: boolean): boolean;

	setViewModeAnimated(viewMode: PSPDFViewMode, animated: boolean): void;
}
declare var PSPDFPageControls: {

	prototype: PSPDFPageControls;
};

declare class PSPDFPageInfo extends NSObject implements NSCopying, NSSecureCoding {

	static alloc(): PSPDFPageInfo; // inherited from NSObject

	static new(): PSPDFPageInfo; // inherited from NSObject

	readonly additionalActions: NSDictionary<number, PSPDFAction>;

	readonly allowAnnotationCreation: boolean;

	readonly cropBox: CGRect;

	readonly documentProvider: PSPDFDocumentProvider;

	readonly mediaBox: CGRect;

	readonly pageIndex: number;

	readonly rect: CGRect;

	readonly rotatedRect: CGRect;

	readonly rotation: number;

	readonly rotationTransform: CGAffineTransform;

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	encodeWithCoder(aCoder: NSCoder): void;

	initWithCoder(aDecoder: NSCoder): this;
}

declare class PSPDFPageLabelView extends PSPDFLabelView {

	static alloc(): PSPDFPageLabelView; // inherited from NSObject

	static appearance(): PSPDFPageLabelView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PSPDFPageLabelView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PSPDFPageLabelView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): PSPDFPageLabelView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PSPDFPageLabelView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): PSPDFPageLabelView; // inherited from UIAppearance

	static new(): PSPDFPageLabelView; // inherited from NSObject

	delegate: PSPDFPageLabelViewDelegate;

	showThumbnailGridButton: boolean;

	thumbnailButtonColor: UIColor;

	thumbnailGridButton: UIButton;

	pageLabelWithDocumentPageIndexVisiblePageIndexes(document: PSPDFDocument, pageIndex: number, visiblePageIndexes: NSOrderedSet<number>): string;

	updateFrame(): void;

	updateLabelWithDocumentPageIndexVisiblePageIndexes(document: PSPDFDocument, pageIndex: number, visiblePageIndexes: NSOrderedSet<number>): boolean;
}

interface PSPDFPageLabelViewDelegate extends NSObjectProtocol {

	pageLabelViewDidPressThumbnailGridButton(pageLabelView: PSPDFPageLabelView, sender: UIButton): void;
}
declare var PSPDFPageLabelViewDelegate: {

	prototype: PSPDFPageLabelViewDelegate;
};

declare const enum PSPDFPageMode {

	Single = 0,

	Double = 1,

	Automatic = 2
}

declare var PSPDFPageNull: number;

declare class PSPDFPagePattern extends PSPDFModel {

	static alloc(): PSPDFPagePattern; // inherited from NSObject

	static modelWithDictionaryError(dictionaryValue: NSDictionary<string, any>): PSPDFPagePattern; // inherited from PSPDFModel

	static new(): PSPDFPagePattern; // inherited from NSObject

	readonly identifier: string;

	readonly localizedName: string;

	readonly thumbnail: UIImage;

	constructor(o: { identifier: string; });

	initWithIdentifier(identifier: string): this;
}

interface PSPDFPageRenderer extends NSObjectProtocol {

	drawPageIndexInContextDocumentProviderWithOptionsError(pageIndex: number, context: any, documentProvider: PSPDFDocumentProvider, options: NSDictionary<string, any>): boolean;

	renderAppearanceStreamInContextWithOptionsError(annotation: PSPDFAnnotation, context: any, options: NSDictionary<string, any>): boolean;
}
declare var PSPDFPageRenderer: {

	prototype: PSPDFPageRenderer;
};

declare var PSPDFPageRendererPageInfoKey: string;

declare class PSPDFPageScrollViewController extends PSPDFBaseViewController implements UIScrollViewDelegate {

	static alloc(): PSPDFPageScrollViewController; // inherited from NSObject

	static new(): PSPDFPageScrollViewController; // inherited from NSObject

	readonly pagingScrollView: UIScrollView;

	presentationContext: PSPDFPresentationContext;

	readonly visiblePageIndexes: NSOrderedSet<number>;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { presentationContext: PSPDFPresentationContext; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithPresentationContext(presentationContext: PSPDFPresentationContext): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	pageViewForPageAtIndex(pageIndex: number): PSPDFPageView;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	reloadData(): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	scrollViewDidEndDecelerating(scrollView: UIScrollView): void;

	scrollViewDidEndDraggingWillDecelerate(scrollView: UIScrollView, decelerate: boolean): void;

	scrollViewDidEndScrollingAnimation(scrollView: UIScrollView): void;

	scrollViewDidEndZoomingWithViewAtScale(scrollView: UIScrollView, view: UIView, scale: number): void;

	scrollViewDidScroll(scrollView: UIScrollView): void;

	scrollViewDidScrollToTop(scrollView: UIScrollView): void;

	scrollViewDidZoom(scrollView: UIScrollView): void;

	scrollViewShouldScrollToTop(scrollView: UIScrollView): boolean;

	scrollViewWillBeginDecelerating(scrollView: UIScrollView): void;

	scrollViewWillBeginDragging(scrollView: UIScrollView): void;

	scrollViewWillBeginZoomingWithView(scrollView: UIScrollView, view: UIView): void;

	scrollViewWillEndDraggingWithVelocityTargetContentOffset(scrollView: UIScrollView, velocity: CGPoint, targetContentOffset: interop.Pointer | interop.Reference<CGPoint>): void;

	self(): this;

	viewForZoomingInScrollView(scrollView: UIScrollView): UIView;
}

declare class PSPDFPageSize extends PSPDFModel {

	static alloc(): PSPDFPageSize; // inherited from NSObject

	static modelWithDictionaryError(dictionaryValue: NSDictionary<string, any>): PSPDFPageSize; // inherited from PSPDFModel

	static new(): PSPDFPageSize; // inherited from NSObject

	static sizeName(size: CGSize, name: string): PSPDFPageSize;

	readonly localizedName: string;

	readonly localizedSize: string;

	readonly name: string;

	readonly size: CGSize;

	constructor(o: { size: CGSize; name: string; });

	initWithSizeName(size: CGSize, name: string): this;

	sizeForOrientation(orientation: PSPDFDocumentOrientation): CGSize;
}

declare const enum PSPDFPageTransition {

	ScrollPerPage = 0,

	ScrollContinuous = 1,

	Curl = 2
}

declare const enum PSPDFPageTriggerEvent {

	Open = 0,

	Close = 1
}

declare class PSPDFPageView extends UIView implements PSPDFAnnotationGridViewControllerDelegate, PSPDFAnnotationStyleViewControllerDelegate, PSPDFFontPickerViewControllerDelegate, PSPDFNoteAnnotationViewControllerDelegate, PSPDFRenderTaskDelegate, PSPDFResizableViewDelegate, PSPDFSignatureSelectorViewControllerDelegate, PSPDFSignatureViewControllerDelegate, PSPDFTextSelectionViewDelegate, UIScrollViewDelegate {

	static alloc(): PSPDFPageView; // inherited from NSObject

	static appearance(): PSPDFPageView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PSPDFPageView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PSPDFPageView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): PSPDFPageView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PSPDFPageView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): PSPDFPageView; // inherited from UIAppearance

	static new(): PSPDFPageView; // inherited from NSObject

	readonly PDFScale: number;

	readonly annotationContainerView: PSPDFAnnotationContainerView;

	readonly annotationSelectionView: PSPDFResizableView;

	readonly availableFontSizes: NSArray<number>;

	readonly availableLineWidths: NSArray<number>;

	readonly contentView: UIImageView;

	highlightColor: UIColor;

	readonly pageIndex: number;

	readonly pageInfo: PSPDFPageInfo;

	readonly parentViewController: UIViewController;

	readonly passthroughViewsForPopoverController: NSArray<UIView>;

	readonly presentationContext: PSPDFPresentationContext;

	renderStatusViewOffset: number;

	readonly renderView: UIImageView;

	readonly rightPage: boolean;

	readonly scaleForPageView: number;

	readonly scrollView: PSPDFScrollView;

	selectedAnnotations: NSArray<PSPDFAnnotation>;

	readonly selectionView: PSPDFTextSelectionView;

	readonly shouldMoveStyleMenuEntriesIntoSubmenu: boolean;

	readonly trailingPage: boolean;

	readonly visibleAnnotationViews: NSArray<UIView>;

	readonly visibleRect: CGRect;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	addAnnotationOptionsAnimated(annotation: PSPDFAnnotation, options: NSDictionary<string, number>, animated: boolean): void;

	annotationChangedNotification(notification: NSNotification): void;

	annotationForAnnotationView(annotationView: UIView): PSPDFAnnotation;

	annotationGridViewControllerDidCancel(annotationGridController: PSPDFAnnotationGridViewController): void;

	annotationGridViewControllerDidSelectAnnotationSet(annotationGridController: PSPDFAnnotationGridViewController, annotationSet: PSPDFAnnotationSet): void;

	annotationStyleControllerAnnotationViewForAnnotation(styleController: PSPDFAnnotationStyleViewController, annotation: PSPDFAnnotation): UIView;

	annotationStyleControllerDidChangeProperties(styleController: PSPDFAnnotationStyleViewController, propertyNames: NSArray<string>): void;

	annotationStyleControllerDidEndChangingProperty(styleController: PSPDFAnnotationStyleViewController, propertyName: string): void;

	annotationStyleControllerWillStartChangingProperty(styleController: PSPDFAnnotationStyleViewController, propertyName: string): void;

	annotationViewForAnnotation(annotation: PSPDFAnnotation): UIView;

	annotationsAddedNotification(notification: NSNotification): void;

	annotationsRemovedNotification(notification: NSNotification): void;

	centerAnnotationAroundPDFPoint(annotation: PSPDFAnnotation, pdfPoint: CGPoint): void;

	class(): typeof NSObject;

	classForClass(originalClass: typeof NSObject): typeof NSObject;

	colorMenuItemsForAnnotation(annotation: PSPDFAnnotation): NSArray<PSPDFMenuItem>;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	convertPDFPointToViewPoint(pdfPoint: CGPoint): CGPoint;

	convertPDFRectToViewRect(pdfRect: CGRect): CGRect;

	convertViewPointToPDFPoint(viewPoint: CGPoint): CGPoint;

	convertViewRectToPDFRect(viewRect: CGRect): CGRect;

	defaultColorOptionsForAnnotationType(annotationType: PSPDFAnnotationType): NSArray<UIColor>;

	didDeselectAnnotations(annotations: NSArray<PSPDFAnnotation>): void;

	displayPageIndexPageRectScalePresentationContext(pageIndex: number, pageRect: CGRect, scale: number, presentationContext: PSPDFPresentationContext): void;

	fillColorMenuItemsForAnnotation(annotation: PSPDFAnnotation): NSArray<PSPDFMenuItem>;

	fontPickerViewControllerDidSelectFont(fontPickerViewController: PSPDFFontPickerViewController, selectedFont: UIFont): void;

	hitTestRectForPoint(viewPoint: CGPoint): CGRect;

	insertAnnotationsForPageAtIndexInDocument(annotations: NSArray<PSPDFAnnotation>, pageIndex: number, document: PSPDFDocument): void;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	loadPageAnnotationsAnimatedBlockWhileParsing(animated: boolean, blockWhileParsing: boolean): void;

	longPress(recognizer: UILongPressGestureRecognizer): boolean;

	menuItemsForAnnotations(annotations: NSArray<PSPDFAnnotation>): NSArray<PSPDFMenuItem>;

	menuItemsForNewAnnotationAtPoint(point: CGPoint): NSArray<PSPDFMenuItem>;

	noteAnnotationControllerDidChangeAnnotation(noteController: PSPDFNoteAnnotationViewController, annotation: PSPDFAnnotation): void;

	noteAnnotationControllerDidClearContentsForAnnotation(noteController: PSPDFNoteAnnotationViewController, annotation: PSPDFAnnotation): void;

	noteAnnotationControllerDidDeleteAnnotation(noteController: PSPDFNoteAnnotationViewController, annotation: PSPDFAnnotation): void;

	noteAnnotationControllerWillDismissWithAnnotation(noteController: PSPDFNoteAnnotationViewController, annotation: PSPDFAnnotation): void;

	objectsAtPointOptions(viewPoint: CGPoint, options: NSDictionary<string, number>): NSDictionary<string, any>;

	objectsAtRectOptions(viewRect: CGRect, options: NSDictionary<string, number>): NSDictionary<string, any>;

	opacityMenuItemForAnnotationWithColor(annotation: PSPDFAnnotation, color: UIColor): PSPDFMenuItem;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	prepareForReuse(): void;

	rectForAnnotations(annotations: NSArray<PSPDFAnnotation>): CGRect;

	removeAnnotationOptionsAnimated(annotation: PSPDFAnnotation, options: NSDictionary<string, number>, animated: boolean): boolean;

	renderOptionsDictWithZoomScaleAnimated(zoomScale: number, animated: boolean): NSDictionary<string, any>;

	renderTaskDidFinish(task: PSPDFRenderTask): void;

	resizableViewAdjustedPropertyOfAnnotation(resizableView: PSPDFResizableView, propertyName: string, annotation: PSPDFAnnotation): void;

	resizableViewChangedFrameOuterKnobTypeIsInitialChange(resizableView: PSPDFResizableView, outerKnobType: PSPDFResizableViewOuterKnob, isInitialChange: boolean): void;

	resizableViewDidBeginEditing(resizableView: PSPDFResizableView): void;

	resizableViewDidEndEditingDidChangeFrame(resizableView: PSPDFResizableView, didChangeFrame: boolean): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	scrollViewDidEndDecelerating(scrollView: UIScrollView): void;

	scrollViewDidEndDraggingWillDecelerate(scrollView: UIScrollView, decelerate: boolean): void;

	scrollViewDidEndScrollingAnimation(scrollView: UIScrollView): void;

	scrollViewDidEndZoomingWithViewAtScale(scrollView: UIScrollView, view: UIView, scale: number): void;

	scrollViewDidScroll(scrollView: UIScrollView): void;

	scrollViewDidScrollToTop(scrollView: UIScrollView): void;

	scrollViewDidZoom(scrollView: UIScrollView): void;

	scrollViewShouldScrollToTop(scrollView: UIScrollView): boolean;

	scrollViewWillBeginDecelerating(scrollView: UIScrollView): void;

	scrollViewWillBeginDragging(scrollView: UIScrollView): void;

	scrollViewWillBeginZoomingWithView(scrollView: UIScrollView, view: UIView): void;

	scrollViewWillEndDraggingWithVelocityTargetContentOffset(scrollView: UIScrollView, velocity: CGPoint, targetContentOffset: interop.Pointer | interop.Reference<CGPoint>): void;

	selectAnnotationAnimated(annotation: PSPDFAnnotation, animated: boolean): void;

	selectColorForAnnotationIsFillColor(annotation: PSPDFAnnotation, isFillColor: boolean): void;

	self(): this;

	setAnnotationForAnnotationView(annotation: PSPDFAnnotation, annotationView: UIView): void;

	shouldScaleAnnotationWhenResizingUsesResizeKnob(annotation: PSPDFAnnotation, usesResizeKnob: boolean): boolean;

	showColorPickerForAnnotationAnimated(annotation: PSPDFAnnotation, animated: boolean): void;

	showDigitalSignatureMenuForSignatureFieldAnimated(signatureField: PSPDFSignatureFormElement, animated: boolean): boolean;

	showFontPickerForAnnotationAnimated(annotation: PSPDFFreeTextAnnotation, animated: boolean): void;

	showInspectorForAnnotationsOptionsAnimated(annotations: NSArray<PSPDFAnnotation>, options: NSDictionary<string, any>, animated: boolean): PSPDFAnnotationStyleViewController;

	showLinkPreviewActionSheetForAnnotationFromRectAnimated(annotation: PSPDFLinkAnnotation, viewRect: CGRect, animated: boolean): boolean;

	showMenuForAnnotationsTargetRectAllowPopoversAnimated(annotations: NSArray<PSPDFAnnotation>, targetRect: CGRect, allowPopovers: boolean, animated: boolean): void;

	showMenuIfSelectedAnimated(animated: boolean): void;

	showMenuIfSelectedAnimatedAllowPopovers(animated: boolean, allowPopovers: boolean): void;

	showNewSignatureMenuAtRectOptionsAnimated(viewRect: CGRect, options: NSDictionary<any, any>, animated: boolean): void;

	showNoteControllerForAnnotationShowKeyboardAnimated(annotation: PSPDFAnnotation, showKeyboard: boolean, animated: boolean): PSPDFNoteAnnotationViewController;

	showSignatureControllerAtRectWithTitleShouldSaveSignatureOptionsAnimated(viewRect: CGRect, title: string, shouldSaveSignature: boolean, options: NSDictionary<any, any>, animated: boolean): void;

	signatureSelectorViewControllerDidSelectSignature(signatureSelectorController: PSPDFSignatureSelectorViewController, signature: PSPDFInkAnnotation): void;

	signatureSelectorViewControllerWillCreateNewSignature(signatureSelectorController: PSPDFSignatureSelectorViewController): void;

	signatureViewControllerDidCancel(signatureController: PSPDFSignatureViewController): void;

	signatureViewControllerDidSave(signatureController: PSPDFSignatureViewController): void;

	singleTapped(recognizer: UITapGestureRecognizer): boolean;

	singleTappedAtViewPoint(viewPoint: CGPoint): boolean;

	tappableAnnotationsAtPoint(viewPoint: CGPoint): NSArray<PSPDFAnnotation>;

	tappableAnnotationsForLongPressAtPoint(viewPoint: CGPoint): NSArray<PSPDFAnnotation>;

	textSelectionViewDidSelectTextWithGlyphsAtRect(textSelectionView: PSPDFTextSelectionView, text: string, glyphs: NSArray<PSPDFGlyph>, rect: CGRect): void;

	textSelectionViewShouldSelectTextWithGlyphsAtRect(textSelectionView: PSPDFTextSelectionView, text: string, glyphs: NSArray<PSPDFGlyph>, rect: CGRect): boolean;

	textSelectionViewUpdateMenuAnimated(textSelectionView: PSPDFTextSelectionView, animated: boolean): boolean;

	updateAnnotationSelectionView(): void;

	updateRenderView(): void;

	updateShadowAnimated(animated: boolean): void;

	updateView(): void;

	useAnnotationInspectorForAnnotations(annotations: NSArray<PSPDFAnnotation>): boolean;

	viewForZoomingInScrollView(scrollView: UIScrollView): UIView;
}

declare var PSPDFPageViewSelectedAnnotationsDidChangeNotification: string;

declare class PSPDFPagingScrollView extends UIScrollView {

	static alloc(): PSPDFPagingScrollView; // inherited from NSObject

	static appearance(): PSPDFPagingScrollView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PSPDFPagingScrollView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PSPDFPagingScrollView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): PSPDFPagingScrollView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PSPDFPagingScrollView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): PSPDFPagingScrollView; // inherited from UIAppearance

	static new(): PSPDFPagingScrollView; // inherited from NSObject
}

declare var PSPDFPaperSizeA4: CGRect;

declare var PSPDFPaperSizeLetter: CGRect;

declare function PSPDFPerformBlockAsGroup(undoController: PSPDFUndoController, block: () => void, name: string): void;

declare function PSPDFPerformBlockWithoutUndo(undoController: PSPDFUndoController, block: () => void): void;

declare const enum PSPDFPersistentCloseButtonMode {

	None = 0,

	Left = 1,

	Right = 2
}

declare var PSPDFPolicyEventAudioRecording: string;

declare var PSPDFPolicyEventCamera: string;

declare var PSPDFPolicyEventEmail: string;

declare var PSPDFPolicyEventMessage: string;

declare var PSPDFPolicyEventNetwork: string;

declare var PSPDFPolicyEventOpenIn: string;

declare var PSPDFPolicyEventPasteboard: string;

declare var PSPDFPolicyEventPhotoLibrary: string;

declare var PSPDFPolicyEventPrint: string;

declare var PSPDFPolicyEventQuickLook: string;

declare var PSPDFPolicyEventSubmitForm: string;

declare class PSPDFPolyLineAnnotation extends PSPDFAbstractLineAnnotation {

	static alloc(): PSPDFPolyLineAnnotation; // inherited from NSObject

	static modelWithDictionaryError(dictionaryValue: NSDictionary<string, any>): PSPDFPolyLineAnnotation; // inherited from PSPDFModel

	static new(): PSPDFPolyLineAnnotation; // inherited from NSObject
}

declare class PSPDFPolygonAnnotation extends PSPDFAbstractLineAnnotation {

	static alloc(): PSPDFPolygonAnnotation; // inherited from NSObject

	static modelWithDictionaryError(dictionaryValue: NSDictionary<string, any>): PSPDFPolygonAnnotation; // inherited from PSPDFModel

	static new(): PSPDFPolygonAnnotation; // inherited from NSObject

	intentType: PSPDFPolygonAnnotationIntent;

	constructor(o: { points: NSArray<NSValue>; intentType: PSPDFPolygonAnnotationIntent; });

	initWithPointsIntentType(points: NSArray<NSValue>, intentType: PSPDFPolygonAnnotationIntent): this;
}

declare const enum PSPDFPolygonAnnotationIntent {

	None = 0,

	PolygonCloud = 1,

	PolygonDimension = 2
}

declare var PSPDFPolygonAnnotationIntentTransformerName: string;

declare class PSPDFPopupAnnotation extends PSPDFAnnotation {

	static alloc(): PSPDFPopupAnnotation; // inherited from NSObject

	static modelWithDictionaryError(dictionaryValue: NSDictionary<string, any>): PSPDFPopupAnnotation; // inherited from PSPDFModel

	static new(): PSPDFPopupAnnotation; // inherited from NSObject

	open: boolean;
}

interface PSPDFPresentationActions extends NSObjectProtocol {

	dismissViewControllerOfClassAnimatedCompletion(controllerClass: typeof NSObject, animated: boolean, completion: () => void): boolean;

	presentViewControllerOptionsAnimatedSenderCompletion(viewController: UIViewController, options: NSDictionary<string, any>, animated: boolean, sender: any, completion: () => void): boolean;
}
declare var PSPDFPresentationActions: {

	prototype: PSPDFPresentationActions;
};

declare var PSPDFPresentationCloseButtonKey: string;

declare var PSPDFPresentationContentSizeKey: string;

interface PSPDFPresentationContext extends PSPDFErrorHandler, PSPDFOverridable, PSPDFVisiblePagesDataSource {

	HUDVisible: boolean;

	actionDelegate: PSPDFControlDelegate;

	annotationStateManager: PSPDFAnnotationStateManager;

	annotationToolbarController: PSPDFAnnotationToolbarController;

	configuration: PSPDFConfiguration;

	contentRect: CGRect;

	displayingViewController: UIViewController;

	document: PSPDFDocument;

	doublePageMode: boolean;

	pagingScrollView: UIScrollView;

	pdfController: PSPDFViewController;

	pspdfkit: PSPDFKit;

	reloading: boolean;

	rotationActive: boolean;

	scrollIndicatorInsets: UIEdgeInsets;

	scrollViewInsets: UIEdgeInsets;

	scrollingEnabled: boolean;

	shouldAdjustFrameWhenHUDIsPersistent: boolean;

	viewLockEnabled: boolean;

	viewMode: PSPDFViewMode;

	viewWillAppearing: boolean;

	visiblePageViews: NSArray<PSPDFPageView>;

	isDoublePageModeForPageAtIndex(pageIndex: number): boolean;

	isDoublePageModeForViewSize(viewSize: CGSize): boolean;

	isRightPageInDoublePageMode(pageIndex: number): boolean;

	isTrailingPageInDoublePageMode(pageIndex: number): boolean;

	landscapePageIndexForPortraitPageIndex(pageIndex: number): number;

	landscapePageSpreadForPortraitPageSpread(pageSpread: number): number;

	pageViewForPageAtIndex(pageIndex: number): PSPDFPageView;

	portraitPageIndexForLandscapePageIndex(pageIndex: number): number;

	portraitPageSpreadForLandscapePageSpread(pageSpread: number): number;

	visiblePageViewsForcingLayout(forcingLayout: boolean): NSArray<PSPDFPageView>;
}
declare var PSPDFPresentationContext: {

	prototype: PSPDFPresentationContext;
};

declare var PSPDFPresentationInNavigationControllerKey: string;

declare var PSPDFPresentationNonAdaptiveKey: string;

declare var PSPDFPresentationPersistentCloseButtonKey: string;

declare var PSPDFPresentationPopoverArrowDirectionsKey: string;

declare var PSPDFPresentationPopoverBackgroundColorKey: string;

declare var PSPDFPresentationPopoverPassthroughViewsKey: string;

declare var PSPDFPresentationRectBlockKey: string;

declare var PSPDFPresentationRectKey: string;

declare var PSPDFPresentationReuseNavigationControllerKey: string;

declare const enum PSPDFPresentationStyle {

	None = 0,

	HalfModal = 1
}

declare var PSPDFPresentationStyleKey: string;

declare var PSPDFPreserveAspectRatioKey: string;

declare class PSPDFPrintConfiguration extends PSPDFBaseConfiguration<PSPDFPrintConfigurationBuilder> {

	static alloc(): PSPDFPrintConfiguration; // inherited from NSObject

	static configurationWithBuilder(builderBlock: (p1: BuilderType) => void): PSPDFPrintConfiguration; // inherited from PSPDFBaseConfiguration

	static defaultConfiguration(): PSPDFPrintConfiguration; // inherited from PSPDFBaseConfiguration

	static modelWithDictionaryError(dictionaryValue: NSDictionary<string, any>): PSPDFPrintConfiguration; // inherited from PSPDFModel

	static new(): PSPDFPrintConfiguration; // inherited from NSObject

	readonly defaultPrinter: UIPrinter;

	readonly printMode: PSPDFPrintMode;
}

declare class PSPDFPrintConfigurationBuilder extends PSPDFBaseConfigurationBuilder {

	static alloc(): PSPDFPrintConfigurationBuilder; // inherited from NSObject

	static new(): PSPDFPrintConfigurationBuilder; // inherited from NSObject

	defaultPrinter: UIPrinter;

	printMode: PSPDFPrintMode;
}

declare class PSPDFPrintCoordinator extends PSPDFDocumentSharingCoordinator implements UIPrintInteractionControllerDelegate, UIPrinterPickerControllerDelegate {

	static alloc(): PSPDFPrintCoordinator; // inherited from NSObject

	static new(): PSPDFPrintCoordinator; // inherited from NSObject

	printConfiguration: PSPDFPrintConfiguration;

	readonly printInfo: UIPrintInfo;

	readonly printInteractionController: UIPrintInteractionController;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	printInteractionControllerChooseCutterBehavior(printInteractionController: UIPrintInteractionController, availableBehaviors: NSArray<any>): UIPrinterCutterBehavior;

	printInteractionControllerChoosePaper(printInteractionController: UIPrintInteractionController, paperList: NSArray<UIPrintPaper>): UIPrintPaper;

	printInteractionControllerCutLengthForPaper(printInteractionController: UIPrintInteractionController, paper: UIPrintPaper): number;

	printInteractionControllerDidDismissPrinterOptions(printInteractionController: UIPrintInteractionController): void;

	printInteractionControllerDidFinishJob(printInteractionController: UIPrintInteractionController): void;

	printInteractionControllerDidPresentPrinterOptions(printInteractionController: UIPrintInteractionController): void;

	printInteractionControllerParentViewController(printInteractionController: UIPrintInteractionController): UIViewController;

	printInteractionControllerWillDismissPrinterOptions(printInteractionController: UIPrintInteractionController): void;

	printInteractionControllerWillPresentPrinterOptions(printInteractionController: UIPrintInteractionController): void;

	printInteractionControllerWillStartJob(printInteractionController: UIPrintInteractionController): void;

	printerPickerControllerDidDismiss(printerPickerController: UIPrinterPickerController): void;

	printerPickerControllerDidPresent(printerPickerController: UIPrinterPickerController): void;

	printerPickerControllerDidSelectPrinter(printerPickerController: UIPrinterPickerController): void;

	printerPickerControllerParentViewController(printerPickerController: UIPrinterPickerController): UIViewController;

	printerPickerControllerShouldShowPrinter(printerPickerController: UIPrinterPickerController, printer: UIPrinter): boolean;

	printerPickerControllerWillDismiss(printerPickerController: UIPrinterPickerController): void;

	printerPickerControllerWillPresent(printerPickerController: UIPrinterPickerController): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare const enum PSPDFPrintMode {

	Interactive = 0,

	ChoosePrinterOnly = 1,

	PrintDirect = 2
}

declare class PSPDFProcessor extends NSObject {

	static alloc(): PSPDFProcessor; // inherited from NSObject

	static generatePDFFromConfigurationSaveOptionsOutputDataSinkProgressBlockError(configuration: PSPDFProcessorConfiguration, saveOptions: PSPDFProcessorSaveOptions, outputDataSink: PSPDFDataSink, progressBlock: (p1: number, p2: number) => void): boolean;

	static generatePDFFromConfigurationSaveOptionsOutputFileURLProgressBlockError(configuration: PSPDFProcessorConfiguration, saveOptions: PSPDFProcessorSaveOptions, fileURL: NSURL, progressBlock: (p1: number, p2: number) => void): boolean;

	static generatePDFFromConfigurationSaveOptionsProgressBlockError(configuration: PSPDFProcessorConfiguration, saveOptions: PSPDFProcessorSaveOptions, progressBlock: (p1: number, p2: number) => void): NSData;

	static generatePDFFromHTMLStringOptionsCompletionBlock(HTML: string, options: NSDictionary<string, any>, completionBlock: (p1: NSData, p2: NSError) => void): void;

	static generatePDFFromHTMLStringOutputFileURLOptionsCompletionBlock(HTML: string, fileURL: NSURL, options: NSDictionary<string, any>, completionBlock: (p1: NSError) => void): void;

	static generatePDFFromURLOptionsCompletionBlock(inputURL: NSURL, options: NSDictionary<string, any>, completionBlock: (p1: NSData, p2: NSError) => void): PSPDFConversionOperation;

	static generatePDFFromURLOutputFileURLOptionsCompletionBlock(inputURL: NSURL, outputURL: NSURL, options: NSDictionary<string, any>, completionBlock: (p1: NSURL, p2: NSError) => void): PSPDFConversionOperation;

	static new(): PSPDFProcessor; // inherited from NSObject
}

declare var PSPDFProcessorAdditionalDelayKey: string;

declare var PSPDFProcessorAnnotationAsDictionaryKey: string;

declare var PSPDFProcessorAnnotationDictKey: string;

declare var PSPDFProcessorAnnotationTypesKey: string;

declare class PSPDFProcessorConfiguration extends NSObject implements NSCopying {

	static alloc(): PSPDFProcessorConfiguration; // inherited from NSObject

	static new(): PSPDFProcessorConfiguration; // inherited from NSObject

	readonly document: PSPDFDocument;

	formFieldNameMappings: NSDictionary<string, string>;

	formMappingNameMappings: NSDictionary<string, string>;

	readonly metadata: NSDictionary<string, string>;

	readonly pageCount: number;

	constructor(o: { document: PSPDFDocument; });

	addNewPageAtIndexConfiguration(destinationPageIndex: number, newPageConfiguation: PSPDFNewPageConfiguration): void;

	changeCropBoxForPageAtIndexToRect(pageIndex: number, rect: CGRect): void;

	changeMediaBoxForPageAtIndexToRect(pageIndex: number, rect: CGRect): void;

	clearMetadata(): void;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	drawOnAllCurrentPages(drawBlock: (p1: any, p2: number, p3: CGRect, p4: number, p5: NSDictionary<string, any>) => void): void;

	includeOnlyIndexes(indexes: NSIndexSet): void;

	initWithDocument(document: PSPDFDocument): this;

	mergeItemOnPage(item: PSPDFProcessorItem, destinationPageIndex: number): void;

	modifyAnnotationsChangeError(annotations: NSArray<PSPDFAnnotation>, annotationChange: PSPDFAnnotationChange): boolean;

	modifyAnnotationsOfTypesChange(annotationTypes: PSPDFAnnotationType, annotationChange: PSPDFAnnotationChange): void;

	movePagesToDestinationIndex(indexes: NSIndexSet, destinationPageIndex: number): void;

	removePages(indexes: NSIndexSet): void;

	rotatePageBy(pageIndex: number, degrees: number): void;

	scalePageToSize(pageIndex: number, size: CGSize): void;

	scalePageToSizeInMillimeter(pageIndex: number, mmSize: CGSize): void;

	setShouldStripBlankPagesOnGenerate(shouldStrip: boolean): void;

	updateMetadata(metadata: NSDictionary<string, string>): void;
}

declare var PSPDFProcessorDocumentTitleKey: string;

declare class PSPDFProcessorItem extends NSObject {

	static alloc(): PSPDFProcessorItem; // inherited from NSObject

	static new(): PSPDFProcessorItem; // inherited from NSObject

	static processorItemWithImageJpegCompressionQualityBuilderBlock(image: UIImage, jpegCompressionQuality: number, builderBlock: (p1: PSPDFProcessorItemBuilder) => void): PSPDFProcessorItem;

	static processorItemWithItemURLBuilderBlock(itemURL: NSURL, builderBlock: (p1: PSPDFProcessorItemBuilder) => void): PSPDFProcessorItem;

	readonly alignment: PSPDFRectAlignment;

	readonly image: UIImage;

	readonly itemURL: NSURL;

	readonly jpegCompressionQuality: number;

	readonly shouldUseAlignment: boolean;

	readonly transform: CGAffineTransform;

	readonly zPosition: PSPDFItemZPosition;
}

declare class PSPDFProcessorItemBuilder extends PSPDFModel {

	static alloc(): PSPDFProcessorItemBuilder; // inherited from NSObject

	static modelWithDictionaryError(dictionaryValue: NSDictionary<string, any>): PSPDFProcessorItemBuilder; // inherited from PSPDFModel

	static new(): PSPDFProcessorItemBuilder; // inherited from NSObject

	alignment: PSPDFRectAlignment;

	shouldUseAlignment: boolean;

	transform: CGAffineTransform;

	zPosition: PSPDFItemZPosition;
}

declare var PSPDFProcessorKeyLengthKey: string;

declare var PSPDFProcessorNumberOfPagesKey: string;

declare var PSPDFProcessorOwnerPasswordKey: string;

declare var PSPDFProcessorPageBorderMarginKey: string;

declare var PSPDFProcessorPageRectKey: string;

declare class PSPDFProcessorSaveOptions extends NSObject {

	static alloc(): PSPDFProcessorSaveOptions; // inherited from NSObject

	static new(): PSPDFProcessorSaveOptions; // inherited from NSObject

	static optionsWithOwnerPasswordUserPasswordKeyLength(ownerPassword: string, userPassword: string, keyLength: number): PSPDFProcessorSaveOptions;

	static optionsWithOwnerPasswordUserPasswordKeyLengthPermissions(ownerPassword: string, userPassword: string, keyLength: number, documentPermissions: PSPDFDocumentPermissions): PSPDFProcessorSaveOptions;

	readonly keyLength: number;

	readonly ownerPassword: string;

	readonly permissions: PSPDFDocumentPermissions;

	readonly userPassword: string;

	constructor(o: { ownerPassword: string; userPassword: string; keyLength: number; });

	constructor(o: { ownerPassword: string; userPassword: string; keyLength: number; permissions: PSPDFDocumentPermissions; });

	initWithOwnerPasswordUserPasswordKeyLength(ownerPassword: string, userPassword: string, keyLength: number): this;

	initWithOwnerPasswordUserPasswordKeyLengthPermissions(ownerPassword: string, userPassword: string, keyLength: number, documentPermissions: PSPDFDocumentPermissions): this;
}

declare var PSPDFProcessorSaveOptionsKeyLengthAutomatic: number;

declare var PSPDFProcessorSkipPDFCreationKey: string;

declare var PSPDFProcessorStripEmptyPagesKey: string;

declare var PSPDFProcessorUserPasswordKey: string;

declare class PSPDFRSAKey extends NSObject {

	static alloc(): PSPDFRSAKey; // inherited from NSObject

	static new(): PSPDFRSAKey; // inherited from NSObject

	readonly pKey: interop.Pointer | interop.Reference<any>;

	constructor(o: { key: interop.Pointer | interop.Reference<any>; });

	initWithKey(key: interop.Pointer | interop.Reference<any>): this;
}

declare const enum PSPDFReachability {

	Unknown = 0,

	Unreachable = 1,

	WiFi = 2,

	WWAN = 3
}

declare const enum PSPDFRectAlignment {

	Center = 0,

	Top = 1,

	TopLeft = 2,

	TopRight = 3,

	Left = 4,

	Bottom = 5,

	BottomLeft = 6,

	BottomRight = 7,

	Right = 8
}

declare function PSPDFRectsFromGlyphs(glyphs: NSArray<PSPDFGlyph>, boundingBox: interop.Pointer | interop.Reference<CGRect>, pageRotation: number): NSArray<NSValue>;

declare class PSPDFRelayTouchesView extends UIView {

	static alloc(): PSPDFRelayTouchesView; // inherited from NSObject

	static appearance(): PSPDFRelayTouchesView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PSPDFRelayTouchesView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PSPDFRelayTouchesView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): PSPDFRelayTouchesView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PSPDFRelayTouchesView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): PSPDFRelayTouchesView; // inherited from UIAppearance

	static new(): PSPDFRelayTouchesView; // inherited from NSObject
}

interface PSPDFRemoteContentObject extends NSObjectProtocol {

	URLRequestForRemoteContent: NSURLRequest;

	completionBlock?: (p1: PSPDFRemoteContentObject) => void;

	hasRemoteContent?: boolean;

	loadingRemoteContent?: boolean;

	remoteContent: any;

	remoteContentAuthenticationChallengeBlock?: (p1: NSURLAuthenticationChallenge, p2: (p1: NSURLSessionAuthChallengeDisposition, p2: NSURLCredential) => void) => void;

	remoteContentError?: NSError;

	remoteContentProgress?: number;

	remoteContentTransformerBlock?: (p1: NSURL) => any;

	shouldCacheRemoteContent?: boolean;

	shouldRetryLoadingRemoteContentOnConnectionFailure?: boolean;
}
declare var PSPDFRemoteContentObject: {

	prototype: PSPDFRemoteContentObject;
};

declare class PSPDFRemoteFileObject extends NSObject implements PSPDFRemoteContentObject {

	static alloc(): PSPDFRemoteFileObject; // inherited from NSObject

	static new(): PSPDFRemoteFileObject; // inherited from NSObject

	remoteContent: NSURL;

	readonly remoteURL: NSURL;

	readonly targetURL: NSURL;

	readonly URLRequestForRemoteContent: NSURLRequest; // inherited from PSPDFRemoteContentObject

	completionBlock: (p1: PSPDFRemoteContentObject) => void; // inherited from PSPDFRemoteContentObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hasRemoteContent: boolean; // inherited from PSPDFRemoteContentObject

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	loadingRemoteContent: boolean; // inherited from PSPDFRemoteContentObject

	readonly remoteContentAuthenticationChallengeBlock: (p1: NSURLAuthenticationChallenge, p2: (p1: NSURLSessionAuthChallengeDisposition, p2: NSURLCredential) => void) => void; // inherited from PSPDFRemoteContentObject

	remoteContentError: NSError; // inherited from PSPDFRemoteContentObject

	remoteContentProgress: number; // inherited from PSPDFRemoteContentObject

	readonly remoteContentTransformerBlock: (p1: NSURL) => any; // inherited from PSPDFRemoteContentObject

	readonly shouldCacheRemoteContent: boolean; // inherited from PSPDFRemoteContentObject

	readonly shouldRetryLoadingRemoteContentOnConnectionFailure: boolean; // inherited from PSPDFRemoteContentObject

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { remoteURL: NSURL; targetURL: NSURL; fileManager: PSPDFFileManager; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithRemoteURLTargetURLFileManager(remoteURL: NSURL, targetFileURL: NSURL, fileManager: PSPDFFileManager): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class PSPDFRemoteGoToAction extends PSPDFGoToAction {

	static alloc(): PSPDFRemoteGoToAction; // inherited from NSObject

	static modelWithDictionaryError(dictionaryValue: NSDictionary<string, any>): PSPDFRemoteGoToAction; // inherited from PSPDFModel

	static new(): PSPDFRemoteGoToAction; // inherited from NSObject

	readonly relativePath: string;

	constructor(o: { relativePath: string; pageIndex: number; });

	initWithRelativePathPageIndex(remotePath: string, pageIndex: number): this;
}

declare var PSPDFRenderAllowAntiAliasingKey: string;

declare var PSPDFRenderBackgroundFillColorKey: string;

declare var PSPDFRenderDrawBlockKey: string;

declare const enum PSPDFRenderFilter {

	Grayscale = 1,

	ColorCorrectInverted = 2,

	Sepia = 4
}

declare var PSPDFRenderFiltersKey: string;

declare var PSPDFRenderIgnorePageClipKey: string;

declare var PSPDFRenderInteractiveFormFillColorKey: string;

declare var PSPDFRenderInterpolationQualityKey: string;

declare var PSPDFRenderInvertedKey: string;

interface PSPDFRenderManager extends NSObjectProtocol {

	renderQueue: PSPDFRenderQueue;

	setupGraphicsContextRectanglePageInfo(context: any, displayRectangle: CGRect, pageInfo: PSPDFPageInfo): void;
}
declare var PSPDFRenderManager: {

	prototype: PSPDFRenderManager;
};

declare var PSPDFRenderOptionAllowAntiAliasingKey: string;

declare var PSPDFRenderOptionBackgroundFillColorKey: string;

declare var PSPDFRenderOptionCIFilterKey: string;

declare var PSPDFRenderOptionDrawBlockKey: string;

declare var PSPDFRenderOptionFiltersKey: string;

declare var PSPDFRenderOptionIgnoreDisplaySettingsKey: string;

declare var PSPDFRenderOptionIgnorePageClipKey: string;

declare var PSPDFRenderOptionInteractiveFormFillColorKey: string;

declare var PSPDFRenderOptionInterpolationQualityKey: string;

declare var PSPDFRenderOptionInvertedKey: string;

declare var PSPDFRenderOptionOverlayAnnotationsKey: string;

declare var PSPDFRenderOptionPageColorKey: string;

declare var PSPDFRenderOptionPreserveAspectRatioKey: string;

declare var PSPDFRenderOptionSkipAnnotationArrayKey: string;

declare var PSPDFRenderOptionSkipPageContentKey: string;

declare var PSPDFRenderOverlayAnnotationsKey: string;

declare var PSPDFRenderPageColorKey: string;

declare class PSPDFRenderQueue extends NSObject {

	static alloc(): PSPDFRenderQueue; // inherited from NSObject

	static new(): PSPDFRenderQueue; // inherited from NSObject

	concurrentRunningRenderRequests: number;

	minimumProcessPriority: PSPDFRenderQueuePriority;

	cancelAllJobs(): void;

	scheduleTask(task: PSPDFRenderTask): void;

	scheduleTasks(tasks: NSArray<PSPDFRenderTask>): void;
}

declare const enum PSPDFRenderQueuePriority {

	Unspecified = 0,

	Background = 100,

	Utility = 200,

	UserInitiated = 300,

	UserInteractive = 400,

	VeryLow = 0,

	Low = 100,

	Normal = 200,

	High = 300,

	VeryHigh = 400
}

declare class PSPDFRenderRequest extends NSObject implements NSCopying, NSMutableCopying {

	static alloc(): PSPDFRenderRequest; // inherited from NSObject

	static new(): PSPDFRenderRequest; // inherited from NSObject

	readonly annotations: NSArray<PSPDFAnnotation>;

	readonly cachePolicy: PSPDFRenderRequestCachePolicy;

	readonly document: PSPDFDocument;

	readonly imageSize: CGSize;

	readonly options: NSDictionary<string, any>;

	readonly pageIndex: number;

	readonly pdfRect: CGRect;

	readonly userInfo: NSDictionary<any, any>;

	constructor(o: { document: PSPDFDocument; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	initWithDocument(document: PSPDFDocument): this;

	isEqualRenderRequest(renderRequest: PSPDFRenderRequest): boolean;

	mutableCopyWithZone(zone: interop.Pointer | interop.Reference<any>): any;
}

declare const enum PSPDFRenderRequestCachePolicy {

	Default = 0,

	ReloadIgnoreingCacheData = 1,

	ReturnCacheDataElseLoad = 2,

	ReturnCacheDataDontLoad = 3
}

declare var PSPDFRenderSizeLimit: CGSize;

declare var PSPDFRenderSkipAnnotationArrayKey: string;

declare var PSPDFRenderSkipPageContentKey: string;

declare const enum PSPDFRenderStatusViewPosition {

	Top = 0,

	Centered = 1
}

declare class PSPDFRenderTask extends NSObject {

	static alloc(): PSPDFRenderTask; // inherited from NSObject

	static groupTasksCompletionHandler(tasks: NSArray<PSPDFRenderTask>, completionHandler: () => void): void;

	static new(): PSPDFRenderTask; // inherited from NSObject

	readonly cancelled: boolean;

	completionHandler: (p1: UIImage) => void;

	delegate: PSPDFRenderTaskDelegate;

	readonly image: UIImage;

	priority: PSPDFRenderQueuePriority;

	readonly request: PSPDFRenderRequest;

	constructor(o: { request: PSPDFRenderRequest; });

	cancel(): void;

	initWithRequest(request: PSPDFRenderRequest): this;
}

interface PSPDFRenderTaskDelegate extends NSObjectProtocol {

	renderTaskDidFinish?(task: PSPDFRenderTask): void;
}
declare var PSPDFRenderTaskDelegate: {

	prototype: PSPDFRenderTaskDelegate;
};

declare const enum PSPDFRenderType {

	Page = 0,

	Processor = 1,

	All = 4294967295
}

declare class PSPDFRenditionAction extends PSPDFAction {

	static alloc(): PSPDFRenditionAction; // inherited from NSObject

	static modelWithDictionaryError(dictionaryValue: NSDictionary<string, any>): PSPDFRenditionAction; // inherited from PSPDFModel

	static new(): PSPDFRenditionAction; // inherited from NSObject

	readonly actionType: PSPDFRenditionActionType;

	readonly annotation: PSPDFScreenAnnotation;

	readonly javaScript: string;

	constructor(o: { actionType: PSPDFRenditionActionType; javaScript: string; annotation: PSPDFScreenAnnotation; });

	initWithActionTypeJavaScriptAnnotation(actionType: PSPDFRenditionActionType, javaScript: string, annotation: PSPDFScreenAnnotation): this;
}

declare const enum PSPDFRenditionActionType {

	Unknown = -1,

	PlayStop = 0,

	Stop = 1,

	Pause = 2,

	Resume = 3,

	Play = 4
}

declare var PSPDFRenditionActionTypeTransformerName: string;

declare class PSPDFResetFormAction extends PSPDFAbstractFormAction {

	static alloc(): PSPDFResetFormAction; // inherited from NSObject

	static modelWithDictionaryError(dictionaryValue: NSDictionary<string, any>): PSPDFResetFormAction; // inherited from PSPDFModel

	static new(): PSPDFResetFormAction; // inherited from NSObject

	readonly flags: PSPDFResetFormActionFlag;

	constructor(o: { flags: PSPDFResetFormActionFlag; });

	initWithFlags(flags: PSPDFResetFormActionFlag): this;
}

declare const enum PSPDFResetFormActionFlag {

	IncludeExclude = 1
}

declare class PSPDFResizableView extends UIView {

	static alloc(): PSPDFResizableView; // inherited from NSObject

	static appearance(): PSPDFResizableView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PSPDFResizableView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PSPDFResizableView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): PSPDFResizableView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PSPDFResizableView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): PSPDFResizableView; // inherited from UIAppearance

	static new(): PSPDFResizableView; // inherited from NSObject

	allowAdjusting: boolean;

	allowEditing: boolean;

	allowResizing: boolean;

	cornerRadius: number;

	delegate: PSPDFResizableViewDelegate;

	enableResizingGuides: boolean;

	guideBorderColor: UIColor;

	guideSnapAllowance: number;

	innerEdgeInsets: UIEdgeInsets;

	minHeight: number;

	minWidth: number;

	mode: PSPDFResizableViewMode;

	outerEdgeInsets: UIEdgeInsets;

	selectionBorderWidth: number;

	showBoundingBox: boolean;

	readonly trackedAnnotations: NSSet<PSPDFAnnotation>;

	trackedViews: NSSet<UIView>;

	zoomScale: number;

	centerPointForOuterKnobInFrame(knobType: PSPDFResizableViewOuterKnob, frame: CGRect): CGPoint;

	configureGuideLayerWithZoomScale(layer: CAShapeLayer, zoomScale: number): void;

	longPress(recognizer: UILongPressGestureRecognizer): boolean;

	newKnobViewForType(type: PSPDFKnobType): UIView;

	outerKnobOfType(knobType: PSPDFResizableViewOuterKnob): UIView;

	updateKnobsAnimated(animated: boolean): void;
}

interface PSPDFResizableViewDelegate extends NSObjectProtocol {

	resizableViewAdjustedPropertyOfAnnotation?(resizableView: PSPDFResizableView, propertyName: string, annotation: PSPDFAnnotation): void;

	resizableViewChangedFrameOuterKnobTypeIsInitialChange?(resizableView: PSPDFResizableView, outerKnobType: PSPDFResizableViewOuterKnob, isInitialChange: boolean): void;

	resizableViewDidBeginEditing?(resizableView: PSPDFResizableView): void;

	resizableViewDidEndEditingDidChangeFrame?(resizableView: PSPDFResizableView, didChangeFrame: boolean): void;
}
declare var PSPDFResizableViewDelegate: {

	prototype: PSPDFResizableViewDelegate;
};

declare const enum PSPDFResizableViewMode {

	Idle = 0,

	Move = 1,

	Resize = 2,

	Adjust = 3
}

declare const enum PSPDFResizableViewOuterKnob {

	Unknown = 0,

	TopLeft = 1,

	TopMiddle = 2,

	TopRight = 3,

	MiddleLeft = 4,

	MiddleRight = 5,

	BottomLeft = 6,

	BottomMiddle = 7,

	BottomRight = 8
}

declare class PSPDFRichMediaAnnotation extends PSPDFAssetAnnotation {

	static alloc(): PSPDFRichMediaAnnotation; // inherited from NSObject

	static modelWithDictionaryError(dictionaryValue: NSDictionary<string, any>): PSPDFRichMediaAnnotation; // inherited from PSPDFModel

	static new(): PSPDFRichMediaAnnotation; // inherited from NSObject
}

declare class PSPDFRichMediaExecuteAction extends PSPDFAction {

	static alloc(): PSPDFRichMediaExecuteAction; // inherited from NSObject

	static modelWithDictionaryError(dictionaryValue: NSDictionary<string, any>): PSPDFRichMediaExecuteAction; // inherited from PSPDFModel

	static new(): PSPDFRichMediaExecuteAction; // inherited from NSObject

	readonly annotation: PSPDFRichMediaAnnotation;

	readonly argument: any;

	readonly command: string;

	constructor(o: { command: string; argument: any; annotation: PSPDFRichMediaAnnotation; });

	initWithCommandArgumentAnnotation(command: string, argument: any, annotation: PSPDFRichMediaAnnotation): this;
}

declare class PSPDFRoundedLabel extends UILabel {

	static alloc(): PSPDFRoundedLabel; // inherited from NSObject

	static appearance(): PSPDFRoundedLabel; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PSPDFRoundedLabel; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PSPDFRoundedLabel; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): PSPDFRoundedLabel; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PSPDFRoundedLabel; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): PSPDFRoundedLabel; // inherited from UIAppearance

	static new(): PSPDFRoundedLabel; // inherited from NSObject

	cornerRadius: number;

	rectColor: UIColor;
}

declare function PSPDFSafePreferredInterfaceOrientation(requested: UIInterfaceOrientation, supported: number): UIInterfaceOrientation;

declare class PSPDFSaveViewController extends PSPDFStaticTableViewController implements PSPDFDocumentEditorConfigurationConfigurable {

	static alloc(): PSPDFSaveViewController; // inherited from NSObject

	static new(): PSPDFSaveViewController; // inherited from NSObject

	delegate: PSPDFSaveViewControllerDelegate;

	fileName: string;

	readonly fullFilePath: string;

	showDirectoryPicker: boolean;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly documentEditorConfiguration: PSPDFDocumentEditorConfiguration; // inherited from PSPDFDocumentEditorConfigurationConfigurable

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { documentEditorConfiguration: PSPDFDocumentEditorConfiguration; }); // inherited from PSPDFDocumentEditorConfigurationConfigurable

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithDocumentEditorConfiguration(configuration: PSPDFDocumentEditorConfiguration): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

interface PSPDFSaveViewControllerDelegate extends NSObjectProtocol {

	saveViewControllerDidEndShouldSave(controller: PSPDFSaveViewController, shouldSave: boolean): void;

	saveViewControllerShouldSaveToPathError?(controller: PSPDFSaveViewController, path: string): boolean;
}
declare var PSPDFSaveViewControllerDelegate: {

	prototype: PSPDFSaveViewControllerDelegate;
};

declare class PSPDFSavedAnnotationsViewController extends PSPDFAnnotationGridViewController implements PSPDFAnnotationGridViewControllerDataSource, PSPDFStyleable {

	static alloc(): PSPDFSavedAnnotationsViewController; // inherited from NSObject

	static new(): PSPDFSavedAnnotationsViewController; // inherited from NSObject

	static sharedAnnotationStore(): PSPDFAnnotationSetStore;

	annotationStore: PSPDFAnnotationSetStore;

	barStyle: UIBarStyle; // inherited from PSPDFStyleable

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	forcesStatusBarHidden: boolean; // inherited from PSPDFStyleable

	readonly hash: number; // inherited from NSObjectProtocol

	isBarTranslucent: boolean; // inherited from PSPDFStyleable

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	annotationGridViewControllerAnnotationSetForIndexPath(annotationGridController: PSPDFAnnotationGridViewController, indexPath: NSIndexPath): PSPDFAnnotationSet;

	annotationGridViewControllerNumberOfAnnotationsInSection(annotationGridController: PSPDFAnnotationGridViewController, section: number): number;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	numberOfSectionsInAnnotationGridViewController(annotationGridController: PSPDFAnnotationGridViewController): number;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	updateToolbarAnimated(animated: boolean): void;
}

declare class PSPDFScreenAnnotation extends PSPDFAssetAnnotation {

	static alloc(): PSPDFScreenAnnotation; // inherited from NSObject

	static modelWithDictionaryError(dictionaryValue: NSDictionary<string, any>): PSPDFScreenAnnotation; // inherited from PSPDFModel

	static new(): PSPDFScreenAnnotation; // inherited from NSObject

	readonly mediaScreenWindowType: PSPDFMediaScreenWindowType;
}

declare const enum PSPDFScrollDirection {

	Horizontal = 0,

	Vertical = 1
}

declare const enum PSPDFScrollInsetAdjustment {

	None = 0,

	FixedElements = 1,

	AllElements = 2
}

declare class PSPDFScrollView extends PSPDFAvoidingScrollView implements UIGestureRecognizerDelegate, UIScrollViewDelegate {

	static alloc(): PSPDFScrollView; // inherited from NSObject

	static appearance(): PSPDFScrollView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PSPDFScrollView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PSPDFScrollView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): PSPDFScrollView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PSPDFScrollView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): PSPDFScrollView; // inherited from UIAppearance

	static new(): PSPDFScrollView; // inherited from NSObject

	readonly compoundView: UIView;

	readonly doubleTapGesture: UITapGestureRecognizer;

	readonly leftPage: PSPDFPageView;

	readonly longPressGesture: UILongPressGestureRecognizer;

	pageIndex: number;

	readonly presentationContext: PSPDFPresentationContext;

	readonly rightPage: PSPDFPageView;

	readonly selectedAnnotations: NSArray<PSPDFAnnotation>;

	readonly singleTapGesture: UITapGestureRecognizer;

	spreadIndex: number;

	zoomingEnabled: boolean;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	doubleTapped(recognizer: UITapGestureRecognizer): void;

	ensureContentIsCentered(): void;

	gestureRecognizerShouldBeRequiredToFailByGestureRecognizer(gestureRecognizer: UIGestureRecognizer, otherGestureRecognizer: UIGestureRecognizer): boolean;

	gestureRecognizerShouldBegin(gestureRecognizer: UIGestureRecognizer): boolean;

	gestureRecognizerShouldReceivePress(gestureRecognizer: UIGestureRecognizer, press: UIPress): boolean;

	gestureRecognizerShouldReceiveTouch(gestureRecognizer: UIGestureRecognizer, touch: UITouch): boolean;

	gestureRecognizerShouldRecognizeSimultaneouslyWithGestureRecognizer(gestureRecognizer: UIGestureRecognizer, otherGestureRecognizer: UIGestureRecognizer): boolean;

	gestureRecognizerShouldRequireFailureOfGestureRecognizer(gestureRecognizer: UIGestureRecognizer, otherGestureRecognizer: UIGestureRecognizer): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	longPress(recognizer: UILongPressGestureRecognizer): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	scrollViewDidEndDecelerating(scrollView: UIScrollView): void;

	scrollViewDidEndDraggingWillDecelerate(scrollView: UIScrollView, decelerate: boolean): void;

	scrollViewDidEndScrollingAnimation(scrollView: UIScrollView): void;

	scrollViewDidEndZoomingWithViewAtScale(scrollView: UIScrollView, view: UIView, scale: number): void;

	scrollViewDidScroll(scrollView: UIScrollView): void;

	scrollViewDidScrollToTop(scrollView: UIScrollView): void;

	scrollViewDidZoom(scrollView: UIScrollView): void;

	scrollViewShouldScrollToTop(scrollView: UIScrollView): boolean;

	scrollViewWillBeginDecelerating(scrollView: UIScrollView): void;

	scrollViewWillBeginDragging(scrollView: UIScrollView): void;

	scrollViewWillBeginZoomingWithView(scrollView: UIScrollView, view: UIView): void;

	scrollViewWillEndDraggingWithVelocityTargetContentOffset(scrollView: UIScrollView, velocity: CGPoint, targetContentOffset: interop.Pointer | interop.Reference<CGPoint>): void;

	self(): this;

	singleTapped(recognizer: UITapGestureRecognizer): void;

	updateScrollViewIndicator(): void;

	viewForZoomingInScrollView(scrollView: UIScrollView): UIView;
}

declare class PSPDFScrubberBar extends UIView {

	static alloc(): PSPDFScrubberBar; // inherited from NSObject

	static appearance(): PSPDFScrubberBar; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PSPDFScrubberBar; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PSPDFScrubberBar; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): PSPDFScrubberBar; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PSPDFScrubberBar; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): PSPDFScrubberBar; // inherited from UIAppearance

	static new(): PSPDFScrubberBar; // inherited from NSObject

	allowTapsOutsidePageArea: boolean;

	barTintColor: UIColor;

	dataSource: PSPDFPresentationContext;

	delegate: PSPDFScrubberBarDelegate;

	readonly emptyThumbnailImageView: UIImageView;

	leftBorderMargin: number;

	pageIndex: number;

	pageMarkerSizeMultiplier: number;

	rightBorderMargin: number;

	readonly scrubberBarHeight: number;

	readonly scrubberBarThumbSize: CGSize;

	scrubberBarType: PSPDFScrubberBarType;

	readonly smallToolbar: boolean;

	thumbnailBorderColor: UIColor;

	thumbnailMargin: number;

	readonly toolbar: UIToolbar;

	translucent: boolean;

	processTouch(touch: UITouch): boolean;

	updatePageMarker(): void;

	updateToolbarAnimated(animated: boolean): void;

	updateToolbarForced(): void;
}

interface PSPDFScrubberBarDelegate extends NSObjectProtocol {

	scrubberBarDidSelectPageAtIndex(scrubberBar: PSPDFScrubberBar, pageIndex: number): void;
}
declare var PSPDFScrubberBarDelegate: {

	prototype: PSPDFScrubberBarDelegate;
};

declare const enum PSPDFScrubberBarType {

	Horizontal = 0,

	VerticalLeft = 1,

	VerticalRight = 2
}

declare const enum PSPDFSearchBarPinning {

	Auto = 0,

	Top = 1,

	None = 2
}

declare class PSPDFSearchHighlightView extends UIView implements PSPDFAnnotationViewProtocol {

	static alloc(): PSPDFSearchHighlightView; // inherited from NSObject

	static appearance(): PSPDFSearchHighlightView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PSPDFSearchHighlightView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PSPDFSearchHighlightView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): PSPDFSearchHighlightView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PSPDFSearchHighlightView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): PSPDFSearchHighlightView; // inherited from UIAppearance

	static new(): PSPDFSearchHighlightView; // inherited from NSObject

	cornerRadiusProportion: number;

	searchResult: PSPDFSearchResult;

	selectionBackgroundColor: UIColor;

	PDFScale: number; // inherited from PSPDFAnnotationViewProtocol

	annotation: PSPDFAnnotation; // inherited from PSPDFAnnotationViewProtocol

	configuration: PSPDFConfiguration; // inherited from PSPDFAnnotationViewProtocol

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	pageView: PSPDFPageView; // inherited from PSPDFAnnotationViewProtocol

	selected: boolean; // inherited from PSPDFAnnotationViewProtocol

	readonly shouldSyncRemovalFromSuperview: boolean; // inherited from PSPDFAnnotationViewProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	zIndex: number; // inherited from PSPDFAnnotationViewProtocol

	readonly  // inherited from NSObjectProtocol

	zoomScale: number; // inherited from PSPDFAnnotationViewProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	didChangePageBounds(bounds: CGRect): void;

	didHidePageView(pageView: PSPDFPageView): void;

	didShowPageView(pageView: PSPDFPageView): void;

	didTapAtPoint(point: CGPoint): void;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	popupAnimation(): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	willRemoveFromSuperview(): void;
}

declare class PSPDFSearchHighlightViewManager extends NSObject {

	static alloc(): PSPDFSearchHighlightViewManager; // inherited from NSObject

	static new(): PSPDFSearchHighlightViewManager; // inherited from NSObject

	readonly dataSource: PSPDFSearchHighlightViewManagerDataSource;

	readonly hasVisibleSearchResults: boolean;

	constructor(o: { dataSource: PSPDFSearchHighlightViewManagerDataSource; });

	addHighlightSearchResultsAnimated(searchResults: NSArray<PSPDFSearchResult>, animated: boolean): void;

	animateSearchHighlight(searchResult: PSPDFSearchResult): void;

	clearHighlightedSearchResultsAnimated(animated: boolean): void;

	initWithDataSource(dataSource: PSPDFSearchHighlightViewManagerDataSource): this;
}

interface PSPDFSearchHighlightViewManagerDataSource extends PSPDFOverridable {

	shouldHighlightSearchResults: boolean;

	visiblePageViews: NSArray<PSPDFPageView>;
}
declare var PSPDFSearchHighlightViewManagerDataSource: {

	prototype: PSPDFSearchHighlightViewManagerDataSource;
};

declare const enum PSPDFSearchMode {

	Modal = 0,

	Inline = 1
}

declare class PSPDFSearchResult extends PSPDFModel {

	static alloc(): PSPDFSearchResult; // inherited from NSObject

	static modelWithDictionaryError(dictionaryValue: NSDictionary<string, any>): PSPDFSearchResult; // inherited from PSPDFModel

	static new(): PSPDFSearchResult; // inherited from NSObject

	readonly annotation: PSPDFAnnotation;

	readonly document: PSPDFDocument;

	readonly documentUID: string;

	readonly pageIndex: number;

	readonly previewText: string;

	readonly range: NSRange;

	readonly rangeInPreviewText: NSRange;

	readonly selection: PSPDFTextBlock;

	constructor(o: { document: PSPDFDocument; pageIndex: number; range: NSRange; previewText: string; rangeInPreviewText: NSRange; selection: PSPDFTextBlock; annotation: PSPDFAnnotation; });

	constructor(o: { documentUID: string; pageIndex: number; range: NSRange; previewText: string; rangeInPreviewText: NSRange; selection: PSPDFTextBlock; annotation: PSPDFAnnotation; });

	initWithDocumentPageIndexRangePreviewTextRangeInPreviewTextSelectionAnnotation(document: PSPDFDocument, pageIndex: number, range: NSRange, previewText: string, rangeInPreviewText: NSRange, selection: PSPDFTextBlock, annotation: PSPDFAnnotation): this;

	initWithDocumentUIDPageIndexRangePreviewTextRangeInPreviewTextSelectionAnnotation(documentUID: string, pageIndex: number, range: NSRange, previewText: string, rangeInPreviewText: NSRange, selection: PSPDFTextBlock, annotation: PSPDFAnnotation): this;
}

declare const enum PSPDFSearchResultScope {

	PageRange = 0,

	Document = 1
}

interface PSPDFSearchResultViewable extends NSObjectProtocol {

	configureWithSearchResult(searchResult: PSPDFSearchResult): void;
}
declare var PSPDFSearchResultViewable: {

	prototype: PSPDFSearchResultViewable;
};

interface PSPDFSearchScopeViewable extends NSObjectProtocol {

	configureWithDocumentScopePageIndexRangeResults(document: PSPDFDocument, scope: PSPDFSearchResultScope, pageIndexRange: NSRange, results: number): void;
}
declare var PSPDFSearchScopeViewable: {

	prototype: PSPDFSearchScopeViewable;
};

declare const enum PSPDFSearchStatus {

	Idle = 0,

	Active = 1,

	Finished = 2,

	FinishedNoText = 3,

	Cancelled = 4
}

interface PSPDFSearchStatusViewable extends NSObjectProtocol {

	configureWithSearchStatusResultsPageIndexPageCount(searchStatus: PSPDFSearchStatus, results: number, pageIndex: number, pageCount: number): void;
}
declare var PSPDFSearchStatusViewable: {

	prototype: PSPDFSearchStatusViewable;
};

declare class PSPDFSearchViewController extends PSPDFBaseTableViewController implements PSPDFStyleable, PSPDFTextSearchDelegate, UISearchBarDelegate, UISearchDisplayDelegate {

	static alloc(): PSPDFSearchViewController; // inherited from NSObject

	static new(): PSPDFSearchViewController; // inherited from NSObject

	static resultCellClass(): typeof NSObject;

	static scopeHeaderClass(): typeof NSObject;

	static statusFooterClass(): typeof NSObject;

	clearHighlightsWhenClosed: boolean;

	readonly createSearchBar: UISearchBar;

	delegate: PSPDFSearchViewControllerDelegate;

	document: PSPDFDocument;

	maximumNumberOfSearchResultsDisplayed: number;

	numberOfPreviewTextLines: number;

	restoreLastSearchResult: boolean;

	readonly searchBar: UISearchBar;

	searchBarPinning: PSPDFSearchBarPinning;

	readonly searchResults: NSArray<PSPDFSearchResult>;

	readonly searchStatus: PSPDFSearchStatus;

	searchText: string;

	searchVisiblePagesFirst: boolean;

	searchableAnnotationTypes: PSPDFAnnotationType;

	showsCancelButton: boolean;

	readonly textSearch: PSPDFTextSearch;

	useOutlineForPageNames: boolean;

	barStyle: UIBarStyle; // inherited from PSPDFStyleable

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	forcesStatusBarHidden: boolean; // inherited from PSPDFStyleable

	readonly hash: number; // inherited from NSObjectProtocol

	isBarTranslucent: boolean; // inherited from PSPDFStyleable

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { document: PSPDFDocument; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	didCancelSearchTermIsFullSearch(textSearch: PSPDFTextSearch, searchTerm: string, isFullSearch: boolean): void;

	didFinishSearchTermSearchResultsIsFullSearchPageTextFound(textSearch: PSPDFTextSearch, searchTerm: string, searchResults: NSArray<PSPDFSearchResult>, isFullSearch: boolean, pageTextFound: boolean): void;

	didUpdateSearchTermNewSearchResultsPageIndex(textSearch: PSPDFTextSearch, searchTerm: string, searchResults: NSArray<PSPDFSearchResult>, pageIndex: number): void;

	filterContentForSearchTextScope(searchText: string, scope: string): void;

	initWithDocument(document: PSPDFDocument): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	positionForBar(bar: UIBarPositioning): UIBarPosition;

	respondsToSelector(aSelector: string): boolean;

	restartSearch(): void;

	retainCount(): number;

	searchBarBookmarkButtonClicked(searchBar: UISearchBar): void;

	searchBarCancelButtonClicked(searchBar: UISearchBar): void;

	searchBarResultsListButtonClicked(searchBar: UISearchBar): void;

	searchBarSearchButtonClicked(searchBar: UISearchBar): void;

	searchBarSelectedScopeButtonIndexDidChange(searchBar: UISearchBar, selectedScope: number): void;

	searchBarShouldBeginEditing(searchBar: UISearchBar): boolean;

	searchBarShouldChangeTextInRangeReplacementText(searchBar: UISearchBar, range: NSRange, text: string): boolean;

	searchBarShouldEndEditing(searchBar: UISearchBar): boolean;

	searchBarTextDidBeginEditing(searchBar: UISearchBar): void;

	searchBarTextDidChange(searchBar: UISearchBar, searchText: string): void;

	searchBarTextDidEndEditing(searchBar: UISearchBar): void;

	searchDisplayControllerDidBeginSearch(controller: UISearchDisplayController): void;

	searchDisplayControllerDidEndSearch(controller: UISearchDisplayController): void;

	searchDisplayControllerDidHideSearchResultsTableView(controller: UISearchDisplayController, tableView: UITableView): void;

	searchDisplayControllerDidLoadSearchResultsTableView(controller: UISearchDisplayController, tableView: UITableView): void;

	searchDisplayControllerDidShowSearchResultsTableView(controller: UISearchDisplayController, tableView: UITableView): void;

	searchDisplayControllerShouldReloadTableForSearchScope(controller: UISearchDisplayController, searchOption: number): boolean;

	searchDisplayControllerShouldReloadTableForSearchString(controller: UISearchDisplayController, searchString: string): boolean;

	searchDisplayControllerWillBeginSearch(controller: UISearchDisplayController): void;

	searchDisplayControllerWillEndSearch(controller: UISearchDisplayController): void;

	searchDisplayControllerWillHideSearchResultsTableView(controller: UISearchDisplayController, tableView: UITableView): void;

	searchDisplayControllerWillShowSearchResultsTableView(controller: UISearchDisplayController, tableView: UITableView): void;

	searchDisplayControllerWillUnloadSearchResultsTableView(controller: UISearchDisplayController, tableView: UITableView): void;

	searchResultForIndexPath(indexPath: NSIndexPath): PSPDFSearchResult;

	self(): this;

	setSearchStatusUpdateTable(searchStatus: PSPDFSearchStatus, updateTable: boolean): void;

	willStartSearchTermIsFullSearch(textSearch: PSPDFTextSearch, searchTerm: string, isFullSearch: boolean): void;
}

interface PSPDFSearchViewControllerDelegate extends PSPDFOverridable, PSPDFTextSearchDelegate {

	searchViewControllerDidClearAllSearchResults?(searchController: PSPDFSearchViewController): void;

	searchViewControllerDidTapSearchResult?(searchController: PSPDFSearchViewController, searchResult: PSPDFSearchResult): void;

	searchViewControllerGetVisiblePages?(searchController: PSPDFSearchViewController): NSArray<number>;

	searchViewControllerSearchRangeForScope?(searchController: PSPDFSearchViewController, scope: string): NSIndexSet;

	searchViewControllerTextSearchObject?(searchController: PSPDFSearchViewController): PSPDFTextSearch;
}
declare var PSPDFSearchViewControllerDelegate: {

	prototype: PSPDFSearchViewControllerDelegate;
};

declare class PSPDFSegmentedControl extends UISegmentedControl {

	static alloc(): PSPDFSegmentedControl; // inherited from NSObject

	static appearance(): PSPDFSegmentedControl; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PSPDFSegmentedControl; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PSPDFSegmentedControl; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): PSPDFSegmentedControl; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PSPDFSegmentedControl; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): PSPDFSegmentedControl; // inherited from UIAppearance

	static new(): PSPDFSegmentedControl; // inherited from NSObject

	hitTestEdgeInsets: UIEdgeInsets;
}

declare class PSPDFSelectableCollectionViewCell extends UICollectionViewCell {

	static alloc(): PSPDFSelectableCollectionViewCell; // inherited from NSObject

	static appearance(): PSPDFSelectableCollectionViewCell; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PSPDFSelectableCollectionViewCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PSPDFSelectableCollectionViewCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): PSPDFSelectableCollectionViewCell; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PSPDFSelectableCollectionViewCell; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): PSPDFSelectableCollectionViewCell; // inherited from UIAppearance

	static new(): PSPDFSelectableCollectionViewCell; // inherited from NSObject

	selectableCellColor: UIColor;

	selectableCellStyle: PSPDFSelectableCollectionViewCellStyle;
}

declare const enum PSPDFSelectableCollectionViewCellStyle {

	None = 0,

	Checkmark = 1,

	Border = 2
}

declare class PSPDFSelectionState extends NSObject implements NSSecureCoding {

	static alloc(): PSPDFSelectionState; // inherited from NSObject

	static new(): PSPDFSelectionState; // inherited from NSObject

	static stateForSelectionView(selectionView: PSPDFTextSelectionView): PSPDFSelectionState;

	readonly UID: string;

	readonly selectedGlyphs: NSArray<PSPDFGlyph>;

	readonly selectedImage: PSPDFImageInfo;

	readonly selectionPageIndex: number;

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	encodeWithCoder(aCoder: NSCoder): void;

	initWithCoder(aDecoder: NSCoder): this;

	isEqualToSelectionState(selectionState: PSPDFSelectionState): boolean;
}

declare class PSPDFSelectionView extends UIView {

	static alloc(): PSPDFSelectionView; // inherited from NSObject

	static appearance(): PSPDFSelectionView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PSPDFSelectionView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PSPDFSelectionView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): PSPDFSelectionView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PSPDFSelectionView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): PSPDFSelectionView; // inherited from UIAppearance

	static new(): PSPDFSelectionView; // inherited from NSObject

	allowedTouchTypes: NSArray<number>;

	delegate: PSPDFSelectionViewDelegate;

	rects: NSArray<any>;

	selectionAlpha: number;

	readonly tapGestureRecognizer: UITapGestureRecognizer;
}

interface PSPDFSelectionViewDelegate extends NSObjectProtocol {

	selectionViewCancelledWithSelectedRect?(selectionView: PSPDFSelectionView, rect: CGRect): void;

	selectionViewFinishedWithSelectedRect?(selectionView: PSPDFSelectionView, rect: CGRect): void;

	selectionViewShouldStartSelectionAtPoint?(selectionView: PSPDFSelectionView, point: CGPoint): boolean;

	selectionViewSingleTappedWithGestureRecognizer?(selectionView: PSPDFSelectionView, gestureRecognizer: UITapGestureRecognizer): void;

	selectionViewUpdateSelectedRect?(selectionView: PSPDFSelectionView, rect: CGRect): void;
}
declare var PSPDFSelectionViewDelegate: {

	prototype: PSPDFSelectionViewDelegate;
};

declare function PSPDFSetLocalizationBlock(localizationBlock: (p1: string) => string): void;

declare function PSPDFSetLocalizationDictionary(localizationDict: NSDictionary<string, NSDictionary<string, string>>): void;

interface PSPDFSettings extends NSObjectProtocol {

	boolForKey(key: string): boolean;

	objectForKeyedSubscript(key: any): any;
}
declare var PSPDFSettings: {

	prototype: PSPDFSettings;
};

declare const enum PSPDFSettingsOptions {

	None = 0,

	ScrollDirection = 1,

	PageTransition = 2,

	Appearance = 4,

	Brightness = 8,

	PageMode = 16,

	Default = 15,

	All = 4294967295
}

declare class PSPDFSettingsViewController extends PSPDFStaticTableViewController {

	static alloc(): PSPDFSettingsViewController; // inherited from NSObject

	static new(): PSPDFSettingsViewController; // inherited from NSObject

	pdfViewController: PSPDFViewController;
}

declare function PSPDFSharedApplication(): UIApplication;

declare class PSPDFSignatureCell extends UITableViewCell {

	static alloc(): PSPDFSignatureCell; // inherited from NSObject

	static appearance(): PSPDFSignatureCell; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PSPDFSignatureCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PSPDFSignatureCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): PSPDFSignatureCell; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PSPDFSignatureCell; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): PSPDFSignatureCell; // inherited from UIAppearance

	static new(): PSPDFSignatureCell; // inherited from NSObject
}

declare class PSPDFSignatureDigest extends NSObject {

	static alloc(): PSPDFSignatureDigest; // inherited from NSObject

	static new(): PSPDFSignatureDigest; // inherited from NSObject

	readonly bio: interop.Pointer | interop.Reference<any>;

	constructor(o: { BIO: interop.Pointer | interop.Reference<any>; });

	digestData(data: NSData): void;

	digestRangeFileHandle(range: NSRange, fileHandle: NSFileHandle): void;

	initWithBIO(bio: interop.Pointer | interop.Reference<any>): this;
}

declare class PSPDFSignatureFormElement extends PSPDFFormElement {

	static alloc(): PSPDFSignatureFormElement; // inherited from NSObject

	static modelWithDictionaryError(dictionaryValue: NSDictionary<string, any>): PSPDFSignatureFormElement; // inherited from PSPDFModel

	static new(): PSPDFSignatureFormElement; // inherited from NSObject

	readonly isSigned: boolean;

	readonly overlappingInkSignature: PSPDFInkAnnotation;

	signatureInfo: PSPDFSignatureInfo;

	drawArrowWithTextAndColorInContext(text: string, color: UIColor, context: any): void;
}

declare class PSPDFSignatureInfo extends PSPDFModel {

	static alloc(): PSPDFSignatureInfo; // inherited from NSObject

	static modelWithDictionaryError(dictionaryValue: NSDictionary<string, any>): PSPDFSignatureInfo; // inherited from PSPDFModel

	static new(): PSPDFSignatureInfo; // inherited from NSObject

	readonly byteRange: NSArray<any>;

	readonly contents: NSData;

	readonly creationDate: Date;

	readonly filter: string;

	readonly name: string;

	readonly placeholderBytes: number;

	readonly propBuild: PSPDFSignaturePropBuild;

	readonly reason: string;

	readonly references: NSArray<any>;

	readonly subFilter: string;
}

declare class PSPDFSignatureManager extends NSObject {

	static alloc(): PSPDFSignatureManager; // inherited from NSObject

	static new(): PSPDFSignatureManager; // inherited from NSObject

	readonly registeredSigners: NSArray<PSPDFSigner>;

	readonly trustedCertificates: NSArray<PSPDFX509>;

	addTrustedCertificate(x509: PSPDFX509): void;

	clearRegisteredSigners(): void;

	clearTrustedCertificates(): void;

	registerSigner(signer: PSPDFSigner): void;
}

declare class PSPDFSignaturePropBuild extends PSPDFModel {

	static alloc(): PSPDFSignaturePropBuild; // inherited from NSObject

	static modelWithDictionaryError(dictionaryValue: NSDictionary<string, any>): PSPDFSignaturePropBuild; // inherited from PSPDFModel

	static new(): PSPDFSignaturePropBuild; // inherited from NSObject

	readonly app: PSPDFSignaturePropBuildEntry;

	readonly filter: PSPDFSignaturePropBuildEntry;

	readonly pubSec: PSPDFSignaturePropBuildEntry;

	readonly sigQ: PSPDFSignaturePropBuildEntry;
}

declare class PSPDFSignaturePropBuildEntry extends PSPDFModel {

	static alloc(): PSPDFSignaturePropBuildEntry; // inherited from NSObject

	static modelWithDictionaryError(dictionaryValue: NSDictionary<string, any>): PSPDFSignaturePropBuildEntry; // inherited from PSPDFModel

	static new(): PSPDFSignaturePropBuildEntry; // inherited from NSObject

	readonly OS: string;

	readonly R: number;

	readonly REx: string;

	readonly V: number;

	readonly date: string;

	readonly name: string;

	readonly nonEFontNoWarn: number;

	readonly preRelease: number;

	readonly trustedMode: number;
}

declare class PSPDFSignatureSelectorViewController extends PSPDFStatefulTableViewController implements PSPDFStyleable {

	static alloc(): PSPDFSignatureSelectorViewController; // inherited from NSObject

	static new(): PSPDFSignatureSelectorViewController; // inherited from NSObject

	readonly addSignatureButtonItem: UIBarButtonItem;

	delegate: PSPDFSignatureSelectorViewControllerDelegate;

	readonly doneButtonItem: UIBarButtonItem;

	signatureStore: PSPDFSignatureStore;

	barStyle: UIBarStyle; // inherited from PSPDFStyleable

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	forcesStatusBarHidden: boolean; // inherited from PSPDFStyleable

	readonly hash: number; // inherited from NSObjectProtocol

	isBarTranslucent: boolean; // inherited from PSPDFStyleable

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	addSignatureAction(sender: any): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	doneAction(sender: any): void;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

interface PSPDFSignatureSelectorViewControllerDelegate extends PSPDFOverridable {

	signatureSelectorViewControllerDidSelectSignature(signatureSelectorController: PSPDFSignatureSelectorViewController, signature: PSPDFInkAnnotation): void;

	signatureSelectorViewControllerWillCreateNewSignature(signatureSelectorController: PSPDFSignatureSelectorViewController): void;
}
declare var PSPDFSignatureSelectorViewControllerDelegate: {

	prototype: PSPDFSignatureSelectorViewControllerDelegate;
};

declare class PSPDFSignatureStatus extends NSObject {

	static alloc(): PSPDFSignatureStatus; // inherited from NSObject

	static new(): PSPDFSignatureStatus; // inherited from NSObject

	readonly problems: NSArray<string>;

	severity: PSPDFSignatureStatusSeverity;

	readonly signer: string;

	readonly signingDate: Date;

	readonly summary: string;

	readonly wasModified: boolean;

	constructor(o: { signer: string; signingDate: Date; wasModified: boolean; });

	initWithSignerSigningDateWasModified(signer: string, date: Date, wasModified: boolean): this;

	reportSignatureProblem(error: number): void;
}

declare const enum PSPDFSignatureStatusSeverity {

	None = 0,

	Warning = 1,

	Error = 2
}

interface PSPDFSignatureStore extends NSObjectProtocol, NSSecureCoding {

	signatures: NSArray<PSPDFInkAnnotation>;

	storeName: string;

	addSignature(signature: PSPDFInkAnnotation): void;

	initWithStoreName?(storeName: string): PSPDFSignatureStore;

	removeSignature(signature: PSPDFInkAnnotation): boolean;
}
declare var PSPDFSignatureStore: {

	prototype: PSPDFSignatureStore;
};

declare class PSPDFSignatureValidator extends NSObject {

	static alloc(): PSPDFSignatureValidator; // inherited from NSObject

	static new(): PSPDFSignatureValidator; // inherited from NSObject

	readonly signatureFormElement: PSPDFSignatureFormElement;

	constructor(o: { signatureFormElement: PSPDFSignatureFormElement; });

	initWithSignatureFormElement(formElement: PSPDFSignatureFormElement): this;

	verifySignatureWithTrustedCertificatesError(trustedCertificates: NSArray<PSPDFX509>): PSPDFSignatureStatus;
}

declare class PSPDFSignatureViewController extends PSPDFBaseViewController implements PSPDFStyleable {

	static alloc(): PSPDFSignatureViewController; // inherited from NSObject

	static new(): PSPDFSignatureViewController; // inherited from NSObject

	delegate: PSPDFSignatureViewControllerDelegate;

	readonly drawView: PSPDFDrawView;

	keepLandscapeAspectRatio: boolean;

	readonly lines: NSArray<NSArray<NSValue>>;

	menuColors: NSArray<UIColor>;

	naturalDrawingEnabled: boolean;

	barStyle: UIBarStyle; // inherited from PSPDFStyleable

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	forcesStatusBarHidden: boolean; // inherited from PSPDFStyleable

	readonly hash: number; // inherited from NSObjectProtocol

	isBarTranslucent: boolean; // inherited from PSPDFStyleable

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	cancel(sender: any): void;

	class(): typeof NSObject;

	clear(sender: any): void;

	color(sender: PSPDFColorButton): void;

	colorButtonForColor(color: UIColor): PSPDFColorButton;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	done(sender: any): void;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

interface PSPDFSignatureViewControllerDelegate extends PSPDFOverridable {

	signatureViewControllerDidCancel?(signatureController: PSPDFSignatureViewController): void;

	signatureViewControllerDidSave?(signatureController: PSPDFSignatureViewController): void;
}
declare var PSPDFSignatureViewControllerDelegate: {

	prototype: PSPDFSignatureViewControllerDelegate;
};

declare class PSPDFSignedFormElementViewController extends PSPDFBaseTableViewController {

	static alloc(): PSPDFSignedFormElementViewController; // inherited from NSObject

	static new(): PSPDFSignedFormElementViewController; // inherited from NSObject

	delegate: PSPDFSignedFormElementViewControllerDelegate;

	readonly formElement: PSPDFSignatureFormElement;

	constructor(o: { signatureFormElement: PSPDFSignatureFormElement; });

	initWithSignatureFormElement(element: PSPDFSignatureFormElement): this;

	verifySignatureWithTrustedCertificatesError(trustedCertificates: NSArray<PSPDFX509>): PSPDFSignatureStatus;
}

interface PSPDFSignedFormElementViewControllerDelegate extends NSObjectProtocol {

	signedFormElementViewControllerRemovedSignatureFromDocument?(controller: PSPDFSignedFormElementViewController, document: PSPDFDocument): void;
}
declare var PSPDFSignedFormElementViewControllerDelegate: {

	prototype: PSPDFSignedFormElementViewControllerDelegate;
};

declare class PSPDFSigner extends NSObject {

	static alloc(): PSPDFSigner; // inherited from NSObject

	static new(): PSPDFSigner; // inherited from NSObject

	readonly displayName: string;

	readonly filter: string;

	readonly signingAlgorithm: PSPDFSigningAlgorithm;

	readonly subFilter: string;

	requestSigningCertificateCompletionBlock(sourceController: any, completionBlock: (p1: PSPDFX509, p2: NSError) => void): void;

	signFormElementWithCertificateWriteToCompletionBlock(element: PSPDFSignatureFormElement, x509: PSPDFX509, path: string, completionBlock: (p1: boolean, p2: PSPDFDocument, p3: NSError) => void): void;

	signHashAlgorithmError(hash: NSData, algorithm: PSPDFSigningAlgorithm): NSData;
}

declare const enum PSPDFSignerError {

	None = 0,

	NoFormElementSet = 1,

	CannotNotCreatePKCS7 = 256,

	CannotNotAddSignatureToPKCS7 = 257,

	CannotNotInitPKCS7 = 258,

	CannotGeneratePKCS7Signature = 259,

	CannotWritePKCS7Signature = 260,

	OpenSSLCannotVerifySignature = 261
}

declare var PSPDFSignerErrorDomain: string;

declare const enum PSPDFSigningAlgorithm {

	RSASHA256 = 0
}

declare class PSPDFSoundAnnotation extends PSPDFAnnotation {

	static alloc(): PSPDFSoundAnnotation; // inherited from NSObject

	static modelWithDictionaryError(dictionaryValue: NSDictionary<string, any>): PSPDFSoundAnnotation; // inherited from PSPDFModel

	static new(): PSPDFSoundAnnotation; // inherited from NSObject

	readonly bits: number;

	readonly canRecord: boolean;

	readonly channels: number;

	readonly controller: PSPDFSoundAnnotationController;

	readonly encoding: string;

	iconName: string;

	readonly rate: number;

	readonly soundData: NSData;

	readonly soundURL: NSURL;

	static readonly recordingAnnotationAvailable: boolean;

	constructor(o: { recorder: void; });

	constructor(o: { recorderWithOptions: NSDictionary<string, any>; });

	constructor(o: { URL: NSURL; });

	initRecorder(): this;

	initRecorderWithOptions(options: NSDictionary<string, any>): this;

	initWithURLError(soundURL: NSURL): this;

	loadAttributesFromAudioFile(): boolean;
}

declare var PSPDFSoundAnnotationChangedStateNotification: string;

declare class PSPDFSoundAnnotationController extends NSObject {

	static alloc(): PSPDFSoundAnnotationController; // inherited from NSObject

	static new(): PSPDFSoundAnnotationController; // inherited from NSObject

	static requestRecordPermission(block: (p1: boolean) => void): void;

	static stopRecordingOrPlaybackForAllExcept(sender: any): void;

	readonly annotation: PSPDFSoundAnnotation;

	readonly audioPlayer: AVAudioPlayer;

	readonly playbackDuration: number;

	readonly state: PSPDFSoundAnnotationState;

	constructor(o: { soundAnnotation: PSPDFSoundAnnotation; });

	discardRecording(): void;

	initWithSoundAnnotation(annotation: PSPDFSoundAnnotation): this;

	pause(): void;

	startPlayback(): boolean;

	startRecording(): boolean;

	stop(): boolean;
}

declare var PSPDFSoundAnnotationEncodingALaw: string;

declare var PSPDFSoundAnnotationEncodingMuLaw: string;

declare var PSPDFSoundAnnotationEncodingRaw: string;

declare var PSPDFSoundAnnotationEncodingSigned: string;

declare const enum PSPDFSoundAnnotationState {

	Stopped = 0,

	Recording = 1,

	RecordingPaused = 2,

	Playing = 3,

	PlaybackPaused = 4
}

declare var PSPDFSoundAnnotationStopAllNotification: string;

declare class PSPDFSpeechController extends NSObject {

	static alloc(): PSPDFSpeechController; // inherited from NSObject

	static new(): PSPDFSpeechController; // inherited from NSObject

	readonly languageCodes: NSArray<string>;

	pitchMultiplier: number;

	selectedLanguage: string;

	speakRate: number;

	readonly speechSynthesizer: AVSpeechSynthesizer;

	speakTextOptionsDelegate(speechString: string, options: NSDictionary<string, any>, delegate: AVSpeechSynthesizerDelegate): void;

	stopSpeakingForDelegate(delegate: AVSpeechSynthesizerDelegate): boolean;
}

declare var PSPDFSpeechSynthesizerAutoDetectLanguage: string;

declare var PSPDFSpeechSynthesizerLanguageHintKey: string;

declare var PSPDFSpeechSynthesizerLanguageKey: string;

declare class PSPDFSpinnerCell extends PSPDFTableViewCell {

	static alloc(): PSPDFSpinnerCell; // inherited from NSObject

	static appearance(): PSPDFSpinnerCell; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PSPDFSpinnerCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PSPDFSpinnerCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): PSPDFSpinnerCell; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PSPDFSpinnerCell; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): PSPDFSpinnerCell; // inherited from UIAppearance

	static new(): PSPDFSpinnerCell; // inherited from NSObject

	readonly spinner: UIActivityIndicatorView;

	alignTextLabel(): void;
}

declare class PSPDFSquareAnnotation extends PSPDFAbstractShapeAnnotation {

	static alloc(): PSPDFSquareAnnotation; // inherited from NSObject

	static modelWithDictionaryError(dictionaryValue: NSDictionary<string, any>): PSPDFSquareAnnotation; // inherited from PSPDFModel

	static new(): PSPDFSquareAnnotation; // inherited from NSObject

	readonly bezierPath: UIBezierPath;
}

declare class PSPDFSquigglyAnnotation extends PSPDFAbstractTextOverlayAnnotation {

	static alloc(): PSPDFSquigglyAnnotation; // inherited from NSObject

	static modelWithDictionaryError(dictionaryValue: NSDictionary<string, any>): PSPDFSquigglyAnnotation; // inherited from PSPDFModel

	static new(): PSPDFSquigglyAnnotation; // inherited from NSObject

	static textOverlayAnnotationWithGlyphsPageRotation(glyphs: NSArray<PSPDFGlyph>, pageRotation: number): PSPDFSquigglyAnnotation; // inherited from PSPDFAbstractTextOverlayAnnotation
}

declare class PSPDFStampAnnotation extends PSPDFAnnotation {

	static alloc(): PSPDFStampAnnotation; // inherited from NSObject

	static modelWithDictionaryError(dictionaryValue: NSDictionary<string, any>): PSPDFStampAnnotation; // inherited from PSPDFModel

	static new(): PSPDFStampAnnotation; // inherited from NSObject

	static stampColorForSubject(subject: string): UIColor;

	image: UIImage;

	imageTransform: CGAffineTransform;

	localizedSubject: string;

	subtext: string;

	constructor(o: { image: UIImage; });

	constructor(o: { subject: string; });

	initWithImage(image: UIImage): this;

	initWithSubject(subject: string): this;

	loadImageWithTransformError(transform: interop.Pointer | interop.Reference<CGAffineTransform>): UIImage;

	sizeThatFits(size: CGSize): CGSize;

	sizeToFit(): void;
}

declare class PSPDFStampViewController extends PSPDFAnnotationGridViewController implements PSPDFAnnotationGridViewControllerDataSource, PSPDFTextStampViewControllerDelegate {

	static alloc(): PSPDFStampViewController; // inherited from NSObject

	static defaultStampAnnotations(): NSArray<PSPDFStampAnnotation>;

	static new(): PSPDFStampViewController; // inherited from NSObject

	static setDefaultStampAnnotations(defaultStampAnnotations: NSArray<PSPDFStampAnnotation>): void;

	customStampEnabled: boolean;

	dateStampsEnabled: boolean;

	stamps: NSArray<PSPDFStampAnnotation>;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	annotationGridViewControllerAnnotationSetForIndexPath(annotationGridController: PSPDFAnnotationGridViewController, indexPath: NSIndexPath): PSPDFAnnotationSet;

	annotationGridViewControllerNumberOfAnnotationsInSection(annotationGridController: PSPDFAnnotationGridViewController, section: number): number;

	class(): typeof NSObject;

	classForClass(originalClass: typeof NSObject): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	defaultDateStamps(): NSArray<PSPDFStampAnnotation>;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	numberOfSectionsInAnnotationGridViewController(annotationGridController: PSPDFAnnotationGridViewController): number;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	textStampViewControllerDidCreateAnnotation(stampController: PSPDFTextStampViewController, stampAnnotation: PSPDFStampAnnotation): void;
}

declare class PSPDFStatefulTableViewController extends PSPDFBaseTableViewController {

	static alloc(): PSPDFStatefulTableViewController; // inherited from NSObject

	static new(): PSPDFStatefulTableViewController; // inherited from NSObject

	controllerState: PSPDFStatefulTableViewState;

	emptyView: UIView;

	loadingView: UIView;

	setControllerStateAnimated(controllerState: PSPDFStatefulTableViewState, animated: boolean): void;
}

declare const enum PSPDFStatefulTableViewState {

	Loading = 0,

	Empty = 1,

	Finished = 2
}

declare class PSPDFStaticTableViewController extends PSPDFBaseTableViewController {

	static alloc(): PSPDFStaticTableViewController; // inherited from NSObject

	static new(): PSPDFStaticTableViewController; // inherited from NSObject
}

declare class PSPDFStatusHUD extends NSObject {

	static alloc(): PSPDFStatusHUD; // inherited from NSObject

	static items(): NSArray<PSPDFStatusHUDItem>;

	static new(): PSPDFStatusHUD; // inherited from NSObject

	static popAllItemsAnimatedCompletion(animated: boolean, completion: () => void): void;
}

declare class PSPDFStatusHUDItem extends NSObject {

	static alloc(): PSPDFStatusHUDItem; // inherited from NSObject

	static errorWithText(text: string): PSPDFStatusHUDItem;

	static indeterminateProgressWithText(text: string): PSPDFStatusHUDItem;

	static itemWithTextImage(text: string, image: UIImage): PSPDFStatusHUDItem;

	static new(): PSPDFStatusHUDItem; // inherited from NSObject

	static progressWithText(text: string): PSPDFStatusHUDItem;

	static successWithText(text: string): PSPDFStatusHUDItem;

	progress: number;

	subtitle: string;

	text: string;

	title: string;

	view: UIView;

	popAnimatedCompletion(animated: boolean, completion: () => void): void;

	pushAndPopWithDelayAnimatedCompletion(interval: number, animated: boolean, completion: () => void): void;

	pushAnimatedCompletion(animated: boolean, completion: () => void): void;

	setHUDStyle(style: PSPDFStatusHUDStyle): void;
}

declare const enum PSPDFStatusHUDStyle {

	None = 0,

	Clear = 1,

	Black = 2,

	Gradient = 3
}

declare class PSPDFStatusHUDView extends UIView {

	static alloc(): PSPDFStatusHUDView; // inherited from NSObject

	static appearance(): PSPDFStatusHUDView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PSPDFStatusHUDView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PSPDFStatusHUDView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): PSPDFStatusHUDView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PSPDFStatusHUDView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): PSPDFStatusHUDView; // inherited from UIAppearance

	static new(): PSPDFStatusHUDView; // inherited from NSObject

	item: PSPDFStatusHUDItem;
}

declare class PSPDFStrikeOutAnnotation extends PSPDFAbstractTextOverlayAnnotation {

	static alloc(): PSPDFStrikeOutAnnotation; // inherited from NSObject

	static modelWithDictionaryError(dictionaryValue: NSDictionary<string, any>): PSPDFStrikeOutAnnotation; // inherited from PSPDFModel

	static new(): PSPDFStrikeOutAnnotation; // inherited from NSObject

	static textOverlayAnnotationWithGlyphsPageRotation(glyphs: NSArray<PSPDFGlyph>, pageRotation: number): PSPDFStrikeOutAnnotation; // inherited from PSPDFAbstractTextOverlayAnnotation
}

declare function PSPDFStringFromAnnotationType(annotationType: PSPDFAnnotationType): string;

declare function PSPDFStringFromGlyphs(glyphs: NSArray<PSPDFGlyph>): string;

declare var PSPDFStyleManagerColorPresetKey: string;

declare var PSPDFStyleManagerGenericStylesKey: string;

declare var PSPDFStyleManagerLastUsedStylesKey: string;

interface PSPDFStyleable extends NSObjectProtocol {

	barStyle?: UIBarStyle;

	forcesStatusBarHidden?: boolean;

	isBarTranslucent?: boolean;
}
declare var PSPDFStyleable: {

	prototype: PSPDFStyleable;
};

declare var PSPDFStylusButtonActionEraser: string;

declare var PSPDFStylusButtonActionInk: string;

declare var PSPDFStylusButtonActionRedo: string;

declare var PSPDFStylusButtonActionUndo: string;

declare const enum PSPDFStylusConnectionStatus {

	Off = 0,

	Scanning = 1,

	Pairing = 2,

	Connected = 3,

	Disconnected = 4
}

declare function PSPDFStylusConnectionStatusToString(connectionStatus: PSPDFStylusConnectionStatus): string;

interface PSPDFStylusDriver extends NSObjectProtocol {

	connectedStylusInfo: NSDictionary<string, any>;

	connectionStatus: PSPDFStylusConnectionStatus;

	delegate: PSPDFStylusDriverDelegate;

	settingsController?: UIViewController;

	settingsControllerInfo?: NSDictionary<string, any>;

	disableDriver(): void;

	enableDriverWithOptionsError(options: NSDictionary<string, any>): boolean;

	initWithDelegate?(delegate: PSPDFStylusDriverDelegate): PSPDFStylusDriver;

	registerView?(view: UIView): void;

	touchInfoForTouch?(touch: UITouch): PSPDFStylusTouch;

	unregisterView?(view: UIView): void;
}
declare var PSPDFStylusDriver: {

	prototype: PSPDFStylusDriver;

	driverInfo(): NSDictionary<string, any>;
};

interface PSPDFStylusDriverDelegate extends NSObjectProtocol {

	buttonFired?(buttonNumber: number): boolean;

	classificationsDidChangeForTouches?(touches: NSSet<any>): void;

	connectionStatusChanged(): void;

	stylusSuggestsToDisableGestures?(): void;

	stylusSuggestsToEnableGestures?(): void;

	stylusTouchBegan?(touches: NSSet<any>): void;

	stylusTouchCancelled?(touches: NSSet<any>): void;

	stylusTouchEnded?(touches: NSSet<any>): void;

	stylusTouchMoved?(touches: NSSet<any>): void;
}
declare var PSPDFStylusDriverDelegate: {

	prototype: PSPDFStylusDriverDelegate;
};

declare var PSPDFStylusDriverIdentifierKey: string;

declare var PSPDFStylusDriverNameKey: string;

declare var PSPDFStylusDriverPriorityKey: string;

declare var PSPDFStylusDriverProtocolVersionKey: string;

declare var PSPDFStylusDriverProtocolVersion_1: number;

declare var PSPDFStylusDriverSDKNameKey: string;

declare var PSPDFStylusDriverSDKVersionKey: string;

declare class PSPDFStylusManager extends NSObject {

	static alloc(): PSPDFStylusManager; // inherited from NSObject

	static new(): PSPDFStylusManager; // inherited from NSObject

	applePencilEnabled: boolean;

	automaticallyEnablesApplePencil: boolean;

	availableDriverClasses: NSOrderedSet<typeof NSObject>;

	buttonActionMapping: NSDictionary<number, string>;

	readonly connectionStatus: PSPDFStylusConnectionStatus;

	currentDriverClass: typeof NSObject;

	readonly driverAllowsClassification: boolean;

	readonly embeddedSizeForSettingsController: CGSize;

	readonly settingsControllerForCurrentDriver: UIViewController;

	showsStatusHUDForConnectionStatusChanges: boolean;

	readonly stylusController: PSPDFStylusViewController;

	readonly stylusName: string;

	addDelegate(delegate: PSPDFStylusDriverDelegate): void;

	enableLastDriver(): boolean;

	hasSettingsControllerForDriverClass(driver: typeof NSObject): boolean;

	registerView(view: UIView): void;

	removeDelegate(delegate: PSPDFStylusDriverDelegate): boolean;

	touchInfoForTouch(touch: UITouch): PSPDFStylusTouch;

	unregisterView(view: UIView): void;
}

declare var PSPDFStylusManagerConnectionStatusChangedNotification: string;

declare var PSPDFStylusNameKey: string;

declare var PSPDFStylusSettingsEmbeddedSizeKey: string;

interface PSPDFStylusTouch extends NSObjectProtocol {

	classification?: PSPDFStylusTouchClassification;

	pressure?: number;

	locationInView?(view: UIView): CGPoint;
}
declare var PSPDFStylusTouch: {

	prototype: PSPDFStylusTouch;
};

declare const enum PSPDFStylusTouchClassification {

	UnknownDisconnected = 0,

	Unknown = 1,

	Finger = 2,

	Palm = 3,

	Pen = 4,

	Eraser = 5
}

declare class PSPDFStylusTouchClassificationInfo extends NSObject {

	static alloc(): PSPDFStylusTouchClassificationInfo; // inherited from NSObject

	static new(): PSPDFStylusTouchClassificationInfo; // inherited from NSObject

	readonly newValue: PSPDFStylusTouchClassification;

	readonly oldValue: PSPDFStylusTouchClassification;

	readonly touch: UITouch;

	readonly touchID: number;

	constructor(o: { touch: UITouch; touchID: number; oldValue: PSPDFStylusTouchClassification; newValue: PSPDFStylusTouchClassification; });

	initWithTouchTouchIDOldValueNewValue(touch: UITouch, touchID: number, oldValue: PSPDFStylusTouchClassification, newValue: PSPDFStylusTouchClassification): this;
}

declare class PSPDFStylusViewController extends PSPDFStaticTableViewController {

	static alloc(): PSPDFStylusViewController; // inherited from NSObject

	static new(): PSPDFStylusViewController; // inherited from NSObject

	delegate: PSPDFStylusViewControllerDelegate;

	selectedDriverClass: typeof NSObject;

	readonly stylusManager: PSPDFStylusManager;

	constructor(o: { stylusManager: PSPDFStylusManager; });

	initWithStylusManager(stylusManager: PSPDFStylusManager): this;
}

interface PSPDFStylusViewControllerDelegate extends NSObjectProtocol {

	stylusViewControllerDidTapSettingsButton(stylusViewController: PSPDFStylusViewController): void;

	stylusViewControllerDidUpdateSelectedType(stylusViewController: PSPDFStylusViewController): void;
}
declare var PSPDFStylusViewControllerDelegate: {

	prototype: PSPDFStylusViewControllerDelegate;
};

declare class PSPDFSubmitFormAction extends PSPDFAbstractFormAction {

	static alloc(): PSPDFSubmitFormAction; // inherited from NSObject

	static modelWithDictionaryError(dictionaryValue: NSDictionary<string, any>): PSPDFSubmitFormAction; // inherited from PSPDFModel

	static new(): PSPDFSubmitFormAction; // inherited from NSObject

	readonly URL: NSURL;

	readonly flags: PSPDFSubmitFormActionFlag;

	constructor(o: { URL: NSURL; flags: PSPDFSubmitFormActionFlag; });

	initWithURLFlags(URL: NSURL, flags: PSPDFSubmitFormActionFlag): this;
}

declare const enum PSPDFSubmitFormActionFlag {

	IncludeExclude = 1,

	IncludeNoValueFields = 2,

	ExportFormat = 4,

	GetMethod = 8,

	SubmitCoordinates = 16,

	XFDF = 32,

	IncludeAppendSaves = 64,

	IncludeAnnotations = 128,

	SubmitPDF = 256,

	CanonicalFormat = 512,

	ExclNonUserAnnots = 1024,

	ExclFKey = 2048,

	EmbedForm = 8192
}

declare const enum PSPDFSubmitFormActionFormat {

	FDF = 0,

	XFDF = 1,

	HTML = 2,

	PDF = 3
}

interface PSPDFSystemBar extends NSObjectProtocol {
}
declare var PSPDFSystemBar: {

	prototype: PSPDFSystemBar;
};

declare function PSPDFSystemBarForResponder(responder: UIResponder): UIView;

declare class PSPDFTabbedBar extends UIView {

	static alloc(): PSPDFTabbedBar; // inherited from NSObject

	static appearance(): PSPDFTabbedBar; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PSPDFTabbedBar; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PSPDFTabbedBar; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): PSPDFTabbedBar; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PSPDFTabbedBar; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): PSPDFTabbedBar; // inherited from UIAppearance

	static new(): PSPDFTabbedBar; // inherited from NSObject

	backgroundView: UIView;

	barHeight: number;

	closeButtonImage: UIImage;

	readonly documentPickerButton: UIButton;

	readonly interactiveReorderingGestureRecognizer: UILongPressGestureRecognizer;

	leftViews: NSArray<UIView>;

	minTabWidth: number;

	readonly overviewButton: UIButton;

	overviewThreshold: number;

	rightViews: NSArray<UIView>;

	tabTitleFont: UIFont;

	tabbedBarStyle: PSPDFTabbedBarStyle;
}

declare var PSPDFTabbedBarOverflowThresholdAutomatic: number;

declare var PSPDFTabbedBarOverflowThresholdNever: number;

declare const enum PSPDFTabbedBarStyle {

	Light = 0,

	Dark = 1
}

declare class PSPDFTabbedViewController extends PSPDFMultiDocumentViewController {

	static alloc(): PSPDFTabbedViewController; // inherited from NSObject

	static new(): PSPDFTabbedViewController; // inherited from NSObject

	allowsClosingDocuments: boolean;

	barHidingMode: PSPDFTabbedViewControllerBarHidingMode;

	closeMode: PSPDFTabbedViewControllerCloseMode;

	delegate: PSPDFTabbedViewControllerDelegate;

	documentPickerController: PSPDFDocumentPickerController;

	openDocumentActionInNewTab: boolean;

	readonly tabbedBar: PSPDFTabbedBar;

	addDocumentMakeVisibleAnimated(document: PSPDFDocument, shouldMakeDocumentVisible: boolean, animated: boolean): void;

	insertDocumentAfterVisibleDocumentMakeVisibleAnimated(document: PSPDFDocument, shouldMakeDocumentVisible: boolean, animated: boolean): void;

	insertDocumentAtIndexMakeVisibleAnimated(document: PSPDFDocument, idx: number, shouldMakeDocumentVisible: boolean, animated: boolean): void;

	removeDocumentAnimated(document: PSPDFDocument, animated: boolean): boolean;

	removeDocumentAtIndexAnimated(idx: number, animated: boolean): void;

	setVisibleDocumentScrollToPositionAnimated(visibleDocument: PSPDFDocument, scrollToPosition: boolean, animated: boolean): void;

	updateTabbedBarFrameAnimated(animated: boolean): void;
}

declare const enum PSPDFTabbedViewControllerBarHidingMode {

	Automatic = 0,

	Show = 1,

	Hide = 2
}

declare const enum PSPDFTabbedViewControllerCloseMode {

	OnlySelectedTab = 0,

	AllTabs = 1,

	SizeDependent = 2,

	Disabled = 3
}

interface PSPDFTabbedViewControllerDelegate extends PSPDFMultiDocumentViewControllerDelegate {

	tabbedPDFControllerDidChangeVisibleDocument?(tabbedPDFController: PSPDFTabbedViewController, oldVisibleDocument: PSPDFDocument): void;

	tabbedPDFControllerDidCloseDocument?(tabbedPDFController: PSPDFTabbedViewController, document: PSPDFDocument): void;

	tabbedPDFControllerShouldChangeVisibleDocument?(tabbedPDFController: PSPDFTabbedViewController, newVisibleDocument: PSPDFDocument): boolean;

	tabbedPDFControllerShouldCloseDocument?(tabbedPDFController: PSPDFTabbedViewController, document: PSPDFDocument): boolean;
}
declare var PSPDFTabbedViewControllerDelegate: {

	prototype: PSPDFTabbedViewControllerDelegate;
};

declare class PSPDFTableViewCell extends UITableViewCell {

	static alloc(): PSPDFTableViewCell; // inherited from NSObject

	static appearance(): PSPDFTableViewCell; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PSPDFTableViewCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PSPDFTableViewCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): PSPDFTableViewCell; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PSPDFTableViewCell; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): PSPDFTableViewCell; // inherited from UIAppearance

	static new(): PSPDFTableViewCell; // inherited from NSObject
}

declare const enum PSPDFTapAction {

	None = 0,

	Zoom = 1,

	SmartZoom = 2
}

declare class PSPDFTextBlock extends NSObject implements NSCopying, NSSecureCoding {

	static alloc(): PSPDFTextBlock; // inherited from NSObject

	static new(): PSPDFTextBlock; // inherited from NSObject

	readonly content: string;

	readonly frame: CGRect;

	readonly glyphs: NSArray<PSPDFGlyph>;

	readonly pageRotation: number;

	readonly words: NSArray<PSPDFWord>;

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { glyphs: NSArray<PSPDFGlyph>; frame: CGRect; pageRotation: number; });

	constructor(o: { glyphs: NSArray<PSPDFGlyph>; pageRotation: number; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	encodeWithCoder(aCoder: NSCoder): void;

	initWithCoder(aDecoder: NSCoder): this;

	initWithGlyphsFramePageRotation(glyphs: NSArray<PSPDFGlyph>, frame: CGRect, pageRotation: number): this;

	initWithGlyphsPageRotation(glyphs: NSArray<PSPDFGlyph>, pageRotation: number): this;

	isEqualToTextBlock(otherBlock: PSPDFTextBlock): boolean;
}

declare const enum PSPDFTextCheckingType {

	None = 0,

	Link = 1,

	PhoneNumber = 2,

	All = 4294967295
}

declare const enum PSPDFTextFieldFlag {

	Multiline = 4096,

	Password = 8192,

	FileSelect = 1048576,

	DoNotSpellCheck = 4194304,

	DoNotScroll = 8388608,

	Comb = 16777216,

	RichText = 33554432
}

declare class PSPDFTextFieldFormElement extends PSPDFFormElement {

	static alloc(): PSPDFTextFieldFormElement; // inherited from NSObject

	static modelWithDictionaryError(dictionaryValue: NSDictionary<string, any>): PSPDFTextFieldFormElement; // inherited from PSPDFModel

	static new(): PSPDFTextFieldFormElement; // inherited from NSObject

	readonly formattedContents: string;

	readonly inputFormat: PSPDFTextInputFormat;

	readonly multiline: boolean;

	readonly password: boolean;

	readonly textFormField: PSPDFTextFormField;

	textFieldChangedWithContentsChangeRangeIsFinalApplicationError(contents: string, change: string, range: NSRange, isFinal: boolean, application: PSPDFApplicationJSExport): string;
}

declare class PSPDFTextFieldFormElementView extends PSPDFFormElementView implements UITextFieldDelegate, UITextViewDelegate {

	static alloc(): PSPDFTextFieldFormElementView; // inherited from NSObject

	static appearance(): PSPDFTextFieldFormElementView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PSPDFTextFieldFormElementView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PSPDFTextFieldFormElementView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): PSPDFTextFieldFormElementView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PSPDFTextFieldFormElementView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): PSPDFTextFieldFormElementView; // inherited from UIAppearance

	static new(): PSPDFTextFieldFormElementView; // inherited from NSObject

	editMode: boolean;

	readonly isMultiline: boolean;

	readonly isPassword: boolean;

	resizableView: PSPDFResizableView;

	readonly setTextViewForEditing: UITextView;

	readonly textField: UITextField;

	readonly textView: UITextView;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	beginEditing(): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	endEditing(): void;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	scrollViewDidEndDecelerating(scrollView: UIScrollView): void;

	scrollViewDidEndDraggingWillDecelerate(scrollView: UIScrollView, decelerate: boolean): void;

	scrollViewDidEndScrollingAnimation(scrollView: UIScrollView): void;

	scrollViewDidEndZoomingWithViewAtScale(scrollView: UIScrollView, view: UIView, scale: number): void;

	scrollViewDidScroll(scrollView: UIScrollView): void;

	scrollViewDidScrollToTop(scrollView: UIScrollView): void;

	scrollViewDidZoom(scrollView: UIScrollView): void;

	scrollViewShouldScrollToTop(scrollView: UIScrollView): boolean;

	scrollViewWillBeginDecelerating(scrollView: UIScrollView): void;

	scrollViewWillBeginDragging(scrollView: UIScrollView): void;

	scrollViewWillBeginZoomingWithView(scrollView: UIScrollView, view: UIView): void;

	scrollViewWillEndDraggingWithVelocityTargetContentOffset(scrollView: UIScrollView, velocity: CGPoint, targetContentOffset: interop.Pointer | interop.Reference<CGPoint>): void;

	self(): this;

	textFieldDidBeginEditing(textField: UITextField): void;

	textFieldDidEndEditing(textField: UITextField): void;

	textFieldDidEndEditingReason(textField: UITextField, reason: UITextFieldDidEndEditingReason): void;

	textFieldShouldBeginEditing(textField: UITextField): boolean;

	textFieldShouldChangeCharactersInRangeReplacementString(textField: UITextField, range: NSRange, string: string): boolean;

	textFieldShouldClear(textField: UITextField): boolean;

	textFieldShouldEndEditing(textField: UITextField): boolean;

	textFieldShouldReturn(textField: UITextField): boolean;

	textViewDidBeginEditing(textView: UITextView): void;

	textViewDidChange(textView: UITextView): void;

	textViewDidChangeSelection(textView: UITextView): void;

	textViewDidEndEditing(textView: UITextView): void;

	textViewShouldBeginEditing(textView: UITextView): boolean;

	textViewShouldChangeTextInRangeReplacementText(textView: UITextView, range: NSRange, text: string): boolean;

	textViewShouldEndEditing(textView: UITextView): boolean;

	textViewShouldInteractWithTextAttachmentInRange(textView: UITextView, textAttachment: NSTextAttachment, characterRange: NSRange): boolean;

	textViewShouldInteractWithTextAttachmentInRangeInteraction(textView: UITextView, textAttachment: NSTextAttachment, characterRange: NSRange, interaction: UITextItemInteraction): boolean;

	textViewShouldInteractWithURLInRange(textView: UITextView, URL: NSURL, characterRange: NSRange): boolean;

	textViewShouldInteractWithURLInRangeInteraction(textView: UITextView, URL: NSURL, characterRange: NSRange, interaction: UITextItemInteraction): boolean;

	viewForZoomingInScrollView(scrollView: UIScrollView): UIView;
}

declare class PSPDFTextFormField extends PSPDFFormField {

	static alloc(): PSPDFTextFormField; // inherited from NSObject

	static modelWithDictionaryError(dictionaryValue: NSDictionary<string, any>): PSPDFTextFormField; // inherited from PSPDFModel

	static new(): PSPDFTextFormField; // inherited from NSObject

	readonly doNotScroll: boolean;

	readonly doNotSpellCheck: boolean;

	readonly fileSelect: boolean;

	readonly isComb: boolean;

	readonly isMultiLine: boolean;

	readonly isPassword: boolean;

	readonly isRichText: boolean;

	readonly maxLength: number;

	richText: string;

	text: string;
}

declare const enum PSPDFTextInputFormat {

	Normal = 0,

	Number = 1,

	Date = 2,

	Time = 3
}

declare var PSPDFTextMenuCopy: string;

declare var PSPDFTextMenuCreateLink: string;

declare var PSPDFTextMenuDefine: string;

declare var PSPDFTextMenuPause: string;

declare var PSPDFTextMenuSearch: string;

declare var PSPDFTextMenuSpeak: string;

declare var PSPDFTextMenuWikipedia: string;

declare class PSPDFTextParser extends NSObject {

	static alloc(): PSPDFTextParser; // inherited from NSObject

	static new(): PSPDFTextParser; // inherited from NSObject

	readonly documentProvider: PSPDFDocumentProvider;

	readonly glyphs: NSArray<PSPDFGlyph>;

	readonly images: NSArray<PSPDFImageInfo>;

	readonly pageIndex: number;

	readonly text: string;

	readonly textBlocks: NSArray<PSPDFTextBlock>;

	readonly words: NSArray<PSPDFWord>;

	glyphsInRange(range: NSRange): NSArray<PSPDFGlyph>;

	textWithGlyphs(glyphs: NSArray<PSPDFGlyph>): string;
}

declare class PSPDFTextSearch extends NSObject implements NSCopying {

	static alloc(): PSPDFTextSearch; // inherited from NSObject

	static new(): PSPDFTextSearch; // inherited from NSObject

	compareOptions: NSStringCompareOptions;

	delegate: PSPDFTextSearchDelegate;

	readonly document: PSPDFDocument;

	maximumNumberOfSearchResults: number;

	previewRange: NSRange;

	readonly searchQueue: NSOperationQueue;

	searchableAnnotationTypes: PSPDFAnnotationType;

	constructor(o: { document: PSPDFDocument; });

	cancelAllOperations(): void;

	cancelAllOperationsAndWait(): void;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	initWithDocument(document: PSPDFDocument): this;

	searchForString(searchTerm: string): void;

	searchForStringInRangesRangesOnlyCancelOperations(searchTerm: string, ranges: NSIndexSet, rangesOnly: boolean, cancelOperations: boolean): void;
}

interface PSPDFTextSearchDelegate extends NSObjectProtocol {

	didCancelSearchTermIsFullSearch?(textSearch: PSPDFTextSearch, searchTerm: string, isFullSearch: boolean): void;

	didFinishSearchTermSearchResultsIsFullSearchPageTextFound?(textSearch: PSPDFTextSearch, searchTerm: string, searchResults: NSArray<PSPDFSearchResult>, isFullSearch: boolean, pageTextFound: boolean): void;

	didUpdateSearchTermNewSearchResultsPageIndex?(textSearch: PSPDFTextSearch, searchTerm: string, searchResults: NSArray<PSPDFSearchResult>, pageIndex: number): void;

	willStartSearchTermIsFullSearch?(textSearch: PSPDFTextSearch, searchTerm: string, isFullSearch: boolean): void;
}
declare var PSPDFTextSearchDelegate: {

	prototype: PSPDFTextSearchDelegate;
};

declare const enum PSPDFTextSelectionMenuAction {

	None = 0,

	Search = 1,

	Define = 2,

	Wikipedia = 4,

	Speak = 8,

	All = 4294967295
}

declare const enum PSPDFTextSelectionMode {

	Regular = 0,

	Simple = 1
}

declare class PSPDFTextSelectionView extends UIView implements AVSpeechSynthesizerDelegate {

	static alloc(): PSPDFTextSelectionView; // inherited from NSObject

	static appearance(): PSPDFTextSelectionView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PSPDFTextSelectionView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PSPDFTextSelectionView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): PSPDFTextSelectionView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PSPDFTextSelectionView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): PSPDFTextSelectionView; // inherited from UIAppearance

	static new(): PSPDFTextSelectionView; // inherited from NSObject

	delegate: PSPDFTextSelectionViewDelegate;

	readonly firstLineRect: CGRect;

	readonly hasSelection: boolean;

	readonly lastLineRect: CGRect;

	selectedGlyphs: NSArray<PSPDFGlyph>;

	selectedImage: PSPDFImageInfo;

	readonly selectedText: string;

	selectionAlpha: number;

	selectionHitTestExtension: number;

	readonly selectionRect: CGRect;

	readonly trimmedSelectedText: string;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	clearCache(): void;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	discardSelectionAnimated(animated: boolean): void;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	showTextFlowDataAnimated(show: boolean, animated: boolean): void;

	sortedGlyphs(glyphs: NSArray<PSPDFGlyph>): NSArray<PSPDFGlyph>;

	speechSynthesizerDidCancelSpeechUtterance(synthesizer: AVSpeechSynthesizer, utterance: AVSpeechUtterance): void;

	speechSynthesizerDidContinueSpeechUtterance(synthesizer: AVSpeechSynthesizer, utterance: AVSpeechUtterance): void;

	speechSynthesizerDidFinishSpeechUtterance(synthesizer: AVSpeechSynthesizer, utterance: AVSpeechUtterance): void;

	speechSynthesizerDidPauseSpeechUtterance(synthesizer: AVSpeechSynthesizer, utterance: AVSpeechUtterance): void;

	speechSynthesizerDidStartSpeechUtterance(synthesizer: AVSpeechSynthesizer, utterance: AVSpeechUtterance): void;

	speechSynthesizerWillSpeakRangeOfSpeechStringUtterance(synthesizer: AVSpeechSynthesizer, characterRange: NSRange, utterance: AVSpeechUtterance): void;

	updateMenuAnimated(animated: boolean): boolean;

	updateSelectionAnimated(animated: boolean): void;
}

interface PSPDFTextSelectionViewDelegate extends NSObjectProtocol {

	textSelectionViewDidSelectTextWithGlyphsAtRect?(textSelectionView: PSPDFTextSelectionView, text: string, glyphs: NSArray<PSPDFGlyph>, rect: CGRect): void;

	textSelectionViewShouldSelectTextWithGlyphsAtRect?(textSelectionView: PSPDFTextSelectionView, text: string, glyphs: NSArray<PSPDFGlyph>, rect: CGRect): boolean;

	textSelectionViewUpdateMenuAnimated(textSelectionView: PSPDFTextSelectionView, animated: boolean): boolean;
}
declare var PSPDFTextSelectionViewDelegate: {

	prototype: PSPDFTextSelectionViewDelegate;
};

declare class PSPDFTextStampViewController extends PSPDFStaticTableViewController {

	static alloc(): PSPDFTextStampViewController; // inherited from NSObject

	static new(): PSPDFTextStampViewController; // inherited from NSObject

	defaultStampText: string;

	delegate: PSPDFTextStampViewControllerDelegate;

	readonly stampAnnotation: PSPDFStampAnnotation;

	constructor(o: { stampAnnotation: PSPDFStampAnnotation; });

	initWithStampAnnotation(stampAnnotation: PSPDFStampAnnotation): this;
}

interface PSPDFTextStampViewControllerDelegate extends PSPDFOverridable {

	textStampViewControllerDidCreateAnnotation?(stampController: PSPDFTextStampViewController, stampAnnotation: PSPDFStampAnnotation): void;
}
declare var PSPDFTextStampViewControllerDelegate: {

	prototype: PSPDFTextStampViewControllerDelegate;
};

declare class PSPDFThumbnailBar extends UICollectionView implements UICollectionViewDataSource, UICollectionViewDelegate {

	static alloc(): PSPDFThumbnailBar; // inherited from NSObject

	static appearance(): PSPDFThumbnailBar; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PSPDFThumbnailBar; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PSPDFThumbnailBar; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): PSPDFThumbnailBar; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PSPDFThumbnailBar; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): PSPDFThumbnailBar; // inherited from UIAppearance

	static new(): PSPDFThumbnailBar; // inherited from NSObject

	showPageLabels: boolean;

	thumbnailBarDataSource: PSPDFPresentationContext;

	thumbnailBarDelegate: PSPDFThumbnailBarDelegate;

	thumbnailBarHeight: number;

	thumbnailSize: CGSize;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	collectionViewCanFocusItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): boolean;

	collectionViewCanMoveItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): boolean;

	collectionViewCanPerformActionForItemAtIndexPathWithSender(collectionView: UICollectionView, action: string, indexPath: NSIndexPath, sender: any): boolean;

	collectionViewCellForItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): UICollectionViewCell;

	collectionViewDidDeselectItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): void;

	collectionViewDidEndDisplayingCellForItemAtIndexPath(collectionView: UICollectionView, cell: UICollectionViewCell, indexPath: NSIndexPath): void;

	collectionViewDidEndDisplayingSupplementaryViewForElementOfKindAtIndexPath(collectionView: UICollectionView, view: UICollectionReusableView, elementKind: string, indexPath: NSIndexPath): void;

	collectionViewDidHighlightItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): void;

	collectionViewDidSelectItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): void;

	collectionViewDidUnhighlightItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): void;

	collectionViewDidUpdateFocusInContextWithAnimationCoordinator(collectionView: UICollectionView, context: UICollectionViewFocusUpdateContext, coordinator: UIFocusAnimationCoordinator): void;

	collectionViewIndexPathForIndexTitleAtIndex(collectionView: UICollectionView, title: string, index: number): NSIndexPath;

	collectionViewMoveItemAtIndexPathToIndexPath(collectionView: UICollectionView, sourceIndexPath: NSIndexPath, destinationIndexPath: NSIndexPath): void;

	collectionViewNumberOfItemsInSection(collectionView: UICollectionView, section: number): number;

	collectionViewPerformActionForItemAtIndexPathWithSender(collectionView: UICollectionView, action: string, indexPath: NSIndexPath, sender: any): void;

	collectionViewShouldDeselectItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): boolean;

	collectionViewShouldHighlightItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): boolean;

	collectionViewShouldSelectItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): boolean;

	collectionViewShouldShowMenuForItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): boolean;

	collectionViewShouldUpdateFocusInContext(collectionView: UICollectionView, context: UICollectionViewFocusUpdateContext): boolean;

	collectionViewTargetContentOffsetForProposedContentOffset(collectionView: UICollectionView, proposedContentOffset: CGPoint): CGPoint;

	collectionViewTargetIndexPathForMoveFromItemAtIndexPathToProposedIndexPath(collectionView: UICollectionView, originalIndexPath: NSIndexPath, proposedIndexPath: NSIndexPath): NSIndexPath;

	collectionViewTransitionLayoutForOldLayoutNewLayout(collectionView: UICollectionView, fromLayout: UICollectionViewLayout, toLayout: UICollectionViewLayout): UICollectionViewTransitionLayout;

	collectionViewViewForSupplementaryElementOfKindAtIndexPath(collectionView: UICollectionView, kind: string, indexPath: NSIndexPath): UICollectionReusableView;

	collectionViewWillDisplayCellForItemAtIndexPath(collectionView: UICollectionView, cell: UICollectionViewCell, indexPath: NSIndexPath): void;

	collectionViewWillDisplaySupplementaryViewForElementKindAtIndexPath(collectionView: UICollectionView, view: UICollectionReusableView, elementKind: string, indexPath: NSIndexPath): void;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	indexPathForPreferredFocusedViewInCollectionView(collectionView: UICollectionView): NSIndexPath;

	indexTitlesForCollectionView(collectionView: UICollectionView): NSArray<string>;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	numberOfSectionsInCollectionView(collectionView: UICollectionView): number;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	reloadDataAndKeepSelection(): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	scrollToPageAtIndexAnimated(pageIndex: number, animated: boolean): void;

	scrollViewDidEndDecelerating(scrollView: UIScrollView): void;

	scrollViewDidEndDraggingWillDecelerate(scrollView: UIScrollView, decelerate: boolean): void;

	scrollViewDidEndScrollingAnimation(scrollView: UIScrollView): void;

	scrollViewDidEndZoomingWithViewAtScale(scrollView: UIScrollView, view: UIView, scale: number): void;

	scrollViewDidScroll(scrollView: UIScrollView): void;

	scrollViewDidScrollToTop(scrollView: UIScrollView): void;

	scrollViewDidZoom(scrollView: UIScrollView): void;

	scrollViewShouldScrollToTop(scrollView: UIScrollView): boolean;

	scrollViewWillBeginDecelerating(scrollView: UIScrollView): void;

	scrollViewWillBeginDragging(scrollView: UIScrollView): void;

	scrollViewWillBeginZoomingWithView(scrollView: UIScrollView, view: UIView): void;

	scrollViewWillEndDraggingWithVelocityTargetContentOffset(scrollView: UIScrollView, velocity: CGPoint, targetContentOffset: interop.Pointer | interop.Reference<CGPoint>): void;

	self(): this;

	stopScrolling(): void;

	viewForZoomingInScrollView(scrollView: UIScrollView): UIView;
}

interface PSPDFThumbnailBarDelegate extends NSObjectProtocol {

	thumbnailBarDidSelectPageAtIndex?(thumbnailBar: PSPDFThumbnailBar, pageIndex: number): void;
}
declare var PSPDFThumbnailBarDelegate: {

	prototype: PSPDFThumbnailBarDelegate;
};

declare const enum PSPDFThumbnailBarMode {

	None = 0,

	ScrubberBar = 1,

	Scrollable = 2
}

declare class PSPDFThumbnailFilterSegmentedControl extends PSPDFSegmentedControl {

	static alloc(): PSPDFThumbnailFilterSegmentedControl; // inherited from NSObject

	static appearance(): PSPDFThumbnailFilterSegmentedControl; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PSPDFThumbnailFilterSegmentedControl; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PSPDFThumbnailFilterSegmentedControl; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): PSPDFThumbnailFilterSegmentedControl; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PSPDFThumbnailFilterSegmentedControl; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): PSPDFThumbnailFilterSegmentedControl; // inherited from UIAppearance

	static new(): PSPDFThumbnailFilterSegmentedControl; // inherited from NSObject
}

declare class PSPDFThumbnailFlowLayout extends UICollectionViewLayout {

	static alloc(): PSPDFThumbnailFlowLayout; // inherited from NSObject

	static new(): PSPDFThumbnailFlowLayout; // inherited from NSObject

	readonly doublePageMode: boolean;

	doublePageModeDisabled: boolean;

	incompleteLineAlignment: PSPDFThumbnailFlowLayoutLineAlignment;

	interitemSpacing: number;

	lineSpacing: number;

	presentationContext: PSPDFPresentationContext;

	sectionInset: UIEdgeInsets;

	singleLineMode: boolean;

	stickyHeaderEnabled: boolean;

	indexPathForDoublePage(indexPath: NSIndexPath): NSIndexPath;

	typeForIndexPathUsingDoublePageMode(indexPath: NSIndexPath, usingDoublePageMode: boolean): PSPDFThumbnailFlowLayoutAttributesType;
}

declare class PSPDFThumbnailFlowLayoutAttributes extends UICollectionViewLayoutAttributes {

	static alloc(): PSPDFThumbnailFlowLayoutAttributes; // inherited from NSObject

	static layoutAttributesForCellWithIndexPath(indexPath: NSIndexPath): PSPDFThumbnailFlowLayoutAttributes; // inherited from UICollectionViewLayoutAttributes

	static layoutAttributesForDecorationViewOfKindWithIndexPath(decorationViewKind: string, indexPath: NSIndexPath): PSPDFThumbnailFlowLayoutAttributes; // inherited from UICollectionViewLayoutAttributes

	static layoutAttributesForSupplementaryViewOfKindWithIndexPath(elementKind: string, indexPath: NSIndexPath): PSPDFThumbnailFlowLayoutAttributes; // inherited from UICollectionViewLayoutAttributes

	static new(): PSPDFThumbnailFlowLayoutAttributes; // inherited from NSObject

	type: PSPDFThumbnailFlowLayoutAttributesType;
}

declare const enum PSPDFThumbnailFlowLayoutAttributesType {

	Single = 0,

	Leading = 1,

	Trailing = 2,

	Left = 1,

	Right = 2
}

declare const enum PSPDFThumbnailFlowLayoutLineAlignment {

	Left = 0,

	Center = 1,

	Right = 2,

	PageBinding = 3
}

declare class PSPDFThumbnailGridViewCell extends PSPDFPageCell {

	static alloc(): PSPDFThumbnailGridViewCell; // inherited from NSObject

	static appearance(): PSPDFThumbnailGridViewCell; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PSPDFThumbnailGridViewCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PSPDFThumbnailGridViewCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): PSPDFThumbnailGridViewCell; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PSPDFThumbnailGridViewCell; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): PSPDFThumbnailGridViewCell; // inherited from UIAppearance

	static new(): PSPDFThumbnailGridViewCell; // inherited from NSObject

	bookmarkImageColor: UIColor;

	readonly bookmarkImageView: UIImageView;

	document: PSPDFDocument;

	updateBookmarkImage(): void;

	updatePageLabel(): void;
}

declare const enum PSPDFThumbnailGrouping {

	Automatic = 0,

	Never = 1,

	Always = 2
}

declare class PSPDFThumbnailViewController extends UICollectionViewController implements PSPDFViewModePresenter, UICollectionViewDataSource, UICollectionViewDelegate {

	static alloc(): PSPDFThumbnailViewController; // inherited from NSObject

	static automaticThumbnailSizeForPageWithSizeReferencePageSizeContainerSizeInteritemSpacing(pageSize: CGSize, referencePageSize: CGSize, containerSize: CGSize, interitemSpacing: number): CGSize;

	static new(): PSPDFThumbnailViewController; // inherited from NSObject

	activeFilter: string;

	dataSource: PSPDFPresentationContext;

	delegate: PSPDFThumbnailViewControllerDelegate;

	filterOptions: NSArray<string>;

	readonly filterSegment: PSPDFThumbnailFilterSegmentedControl;

	stickyHeaderEnabled: boolean;

	cellClass: typeof NSObject; // inherited from PSPDFViewModePresenter

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	document: PSPDFDocument; // inherited from PSPDFViewModePresenter

	fixedItemSizeEnabled: boolean; // inherited from PSPDFViewModePresenter

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	presentationContext: PSPDFPresentationContext; // inherited from PSPDFViewModePresenter

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { collectionViewLayout: UICollectionViewLayout; }); // inherited from PSPDFViewModePresenter

	constructor(o: { document: PSPDFDocument; }); // inherited from PSPDFViewModePresenter

	cellForPageAtIndexDocument(pageIndex: number, document: PSPDFDocument): UICollectionViewCell;

	class(): typeof NSObject;

	collectionViewCanFocusItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): boolean;

	collectionViewCanMoveItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): boolean;

	collectionViewCanPerformActionForItemAtIndexPathWithSender(collectionView: UICollectionView, action: string, indexPath: NSIndexPath, sender: any): boolean;

	collectionViewCellForItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): UICollectionViewCell;

	collectionViewDidDeselectItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): void;

	collectionViewDidEndDisplayingCellForItemAtIndexPath(collectionView: UICollectionView, cell: UICollectionViewCell, indexPath: NSIndexPath): void;

	collectionViewDidEndDisplayingSupplementaryViewForElementOfKindAtIndexPath(collectionView: UICollectionView, view: UICollectionReusableView, elementKind: string, indexPath: NSIndexPath): void;

	collectionViewDidHighlightItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): void;

	collectionViewDidSelectItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): void;

	collectionViewDidUnhighlightItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): void;

	collectionViewDidUpdateFocusInContextWithAnimationCoordinator(collectionView: UICollectionView, context: UICollectionViewFocusUpdateContext, coordinator: UIFocusAnimationCoordinator): void;

	collectionViewIndexPathForIndexTitleAtIndex(collectionView: UICollectionView, title: string, index: number): NSIndexPath;

	collectionViewMoveItemAtIndexPathToIndexPath(collectionView: UICollectionView, sourceIndexPath: NSIndexPath, destinationIndexPath: NSIndexPath): void;

	collectionViewNumberOfItemsInSection(collectionView: UICollectionView, section: number): number;

	collectionViewPerformActionForItemAtIndexPathWithSender(collectionView: UICollectionView, action: string, indexPath: NSIndexPath, sender: any): void;

	collectionViewShouldDeselectItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): boolean;

	collectionViewShouldHighlightItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): boolean;

	collectionViewShouldSelectItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): boolean;

	collectionViewShouldShowMenuForItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): boolean;

	collectionViewShouldUpdateFocusInContext(collectionView: UICollectionView, context: UICollectionViewFocusUpdateContext): boolean;

	collectionViewTargetContentOffsetForProposedContentOffset(collectionView: UICollectionView, proposedContentOffset: CGPoint): CGPoint;

	collectionViewTargetIndexPathForMoveFromItemAtIndexPathToProposedIndexPath(collectionView: UICollectionView, originalIndexPath: NSIndexPath, proposedIndexPath: NSIndexPath): NSIndexPath;

	collectionViewTransitionLayoutForOldLayoutNewLayout(collectionView: UICollectionView, fromLayout: UICollectionViewLayout, toLayout: UICollectionViewLayout): UICollectionViewTransitionLayout;

	collectionViewViewForSupplementaryElementOfKindAtIndexPath(collectionView: UICollectionView, kind: string, indexPath: NSIndexPath): UICollectionReusableView;

	collectionViewWillDisplayCellForItemAtIndexPath(collectionView: UICollectionView, cell: UICollectionViewCell, indexPath: NSIndexPath): void;

	collectionViewWillDisplaySupplementaryViewForElementKindAtIndexPath(collectionView: UICollectionView, view: UICollectionReusableView, elementKind: string, indexPath: NSIndexPath): void;

	configureCellForIndexPath(cell: PSPDFThumbnailGridViewCell, indexPath: NSIndexPath): void;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	emptyContentLabelForFilter(filter: string): string;

	indexPathForPreferredFocusedViewInCollectionView(collectionView: UICollectionView): NSIndexPath;

	indexTitlesForCollectionView(collectionView: UICollectionView): NSArray<string>;

	initWithCollectionViewLayout(layout: UICollectionViewLayout): this;

	initWithDocument(document: PSPDFDocument): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	numberOfSectionsInCollectionView(collectionView: UICollectionView): number;

	pageForIndexPath(indexPath: NSIndexPath): number;

	pagesForFilter(filter: string): NSArray<number>;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	scrollToPageAtIndexDocumentAnimated(pageIndex: number, document: PSPDFDocument, animated: boolean): void;

	scrollViewDidEndDecelerating(scrollView: UIScrollView): void;

	scrollViewDidEndDraggingWillDecelerate(scrollView: UIScrollView, decelerate: boolean): void;

	scrollViewDidEndScrollingAnimation(scrollView: UIScrollView): void;

	scrollViewDidEndZoomingWithViewAtScale(scrollView: UIScrollView, view: UIView, scale: number): void;

	scrollViewDidScroll(scrollView: UIScrollView): void;

	scrollViewDidScrollToTop(scrollView: UIScrollView): void;

	scrollViewDidZoom(scrollView: UIScrollView): void;

	scrollViewShouldScrollToTop(scrollView: UIScrollView): boolean;

	scrollViewWillBeginDecelerating(scrollView: UIScrollView): void;

	scrollViewWillBeginDragging(scrollView: UIScrollView): void;

	scrollViewWillBeginZoomingWithView(scrollView: UIScrollView, view: UIView): void;

	scrollViewWillEndDraggingWithVelocityTargetContentOffset(scrollView: UIScrollView, velocity: CGPoint, targetContentOffset: interop.Pointer | interop.Reference<CGPoint>): void;

	self(): this;

	setActiveFilterAnimated(activeFilter: string, animated: boolean): void;

	stopScrolling(): void;

	updateEmptyView(): void;

	updateFilterAndVisibleCellsAnimated(animated: boolean): void;

	updateFilterSegment(): void;

	updateInsetsForTopOverlapHeight(overlapHeight: number): void;

	viewForZoomingInScrollView(scrollView: UIScrollView): UIView;
}

interface PSPDFThumbnailViewControllerDelegate extends NSObjectProtocol {

	thumbnailViewControllerDidSelectPageAtIndexInDocument?(thumbnailViewController: PSPDFThumbnailViewController, pageIndex: number, document: PSPDFDocument): void;
}
declare var PSPDFThumbnailViewControllerDelegate: {

	prototype: PSPDFThumbnailViewControllerDelegate;
};

declare var PSPDFThumbnailViewFilterAnnotations: string;

declare var PSPDFThumbnailViewFilterBookmarks: string;

declare var PSPDFThumbnailViewFilterShowAll: string;

declare class PSPDFToolbar extends UIView {

	static alloc(): PSPDFToolbar; // inherited from NSObject

	static appearance(): PSPDFToolbar; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PSPDFToolbar; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PSPDFToolbar; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): PSPDFToolbar; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PSPDFToolbar; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): PSPDFToolbar; // inherited from UIAppearance

	static new(): PSPDFToolbar; // inherited from NSObject

	backgroundView: UIView;

	barTintColor: UIColor;

	readonly buttonSpacing: number;

	buttons: NSArray<UIButton>;

	readonly collapsedButton: UIButton;

	readonly collapsedButtons: NSArray<UIButton>;

	readonly contentView: UIView;

	fixedDimension: number;

	readonly horizontal: boolean;

	layoutMainSubviews(): void;

	setButtonsAnimated(buttons: NSArray<UIButton>, animated: boolean): void;

	setCollapsedButtonVisible(visible: boolean): void;
}

declare class PSPDFToolbarButton extends PSPDFButton {

	static alloc(): PSPDFToolbarButton; // inherited from NSObject

	static appearance(): PSPDFToolbarButton; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PSPDFToolbarButton; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PSPDFToolbarButton; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): PSPDFToolbarButton; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PSPDFToolbarButton; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): PSPDFToolbarButton; // inherited from UIAppearance

	static buttonWithType(buttonType: UIButtonType): PSPDFToolbarButton; // inherited from UIButton

	static new(): PSPDFToolbarButton; // inherited from NSObject

	collapsible: boolean;

	flexible: boolean;

	length: number;

	tintColorDidChangeBlock: (p1: UIColor) => void;

	userInfo: any;

	setEnabledAnimated(enabled: boolean, animated: boolean): void;

	setImage(image: UIImage): void;

	setLengthToFit(): void;

	styleForHighlightedState(highlighted: boolean): void;
}

declare const enum PSPDFToolbarButtonControlEvents {

	ControlEventTick = 16777216,

	ControlEventTouchUpInsideIfNotTicking = 33554432
}

declare class PSPDFToolbarCollapsedButton extends PSPDFToolbarGroupButton {

	static alloc(): PSPDFToolbarCollapsedButton; // inherited from NSObject

	static appearance(): PSPDFToolbarCollapsedButton; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PSPDFToolbarCollapsedButton; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PSPDFToolbarCollapsedButton; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): PSPDFToolbarCollapsedButton; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PSPDFToolbarCollapsedButton; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): PSPDFToolbarCollapsedButton; // inherited from UIAppearance

	static buttonWithType(buttonType: UIButtonType): PSPDFToolbarCollapsedButton; // inherited from UIButton

	static new(): PSPDFToolbarCollapsedButton; // inherited from NSObject

	mimickedButton: UIButton;
}

declare var PSPDFToolbarDefaultFixedDimensionLength: number;

declare class PSPDFToolbarDualButton extends PSPDFToolbarButton {

	static alloc(): PSPDFToolbarDualButton; // inherited from NSObject

	static appearance(): PSPDFToolbarDualButton; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PSPDFToolbarDualButton; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PSPDFToolbarDualButton; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): PSPDFToolbarDualButton; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PSPDFToolbarDualButton; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): PSPDFToolbarDualButton; // inherited from UIAppearance

	static buttonWithType(buttonType: UIButtonType): PSPDFToolbarDualButton; // inherited from UIButton

	static new(): PSPDFToolbarDualButton; // inherited from NSObject

	readonly longPressRecognizer: UILongPressGestureRecognizer;

	primaryEnabled: boolean;

	primaryImage: UIImage;

	secondaryEnabled: boolean;

	secondaryImage: UIImage;
}

declare class PSPDFToolbarGroupButton extends PSPDFToolbarButton {

	static alloc(): PSPDFToolbarGroupButton; // inherited from NSObject

	static appearance(): PSPDFToolbarGroupButton; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PSPDFToolbarGroupButton; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PSPDFToolbarGroupButton; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): PSPDFToolbarGroupButton; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PSPDFToolbarGroupButton; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): PSPDFToolbarGroupButton; // inherited from UIAppearance

	static buttonWithType(buttonType: UIButtonType): PSPDFToolbarGroupButton; // inherited from UIButton

	static new(): PSPDFToolbarGroupButton; // inherited from NSObject

	groupIndicatorPosition: PSPDFToolbarGroupButtonIndicatorPosition;

	readonly longPressRecognizer: UILongPressGestureRecognizer;
}

declare const enum PSPDFToolbarGroupButtonIndicatorPosition {

	None = 0,

	BottomLeft = 1,

	BottomRight = 2
}

declare class PSPDFToolbarSelectableButton extends PSPDFToolbarButton {

	static alloc(): PSPDFToolbarSelectableButton; // inherited from NSObject

	static appearance(): PSPDFToolbarSelectableButton; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PSPDFToolbarSelectableButton; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PSPDFToolbarSelectableButton; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): PSPDFToolbarSelectableButton; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PSPDFToolbarSelectableButton; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): PSPDFToolbarSelectableButton; // inherited from UIAppearance

	static buttonWithType(buttonType: UIButtonType): PSPDFToolbarSelectableButton; // inherited from UIButton

	static new(): PSPDFToolbarSelectableButton; // inherited from NSObject

	highlightsSelection: boolean;

	selectedBackgroundColor: UIColor;

	selectedTintColor: UIColor;

	selectionPadding: number;

	setSelectedAnimated(selected: boolean, animated: boolean): void;
}

declare class PSPDFToolbarSeparatorButton extends PSPDFToolbarSpacerButton {

	static alloc(): PSPDFToolbarSeparatorButton; // inherited from NSObject

	static appearance(): PSPDFToolbarSeparatorButton; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PSPDFToolbarSeparatorButton; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PSPDFToolbarSeparatorButton; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): PSPDFToolbarSeparatorButton; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PSPDFToolbarSeparatorButton; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): PSPDFToolbarSeparatorButton; // inherited from UIAppearance

	static buttonWithType(buttonType: UIButtonType): PSPDFToolbarSeparatorButton; // inherited from UIButton

	static flexibleSpacerButton(): PSPDFToolbarSeparatorButton; // inherited from PSPDFToolbarSpacerButton

	static new(): PSPDFToolbarSeparatorButton; // inherited from NSObject

	readonly hairlineView: UIView;
}

declare class PSPDFToolbarSpacerButton extends PSPDFToolbarButton {

	static alloc(): PSPDFToolbarSpacerButton; // inherited from NSObject

	static appearance(): PSPDFToolbarSpacerButton; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PSPDFToolbarSpacerButton; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PSPDFToolbarSpacerButton; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): PSPDFToolbarSpacerButton; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PSPDFToolbarSpacerButton; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): PSPDFToolbarSpacerButton; // inherited from UIAppearance

	static buttonWithType(buttonType: UIButtonType): PSPDFToolbarSpacerButton; // inherited from UIButton

	static flexibleSpacerButton(): PSPDFToolbarSpacerButton;

	static new(): PSPDFToolbarSpacerButton; // inherited from NSObject
}

declare class PSPDFToolbarTickerButton extends PSPDFToolbarButton {

	static alloc(): PSPDFToolbarTickerButton; // inherited from NSObject

	static appearance(): PSPDFToolbarTickerButton; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PSPDFToolbarTickerButton; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PSPDFToolbarTickerButton; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): PSPDFToolbarTickerButton; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PSPDFToolbarTickerButton; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): PSPDFToolbarTickerButton; // inherited from UIAppearance

	static buttonWithType(buttonType: UIButtonType): PSPDFToolbarTickerButton; // inherited from UIButton

	static new(): PSPDFToolbarTickerButton; // inherited from NSObject

	accelerate: boolean;

	timeInterval: number;
}

declare class PSPDFURLAction extends PSPDFAction {

	static alloc(): PSPDFURLAction; // inherited from NSObject

	static modelWithDictionaryError(dictionaryValue: NSDictionary<string, any>): PSPDFURLAction; // inherited from PSPDFModel

	static new(): PSPDFURLAction; // inherited from NSObject

	readonly URL: NSURL;

	button: boolean;

	readonly emailURL: boolean;

	readonly isPSPDFPrefixed: boolean;

	readonly localPDFURL: boolean;

	modal: boolean;

	offset: number;

	pageIndex: number;

	popover: boolean;

	size: CGSize;

	readonly unmodifiedURL: NSURL;

	constructor(o: { URL: NSURL; options: NSDictionary<string, any>; });

	constructor(o: { URLString: string; });

	configureMailComposeViewController(mailComposeViewController: MFMailComposeViewController): boolean;

	initWithURLOptions(URL: NSURL, options: NSDictionary<string, any>): this;

	initWithURLString(URLString: string): this;

	prefixedURLStringWithAnnotationManager(annotationManager: PSPDFAnnotationManager): string;

	updateURLWithAnnotationManager(annotationManager: PSPDFAnnotationManager): boolean;
}

declare class PSPDFUnderlineAnnotation extends PSPDFAbstractTextOverlayAnnotation {

	static alloc(): PSPDFUnderlineAnnotation; // inherited from NSObject

	static modelWithDictionaryError(dictionaryValue: NSDictionary<string, any>): PSPDFUnderlineAnnotation; // inherited from PSPDFModel

	static new(): PSPDFUnderlineAnnotation; // inherited from NSObject

	static textOverlayAnnotationWithGlyphsPageRotation(glyphs: NSArray<PSPDFGlyph>, pageRotation: number): PSPDFUnderlineAnnotation; // inherited from PSPDFAbstractTextOverlayAnnotation
}

declare const enum PSPDFUndoCoalescing {

	None = 0,

	Timed = 1,

	All = 2
}

declare class PSPDFUndoController extends NSObject {

	static alloc(): PSPDFUndoController; // inherited from NSObject

	static new(): PSPDFUndoController; // inherited from NSObject

	readonly canRedo: boolean;

	readonly canUndo: boolean;

	readonly hasIncompleteUndoActions: boolean;

	readonly incompleteUndoActionName: string;

	levelsOfUndo: number;

	readonly redoing: boolean;

	timedCoalescingInterval: number;

	readonly undoEnabled: boolean;

	readonly undoManager: NSUndoManager;

	readonly undoing: boolean;

	readonly working: boolean;

	commitIncompleteUndoActions(): void;

	endUndoGroupingWithPropertyOfObject(changedProperty: string, object: any): void;

	isObjectRegisteredForUndo(object: NSObject): boolean;

	prepareWithInvocationTargetBlock(target: any, block: (p1: any) => void): void;

	redo(): void;

	registerObjectForUndo(object: NSObject): void;

	removeAllActions(): void;

	removeAllActionsWithTarget(target: any): void;

	undo(): void;

	unregisterObjectForUndo(object: NSObject): void;
}

declare var PSPDFUndoControllerAddedUndoActionNotification: string;

declare var PSPDFUndoControllerRemovedUndoActionNotification: string;

interface PSPDFUndoProtocol extends NSObjectProtocol {

	didUndoOrRedoChange?(key: string): void;

	insertUndoObjectsForKey?(objects: NSSet<any>, key: string): void;

	removeUndoObjectsForKey?(objects: NSSet<any>, key: string): void;
}
declare var PSPDFUndoProtocol: {

	prototype: PSPDFUndoProtocol;

	keysForValuesToObserveForUndo(): NSSet<string>;

	localizedUndoActionNameForKey?(key: string): string;

	undoCoalescingForKey?(key: string): PSPDFUndoCoalescing;
};

declare class PSPDFUnsignedFormElementViewController extends PSPDFBaseTableViewController {

	static alloc(): PSPDFUnsignedFormElementViewController; // inherited from NSObject

	static new(): PSPDFUnsignedFormElementViewController; // inherited from NSObject

	allowInkSignature: boolean;

	delegate: PSPDFUnsignedFormElementViewControllerDelegate;

	readonly formElement: PSPDFSignatureFormElement;

	constructor(o: { signatureFormElement: PSPDFSignatureFormElement; registeredSigners: NSArray<PSPDFSigner>; });

	initWithSignatureFormElementRegisteredSigners(element: PSPDFSignatureFormElement, registeredSigners: NSArray<PSPDFSigner>): this;
}

interface PSPDFUnsignedFormElementViewControllerDelegate extends NSObjectProtocol {

	unsignedFormElementViewControllerRequestsInkSignature(controller: PSPDFUnsignedFormElementViewController): void;

	unsignedFormElementViewControllerSignedDocumentError?(controller: PSPDFUnsignedFormElementViewController, document: PSPDFDocument, error: NSError): void;
}
declare var PSPDFUnsignedFormElementViewControllerDelegate: {

	prototype: PSPDFUnsignedFormElementViewControllerDelegate;
};

declare class PSPDFUsernameHelper extends NSObject {

	static alloc(): PSPDFUsernameHelper; // inherited from NSObject

	static askForDefaultAnnotationUsernameIfNeededCompletionBlock(pdfViewController: PSPDFViewController, completionBlock: (p1: string) => void): void;

	static new(): PSPDFUsernameHelper; // inherited from NSObject

	static defaultAnnotationUsername: string;

	static readonly isDefaultAnnotationUserNameSet: boolean;

	askForDefaultAnnotationUsernameSuggestedNameCompletionBlock(viewController: UIViewController, suggestedName: string, completionBlock: (p1: string) => void): void;
}

declare var PSPDFUsernameHelperWillDismissAlertNotification: string;

declare const enum PSPDFVerticalAlignment {

	Top = 0,

	Center = 1,

	Bottom = 2
}

declare var PSPDFVerticalAlignmentName: string;

declare var PSPDFVerticalAlignmentTransformerName: string;

declare class PSPDFViewController extends PSPDFBaseViewController implements MFMailComposeViewControllerDelegate, MFMessageComposeViewControllerDelegate, PSPDFAnnotationTableViewControllerDelegate, PSPDFBackForwardActionListDelegate, PSPDFBookmarkViewControllerDelegate, PSPDFControlDelegate, PSPDFEmbeddedFilesViewControllerDelegate, PSPDFErrorHandler, PSPDFExternalURLHandler, PSPDFFlexibleToolbarContainerDelegate, PSPDFInlineSearchManagerDelegate, PSPDFOutlineViewControllerDelegate, PSPDFOverridable, PSPDFPresentationContext, PSPDFSearchViewControllerDelegate, PSPDFTextSearchDelegate, PSPDFWebViewControllerDelegate {

	static alloc(): PSPDFViewController; // inherited from NSObject

	static new(): PSPDFViewController; // inherited from NSObject

	readonly HUDView: PSPDFHUDView;

	HUDVisible: boolean;

	readonly activityButtonItem: UIBarButtonItem;

	readonly annotationButtonItem: UIBarButtonItem;

	readonly appearanceModeManager: PSPDFAppearanceModeManager;

	readonly backForwardList: PSPDFBackForwardActionList;

	barButtonItemsAlwaysEnabled: NSArray<UIBarButtonItem>;

	readonly bookmarkButtonItem: UIBarButtonItem;

	readonly brightnessButtonItem: UIBarButtonItem;

	readonly brightnessManager: PSPDFBrightnessManager;

	readonly closeButtonItem: UIBarButtonItem;

	readonly contentView: PSPDFRelayTouchesView;

	readonly controllerState: PSPDFControllerState;

	readonly controllerStateError: NSError;

	delegate: PSPDFViewControllerDelegate;

	document: PSPDFDocument;

	readonly documentEditorButtonItem: UIBarButtonItem;

	readonly documentEditorController: PSPDFDocumentEditorViewController;

	readonly documentInfoCoordinator: PSPDFDocumentInfoCoordinator;

	readonly emailButtonItem: UIBarButtonItem;

	readonly firstPage: boolean;

	formSubmissionDelegate: PSPDFFormSubmissionDelegate;

	readonly inlineSearchManager: PSPDFInlineSearchManager;

	readonly lastPage: boolean;

	readonly messageButtonItem: UIBarButtonItem;

	readonly navigationBarHidden: boolean;

	readonly navigationItem: PSPDFNavigationItem;

	readonly openInButtonItem: UIBarButtonItem;

	readonly outlineButtonItem: UIBarButtonItem;

	overlayViewController: UIViewController;

	pageIndex: number;

	readonly printButtonItem: UIBarButtonItem;

	scrollingEnabled: boolean;

	readonly searchActive: boolean;

	readonly searchButtonItem: UIBarButtonItem;

	readonly searchHighlightViewManager: PSPDFSearchHighlightViewManager;

	readonly settingsButtonItem: UIBarButtonItem;

	readonly textSearch: PSPDFTextSearch;

	readonly thumbnailController: PSPDFThumbnailViewController;

	readonly thumbnailsButtonItem: UIBarButtonItem;

	viewLockEnabled: boolean;

	viewMode: PSPDFViewMode;

	readonly actionDelegate: PSPDFControlDelegate; // inherited from PSPDFPresentationContext

	readonly annotationStateManager: PSPDFAnnotationStateManager; // inherited from PSPDFPresentationContext

	readonly annotationToolbarController: PSPDFAnnotationToolbarController; // inherited from PSPDFPresentationContext

	readonly configuration: PSPDFConfiguration; // inherited from PSPDFPresentationContext

	readonly contentRect: CGRect; // inherited from PSPDFPresentationContext

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly displayingViewController: UIViewController; // inherited from PSPDFPresentationContext

	readonly documentActionExecutor: PSPDFDocumentActionExecutor; // inherited from PSPDFPageControls

	readonly doublePageMode: boolean; // inherited from PSPDFPresentationContext

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly pagingScrollView: UIScrollView; // inherited from PSPDFPresentationContext

	readonly pdfController: PSPDFViewController; // inherited from PSPDFPresentationContext

	readonly pspdfkit: PSPDFKit; // inherited from PSPDFPresentationContext

	readonly reloading: boolean; // inherited from PSPDFPresentationContext

	readonly rotationActive: boolean; // inherited from PSPDFPresentationContext

	readonly scrollIndicatorInsets: UIEdgeInsets; // inherited from PSPDFPresentationContext

	readonly scrollViewInsets: UIEdgeInsets; // inherited from PSPDFPresentationContext

	readonly shouldAdjustFrameWhenHUDIsPersistent: boolean; // inherited from PSPDFPresentationContext

	readonly shouldShowControls: boolean; // inherited from PSPDFHUDControls

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly viewWillAppearing: boolean; // inherited from PSPDFPresentationContext

	readonly visiblePageIndexes: NSOrderedSet<number>; // inherited from PSPDFVisiblePagesDataSource

	readonly visiblePageIndexesCalculated: NSOrderedSet<number>; // inherited from PSPDFVisiblePagesDataSource

	readonly visiblePageViews: NSArray<PSPDFPageView>; // inherited from PSPDFPresentationContext

	readonly  // inherited from NSObjectProtocol

	constructor(o: { document: PSPDFDocument; });

	constructor(o: { document: PSPDFDocument; configuration: PSPDFConfiguration; });

	activityViewControllerWithSender(sender: any): UIActivityViewController;

	annotationButtonPressed(sender: any): void;

	annotationTableViewControllerDidSelectAnnotation(annotationController: PSPDFAnnotationTableViewController, annotation: PSPDFAnnotation): void;

	applyViewStateAnimateIfPossible(viewState: PSPDFViewState, animateIfPossible: boolean): void;

	backForwardListDidUpdate(list: PSPDFBackForwardActionList): void;

	backForwardListRequestedBackActionExecution(list: PSPDFBackForwardActionList, actions: NSArray<PSPDFAction>): void;

	backForwardListRequestedForwardActionExecution(list: PSPDFBackForwardActionList, actions: NSArray<PSPDFAction>): void;

	bookmarkViewControllerDidSelectBookmark(bookmarkController: PSPDFBookmarkViewController, bookmark: PSPDFBookmark): void;

	cancelSearchAnimated(animated: boolean): void;

	captureCurrentViewState(): PSPDFViewState;

	class(): typeof NSObject;

	classForClass(originalClass: typeof NSObject): typeof NSObject;

	commonInitWithDocumentConfiguration(document: PSPDFDocument, configuration: PSPDFConfiguration): void;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	currentPageForBookmarkViewController(bookmarkController: PSPDFBookmarkViewController): number;

	didCancelSearchTermIsFullSearch(textSearch: PSPDFTextSearch, searchTerm: string, isFullSearch: boolean): void;

	didFinishSearchTermSearchResultsIsFullSearchPageTextFound(textSearch: PSPDFTextSearch, searchTerm: string, searchResults: NSArray<PSPDFSearchResult>, isFullSearch: boolean, pageTextFound: boolean): void;

	didUpdateSearchTermNewSearchResultsPageIndex(textSearch: PSPDFTextSearch, searchTerm: string, searchResults: NSArray<PSPDFSearchResult>, pageIndex: number): void;

	dismissViewControllerOfClassAnimatedCompletion(controllerClass: typeof NSObject, animated: boolean, completion: () => void): boolean;

	embeddedFilesControllerDidSelectFileSender(embeddedFilesController: PSPDFEmbeddedFilesViewController, embeddedFile: PSPDFEmbeddedFile, sender: any): void;

	executePDFActionTargetRectPageIndexAnimatedActionContainer(action: PSPDFAction, targetRect: CGRect, pageIndex: number, animated: boolean, actionContainer: any): boolean;

	flexibleToolbarContainerContentRectForToolbarPosition(container: PSPDFFlexibleToolbarContainer, position: PSPDFFlexibleToolbarPosition): CGRect;

	flexibleToolbarContainerDidEndDraggingWithPosition(container: PSPDFFlexibleToolbarContainer, position: PSPDFFlexibleToolbarPosition): void;

	flexibleToolbarContainerDidHide(container: PSPDFFlexibleToolbarContainer): void;

	flexibleToolbarContainerDidShow(container: PSPDFFlexibleToolbarContainer): void;

	flexibleToolbarContainerWillHide(container: PSPDFFlexibleToolbarContainer): void;

	flexibleToolbarContainerWillShow(container: PSPDFFlexibleToolbarContainer): void;

	flexibleToolbarContainerWillStartDragging(container: PSPDFFlexibleToolbarContainer): void;

	handleErrorTitleMessage(error: NSError, title: string, message: string): void;

	handleExternalURLCompletionBlock(URL: NSURL, completionBlock: (p1: boolean) => void): boolean;

	hideControlsAndPageElementsAnimated(animated: boolean): boolean;

	hideControlsAnimated(animated: boolean): boolean;

	hideControlsForUserScrollActionAnimated(animated: boolean): boolean;

	initWithDocument(document: PSPDFDocument): this;

	initWithDocumentConfiguration(document: PSPDFDocument, configuration: PSPDFConfiguration): this;

	inlineSearchManagerContainerView(manager: PSPDFInlineSearchManager): UIView;

	inlineSearchManagerDidClearAllSearchResults(manager: PSPDFInlineSearchManager): void;

	inlineSearchManagerDidFocusSearchResult(manager: PSPDFInlineSearchManager, searchResult: PSPDFSearchResult): void;

	inlineSearchManagerSearchDidAppear(manager: PSPDFInlineSearchManager): void;

	inlineSearchManagerSearchDidDisappear(manager: PSPDFInlineSearchManager): void;

	inlineSearchManagerSearchWillAppear(manager: PSPDFInlineSearchManager): void;

	inlineSearchManagerSearchWillDisappear(manager: PSPDFInlineSearchManager): void;

	isDoublePageModeForPageAtIndex(pageIndex: number): boolean;

	isDoublePageModeForViewSize(viewSize: CGSize): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	isRightPageInDoublePageMode(pageIndex: number): boolean;

	isTrailingPageInDoublePageMode(pageIndex: number): boolean;

	landscapePageIndexForPortraitPageIndex(pageIndex: number): number;

	landscapePageSpreadForPortraitPageSpread(pageSpread: number): number;

	mailComposeControllerDidFinishWithResultError(controller: MFMailComposeViewController, result: MFMailComposeResult, error: NSError): void;

	messageComposeViewControllerDidFinishWithResult(controller: MFMessageComposeViewController, result: MessageComposeResult): void;

	outlineControllerDidTapAtElement(outlineController: PSPDFOutlineViewController, outlineElement: PSPDFOutlineElement): boolean;

	pageViewForPageAtIndex(pageIndex: number): PSPDFPageView;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	portraitPageIndexForLandscapePageIndex(pageIndex: number): number;

	portraitPageSpreadForLandscapePageSpread(pageSpread: number): number;

	presentDocumentInfoViewControllerWithOptionsSenderAnimatedCompletion(options: NSDictionary<string, any>, sender: any, animated: boolean, completion: () => void): UIViewController;

	presentPDFViewControllerWithDocumentOptionsSenderAnimatedConfigurationBlockCompletion(document: PSPDFDocument, options: NSDictionary<string, any>, sender: any, animated: boolean, configurationBlock: (p1: PSPDFViewController) => void, completion: () => void): void;

	presentPreviewControllerForURLTitleOptionsSenderAnimatedCompletion(fileURL: NSURL, title: string, options: NSDictionary<string, any>, sender: any, animated: boolean, completion: () => void): void;

	presentViewControllerOptionsAnimatedSenderCompletion(viewController: UIViewController, options: NSDictionary<string, any>, animated: boolean, sender: any, completion: () => void): boolean;

	reloadData(): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	scrollRectToVisibleAnimated(rect: CGRect, animated: boolean): void;

	scrollToNextPageAnimated(animated: boolean): boolean;

	scrollToPreviousPageAnimated(animated: boolean): boolean;

	searchForStringOptionsSenderAnimated(searchText: string, options: NSDictionary<string, any>, sender: any, animated: boolean): void;

	searchViewControllerDidClearAllSearchResults(searchController: PSPDFSearchViewController): void;

	searchViewControllerDidTapSearchResult(searchController: PSPDFSearchViewController, searchResult: PSPDFSearchResult): void;

	searchViewControllerGetVisiblePages(searchController: PSPDFSearchViewController): NSArray<number>;

	searchViewControllerSearchRangeForScope(searchController: PSPDFSearchViewController, scope: string): NSIndexSet;

	searchViewControllerTextSearchObject(searchController: PSPDFSearchViewController): PSPDFTextSearch;

	self(): this;

	setHUDVisibleAnimated(show: boolean, animated: boolean): boolean;

	setPageIndexAnimated(pageIndex: number, animated: boolean): boolean;

	setPageIndexOptionsAnimated(pageIndex: number, options: NSDictionary<string, number>, animated: boolean): boolean;

	setUpdateSettingsForBoundsChangeBlock(block: (p1: PSPDFViewController) => void): void;

	setViewModeAnimated(viewMode: PSPDFViewMode, animated: boolean): void;

	setZoomScaleAnimated(scale: number, animated: boolean): void;

	showControlsAnimated(animated: boolean): boolean;

	showMenuIfSelectedAnimatedAllowPopovers(animated: boolean, allowPopovers: boolean): void;

	toggleControlsAnimated(animated: boolean): boolean;

	updateConfigurationWithBuilder(builderBlock: (p1: PSPDFConfigurationBuilder) => void): void;

	updateConfigurationWithoutReloadingWithBuilder(builderBlock: (p1: PSPDFConfigurationBuilder) => void): void;

	updateToolbarAnimated(animated: boolean): void;

	updatepageIndexAnimated(pageIndex: number, animated: boolean): void;

	visiblePageViewsForcingLayout(forcingLayout: boolean): NSArray<PSPDFPageView>;

	webViewControllerDidFailLoadWithError(controller: PSPDFWebViewController, error: NSError): void;

	webViewControllerDidFinishLoad(controller: PSPDFWebViewController): void;

	webViewControllerDidStartLoad(controller: PSPDFWebViewController): void;

	willStartSearchTermIsFullSearch(textSearch: PSPDFTextSearch, searchTerm: string, isFullSearch: boolean): void;

	zoomToRectPageIndexAnimated(rect: CGRect, pageIndex: number, animated: boolean): void;
}

interface PSPDFViewControllerDelegate extends NSObjectProtocol {

	pdfViewControllerAnnotationViewForAnnotationOnPageView?(pdfController: PSPDFViewController, annotationView: UIView, annotation: PSPDFAnnotation, pageView: PSPDFPageView): UIView;

	pdfViewControllerDidBeginPageDragging?(pdfController: PSPDFViewController, scrollView: UIScrollView): void;

	pdfViewControllerDidBeginPageZooming?(pdfController: PSPDFViewController, scrollView: UIScrollView): void;

	pdfViewControllerDidChangeControllerState?(pdfController: PSPDFViewController): void;

	pdfViewControllerDidChangeDocument?(pdfController: PSPDFViewController, document: PSPDFDocument): void;

	pdfViewControllerDidChangeViewMode?(pdfController: PSPDFViewController, viewMode: PSPDFViewMode): void;

	pdfViewControllerDidDismiss?(pdfController: PSPDFViewController): void;

	pdfViewControllerDidEndPageDraggingWillDecelerateWithVelocityTargetContentOffset?(pdfController: PSPDFViewController, scrollView: UIScrollView, decelerate: boolean, velocity: CGPoint, targetContentOffset: interop.Pointer | interop.Reference<CGPoint>): void;

	pdfViewControllerDidEndPageScrollingAnimation?(pdfController: PSPDFViewController, scrollView: UIScrollView): void;

	pdfViewControllerDidEndPageZoomingAtScale?(pdfController: PSPDFViewController, scrollView: UIScrollView, scale: number): void;

	pdfViewControllerDidExecuteAction?(pdfController: PSPDFViewController, action: PSPDFAction): void;

	pdfViewControllerDidHideHUD?(pdfController: PSPDFViewController, animated: boolean): void;

	pdfViewControllerDidLoadPageView?(pdfController: PSPDFViewController, pageView: PSPDFPageView): void;

	pdfViewControllerDidLongPressOnPageViewAtPointGestureRecognizer?(pdfController: PSPDFViewController, pageView: PSPDFPageView, viewPoint: CGPoint, gestureRecognizer: UILongPressGestureRecognizer): boolean;

	pdfViewControllerDidRenderPageView?(pdfController: PSPDFViewController, pageView: PSPDFPageView): void;

	pdfViewControllerDidSelectAnnotationsOnPageView?(pdfController: PSPDFViewController, annotations: NSArray<PSPDFAnnotation>, pageView: PSPDFPageView): void;

	pdfViewControllerDidSelectTextWithGlyphsAtRectOnPageView?(pdfController: PSPDFViewController, text: string, glyphs: NSArray<PSPDFGlyph>, rect: CGRect, pageView: PSPDFPageView): void;

	pdfViewControllerDidShowAnnotationViewOnPageView?(pdfController: PSPDFViewController, annotationView: UIView, pageView: PSPDFPageView): void;

	pdfViewControllerDidShowControllerOptionsAnimated?(pdfController: PSPDFViewController, controller: UIViewController, options: NSDictionary<string, any>, animated: boolean): void;

	pdfViewControllerDidShowHUD?(pdfController: PSPDFViewController, animated: boolean): void;

	pdfViewControllerDidShowPageView?(pdfController: PSPDFViewController, pageView: PSPDFPageView): void;

	pdfViewControllerDidTapOnAnnotationAnnotationPointAnnotationViewPageViewViewPoint?(pdfController: PSPDFViewController, annotation: PSPDFAnnotation, annotationPoint: CGPoint, annotationView: UIView, pageView: PSPDFPageView, viewPoint: CGPoint): boolean;

	pdfViewControllerDidTapOnPageViewAtPoint?(pdfController: PSPDFViewController, pageView: PSPDFPageView, viewPoint: CGPoint): boolean;

	pdfViewControllerDocumentForRelativePath?(pdfController: PSPDFViewController, relativePath: string): PSPDFDocument;

	pdfViewControllerShouldChangeDocument?(pdfController: PSPDFViewController, document: PSPDFDocument): boolean;

	pdfViewControllerShouldDisplayAnnotationOnPageView?(pdfController: PSPDFViewController, annotation: PSPDFAnnotation, pageView: PSPDFPageView): boolean;

	pdfViewControllerShouldExecuteAction?(pdfController: PSPDFViewController, action: PSPDFAction): boolean;

	pdfViewControllerShouldHideHUD?(pdfController: PSPDFViewController, animated: boolean): boolean;

	pdfViewControllerShouldScrollToPageAtIndex?(pdfController: PSPDFViewController, pageIndex: number): boolean;

	pdfViewControllerShouldSelectAnnotationsOnPageView?(pdfController: PSPDFViewController, annotations: NSArray<PSPDFAnnotation>, pageView: PSPDFPageView): NSArray<PSPDFAnnotation>;

	pdfViewControllerShouldSelectTextWithGlyphsAtRectOnPageView?(pdfController: PSPDFViewController, text: string, glyphs: NSArray<PSPDFGlyph>, rect: CGRect, pageView: PSPDFPageView): boolean;

	pdfViewControllerShouldShowControllerOptionsAnimated?(pdfController: PSPDFViewController, controller: UIViewController, options: NSDictionary<string, any>, animated: boolean): boolean;

	pdfViewControllerShouldShowHUD?(pdfController: PSPDFViewController, animated: boolean): boolean;

	pdfViewControllerShouldShowMenuItemsAtSuggestedTargetRectForAnnotationsInRectOnPageView?(pdfController: PSPDFViewController, menuItems: NSArray<PSPDFMenuItem>, rect: CGRect, annotations: NSArray<PSPDFAnnotation>, annotationRect: CGRect, pageView: PSPDFPageView): NSArray<PSPDFMenuItem>;

	pdfViewControllerShouldShowMenuItemsAtSuggestedTargetRectForSelectedImageInRectOnPageView?(pdfController: PSPDFViewController, menuItems: NSArray<PSPDFMenuItem>, rect: CGRect, selectedImage: PSPDFImageInfo, textRect: CGRect, pageView: PSPDFPageView): NSArray<PSPDFMenuItem>;

	pdfViewControllerShouldShowMenuItemsAtSuggestedTargetRectForSelectedTextInRectOnPageView?(pdfController: PSPDFViewController, menuItems: NSArray<PSPDFMenuItem>, rect: CGRect, selectedText: string, textRect: CGRect, pageView: PSPDFPageView): NSArray<PSPDFMenuItem>;

	pdfViewControllerWillDismiss?(pdfController: PSPDFViewController): void;

	pdfViewControllerWillShowAnnotationViewOnPageView?(pdfController: PSPDFViewController, annotationView: UIView, pageView: PSPDFPageView): void;

	pdfViewControllerWillUnloadPageView?(pdfController: PSPDFViewController, pageView: PSPDFPageView): void;
}
declare var PSPDFViewControllerDelegate: {

	prototype: PSPDFViewControllerDelegate;
};

declare var PSPDFViewControllerDidLoadPageViewNotification: string;

declare var PSPDFViewControllerDidShowPageViewNotification: string;

declare var PSPDFViewControllerSearchHeadlessKey: string;

declare const enum PSPDFViewMode {

	Document = 0,

	Thumbnails = 1,

	DocumentEditor = 2
}

interface PSPDFViewModePresenter extends NSObjectProtocol {

	cellClass: typeof NSObject;

	document: PSPDFDocument;

	fixedItemSizeEnabled: boolean;

	presentationContext: PSPDFPresentationContext;

	initWithCollectionViewLayout?(layout: UICollectionViewLayout): PSPDFViewModePresenter;

	initWithDocument?(document: PSPDFDocument): PSPDFViewModePresenter;

	updateInsetsForTopOverlapHeight(overlapHeight: number): void;
}
declare var PSPDFViewModePresenter: {

	prototype: PSPDFViewModePresenter;
};

declare class PSPDFViewState extends PSPDFModel implements NSSecureCoding {

	static alloc(): PSPDFViewState; // inherited from NSObject

	static modelWithDictionaryError(dictionaryValue: NSDictionary<string, any>): PSPDFViewState; // inherited from PSPDFModel

	static new(): PSPDFViewState; // inherited from NSObject

	readonly hasViewPort: boolean;

	readonly pageIndex: number;

	readonly selectionState: PSPDFSelectionState;

	readonly viewPort: CGRect;

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { pageIndex: number; });

	constructor(o: { pageIndex: number; selectionState: PSPDFSelectionState; });

	constructor(o: { pageIndex: number; viewPort: CGRect; });

	constructor(o: { pageIndex: number; viewPort: CGRect; selectionState: PSPDFSelectionState; });

	encodeWithCoder(aCoder: NSCoder): void;

	initWithCoder(aDecoder: NSCoder): this;

	initWithPageIndex(pageIndex: number): this;

	initWithPageIndexSelectionState(pageIndex: number, selectionState: PSPDFSelectionState): this;

	initWithPageIndexViewPort(pageIndex: number, viewPort: CGRect): this;

	initWithPageIndexViewPortSelectionState(pageIndex: number, viewPort: CGRect, selectionState: PSPDFSelectionState): this;

	isEqualToViewStateWithAccuracy(other: PSPDFViewState, leeway: number): boolean;
}

interface PSPDFVisiblePagesDataSource extends NSObjectProtocol {

	pageIndex: number;

	visiblePageIndexes: NSOrderedSet<number>;

	visiblePageIndexesCalculated: NSOrderedSet<number>;
}
declare var PSPDFVisiblePagesDataSource: {

	prototype: PSPDFVisiblePagesDataSource;
};

declare var PSPDFWebKitLegacyModeKey: string;

declare class PSPDFWebViewController extends PSPDFBaseViewController implements PSPDFStyleable, UIWebViewDelegate {

	static alloc(): PSPDFWebViewController; // inherited from NSObject

	static modalWebViewWithURL(URL: NSURL): UINavigationController;

	static new(): PSPDFWebViewController; // inherited from NSObject

	availableActions: PSPDFWebViewControllerAvailableActions;

	readonly createDefaultActivityViewController: UIActivityViewController;

	delegate: PSPDFWebViewControllerDelegate;

	excludedActivities: NSArray<string>;

	shouldUpdateTitleFromWebContent: boolean;

	showProgressIndicator: boolean;

	suppressesIncrementalRendering: boolean;

	useCustomErrorPage: boolean;

	useModernWebKit: boolean;

	readonly webView: UIView;

	barStyle: UIBarStyle; // inherited from PSPDFStyleable

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	forcesStatusBarHidden: boolean; // inherited from PSPDFStyleable

	readonly hash: number; // inherited from NSObjectProtocol

	isBarTranslucent: boolean; // inherited from PSPDFStyleable

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { URL: NSURL; });

	constructor(o: { URLRequest: NSURLRequest; });

	action(sender: UIBarButtonItem): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	done(sender: any): void;

	goBack(sender: any): void;

	goForward(sender: any): void;

	initWithURL(URL: NSURL): this;

	initWithURLRequest(request: NSURLRequest): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	reload(sender: any): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	showHTMLWithError(error: NSError): void;

	stop(sender: any): void;

	webViewDidFailLoadWithError(webView: UIWebView, error: NSError): void;

	webViewDidFinishLoad(webView: UIWebView): void;

	webViewDidStartLoad(webView: UIWebView): void;

	webViewShouldStartLoadWithRequestNavigationType(webView: UIWebView, request: NSURLRequest, navigationType: UIWebViewNavigationType): boolean;
}

declare const enum PSPDFWebViewControllerAvailableActions {

	None = 0,

	OpenInSafari = 1,

	MailLink = 2,

	CopyLink = 4,

	Print = 8,

	StopReload = 16,

	Back = 32,

	Forward = 64,

	Facebook = 128,

	Twitter = 256,

	Message = 512,

	OpenInChrome = 1024,

	All = 16777215
}

interface PSPDFWebViewControllerDelegate extends PSPDFExternalURLHandler {

	webViewControllerDidFailLoadWithError?(controller: PSPDFWebViewController, error: NSError): void;

	webViewControllerDidFinishLoad?(controller: PSPDFWebViewController): void;

	webViewControllerDidStartLoad?(controller: PSPDFWebViewController): void;
}
declare var PSPDFWebViewControllerDelegate: {

	prototype: PSPDFWebViewControllerDelegate;
};

declare var PSPDFWebViewControllerDidFailToLoadNotification: string;

declare var PSPDFWebViewControllerDidFinishLoadingNotification: string;

declare var PSPDFWebViewControllerDidStartLoadingNotification: string;

declare class PSPDFWidgetAnnotation extends PSPDFAnnotation {

	static alloc(): PSPDFWidgetAnnotation; // inherited from NSObject

	static modelWithDictionaryError(dictionaryValue: NSDictionary<string, any>): PSPDFWidgetAnnotation; // inherited from PSPDFModel

	static new(): PSPDFWidgetAnnotation; // inherited from NSObject

	action: PSPDFAction;

	widgetRotation: number;
}

declare class PSPDFWord extends NSObject implements NSCopying, NSSecureCoding {

	static alloc(): PSPDFWord; // inherited from NSObject

	static new(): PSPDFWord; // inherited from NSObject

	frame: CGRect;

	glyphs: NSArray<PSPDFGlyph>;

	lineBreaker: boolean;

	readonly pageRotation: number;

	readonly stringValue: string;

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { frame: CGRect; pageRotation: number; });

	constructor(o: { glyphs: NSArray<PSPDFGlyph>; pageRotation: number; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	encodeWithCoder(aCoder: NSCoder): void;

	initWithCoder(aDecoder: NSCoder): this;

	initWithFramePageRotation(wordFrame: CGRect, pageRotation: number): this;

	initWithGlyphsPageRotation(wordGlyphs: NSArray<PSPDFGlyph>, pageRotation: number): this;
}

declare class PSPDFX509 extends NSObject {

	static adobeCA(): PSPDFX509;

	static alloc(): PSPDFX509; // inherited from NSObject

	static certificatesFromPKCS7DataError(data: NSData): NSArray<PSPDFX509>;

	static new(): PSPDFX509; // inherited from NSObject

	readonly cert: interop.Pointer | interop.Reference<any>;

	readonly commonName: string;

	readonly publicKey: PSPDFRSAKey;

	constructor(o: { x509: interop.Pointer | interop.Reference<any>; });

	initWithX509(x509: interop.Pointer | interop.Reference<any>): this;
}

declare var PSPDFXCallbackURLStringKey: string;

declare class PSPDFXFDFAnnotationProvider extends PSPDFContainerAnnotationProvider {

	static alloc(): PSPDFXFDFAnnotationProvider; // inherited from NSObject

	static new(): PSPDFXFDFAnnotationProvider; // inherited from NSObject

	createInputStreamBlock: (p1: PSPDFXFDFAnnotationProvider) => NSInputStream;

	createOutputStreamBlock: (p1: PSPDFXFDFAnnotationProvider) => NSOutputStream;

	readonly fileURL: NSURL;

	readonly inputStream: NSInputStream;

	readonly outputStream: NSOutputStream;

	constructor(o: { documentProvider: PSPDFDocumentProvider; fileURL: NSURL; });

	initWithDocumentProviderFileURL(documentProvider: PSPDFDocumentProvider, XFDFFileURL: NSURL): this;

	loadAllAnnotations(): void;
}

declare class PSPDFXFDFParser extends NSObject {

	static alloc(): PSPDFXFDFParser; // inherited from NSObject

	static new(): PSPDFXFDFParser; // inherited from NSObject

	readonly annotations: NSArray<PSPDFAnnotation>;

	readonly documentProvider: PSPDFDocumentProvider;

	readonly inputStream: NSInputStream;

	readonly parsing: boolean;

	readonly parsingEnded: boolean;

	constructor(o: { inputStream: NSInputStream; documentProvider: PSPDFDocumentProvider; });

	initWithInputStreamDocumentProvider(inputStream: NSInputStream, documentProvider: PSPDFDocumentProvider): this;

	parseWithError(): NSArray<PSPDFAnnotation>;
}

declare class PSPDFXFDFWriter extends NSObject {

	static alloc(): PSPDFXFDFWriter; // inherited from NSObject

	static new(): PSPDFXFDFWriter; // inherited from NSObject

	writeAnnotationsToOutputStreamDocumentProviderError(annotations: NSArray<PSPDFAnnotation>, outputStream: NSOutputStream, documentProvider: PSPDFDocumentProvider): boolean;
}

declare var PSPDFXMPDCNamespace: string;

declare var PSPDFXMPDCNamespacePrefix: string;

declare var PSPDFXMPPDFNamespace: string;

declare var PSPDFXMPPDFNamespacePrefix: string;
