import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavouritesComponent } from './components/favourites/favourites.component';
import { SpellListComponent } from './components/spell-list/spell-list.component';
import { SpellDetailComponent } from './components/spell-detail/spell-detail.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  {path:'favourites', component: FavouritesComponent},
  {path:'spells-list', component: SpellListComponent},
  {path:'spell-detail', component: SpellDetailComponent},
  {path:'home', component: HomeComponent},
  {path:'', redirectTo:'/home', pathMatch: 'full'},
  {path:'**', redirectTo:'/home'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
