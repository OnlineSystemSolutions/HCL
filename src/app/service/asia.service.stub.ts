import { Observable } from 'rxjs';
import { AsiaService } from './asia.service';

export class AsiaServiceStub extends AsiaService {
    public getLocations = () => new Observable<Location[]>();
}
