import { Component } from '@angular/core';
import { Product } from '../product';
import { ProductDataService } from '../../service/product-data.service';
@Component({
    selector: 'showProducts',
    templateUrl: 'app/product/showProduct/showProduct.component.html',
    styleUrls: ['app/product/showProduct/showProduct.component.css']
})
export class showProductsComponent {
    products : Product[];
    constructor(private productDataService:ProductDataService){}
    ngOnInit(){
        this.products = this.productDataService.getProductsData();
    }
}