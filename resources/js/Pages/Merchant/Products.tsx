import Authenticated from "@/Layouts/AuthenticatedLayout"
import { Button } from "@/Components/ui/button"
import { router } from "@inertiajs/react"

export default function Products(){
    return(
        <Authenticated header={{ Parent:"Merchant", Submenu:"Product List" }} className="gap-y-5 flex flex-col">
            <Button className="w-fit ml-auto" onClick={()=>router.get(route('product.create'))}>Tambah Product</Button>
            <div className="py-1 bg-black">

            </div>
        </Authenticated>
    )
}