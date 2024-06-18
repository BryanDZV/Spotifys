import { Component } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';

@Component({
  selector: 'app-media-player',
  standalone: false,

  templateUrl: './media-player.component.html',
  styleUrl: './media-player.component.css',
})
export class MediaPlayerComponent {
  mockCover: TrackModel = {
    cover: 'https://www.https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.img2go.com%2Fes&psig=AOvVaw16cGeFqWGyo02WcgmCi7PU&ust=1717268229849000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKi7mejIuIYDFQAAAAAdAAAAABAP.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.es%2Ffotos-vectores-gratis%2Fcolor&psig=AOvVaw16cGeFqWGyo02WcgmCi7PU&ust=1717268229849000&source=images&cd=vfe&opi=89978449&ved=https://aws-modapedia.vogue.es/prod/designs/v1/assets/640x853/1945.jpg',
    album: 'GIOLI',
    name: 'BEBE  (OFICIAL)',
    url:'http://localhost/track.mp3',
    _id:1
  };
}
