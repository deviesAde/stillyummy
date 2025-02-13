import Auth from "./KurirAuth";
import KurirContentPage from "./KurirContent";

export default function KurirPage({
    querry,
    errors,
    access,
    Data,
}: {
    querry: string;
    errors: string[];
    access: string;
    Data: any;
}) {
    console.log(access);
    return (
        <div className="w-full min-h-screen">
            <div className="flex-1 pb-10 md:pb-0">
                <div className="z-40 absolute top-0 bg-white border-b-[1px] border-gray-300 py-4 px-5 md:px-10 w-full text-md sm:text-md text-gray-500 flex gap-x-3 items-center justify-between">
                    <div className="flex items-center gap-x-3">
                        <h1 className="text-xs">|</h1>
                        <h1 className={"block"}>Pengiriman</h1>
                        <h1 className="block">{">"}</h1>
                        <h1 className="text-black">{querry}</h1>
                    </div>
                </div>
                <main className="md:mx-10">
                    {!access ? (
                        <Auth querry={querry}errors={errors} />
                    ) : (
                        <KurirContentPage Data={Data} />
                    )}
                </main>
            </div>
        </div>
    );
}
