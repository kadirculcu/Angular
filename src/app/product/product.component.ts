import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private http: HttpClient) { }
  title = "Ürün Listesi"
  products: Product[];
  path: " http://localhost:3000/products"
  ngOnInit() {
    this.http.get<Product[]>(this.path).subscribe(data => {
      console.log(data)
      this.products = data; 
    });
  }
  addToCart(eleman) {
    alert("Sepete eklendi :" + eleman.name)
  }
}
