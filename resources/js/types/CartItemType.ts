export interface MerchantProductCartType {
    id: string
    name: string,
    price: number,
    ProductStock: number,
    ProductPhoto: string,
    quantity: number
    ProductSubtotal?: number
    ProductExpired : Date

}

export interface CartItemTypes {
    MerchantName: string;
    MerchantProduct: MerchantProductCartType[]
}

