import { Routes } from '@angular/router';
import { MenuComponent } from './views/menu/menu.component';
import { HomeComponent } from './views/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

export const routes: Routes = [

    { path: '', component: HomeComponent },
    { path: 'menu', component: MenuComponent, title: 'Cardápio' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }