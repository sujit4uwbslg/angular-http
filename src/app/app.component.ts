import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{

  prod=[]
  constructor(private http: HttpClient){}

  ngOnInit(){
    //this.fetchProducts();
  }
  onCreateProducts(product:{pID:number,pName:string,pQty:number,pPrice:number}){
    this.http.post("https://products-angular-25ad4-default-rtdb.firebaseio.com/product.json",product)
    .subscribe((res)=>{
      console.log(product)
    });
  }
  /*private fetchProducts(){
    this.http.get("https://products-angular-25ad4-default-rtdb.firebaseio.com/product.json")
    .pipe((res)=>{
      for(const key in res){
        this.prod.push({res[key],id:key})
      }
    })
    .subscribe((res)=>{

      console.log(res)
    });*/
  }

