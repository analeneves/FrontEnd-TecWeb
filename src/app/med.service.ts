import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Med } from './med/med.component';


@Injectable({
  providedIn: 'root'
})
export class MedService {
  globals: any;
  remover(medId: number): Observable<any> {
    return this.http.delete("http://localhost:3000/med/" + medId, this.header());
  }
  editar(med: Med): Observable<any> {
    return this.http.put("http://localhost:3000/med/" + med.id, med, this.header());
  }
  
  adicionar(med: Med): Observable<any> {
    return this.http.post("http://localhost:3000/med/", med, this.header());
  }

  constructor(private http: HttpClient){ }


  getMed(): Observable<Med[]> {
    return this.http.get<Med[]>("http://localhost:3000/med/", this.header());
  }

  getMedId(MedId: number): Observable<Med> {
    return this.http.get<Med>("http://localhost:3000/med/" + MedId, this.header());
  }

  header() {
    return {
      headers: new HttpHeaders({'Content-Type': 'application/json',
        'x-access-token': this.globals.loginData.token
      })
    };
  }
}

