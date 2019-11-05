
import {Injectable} from '@angular/core';
import {HttpClient, HttpEvent, HttpHeaders, HttpRequest} from '@angular/common/http';
import {Livre} from '../models/livre.model';
import {BehaviorSubject} from 'rxjs';
import {VolumeInfo} from '../models/volumeInfo.model';

@Injectable()
export class LivreService {

  constructor(private http: HttpClient) {
  }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };

  private Url = 'https://www.googleapis.com/books/v1/volumes?q=';
  private ImageUrl = 'http://books.google.com/books/content?id=';

  getLivreTitre(name: string): Promise<any> {
    return this.http.get('https://www.googleapis.com/books/v1/volumes?q=' + name, this.httpOptions).toPromise();
  }
}
