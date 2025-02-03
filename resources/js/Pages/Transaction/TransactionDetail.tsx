import Authenticated from "@/Layouts/AuthenticatedLayout";

export default function TransactionDetail({ ID }: { ID: string }) {
    return (
        <Authenticated
            header={{ Parent: "Detail Transaski", Submenu: ID }}
        ></Authenticated>
    );
}
