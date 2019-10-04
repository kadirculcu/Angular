import { Component, OnInit } from '@angular/core';
import { Category } from './Category';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
  
})
export class CategoryComponent implements OnInit {

  constructor(private http: HttpClient) { }
  title = "Kategori Listesi"
  categories: Category[];
  path: " http://localhost:3000/categories";

  ngOnInit() {
    this.http.get<Category[]>(this.path).subscribe(data => {
      console.log(data)
      this.categories = data;
    },error=>{console.log(error)}
    );
  }

}
