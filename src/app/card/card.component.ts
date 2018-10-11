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
    // Fetch del JSON entregado
    fetch('../../assets/JSON_data/store_directory.json')
    .then(res => res.json())
    .then(stores => {
      // console.log(stores);
      this.stores = stores;
    });
  }

  // Adiciona nombres al array vacío
  add(name: string) {
    this.arrayFav.push(name);
  }

  // Borra las tiendas del Array
  delete(tiendas: String) {
    const array = this.arrayFav;
    const index = this.arrayFav.indexOf(tiendas);
    if (index > -1) {
      array.splice(index, 1);
    }
  }
}
