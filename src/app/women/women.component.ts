import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-women',
  templateUrl: './women.component.html',
  styleUrls: ['./women.component.css']
})
export class WomenComponent implements OnInit {

  wClothing = [{
      western_wear:[
                      { 'product_name': 'BIBA Straight Cotton Kurta',
                        'price': 499,
                        'retail_price': 999,
                        'imgUrl': './assets/womens_clothing/western/img1.jpg',
                        'stock': 'In stock'
                      },
                      { 'product_name': 'Styleville.in Floral Regular Fit Top',
                        'price': 479,
                        'retail_price': 1999,
                        'imgUrl': './assets/womens_clothing/western/img2.jpg',
                        'stock': 'Out of stock'
                      },
                      { 'product_name': 'AKA CHIC Body Blouse Shirt',
                        'price': 638,
                        'retail_price': 1599,
                        'imgUrl': './assets/womens_clothing/western/img3.jpg',
                        'stock': 'Out of stock'
                      },
                      { 'product_name': 'Symbol Amazon Brand Jumpsuit',
                        'price': 599,
                        'retail_price': 1799,
                        'imgUrl': './assets/womens_clothing/western/img4.jpg',
                        'stock': 'In stock'
                      }
                    ],
        ethnic_wear: [
                      { 'product_name': 'Womanista Synthetic Saree with Blouse Piece',
                        'price': 1599,
                        'retail_price': 3799,
                        'imgUrl': './assets/womens_clothing/ethnic/img1.jpg'
                      },
                      { 'product_name': 'Amazon Brand- Myx A-Line Kurta',
                        'price': 519,
                        'retail_price': 1299,
                        'imgUrl': './assets/womens_clothing/ethnic/img2.jpg'
                      },
                      { 'product_name': 'Kashish by Shoppers Stop Womens Round Neck Solid Cape Gownt',
                        'price': 1899,
                        'retail_price': 2799,
                        'imgUrl': './assets/womens_clothing/ethnic/img4.jpg'
                      },
                      { 'product_name': 'Kashish Womens Round Neck Embroidered Palazzo Suit',
                        'price': 1249,
                        'retail_price': 2499,
                        'imgUrl': './assets/womens_clothing/ethnic/img5.jpg'
                      }
                    ]
  }];

  imgStyle = {
    'width' : '180px',
    'height': '250px'
  }

  constructor() { }

  ngOnInit() {
  }

}
