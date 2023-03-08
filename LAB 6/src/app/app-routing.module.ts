import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from "./home-page/home-page.component";
import {AboutPageComponent} from "./about-page/about-page.component";
import {AlbumComponent} from "./album/album.component";
import {AlbumPhotosComponent} from "./album-photos/album-photos.component";
import {AlbumListComponent} from "./album-list/album-list.component";

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'home',
    component: HomePageComponent,
  },
  {
    path: 'about',
    component: AboutPageComponent,
  },
  {
    path:'albums',
    component:AlbumListComponent,
  },
  {
    path:'albums/:id',
    component:AlbumComponent,
  },
  {
    path: 'albums/:id/photos',
    component: AlbumPhotosComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
