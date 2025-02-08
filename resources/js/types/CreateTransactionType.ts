import { MerchantProductCartType } from "./CartItemType"

type CreateTransactionType = {
    Total: number;
    items: MerchantProductCartType[]
}

export default CreateTransactionType
