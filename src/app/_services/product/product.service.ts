import { EventEmitter } from "@angular/core";
import { Product } from "src/app/_models/product/product.model";

export class ProductService {
    productsArray: Product[] = [
        {id:1,
        data:[{name:'Iphone',description:'This The Best Mobile In The World From Apple',lang:{id:1,name:'en'}}],
        category:{id:1,name:'Mobile-Phones'},
        tags:[{name:'Mobile-Phone'},{name:'Electronics'},{name:'High-End-Product'}],
        paymentTypes:[{name:'Paypal'},{name:'Cash'},{name:'Bitcoin'}],
        price:200,
        discount:20
        ,imageUrl:'https://picsum.photos/200/300',
        Count:1},
        {id:2,data:[{name:'Ipad',description:'This The Best Pad In The World From Apple',lang:{id:1,name:'en'}}],
        category:{id:2,name:'IPad'},
        tags:[{name:'IPad'},{name:'Electronics'},{name:'High-End-Product'}],
        paymentTypes:[{name:'Paypal'},{name:'Cash'}],
        price:1200,discount:150,imageUrl:'https://picsum.photos/200/301',Count:1},
        {id:3,data:[{name:'MacBook',description:'This The Best MacBook In The World From Apple',lang:{id:1,name:'en'}}],
        category:{id:3,name:'Laptop'},
        tags:[{name:'Laptop'},{name:'Electronics'},{name:'High-End-Product'}],
        paymentTypes:[{name:'Paypal'},{name:'Bitcoin'}],price:2100,discount:400,imageUrl:'https://picsum.photos/200/302',Count:1},
        {id:4,data:[{name:'MacAir',description:'This The Best MacAir In The World From Apple',lang:{id:1,name:'en'}}],
        category:{id:3,name:'Laptop'},
        tags:[{name:'Laptop'},{name:'Electronics'},{name:'High-End-Product'}],
        paymentTypes:[{name:'Paypal'},{name:'Cash'},{name:'Bitcoin'}],price:3200,discount:10,imageUrl:'https://picsum.photos/200/303',Count:1},
        {id:5,data:[{name:'MacAirPro',description:'This The Best MacAirPro In The World From Apple',lang:{id:1,name:'en'}}],
        category:{id:3,name:'Laptop'},
        tags:[{name:'Laptop'},{name:'Electronics'},{name:'High-End-Product'}],
        paymentTypes:[{name:'Paypal'},{name:'Cash'},{name:'Bitcoin'}],price:4200,discount:300,imageUrl:'https://picsum.photos/200/304',Count:1},
        {id:6,data:[{name:'AirPods',description:'This The Best AirPods In The World From Apple',lang:{id:1,name:'en'}}],
        category:{id:4,name:'AirPods'},
        tags:[{name:'AirPods'},{name:'Electronics'},{name:'High-End-Product'}],
        paymentTypes:[{name:'Paypal'},{name:'Cash'},{name:'Bitcoin'}],price:100,discount:0,imageUrl:'https://picsum.photos/200/305',Count:1},
        {id:7,data:[{name:'MacPC',description:'This The Best PC In The World From Apple',lang:{id:1,name:'en'}}],
        category:{id:6,name:'PC'},
        tags:[{name:'PC'},{name:'Electronics'},{name:'High-End-Product'}],
        paymentTypes:[{name:'Cash'}],price:8000,discount:30,imageUrl:'https://picsum.photos/200/306',Count:1},
        {id:8,data:[{name:'AppleTV',description:'This The Best TV In The World From Apple',lang:{id:1,name:'en'}}],
        category:{id:5,name:'TV'},
        tags:[{name:'TV'},{name:'Electronics'},{name:'High-End-Product'}],
        paymentTypes:[{name:'Paypal'},{name:'Cash'},{name:'Bitcoin'}],price:3000,discount:200,imageUrl:'https://picsum.photos/200/307',Count:1}
      ];
    private cartArray: Product[] =[];
    cartHasBeenChanged :EventEmitter<Product []> = new EventEmitter<Product []>();
    constructor(){

    }
    getAllProducts(): Product []{
      
        return this.productsArray.splice(0);
    }
    getProductById(id: number){
        return this.productsArray.find(product => product.id === id);
    }
    addProduct(product: Product){
        this.productsArray.push(product);
    }
    updateProduct(){}
    deleteProduct(){}
    addProductToCart(product:Product){
        console.log(product);
        if(this.cartArray.includes(product))
        {
          product.Count++;
        }else{
          this.cartArray.push(product);
          this.cartHasBeenChanged.emit(this.cartArray);
        }

    }


}