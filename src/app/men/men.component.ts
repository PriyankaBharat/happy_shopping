import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-men',
  templateUrl: './men.component.html',
  styleUrls: ['./men.component.css']
})
export class MenComponent implements OnInit {

  mClothing = [{
    western_wear:[
                    { 'product_name': 'Tripr Solid Men V-neck Multicolor T-Shirt',
                      'price': 307,
                      'retail_price': 899,
                      'imgUrl': './assets/mens_clothing/western/img1.jpeg'
                    },
                    { 'product_name': 'Tripr Printed Men V-neck Black T-Shirtp',
                      'price': 341,
                      'retail_price': 899,
                      'imgUrl': './assets/mens_clothing/western/img2.jpeg'
                    },
                    { 'product_name': 'Bullseye Full Sleeve Solid Jacket',
                      'price': 599,
                      'retail_price': 4499,
                      'imgUrl': './assets/mens_clothing/western/img3.jpeg'
                    },
                    { 'product_name': 'Tinted Full Sleeve Solid Jacket',
                      'price': 767,
                      'retail_price': 1395,
                      'imgUrl': './assets/mens_clothing/western/img4.jpeg'
                    }
                  ]
}];
  constructor() { }

  ngOnInit() {
  }

}
