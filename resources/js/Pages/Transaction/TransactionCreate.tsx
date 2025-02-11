import Authenticated from "@/Layouts/AuthenticatedLayout";

export default function TransactionCreate({ flash,TransactionData }) {
    return (
        <Authenticated
            header={{ Parent: "Transaksi", Submenu: "Transaksi Baru" }}
        >
            <h1>{`${TransactionData.Total}`}</h1>
        </Authenticated>
    );
}
