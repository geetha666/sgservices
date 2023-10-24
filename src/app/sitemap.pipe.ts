import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sitemap'
})
export class SitemapPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
