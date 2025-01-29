import { ErrorType } from "@/types/ErrorType";
import { Button } from "@/Components/ui/button";
import { router } from "@inertiajs/react";
export default function Error_401({ Error }: { Error: ErrorType }) {
    console.log(Error);
    return (
        <div className="w-full min-h-screen items-center flex">
            <div className="w-fit m-auto h-fit flex flex-col gap-y-3">
                <div className="flex text-4xl font-extrabold gap-x-2 justify-center">
                    <h1>{Error.ErrorCode}</h1>
                    <h1>{"-"}</h1>
                    <h1>{Error.Error}</h1>
                </div>
                <h1 className="text-xl">{Error.ErrorMessage}</h1>
                <Button className="bg-transparent border-2 border-black text-black hover :bg-black hover:text-white" onClick={()=> router.get(route("dashboard"))}>Back To Home</Button>
            </div>
        </div>
    );
}
