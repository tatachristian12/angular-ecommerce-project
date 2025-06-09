import { Component} from '@angular/core';
import {NgFor} from '@angular/common';
import {NgStyle} from '@angular/common';
import {NgIf} from '@angular/common';
import {FormsModule} from '@angular/forms';
import { buynowService } from '../services/buynow.services';





@Component({
  selector: 'app-main',
  imports: [NgFor, NgStyle, NgIf, FormsModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {



  isOnSale: boolean = true;
  saleDiscount: number = 0.7;
 






  products: any [] = [
    {
      id: 0,
      name: "Iphone 16 plus",
      color: "white",
      Quantity: 10,
      capacity: "128GB",
      price: 21999,
      imageUrl: "/iphone16plus.webp",
      onSale: true,

    },
     {
      id: 1,
      name: "Iphone 16",
      color: "black",
      Quantity: 10,
      capacity: "256GB",
      price: 18999,
      imageUrl: "/iphone16.webp",
      onSale: false,
    },
      {
        id: 2,
      name: "Pre-owned iPhone XR",
      color: "black",
      Quantity: 0,
      capacity: "64GB",
      price: 6499,
      imageUrl: "/iphonexr.webp",
      onSale: false,
    },
      {
        id: 3,
      name: "Iphone 14",
      color: "blue",
      Quantity: 1,
      capacity: "128GB",
      price: 12999,
      imageUrl: "/iphone14.webp",
      onSale: true,
    }
    ,
      {
        id: 4,
      name: "Iphone 16e",
      color: "white",
      Quantity: 1,
      capacity: "128GB",
      price: 13999,
      imageUrl: "/iphone16e.webp",
      onSale: true,
    }
    ,
      {
        id: 5,
      name: "Iphone 16 pro",
      color: "Desert Titanium",
      Quantity: 10,
      capacity: "128GB",
      price: 24999,
      imageUrl: "/iphone16pro.webp",
      onSale: true,
    }
    ,
      {
        id: 6,
      name: "Iphone 16 pro max",
      color: "Natural Titanium",
      Quantity: 10,
      capacity: "512GB",
      price: 30499,
      imageUrl: "/iphone16promax.webp",
      onSale: false,

    }
    ,
      {
        id: 7,
      name: "Iphone 15",
      color: "pink",
      Quantity: 4,
      capacity: "128GB",
      price: 16499,
      imageUrl: "/iphone15.webp",
      onSale: true,
    }
    ,
      {
        id: 8,
      name: "Iphone 15 plus",
      color: "green",
      Quantity: 5,
      capacity: "128GB",
      price: 19499,
      imageUrl: "/iphone15plus.webp",
      onSale: true,
    }
    ,
      {
        id: 9,
      name: "Iphone 15 pro",
      color: "Blue Titanium",
      Quantity: 2,
      capacity: "1TB",
      price: 29999,
      imageUrl: "/iphone15pro.webp",
      onSale: false,
    }
    ,
      {
        id: 10,
      name: "Iphone 15 pro max",
      color: "Black Titanium",
      Quantity: 6,
      capacity: "256GB",
      price: 28999,
      imageUrl: "/iphone15promax.webp",
      onSale: true,
    }
    ,
      {
        id: 11,
      name: "Iphone 13",
      color: "white",
      Quantity: 0,
      capacity: "128GB",
      price: 9999,
      imageUrl: "/iphone13.webp",
      onSale: false,
    }
  ]


  onClick(){
    let services = new buynowService
    services.message()
    
  }


  
  setCurrentStyles() {
    // CSS styles: set per current state of component properties
    return{
      'background-color': this.isOnSale ?  'yellow' : 'transparent',
      
    };
  }


  searchProduct: string = '';

 

  onSearch() {
    this.products = this.products.filter(product =>
      product.name.toLowerCase().includes(this.searchProduct.toLowerCase())
    );
  }

  
  autocompleteSuggestions: string[] = [];

  updateSuggestions() {
  const term = this.searchProduct.toLowerCase();

  if (!term) {
    this.autocompleteSuggestions = [];
    return;
  }

  // Filter product names that inc with the term
  this.autocompleteSuggestions = this.products
    .map(product => product.name)
    .filter(name => name.toLowerCase().includes(term));
}

selectSuggestion(suggestion: string) {
  this.searchProduct = suggestion;
  this.autocompleteSuggestions = [];
}

  }



