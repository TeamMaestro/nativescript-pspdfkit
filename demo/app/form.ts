import * as observable from 'data/observable';
import * as pages from 'ui/page';
import { HelloWorldModel } from './main-view-model';

// Event handler for Page "loaded" event attached in main-page.xml
export function pageLoaded(args: observable.EventData) {
    // Get the event sender
    var page = <pages.Page>args.object;
    page.bindingContext = new HelloWorldModel();
    page.getViewById('pdf').on('progress', (data) => {
        console.dir(data.object.get('value'));
    })
    page.getViewById('pdf').on('status', (data) => {
        console.dir(data.object.get('value'));
    })
}