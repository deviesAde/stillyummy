import Authenticated from "@/Layouts/AuthenticatedLayout"

export default function Merchant(){
    return(
        <Authenticated header={{ Parent:"Merchant", Submenu:"Profile" }}>
            
        </Authenticated>
    )
}