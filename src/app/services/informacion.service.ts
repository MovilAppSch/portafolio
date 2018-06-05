import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

@Injectable({
  providedIn: 'root'
})
export class InformacionService {

  info: any = {};
  cargada: boolean = false;

  equipo: any = {};
  cargada_sobreNosotros: boolean = false;

  constructor(public http: Http) {
    this.carga_info();
    this.carga_sobre_nosotros();
  }

  public carga_info() {
    this.http.get("assets/data/info.pagina.json").
      subscribe(data => {
        console.log(data.json());
        this.cargada = true;
        this.info = data.json();
      });
  }

  public carga_sobre_nosotros() {
    this.http.get("https://angularfirebase-82686.firebaseio.com/equipo.json").
      subscribe(data => {
        console.log(data.json());
        this.cargada_sobreNosotros = true;
        this.equipo = data.json();
      });
  }
}
