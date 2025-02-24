import CreateTransactionType from "@/types/CreateTransactionType"
import { router } from '@inertiajs/react';

export default function MakeTransactionPage(Data:
    CreateTransactionType
) {
    console.log(Data);
    router.post(route("transaction.createpost"), {
        TransactionDetail: Data as any,
    });
}