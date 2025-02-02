export interface MerchantProductCartType{
    ProductName: string,
    ProductPrice: number,
    ProductStock: number,
    ProductPhoto: string,
    ProductAmount: number
}

export interface CartItemTypes{
    MerchantName : string;
    MerchantProduct : MerchantProductCartType[]
}

