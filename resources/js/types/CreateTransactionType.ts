import { MerchantProductCartType } from "./CartItemType"

type CreateTransactionType = {
    Total: number;
    MerchantName :string;
    items: MerchantProductCartType[];
}

export default CreateTransactionType
