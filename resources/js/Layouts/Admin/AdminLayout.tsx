import { PropsWithChildren } from "react";
import { Sidebar, SidebarProvider,SidebarTrigger, } from "@/components/ui/sidebar";
import { ShoppingBasket} from "lucide-react";
import { HeaderType } from "@/types/HeaderType";
import { cn } from "@/lib/utils";
import { router } from "@inertiajs/react";
import AdminSidebar from '../../Components/appSiderbarAdmin'
export default function Authenticated({
    header,
    children,
    className,
}: PropsWithChildren<{ header: HeaderType,className?: string}>) {
    return (
        <SidebarProvider>
            <Sidebar>
                <AdminSidebar />
            </Sidebar>
            <div className="flex-1 pb-10">
                <div className="z-40 sticky top-0 bg-white border-b-[1px] border-gray-300 py-4 px-5 md:px-10 w-full text-md sm:text-md text-gray-500 flex gap-x-3 items-center justify-between">
                    <div className="flex items-center gap-x-3">
                        <SidebarTrigger className="md:hidden"/>
                        <h1 className="text-xs">|</h1>
                        <h1
                            className= {header?.Submenu ? "hidden md:block" : "text-black"}
                        >
                            {header?.Parent}
                        </h1>
                        {header?.Submenu && (
                            <h1 className="text-x hidden md:block">{">"}</h1>
                        )}
                        <h1 className="text-black">{header?.Submenu}</h1>
                    </div>
                    <ShoppingBasket onClick={()=>router.get(route('cart.index'))} className="hover:cursor-pointer"/>
                </div>
                <main className={cn("m-5 md:m-10",className)}>{children}</main>
            </div>
        </SidebarProvider>
    );
}
