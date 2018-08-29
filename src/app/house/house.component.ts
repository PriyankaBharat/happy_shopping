import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.css']
})
export class HouseComponent implements OnInit {

  houseDecor = [{
    paintings:[
                    { 'product_name': 'SAF Ganesh Modern art Ink Painting',
                      'price': 399,
                      'retail_price': 1799,
                      'imgUrl': './assets/house_decor/paintings/img1.jpeg'
                    },
                    { 'product_name': 'SAF MODERN ARTISTIC SPARKLE ',
                      'price': 569,
                      'retail_price': 1399,
                      'imgUrl': './assets/house_decor/paintings/img2.jpeg'
                    },
                    { 'product_name': 'SAF RADHEY KRISHNA LARGE 5PANEL Ink Painting',
                      'price': 999,
                      'retail_price': 4500,
                      'imgUrl': './assets/house_decor/paintings/img3.jpeg'
                    },
                    { 'product_name': 'Janki Unique Beautiful wall picture Canvas Painting',
                      'price': 270,
                      'retail_price': 699,
                      'imgUrl': './assets/house_decor/paintings/img4.jpeg'
                    }
                  ]
}];
  constructor() { }

  ngOnInit() {
  }

}
