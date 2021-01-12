import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { SearchBirraComponent } from './search-birra/search-birra.component';
const routes: Routes = [
  { path: 'search', component: SearchComponent },
  { path: 'birra/:id', component: SearchBirraComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }






