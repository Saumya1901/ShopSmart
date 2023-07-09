export interface signUp{
    name : string,
    email: string,
    password:string
}
export interface login {
    email: String;
    password: String;
  }

  export interface product{
    productId: any;
    name:String;
    price:number;
    category:String;
    description:String;
    image:String;
    id:number;
    quantity:undefined|number;
  }
  export interface cart{
    name:String,
    price:number,
    category:String,
    image:String,
    description:String,
    id:number| undefined,
    quantity:undefined | number,
    productId:number,
    userId:number
  }
  
  export interface priceSummary{
    price:number,
    discount:number,
    tax:number,
    delivery:number,
    total:number
  }
  
  export interface order {
    email:string,
    address:string,
    contact:string,
    totalPrice:number,
    userId:string,
    id:number|undefined
  }