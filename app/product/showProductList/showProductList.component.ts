import { Component } from '@angular/core';
import { Product } from '../product';
import { ProductDataService } from '../../service/product-data.service';
@Component({
    selector: 'showProductList',
    templateUrl: 'app/product/showProductList/showProductList.component.html',
    styleUrls: ['app/product/showProductList/showProductList.component.css']
})
export class showProductListComponent {
    products : Product[]
    constructor(private productDataService:ProductDataService){}
    ngOnInit(){
        this.products = this.productDataService.getProductsData();
    }

    showDescription(product){
        if(product.description.length<=50){
            return product.description;
        }else{
            return product.description.substring(0,47)+"...";
        }
    }

    alertDetail(product){
        alert("Name : " + product.name + "\nDescription : " +
            product.description + "\nPictures : " + product.pictures +
            "\nPrice : " + product.price + "\nAmount : " + product.amount +
            "\nRating : " + product.rating.toFixed(1));
    }

 
}