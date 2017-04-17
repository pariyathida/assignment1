import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Observable";
import {Subscriber} from "rxjs/Subscriber";
import {Product} from "../product/product";

@Injectable()
export class StudentsDataDBService {

  products:Product[] = [
    {
      "id": 1,
      "name": "Canon EOS M10",
      "description": "Mirrorless camera",
      "pictures": "eosm10.jpg",
      "price": 13890,
      "amount": 10,
      "rating" : 8.25
    },{
      "id": 2,
      "name": "Fujifilm XA3",
      "description": "Mirrorless camera",
      "pictures": "xa3.jpg",
      "price": 23190,
      "amount": 10,
      "rating" : 8.00
    }
  ];

  getProductsData(){
    return new Observable<Product[]>((subscriber:Subscriber<Product[]>)=>subscriber.next(this.products));
  }

  getProduct(id:number){
    let student = this.products.find(student=> student.id === +id);
    return new Observable<Product>((subscriber:Subscriber<Product>)=>subscriber.next(student));
  }

  addStudent(product:Product){
    console.log(product);
    product.id = this.products.length+1;
    this.products.push(product);
    console.log(this.products);
  }
}
