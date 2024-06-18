import { HomePageComponent } from '@modules/home/pages/home-page/home-page.component';
import { AuthModule } from './modules/auth/auth.module';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path:'auth',
    loadChildren:()=>import(`./modules/auth/auth.module`).then(m=>m.AuthModule)
  },

    {
      path:'',
      component:HomePageComponent,
    loadChildren:()=>import(`./modules/home/home.module`).then(m=>m.HomeModule)
  },



];
