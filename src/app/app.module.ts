import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {DescriptionContentComponent, GalleryComponent} from './gallery/gallery.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {FilterPipe} from './gallery/filter.pipe';
import {LivreService} from './Services/Livres.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule, MatCheckboxModule, MatDatepickerModule,
  MatDialogModule,
  MatFormFieldModule,
  MatGridListModule, MatIconModule,
  MatInputModule, MatListModule, MatNativeDateModule, MatPaginatorModule,
  MatSelectModule, MatSidenavModule,
  MatToolbarModule
} from '@angular/material';

import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {FlexLayoutModule} from '@angular/flex-layout';
import {EllipsisPipe} from './ellipsis-pipe';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'gallery/:title',
    component: GalleryComponent,
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GalleryComponent,
    FilterPipe,
    DescriptionContentComponent,
    EllipsisPipe
  ],
  imports: [RouterModule.forRoot(routes),
    BrowserModule,
    MatPaginatorModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    FormsModule,
    MatGridListModule,
    MatCardModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatDialogModule,
   HttpClientModule,
    MatSelectModule,
    MatSidenavModule,
    MatToolbarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatListModule,
    FlexLayoutModule,
    BrowserAnimationsModule],

  schemas: [CUSTOM_ELEMENTS_SCHEMA],

  providers: [LivreService, MatDatepickerModule],
  entryComponents: [DescriptionContentComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
