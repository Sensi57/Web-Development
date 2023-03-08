import {Component, OnInit} from '@angular/core';
import {AlbumService} from "../services/album.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.scss']
})
export class AlbumListComponent implements OnInit {
  albums: any = []

  constructor(private albumService: AlbumService, private router: Router) {
  }

  ngOnInit(): void {
    this.getAlbums()
  }

  getAlbums() {
    this.albums = this.albumService.albums
  }

  goToPageById(id: number) {
    this.router.navigate([`albums/${id}`])
  }
  removeProduct(i: number) {
    this.albums = this.albums.filter((item: any) => {
      return item !== this.albums[i]
    });
    this.albumService.albums.find((item: { id: any; }) => item.id === i).albums = this.albums
  }
}
