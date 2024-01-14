import english from './locale/en_US.json';
import romanian from './locale/ro_RO.json';

export enum I18nLocale {
    EN = 'en',
    RO = 'ro'
}

export const resources = {
    [I18nLocale.EN]: {
        translation: {
            ...english
        }
    },

    [I18nLocale.RO]: {
        translation: {
            ...romanian
        }
    }
};
