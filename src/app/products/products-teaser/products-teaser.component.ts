import { Component, Input } from '@angular/core';

interface ITeaserImage {
  banner?: string;
  sm?: string;
  md?: string;
  xl?: string;
  unsplashId?: string;
}

export interface ITeaser {
  productName: string;
  description: string;
  productLink: any;
  productPrice: number;
  id: string;
  product: Object;
  image: ITeaserImage;
  inStock: boolean;
  productAverageStars: number;
}

@Component({
  selector: 'products-teaser',
  templateUrl: './products-teaser.component.html',
  styleUrls: ['./products-teaser.component.scss'],
  host: { class: 'products-teaser' },
})
export class ProductsTeaserComponent {
  @Input() product: ITeaser;

  truncateChar(text: string): string {
    let charlimit = 100;
    if (!text || text.length <= charlimit) {
      return text;
    }
    let without_html = text.replace(/<(?:.|\n)*?>/gm, '');
    let shortened = without_html.substring(0, charlimit) + '...';
    return shortened;
  }
}
