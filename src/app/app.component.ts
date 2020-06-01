import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'spa-pipes';

  public nombre: string = 'Capitán América'; 

  public arreglo = [1,2,3,4,5,6,7,8,9,10];

  public PI: number = Math.PI;
  
  public porcentaje: number = 0.234; 

  public salario: number = 12345; 

  public heroe = {
    nombre: 'Logan',
    clave: 'Wolverine',
    edad: 500,
    direccion: {
      calle: 'Primera',
      casa: 20
    }
  }

  // Esta promesa hace que se imprima "Llego la data cada 4500 ms, es decir, cada 4 segundos y medio"
  valorPromesa = new Promise<string>(( resolve ) =>{

    setTimeout(() =>{
      resolve('Llegó la data');
      console.log("Promesa resuelta");
    }, 4500);

  });

  public fecha: Date = new Date();

  public idioma: string = 'en';

  // Para pipe personalizado
  public miNombre: string = 'jUAn maNuEl lOpEz sAnTana';
}
