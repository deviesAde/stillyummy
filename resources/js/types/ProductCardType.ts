export interface ProductCardType{
    ID: string;
    Thubnail : string | string[];
    Title : string;
    price : number;
    Description? : string;
    Category? : string;
    Seller? : string;
    SellerPorfile? : string; 
    SellerDescription? : string;
    ProductExpired : Date;
    Stock?: number;
}