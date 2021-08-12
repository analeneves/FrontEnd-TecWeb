import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompraComponent} from './compra/compra.component';
import { MedComponent } from './med/med.component';


const routes: Routes = [
  {path: 'compra', component: CompraComponent},
  {path: 'med', component:MedComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
