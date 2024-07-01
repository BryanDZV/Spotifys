import { Component, OnDestroy, OnInit } from '@angular/core';
import * as data from '../../../../data/tracks.json';
import { TrackModel } from '@core/models/tracks.model';
import { TrackService } from '@modules/tracks/services/track.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-track-page',
  standalone: false,

  templateUrl: './track-page.component.html',
  styleUrl: './track-page.component.css',
})
export class TrackPageComponent implements OnInit, OnDestroy {
  tracksTrending: Array<TrackModel> = [];
  tracksRandom: Array<TrackModel> = [];

  listObservers$: Array<Subscription> = [];

  constructor(private trackService: TrackService) {}

  ngOnInit(): void {
    //this.mockTracksList=data.data
    //console.log(data.data);

    const observer1$ = this.trackService.dataTracksTrending$.subscribe(
      (response) => {
        this.tracksTrending = response;
        this.tracksRandom=response;
        console.log('canciones trending----->', response);
      });

      const observer2$ = this.trackService.dataTracksRandom$.subscribe(
        (response) => {
          this.tracksRandom=[...this.tracksRandom,...response]

          console.log('canciones random entrando 🎈🎈🎈----->', response);
        });

    this.listObservers$ = [observer1$,observer2$];
  }

  ngOnDestroy(): void {
    this.listObservers$.forEach((u) => u.unsubscribe());
  }
}
