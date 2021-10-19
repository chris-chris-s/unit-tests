import { HttpClient, HttpEventType, HttpEvent } from '@angular/common/http';
import { ProductService } from './../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../services/product.interface';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  ProductList: Product[] = [];
  currentPage: number;
  pageOffset: number;
  itemsPerPage: number;

  constructor(private http: HttpClient, public productService: ProductService) {
    this.currentPage = 0;
    this.pageOffset = 0;
    this.itemsPerPage = 4;
  }

  ngOnInit(): void {
    this.loadProducts();
  }

  onNext(event: Event) {
    let nextOffset = this.pageOffset + this.itemsPerPage;
    if (nextOffset > this.ProductList.length) {
      alert('No next page');
    } else {
      this.currentPage++;
      this.pageOffset = nextOffset;
    }
  }

  onPrev(event: Event) {
    let nextOffset = this.pageOffset - this.itemsPerPage;
    if (nextOffset < 0) {
      alert('No previous page');
    } else {
      this.currentPage--;
      this.pageOffset = nextOffset;
    }
  }

  // Issues list
  loadProducts() {
    return this.productService.GetProducts().subscribe(data => {
      this.ProductList = data;
    });
  }
}
