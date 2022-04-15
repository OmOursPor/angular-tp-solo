import { Component, OnInit } from '@angular/core';
import { responseApiInterface } from '../responseApiInterface';

@Component({
  selector: 'app-shop-pannier',
  templateUrl: './shop-pannier.component.html',
  styleUrls: ['./shop-pannier.component.scss']
})
export class ShopPannierComponent implements OnInit {
  stringItems: any = "";
  items: responseApiInterface[] = []
  total: number = 0

  remove(target: number) {
    this.items = this.items.filter((item, index) => index != target)
    this.items.forEach(item => {
      this.total += item.price
    });
    localStorage.setItem("pannier", JSON.stringify(this.items))
  }

  constructor() { }

  ngOnInit(): void {
    this.stringItems = localStorage.getItem("pannier")
    this.items = this.stringItems == "" ? null : JSON.parse(this.stringItems)
    this.items.forEach(item => {
      this.total += item.price
    });
  }

}
