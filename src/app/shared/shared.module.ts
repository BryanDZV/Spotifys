import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './componentes/side-bar/side-bar.component';
import { HeaderUserComponent } from './componentes/header-user/header-user.component';
import { MediaPlayerComponent } from './componentes/media-player/media-player.component';
import { CardPlayerComponent } from './componentes/card-player/card-player.component';
import { SeccionGenericComponent } from './componentes/seccion-generic/seccion-generic.component';
import { PlayListBodyComponent } from './componentes/play-list-body/play-list-body.component';
import { PlayListHeaderComponent } from './componentes/play-list-header/play-list-header.component';
import {  RouterModule } from '@angular/router';
import { OrderListPipe } from './pipes/order-list.pipe';
import { ImgBrokenDirective } from './directives/img-broken.directive';

@NgModule({
  declarations: [
    SideBarComponent,
    HeaderUserComponent,
    MediaPlayerComponent,
    CardPlayerComponent,
    SeccionGenericComponent,
    PlayListBodyComponent,
    PlayListHeaderComponent,
    OrderListPipe,
    ImgBrokenDirective
  ],
  imports: [CommonModule,RouterModule],
  exports: [
    SideBarComponent,
    HeaderUserComponent,
    MediaPlayerComponent,
    CardPlayerComponent,
    SeccionGenericComponent,
    PlayListBodyComponent,
    PlayListHeaderComponent,
    OrderListPipe,
    ImgBrokenDirective

  ],
})
export class SharedModule {}
