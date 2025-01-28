import { Button } from "../ui/button";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ButtonFooter({Action1,Action2,className} : {Action1 : ()=>void, Action2 : ()=>void,className:string}){
    return(
    <div className={cn("",className)}>
        <Button
            className="flex-1 bg-transparent border-[1px] border-black text-black hover:bg-gray-100"
            onClick={Action1}
        >
            <Plus color="black" />
            <h1 className="mt-0.5">Keranjang</h1>
        </Button>
        <Button className="flex-1" onClick={Action2}>
            <h1 className="mt-0.5">Beli Sekarang</h1>
        </Button>
    </div>)
}
