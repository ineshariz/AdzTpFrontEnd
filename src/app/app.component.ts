import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private translate: TranslateService,
              private _location: Location,
  ) {
    const browserLang = this.translate.getBrowserLang();
    console.log(browserLang);
    translate.setDefaultLang(browserLang);
    }
  retour() {
    console.log("test");
    this._location.back;
  }
}
