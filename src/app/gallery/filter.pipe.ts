import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: Array<any>, publish: string, date: string, langue: string, category:string ){

    if (items && items.length) {
      return items.filter(item =>{
        if (date && item.publishedDate.indexOf(date) === -1) {
          return false;
        } else if (publish && item.publisher.toLowerCase().indexOf(publish.toLowerCase()) === -1) {
          return false;
        } else if (langue && item.language.indexOf(langue) === -1){
          return false;
        } else if (category && item.categories.indexOf(category) === -1){
          return false;
        }
        return true;
      });
    } else{
      return items;
    }
  }
}
