import { PRODUCT } from '../mocks';
import { Injectable } from '@angular/core'
@Injectable()
export class ProductDataService {
    getProductsData() {
        return PRODUCT;
    }
}
