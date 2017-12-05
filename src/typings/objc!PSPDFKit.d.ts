
declare class PSPDFAESCryptoDataProvider extends NSObject implements PSPDFFileDataProviding {

	static alloc(): PSPDFAESCryptoDataProvider; // inherited from NSObject

	static new(): PSPDFAESCryptoDataProvider; // inherited from NSObject

	readonly UID: string; // inherited from PSPDFDataProviding

	readonly additionalOperationsSupported: PSPDFDataProvidingAdditionalOperations; // inherited from PSPDFDataProviding

	readonly canWrite: boolean; // inherited from PSPDFDataProviding

	readonly data: NSData; // inherited from PSPDFDataProviding

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly fileURL: NSURL; // inherited from PSPDFFileDataProviding

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly progress: NSProgress; // inherited from PSPDFDataProviding

	signature: NSData; // inherited from PSPDFDataProviding

	readonly size: number; // inherited from PSPDFDataProviding

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly useDiskCache: boolean; // inherited from PSPDFDataProviding

	readonly  // inherited from NSObjectProtocol

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { legacyFileFormatURL: NSURL; passphraseProvider: () => string; });

	constructor(o: { URL: NSURL; binaryKeyProvider: () => NSData; });

	constructor(o: { URL: NSURL; passphraseDataProvider: () => NSData; salt: NSData; rounds: number; });

	constructor(o: { URL: NSURL; passphraseProvider: () => string; });

	constructor(o: { URL: NSURL; passphraseProvider: () => string; salt: string; rounds: number; });

	class(): typeof NSObject;

	clearCache(): void;

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

declare class PSPDFAnnotation extends PSPDFModel implements PSPDFJSONSerializing, PSPDFUndoSupport {

	static JSONKeyPathsByPropertyKey(): NSDictionary<string, any>;

	static JSONTransformerForKey(key: string): NSValueTransformer;

	static alloc(): PSPDFAnnotation; // inherited from NSObject

	static annotationFromInstantJSONDocumentProviderError(instantJSON: NSData, documentProvider: PSPDFDocumentProvider): PSPDFAnnotation;

	static annotationFromJSONDictionaryDocumentProviderError(JSONDictionary: NSDictionary<string, any>, documentProvider: PSPDFDocumentProvider): PSPDFAnnotation;

	static classForParsingJSONDictionary(JSONDictionary: NSDictionary<string, any>): typeof NSObject;

	static isDeletable(): boolean;

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

	appearanceStreamGenerator: PSPDFAppearanceStreamGenerating;

	readonly attributedString: NSAttributedString;

	borderColor: UIColor;

	borderEffect: PSPDFAnnotationBorderEffect;

	borderEffectIntensity: number;

	borderStyle: PSPDFAnnotationBorderStyle;

	boundingBox: CGRect;

	color: UIColor;

	contents: string;

	readonly contentsLocked: boolean;

	creationDate: Date;

	dashArray: NSArray<number>;

	deleted: boolean;

	dirty: boolean;

	readonly document: PSPDFDocument;

	documentProvider: PSPDFDocumentProvider;

	editable: boolean;

	fillColor: UIColor;

	readonly fixedSize: CGSize;

	flags: PSPDFAnnotationFlags;

	fontAttributes: NSDictionary<string, any>;

	fontName: string;

	fontSize: number;

	group: string;

	readonly hasAppearanceStream: boolean;

	hidden: boolean;

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

	readonly shouldDrawNoteIconIfNeeded: boolean;

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

	generateInstantJSONWithError(): NSData;

	hitTestMinDiameter(point: CGPoint, minDiameter: number): boolean;

	imageWithSizeWithOptions(size: CGSize, options: NSDictionary<string, any>): UIImage;

	insertUndoObjectsForKey(objects: NSSet<any>, key: string): void;

	isEqual(object: any): boolean;

	isEqualToAnnotation(otherAnnotation: PSPDFAnnotation): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	maybeRenderCustomAppearanceStreamWithContextWithOptions(context: any, options: NSDictionary<string, any>): boolean;

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

declare class PSPDFAnnotationAppearanceStream extends NSObject {

	static alloc(): PSPDFAnnotationAppearanceStream; // inherited from NSObject

	static appearanceStreamWithFileURL(imageFileURL: NSURL): PSPDFAnnotationAppearanceStream;

	static appearanceStreamWithImage(image: UIImage): PSPDFAnnotationAppearanceStream;

	static new(): PSPDFAnnotationAppearanceStream; // inherited from NSObject

	readonly image: UIImage;

	readonly imageFileURL: NSURL;
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

declare var PSPDFAnnotationDrawCenteredKey: string;

declare var PSPDFAnnotationDrawFlattenedKey: string;

declare var PSPDFAnnotationDrawForPrintingKey: string;

declare var PSPDFAnnotationFixedSizeDisabled: CGSize;

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

declare var PSPDFAnnotationOptionAnimateViewKey: string;

declare var PSPDFAnnotationOptionSuppressNotificationsKey: string;

declare var PSPDFAnnotationOptionUserCreatedKey: string;

interface PSPDFAnnotationProvider extends NSObjectProtocol {

	delegate?: PSPDFAnnotationProviderDelegate;

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

interface PSPDFAnnotationProviderDelegate extends NSObjectProtocol {

	annotationProviderDidSaveAnnotations?(annotationProvider: PSPDFAnnotationProvider, annotations: NSArray<PSPDFAnnotation>): void;

	annotationProviderFailedToSaveAnnotationsError?(annotationProvider: PSPDFAnnotationProvider, annotations: NSArray<PSPDFAnnotation>, error: NSError): void;
}
declare var PSPDFAnnotationProviderDelegate: {

	prototype: PSPDFAnnotationProviderDelegate;
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

declare function PSPDFAnnotationStateFromStateVariantIdentifier(p1: string): string;

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

declare var PSPDFAnnotationStringScreen: string;

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

	setDefaultPresetsForKeyType(presets: NSArray<PSPDFModel>, key: string, type: string): void;

	setLastUsedValueForPropertyForKey(value: any, styleProperty: string, key: string): void;

	setPresetsForKeyType(presets: NSArray<PSPDFModel>, key: string, type: string): void;

	setupDefaultStylesIfNeeded(): void;

	stylesForKey(key: string): NSArray<PSPDFAnnotationStyle>;
}
declare var PSPDFAnnotationStyleManager: {

	prototype: PSPDFAnnotationStyleManager;
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

declare class PSPDFAnnotationToolbarConfiguration extends PSPDFModel {

	static alloc(): PSPDFAnnotationToolbarConfiguration; // inherited from NSObject

	static modelWithDictionaryError(dictionaryValue: NSDictionary<string, any>): PSPDFAnnotationToolbarConfiguration; // inherited from PSPDFModel

	static new(): PSPDFAnnotationToolbarConfiguration; // inherited from NSObject

	readonly annotationGroups: NSArray<PSPDFAnnotationGroup>;

	constructor(o: { annotationGroups: NSArray<PSPDFAnnotationGroup>; });

	initWithAnnotationGroups(annotationGroups: NSArray<PSPDFAnnotationGroup>): this;
}

declare const enum PSPDFAnnotationTriggerEvent {

	CursorEnters = 0,

	CursorExits = 1,

	MouseDown = 2,

	MouseUp = 3,

	ReceiveFocus = 4,

	LoseFocus = 5,

	PageOpened = 6,

	PageClosed = 7,

	PageVisible = 8,

	FormChanged = 9,

	FieldFormat = 10,

	FormValidate = 11,

	FormCalculate = 12,

	LooseFocus = 5
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

declare var PSPDFAnnotationWriteOptionsGenerateAppearanceStreamForTypeKey: string;

declare var PSPDFAnnotationsAddedNotification: string;

declare var PSPDFAnnotationsRemovedNotification: string;

declare class PSPDFAppearanceCharacteristics extends PSPDFModel {

	static alloc(): PSPDFAppearanceCharacteristics; // inherited from NSObject

	static modelWithDictionaryError(dictionaryValue: NSDictionary<string, any>): PSPDFAppearanceCharacteristics; // inherited from PSPDFModel

	static new(): PSPDFAppearanceCharacteristics; // inherited from NSObject

	normalIcon: UIImage;
}

declare var PSPDFAppearanceGenerationFlatten: string;

declare var PSPDFAppearanceGenerationPrint: string;

interface PSPDFAppearanceStreamGenerating extends NSObjectProtocol {

	dataProviderForAnnotationOptions(annotation: PSPDFAnnotation, options: NSDictionary<string, any>): PSPDFDataProviding;
}
declare var PSPDFAppearanceStreamGenerating: {

	prototype: PSPDFAppearanceStreamGenerating;
};

interface PSPDFApplicationJSExport extends JSExport, NSObjectProtocol {

	numFields: number;

	pageNum: number;

	viewerVersion: number;

	alert(params: any): void;

	buttonImportIconPageSourceForm(cPath: string, nPage: number, formElement: PSPDFFormElement): number;

	buttonImportIconPageSourceForm__JS_EXPORT_AS__buttonImportIcon?(cPath: string, nPage: number, formElement: PSPDFFormElement, argument: any): number;

	getNthFieldName(index: number): string;

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

declare class PSPDFBookmark extends PSPDFModel implements NSCopying, NSMutableCopying {

	static alloc(): PSPDFBookmark; // inherited from NSObject

	static modelWithDictionaryError(dictionaryValue: NSDictionary<string, any>): PSPDFBookmark; // inherited from PSPDFModel

	static new(): PSPDFBookmark; // inherited from NSObject

	readonly action: PSPDFAction;

	readonly displayName: string;

	readonly identifier: string;

	readonly name: string;

	readonly pageIndex: number;

	readonly sortKey: number;

	constructor(o: { action: PSPDFAction; });

	constructor(o: { identifier: string; action: PSPDFAction; name: string; sortKey: number; });

	constructor(o: { pageIndex: number; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	initWithAction(action: PSPDFAction): this;

	initWithIdentifierActionNameSortKey(identifier: string, action: PSPDFAction, name: string, sortKey: number): this;

	initWithPageIndex(pageIndex: number): this;

	mutableCopyWithZone(zone: interop.Pointer | interop.Reference<any>): any;
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

declare var PSPDFBookmarksChangedNotification: string;

declare var PSPDFBorderEffectTransformerName: string;

declare var PSPDFBorderStyleTransformerName: string;

declare function PSPDFBoundingBoxFromGlyphs(glyphs: NSArray<PSPDFGlyph>, pageRotation: number): CGRect;

declare function PSPDFBoundingBoxFromLines(lines: NSArray<any>, lineWidth: number): CGRect;

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

declare class PSPDFButtonFormField extends PSPDFFormField {

	static alloc(): PSPDFButtonFormField; // inherited from NSObject

	static insertedButtonFieldWithTypeFullyQualifiedNameDocumentProviderFormElementsButtonValuesError(type: PSPDFFormFieldType, fullyQualifiedName: string, documentProvider: PSPDFDocumentProvider, formElements: NSArray<PSPDFFormElement>, buttonValues: NSArray<string>): PSPDFButtonFormField;

	static modelWithDictionaryError(dictionaryValue: NSDictionary<string, any>): PSPDFButtonFormField; // inherited from PSPDFModel

	static new(): PSPDFButtonFormField; // inherited from NSObject

	readonly isCheckBox: boolean;

	readonly isPushButton: boolean;

	readonly isRadioButton: boolean;

	options: NSArray<PSPDFFormOption>;

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

	readonly diskCache: PSPDFDiskCache;

	readonly memoryCache: PSPDFMemoryCache;

	constructor(o: { settings: PSPDFKit; });

	cacheDocumentWithPageSizes(document: PSPDFDocument, sizes: NSArray<NSValue>): void;

	cacheDocumentWithPageSizesImageRenderingCompletionBlock(document: PSPDFDocument, sizes: NSArray<NSValue>, pageCompletionBlock: (p1: UIImage, p2: PSPDFDocument, p3: number, p4: CGSize) => void): void;

	cacheStatusForRequestImageSizeMatching(request: PSPDFRenderRequest, imageSizeMatching: PSPDFCacheImageSizeMatching): PSPDFCacheStatus;

	clearCache(): void;

	imageForRequestImageSizeMatching(request: PSPDFRenderRequest, imageSizeMatching: PSPDFCacheImageSizeMatching): UIImage;

	initWithSettings(pspdfkit: PSPDFKit): this;

	invalidateImageFromDocumentPageIndex(document: PSPDFDocument, pageIndex: number): void;

	removeCacheForDocument(document: PSPDFDocument): void;

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

declare class PSPDFChoiceFormField extends PSPDFFormField {

	static alloc(): PSPDFChoiceFormField; // inherited from NSObject

	static insertedChoiceFieldWithTypeFullyQualifiedNameDocumentProviderFormElementError(type: PSPDFFormFieldType, fullyQualifiedName: string, documentProvider: PSPDFDocumentProvider, formElement: PSPDFFormElement): PSPDFChoiceFormField;

	static modelWithDictionaryError(dictionaryValue: NSDictionary<string, any>): PSPDFChoiceFormField; // inherited from PSPDFModel

	static new(): PSPDFChoiceFormField; // inherited from NSObject

	commitOnSelChange: boolean;

	readonly customSelection: boolean;

	customText: string;

	doNotSpellCheck: boolean;

	readonly isCombo: boolean;

	isEdit: boolean;

	isMultiSelect: boolean;

	options: NSArray<PSPDFFormOption>;

	selectedIndices: NSIndexSet;
}

declare class PSPDFCircleAnnotation extends PSPDFAbstractShapeAnnotation {

	static alloc(): PSPDFCircleAnnotation; // inherited from NSObject

	static modelWithDictionaryError(dictionaryValue: NSDictionary<string, any>): PSPDFCircleAnnotation; // inherited from PSPDFModel

	static new(): PSPDFCircleAnnotation; // inherited from NSObject

	readonly bezierPath: UIBezierPath;
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

declare class PSPDFContainerAnnotationProvider extends NSObject implements PSPDFAnnotationProvider, PSPDFUndoSupport {

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

	delegate: PSPDFAnnotationProviderDelegate; // inherited from PSPDFAnnotationProvider

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

declare class PSPDFConversionOperation extends NSOperation {

	static alloc(): PSPDFConversionOperation; // inherited from NSObject

	static new(): PSPDFConversionOperation; // inherited from NSObject

	readonly error: NSError;

	readonly inputURL: NSURL;

	readonly options: NSDictionary<string, any>;

	readonly outputData: NSData;

	readonly outputURL: NSURL;
}

declare function PSPDFConvertPDFLinesToViewLines(lines: NSArray<NSArray<NSValue>>, cropBox: CGRect, rotation: number, bounds: CGRect): NSArray<NSArray<NSValue>>;

declare function PSPDFConvertPDFPointToViewPoint(pdfPoint: CGPoint, cropBox: CGRect, rotation: number, bounds: CGRect): CGPoint;

declare function PSPDFConvertPDFRectToViewRect(pdfRect: CGRect, cropBox: CGRect, rotation: number, bounds: CGRect): CGRect;

declare function PSPDFConvertViewLineToPDFLines(line: NSArray<NSValue>, cropBox: CGRect, rotation: number, bounds: CGRect): NSArray<NSValue>;

declare function PSPDFConvertViewLinesToPDFLines(lines: NSArray<NSArray<NSValue>>, cropBox: CGRect, rotation: number, bounds: CGRect): NSArray<NSArray<NSValue>>;

declare function PSPDFConvertViewPointToPDFPoint(viewPoint: CGPoint, cropBox: CGRect, rotation: number, bounds: CGRect): CGPoint;

declare function PSPDFConvertViewRectToPDFRect(viewRect: CGRect, cropBox: CGRect, rotation: number, bounds: CGRect): CGRect;

declare class PSPDFCoordinatedFileDataProvider extends PSPDFFileDataProvider implements NSFilePresenter, PSPDFCoordinatedFileDataProviding {

	static alloc(): PSPDFCoordinatedFileDataProvider; // inherited from NSObject

	static new(): PSPDFCoordinatedFileDataProvider; // inherited from NSObject

	readonly UID: string; // inherited from PSPDFDataProviding

	readonly additionalOperationsSupported: PSPDFDataProvidingAdditionalOperations; // inherited from PSPDFDataProviding

	readonly canWrite: boolean; // inherited from PSPDFDataProviding

	coordinationDelegate: PSPDFFileCoordinationDelegate; // inherited from PSPDFCoordinatedFileDataProviding

	readonly data: NSData; // inherited from PSPDFDataProviding

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly filePresenter: NSFilePresenter; // inherited from PSPDFCoordinatedFileDataProviding

	readonly fileURL: NSURL; // inherited from PSPDFFileDataProviding

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly observedPresentedItemUbiquityAttributes: NSSet<string>; // inherited from NSFilePresenter

	readonly presentedItemOperationQueue: NSOperationQueue; // inherited from NSFilePresenter

	readonly presentedItemURL: NSURL; // inherited from NSFilePresenter

	readonly progress: NSProgress; // inherited from PSPDFDataProviding

	signature: NSData; // inherited from PSPDFDataProviding

	readonly size: number; // inherited from PSPDFDataProviding

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly useDiskCache: boolean; // inherited from PSPDFDataProviding

	readonly  // inherited from NSObjectProtocol

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	accommodatePresentedItemDeletionWithCompletionHandler(completionHandler: (p1: NSError) => void): void;

	accommodatePresentedSubitemDeletionAtURLCompletionHandler(url: NSURL, completionHandler: (p1: NSError) => void): void;

	class(): typeof NSObject;

	clearCache(): void;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	createDataSinkWithOptionsError(options: PSPDFDataSinkOptions): PSPDFDataSink;

	deleteDataWithError(): boolean;

	encodeWithCoder(aCoder: NSCoder): void;

	initWithCoder(aDecoder: NSCoder): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	presentedItemDidChange(): void;

	presentedItemDidChangeUbiquityAttributes(attributes: NSSet<string>): void;

	presentedItemDidGainVersion(version: NSFileVersion): void;

	presentedItemDidLoseVersion(version: NSFileVersion): void;

	presentedItemDidMoveToURL(newURL: NSURL): void;

	presentedItemDidResolveConflictVersion(version: NSFileVersion): void;

	presentedSubitemAtURLDidGainVersion(url: NSURL, version: NSFileVersion): void;

	presentedSubitemAtURLDidLoseVersion(url: NSURL, version: NSFileVersion): void;

	presentedSubitemAtURLDidMoveToURL(oldURL: NSURL, newURL: NSURL): void;

	presentedSubitemAtURLDidResolveConflictVersion(url: NSURL, version: NSFileVersion): void;

	presentedSubitemDidAppearAtURL(url: NSURL): void;

	presentedSubitemDidChangeAtURL(url: NSURL): void;

	readDataWithSizeAtOffset(size: number, offset: number): NSData;

	relinquishPresentedItemToReader(reader: (p1: () => void) => void): void;

	relinquishPresentedItemToWriter(writer: (p1: () => void) => void): void;

	replaceWithDataSink(replacementDataSink: PSPDFDataSink): boolean;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	savePresentedItemChangesWithCompletionHandler(completionHandler: (p1: NSError) => void): void;

	self(): this;
}

interface PSPDFCoordinatedFileDataProviding extends PSPDFFileDataProviding {

	coordinationDelegate: PSPDFFileCoordinationDelegate;

	filePresenter: NSFilePresenter;
}
declare var PSPDFCoordinatedFileDataProviding: {

	prototype: PSPDFCoordinatedFileDataProviding;
};

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

declare class PSPDFDataContainerProvider extends NSObject implements PSPDFDataProviding {

	static alloc(): PSPDFDataContainerProvider; // inherited from NSObject

	static new(): PSPDFDataContainerProvider; // inherited from NSObject

	readonly UID: string; // inherited from PSPDFDataProviding

	readonly additionalOperationsSupported: PSPDFDataProvidingAdditionalOperations; // inherited from PSPDFDataProviding

	readonly canWrite: boolean; // inherited from PSPDFDataProviding

	readonly data: NSData; // inherited from PSPDFDataProviding

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly progress: NSProgress; // inherited from PSPDFDataProviding

	signature: NSData; // inherited from PSPDFDataProviding

	readonly size: number; // inherited from PSPDFDataProviding

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly useDiskCache: boolean; // inherited from PSPDFDataProviding

	readonly  // inherited from NSObjectProtocol

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { data: NSData; });

	class(): typeof NSObject;

	clearCache(): void;

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

interface PSPDFDataProviding extends NSObjectProtocol, NSSecureCoding {

	UID: string;

	additionalOperationsSupported: PSPDFDataProvidingAdditionalOperations;

	canWrite?: boolean;

	data: NSData;

	progress?: NSProgress;

	signature: NSData;

	size: number;

	useDiskCache?: boolean;

	clearCache?(): void;

	createDataSinkWithOptionsError?(options: PSPDFDataSinkOptions): PSPDFDataSink;

	deleteDataWithError?(): boolean;

	readDataWithSizeAtOffset(size: number, offset: number): NSData;

	replaceWithDataSink?(replacementDataSink: PSPDFDataSink): boolean;
}
declare var PSPDFDataProviding: {

	prototype: PSPDFDataProviding;
};

declare const enum PSPDFDataProvidingAdditionalOperations {

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

	static drawingBlue(): UIColor;

	static highlightYellow(): UIColor;

	static new(): PSPDFDefaultAnnotationStyleManager; // inherited from NSObject

	shouldUpdateDefaultsForAnnotationChanges: boolean; // inherited from PSPDFAnnotationStyleManager

	styleKeys: NSSet<string>; // inherited from PSPDFAnnotationStyleManager

	addStyleForKey(style: PSPDFAnnotationStyle, key: string): void;

	defaultColorPresetsForKey(key: string): NSArray<PSPDFColorPreset>;

	defaultPresetsForKeyType(key: string, type: string): NSArray<PSPDFModel>;

	isPresetModifiedAtIndexForKeyType(index: number, key: string, type: string): boolean;

	lastUsedPropertyForKey(styleProperty: string, key: string): any;

	lastUsedStyleForKey(key: string): PSPDFAnnotationStyle;

	presetsForKeyType(key: string, type: string): NSArray<PSPDFModel>;

	removeStyleForKey(style: PSPDFAnnotationStyle, key: string): void;

	resetPresetAtIndexForKeyType(idx: number, key: string, type: string): boolean;

	setDefaultPresetsForKeyType(presets: NSArray<PSPDFModel>, key: string, type: string): void;

	setLastUsedValueForPropertyForKey(value: any, styleProperty: string, key: string): void;

	setPresetsForKeyType(presets: NSArray<PSPDFModel>, key: string, type: string): void;

	setupDefaultStyles(): void;

	setupDefaultStylesIfNeeded(): void;

	stylesForKey(key: string): NSArray<PSPDFAnnotationStyle>;
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

	readonly ubiquityIdentityToken: any; // inherited from PSPDFFileManager

	readonly usesEncryption: boolean; // inherited from PSPDFFileManager

	readonly  // inherited from NSObjectProtocol

	constructor(o: { options: NSDictionary<string, any>; });

	URLForPublishingUbiquitousItemAtURLExpirationDateError(url: NSURL, outDate: interop.Pointer | interop.Reference<Date>): NSURL;

	URLForUbiquityContainerIdentifier(containerIdentifier: string): NSURL;

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

	createDirectoryAtURLWithIntermediateDirectoriesAttributesError(url: NSURL, createIntermediates: boolean, attributes: NSDictionary<string, any>): boolean;

	createFileAtPathContentsAttributes(path: string, data: NSData, attributes: NSDictionary<string, any>): boolean;

	createTemporaryWritableDataProviderWithPrefix(prefix: string): PSPDFDataProviding;

	dataWithContentsOfFileOptionsError(path: string, readOptionsMask: NSDataReadingOptions): NSData;

	dataWithContentsOfURLOptionsError(fileURL: NSURL, readOptionsMask: NSDataReadingOptions): NSData;

	destinationOfSymbolicLinkAtPathError(path: string): string;

	enumeratorAtPath(path: string): NSDirectoryEnumerator<string>;

	enumeratorAtURLIncludingPropertiesForKeysOptionsErrorHandler(url: NSURL, keys: NSArray<string>, mask: NSDirectoryEnumerationOptions, handler: (p1: NSURL, p2: NSError) => boolean): NSDirectoryEnumerator<NSURL>;

	evictUbiquitousItemAtURLError(url: NSURL): boolean;

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

	isUbiquitousItemAtURL(url: NSURL): boolean;

	isWritableFileAtPath(path: string): boolean;

	moveItemAtURLToURLError(sourceURL: NSURL, destinationURL: NSURL): boolean;

	performBlockWithoutCoordination(block: () => void): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	removeItemAtPathError(path: string): boolean;

	removeItemAtURLError(URL: NSURL): boolean;

	replaceItemAtURLWithItemAtURLBackupItemNameOptionsResultingItemURLError(originalItemURL: NSURL, newItemURL: NSURL, backupItemName: string, options: NSFileManagerItemReplacementOptions, resultingURL: interop.Pointer | interop.Reference<NSURL>): boolean;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	setUbiquitousItemAtURLDestinationURLError(flag: boolean, url: NSURL, destinationURL: NSURL): boolean;

	startDownloadingUbiquitousItemAtURLError(url: NSURL): boolean;

	subpathsOfDirectoryAtPathError(path: string): NSArray<string>;

	temporaryDirectoryWithUID(UID: string): string;

	unencryptedTemporaryDirectoryWithUID(UID: string): string;

	writeDataToFileOptionsError(data: NSData, path: string, writeOptionsMask: NSDataWritingOptions): boolean;

	writeDataToURLOptionsError(data: NSData, fileURL: NSURL, writeOptionsMask: NSDataWritingOptions): boolean;
}

declare var PSPDFDefaultIntensity: number;

declare var PSPDFDefaultPBKDFNumberOfRounds: number;

declare var PSPDFDefaultTextPaddingFactor: number;

declare class PSPDFDigitalSignatureReference extends NSObject {

	static alloc(): PSPDFDigitalSignatureReference; // inherited from NSObject

	static new(): PSPDFDigitalSignatureReference; // inherited from NSObject

	readonly digestLocation: NSRange;

	readonly digestMethod: string;

	readonly digestValue: string;

	readonly transformMethod: PSPDFDigitalSignatureReferenceTransformMethod;

	readonly transformParams: NSDictionary<string, any>;
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

declare class PSPDFDocument extends NSObject implements NSCopying, NSFastEnumeration, NSSecureCoding, PSPDFDocumentProviderDelegate, PSPDFFileCoordinationDelegate, PSPDFOverridable {

	static alloc(): PSPDFDocument; // inherited from NSObject

	static new(): PSPDFDocument; // inherited from NSObject

	UID: string;

	readonly allEmbeddedFiles: NSArray<PSPDFEmbeddedFile>;

	readonly allowAnnotationChanges: boolean;

	annotationSaveMode: PSPDFAnnotationSaveMode;

	annotationWritingOptions: NSDictionary<string, number>;

	annotationsEnabled: boolean;

	autodetectTextLinkTypes: PSPDFTextCheckingType;

	readonly bookmarkManager: PSPDFBookmarkManager;

	readonly bookmarks: NSArray<PSPDFBookmark>;

	bookmarksEnabled: boolean;

	readonly canEmbedAnnotations: boolean;

	readonly canSaveAnnotations: boolean;

	readonly checkpointer: PSPDFDocumentCheckpointer;

	readonly containsAnnotations: boolean;

	readonly data: NSData;

	readonly dataArray: NSArray<NSData>;

	dataDirectory: string;

	readonly dataProviders: NSArray<PSPDFDataProviding>;

	defaultAnnotationUsername: string;

	delegate: PSPDFDocumentDelegate;

	didCreateDocumentProviderBlock: (p1: PSPDFDocumentProvider) => void;

	readonly documentId: NSData;

	readonly documentIdString: string;

	readonly documentProviders: NSArray<PSPDFDocumentProvider>;

	readonly encryptionFilter: string;

	readonly error: NSError;

	readonly fileName: string;

	readonly fileNamesWithDataDictionary: NSDictionary<string, NSData>;

	readonly filePresenters: NSArray<NSFilePresenter>;

	readonly fileURL: NSURL;

	readonly fileURLs: NSArray<NSURL>;

	readonly formParser: PSPDFFormParser;

	formsEnabled: boolean;

	readonly hasDirtyAnnotations: boolean;

	readonly isEncrypted: boolean;

	readonly isLocked: boolean;

	javaScriptEnabled: boolean;

	originalFile: PSPDFFile;

	readonly outline: PSPDFOutlineElement;

	pageBinding: PSPDFPageBinding;

	readonly pageCount: number;

	pageLabelsEnabled: boolean;

	readonly permissions: PSPDFDocumentPermissions;

	readonly progress: NSProgress;

	readonly pspdfkit: PSPDFKit;

	renderAnnotationTypes: PSPDFAnnotationType;

	title: string;

	readonly titleLoaded: boolean;

	readonly undoController: PSPDFUndoController;

	undoEnabled: boolean;

	useDiskCache: boolean;

	readonly valid: boolean;

	watermarkFilterEnabled: boolean;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding
	[Symbol.iterator](): Iterator<any>;

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { dataProviders: NSArray<PSPDFDataProviding>; });

	constructor(o: { dataProviders: NSArray<PSPDFDataProviding>; loadCheckpointIfAvailable: boolean; });

	constructor(o: { URL: NSURL; });

	URLForFileIndex(fileIndex: number): NSURL;

	accommodatePresentedItemDeletionForDataProviderCompletionHandler(dataProvider: PSPDFCoordinatedFileDataProviding, completionHandler: (p1: NSError) => void): void;

	addAnnotationsOptions(annotations: NSArray<PSPDFAnnotation>, options: NSDictionary<string, any>): boolean;

	allAnnotationsOfType(annotationType: PSPDFAnnotationType): NSDictionary<number, NSArray<PSPDFAnnotation>>;

	annotationsByDetectingLinkTypesForPagesAtIndexesOptionsProgressError(linkTypes: PSPDFTextCheckingType, indexes: NSIndexSet, options: NSDictionary<string, NSDictionary<number, NSArray<PSPDFAnnotation>>>, progressBlock: (p1: NSArray<PSPDFAnnotation>, p2: number, p3: interop.Pointer | interop.Reference<boolean>) => void): NSDictionary<number, NSArray<PSPDFAnnotation>>;

	annotationsForPageAtIndexType(pageIndex: number, type: PSPDFAnnotationType): NSArray<PSPDFAnnotation>;

	applyInstantJSONFromDataProviderToDocumentProviderError(dataProvider: PSPDFDataProviding, documentProvider: PSPDFDocumentProvider): boolean;

	class(): typeof NSObject;

	classForClass(originalClass: typeof NSObject): typeof NSObject;

	clearCache(): void;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	deleteFiles(): boolean;

	didCreateDocumentProvider(documentProvider: PSPDFDocumentProvider): PSPDFDocumentProvider;

	documentByAppendingDataProviders(dataProviders: NSArray<PSPDFDataProviding>): this;

	documentProviderDidAppendData(documentProvider: PSPDFDocumentProvider, data: NSData): void;

	documentProviderForPageAtIndex(pageIndex: number): PSPDFDocumentProvider;

	documentProviderShouldAppendData(documentProvider: PSPDFDocumentProvider, data: NSData): boolean;

	encodeWithCoder(aCoder: NSCoder): void;

	ensureDataDirectoryExistsWithError(): boolean;

	fileIndexForPageAtIndex(pageIndex: number): number;

	fileNameForIndex(fileIndex: number): string;

	fileNameForPageAtIndex(pageIndex: number): string;

	fillCache(): void;

	generateInstantJSONFromDocumentProviderError(documentProvider: PSPDFDocumentProvider): NSData;

	imageForPageAtIndexSizeClippedToRectAnnotationsOptionsError(pageIndex: number, size: CGSize, clipRect: CGRect, annotations: NSArray<PSPDFAnnotation>, options: NSDictionary<string, any>): UIImage;

	initWithCoder(aDecoder: NSCoder): this;

	initWithDataProviders(dataProviders: NSArray<PSPDFDataProviding>): this;

	initWithDataProvidersLoadCheckpointIfAvailable(dataProviders: NSArray<PSPDFDataProviding>, loadCheckpoint: boolean): this;

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

	presentedItemDidChangeForDataProvider(dataProvider: PSPDFCoordinatedFileDataProviding): void;

	relativePageIndexForPageAtIndex(pageIndex: number): number;

	removeAnnotationsOptions(annotations: NSArray<PSPDFAnnotation>, options: NSDictionary<string, any>): boolean;

	renderOptionsForTypeContext(type: PSPDFRenderType, context: any): NSDictionary<string, any>;

	renderPageAtIndexContextSizeClippedToRectAnnotationsOptionsError(pageIndex: number, context: any, size: CGSize, clipRect: CGRect, annotations: NSArray<PSPDFAnnotation>, options: NSDictionary<string, any>): boolean;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	saveWithOptionsCompletionHandler(options: NSDictionary<string, any>, completionHandler: (p1: NSError, p2: NSArray<PSPDFAnnotation>) => void): void;

	saveWithOptionsError(options: NSDictionary<string, any>): boolean;

	searchableItemAttributeSetWithThumbnail(renderThumbnail: boolean): CSSearchableItemAttributeSet;

	self(): this;

	setRenderOptionsType(options: NSDictionary<string, any>, type: PSPDFRenderType): void;

	textParserForPageAtIndex(pageIndex: number): PSPDFTextParser;

	unlockWithPassword(password: string): boolean;

	updateRenderOptionsType(options: NSDictionary<string, any>, type: PSPDFRenderType): void;
}

declare var PSPDFDocumentCheckpointSavedNotification: string;

declare var PSPDFDocumentCheckpointSavedNotificationSucessKey: string;

declare class PSPDFDocumentCheckpointer extends NSObject {

	static alloc(): PSPDFDocumentCheckpointer; // inherited from NSObject

	static new(): PSPDFDocumentCheckpointer; // inherited from NSObject

	readonly checkpointExists: boolean;

	readonly document: PSPDFDocument;

	strategy: PSPDFDocumentCheckpointingStrategy;

	deleteCheckpointWithCompletionHandler(completionHandler: (p1: boolean, p2: NSError) => void): void;

	saveCheckpointWithCompletionHandler(completionHandler: (p1: boolean, p2: NSError) => void): void;
}

declare const enum PSPDFDocumentCheckpointingStrategy {

	Manual = 0,

	Timed = 1,

	Immediate = 2
}

declare var PSPDFDocumentDefaultAnnotationUsernameKey: string;

interface PSPDFDocumentDelegate extends NSObjectProtocol {

	pdfDocumentDidSave?(document: PSPDFDocument): void;

	pdfDocumentResolveCustomAnnotationPathToken?(document: PSPDFDocument, pathToken: string): string;

	pdfDocumentSaveDidFailWithError?(document: PSPDFDocument, error: NSError): void;
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

	securityOptions: PSPDFDocumentSecurityOptions;

	constructor(o: { document: PSPDFDocument; });

	addDelegate(delegate: PSPDFDocumentEditorDelegate): void;

	addPageAtWithConfiguration(index: number, configuration: PSPDFNewPageConfiguration): NSArray<PSPDFEditingChange>;

	duplicatePages(pageIndexes: NSIndexSet): NSArray<PSPDFEditingChange>;

	exportPagesToPathWithCompletionBlock(pageIndexes: NSIndexSet, path: string, block: (p1: PSPDFDocument, p2: NSError) => void): void;

	imageForPageAtIndexSizeScale(pageIndex: number, size: CGSize, scale: number): UIImage;

	importPagesToFromDocumentWithCompletionBlockQueue(index: number, sourceDocument: PSPDFDocument, block: (p1: NSArray<PSPDFEditingChange>, p2: NSError) => void, queue: NSObject): void;

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

declare const enum PSPDFDocumentEncryptionAlgorithm {

	AES = 0,

	RC4 = 1
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

declare class PSPDFDocumentProvider extends NSObject {

	static alloc(): PSPDFDocumentProvider; // inherited from NSObject

	static new(): PSPDFDocumentProvider; // inherited from NSObject

	readonly XMPMetadata: string;

	readonly allowAnnotationChanges: boolean;

	readonly annotationManager: PSPDFAnnotationManager;

	readonly canEmbedAnnotations: boolean;

	readonly contentSignature: NSData;

	readonly dataProvider: PSPDFDataProviding;

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

	resolveNamedDestination(namedDestination: string): number;

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

declare var PSPDFDocumentSaveOptionForceRewrite: string;

declare var PSPDFDocumentSaveOptionSecurityOptions: string;

declare class PSPDFDocumentSecurityOptions extends NSObject {

	static alloc(): PSPDFDocumentSecurityOptions; // inherited from NSObject

	static new(): PSPDFDocumentSecurityOptions; // inherited from NSObject

	readonly encryptionAlgorithm: PSPDFDocumentEncryptionAlgorithm;

	readonly keyLength: number;

	readonly ownerPassword: string;

	readonly permissions: PSPDFDocumentPermissions;

	readonly userPassword: string;

	constructor(o: { ownerPassword: string; userPassword: string; });

	constructor(o: { ownerPassword: string; userPassword: string; keyLength: number; });

	constructor(o: { ownerPassword: string; userPassword: string; keyLength: number; permissions: PSPDFDocumentPermissions; });

	constructor(o: { ownerPassword: string; userPassword: string; keyLength: number; permissions: PSPDFDocumentPermissions; encryptionAlgorithm: PSPDFDocumentEncryptionAlgorithm; });

	initWithOwnerPasswordUserPassword(ownerPassword: string, userPassword: string): this;

	initWithOwnerPasswordUserPasswordKeyLength(ownerPassword: string, userPassword: string, keyLength: number): this;

	initWithOwnerPasswordUserPasswordKeyLengthPermissions(ownerPassword: string, userPassword: string, keyLength: number, documentPermissions: PSPDFDocumentPermissions): this;

	initWithOwnerPasswordUserPasswordKeyLengthPermissionsEncryptionAlgorithm(ownerPassword: string, userPassword: string, keyLength: number, documentPermissions: PSPDFDocumentPermissions, encryptionAlgorithm: PSPDFDocumentEncryptionAlgorithm): this;
}

declare var PSPDFDocumentSecurityOptionsKeyLengthAutomatic: number;

declare var PSPDFDocumentUnderlyingFileChangedNotification: string;

declare var PSPDFDocumentUnderlyingFileURLKey: string;

declare var PSPDFDocumentUnderlyingFileWillBeDeletedKey: string;

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

declare class PSPDFDrawingContextAppearanceStreamGenerator extends NSObject implements PSPDFAppearanceStreamGenerating {

	static alloc(): PSPDFDrawingContextAppearanceStreamGenerator; // inherited from NSObject

	static new(): PSPDFDrawingContextAppearanceStreamGenerator; // inherited from NSObject

	static readonly defaultGenerator: PSPDFDrawingContextAppearanceStreamGenerator;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	dataProviderForAnnotationOptions(annotation: PSPDFAnnotation, options: NSDictionary<string, any>): PSPDFDataProviding;

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

	CannotEmbedAnnotations = 420,

	FailedToSaveBookmarks = 460,

	FailedToSaveDocument = 470,

	FailedToSaveDocumentCheckpoint = 480,

	FailedToDeleteDocumentCheckpoint = 490,

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

	DigitalSignatureSigningFailed = 1151,

	XFDFWriterCannotWriteToStream = 1200,

	FDFWriterCannotWriteToStream = 1250,

	SoundEncoderInvalidInput = 1300,

	GalleryInvalidManifest = 1400,

	GalleryUnknownItem = 1450,

	InvalidRemoteContent = 1500,

	FailedToSendStatistics = 1600,

	LibraryFailedToInitialize = 1700,

	FormValidationError = 5000,

	FormRemovalError = 5500,

	FormInsertionError = 5501,

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

	DocumentEditorInaccessibleDocument = 7402,

	FailedToFetchResource = 8000,

	FailedToSetResource = 8500,

	JSONDeserializationError = 9500,

	JSONSerializationError = 9501,

	JSONSerializationUnsupportedAnnotationTypeError = 9502,

	FeatureNotEnabled = 100000,

	SecurityNoPermission = 200000,

	PKCS12CannotReadData = 300000,

	PKCS12CannotCopyData = 300001,

	PKCS12UnlockFailed = 300002,

	PKCS12NoItemsFound = 300003,

	PKCS12NoPrivateKeyFound = 300004,

	PKCS12PrivateKeyError = 300005,

	PKCS12CertificateNotFound = 300006,

	PKCS12CertificateError = 300007,

	SearchCouldNotLoadDocument = 400000,

	Unknown = 2147483647
}

declare var PSPDFErrorDomain: string;

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

	MaskUI = 1024,

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

declare class PSPDFFileAppearanceStreamGenerator extends NSObject implements PSPDFAppearanceStreamGenerating {

	static alloc(): PSPDFFileAppearanceStreamGenerator; // inherited from NSObject

	static new(): PSPDFFileAppearanceStreamGenerator; // inherited from NSObject

	readonly fileURL: NSURL;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { fileURL: NSURL; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	dataProviderForAnnotationOptions(annotation: PSPDFAnnotation, options: NSDictionary<string, any>): PSPDFDataProviding;

	initWithFileURL(fileURL: NSURL): this;

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

interface PSPDFFileCoordinationDelegate extends NSObjectProtocol {

	accommodatePresentedItemDeletionForDataProviderCompletionHandler(dataProvider: PSPDFCoordinatedFileDataProviding, completionHandler: (p1: NSError) => void): void;

	presentedItemDidChangeForDataProvider(dataProvider: PSPDFCoordinatedFileDataProviding): void;
}
declare var PSPDFFileCoordinationDelegate: {

	prototype: PSPDFFileCoordinationDelegate;
};

declare var PSPDFFileCoordinationEnabledKey: string;

declare class PSPDFFileDataProvider extends NSObject implements PSPDFFileDataProviding {

	static alloc(): PSPDFFileDataProvider; // inherited from NSObject

	static new(): PSPDFFileDataProvider; // inherited from NSObject

	readonly baseURL: NSURL;

	readonly UID: string; // inherited from PSPDFDataProviding

	readonly additionalOperationsSupported: PSPDFDataProvidingAdditionalOperations; // inherited from PSPDFDataProviding

	readonly canWrite: boolean; // inherited from PSPDFDataProviding

	readonly data: NSData; // inherited from PSPDFDataProviding

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly fileURL: NSURL; // inherited from PSPDFFileDataProviding

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly progress: NSProgress; // inherited from PSPDFDataProviding

	signature: NSData; // inherited from PSPDFDataProviding

	readonly size: number; // inherited from PSPDFDataProviding

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly useDiskCache: boolean; // inherited from PSPDFDataProviding

	readonly  // inherited from NSObjectProtocol

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { fileURL: NSURL; });

	constructor(o: { fileURL: NSURL; baseURL: NSURL; });

	constructor(o: { fileURL: NSURL; baseURL: NSURL; progress: NSProgress; });

	class(): typeof NSObject;

	clearCache(): void;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	createDataSinkWithOptionsError(options: PSPDFDataSinkOptions): PSPDFDataSink;

	deleteDataWithError(): boolean;

	encodeWithCoder(aCoder: NSCoder): void;

	initWithCoder(aDecoder: NSCoder): this;

	initWithFileURL(fileURL: NSURL): this;

	initWithFileURLBaseURL(fileURL: NSURL, baseURL: NSURL): this;

	initWithFileURLBaseURLProgress(fileURL: NSURL, baseURL: NSURL, progress: NSProgress): this;

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

interface PSPDFFileDataProviding extends PSPDFDataProviding {

	fileURL: NSURL;
}
declare var PSPDFFileDataProviding: {

	prototype: PSPDFFileDataProviding;
};

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

	ubiquityIdentityToken: any;

	usesEncryption: boolean;

	URLForPublishingUbiquitousItemAtURLExpirationDateError(url: NSURL, outDate: interop.Pointer | interop.Reference<Date>): NSURL;

	URLForUbiquityContainerIdentifier(containerIdentifier: string): NSURL;

	allowsPolicyEvent(policyEvent: string): boolean;

	attributesOfFileSystemForPathError(path: string): NSDictionary<string, any>;

	attributesOfItemAtPathError(path: string): NSDictionary<string, any>;

	cleanupIfTemporaryFile(URL: NSURL): boolean;

	contentsOfDirectoryAtPathError(path: string): NSArray<string>;

	copyFileToUnencryptedLocationIfRequiredPolicyEventError(fileURL: NSURL, policyEvent: string): NSURL;

	copyItemAtURLToURLError(sourceURL: NSURL, destinationURL: NSURL): boolean;

	createDirectoryAtPathWithIntermediateDirectoriesAttributesError(path: string, createIntermediates: boolean, attributes: NSDictionary<string, any>): boolean;

	createDirectoryAtURLWithIntermediateDirectoriesAttributesError(url: NSURL, createIntermediates: boolean, attributes: NSDictionary<string, any>): boolean;

	createFileAtPathContentsAttributes(path: string, data: NSData, attributes: NSDictionary<string, any>): boolean;

	createTemporaryWritableDataProviderWithPrefix(prefix: string): PSPDFDataProviding;

	dataWithContentsOfFileOptionsError(path: string, readOptionsMask: NSDataReadingOptions): NSData;

	dataWithContentsOfURLOptionsError(fileURL: NSURL, readOptionsMask: NSDataReadingOptions): NSData;

	destinationOfSymbolicLinkAtPathError(path: string): string;

	enumeratorAtPath(path: string): NSDirectoryEnumerator<string>;

	enumeratorAtURLIncludingPropertiesForKeysOptionsErrorHandler(url: NSURL, keys: NSArray<string>, mask: NSDirectoryEnumerationOptions, handler: (p1: NSURL, p2: NSError) => boolean): NSDirectoryEnumerator<NSURL>;

	evictUbiquitousItemAtURLError(url: NSURL): boolean;

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

	isUbiquitousItemAtURL(url: NSURL): boolean;

	isWritableFileAtPath(path: string): boolean;

	moveItemAtURLToURLError(sourceURL: NSURL, destinationURL: NSURL): boolean;

	performBlockWithoutCoordination(block: () => void): void;

	removeItemAtPathError(path: string): boolean;

	removeItemAtURLError(URL: NSURL): boolean;

	replaceItemAtURLWithItemAtURLBackupItemNameOptionsResultingItemURLError(originalItemURL: NSURL, newItemURL: NSURL, backupItemName: string, options: NSFileManagerItemReplacementOptions, resultingURL: interop.Pointer | interop.Reference<NSURL>): boolean;

	setUbiquitousItemAtURLDestinationURLError(flag: boolean, url: NSURL, destinationURL: NSURL): boolean;

	startDownloadingUbiquitousItemAtURLError(url: NSURL): boolean;

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

declare class PSPDFFilePresenterCoordinator extends NSObject {

	static alloc(): PSPDFFilePresenterCoordinator; // inherited from NSObject

	static new(): PSPDFFilePresenterCoordinator; // inherited from NSObject

	static readonly sharedCoordinator: PSPDFFilePresenterCoordinator;

	observeFilePresenter(filePresenter: NSFilePresenter): void;

	observeFilePresenters(filePresenters: NSArray<NSFilePresenter>): void;

	unobserveFilePresenter(filePresenter: NSFilePresenter): void;

	unobserveFilePresenters(filePresenters: NSArray<NSFilePresenter>): void;
}

declare var PSPDFFontSizeName: string;

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

declare class PSPDFFormField extends PSPDFModel implements PSPDFJSONSerializing, PSPDFUndoSupport {

	static JSONKeyPathsByPropertyKey(): NSDictionary<string, any>;

	static JSONTransformerForKey(key: string): NSValueTransformer;

	static alloc(): PSPDFFormField; // inherited from NSObject

	static classForParsingJSONDictionary(JSONDictionary: NSDictionary<string, any>): typeof NSObject;

	static keysForValuesToObserveForUndo(): NSSet<string>;

	static localizedUndoActionNameForKey(key: string): string;

	static modelWithDictionaryError(dictionaryValue: NSDictionary<string, any>): PSPDFFormField; // inherited from PSPDFModel

	static new(): PSPDFFormField; // inherited from NSObject

	static undoCoalescingForKey(key: string): PSPDFUndoCoalescing;

	alternateFieldName: string;

	readonly annotations: NSArray<PSPDFFormElement>;

	readonly calculationOrderIndex: number;

	readonly defaultValue: any;

	readonly dirty: boolean;

	readonly documentProvider: PSPDFDocumentProvider;

	readonly exportValue: any;

	readonly fullyQualifiedName: string;

	isEditable: boolean;

	isNoExport: boolean;

	isReadOnly: boolean;

	isRequired: boolean;

	mappingName: string;

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

	removeFormElementsError(formElements: NSArray<PSPDFFormElement>): boolean;

	removeFormFieldsError(formFields: NSArray<PSPDFFormField>): boolean;
}

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

declare class PSPDFHideAction extends PSPDFAction {

	static alloc(): PSPDFHideAction; // inherited from NSObject

	static modelWithDictionaryError(dictionaryValue: NSDictionary<string, any>): PSPDFHideAction; // inherited from PSPDFModel

	static new(): PSPDFHideAction; // inherited from NSObject

	readonly annotations: NSArray<PSPDFAnnotation>;

	readonly shouldHide: boolean;

	constructor(o: { associatedAnnotations: NSArray<PSPDFAnnotation>; shouldHide: boolean; });

	initWithAssociatedAnnotationsShouldHide(annotations: NSArray<PSPDFAnnotation>, shouldHide: boolean): this;
}

declare class PSPDFHighlightAnnotation extends PSPDFMarkupAnnotation {

	static alloc(): PSPDFHighlightAnnotation; // inherited from NSObject

	static modelWithDictionaryError(dictionaryValue: NSDictionary<string, any>): PSPDFHighlightAnnotation; // inherited from PSPDFModel

	static new(): PSPDFHighlightAnnotation; // inherited from NSObject

	static textOverlayAnnotationWithGlyphsPageRotation(glyphs: NSArray<PSPDFGlyph>, pageRotation: number): PSPDFHighlightAnnotation; // inherited from PSPDFMarkupAnnotation
}

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

declare class PSPDFKit extends NSObject implements PSPDFSettings {

	static alloc(): PSPDFKit; // inherited from NSObject

	static imageNamed(name: string): UIImage;

	static isFeatureEnabled(feature: PSPDFFeatureMask): boolean;

	static new(): PSPDFKit; // inherited from NSObject

	static setLicenseKey(licenseKey: string): void;

	static setLicenseKeyOptions(licenseKey: string, options: NSDictionary<string, any>): void;

	readonly analytics: PSPDFAnalytics;

	application: PSPDFApplication;

	readonly brightnessManager: PSPDFBrightnessManager;

	readonly cache: PSPDFCache;

	databaseEncryptionProvider: PSPDFDatabaseEncryptionProvider;

	readonly fileManager: PSPDFFileManager;

	imageLoadingHandler: (p1: string) => UIImage;

	library: PSPDFLibrary;

	logHandler: (p1: PSPDFLogLevelMask, p2: string, p3: () => string, p4: string, p5: string, p6: number) => void;

	logLevel: PSPDFLogLevelMask;

	readonly policy: PSPDFApplicationPolicy;

	readonly renderManager: PSPDFRenderManager;

	readonly screenController: PSPDFScreenController;

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

declare class PSPDFLabelParser extends NSObject {

	static alloc(): PSPDFLabelParser; // inherited from NSObject

	static new(): PSPDFLabelParser; // inherited from NSObject

	readonly documentProvider: PSPDFDocumentProvider;

	readonly labels: NSDictionary<number, string>;

	pageForPageLabelPartialMatching(pageLabel: string, partialMatching: boolean): number;

	pageLabelForPageAtIndex(pageIndex: number): string;
}

declare class PSPDFLibrary extends NSObject {

	static alloc(): PSPDFLibrary; // inherited from NSObject

	static defaultLibraryPath(): string;

	static encryptedLibraryWithPathEncryptionKeyProviderError(path: string, encryptionKeyProvider: () => NSData): PSPDFLibrary;

	static encryptedLibraryWithPathEncryptionKeyProviderFtsVersionTokenizerError(path: string, encryptionKeyProvider: () => NSData, ftsVersion: PSPDFLibraryFTSVersion, tokenizer: string): PSPDFLibrary;

	static encryptedLibraryWithPathEncryptionKeyProviderIndexingPriorityFtsVersionTokenizerError(path: string, encryptionKeyProvider: () => NSData, priority: PSPDFLibraryIndexingPriority, ftsVersion: PSPDFLibraryFTSVersion, tokenizer: string): PSPDFLibrary;

	static encryptedLibraryWithPathEncryptionKeyProviderTokenizerError(path: string, encryptionKeyProvider: () => NSData, tokenizer: string): PSPDFLibrary;

	static libraryWithPathError(path: string): PSPDFLibrary;

	static libraryWithPathFtsVersionTokenizerError(path: string, ftsVersion: PSPDFLibraryFTSVersion, tokenizer: string): PSPDFLibrary;

	static libraryWithPathIndexingPriorityFtsVersionTokenizerError(path: string, priority: PSPDFLibraryIndexingPriority, ftsVersion: PSPDFLibraryFTSVersion, tokenizer: string): PSPDFLibrary;

	static libraryWithPathTokenizerError(path: string, tokenizer: string): PSPDFLibrary;

	static new(): PSPDFLibrary; // inherited from NSObject

	automaticallyPauseLongRunningTasks: boolean;

	dataSource: PSPDFLibraryDataSource;

	readonly encrypted: boolean;

	readonly indexedUIDCount: number;

	readonly indexedUIDs: NSOrderedSet<string>;

	readonly indexing: boolean;

	readonly path: string;

	readonly queuedUIDs: NSOrderedSet<string>;

	saveReversedPageText: boolean;

	shouldIndexAnnotations: boolean;

	spotlightIndexingType: PSPDFLibrarySpotlightIndexingType;

	suspended: boolean;

	readonly tokenizer: string;

	cancelAllPreviewTextOperations(): void;

	clearAllIndexes(): void;

	documentUIDsMatchingStringOptionsCompletionHandler(searchString: string, options: NSDictionary<string, any>, completionHandler: (p1: string, p2: NSDictionary<string, NSIndexSet>) => void): void;

	documentUIDsMatchingStringOptionsCompletionHandlerPreviewTextHandler(searchString: string, options: NSDictionary<string, any>, completionHandler: (p1: string, p2: NSDictionary<string, NSIndexSet>) => void, previewTextHandler: (p1: string, p2: NSDictionary<string, NSSet<PSPDFLibraryPreviewResult>>) => void): void;

	fetchSpotlightIndexedDocumentForUserActivityCompletionHandler(userActivity: NSUserActivity, completionHandler: (p1: PSPDFDocument) => void): void;

	indexStatusForUIDWithProgress(UID: string, outProgress: interop.Pointer | interop.Reference<number>): PSPDFLibraryIndexStatus;

	indexedDocumentWithUID(UID: string): PSPDFDocument;

	removeIndexForUID(UID: string): void;

	updateIndexWithCompletionHandler(completionHandler: () => void): void;
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

declare var PSPDFLibraryExcludeAnnotationsKey: string;

declare var PSPDFLibraryExcludeDocumentTextKey: string;

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

declare const enum PSPDFLibraryIndexingPriority {

	Background = 0,

	Low = 1,

	High = 2
}

declare var PSPDFLibraryIndexingPriorityKey: string;

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

declare class PSPDFLibraryPreviewResult extends PSPDFSearchResult {

	static alloc(): PSPDFLibraryPreviewResult; // inherited from NSObject

	static modelWithDictionaryError(dictionaryValue: NSDictionary<string, any>): PSPDFLibraryPreviewResult; // inherited from PSPDFModel

	static new(): PSPDFLibraryPreviewResult; // inherited from NSObject

	readonly annotationObjectNumber: number;

	readonly isAnnotationResult: boolean;
}

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

declare class PSPDFMarkupAnnotation extends PSPDFAnnotation {

	static alloc(): PSPDFMarkupAnnotation; // inherited from NSObject

	static modelWithDictionaryError(dictionaryValue: NSDictionary<string, any>): PSPDFMarkupAnnotation; // inherited from PSPDFModel

	static new(): PSPDFMarkupAnnotation; // inherited from NSObject

	static textOverlayAnnotationWithGlyphsPageRotation(glyphs: NSArray<PSPDFGlyph>, pageRotation: number): PSPDFMarkupAnnotation;

	readonly highlightedString: string;
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

	static modelWithDictionaryError(dictionaryValue: NSDictionary<string, any>): PSPDFModel;

	static new(): PSPDFModel; // inherited from NSObject

	readonly dictionaryValue: NSDictionary<string, any>;

	static readonly allowedSecureCodingClassesByPropertyKey: NSDictionary<string, NSSet<typeof NSObject>>;

	static readonly encodingBehaviorsByPropertyKey: NSDictionary<string, number>;

	static readonly modelVersion: number;

	static readonly propertyKeys: NSOrderedSet<string>;

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { dictionary: NSDictionary<string, any>; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	decodeAdditionalValuesModel(coder: NSCoder, model: number): NSDictionary<string, any>;

	decodeValueForKeyWithCoderModelVersion(key: string, coder: NSCoder, modelVersion: number): any;

	encodeWithCoder(aCoder: NSCoder): void;

	initWithCoder(aDecoder: NSCoder): this;

	initWithDictionaryError(dictionaryValue: NSDictionary<string, any>): this;
}

declare const enum PSPDFModelEncodingBehavior {

	Excluded = 0,

	Unconditional = 1,

	Conditional = 2,

	PointerValue = 3
}

declare class PSPDFMutableBookmark extends PSPDFBookmark {

	static alloc(): PSPDFMutableBookmark; // inherited from NSObject

	static modelWithDictionaryError(dictionaryValue: NSDictionary<string, any>): PSPDFMutableBookmark; // inherited from PSPDFModel

	static new(): PSPDFMutableBookmark; // inherited from NSObject

	action: PSPDFAction;

	name: string;
}

declare class PSPDFMutableRenderRequest extends PSPDFRenderRequest {

	static alloc(): PSPDFMutableRenderRequest; // inherited from NSObject

	static new(): PSPDFMutableRenderRequest; // inherited from NSObject

	annotations: NSArray<PSPDFAnnotation>;

	cachePolicy: PSPDFRenderRequestCachePolicy;

	document: PSPDFDocument;

	imageScale: number;

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

interface PSPDFOverridable extends NSObjectProtocol {

	classForClass?(originalClass: typeof NSObject): typeof NSObject;
}
declare var PSPDFOverridable: {

	prototype: PSPDFOverridable;
};

declare class PSPDFPKCS12 extends NSObject implements NSCoding {

	static alloc(): PSPDFPKCS12; // inherited from NSObject

	static new(): PSPDFPKCS12; // inherited from NSObject

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { data: NSData; });

	encodeWithCoder(aCoder: NSCoder): void;

	initWithCoder(aDecoder: NSCoder): this;

	initWithData(data: NSData): this;

	unlockWithPasswordDone(password: string, done: (p1: PSPDFX509, p2: PSPDFPrivateKey, p3: NSError) => void): void;
}

declare class PSPDFPKCS12Signer extends PSPDFSigner {

	static alloc(): PSPDFPKCS12Signer; // inherited from NSObject

	static new(): PSPDFPKCS12Signer; // inherited from NSObject

	location: string;

	readonly p12: PSPDFPKCS12;

	privateKey: PSPDFPrivateKey;

	reason: string;

	constructor(o: { displayName: string; PKCS12: PSPDFPKCS12; });

	initWithDisplayNamePKCS12(displayName: string, p12: PSPDFPKCS12): this;

	signFormElementUsingPasswordWriteToAppearanceBiometricPropertiesCompletion(element: PSPDFSignatureFormElement, password: string, path: string, signatureAppearance: PSPDFSignatureAppearance, biometricProperties: PSPDFSignatureBiometricProperties, completionBlock: (p1: boolean, p2: PSPDFDocument, p3: NSError) => void): void;

	signFormElementUsingPasswordWriteToCompletion(element: PSPDFSignatureFormElement, password: string, path: string, completionBlock: (p1: boolean, p2: PSPDFDocument, p3: NSError) => void): void;
}

declare class PSPDFPage extends NSObject {

	static alloc(): PSPDFPage; // inherited from NSObject

	static new(): PSPDFPage; // inherited from NSObject

	readonly document: PSPDFDocument;

	readonly pageIndex: number;

	readonly pageInfo: PSPDFPageInfo;

	createFreeTextAnnotationWithContents(contents: string): PSPDFFreeTextAnnotation;

	createStampAnnotationWithImage(iamge: UIImage): PSPDFStampAnnotation;
}

declare const enum PSPDFPageBinding {

	Unknown = 0,

	LeftEdge = 1,

	RightEdge = 2
}

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

declare class PSPDFPageLabelFormatter extends NSFormatter {

	static alloc(): PSPDFPageLabelFormatter; // inherited from NSObject

	static localizedStringFromPageRangeDocument(pageRange: NSRange, document: PSPDFDocument): string;

	static new(): PSPDFPageLabelFormatter; // inherited from NSObject

	document: PSPDFDocument;

	stringFromRange(pageRange: NSRange): string;
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

declare const enum PSPDFPageTriggerEvent {

	Open = 0,

	Close = 1
}

declare var PSPDFPaperSizeA4: CGRect;

declare var PSPDFPaperSizeLetter: CGRect;

declare function PSPDFPerformBlockAsGroup(undoController: PSPDFUndoController, block: () => void, name: string): void;

declare function PSPDFPerformBlockWithoutUndo(undoController: PSPDFUndoController, block: () => void): void;

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

declare class PSPDFPrivateKey extends NSObject {

	static alloc(): PSPDFPrivateKey; // inherited from NSObject

	static new(): PSPDFPrivateKey; // inherited from NSObject

	readonly encryptionAlgorithm: string;
}

declare class PSPDFProcessor extends NSObject {

	static alloc(): PSPDFProcessor; // inherited from NSObject

	static generatePDFFromConfigurationSecurityOptionsOutputDataSinkProgressBlockError(configuration: PSPDFProcessorConfiguration, securityOptions: PSPDFDocumentSecurityOptions, outputDataSink: PSPDFDataSink, progressBlock: (p1: number, p2: number) => void): boolean;

	static generatePDFFromConfigurationSecurityOptionsOutputFileURLProgressBlockError(configuration: PSPDFProcessorConfiguration, securityOptions: PSPDFDocumentSecurityOptions, fileURL: NSURL, progressBlock: (p1: number, p2: number) => void): boolean;

	static generatePDFFromConfigurationSecurityOptionsProgressBlockError(configuration: PSPDFProcessorConfiguration, securityOptions: PSPDFDocumentSecurityOptions, progressBlock: (p1: number, p2: number) => void): NSData;

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

	modifyFormsOfTypeChange(formFieldType: PSPDFFormFieldType, annotationChange: PSPDFAnnotationChange): void;

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

declare var PSPDFProcessorSkipPDFCreationKey: string;

declare var PSPDFProcessorStripEmptyPagesKey: string;

declare var PSPDFProcessorUserPasswordKey: string;

declare class PSPDFRSAKey extends NSObject {

	static alloc(): PSPDFRSAKey; // inherited from NSObject

	static new(): PSPDFRSAKey; // inherited from NSObject

	readonly keyLength: number;

	readonly publicKeyScheme: string;
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

	readonly namedDestination: string;

	readonly relativePath: string;

	constructor(o: { relativePath: string; namedDestination: string; });

	constructor(o: { relativePath: string; pageIndex: number; });

	initWithRelativePathNamedDestination(remotePath: string, namedDestination: string): this;

	initWithRelativePathPageIndex(remotePath: string, pageIndex: number): this;
}

declare const enum PSPDFRenderFilter {

	Grayscale = 1,

	ColorCorrectInverted = 2,

	Sepia = 4
}

interface PSPDFRenderManager extends NSObjectProtocol {

	renderQueue: PSPDFRenderQueue;

	setupGraphicsContextRectanglePageInfo(context: any, displayRectangle: CGRect, pageInfo: PSPDFPageInfo): void;
}
declare var PSPDFRenderManager: {

	prototype: PSPDFRenderManager;
};

declare var PSPDFRenderManagerRenderResultChangedDocumentKey: string;

declare var PSPDFRenderManagerRenderResultChangedPagesKey: string;

declare var PSPDFRenderManagerRenderResultDidChangeNotification: string;

declare var PSPDFRenderOptionAllowAntiAliasingKey: string;

declare var PSPDFRenderOptionBackgroundFillColorKey: string;

declare var PSPDFRenderOptionCIFilterKey: string;

declare var PSPDFRenderOptionDrawBlockKey: string;

declare var PSPDFRenderOptionDrawSignHereOverlay: string;

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

declare var PSPDFRenderOptionTextRenderingClearTypeEnabledKey: string;

declare var PSPDFRenderOptionTextRenderingUseCoreGraphicsKey: string;

declare class PSPDFRenderQueue extends NSObject {

	static alloc(): PSPDFRenderQueue; // inherited from NSObject

	static new(): PSPDFRenderQueue; // inherited from NSObject

	cancelAllTasks(): void;

	scheduleTask(task: PSPDFRenderTask): void;

	scheduleTasks(tasks: NSArray<PSPDFRenderTask>): void;
}

declare const enum PSPDFRenderQueuePriority {

	Unspecified = 0,

	Background = 100,

	Utility = 200,

	UserInitiated = 300,

	UserInteractive = 400
}

declare class PSPDFRenderRequest extends NSObject implements NSCopying, NSMutableCopying {

	static alloc(): PSPDFRenderRequest; // inherited from NSObject

	static new(): PSPDFRenderRequest; // inherited from NSObject

	readonly annotations: NSArray<PSPDFAnnotation>;

	readonly cachePolicy: PSPDFRenderRequestCachePolicy;

	readonly document: PSPDFDocument;

	readonly imageScale: number;

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

	ReloadIgnoringCacheData = 1,

	ReturnCacheDataElseLoad = 2,

	ReturnCacheDataDontLoad = 3
}

declare var PSPDFRenderSizeLimit: CGSize;

declare class PSPDFRenderTask extends NSObject {

	static alloc(): PSPDFRenderTask; // inherited from NSObject

	static groupTasksCompletionHandler(tasks: NSArray<PSPDFRenderTask>, completionHandler: () => void): void;

	static new(): PSPDFRenderTask; // inherited from NSObject

	readonly cancelled: boolean;

	completionHandler: (p1: UIImage, p2: NSError) => void;

	delegate: PSPDFRenderTaskDelegate;

	readonly image: UIImage;

	priority: PSPDFRenderQueuePriority;

	readonly request: PSPDFRenderRequest;

	constructor(o: { request: PSPDFRenderRequest; });

	cancel(): void;

	initWithRequest(request: PSPDFRenderRequest): this;
}

interface PSPDFRenderTaskDelegate extends NSObjectProtocol {

	renderTaskDidFailWithError?(task: PSPDFRenderTask, error: NSError): void;

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

declare class PSPDFScreenAnnotation extends PSPDFAssetAnnotation {

	static alloc(): PSPDFScreenAnnotation; // inherited from NSObject

	static modelWithDictionaryError(dictionaryValue: NSDictionary<string, any>): PSPDFScreenAnnotation; // inherited from PSPDFModel

	static new(): PSPDFScreenAnnotation; // inherited from NSObject

	readonly mediaScreenWindowType: PSPDFMediaScreenWindowType;
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

declare function PSPDFSetLocalizationBlock(localizationBlock: (p1: string) => string): void;

declare function PSPDFSetLocalizationDictionary(localizationDict: NSDictionary<string, NSDictionary<string, string>>): void;

interface PSPDFSettings extends NSObjectProtocol {

	boolForKey(key: string): boolean;

	objectForKeyedSubscript(key: any): any;
}
declare var PSPDFSettings: {

	prototype: PSPDFSettings;
};

declare function PSPDFSharedApplication(): UIApplication;

declare class PSPDFSignatureAppearance extends PSPDFBaseConfiguration<PSPDFSignatureAppearanceBuilder> {

	static alloc(): PSPDFSignatureAppearance; // inherited from NSObject

	static configurationWithBuilder(builderBlock: (p1: BuilderType) => void): PSPDFSignatureAppearance; // inherited from PSPDFBaseConfiguration

	static defaultConfiguration(): PSPDFSignatureAppearance; // inherited from PSPDFBaseConfiguration

	static modelWithDictionaryError(dictionaryValue: NSDictionary<string, any>): PSPDFSignatureAppearance; // inherited from PSPDFModel

	static new(): PSPDFSignatureAppearance; // inherited from NSObject

	readonly appearanceMode: PSPDFSignatureAppearanceMode;

	readonly reuseExistingAppearance: boolean;

	readonly showSignatureLocation: boolean;

	readonly showSignatureReason: boolean;

	readonly showSignerName: boolean;

	readonly showSigningDate: boolean;

	readonly signatureGraphic: PSPDFAnnotationAppearanceStream;
}

declare class PSPDFSignatureAppearanceBuilder extends PSPDFBaseConfigurationBuilder {

	static alloc(): PSPDFSignatureAppearanceBuilder; // inherited from NSObject

	static new(): PSPDFSignatureAppearanceBuilder; // inherited from NSObject

	appearanceMode: PSPDFSignatureAppearanceMode;

	reuseExistingAppearance: boolean;

	showSignatureLocation: boolean;

	showSignatureReason: boolean;

	showSignerName: boolean;

	showSigningDate: boolean;

	signatureGraphic: PSPDFAnnotationAppearanceStream;
}

declare const enum PSPDFSignatureAppearanceMode {

	SignatureAndDescription = 0,

	DescriptionOnly = 1
}

declare class PSPDFSignatureBiometricProperties extends NSObject implements NSSecureCoding {

	static alloc(): PSPDFSignatureBiometricProperties; // inherited from NSObject

	static new(): PSPDFSignatureBiometricProperties; // inherited from NSObject

	readonly inputMethod: PSPDFSignatureInputMethod;

	readonly pressureList: NSArray<number>;

	readonly timePointsList: NSArray<number>;

	readonly touchRadius: number;

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { pressureList: NSArray<number>; timePointsList: NSArray<number>; touchRadius: number; inputMethod: PSPDFSignatureInputMethod; });

	encodeWithCoder(aCoder: NSCoder): void;

	initWithCoder(aDecoder: NSCoder): this;

	initWithPressureListTimePointsListTouchRadiusInputMethod(pressureList: NSArray<number>, timePointsList: NSArray<number>, touchRadius: number, inputMethod: PSPDFSignatureInputMethod): this;
}

declare class PSPDFSignatureContainer extends NSObject implements NSCoding {

	static alloc(): PSPDFSignatureContainer; // inherited from NSObject

	static new(): PSPDFSignatureContainer; // inherited from NSObject

	readonly annotation: PSPDFInkAnnotation;

	readonly biometricProperties: PSPDFSignatureBiometricProperties;

	readonly signer: PSPDFSigner;

	constructor(o: { annotation: PSPDFInkAnnotation; signer: PSPDFSigner; biometricProperties: PSPDFSignatureBiometricProperties; });

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	encodeWithCoder(aCoder: NSCoder): void;

	initWithAnnotationSignerBiometricProperties(annotation: PSPDFInkAnnotation, signer: PSPDFSigner, biometricProperties: PSPDFSignatureBiometricProperties): this;

	initWithCoder(aDecoder: NSCoder): this;
}

declare class PSPDFSignatureFormElement extends PSPDFFormElement {

	static alloc(): PSPDFSignatureFormElement; // inherited from NSObject

	static modelWithDictionaryError(dictionaryValue: NSDictionary<string, any>): PSPDFSignatureFormElement; // inherited from PSPDFModel

	static new(): PSPDFSignatureFormElement; // inherited from NSObject

	readonly isSigned: boolean;

	readonly overlappingInkSignature: PSPDFInkAnnotation;

	readonly signatureInfo: PSPDFSignatureInfo;

	signatureBiometricProperties(privateKey: PSPDFPrivateKey): PSPDFSignatureBiometricProperties;
}

declare class PSPDFSignatureFormField extends PSPDFFormField {

	static alloc(): PSPDFSignatureFormField; // inherited from NSObject

	static insertedSignatureFieldWithFullyQualifiedNameDocumentProviderFormElementError(fullyQualifiedName: string, documentProvider: PSPDFDocumentProvider, formElement: PSPDFFormElement): PSPDFSignatureFormField;

	static modelWithDictionaryError(dictionaryValue: NSDictionary<string, any>): PSPDFSignatureFormField; // inherited from PSPDFModel

	static new(): PSPDFSignatureFormField; // inherited from NSObject
}

declare class PSPDFSignatureInfo extends NSObject {

	static alloc(): PSPDFSignatureInfo; // inherited from NSObject

	static new(): PSPDFSignatureInfo; // inherited from NSObject

	readonly byteRange: NSArray<any>;

	readonly contents: NSData;

	readonly creationDate: Date;

	readonly filter: string;

	readonly location: string;

	readonly name: string;

	readonly placeholderBytes: number;

	readonly propBuild: PSPDFSignaturePropBuild;

	readonly reason: string;

	readonly references: NSArray<PSPDFDigitalSignatureReference>;

	readonly subFilter: string;
}

declare const enum PSPDFSignatureInputMethod {

	None = 0,

	Finger = 1,

	ApplePencil = 2,

	ThirdPartyStylus = 3,

	Mouse = 4
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

declare class PSPDFSignaturePropBuild extends NSObject {

	static alloc(): PSPDFSignaturePropBuild; // inherited from NSObject

	static new(): PSPDFSignaturePropBuild; // inherited from NSObject

	readonly app: PSPDFSignaturePropBuildEntry;

	readonly filter: PSPDFSignaturePropBuildEntry;

	readonly pubSec: PSPDFSignaturePropBuildEntry;

	readonly sigQ: PSPDFSignaturePropBuildEntry;
}

declare class PSPDFSignaturePropBuildEntry extends NSObject {

	static alloc(): PSPDFSignaturePropBuildEntry; // inherited from NSObject

	static new(): PSPDFSignaturePropBuildEntry; // inherited from NSObject

	readonly date: string;

	readonly minimumVersion: number;

	readonly name: string;

	readonly nonEmbeddedFontNoWarning: boolean;

	readonly operatingSystem: string;

	readonly preRelease: boolean;

	readonly revisionNumber: number;

	readonly textRevision: string;

	readonly trustedMode: boolean;
}

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
}

declare const enum PSPDFSignatureStatusSeverity {

	None = 0,

	Warning = 1,

	Error = 2
}

declare class PSPDFSignatureValidator extends NSObject {

	static alloc(): PSPDFSignatureValidator; // inherited from NSObject

	static new(): PSPDFSignatureValidator; // inherited from NSObject

	readonly signatureFormElement: PSPDFSignatureFormElement;

	constructor(o: { signatureFormElement: PSPDFSignatureFormElement; });

	initWithSignatureFormElement(formElement: PSPDFSignatureFormElement): this;

	verifySignatureWithTrustedCertificatesError(trustedCertificates: NSArray<PSPDFX509>): PSPDFSignatureStatus;
}

declare class PSPDFSigner extends NSObject implements NSCoding {

	static alloc(): PSPDFSigner; // inherited from NSObject

	static new(): PSPDFSigner; // inherited from NSObject

	readonly displayName: string;

	readonly filter: string;

	readonly location: string;

	readonly reason: string;

	readonly subFilter: string;

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	encodeWithCoder(aCoder: NSCoder): void;

	initWithCoder(aDecoder: NSCoder): this;

	requestSigningCertificateCompletionBlock(sourceController: any, completionBlock: (p1: PSPDFX509, p2: NSError) => void): void;

	signFormElementWithCertificateWriteToAppearanceBiometricPropertiesCompletionBlock(element: PSPDFSignatureFormElement, certificate: PSPDFX509, path: string, signatureAppearance: PSPDFSignatureAppearance, biometricProperties: PSPDFSignatureBiometricProperties, completionBlock: (p1: boolean, p2: PSPDFDocument, p3: NSError) => void): void;

	signFormElementWithCertificateWriteToDataSinkAppearanceBiometricPropertiesCompletionBlock(element: PSPDFSignatureFormElement, certificate: PSPDFX509, dataSink: PSPDFDataSink, signatureAppearance: PSPDFSignatureAppearance, biometricProperties: PSPDFSignatureBiometricProperties, completionBlock: (p1: boolean, p2: PSPDFDataSink, p3: NSError) => void): void;
}

declare const enum PSPDFSignerError {

	None = 0,

	NoFormElementSet = 1,

	CannotNotCreatePKCS7 = 256,

	CannotNotAddSignatureToPKCS7 = 257,

	CannotNotInitPKCS7 = 258,

	CannotGeneratePKCS7Signature = 259,

	CannotWritePKCS7Signature = 260,

	CannotVerifySignature = 261,

	CannotSaveToDestination = 262,

	UnsupportedSubfilterType = 263,

	CannotFindSignature = 264,

	CannotSignAttributes = 265
}

declare var PSPDFSignerErrorDomain: string;

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

declare class PSPDFSquareAnnotation extends PSPDFAbstractShapeAnnotation {

	static alloc(): PSPDFSquareAnnotation; // inherited from NSObject

	static modelWithDictionaryError(dictionaryValue: NSDictionary<string, any>): PSPDFSquareAnnotation; // inherited from PSPDFModel

	static new(): PSPDFSquareAnnotation; // inherited from NSObject

	readonly bezierPath: UIBezierPath;
}

declare class PSPDFSquigglyAnnotation extends PSPDFMarkupAnnotation {

	static alloc(): PSPDFSquigglyAnnotation; // inherited from NSObject

	static modelWithDictionaryError(dictionaryValue: NSDictionary<string, any>): PSPDFSquigglyAnnotation; // inherited from PSPDFModel

	static new(): PSPDFSquigglyAnnotation; // inherited from NSObject

	static textOverlayAnnotationWithGlyphsPageRotation(glyphs: NSArray<PSPDFGlyph>, pageRotation: number): PSPDFSquigglyAnnotation; // inherited from PSPDFMarkupAnnotation
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

declare class PSPDFStrikeOutAnnotation extends PSPDFMarkupAnnotation {

	static alloc(): PSPDFStrikeOutAnnotation; // inherited from NSObject

	static modelWithDictionaryError(dictionaryValue: NSDictionary<string, any>): PSPDFStrikeOutAnnotation; // inherited from PSPDFModel

	static new(): PSPDFStrikeOutAnnotation; // inherited from NSObject

	static textOverlayAnnotationWithGlyphsPageRotation(glyphs: NSArray<PSPDFGlyph>, pageRotation: number): PSPDFStrikeOutAnnotation; // inherited from PSPDFMarkupAnnotation
}

declare function PSPDFStringFromAnnotationType(annotationType: PSPDFAnnotationType): string;

declare function PSPDFStringFromGlyphs(glyphs: NSArray<PSPDFGlyph>): string;

declare var PSPDFStyleManagerColorPresetKey: string;

declare var PSPDFStyleManagerGenericStylesKey: string;

declare var PSPDFStyleManagerLastUsedStylesKey: string;

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

declare class PSPDFTextFormField extends PSPDFFormField {

	static alloc(): PSPDFTextFormField; // inherited from NSObject

	static insertedTextFieldWithFullyQualifiedNameDocumentProviderFormElementError(fullyQualifiedName: string, documentProvider: PSPDFDocumentProvider, formElement: PSPDFFormElement): PSPDFTextFormField;

	static modelWithDictionaryError(dictionaryValue: NSDictionary<string, any>): PSPDFTextFormField; // inherited from PSPDFModel

	static new(): PSPDFTextFormField; // inherited from NSObject

	doNotScroll: boolean;

	doNotSpellCheck: boolean;

	fileSelect: boolean;

	isComb: boolean;

	isMultiLine: boolean;

	isPassword: boolean;

	isRichText: boolean;

	maxLength: number;

	richText: string;

	text: string;
}

declare const enum PSPDFTextInputFormat {

	Normal = 0,

	Number = 1,

	Date = 2,

	Time = 3
}

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

	didFailSearchWithError?(textSearch: PSPDFTextSearch, error: NSError): void;

	didFinishSearchTermSearchResultsIsFullSearchPageTextFound?(textSearch: PSPDFTextSearch, searchTerm: string, searchResults: NSArray<PSPDFSearchResult>, isFullSearch: boolean, pageTextFound: boolean): void;

	didUpdateSearchTermNewSearchResultsPageIndex?(textSearch: PSPDFTextSearch, searchTerm: string, searchResults: NSArray<PSPDFSearchResult>, pageIndex: number): void;

	willStartSearchTermIsFullSearch?(textSearch: PSPDFTextSearch, searchTerm: string, isFullSearch: boolean): void;
}
declare var PSPDFTextSearchDelegate: {

	prototype: PSPDFTextSearchDelegate;
};

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

declare class PSPDFUnderlineAnnotation extends PSPDFMarkupAnnotation {

	static alloc(): PSPDFUnderlineAnnotation; // inherited from NSObject

	static modelWithDictionaryError(dictionaryValue: NSDictionary<string, any>): PSPDFUnderlineAnnotation; // inherited from PSPDFModel

	static new(): PSPDFUnderlineAnnotation; // inherited from NSObject

	static textOverlayAnnotationWithGlyphsPageRotation(glyphs: NSArray<PSPDFGlyph>, pageRotation: number): PSPDFUnderlineAnnotation; // inherited from PSPDFMarkupAnnotation
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

interface PSPDFUndoSupport extends NSObjectProtocol {

	didUndoOrRedoChange?(key: string): void;

	insertUndoObjectsForKey?(objects: NSSet<any>, key: string): void;

	removeUndoObjectsForKey?(objects: NSSet<any>, key: string): void;
}
declare var PSPDFUndoSupport: {

	prototype: PSPDFUndoSupport;

	keysForValuesToObserveForUndo(): NSSet<string>;

	localizedUndoActionNameForKey?(key: string): string;

	undoCoalescingForKey?(key: string): PSPDFUndoCoalescing;
};

declare class PSPDFVersionDummy extends NSObject {

	static alloc(): PSPDFVersionDummy; // inherited from NSObject

	static new(): PSPDFVersionDummy; // inherited from NSObject
}

declare const enum PSPDFVerticalAlignment {

	Top = 0,

	Center = 1,

	Bottom = 2
}

declare var PSPDFVerticalAlignmentName: string;

declare var PSPDFVerticalAlignmentTransformerName: string;

declare var PSPDFWebKitLegacyModeKey: string;

declare class PSPDFWidgetAnnotation extends PSPDFAnnotation {

	static alloc(): PSPDFWidgetAnnotation; // inherited from NSObject

	static modelWithDictionaryError(dictionaryValue: NSDictionary<string, any>): PSPDFWidgetAnnotation; // inherited from PSPDFModel

	static new(): PSPDFWidgetAnnotation; // inherited from NSObject

	action: PSPDFAction;

	appearanceCharacteristics: PSPDFAppearanceCharacteristics;

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

	readonly commonName: string;

	readonly publicKey: PSPDFRSAKey;
}

declare var PSPDFXCallbackURLStringKey: string;

declare class PSPDFXFDFAnnotationProvider extends PSPDFContainerAnnotationProvider {

	static alloc(): PSPDFXFDFAnnotationProvider; // inherited from NSObject

	static new(): PSPDFXFDFAnnotationProvider; // inherited from NSObject

	readonly dataProvider: PSPDFDataProviding;

	readonly fileURL: NSURL;

	constructor(o: { documentProvider: PSPDFDocumentProvider; dataProvider: PSPDFDataProviding; });

	constructor(o: { documentProvider: PSPDFDocumentProvider; fileURL: NSURL; });

	initWithDocumentProviderDataProvider(documentProvider: PSPDFDocumentProvider, dataProvider: PSPDFDataProviding): this;

	initWithDocumentProviderFileURL(documentProvider: PSPDFDocumentProvider, XFDFFileURL: NSURL): this;

	loadAllAnnotations(): void;
}

declare class PSPDFXFDFParser extends NSObject {

	static alloc(): PSPDFXFDFParser; // inherited from NSObject

	static new(): PSPDFXFDFParser; // inherited from NSObject

	readonly annotations: NSArray<PSPDFAnnotation>;

	readonly dataProvider: PSPDFDataProviding;

	readonly documentProvider: PSPDFDocumentProvider;

	readonly parsingEnded: boolean;

	constructor(o: { dataProvider: PSPDFDataProviding; documentProvider: PSPDFDocumentProvider; });

	initWithDataProviderDocumentProvider(dataProvider: PSPDFDataProviding, documentProvider: PSPDFDocumentProvider): this;

	parseWithError(): NSArray<PSPDFAnnotation>;
}

declare class PSPDFXFDFWriter extends NSObject {

	static alloc(): PSPDFXFDFWriter; // inherited from NSObject

	static new(): PSPDFXFDFWriter; // inherited from NSObject

	writeAnnotationsToDataSinkDocumentProviderError(annotations: NSArray<PSPDFAnnotation>, dataSink: PSPDFDataSink, documentProvider: PSPDFDocumentProvider): boolean;
}

declare var PSPDFXMPDCNamespace: string;

declare var PSPDFXMPDCNamespacePrefix: string;

declare var PSPDFXMPPDFNamespace: string;

declare var PSPDFXMPPDFNamespacePrefix: string;
