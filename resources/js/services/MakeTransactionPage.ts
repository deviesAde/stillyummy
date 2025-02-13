import CreateTransactionType from "@/types/CreateTransactionType"
import { router } from '@inertiajs/react';

export default function MakeTransactionPage(Data:
    CreateTransactionType
) {
    router.post(route("transaction.createpost"), {
        TransactionDetail: Data as any,
    });
}