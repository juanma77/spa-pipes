import { Pipe, PipeTransform } from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';


@Pipe({
  name: 'secureDom'
})
export class SecureDomPipe implements PipeTransform {

  constructor(private domSanitizer: DomSanitizer){

  }

  // Para pasar urls de confianza sin la advertencia que sale en consola 
  transform(value: string, ...args: any[]): SafeResourceUrl {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(value);
  }

}
