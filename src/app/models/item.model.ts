import {VolumeInfo} from './volumeInfo.model';
import {AccessInfo} from './accessInfo.model';
import {SaleInfo} from './saleInfo.model';

export class Item {
kind: string;
  volumeInfo: VolumeInfo;
  id: string;
  etag: string;
  selfLink: string;
  saleInfo: SaleInfo;
  accessInfo: AccessInfo;
}
