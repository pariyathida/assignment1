import {Component} from '@angular/core';
import {Product} from '../product';
import {ProductDataServerService} from '../../service/product-data-server.service';
@Component({
  selector: 'addProducts',
  templateUrl: 'app/product/addProduct/addProduct.component.html',
  styleUrls: ['app/product/addProduct/addProduct.component.css']
})
export class addProductsComponent {
  products: Product[];
  product: Product = new Product();
  file: null;

  constructor(private productDataService: ProductDataServerService) {
  }

  ngOnInit() {
    this.productDataService.getProductsData().subscribe((res) => this.products = res);
  }

  addProduct() {
    /*this.products.push(this.product);*/
    this.productDataService.addProduct(this.product, this.file).subscribe((res) => {
      console.log(res)
      alert('Name : ' + this.product.name + '\nDescription : ' +
        this.product.description + '\nPictures : ' + this.product.pictures +
        '\nPrice : ' + this.product.price + '\nAmount : ' + this.product.amount +
        '\nRating : ' + this.product.rating.toFixed(1));
    });
  }

  saveFileName(image) {
    this.product.pictures = image.target.files[0].name;
    this.saveFile(image);
  }
  saveFile(image) {
    this.file = image.target.files[0];
  }
}
