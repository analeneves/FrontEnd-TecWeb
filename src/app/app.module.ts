import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MedComponent, MngMedDialog } from './med/med.component';
import { CompraComponent } from './compra/compra.component';
import{HttpClient, HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog'; 
import {MatInputModule} from '@angular/material/input'; 
//import {MngMedDialog} from '@angular/material/input';


@NgModule({
  declarations: [
    AppComponent,
    MedComponent,
    CompraComponent,
    MngMedDialog
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    NoopAnimationsModule,
    HttpClientModule
  ],
  entryComponents: [
    MngMedDialog
  ],

  providers: [],


  bootstrap: [AppComponent]
})
export class AppModule { }
