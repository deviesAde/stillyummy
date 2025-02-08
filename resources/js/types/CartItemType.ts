export interface MerchantProductCartType {
    id: string
    name: string,
    price: number,
    ProductStock: number,
    ProductPhoto: string,
    quantity: number
    ProductSubtotal?: number

}

export interface CartItemTypes {
    MerchantName: string;
    MerchantProduct: MerchantProductCartType[]
}

