export interface ProductCardType{
    ID: string;
    Thubnail : string | string[];
    Title : string;
    price : string;
    Description? : string;
    Category? : string;
    Seller? : string;
    SellerPorfile? : string; 
    SellerDescription? : string;
}