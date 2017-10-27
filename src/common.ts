import * as types from 'tns-core-modules/utils/types';
import { View, Property } from 'tns-core-modules/ui/core/view';

export class Guid {

    static next() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            const r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
}

export enum PageMode {
    SINGLE = 0,
    DOUBLE = 1,
    AUTOMATIC = 2
}

export type DOWNLOAD_STATUS = 'downloading' | 'completed' | 'failed';

export function boolParse(value: any) {
    if (types.isString(value)) {
        switch (value.toLowerCase()) {
            case 'yes':
                return true;
            default:
                return false;
        }
    } else if (types.isBoolean(value)) {
        return value;
    }
    return false;
}
export const srcProperty = new Property<TNSPSPDFView, string>({
    name: 'src'
});
export class TNSPSPDFView extends View {
    src: string;
    progress: number;
}

srcProperty.register(TNSPSPDFView);
