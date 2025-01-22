import * as React from "react";
import {
    Wallet2,
    Bot,
    Frame,
    Map,
    PieChart,
    Settings2,
    User2,
    Store,
    LayoutDashboard,
    PackageCheckIcon
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarRail,
} from "@/components/ui/sidebar";

import { faker, ro } from "@faker-js/faker";
import { usePage } from "@inertiajs/react";

// This is sample data.
const data = {
    user: {
        name: "shadcn",
        email: "m@example.com",
        avatar: "/avatars/shadcn.jpg",
    },
    nav: {
        Dashboard: {
            name: "Dasboard",
            url: route("dashboard"),
            icon: LayoutDashboard,
            isActive: true,
            items: [
                {
                    title: "History",
                    url: "#",
                },
                {
                    title: "Starred",
                    url: "#",
                },
                {
                    title: "Settings",
                    url: "#",
                },
            ],
        },
        Wallet: {
            name: "Dompetku",
            url: "#",
            icon: Wallet2,
            isActive: true,
            items: [
                {
                    title: "History",
                    url: "#",
                },
                {
                    title: "Starred",
                    url: "#",
                },
                {
                    title: "Settings",
                    url: "#",
                },
            ],
        },
        Cart: {
            title: "Models",
            url: "#",
            icon: Bot,
            items: [
                {
                    title: "Genesis",
                    url: "#",
                },
                {
                    title: "Explorer",
                    url: "#",
                },
                {
                    title: "Quantum",
                    url: "#",
                },
            ],
        },
        Merchant_Setting: {
            title: "Merchant",
            url: "#",
            icon: Store,
            items: [
                {
                    title: "Menunggu Pembayaran",
                    url: "#",
                },
                {
                    title: "Sedang Berlangsung",
                    url: "#",
                },
                {
                    title: "Dalam Pengiriman",
                    url: "#",
                },
                {
                    title: "Riwayat Transaksi",
                    url: "#",
                },
            ],
        },
        Transaction: {
            title: "Transaksi",
            url: "#",
            icon: PackageCheckIcon,
            items: [
                {
                    title: "Menunggu Pembayaran",
                    url: "#",
                },
                {
                    title: "Sedang Berlangsung",
                    url: "#",
                },
                {
                    title: "Dalam Pengiriman",
                    url: "#",
                },
                {
                    title: "Riwayat Transaksi",
                    url: "#",
                },
            ],
        },
        Profile: {
            title: "Profile",
            url: "#",
            icon: User2,
            items: [
                {
                    title: "Profile Information",
                    url: route("profile.index"),
                },
                {
                    title: "Profile Setting",
                    url: route("profilesetting"),
                },
            ],
        },
    },

    projects: [
        {
            name: "Design Engineering",
            url: "#",
            icon: Frame,
        },
        {
            name: "Sales & Marketing",
            url: "#",
            icon: PieChart,
        },
        {
            name: "Travel",
            url: "#",
            icon: Map,
        },
    ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    const { name, email, role } = usePage().props.auth.user;
    return (
        <Sidebar className="" collapsible="icon" {...props}>
            <SidebarHeader>
                <div className="flex items-center justify-between mr-2">
                    <img
                        className="max-h-10 rounded-full"
                        src={faker.image.avatar()}
                        alt=""
                    />
                    <div>
                        <h1 className="font-semibold">StillYummy</h1>
                        <h1 className="text-xs">
                            Modern Solution For Food Waste
                        </h1>
                    </div>
                </div>
            </SidebarHeader>
            <SidebarContent className="flex flex-col">
                <NavProjects projects={[data.nav.Dashboard]} />
                <NavMain items={[data.nav.Transaction]} />
                <NavProjects projects={[data.nav.Wallet]} />
                {role === "Merchant" && (
                    <NavMain items={[data.nav.Merchant_Setting]} />
                )}
                <NavMain items={[data.nav.Profile]} />
            </SidebarContent>
            <SidebarFooter className="mb-2">
                <div className="flex items-center space-x-4 justify-starts mr-2">
                    <img
                        className="max-h-10 rounded-full"
                        src={faker.image.avatar()}
                        alt=""
                    />
                    <div>
                        <h1 className="font-semibold">{name}</h1>
                        <h1 className="text-xs">{email}</h1>
                    </div>
                </div>
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
    );
}
