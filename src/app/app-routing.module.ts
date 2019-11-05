import {HomeComponent} from './home/home.component';
import {GalleryComponent} from './gallery/gallery.component';
import {ExtraOptions, RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';


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

const config: ExtraOptions = {
  useHash: false,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
