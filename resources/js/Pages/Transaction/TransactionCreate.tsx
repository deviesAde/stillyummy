import Authenticated from "@/Layouts/AuthenticatedLayout";

export default function TransactionCreate({ flash }) {
    window.open(flash.success?.redirect_url,'_blank')
    return (
        <Authenticated
            header={{ Parent: "Transaksi", Submenu: "Transaksi Baru" }}
        ></Authenticated>
    );
}
