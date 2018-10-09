import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  public stores: String;

  constructor() {}

  ngOnInit() {
    fetch('../../assets/JSON_data/store_directory.json')
    .then(res => res.json())
    .then(stores => {
      console.log(stores);
      this.stores = stores;
    });
  }

}
