import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs';
import { Album } from '../models/album';
import { Photo } from '../models/photo';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private http: HttpClient) { }

  getAllAlbuns() {
    return this.http.get<Array<Album>>("https://jsonplaceholder.typicode.com/albums").pipe(take(1));
  }

  getAllPhotos() {
    return this.http.get<Array<Photo>>("https://jsonplaceholder.typicode.com/photos").pipe(take(1));
  }

  findAlbumById(id: number) {
    return this.http.get(`https://jsonplaceholder.typicode.com/albums/${id}`).pipe(take(1));
  }
}
