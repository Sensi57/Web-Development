import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  URL: string = 'https://jsonplaceholder.typicode.com/';

  albums: any = []
  album: any
  albumPhotos: any = []

  constructor(private httpClient: HttpClient) {
  }

  getAlbums(): Observable<any> {
    return this.httpClient.get(this.URL + 'albums')
  }

  getAlbumById(id: number): Observable<any> {
    return this.httpClient.get(this.URL + `albums/${id}/`)
  }

  updateAlbum(userId: number, id: number, title: string): Observable<any> {
    return this.httpClient.put(this.URL + `albums/${id}/`, {
      "userId": userId,
      "id": id,
      "title": title
    })
  }

  getAlbumPhotos(id: number): Observable<any> {
    return this.httpClient.get(this.URL + `albums/${id}/photos`)
  }
}
