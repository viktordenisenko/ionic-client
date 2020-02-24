import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IResponse} from '../../../interfaces/IResponse';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'app-category-products',
  templateUrl: './category-products.component.html',
  styleUrls: ['./category-products.component.scss'],
})
export class CategoryProductsComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

}
