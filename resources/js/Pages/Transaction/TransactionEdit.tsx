import Authenticated from "@/Layouts/AuthenticatedLayout";

export default function TransactionEdit({ ID }: { ID: string }) {
    return (
        <Authenticated
            header={{ Parent: "Edit Transaski", Submenu: ID }}
        ></Authenticated>
    );
}
