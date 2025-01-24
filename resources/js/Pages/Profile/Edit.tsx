import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { Head } from "@inertiajs/react";
import DeleteUserForm from "./Partials/DeleteUserForm";
import UpdatePasswordForm from "./Partials/UpdatePasswordForm";
import UpdateProfileInformationForm from "./Partials/UpdateProfileInformationForm";
import DangerButton from "@/Components/DangerButton";
import { router } from "@inertiajs/react";
export default function Edit({
    mustVerifyEmail,
    status,
}: PageProps<{ mustVerifyEmail: boolean; status?: string }>) {
    return (
        <AuthenticatedLayout
            header={{ Parrent: "Profile", Submenu: "Profile Setting" }}
        >
            <Head title="Profile Setting" />
            <div className="flex flex-col space-y-5 md:space-y-0 md:flex-row md:space-x-6">
                <UpdateProfileInformationForm
                    mustVerifyEmail={mustVerifyEmail}
                    status={status}
                    className="min-w-xl bg-white p-4 shadow rounded-lg sm:p-8 flex-1"
                />
                <UpdatePasswordForm className="w-fit bg-white p-4 shadow rounded-lg sm:p-8 flex-1" />
            </div>
            <DeleteUserForm className="min-w-xl bg-white p-4 shadow rounded-lg sm:p-8" />
            <DangerButton
                className="w-full"
                onClick={() => router.post(route("logout"))}
            >
                <h1 className="text-center w-full">Log Out</h1>
            </DangerButton>
            {/* </div> */}
        </AuthenticatedLayout>
    );
}
