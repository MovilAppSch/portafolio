import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  productos: any[] = [];

  cargando_productos: boolean = false;

  constructor(private http: Http) {
    this.cargar_productos();
  }

  public cargar_productos() {

    this.cargando_productos = true;

    if (this.productos.length == 0) {
      this.http.get('https://angularfirebase-82686.firebaseio.com/productos_idx.json')
        .subscribe(res => {
          // console.log(res.json());
          setTimeout(() => {
            this.productos = res.json();
            this.cargando_productos = false;
          }, 1500);
        });
    }
  }

  public cargar_producto(cod: string) {
    return this.http.get('https://angularfirebase-82686.firebaseio.com/productos/' + cod + '.json');
  }
}
