import * as React from "react";
import {
    Wallet2,
    User2,
    LayoutDashboard,
    PackageCheckIcon,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
} from "@/components/ui/sidebar";

import { faker } from "@faker-js/faker";
import { usePage } from "@inertiajs/react";
import { User } from "@/types";
import { Button } from "./ui/button";
import { router } from "@inertiajs/react";

// This is sample data.
const data = {
    nav: {
        Dashboard: {
            name: "Dasboard",
            url: route("admin.dashboard"),
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
            url: route("wallet.index"),
            icon: Wallet2,
        },
        Transaction: {
            title: "Transaksi",
            url: "#",
            icon: PackageCheckIcon,
            items: [
                {
                    title: "Sedang Berlangsung",
                    url: route("transaction.index"),
                },
                {
                    title: "Selesai",
                    url: route("transaction.riwayat"),
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
};

export default function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    const UserSession: User = usePage().props.auth.user;
    return (
        <Sidebar className="" collapsible="icon" {...props}>
            <SidebarHeader>
                <div className="flex items-center space-x-4 mr-2">
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
            <SidebarContent className="flex flex-col py-5">
                <NavProjects projects={[data.nav.Dashboard]} />
                {/* <NavMain items={[data.nav.Transaction]} /> */}
                <NavMain items={[data.nav.Profile]} />
            </SidebarContent>

            <SidebarFooter className="mb-2">
                {UserSession ? (
                    <div className="flex items-center space-x-4 justify-starts mr-2">
                        <img
                            className="max-h-10 rounded-full"
                            src={faker.image.avatar()}
                            alt=""
                        />
                        <div>
                            <h1 className="font-semibold">
                                {UserSession.name}
                            </h1>
                            <h1 className="text-xs">{UserSession.email}</h1>
                        </div>
                    </div>
                ) : (
                    <Button
                        className="bg-black font-bold"
                        onClick={() => router.get(route("login"))}
                    >
                        Login
                    </Button>
                )}
            </SidebarFooter>
        </Sidebar>
    );
}
