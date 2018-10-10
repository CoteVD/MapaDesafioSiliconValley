import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  stores: String;
  title: String;
  arrayFav: any = [];

  constructor() {}

  ngOnInit() {
    fetch('../../assets/JSON_data/store_directory.json')
    .then(res => res.json())
    .then(stores => {
      console.log(stores);
      this.stores = stores;
    });
  }

  add(name: string) {
    this.arrayFav.push(name);
  }

  delete(tiendas: String) {
    const array = this.arrayFav;
    const index = this.arrayFav.indexOf(tiendas);
    if (index > -1) {
      array.splice(index, 1);
    }
  }
}
