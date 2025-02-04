import { Button } from "@/Components/ui/button";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { useEffect } from "react";
Button;

export default function TransactionDetail({ ID }: { ID: string }) {
    useEffect(() => {
        const snapSrcUrl = "https://app.sandbox.midtrans.com/snap/snap.js";
        // const myMidtransClientKey = "your-client-key-goes-here"; //change this according to your client-key

        const script = document.createElement("script");
        script.src = snapSrcUrl;
        script.setAttribute("data-client-key", "");
        script.async = true;

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    function OpenSnapPay() {
        window.snap.pay("c7ead6bc-7b77-4566-98f3-ee66ff26714a");
    }
    return (
        <Authenticated header={{ Parent: "Detail Transaski", Submenu: ID }}>
            <Button onClick={OpenSnapPay}>Show</Button>
        </Authenticated>
    );
}
