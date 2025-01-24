import { usePage } from "@inertiajs/react";
import { faker } from "@faker-js/faker";

export default function Biodata() {
    const { name, email, phone, role } = usePage().props.auth.user;
    return (
        <div className=" bg-red-600 p-5">
            <div className="flex">
                <img src={faker.image.avatar()} alt="" />
                <h1>{name}</h1>
            </div>
            <div>
                <div>
                    <h2>Email</h2>
                    <h1>{email}</h1>
                </div>
                <div>
                    <h2>Phone Number</h2>
                    <h1>{phone}</h1>
                </div>
            </div>
        </div>
    );
}
