import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductService} from "../services/product.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-product-categories',
  templateUrl: './product-categories.component.html',
  styleUrls: ['./product-categories.component.scss']
})
export class ProductCategoriesComponent implements OnInit {
  public categories: any = []

  constructor(private productService: ProductService, private router: Router) {
  }

  ngOnInit(): void {
    this.categories = this.productService.categories
  }

  goToCategoryProducts(category: any) {
    this.router.navigate(["products/" + category.name])
  }
}
