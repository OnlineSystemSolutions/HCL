import { CurrencyItem } from './currency-item';
import { Language } from './language';
import { Translation } from './translation';

export interface Location {
        name: string;
        topLevelDomain: string[];
        alpha2Code: string;
        alpha3Code: string;
        callingCodes: string[];
        captial: string;
        altSpellings: string[];
        region: string;
        subregion: string;
        population: string;
        latlng: string[];
        demonym: string;
        area: number;
        gini: any;
        timezones: string[];
        borders: string[];
        nativeName: string;
        numericCode: number;
        currencies: CurrencyItem[];
        languages: Language[];
        translations: Translation[];
        flag: string;
        regionalBlocs: string[];
        cioc: string;
}
