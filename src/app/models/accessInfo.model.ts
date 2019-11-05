import {Pdf} from './pdf.model';

export class AccessInfo {
  country: string;
  viewability: string;
  embeddable: boolean;
  publicDomain: boolean;
  textToSpeechPermission: string;
  webReaderLink: string;
  accessViewStatus: string;
  quoteSharingAllowed: boolean;
  pdf: Pdf;
}
