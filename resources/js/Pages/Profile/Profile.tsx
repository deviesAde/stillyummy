import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import Biodata from "./Biodata";
import { useState } from "react";
import Address from "./Address";
export default function Edit({
    mustVerifyEmail,
    status,
}: PageProps<{ mustVerifyEmail: boolean; status?: string }>) {
    const [subPage, setSubpage] = useState(true);

    return (
        <AuthenticatedLayout header={{ Parrent : "Profile", Submenu : "Profile Information" }}>
            <div className="w-1/3 flex m-10 gap-x-5 hover:cursor-pointer">
                <div className="flex-1" onClick={() => setSubpage(true)}>
                    <h1 className="bg-white text-black disabled:bg-transparent pl-1">
                        Biodata
                    </h1>
                    {subPage && <div className="bg-black py-[1px]"></div>}
                </div>
                <div className="flex-1" onClick={() => setSubpage(false)}>
                    <h1 className="bg-white text-black disabled:bg-transparent pl-1">
                        Address
                    </h1>
                    {!subPage && <div className="bg-black py-[1px]"></div>}
                </div>
            </div>
            {subPage && <Biodata />}
            {!subPage && <Address />}
        </AuthenticatedLayout>
    );
}
