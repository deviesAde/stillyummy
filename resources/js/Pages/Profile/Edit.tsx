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
        <AuthenticatedLayout header={{Parrent : "Profile",Submenu : "Profile Setting"}}>
            <Head title="Profile Setting" />
            <div className="my-10 mx-auto px-5 md:mt-10 w-fit space-y-6 sm:px-6 lg:px-8">
                <div className="flex flex-col space-y-5 md:space-y-0 md:flex-row md:space-x-6">
                    <div className="bg-white p-4 shadow rounded-lg sm:p-8 flex-1">
                        <UpdateProfileInformationForm
                            mustVerifyEmail={mustVerifyEmail}
                            status={status}
                            className="max-w-xl"
                        />
                    </div>
                    <div className="bg-white p-4 shadow rounded-lg sm:p-8 flex-1">
                        <UpdatePasswordForm className="max-w-xl" />
                    </div>
                </div>

                <div className="bg-white p-4 shadow rounded-lg sm:p-8">
                    <DeleteUserForm className="max-w-xl" />
                </div>
                <DangerButton className="w-full" onClick={()=> router.post(route('logout'))}>
                    <h1 className="text-center w-full">Log Out</h1>
                </DangerButton>
            </div>
        </AuthenticatedLayout>
    );
}
