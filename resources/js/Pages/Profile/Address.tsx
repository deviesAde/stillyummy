import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
    CardDescription,
    CardFooter,
} from "@/Components/ui/card";
import { Button } from "@/Components/ui/button";
import { faker } from "@faker-js/faker";
import { Plus } from "lucide-react";
import { useState } from "react";
import Banner_card from "@/Components/Profile/BannerCard";
import Address_card from "@/Components/Profile/AddressCard";

const Addres_Person = Array.from({ length: 3 }).map((id, ind) => {
    faker.seed(ind);
    return {
        id: ind,
        Name: faker.person.fullName(),
        Phone: faker.phone.number(),
        Address: faker.lorem.paragraphs(),
        default: false,
    };
});

Addres_Person[1].default = true;

export default function Address() {
    const [AddressState, SetAddress] = useState(Addres_Person);
    const HandleChangeDefault = (id) => {
        const UpdateDefault = [...AddressState].map((data) => {
            if (data.id === id) {
                data.default = true;
            } else {
                data.default = false;
            }
            return data;
        });
        SetAddress(UpdateDefault);
    };
    return (
        <div className="mx-10 space-y-10 flex flex-col">
            <Banner_card Data={AddressState.find((data) => data.default)} />
            <div className="flex justify-end">
                <Button className="w-fit px-8">
                    <Plus />Address
                </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                {AddressState.filter((data) => !data.default).map(
                    (data, index) => (
                        <Address_card
                            Data={data}
                            key={index}
                            onClick={() => HandleChangeDefault(data.id)}
                        />
                    )
                )}
            </div>
        </div>
    );
}
