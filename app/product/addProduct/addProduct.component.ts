import { Component } from '@angular/core';
import { Product } from '../product';
import { ProductDataService } from '../../service/product-data.service';
@Component({
    selector: 'addProducts',
    templateUrl: 'app/product/addProduct/addProduct.component.html',
    styleUrls: ['app/product/addProduct/addProduct.component.css']
})
export class addProductsComponent {
    products: Product[];
    constructor(private productDataService:ProductDataService){}
    ngOnInit(){
        this.products = this.productDataService.getProductsData();
    }

    product: Product = new Product();
    addProduct() {
        this.products.push(this.product);
        alert("Name : " + this.product.name + "\nDescription : " +
            this.product.description + "\nPictures : " + this.product.pictures +
            "\nPrice : " + this.product.price + "\nAmount : " + this.product.amount +
            "\nRating : " + this.product.rating.toFixed(1));
    }

     saveFileName(image){
        this.product.pictures= image.target.files[0].name;  
    }
}