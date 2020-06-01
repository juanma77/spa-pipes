import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalized'
})
export class CapitalizedPipe implements PipeTransform {

  // Los args son los argumentos que le mandamos al pipe desde la vista (miNombre:1:true) por ejemplo
  transform(value: string, todas: boolean = true): string {
    //console.log(value);
    //console.log(args);

    value = value.toLocaleLowerCase();

    // Separamos los elementos del arreglo o del elemento por espacios vacíos ('')
    let nombres = value.split(' ');

    if( todas ){
      // El método map crea un nuevo arreglo con los resultados de la llamada a la función indicada aplicada a cada uno de sus elementos.                           Luego en el return pasamos la primera letra a mayúsculas y le concatenamos lo que resta de la palabra.                                              Con el join unimos los elementos del arreglo en una cadena y devolvemos esa cadena separada por un espacio en este caso
      nombres = nombres.map(nombre =>{
        return nombre[0].toUpperCase() + nombre.substr(1); // Juan Manuel López Santana
      })
      console.log(nombres);
      return nombres.join(' ');
    }else{
      // Juan manuel lópez santana; los nombres[0] es la primera palabra, los nombres[0][1] es la primera palabra en la primera posición 
      nombres[0] = nombres[0][0].toUpperCase() + nombres[0].substr(1);
    }
    return nombres.join(' ');
  }

}
