import { Component, Input } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products = products;

  share(url: string) {
    window.open(`https://api.whatsapp.com/send?text=${url}`, "_blank"); 
  }
}
