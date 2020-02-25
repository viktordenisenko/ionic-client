import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ApiService} from '../../../services/api.service';
import {IProduct} from '../../../interfaces/IProduct';
import {ICategory} from '../../../interfaces/ICategory';

@Component({
  selector: 'app-category-products',
  templateUrl: './category-products.component.html',
  styleUrls: ['./category-products.component.scss'],
})
export class CategoryProductsComponent implements OnInit {
  public product: IProduct[] = [];
  public category: ICategory[] = [];
  constructor(
      private api: ApiService,
      private route: ActivatedRoute

  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.api.getProductsByCategory(params.categoryId).subscribe(response => {
        console.log(response);
          if(response.success) {
              this.product = response.product;
              this.category = response.category;
          }
      });
    });
  }

}
