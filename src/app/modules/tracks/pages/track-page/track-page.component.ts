import { Component, OnInit } from '@angular/core';
import * as data from '../../../../data/tracks.json'
import { TrackModel } from '@core/models/tracks.model';

@Component({
  selector: 'app-track-page',
  standalone: false,

  templateUrl: './track-page.component.html',
  styleUrl: './track-page.component.css',
})
export class TrackPageComponent implements OnInit {
  mockTracksList : Array<TrackModel>= [

  ];

  constructor() {}

  ngOnInit(): void {
    this.mockTracksList=data.data

    console.log(data.data);

  }
}
