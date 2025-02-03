import Authenticated from "@/Layouts/AuthenticatedLayout";

export default function TransactionCreate() {
    return (
        <Authenticated
            header={{ Parent: "Transaksi", Submenu: "Transaksi Baru" }}
        ></Authenticated>
    );
}
