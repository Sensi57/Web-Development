import {Component, OnDestroy, OnInit} from '@angular/core';
import {AlbumService} from "./services/album.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Lab6';

  constructor(private albumService: AlbumService) {
  }

  ngOnInit(): void {
    this.getAlbums()
  }

  getAlbums() {
    this.albumService.getAlbums().subscribe(result => {
      this.albumService.albums = result
    }, error => {
      console.log(error)
    })

  }

  ngOnDestroy(): void {
  }
}
