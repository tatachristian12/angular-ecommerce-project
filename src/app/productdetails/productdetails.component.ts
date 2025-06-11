import { Component, inject, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../services/products.service';
import { Product } from '../services/products.service';

@Component({
  selector: 'app-productdetails',
  imports: [CommonModule],
  templateUrl: './productdetails.component.html',
  styleUrl: './productdetails.component.css'
})
export class ProductdetailsComponent {
 private route = inject(ActivatedRoute);
 private productService = inject(ProductsService);
 products?: Product //holds the product object 

 constructor() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.products = this.productService.getProductsById(id);
  }

}
