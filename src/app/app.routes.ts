import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './default/default.component'; // Create this component if not already existing
import { WorldMapComponent } from './world-map/world-map.component';

export const routes: Routes = [
  { path: '', component: DefaultComponent },
  { path: 'world-map', component: WorldMapComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
