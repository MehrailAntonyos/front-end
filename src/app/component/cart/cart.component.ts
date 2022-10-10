import { Component, OnInit } from '@angular/core';
import { Category, IProduct } from 'src/app/model/IProduct';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  products: IProduct[] = []
  category: Category[] = []
  constructor() { }

  ngOnInit(): void {
  }

}
