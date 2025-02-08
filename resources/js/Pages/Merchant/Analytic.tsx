import Authenticated from "@/Layouts/AuthenticatedLayout"

export default function Analytic(){
    return(
        <Authenticated header={{ Parent:"Merchant", Submenu:"Analytic Transaction" }}>
            
        </Authenticated>
    )
}