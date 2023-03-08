import {Component, OnInit} from '@angular/core';
import {AlbumService} from "../services/album.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-album-photos',
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.scss']
})
export class AlbumPhotosComponent implements OnInit {
  public photos: any[] = []
  albumId: number = 0

  constructor(private albumService: AlbumService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    console.log(this.activatedRoute)
    this.albumId = this.activatedRoute.snapshot.params['id']
    this.albumService.getAlbumPhotos(this.albumId).subscribe(result => {
      console.log(result)
      this.photos = result;
    }, error => {

    })
  }

  goToAlbum() {
    this.router.navigate(['albums/' + this.albumId]);
  }
}
