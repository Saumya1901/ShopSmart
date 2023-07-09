import { Component,OnInit } from '@angular/core';
import { signUp,login, product, cart } from '../data-type';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css']
})
export class UserAuthComponent {
  showLogin:boolean=true
  authError:string=""
constructor(private route:Router,private user:UserService ,private product:ProductService){

}
ngOnInit():void{
  this.user.userAuthReload();
}
signUp(data:signUp){
  console.warn(data);
  
  this.user.userSignUp(data)
  
}
openLogin(){
  this.showLogin=true;
}
login(data: login){
  this.user.userLogin(data);
  this.user.invalidUserAuth.subscribe((result)=>{
    console.warn(result);
    if(result){
      this.authError="User not found"
    }
    else{
      this.localCartToRemoteCart();
    }

  })
}
openSignUp(){
  this.showLogin=false;
}
localCartToRemoteCart(){
  let data = localStorage.getItem('localCart');
  let user = localStorage.getItem('user');
  let userId= user && JSON.parse(user).id;
  if(data){
   let cartDataList:product[]= JSON.parse(data);
 
   cartDataList.forEach((product:product, index)=>{
     let cartData:cart={
       ...product,
       productId:product.id,
       userId
     }
     delete cartData.id;
     setTimeout(() => {
       this.product.addToCart(cartData).subscribe((result)=>{
         if(result){
           console.warn("data is stored in DB");
         }
       })
     }, 500);
     if(cartDataList.length===index+1){
       localStorage.removeItem('localCart')
     }
   })
  }

  setTimeout(() => {
   this.product.getCartList(userId)
  }, 2000);
  setTimeout(() => {
   this.product.getCartList(userId)
  }, 2000);



   
 }
}