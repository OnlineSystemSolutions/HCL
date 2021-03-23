import { Observable } from 'rxjs';
import { EuropeService } from './europe.service';

export class EuropeServiceStub extends EuropeService {
    public getLocations = () => new Observable<Location[]>();
}
