import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { product } from '../data-type';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css']
})
export class SellerHomeComponent implements OnInit {
  icon = faTrash;
  iconEdit=faEdit;
  productList: undefined | product[];
  productMessage: undefined | string;
  constructor(private product: ProductService) { }
  ngOnInit(): void {
    this.list();
  }



  deleteProduct(id: number) {
    this.product.deleteProduct(id).subscribe((result) => {
      if (result) {
        this.productMessage = "Deleted";
        this.list();
      }
    });

    setTimeout(() => {
      this.productMessage = undefined
    }, 2500);
  }
  list() {
    this.product.productList().subscribe((result) => {
      this.productList = result;

    })
  }
}
