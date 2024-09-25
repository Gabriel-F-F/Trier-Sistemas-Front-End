import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from './main/services/http-service.service';
import { Album } from './main/models/album';
import { Photo } from './main/models/photo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'http-album-de-fotos';

  constructor(private httpService: HttpServiceService) { }

  listAlbuns: Array<Album> = [];
  listPhotos: Array<Photo> = [];
  listAlbunsAndPhotos: Array<{ album: Album, photos: Photo[] }> = [];

  ngOnInit(): void {
    this.httpService.getAllAlbuns().subscribe(albums => {
      this.listAlbuns = albums;

      this.httpService.getAllPhotos().subscribe(photos => {
        this.listPhotos = photos;

        this.listAlbunsAndPhotos = this.listAlbuns.map(album => ({
          album,
          photos: this.listPhotos.filter(photo => photo.albumId === album.id)
        }));
      });
    });
  }

  showPhotos (album: Album) {
    const photosInAlbum = this.listPhotos.filter(photo => photo.albumId === album.id);
    console.log(photosInAlbum);
  }
}
