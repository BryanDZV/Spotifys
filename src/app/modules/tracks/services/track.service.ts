import { Injectable } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { Observable, of } from 'rxjs';
import * as dataRaw from '../../../data/tracks.json'


@Injectable({
  providedIn: 'root'
})
export class TrackService {

  dataTracksTrending$:Observable<TrackModel[]>= of([])
  dataTracksRandom$:Observable<any>= of([])

  constructor() {
    const {data}:any=(dataRaw as any).default;
  this.dataTracksTrending$=of(data)

  this.dataTracksRandom$= new Observable((observer)=>{

    const trackExample:TrackModel={
      _id:9,
      name:'Leve',
      album:'Cartel de Santa',
      url:'htttp://',
      cover:'https://www.whosampled.com/static/images/media/track_images_200/lr179341_20161118_23200534156.jpg'
    }


    //

    setTimeout(()=>{observer.next([trackExample])},3500)
  })
}
}
