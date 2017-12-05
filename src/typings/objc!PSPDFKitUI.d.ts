
declare function NSStringFromPSPDFGalleryItemContentState(state: PSPDFGalleryItemContentState): string;

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

declare var PSPDFAnalyticsEventNameSearchResultSelect: string;

declare var PSPDFAnalyticsEventNameSearchStart: string;

declare var PSPDFAnalyticsEventNameShare: string;

declare var PSPDFAnalyticsEventNameSpreadChange: string;

declare var PSPDFAnalyticsEventNameTextSelect: string;

declare var PSPDFAnalyticsEventNameThumbnailGridOpen: string;

declare var PSPDFAnalyticsEventNameToolbarMove: string;

declare var PSPDFAnalyticsEventPrefix: string;

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

	collectionViewShouldSpringLoadItemAtIndexPathWithContext(collectionView: UICollectionView, indexPath: NSIndexPath, context: UISpringLoadedInteractionContext): boolean;

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

	scrollViewDidChangeAdjustedContentInset(scrollView: UIScrollView): void;

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

declare var PSPDFAnnotationMenuAlignment: string;

declare var PSPDFAnnotationMenuAlignmentCenter: string;

declare var PSPDFAnnotationMenuAlignmentLeft: string;

declare var PSPDFAnnotationMenuAlignmentRight: string;

declare var PSPDFAnnotationMenuCancel: string;

declare var PSPDFAnnotationMenuColor: string;

declare var PSPDFAnnotationMenuContinueRecording: string;

declare var PSPDFAnnotationMenuCopy: string;

declare var PSPDFAnnotationMenuCustomColor: string;

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

interface PSPDFAnnotationPresenting extends NSObjectProtocol {

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
declare var PSPDFAnnotationPresenting: {

	prototype: PSPDFAnnotationPresenting;
};

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

	collectionViewShouldSpringLoadItemAtIndexPathWithContext(collectionView: UICollectionView, indexPath: NSIndexPath, context: UISpringLoadedInteractionContext): boolean;

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

	scrollViewDidChangeAdjustedContentInset(scrollView: UIScrollView): void;

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

declare class PSPDFAnnotationStateManager extends NSObject implements PSPDFOverridable {

	static alloc(): PSPDFAnnotationStateManager; // inherited from NSObject

	static new(): PSPDFAnnotationStateManager; // inherited from NSObject

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

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMarkupAnnotationState(state: string): boolean;

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

declare var PSPDFAnnotationStringSavedAnnotations: string;

declare var PSPDFAnnotationStringSelectionTool: string;

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

declare class PSPDFAnnotationTableViewController extends PSPDFSearchableTableViewController implements PSPDFDocumentInfoController, PSPDFStyleable {

	static alloc(): PSPDFAnnotationTableViewController; // inherited from NSObject

	static new(): PSPDFAnnotationTableViewController; // inherited from NSObject

	allowCopy: boolean;

	delegate: PSPDFAnnotationTableViewControllerDelegate;

	editableAnnotationTypes: NSSet<string>;

	showDeleteAllOption: boolean;

	readonly viewForTableViewFooter: UIView;

	visibleAnnotationTypes: NSSet<string>;

	barStyle: UIBarStyle; // inherited from PSPDFStyleable

	container: PSPDFContainerViewController; // inherited from PSPDFDocumentInfoController

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	document: PSPDFDocument; // inherited from PSPDFDocumentInfoController

	forcesStatusBarHidden: boolean; // inherited from PSPDFStyleable

	readonly hash: number; // inherited from NSObjectProtocol

	isBarTranslucent: boolean; // inherited from PSPDFStyleable

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { document: PSPDFDocument; }); // inherited from PSPDFDocumentInfoController

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

declare class PSPDFAnnotationView extends UIView implements PSPDFAnnotationPresenting {

	static alloc(): PSPDFAnnotationView; // inherited from NSObject

	static appearance(): PSPDFAnnotationView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PSPDFAnnotationView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PSPDFAnnotationView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): PSPDFAnnotationView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PSPDFAnnotationView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): PSPDFAnnotationView; // inherited from UIAppearance

	static new(): PSPDFAnnotationView; // inherited from NSObject

	shouldAnimatedAnnotationChanges: boolean;

	PDFScale: number; // inherited from PSPDFAnnotationPresenting

	annotation: PSPDFAnnotation; // inherited from PSPDFAnnotationPresenting

	configuration: PSPDFConfiguration; // inherited from PSPDFAnnotationPresenting

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	pageView: PSPDFPageView; // inherited from PSPDFAnnotationPresenting

	selected: boolean; // inherited from PSPDFAnnotationPresenting

	readonly shouldSyncRemovalFromSuperview: boolean; // inherited from PSPDFAnnotationPresenting

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	zIndex: number; // inherited from PSPDFAnnotationPresenting

	readonly  // inherited from NSObjectProtocol

	zoomScale: number; // inherited from PSPDFAnnotationPresenting

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

	updateFrame(): void;

	willRemoveFromSuperview(): void;
}

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

declare var PSPDFAutomaticSearchResultZoomScale: number;

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

interface PSPDFBookmarkTableViewCellDelegate extends NSObjectProtocol {

	bookmarkCellDidUpdateBookmarkString(cell: PSPDFBookmarkCell, bookmarkString: string): void;
}
declare var PSPDFBookmarkTableViewCellDelegate: {

	prototype: PSPDFBookmarkTableViewCellDelegate;
};

declare class PSPDFBookmarkViewController extends PSPDFStatefulTableViewController implements PSPDFBookmarkTableViewCellDelegate, PSPDFDocumentInfoController, PSPDFStyleable {

	static alloc(): PSPDFBookmarkViewController; // inherited from NSObject

	static new(): PSPDFBookmarkViewController; // inherited from NSObject

	allowCopy: boolean;

	delegate: PSPDFBookmarkViewControllerDelegate;

	sortOrder: PSPDFBookmarkManagerSortOrder;

	barStyle: UIBarStyle; // inherited from PSPDFStyleable

	container: PSPDFContainerViewController; // inherited from PSPDFDocumentInfoController

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	document: PSPDFDocument; // inherited from PSPDFDocumentInfoController

	forcesStatusBarHidden: boolean; // inherited from PSPDFStyleable

	readonly hash: number; // inherited from NSObjectProtocol

	isBarTranslucent: boolean; // inherited from PSPDFStyleable

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { document: PSPDFDocument; }); // inherited from PSPDFDocumentInfoController

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

declare class PSPDFBrightnessManager extends NSObject {

	static alloc(): PSPDFBrightnessManager; // inherited from NSObject

	static new(): PSPDFBrightnessManager; // inherited from NSObject

	additionalBrightnessDimmingFactor: number;

	brightness: number;

	extendedIdleTime: number;

	idleTimerManagement: PSPDFIdleTimerManagement;

	maximumAdditionalBrightnessDimmingFactor: number;

	wantsAdditionalSoftwareDimming: boolean;

	wantsSoftwareDimming: boolean;
}

declare class PSPDFBrightnessViewController extends PSPDFStaticTableViewController {

	static alloc(): PSPDFBrightnessViewController; // inherited from NSObject

	static new(): PSPDFBrightnessViewController; // inherited from NSObject

	allowedAppearanceModes: PSPDFAppearanceMode;

	appearanceModeManager: PSPDFAppearanceModeManager;

	readonly brightnessManager: PSPDFBrightnessManager;
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

declare class PSPDFCertificatePickerViewController extends PSPDFStatefulTableViewController {

	static alloc(): PSPDFCertificatePickerViewController; // inherited from NSObject

	static new(): PSPDFCertificatePickerViewController; // inherited from NSObject

	delegate: PSPDFCertificatePickerViewControllerDelegate;

	constructor(o: { registeredSigners: NSArray<PSPDFSigner>; });

	initWithRegisteredSigners(registeredSigners: NSArray<PSPDFSigner>): this;
}

interface PSPDFCertificatePickerViewControllerDelegate extends NSObjectProtocol {

	certificatePickerViewControllerDidPickSigner?(controller: PSPDFCertificatePickerViewController, signer: PSPDFSigner): void;
}
declare var PSPDFCertificatePickerViewControllerDelegate: {

	prototype: PSPDFCertificatePickerViewControllerDelegate;
};

declare function PSPDFChildViewControllerForClass(controller: UIViewController, controllerClass: typeof NSObject): any;

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

declare const enum PSPDFColorSet {

	Default = 0,

	DefaultWithTransparency = 1,

	PageBackgrounds = 2
}

declare class PSPDFConfiguration extends PSPDFBaseConfiguration<PSPDFConfigurationBuilder> implements PSPDFOverridable {

	static alloc(): PSPDFConfiguration; // inherited from NSObject

	static configurationWithBuilder(builderBlock: (p1: BuilderType) => void): PSPDFConfiguration; // inherited from PSPDFBaseConfiguration

	static defaultConfiguration(): PSPDFConfiguration; // inherited from PSPDFBaseConfiguration

	static modelWithDictionaryError(dictionaryValue: NSDictionary<string, any>): PSPDFConfiguration; // inherited from PSPDFModel

	static new(): PSPDFConfiguration; // inherited from NSObject

	readonly additionalContentInsets: UIEdgeInsets;

	readonly additionalScrollViewFrameInsets: UIEdgeInsets;

	readonly allowBackgroundSaving: boolean;

	readonly allowToolbarTitleChange: boolean;

	readonly allowedAppearanceModes: PSPDFAppearanceMode;

	readonly allowedMenuActions: PSPDFTextSelectionMenuAction;

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

	readonly documentLabelEnabled: PSPDFAdaptiveConditional;

	readonly doubleTapAction: PSPDFTapAction;

	readonly dragAndDropConfiguration: PSPDFDragAndDropConfiguration;

	readonly drawCreateMode: PSPDFDrawCreateMode;

	readonly editableAnnotationTypes: NSSet<string>;

	readonly excludedActivityTypes: NSArray<string>;

	readonly firstPageAlwaysSingle: boolean;

	readonly formElementZoomEnabled: boolean;

	readonly freeTextAccessoryViewEnabled: boolean;

	readonly galleryConfiguration: PSPDFGalleryConfiguration;

	readonly imageSelectionEnabled: boolean;

	readonly internalTapGesturesEnabled: boolean;

	readonly linkAction: PSPDFLinkAction;

	readonly mailSharingOptions: PSPDFDocumentSharingOptions;

	readonly maximumZoomScale: number;

	readonly messageSharingOptions: PSPDFDocumentSharingOptions;

	readonly minimumZoomScale: number;

	readonly naturalDrawingAnnotationEnabled: boolean;

	readonly naturalSignatureDrawingEnabled: boolean;

	readonly openInSharingOptions: PSPDFDocumentSharingOptions;

	readonly pageGrabberEnabled: boolean;

	readonly pageLabelEnabled: boolean;

	readonly pageMode: PSPDFPageMode;

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

	readonly shouldHideNavigationBarWithUserInterface: boolean;

	readonly shouldHideStatusBar: boolean;

	readonly shouldHideStatusBarWithUserInterface: boolean;

	readonly shouldHideUserInterfaceOnPageChange: boolean;

	readonly shouldScrollToChangedPage: boolean;

	readonly shouldShowUserInterfaceOnViewWillAppear: boolean;

	readonly showAnnotationMenuAfterCreation: boolean;

	readonly showBackActionButton: boolean;

	readonly showBackForwardActionButtonLabels: boolean;

	readonly showForwardActionButton: boolean;

	readonly signatureBiometricPropertiesOptions: PSPDFSignatureBiometricPropertiesOption;

	readonly signatureCertificateSelectionMode: PSPDFSignatureCertificateSelectionMode;

	readonly signatureSavingStrategy: PSPDFSignatureSavingStrategy;

	readonly signatureStore: PSPDFSignatureStore;

	readonly soundAnnotationPlayerStyle: PSPDFSoundAnnotationPlayerStyle;

	readonly soundAnnotationRecordingOptions: NSDictionary<string, any>;

	readonly soundAnnotationTimeLimit: number;

	readonly spreadFitting: PSPDFConfigurationSpreadFitting;

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

	readonly userInterfaceViewAnimation: PSPDFUserInterfaceViewAnimation;

	readonly userInterfaceViewMode: PSPDFUserInterfaceViewMode;

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

	additionalContentInsets: UIEdgeInsets;

	additionalScrollViewFrameInsets: UIEdgeInsets;

	allowBackgroundSaving: boolean;

	allowToolbarTitleChange: boolean;

	allowedAppearanceModes: PSPDFAppearanceMode;

	allowedMenuActions: PSPDFTextSelectionMenuAction;

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

	documentLabelEnabled: PSPDFAdaptiveConditional;

	doubleTapAction: PSPDFTapAction;

	dragAndDropConfiguration: PSPDFDragAndDropConfiguration;

	drawCreateMode: PSPDFDrawCreateMode;

	editableAnnotationTypes: NSSet<string>;

	excludedActivityTypes: NSArray<string>;

	firstPageAlwaysSingle: boolean;

	formElementZoomEnabled: boolean;

	freeTextAccessoryViewEnabled: boolean;

	galleryConfiguration: PSPDFGalleryConfiguration;

	imageSelectionEnabled: boolean;

	internalTapGesturesEnabled: boolean;

	linkAction: PSPDFLinkAction;

	mailSharingOptions: PSPDFDocumentSharingOptions;

	maximumZoomScale: number;

	messageSharingOptions: PSPDFDocumentSharingOptions;

	minimumZoomScale: number;

	naturalDrawingAnnotationEnabled: boolean;

	naturalSignatureDrawingEnabled: boolean;

	openInSharingOptions: PSPDFDocumentSharingOptions;

	pageGrabberEnabled: boolean;

	pageLabelEnabled: boolean;

	pageMode: PSPDFPageMode;

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

	shouldHideNavigationBarWithUserInterface: boolean;

	shouldHideStatusBar: boolean;

	shouldHideStatusBarWithUserInterface: boolean;

	shouldHideUserInterfaceOnPageChange: boolean;

	shouldScrollToChangedPage: boolean;

	shouldShowUserInterfaceOnViewWillAppear: boolean;

	showAnnotationMenuAfterCreation: boolean;

	showBackActionButton: boolean;

	showBackForwardActionButtonLabels: boolean;

	showForwardActionButton: boolean;

	signatureBiometricPropertiesOptions: PSPDFSignatureBiometricPropertiesOption;

	signatureCertificateSelectionMode: PSPDFSignatureCertificateSelectionMode;

	signatureSavingStrategy: PSPDFSignatureSavingStrategy;

	signatureStore: PSPDFSignatureStore;

	soundAnnotationPlayerStyle: PSPDFSoundAnnotationPlayerStyle;

	soundAnnotationRecordingOptions: NSDictionary<string, any>;

	soundAnnotationTimeLimit: number;

	spreadFitting: PSPDFConfigurationSpreadFitting;

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

	userInterfaceViewAnimation: PSPDFUserInterfaceViewAnimation;

	userInterfaceViewMode: PSPDFUserInterfaceViewMode;

	overrideClassWithClass(builtinClass: typeof NSObject, subclass: typeof NSObject): void;
}

declare const enum PSPDFConfigurationSpreadFitting {

	Fit = 0,

	Fill = 1,

	Adaptive = 2
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

declare class PSPDFContinuousScrollingLayout extends PSPDFStackViewLayout {

	static alloc(): PSPDFContinuousScrollingLayout; // inherited from NSObject

	static new(): PSPDFContinuousScrollingLayout; // inherited from NSObject

	fillAlongsideTransverseAxis: boolean;
}

interface PSPDFControlDelegate extends PSPDFErrorHandler, PSPDFPageControls, PSPDFPresentationActions, PSPDFUserInterfaceControls {
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

declare var PSPDFConvertFreeTextAnnotationCalloutActionKey: string;

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

declare class PSPDFDigitalSignatureCoordinator extends NSObject {

	static alloc(): PSPDFDigitalSignatureCoordinator; // inherited from NSObject

	static new(): PSPDFDigitalSignatureCoordinator; // inherited from NSObject

	configureSignatureAppearanceWithBuilderDocumentSignature(builder: PSPDFSignatureAppearanceBuilder, document: PSPDFDocument, signature: PSPDFSignatureContainer): void;

	pathForDigitallySignedDocumentFromOriginalDocumentSuggestedFileName(document: PSPDFDocument, fileName: string): string;

	presentSignedDocumentShowingPageIndex(signedDocument: PSPDFDocument, pageIndex: number): void;
}

declare var PSPDFDocumentActionEmail: string;

declare class PSPDFDocumentActionExecutor extends NSObject implements PSPDFDocumentSharingCoordinatorDelegate {

	static alloc(): PSPDFDocumentActionExecutor; // inherited from NSObject

	static new(): PSPDFDocumentActionExecutor; // inherited from NSObject

	delegate: PSPDFDocumentActionExecutorDelegate;

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

	readonly copyPagesButton: PSPDFToolbarButton;

	readonly deletePagesButton: PSPDFToolbarButton;

	readonly doneButton: PSPDFToolbarButton;

	readonly duplicatePagesButton: PSPDFToolbarButton;

	readonly exportPagesButton: PSPDFToolbarButton;

	readonly pastePagesButton: PSPDFToolbarButton;

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

	copySelectedPagesToPasteboard(): void;

	documentEditorDidPerformChanges(editor: PSPDFDocumentEditor, changes: NSArray<PSPDFEditingChange>): void;

	initWithDocumentEditorToolbar(documentEditorToolbar: PSPDFDocumentEditorToolbar): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	newPageControllerDidFinishSelectingConfiguration(controller: PSPDFNewPageViewController, configuration: PSPDFNewPageConfiguration): void;

	pastePagesFromPasteboard(): void;

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

interface PSPDFDocumentInfoController {

	container?: PSPDFContainerViewController;

	document: PSPDFDocument;

	initWithDocument?(document: PSPDFDocument): PSPDFDocumentInfoController;
}
declare var PSPDFDocumentInfoController: {

	prototype: PSPDFDocumentInfoController;
};

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

	visiblePageIndexes: NSIndexSet;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { documents: NSArray<PSPDFDocument>; });

	class(): typeof NSObject;

	classForClass(originalClass: typeof NSObject): typeof NSObject;

	configureSharingController(sharingController: PSPDFDocumentSharingViewController): boolean;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	documentSecurityOptionsForDocumentSharingViewController(shareController: PSPDFDocumentSharingViewController): PSPDFDocumentSecurityOptions;

	documentSharingViewControllerConfigureCustomProcessorConfigurationOptions(shareController: PSPDFDocumentSharingViewController, processorConfiguration: PSPDFProcessorConfiguration): void;

	documentSharingViewControllerDidCancel(shareController: PSPDFDocumentSharingViewController): void;

	documentSharingViewControllerDidFinishWithSelectedOptionsFilesAnnotationSummaryError(shareController: PSPDFDocumentSharingViewController, selectedSharingOption: PSPDFDocumentSharingOptions, files: NSArray<PSPDFFile>, annotationSummary: NSAttributedString, error: NSError): void;

	documentSharingViewControllerPreparationProgress(shareController: PSPDFDocumentSharingViewController, progress: number): void;

	documentSharingViewControllerShouldPrepareWithSelectedOptionsSelectedPageRange(shareController: PSPDFDocumentSharingViewController, selectedSharingOption: PSPDFDocumentSharingOptions, selectedPageRange: NSRange): boolean;

	documentSharingViewControllerSubtitleForOption(shareController: PSPDFDocumentSharingViewController, option: PSPDFDocumentSharingOptions): string;

	documentSharingViewControllerTitleForOption(shareController: PSPDFDocumentSharingViewController, option: PSPDFDocumentSharingOptions): string;

	documentSharingViewControllerWillShareFiles(shareController: PSPDFDocumentSharingViewController, files: NSArray<PSPDFFile>): NSArray<PSPDFFile>;

	initWithDocuments(documents: NSArray<PSPDFDocument>): this;

	isAvailableUserInvokedError(userInvoked: boolean): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	presentToViewControllerOptionsSenderAnimatedCompletion(targetController: UIViewController, options: NSDictionary<string, any>, sender: any, animated: boolean, completion: () => void): void;

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

	readonly delegateDocumentSecurityOptions: PSPDFDocumentSecurityOptions;

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

	constructor(o: { documents: NSArray<PSPDFDocument>; visiblePageRange: NSRange; allowedSharingOptions: PSPDFDocumentSharingOptions; });

	class(): typeof NSObject;

	commitWithCurrentSettings(): boolean;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	delegateConfigureCustomProcessorConfigurationOptions(processorConfiguration: PSPDFProcessorConfiguration): void;

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

	documentSecurityOptionsForDocumentSharingViewController?(shareController: PSPDFDocumentSharingViewController): PSPDFDocumentSecurityOptions;

	documentSharingViewControllerConfigureCustomProcessorConfigurationOptions?(shareController: PSPDFDocumentSharingViewController, processorConfiguration: PSPDFProcessorConfiguration): void;

	documentSharingViewControllerDidCancel?(shareController: PSPDFDocumentSharingViewController): void;

	documentSharingViewControllerDidFinishWithSelectedOptionsFilesAnnotationSummaryError(shareController: PSPDFDocumentSharingViewController, selectedSharingOption: PSPDFDocumentSharingOptions, files: NSArray<PSPDFFile>, annotationSummary: NSAttributedString, error: NSError): void;

	documentSharingViewControllerPreparationProgress?(shareController: PSPDFDocumentSharingViewController, progress: number): void;

	documentSharingViewControllerShouldPrepareWithSelectedOptionsSelectedPageRange?(shareController: PSPDFDocumentSharingViewController, selectedSharingOption: PSPDFDocumentSharingOptions, selectedPageRange: NSRange): boolean;

	documentSharingViewControllerSubtitleForOption?(shareController: PSPDFDocumentSharingViewController, option: PSPDFDocumentSharingOptions): string;

	documentSharingViewControllerTitleForOption?(shareController: PSPDFDocumentSharingViewController, option: PSPDFDocumentSharingOptions): string;

	documentSharingViewControllerWillShareFiles?(shareController: PSPDFDocumentSharingViewController, files: NSArray<PSPDFFile>): NSArray<PSPDFFile>;

	temporaryDirectoryForDocumentSharingViewController?(shareController: PSPDFDocumentSharingViewController): string;
}
declare var PSPDFDocumentSharingViewControllerDelegate: {

	prototype: PSPDFDocumentSharingViewControllerDelegate;
};

declare class PSPDFDocumentViewController extends UIViewController {

	static alloc(): PSPDFDocumentViewController; // inherited from NSObject

	static new(): PSPDFDocumentViewController; // inherited from NSObject

	alwaysBounce: boolean;

	continuousSpreadIndex: number;

	delegate: PSPDFDocumentViewControllerDelegate;

	layout: PSPDFDocumentViewLayout;

	scrollEnabled: boolean;

	showsScrollIndicator: boolean;

	spreadIndex: number;

	readonly visibleSpreadViews: NSArray<PSPDFSpreadView>;

	zoomEnabled: boolean;

	scrollToNextSpreadAnimated(animated: boolean): boolean;

	scrollToPreviousSpreadAnimated(animated: boolean): boolean;

	scrollToSpreadAtIndexScrollPositionAnimated(spreadIndex: number, position: PSPDFSpreadScrollPosition, animated: boolean): void;

	setContinuousSpreadIndexAnimated(continuousSpreadIndex: number, animated: boolean): void;

	setSpreadIndexAnimated(spreadIndex: number, animated: boolean): void;

	zoomToPDFRectForPageAtIndexAnimated(pdfRect: CGRect, pageIndex: number, animated: boolean): void;
}

interface PSPDFDocumentViewControllerDelegate extends NSObjectProtocol {

	documentViewControllerConfigureScrollView?(documentViewController: PSPDFDocumentViewController, scrollView: UIScrollView): void;

	documentViewControllerConfigureZoomViewForSpreadAtIndex?(documentViewController: PSPDFDocumentViewController, zoomView: UIScrollView, spreadIndex: number): void;

	documentViewControllerDidChangeContinuousSpreadIndex?(documentViewController: PSPDFDocumentViewController, oldContinuousSpreadIndex: number): void;

	documentViewControllerDidChangeSpreadIndex?(documentViewController: PSPDFDocumentViewController, oldSpreadIndex: number): void;

	documentViewControllerDidCleanupSpreadViewForSpreadAtIndex?(documentViewController: PSPDFDocumentViewController, spreadView: PSPDFSpreadView, spreadIndex: number): void;

	documentViewControllerDidConfigureSpreadViewForSpreadAtIndex?(documentViewController: PSPDFDocumentViewController, spreadView: PSPDFSpreadView, spreadIndex: number): void;

	documentViewControllerDidEndDisplayingSpreadViewForSpreadAtIndex?(documentViewController: PSPDFDocumentViewController, spreadView: PSPDFSpreadView, spreadIndex: number): void;

	documentViewControllerDidUpdateZoomScaleForSpreadAtIndex?(documentViewController: PSPDFDocumentViewController, zoomScale: number, spreadIndex: number): void;

	documentViewControllerWillBeginDisplayingSpreadViewForSpreadAtIndex?(documentViewController: PSPDFDocumentViewController, spreadView: PSPDFSpreadView, spreadIndex: number): void;
}
declare var PSPDFDocumentViewControllerDelegate: {

	prototype: PSPDFDocumentViewControllerDelegate;
};

declare var PSPDFDocumentViewControllerDidCleanupSpreadViewNotification: string;

declare var PSPDFDocumentViewControllerDidConfigureSpreadViewNotification: string;

declare var PSPDFDocumentViewControllerDidEndDisplayingSpreadViewNotification: string;

declare var PSPDFDocumentViewControllerSpreadIndexDidChangeNotification: string;

declare var PSPDFDocumentViewControllerSpreadViewKey: string;

declare var PSPDFDocumentViewControllerWillBeginDisplayingSpreadViewNotification: string;

declare class PSPDFDocumentViewLayout extends UICollectionViewLayout {

	static alloc(): PSPDFDocumentViewLayout; // inherited from NSObject

	static continuousScrollingLayout(): PSPDFContinuousScrollingLayout;

	static new(): PSPDFDocumentViewLayout; // inherited from NSObject

	static pageCurlLayout(): PSPDFDocumentViewLayout;

	static scrollPerSpreadLayout(): PSPDFScrollPerSpreadLayout;

	additionalScrollViewFrameInsets: UIEdgeInsets;

	readonly document: PSPDFDocument;

	readonly numberOfSpreads: number;

	pagingEnabled: boolean;

	readonly scrollViewFrameInsets: UIEdgeInsets;

	spreadBasedZooming: boolean;

	readonly spreadMode: PSPDFDocumentViewLayoutSpreadMode;

	readonly viewport: CGRect;

	configureScrollView(scrollView: UIScrollView): void;

	configureZoomViewForSpreadIndex(zoomView: UIScrollView, spreadIndex: number): void;

	contentOffsetForContinuousSpreadIndex(continuousSpreadIndex: number): CGPoint;

	continuousSpreadIndexForContentOffset(contentOffset: CGPoint): number;

	invalidateConfiguration(): void;

	invalidationContextForViewportChange(newViewport: CGRect): UICollectionViewLayoutInvalidationContext;

	pageRangeForSpreadAtIndex(spreadIndex: number): NSRange;

	shouldInvalidateLayoutForViewportChange(newViewport: CGRect): boolean;

	spreadIndexForPageAtIndex(pageIndex: number): number;
}

declare class PSPDFDocumentViewLayoutInvalidationContext extends UICollectionViewLayoutInvalidationContext {

	static alloc(): PSPDFDocumentViewLayoutInvalidationContext; // inherited from NSObject

	static new(): PSPDFDocumentViewLayoutInvalidationContext; // inherited from NSObject
}

declare const enum PSPDFDocumentViewLayoutSpreadMode {

	Single = 0,

	Double = 1,

	Book = 2
}

declare class PSPDFDragAndDropConfiguration extends PSPDFBaseConfiguration<PSPDFDragAndDropConfigurationBuilder> {

	static alloc(): PSPDFDragAndDropConfiguration; // inherited from NSObject

	static configurationWithBuilder(builderBlock: (p1: BuilderType) => void): PSPDFDragAndDropConfiguration; // inherited from PSPDFBaseConfiguration

	static defaultConfiguration(): PSPDFDragAndDropConfiguration; // inherited from PSPDFBaseConfiguration

	static modelWithDictionaryError(dictionaryValue: NSDictionary<string, any>): PSPDFDragAndDropConfiguration; // inherited from PSPDFModel

	static new(): PSPDFDragAndDropConfiguration; // inherited from NSObject

	readonly acceptedDropTypes: PSPDFDropType;

	readonly allowDraggingToExternalApps: boolean;

	readonly allowedDragTypes: PSPDFDragType;

	readonly allowedDropTargets: PSPDFDropTarget;
}

declare class PSPDFDragAndDropConfigurationBuilder extends PSPDFBaseConfigurationBuilder {

	static alloc(): PSPDFDragAndDropConfigurationBuilder; // inherited from NSObject

	static new(): PSPDFDragAndDropConfigurationBuilder; // inherited from NSObject

	acceptedDropTypes: PSPDFDropType;

	allowDraggingToExternalApps: boolean;

	allowedDragTypes: PSPDFDragType;

	allowedDropTargets: PSPDFDropTarget;
}

declare const enum PSPDFDragType {

	None = 0,

	Text = 1,

	Image = 2,

	All = 4294967295
}

declare const enum PSPDFDrawCreateMode {

	Separate = 0,

	MergeIfPossible = 1,

	Automatic = 2
}

declare class PSPDFDrawView extends UIView implements PSPDFAnnotationPresenting, PSPDFOverridable {

	static alloc(): PSPDFDrawView; // inherited from NSObject

	static appearance(): PSPDFDrawView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PSPDFDrawView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PSPDFDrawView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): PSPDFDrawView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PSPDFDrawView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): PSPDFDrawView; // inherited from UIAppearance

	static new(): PSPDFDrawView; // inherited from NSObject

	annotationType: PSPDFAnnotationType;

	annotationVariant: string;

	readonly annotations: NSArray<PSPDFAnnotation>;

	borderEffect: PSPDFAnnotationBorderEffect;

	borderEffectIntensity: number;

	dashArray: NSArray<number>;

	drawCreateMode: PSPDFDrawCreateMode;

	readonly drawGestureRecognizer: UIGestureRecognizer;

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

	PDFScale: number; // inherited from PSPDFAnnotationPresenting

	annotation: PSPDFAnnotation; // inherited from PSPDFAnnotationPresenting

	configuration: PSPDFConfiguration; // inherited from PSPDFAnnotationPresenting

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	pageView: PSPDFPageView; // inherited from PSPDFAnnotationPresenting

	selected: boolean; // inherited from PSPDFAnnotationPresenting

	readonly shouldSyncRemovalFromSuperview: boolean; // inherited from PSPDFAnnotationPresenting

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	zIndex: number; // inherited from PSPDFAnnotationPresenting

	readonly  // inherited from NSObjectProtocol

	zoomScale: number; // inherited from PSPDFAnnotationPresenting

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

	startDrawingAtPoint(location: PSPDFDrawingPoint): void;

	willRemoveFromSuperview(): void;
}

declare const enum PSPDFDrawViewInputMode {

	Draw = 0,

	Erase = 1
}

declare const enum PSPDFDropTarget {

	None = 0,

	ExternalApp = 1,

	SamePage = 2,

	OtherPages = 4,

	All = 4294967295
}

declare const enum PSPDFDropType {

	None = 0,

	Text = 1,

	Image = 2,

	PDF = 4,

	All = 4294967295
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

declare class PSPDFEmbeddedFilesViewController extends PSPDFStatefulTableViewController implements PSPDFDocumentInfoController {

	static alloc(): PSPDFEmbeddedFilesViewController; // inherited from NSObject

	static new(): PSPDFEmbeddedFilesViewController; // inherited from NSObject

	delegate: PSPDFEmbeddedFilesViewControllerDelegate;

	container: PSPDFContainerViewController; // inherited from PSPDFDocumentInfoController

	document: PSPDFDocument; // inherited from PSPDFDocumentInfoController

	constructor(o: { document: PSPDFDocument; }); // inherited from PSPDFDocumentInfoController

	initWithDocument(document: PSPDFDocument): this;
}

interface PSPDFEmbeddedFilesViewControllerDelegate extends NSObjectProtocol {

	embeddedFilesControllerDidSelectFileSender(embeddedFilesController: PSPDFEmbeddedFilesViewController, embeddedFile: PSPDFEmbeddedFile, sender: any): void;
}
declare var PSPDFEmbeddedFilesViewControllerDelegate: {

	prototype: PSPDFEmbeddedFilesViewControllerDelegate;
};

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

	beginEditing(): boolean;

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

	scrollViewDidChangeAdjustedContentInset(scrollView: UIScrollView): void;

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

	readonly activeContentViews: NSSet<PSPDFGalleryContentView>;

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

declare var PSPDFGuideSnapAllowanceAlways: number;

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

	renderTaskDidFailWithError(task: PSPDFRenderTask, error: NSError): void;

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

declare const enum PSPDFIdleTimerManagement {

	Manual = 0,

	ExtendedTime = 1,

	ExtendedTimeExternalScreenDisablesTimer = 2
}

declare class PSPDFImagePickerController extends UIImagePickerController {

	static alloc(): PSPDFImagePickerController; // inherited from NSObject

	static new(): PSPDFImagePickerController; // inherited from NSObject

	allowedImageQualities: PSPDFImageQuality;

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

	signatures: NSArray<PSPDFSignatureContainer>; // inherited from PSPDFSignatureStore

	readonly storeName: string; // inherited from PSPDFSignatureStore

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { storeName: string; }); // inherited from PSPDFSignatureStore

	addSignature(signature: PSPDFSignatureContainer): void;

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

	removeSignature(signature: PSPDFSignatureContainer): boolean;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare var PSPDFKeychainSignatureStoreDefaultStoreName: string;

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

declare const enum PSPDFLinkAction {

	None = 0,

	AlertView = 1,

	OpenSafari = 2,

	InlineBrowser = 3,

	InlineWebViewController = 4
}

declare class PSPDFLinkAnnotationBaseView extends UIView implements PSPDFAnnotationPresenting {

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

	PDFScale: number; // inherited from PSPDFAnnotationPresenting

	annotation: PSPDFAnnotation; // inherited from PSPDFAnnotationPresenting

	configuration: PSPDFConfiguration; // inherited from PSPDFAnnotationPresenting

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	pageView: PSPDFPageView; // inherited from PSPDFAnnotationPresenting

	selected: boolean; // inherited from PSPDFAnnotationPresenting

	readonly shouldSyncRemovalFromSuperview: boolean; // inherited from PSPDFAnnotationPresenting

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	zIndex: number; // inherited from PSPDFAnnotationPresenting

	readonly  // inherited from NSObjectProtocol

	zoomScale: number; // inherited from PSPDFAnnotationPresenting

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

	mediaPlayerControllerDidSeekToTime?(controller: PSPDFMediaPlayerController, seekTime: CMTime): void;

	mediaPlayerControllerDidStartPlaying?(controller: PSPDFMediaPlayerController): void;

	mediaPlayerControllerExternalPlaybackActiveDidChange?(controller: PSPDFMediaPlayerController, externalPlaybackActive: boolean): void;

	mediaPlayerControllerShouldPauseOtherInstances?(controller: PSPDFMediaPlayerController): boolean;
}
declare var PSPDFMediaPlayerControllerDelegate: {

	prototype: PSPDFMediaPlayerControllerDelegate;
};

declare var PSPDFMediaPlayerControllerPlaybackDidFinishNotification: string;

declare var PSPDFMediaPlayerControllerPlaybackDidPauseNotification: string;

declare var PSPDFMediaPlayerControllerPlaybackDidStartNotification: string;

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

	zoomScale: number;

	configure?(configuration: PSPDFConfiguration): void;

	performAction(action: PSPDFAction): void;

	setFullscreenAnimated(fullscreen: boolean, animated: boolean): void;
}
declare var PSPDFMultimediaViewController: {

	prototype: PSPDFMultimediaViewController;
};

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

declare class PSPDFNoteAnnotationViewController extends PSPDFBaseViewController implements PSPDFStyleable, UIGestureRecognizerDelegate, UITextViewDelegate {

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

	gestureRecognizerShouldBeRequiredToFailByGestureRecognizer(gestureRecognizer: UIGestureRecognizer, otherGestureRecognizer: UIGestureRecognizer): boolean;

	gestureRecognizerShouldBegin(gestureRecognizer: UIGestureRecognizer): boolean;

	gestureRecognizerShouldReceivePress(gestureRecognizer: UIGestureRecognizer, press: UIPress): boolean;

	gestureRecognizerShouldReceiveTouch(gestureRecognizer: UIGestureRecognizer, touch: UITouch): boolean;

	gestureRecognizerShouldRecognizeSimultaneouslyWithGestureRecognizer(gestureRecognizer: UIGestureRecognizer, otherGestureRecognizer: UIGestureRecognizer): boolean;

	gestureRecognizerShouldRequireFailureOfGestureRecognizer(gestureRecognizer: UIGestureRecognizer, otherGestureRecognizer: UIGestureRecognizer): boolean;

	initWithAnnotation(annotation: PSPDFAnnotation): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	scrollViewDidChangeAdjustedContentInset(scrollView: UIScrollView): void;

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

	setupToolbar(): void;

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

	updateTextView(): void;

	updateToolbar(): void;

	viewForZoomingInScrollView(scrollView: UIScrollView): UIView;
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

declare class PSPDFOutlineViewController extends PSPDFSearchableTableViewController implements PSPDFDocumentInfoController, PSPDFStyleable, UISearchDisplayDelegate {

	static alloc(): PSPDFOutlineViewController; // inherited from NSObject

	static new(): PSPDFOutlineViewController; // inherited from NSObject

	allowCopy: boolean;

	delegate: PSPDFOutlineViewControllerDelegate;

	maximumNumberOfLines: number;

	outlineIndentMultiplier: number;

	outlineIntentLeftOffset: number;

	readonly searchController: UISearchController;

	readonly shouldExpandCollapseOnRowSelection: boolean;

	showPageLabels: boolean;

	barStyle: UIBarStyle; // inherited from PSPDFStyleable

	container: PSPDFContainerViewController; // inherited from PSPDFDocumentInfoController

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	document: PSPDFDocument; // inherited from PSPDFDocumentInfoController

	forcesStatusBarHidden: boolean; // inherited from PSPDFStyleable

	readonly hash: number; // inherited from NSObjectProtocol

	isBarTranslucent: boolean; // inherited from PSPDFStyleable

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { document: PSPDFDocument; }); // inherited from PSPDFDocumentInfoController

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

	requestImageForPageAtIndexAvailableSizeCompletionHandler(pageIndex: number, size: CGSize, completionHandler: (p1: UIImage, p2: NSError) => void): PSPDFPageCellImageRequestToken;
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

	searchForStringOptionsSenderAnimated(searchText: string, options: NSDictionary<string, any>, sender: any, animated: boolean): void;

	setPageIndexAnimated(pageIndex: number, animated: boolean): void;

	setViewModeAnimated(viewMode: PSPDFViewMode, animated: boolean): void;
}
declare var PSPDFPageControls: {

	prototype: PSPDFPageControls;
};

declare class PSPDFPageGrabber extends UIView {

	static alloc(): PSPDFPageGrabber; // inherited from NSObject

	static appearance(): PSPDFPageGrabber; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PSPDFPageGrabber; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PSPDFPageGrabber; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): PSPDFPageGrabber; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PSPDFPageGrabber; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): PSPDFPageGrabber; // inherited from UIAppearance

	static new(): PSPDFPageGrabber; // inherited from NSObject

	grabberView: UIView;

	readonly grabbing: boolean;
}

declare class PSPDFPageGrabberController extends NSObject {

	static alloc(): PSPDFPageGrabberController; // inherited from NSObject

	static new(): PSPDFPageGrabberController; // inherited from NSObject

	readonly pageGrabber: PSPDFPageGrabber;
}

interface PSPDFPageGrabberView extends NSObjectProtocol {

	setCollapsedAnimated?(collapsed: boolean, animated: boolean): void;
}
declare var PSPDFPageGrabberView: {

	prototype: PSPDFPageGrabberView;
};

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

	labelFormatter: PSPDFPageLabelFormatter;

	showThumbnailGridButton: boolean;

	thumbnailButtonColor: UIColor;

	thumbnailGridButton: UIButton;

	updateFrame(): void;

	updateLabelWithDocumentPageRange(document: PSPDFDocument, pageRange: NSRange): boolean;
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

declare const enum PSPDFPageTransition {

	ScrollPerSpread = 0,

	ScrollContinuous = 1,

	Curl = 2,

	ScrollPerPage = 0
}

declare class PSPDFPageView extends UIView implements PSPDFAnnotationGridViewControllerDelegate, PSPDFAnnotationStyleViewControllerDelegate, PSPDFFontPickerViewControllerDelegate, PSPDFNoteAnnotationViewControllerDelegate, PSPDFRenderTaskDelegate, PSPDFResizableViewDelegate, PSPDFSignatureSelectorViewControllerDelegate, PSPDFSignatureViewControllerDelegate, PSPDFTextSelectionViewDelegate {

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

	readonly passthroughViewsForPopoverController: NSArray<UIView>;

	readonly presentationContext: PSPDFPresentationContext;

	renderStatusViewOffset: number;

	readonly renderView: UIImageView;

	readonly scaleForPageView: number;

	selectedAnnotations: NSArray<PSPDFAnnotation>;

	readonly selectionView: PSPDFTextSelectionView;

	readonly shouldMoveStyleMenuEntriesIntoSubmenu: boolean;

	readonly visibleAnnotationViews: NSArray<UIView>;

	readonly visibleRect: CGRect;

	readonly zoomView: UIScrollView;

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

	didSelectAnnotations(annotations: NSArray<PSPDFAnnotation>): void;

	fillColorMenuItemsForAnnotation(annotation: PSPDFAnnotation): NSArray<PSPDFMenuItem>;

	fontPickerViewControllerDidSelectFont(fontPickerViewController: PSPDFFontPickerViewController, selectedFont: UIFont): void;

	hitTestRectForPoint(viewPoint: CGPoint): CGRect;

	insertAnnotations(annotations: NSArray<PSPDFAnnotation>): void;

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

	renderTaskDidFailWithError(task: PSPDFRenderTask, error: NSError): void;

	renderTaskDidFinish(task: PSPDFRenderTask): void;

	resizableViewAdjustedPropertyOfAnnotation(resizableView: PSPDFResizableView, propertyName: string, annotation: PSPDFAnnotation): void;

	resizableViewChangedFrameOuterKnobTypeIsInitialChange(resizableView: PSPDFResizableView, outerKnobType: PSPDFResizableViewOuterKnob, isInitialChange: boolean): void;

	resizableViewDidBeginEditing(resizableView: PSPDFResizableView): void;

	resizableViewDidEndEditingDidChangeFrame(resizableView: PSPDFResizableView, didChangeFrame: boolean): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

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

	showSignatureControllerAtRectWithTitleOptionsAnimated(viewRect: CGRect, title: string, options: NSDictionary<any, any>, animated: boolean): void;

	signatureSelectorViewControllerDidSelectSignature(signatureSelectorController: PSPDFSignatureSelectorViewController, signature: PSPDFSignatureContainer): void;

	signatureSelectorViewControllerWillCreateNewSignature(signatureSelectorController: PSPDFSignatureSelectorViewController): void;

	signatureViewControllerDidCancel(signatureController: PSPDFSignatureViewController): void;

	signatureViewControllerDidFinishWithSignerShouldSaveSignature(signatureController: PSPDFSignatureViewController, signer: PSPDFSigner, shouldSaveSignature: boolean): void;

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
}

declare var PSPDFPageViewSelectedAnnotationsDidChangeNotification: string;

declare const enum PSPDFPersistentCloseButtonMode {

	None = 0,

	Left = 1,

	Right = 2
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

	actionDelegate: PSPDFControlDelegate;

	annotationStateManager: PSPDFAnnotationStateManager;

	annotationToolbarController: PSPDFAnnotationToolbarController;

	configuration: PSPDFConfiguration;

	contentRect: CGRect;

	displayingViewController: UIViewController;

	document: PSPDFDocument;

	documentViewController: PSPDFDocumentViewController;

	pdfController: PSPDFViewController;

	pspdfkit: PSPDFKit;

	reloading: boolean;

	rotationActive: boolean;

	userInterfaceVisible: boolean;

	viewLoaded: boolean;

	viewMode: PSPDFViewMode;

	viewWillAppearing: boolean;

	visiblePageViews: NSArray<PSPDFPageView>;

	pageViewForPageAtIndex(pageIndex: number): PSPDFPageView;
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

declare const enum PSPDFRenderStatusViewPosition {

	Top = 0,

	Centered = 1
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

declare class PSPDFScreenController extends NSObject {

	static alloc(): PSPDFScreenController; // inherited from NSObject

	static new(): PSPDFScreenController; // inherited from NSObject

	delegate: PSPDFScreenControllerDelegate;

	externalScreensDisableScreenDimming: boolean;

	pdfControllerToMirror: PSPDFViewController;

	mirrorControllerForScreen(screen: UIScreen): PSPDFViewController;
}

interface PSPDFScreenControllerDelegate extends NSObjectProtocol {

	createPDFViewControllerForMirroring?(screenController: PSPDFScreenController): PSPDFViewController;

	screenControllerDidStartMirroringForScreen?(screenController: PSPDFScreenController, screen: UIScreen): void;

	screenControllerDidStopMirroringForScreen?(screenController: PSPDFScreenController, screen: UIScreen): void;
}
declare var PSPDFScreenControllerDelegate: {

	prototype: PSPDFScreenControllerDelegate;
};

declare const enum PSPDFScrollDirection {

	Horizontal = 0,

	Vertical = 1
}

declare const enum PSPDFScrollInsetAdjustment {

	None = 0,

	FixedElements = 1,

	AllElements = 2
}

declare class PSPDFScrollPerSpreadLayout extends PSPDFStackViewLayout {

	static alloc(): PSPDFScrollPerSpreadLayout; // inherited from NSObject

	static new(): PSPDFScrollPerSpreadLayout; // inherited from NSObject

	contentScale: PSPDFScrollPerSpreadLayoutContentScale;
}

declare const enum PSPDFScrollPerSpreadLayoutContentScale {

	AspectFit = 0,

	AspectFillWidth = 1,

	AspectFillHeight = 2
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

	readonly pageIndex: number;

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

declare class PSPDFSearchHighlightView extends UIView implements PSPDFAnnotationPresenting {

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

	PDFScale: number; // inherited from PSPDFAnnotationPresenting

	annotation: PSPDFAnnotation; // inherited from PSPDFAnnotationPresenting

	configuration: PSPDFConfiguration; // inherited from PSPDFAnnotationPresenting

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	pageView: PSPDFPageView; // inherited from PSPDFAnnotationPresenting

	selected: boolean; // inherited from PSPDFAnnotationPresenting

	readonly shouldSyncRemovalFromSuperview: boolean; // inherited from PSPDFAnnotationPresenting

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	zIndex: number; // inherited from PSPDFAnnotationPresenting

	readonly  // inherited from NSObjectProtocol

	zoomScale: number; // inherited from PSPDFAnnotationPresenting

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

	didFailSearchWithError(textSearch: PSPDFTextSearch, error: NSError): void;

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

	searchViewControllerGetVisiblePages?(searchController: PSPDFSearchViewController): NSIndexSet;

	searchViewControllerSearchRangeForScope?(searchController: PSPDFSearchViewController, scope: string): NSIndexSet;

	searchViewControllerTextSearchObject?(searchController: PSPDFSearchViewController): PSPDFTextSearch;
}
declare var PSPDFSearchViewControllerDelegate: {

	prototype: PSPDFSearchViewControllerDelegate;
};

declare class PSPDFSearchableTableViewController extends PSPDFStatefulTableViewController {

	static alloc(): PSPDFSearchableTableViewController; // inherited from NSObject

	static new(): PSPDFSearchableTableViewController; // inherited from NSObject

	searchEnabled: boolean;
}

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

	readonly panGestureRecognizer: UIPanGestureRecognizer;

	rects: NSArray<NSValue>;

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

declare const enum PSPDFSignatureBiometricPropertiesOption {

	None = 0,

	Pressue = 1,

	TimePoints = 2,

	TouchRadius = 4,

	InputMethod = 8,

	All = 4294967295
}

declare class PSPDFSignatureCell extends UITableViewCell {

	static alloc(): PSPDFSignatureCell; // inherited from NSObject

	static appearance(): PSPDFSignatureCell; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PSPDFSignatureCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PSPDFSignatureCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): PSPDFSignatureCell; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PSPDFSignatureCell; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): PSPDFSignatureCell; // inherited from UIAppearance

	static new(): PSPDFSignatureCell; // inherited from NSObject

	readonly certificateLabel: UIControl;

	readonly signatureImageView: UIImageView;

	updateCellForSigner(signer: PSPDFSigner): void;
}

declare const enum PSPDFSignatureCertificateSelectionMode {

	Always = 0,

	Never = 1,

	IfAvailable = 2
}

declare const enum PSPDFSignatureSavingStrategy {

	AlwaysSave = 0,

	NeverSave = 1,

	SaveIfSelected = 2
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

	signatureSelectorViewControllerDidSelectSignature(signatureSelectorController: PSPDFSignatureSelectorViewController, signature: PSPDFSignatureContainer): void;

	signatureSelectorViewControllerWillCreateNewSignature(signatureSelectorController: PSPDFSignatureSelectorViewController): void;
}
declare var PSPDFSignatureSelectorViewControllerDelegate: {

	prototype: PSPDFSignatureSelectorViewControllerDelegate;
};

interface PSPDFSignatureStore extends NSObjectProtocol, NSSecureCoding {

	signatures: NSArray<PSPDFSignatureContainer>;

	storeName: string;

	addSignature(signature: PSPDFSignatureContainer): void;

	initWithStoreName?(storeName: string): PSPDFSignatureStore;

	removeSignature(signature: PSPDFSignatureContainer): boolean;
}
declare var PSPDFSignatureStore: {

	prototype: PSPDFSignatureStore;
};

declare class PSPDFSignatureViewController extends PSPDFBaseViewController implements PSPDFStyleable {

	static alloc(): PSPDFSignatureViewController; // inherited from NSObject

	static new(): PSPDFSignatureViewController; // inherited from NSObject

	certificateSelectionMode: PSPDFSignatureCertificateSelectionMode;

	delegate: PSPDFSignatureViewControllerDelegate;

	readonly drawView: PSPDFDrawView;

	keepLandscapeAspectRatio: boolean;

	readonly lines: NSArray<NSArray<NSValue>>;

	menuColors: NSArray<UIColor>;

	naturalDrawingEnabled: boolean;

	savingStrategy: PSPDFSignatureSavingStrategy;

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

	signatureViewControllerDidFinishWithSignerShouldSaveSignature?(signatureController: PSPDFSignatureViewController, signer: PSPDFSigner, shouldSaveSignature: boolean): void;
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

declare const enum PSPDFSoundAnnotationPlayerStyle {

	Inline = 0,

	Bottom = 1
}

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

declare const enum PSPDFSpreadScrollPosition {

	Start = 0,

	Middle = 1,

	End = 2
}

declare class PSPDFSpreadView extends UIView {

	static alloc(): PSPDFSpreadView; // inherited from NSObject

	static appearance(): PSPDFSpreadView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PSPDFSpreadView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PSPDFSpreadView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): PSPDFSpreadView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PSPDFSpreadView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): PSPDFSpreadView; // inherited from UIAppearance

	static new(): PSPDFSpreadView; // inherited from NSObject

	readonly layout: PSPDFDocumentViewLayout;

	readonly pageViews: NSArray<PSPDFPageView>;

	readonly spreadIndex: number;

	pageViewForPageAtIndex(pageIndex: number): PSPDFPageView;
}

declare class PSPDFStackViewLayout extends PSPDFDocumentViewLayout {

	static alloc(): PSPDFStackViewLayout; // inherited from NSObject

	static new(): PSPDFStackViewLayout; // inherited from NSObject

	additionalContentInsets: UIEdgeInsets;

	readonly contentInsets: UIEdgeInsets;

	direction: PSPDFStackViewLayoutDirection;

	interitemSpacing: number;

	sizeForSpreadAtIndex(spreadIndex: number): CGSize;
}

declare const enum PSPDFStackViewLayoutDirection {

	Horizontal = 0,

	Vertical = 1
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

declare class PSPDFStatefulTableViewController extends PSPDFBaseTableViewController implements PSPDFStatefulViewControlling {

	static alloc(): PSPDFStatefulTableViewController; // inherited from NSObject

	static new(): PSPDFStatefulTableViewController; // inherited from NSObject

	controllerState: PSPDFStatefulViewState; // inherited from PSPDFStatefulViewControlling

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	emptyView: UIView; // inherited from PSPDFStatefulViewControlling

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	loadingView: UIView; // inherited from PSPDFStatefulViewControlling

	readonly preferredContentSize: CGSize; // inherited from UIContentContainer

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

	preferredContentSizeDidChangeForChildContentContainer(container: UIContentContainer): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	setControllerStateAnimated(controllerState: PSPDFStatefulViewState, animated: boolean): void;

	sizeForChildContentContainerWithParentContainerSize(container: UIContentContainer, parentSize: CGSize): CGSize;

	systemLayoutFittingSizeDidChangeForChildContentContainer(container: UIContentContainer): void;

	viewWillTransitionToSizeWithTransitionCoordinator(size: CGSize, coordinator: UIViewControllerTransitionCoordinator): void;

	willTransitionToTraitCollectionWithTransitionCoordinator(newCollection: UITraitCollection, coordinator: UIViewControllerTransitionCoordinator): void;
}

interface PSPDFStatefulViewControlling extends UIContentContainer {

	controllerState: PSPDFStatefulViewState;

	emptyView: UIView;

	loadingView: UIView;

	setControllerStateAnimated?(controllerState: PSPDFStatefulViewState, animated: boolean): void;
}
declare var PSPDFStatefulViewControlling: {

	prototype: PSPDFStatefulViewControlling;
};

declare const enum PSPDFStatefulViewState {

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

	Black = 2
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

	scrollViewDidChangeAdjustedContentInset(scrollView: UIScrollView): void;

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

declare var PSPDFTextMenuCopy: string;

declare var PSPDFTextMenuCreateLink: string;

declare var PSPDFTextMenuDefine: string;

declare var PSPDFTextMenuPause: string;

declare var PSPDFTextMenuSearch: string;

declare var PSPDFTextMenuSpeak: string;

declare var PSPDFTextMenuWikipedia: string;

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

	readonly innerRect: CGRect;

	readonly lastLineRect: CGRect;

	selectedGlyphs: NSArray<PSPDFGlyph>;

	selectedImage: PSPDFImageInfo;

	readonly selectedText: string;

	selectionAlpha: number;

	selectionHitTestExtension: number;

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

	collectionViewShouldSpringLoadItemAtIndexPathWithContext(collectionView: UICollectionView, indexPath: NSIndexPath, context: UISpringLoadedInteractionContext): boolean;

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

	scrollViewDidChangeAdjustedContentInset(scrollView: UIScrollView): void;

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

	Trailing = 2
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

	collectionViewShouldSpringLoadItemAtIndexPathWithContext(collectionView: UICollectionView, indexPath: NSIndexPath, context: UISpringLoadedInteractionContext): boolean;

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

	scrollViewDidChangeAdjustedContentInset(scrollView: UIScrollView): void;

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

	image: UIImage;

	length: number;

	smallSizeImage: UIImage;

	tintColorDidChangeBlock: (p1: UIColor) => void;

	userInfo: any;

	setEnabledAnimated(enabled: boolean, animated: boolean): void;

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

interface PSPDFUserInterfaceControls extends NSObjectProtocol {

	shouldShowControls: boolean;

	hideControlsAndPageElementsAnimated(animated: boolean): boolean;

	hideControlsAnimated(animated: boolean): boolean;

	showControlsAnimated(animated: boolean): boolean;

	showMenuIfSelectedAnimatedAllowPopovers(animated: boolean, allowPopovers: boolean): void;

	toggleControlsAnimated(animated: boolean): boolean;
}
declare var PSPDFUserInterfaceControls: {

	prototype: PSPDFUserInterfaceControls;
};

declare class PSPDFUserInterfaceView extends PSPDFRelayTouchesView implements PSPDFPageLabelViewDelegate, PSPDFScrubberBarDelegate, PSPDFThumbnailBarDelegate {

	static alloc(): PSPDFUserInterfaceView; // inherited from NSObject

	static appearance(): PSPDFUserInterfaceView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PSPDFUserInterfaceView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PSPDFUserInterfaceView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): PSPDFUserInterfaceView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PSPDFUserInterfaceView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): PSPDFUserInterfaceView; // inherited from UIAppearance

	static new(): PSPDFUserInterfaceView; // inherited from NSObject

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

declare const enum PSPDFUserInterfaceViewAnimation {

	None = 0,

	Fade = 1,

	Slide = 2
}

declare const enum PSPDFUserInterfaceViewMode {

	Always = 0,

	Automatic = 1,

	AutomaticNoFirstLastPage = 2,

	Never = 3
}

declare class PSPDFUsernameHelper extends NSObject {

	static alloc(): PSPDFUsernameHelper; // inherited from NSObject

	static askForDefaultAnnotationUsernameIfNeededCompletionBlock(pdfViewController: PSPDFViewController, completionBlock: (p1: string) => void): void;

	static new(): PSPDFUsernameHelper; // inherited from NSObject

	static defaultAnnotationUsername: string;

	static readonly isDefaultAnnotationUserNameSet: boolean;

	askForDefaultAnnotationUsernameSuggestedNameCompletionBlock(viewController: UIViewController, suggestedName: string, completionBlock: (p1: string) => void): void;
}

declare var PSPDFUsernameHelperWillDismissAlertNotification: string;

declare class PSPDFViewController extends PSPDFBaseViewController implements MFMailComposeViewControllerDelegate, MFMessageComposeViewControllerDelegate, PSPDFAnnotationTableViewControllerDelegate, PSPDFBackForwardActionListDelegate, PSPDFBookmarkViewControllerDelegate, PSPDFControlDelegate, PSPDFEmbeddedFilesViewControllerDelegate, PSPDFErrorHandler, PSPDFExternalURLHandler, PSPDFFlexibleToolbarContainerDelegate, PSPDFInlineSearchManagerDelegate, PSPDFOutlineViewControllerDelegate, PSPDFOverridable, PSPDFPresentationContext, PSPDFSearchViewControllerDelegate, PSPDFTextSearchDelegate, PSPDFWebViewControllerDelegate {

	static alloc(): PSPDFViewController; // inherited from NSObject

	static new(): PSPDFViewController; // inherited from NSObject

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

	formSubmissionDelegate: PSPDFFormSubmissionDelegate;

	readonly inlineSearchManager: PSPDFInlineSearchManager;

	readonly messageButtonItem: UIBarButtonItem;

	readonly navigationBarHidden: boolean;

	readonly navigationItem: PSPDFNavigationItem;

	readonly openInButtonItem: UIBarButtonItem;

	readonly outlineButtonItem: UIBarButtonItem;

	overlayViewController: UIViewController;

	readonly pageGrabberController: PSPDFPageGrabberController;

	pageIndex: number;

	readonly printButtonItem: UIBarButtonItem;

	readonly searchActive: boolean;

	readonly searchButtonItem: UIBarButtonItem;

	readonly searchHighlightViewManager: PSPDFSearchHighlightViewManager;

	readonly settingsButtonItem: UIBarButtonItem;

	readonly textSearch: PSPDFTextSearch;

	readonly thumbnailController: PSPDFThumbnailViewController;

	readonly thumbnailsButtonItem: UIBarButtonItem;

	readonly userInterfaceView: PSPDFUserInterfaceView;

	userInterfaceVisible: boolean;

	viewMode: PSPDFViewMode;

	readonly viewState: PSPDFViewState;

	readonly actionDelegate: PSPDFControlDelegate; // inherited from PSPDFPresentationContext

	readonly annotationStateManager: PSPDFAnnotationStateManager; // inherited from PSPDFPresentationContext

	readonly annotationToolbarController: PSPDFAnnotationToolbarController; // inherited from PSPDFPresentationContext

	readonly configuration: PSPDFConfiguration; // inherited from PSPDFPresentationContext

	readonly contentRect: CGRect; // inherited from PSPDFPresentationContext

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly displayingViewController: UIViewController; // inherited from PSPDFPresentationContext

	readonly documentActionExecutor: PSPDFDocumentActionExecutor; // inherited from PSPDFPageControls

	readonly documentViewController: PSPDFDocumentViewController; // inherited from PSPDFPresentationContext

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly pdfController: PSPDFViewController; // inherited from PSPDFPresentationContext

	readonly pspdfkit: PSPDFKit; // inherited from PSPDFPresentationContext

	readonly reloading: boolean; // inherited from PSPDFPresentationContext

	readonly rotationActive: boolean; // inherited from PSPDFPresentationContext

	readonly shouldShowControls: boolean; // inherited from PSPDFUserInterfaceControls

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly viewLoaded: boolean; // inherited from PSPDFPresentationContext

	readonly viewWillAppearing: boolean; // inherited from PSPDFPresentationContext

	readonly visiblePageIndexes: NSIndexSet; // inherited from PSPDFVisiblePagesDataSource

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

	class(): typeof NSObject;

	classForClass(originalClass: typeof NSObject): typeof NSObject;

	commonInitWithDocumentConfiguration(document: PSPDFDocument, configuration: PSPDFConfiguration): void;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	currentPageForBookmarkViewController(bookmarkController: PSPDFBookmarkViewController): number;

	didCancelSearchTermIsFullSearch(textSearch: PSPDFTextSearch, searchTerm: string, isFullSearch: boolean): void;

	didFailSearchWithError(textSearch: PSPDFTextSearch, error: NSError): void;

	didFinishSearchTermSearchResultsIsFullSearchPageTextFound(textSearch: PSPDFTextSearch, searchTerm: string, searchResults: NSArray<PSPDFSearchResult>, isFullSearch: boolean, pageTextFound: boolean): void;

	didUpdateSearchTermNewSearchResultsPageIndex(textSearch: PSPDFTextSearch, searchTerm: string, searchResults: NSArray<PSPDFSearchResult>, pageIndex: number): void;

	dismissViewControllerOfClassAnimatedCompletion(controllerClass: typeof NSObject, animated: boolean, completion: () => void): boolean;

	documentViewControllerDidLoad(): void;

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

	initWithDocument(document: PSPDFDocument): this;

	initWithDocumentConfiguration(document: PSPDFDocument, configuration: PSPDFConfiguration): this;

	inlineSearchManagerContainerView(manager: PSPDFInlineSearchManager): UIView;

	inlineSearchManagerDidClearAllSearchResults(manager: PSPDFInlineSearchManager): void;

	inlineSearchManagerDidFocusSearchResult(manager: PSPDFInlineSearchManager, searchResult: PSPDFSearchResult): void;

	inlineSearchManagerSearchDidAppear(manager: PSPDFInlineSearchManager): void;

	inlineSearchManagerSearchDidDisappear(manager: PSPDFInlineSearchManager): void;

	inlineSearchManagerSearchWillAppear(manager: PSPDFInlineSearchManager): void;

	inlineSearchManagerSearchWillDisappear(manager: PSPDFInlineSearchManager): void;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	mailComposeControllerDidFinishWithResultError(controller: MFMailComposeViewController, result: MFMailComposeResult, error: NSError): void;

	messageComposeViewControllerDidFinishWithResult(controller: MFMessageComposeViewController, result: MessageComposeResult): void;

	outlineControllerDidTapAtElement(outlineController: PSPDFOutlineViewController, outlineElement: PSPDFOutlineElement): boolean;

	pageViewForPageAtIndex(pageIndex: number): PSPDFPageView;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	presentDocumentInfoViewControllerWithOptionsSenderAnimatedCompletion(options: NSDictionary<string, any>, sender: any, animated: boolean, completion: () => void): UIViewController;

	presentPDFViewControllerWithDocumentOptionsSenderAnimatedConfigurationBlockCompletion(document: PSPDFDocument, options: NSDictionary<string, any>, sender: any, animated: boolean, configurationBlock: (p1: PSPDFViewController) => void, completion: () => void): void;

	presentPreviewControllerForURLTitleOptionsSenderAnimatedCompletion(fileURL: NSURL, title: string, options: NSDictionary<string, any>, sender: any, animated: boolean, completion: () => void): void;

	presentViewControllerOptionsAnimatedSenderCompletion(viewController: UIViewController, options: NSDictionary<string, any>, animated: boolean, sender: any, completion: () => void): boolean;

	reloadData(): void;

	reloadPageAtIndexAnimated(pageIndex: number, animated: boolean): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	searchForStringOptionsSenderAnimated(searchText: string, options: NSDictionary<string, any>, sender: any, animated: boolean): void;

	searchViewControllerDidClearAllSearchResults(searchController: PSPDFSearchViewController): void;

	searchViewControllerDidTapSearchResult(searchController: PSPDFSearchViewController, searchResult: PSPDFSearchResult): void;

	searchViewControllerGetVisiblePages(searchController: PSPDFSearchViewController): NSIndexSet;

	searchViewControllerSearchRangeForScope(searchController: PSPDFSearchViewController, scope: string): NSIndexSet;

	searchViewControllerTextSearchObject(searchController: PSPDFSearchViewController): PSPDFTextSearch;

	self(): this;

	setPageIndexAnimated(pageIndex: number, animated: boolean): void;

	setUpdateSettingsForBoundsChangeBlock(block: (p1: PSPDFViewController) => void): void;

	setUserInterfaceVisibleAnimated(show: boolean, animated: boolean): boolean;

	setViewModeAnimated(viewMode: PSPDFViewMode, animated: boolean): void;

	showControlsAnimated(animated: boolean): boolean;

	showMenuIfSelectedAnimatedAllowPopovers(animated: boolean, allowPopovers: boolean): void;

	toggleControlsAnimated(animated: boolean): boolean;

	updateConfigurationWithBuilder(builderBlock: (p1: PSPDFConfigurationBuilder) => void): void;

	updateConfigurationWithoutReloadingWithBuilder(builderBlock: (p1: PSPDFConfigurationBuilder) => void): void;

	updateToolbarAnimated(animated: boolean): void;

	webViewControllerDidFailLoadWithError(controller: PSPDFWebViewController, error: NSError): void;

	webViewControllerDidFinishLoad(controller: PSPDFWebViewController): void;

	webViewControllerDidStartLoad(controller: PSPDFWebViewController): void;

	willStartSearchTermIsFullSearch(textSearch: PSPDFTextSearch, searchTerm: string, isFullSearch: boolean): void;
}

interface PSPDFViewControllerDelegate extends NSObjectProtocol {

	pdfViewControllerAnnotationViewForAnnotationOnPageView?(pdfController: PSPDFViewController, annotationView: UIView, annotation: PSPDFAnnotation, pageView: PSPDFPageView): UIView;

	pdfViewControllerDidChangeControllerState?(pdfController: PSPDFViewController): void;

	pdfViewControllerDidChangeDocument?(pdfController: PSPDFViewController, document: PSPDFDocument): void;

	pdfViewControllerDidChangeViewMode?(pdfController: PSPDFViewController, viewMode: PSPDFViewMode): void;

	pdfViewControllerDidCleanupPageViewForPageAtIndex?(pdfController: PSPDFViewController, pageView: PSPDFPageView, pageIndex: number): void;

	pdfViewControllerDidConfigurePageViewForPageAtIndex?(pdfController: PSPDFViewController, pageView: PSPDFPageView, pageIndex: number): void;

	pdfViewControllerDidDeselectAnnotationsOnPageView?(pdfController: PSPDFViewController, annotations: NSArray<PSPDFAnnotation>, pageView: PSPDFPageView): void;

	pdfViewControllerDidDismiss?(pdfController: PSPDFViewController): void;

	pdfViewControllerDidEndDisplayingPageViewForPageAtIndex?(pdfController: PSPDFViewController, pageView: PSPDFPageView, pageIndex: number): void;

	pdfViewControllerDidExecuteAction?(pdfController: PSPDFViewController, action: PSPDFAction): void;

	pdfViewControllerDidFinishRenderTaskForPageView?(pdfController: PSPDFViewController, pageView: PSPDFPageView): void;

	pdfViewControllerDidHideUserInterface?(pdfController: PSPDFViewController, animated: boolean): void;

	pdfViewControllerDidLongPressOnPageViewAtPointGestureRecognizer?(pdfController: PSPDFViewController, pageView: PSPDFPageView, viewPoint: CGPoint, gestureRecognizer: UILongPressGestureRecognizer): boolean;

	pdfViewControllerDidSelectAnnotationsOnPageView?(pdfController: PSPDFViewController, annotations: NSArray<PSPDFAnnotation>, pageView: PSPDFPageView): void;

	pdfViewControllerDidSelectTextWithGlyphsAtRectOnPageView?(pdfController: PSPDFViewController, text: string, glyphs: NSArray<PSPDFGlyph>, rect: CGRect, pageView: PSPDFPageView): void;

	pdfViewControllerDidShowAnnotationViewOnPageView?(pdfController: PSPDFViewController, annotationView: UIView, pageView: PSPDFPageView): void;

	pdfViewControllerDidShowControllerOptionsAnimated?(pdfController: PSPDFViewController, controller: UIViewController, options: NSDictionary<string, any>, animated: boolean): void;

	pdfViewControllerDidShowUserInterface?(pdfController: PSPDFViewController, animated: boolean): void;

	pdfViewControllerDidTapOnAnnotationAnnotationPointAnnotationViewPageViewViewPoint?(pdfController: PSPDFViewController, annotation: PSPDFAnnotation, annotationPoint: CGPoint, annotationView: UIView, pageView: PSPDFPageView, viewPoint: CGPoint): boolean;

	pdfViewControllerDidTapOnPageViewAtPoint?(pdfController: PSPDFViewController, pageView: PSPDFPageView, viewPoint: CGPoint): boolean;

	pdfViewControllerDidUpdateContentImageForPageViewIsPlaceholder?(pdfController: PSPDFViewController, pageView: PSPDFPageView, placeholder: boolean): void;

	pdfViewControllerDocumentForRelativePath?(pdfController: PSPDFViewController, relativePath: string): PSPDFDocument;

	pdfViewControllerShouldChangeDocument?(pdfController: PSPDFViewController, document: PSPDFDocument): boolean;

	pdfViewControllerShouldDisplayAnnotationOnPageView?(pdfController: PSPDFViewController, annotation: PSPDFAnnotation, pageView: PSPDFPageView): boolean;

	pdfViewControllerShouldExecuteAction?(pdfController: PSPDFViewController, action: PSPDFAction): boolean;

	pdfViewControllerShouldHideUserInterface?(pdfController: PSPDFViewController, animated: boolean): boolean;

	pdfViewControllerShouldSelectAnnotationsOnPageView?(pdfController: PSPDFViewController, annotations: NSArray<PSPDFAnnotation>, pageView: PSPDFPageView): NSArray<PSPDFAnnotation>;

	pdfViewControllerShouldSelectTextWithGlyphsAtRectOnPageView?(pdfController: PSPDFViewController, text: string, glyphs: NSArray<PSPDFGlyph>, rect: CGRect, pageView: PSPDFPageView): boolean;

	pdfViewControllerShouldShowControllerOptionsAnimated?(pdfController: PSPDFViewController, controller: UIViewController, options: NSDictionary<string, any>, animated: boolean): boolean;

	pdfViewControllerShouldShowMenuItemsAtSuggestedTargetRectForAnnotationsInRectOnPageView?(pdfController: PSPDFViewController, menuItems: NSArray<PSPDFMenuItem>, rect: CGRect, annotations: NSArray<PSPDFAnnotation>, annotationRect: CGRect, pageView: PSPDFPageView): NSArray<PSPDFMenuItem>;

	pdfViewControllerShouldShowMenuItemsAtSuggestedTargetRectForSelectedImageInRectOnPageView?(pdfController: PSPDFViewController, menuItems: NSArray<PSPDFMenuItem>, rect: CGRect, selectedImage: PSPDFImageInfo, textRect: CGRect, pageView: PSPDFPageView): NSArray<PSPDFMenuItem>;

	pdfViewControllerShouldShowMenuItemsAtSuggestedTargetRectForSelectedTextInRectOnPageView?(pdfController: PSPDFViewController, menuItems: NSArray<PSPDFMenuItem>, rect: CGRect, selectedText: string, textRect: CGRect, pageView: PSPDFPageView): NSArray<PSPDFMenuItem>;

	pdfViewControllerShouldShowUserInterface?(pdfController: PSPDFViewController, animated: boolean): boolean;

	pdfViewControllerWillBeginDisplayingPageViewForPageAtIndex?(pdfController: PSPDFViewController, pageView: PSPDFPageView, pageIndex: number): void;

	pdfViewControllerWillDismiss?(pdfController: PSPDFViewController): void;

	pdfViewControllerWillScheduleRenderTaskForPageView?(pdfController: PSPDFViewController, pageView: PSPDFPageView): void;

	pdfViewControllerWillShowAnnotationViewOnPageView?(pdfController: PSPDFViewController, annotationView: UIView, pageView: PSPDFPageView): void;
}
declare var PSPDFViewControllerDelegate: {

	prototype: PSPDFViewControllerDelegate;
};

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

	visiblePageIndexes: NSIndexSet;
}
declare var PSPDFVisiblePagesDataSource: {

	prototype: PSPDFVisiblePagesDataSource;
};

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
