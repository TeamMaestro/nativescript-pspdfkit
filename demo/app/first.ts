import * as observable from 'tns-core-modules/data/observable';
import * as pages from 'tns-core-modules/ui/page';
import { HelloWorldModel } from './main-view-model';
let page;
// Event handler for Page "loaded" event attached in main-page.xml
export function pageLoaded(args: observable.EventData) {
  // Get the event sender
  page = <pages.Page>args.object;
  page.bindingContext = new HelloWorldModel();
  page.getViewById('pdf').on('progress', data => {
    console.dir(data.object.get('value'));
  });
  page.getViewById('pdf').on('status', data => {
    console.dir(data.object.get('value'));
  });

  page.getViewById('pdf').on('selectedIndexChange', data => {
    page.bindingContext.set('selectedIndex', data.value);
  });
}
