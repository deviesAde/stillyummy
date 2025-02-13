import Authenticated from "@/Layouts/AuthenticatedLayout";

export default function TransactionCreate({ flash,TransactionData }) {
    console.log(TransactionData)
    return (
        <Authenticated
            header={{ Parent: "Transaksi", Submenu: "Transaksi Baru" }}
        >
            <h1></h1>
        </Authenticated>
    );
}
