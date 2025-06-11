import { Component, inject} from '@angular/core';
import {NgFor} from '@angular/common';
import {NgStyle} from '@angular/common';
import {NgIf} from '@angular/common';
import {FormsModule} from '@angular/forms';
import { buynowService } from '../services/buynow.services';
import { ProductsService } from '../services/products.service';

import { Product } from '../services/products.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-main',
  imports: [NgFor, NgStyle, NgIf, FormsModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
 allProducts: Product [] = []; // Declare products array
 private productService = inject(ProductsService); //Inject the service
 private router = inject(Router);  //inject Angular's Router without using the constructor.


 //
constructor(){
  this.allProducts = this.productService.getAllProducts();
 }

 //navigates to the product page using route.
   goToDetails(productId: number) {
    this.router.navigate(['/productdetails', productId]);
  }


  isOnSale: boolean = true;
  saleDiscount: number = 0.7;



 


  
  setCurrentStyles() {
    // CSS styles: set per current state of component properties
    return{
      'background-color': this.isOnSale ?  'yellow' : 'transparent',
      
    };
  }


  searchProduct: string = '';

 

  onSearch() {
    this.allProducts = this.allProducts.filter(product =>
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
  this.autocompleteSuggestions = this.allProducts
    .map(product => product.name)
    .filter(name => name.toLowerCase().includes(term));
}

selectSuggestion(suggestion: string) {
  this.searchProduct = suggestion;
  this.autocompleteSuggestions = [];
}

  }



