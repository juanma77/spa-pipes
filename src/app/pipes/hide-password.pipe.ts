import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hidePassword'
})
export class HidePasswordPipe implements PipeTransform {

  transform(value: string, mostrar: boolean = true): string {
    // Lo que está después del ? es la condición verdadera, lo que está luego de los : es lo que hará en caso contrario; repeat es para repetir elementos de acuerdo al largo que tenga el value.length
    return (mostrar) ? '*'.repeat(value.length) : value;  
  }

}
