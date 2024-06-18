import { Component, Input, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';

@Component({
  selector: 'app-seccion-generic',
  standalone: false,

  templateUrl: './seccion-generic.component.html',
  styleUrl: './seccion-generic.component.css'
})
export class SeccionGenericComponent implements OnInit {
  @Input() title:string='';
  @Input() mode:'small' | 'big'='big'
  @Input() dataTracks:Array<TrackModel>=[]

constructor(){}

ngOnInit():void{}
}
