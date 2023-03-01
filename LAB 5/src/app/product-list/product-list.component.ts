import {Component, OnInit} from '@angular/core';
import {ProductService} from "../services/product.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: any[] = []
  category: string = ""

  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.category = this.activatedRoute.snapshot.params["category"]
    this.products = this.productService.categories.find(item => item.name === this.category).products
  }

  goToRealPage(i: number) {
    this.router.navigate([`products/${this.category}/${i}`])
  }

  removeProduct(i: number) {
    this.products = this.products.filter(item => {
      return item !== this.products[i]
    });
    this.productService.categories.find(item => item.name === this.category).products = this.products
  }
}
