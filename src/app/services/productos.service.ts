import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  productos: any[] = [];

  productos_filtrado: any[] = [];

  cargando_productos: boolean = false;

  constructor(private http: Http) {
    this.cargar_productos();
  }

  public cargar_productos() {
    this.cargando_productos = true;

    let promesa = new Promise((resolve, reject) => {
      this.http.get('https://angularfirebase-82686.firebaseio.com/productos_idx.json')
        .subscribe(res => {
          this.productos = res.json();
          this.cargando_productos = false;
          resolve();
        });
    });
    return promesa;
  }

  public cargar_producto(cod: string) {
    return this.http.get('https://angularfirebase-82686.firebaseio.com/productos/' + cod + '.json');
  }

  // BUSCAR PRODUCTO (VALOR)
  public buscar_producto(termino: string) {
    // console.log("buscando Productos", this.productos.length);

    if (this.productos.length === 0) {
      this.cargar_productos().then(() => {
        //termino la carga
        this.filtrar_productos(termino);
      });
    }
    else {
      this.filtrar_productos(termino);
    }
  }//FIN BUSCAR PRODUCTO


  private filtrar_productos(termino: string) {

    this.productos_filtrado = [];

    termino = termino.toLowerCase();

    this.productos.forEach(prod => {

      if (prod.categoria.indexOf(termino) >= 0
        || prod.titulo.toLowerCase().indexOf(termino) >= 0) {

        this.productos_filtrado.push(prod);

      }
      // console.log('prod: ', prod);

    })
  }

}
