import * as React from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/Components/ui/button";
import { useState } from "react";
import { ShoppingCart } from "lucide-react";

interface ProductCardProps {
    image: string;
    name: string;
    price: string;
    onAddToCart: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
    image,
    name,
    price,
    onAddToCart,
}) => {
    const [showAlert, setShowAlert] = useState(false);

    const handleAddToCart = () => {
        onAddToCart();
        setShowAlert(true);
        setTimeout(() => setShowAlert(false), 2000); // Hide alert after 3 seconds
    };

    return (
        <Card>
            <CardHeader>
                <img
                    src={image}
                    alt={name}
                    className="rounded-t-lg object-cover w-full h-[200px]"
                />
            </CardHeader>
            <CardContent>
                <CardTitle>{name}</CardTitle>
                <CardDescription className="mt-2">{price}</CardDescription>

                {showAlert && (
                    <div
                        style={{
                            position: "fixed",
                            top: "10px",
                            left: "50%",
                            transform: "translateX(-50%)",
                            zIndex: 1000,
                            width: "400px",
                        }}
                    >
                       
                    </div>
                )}
                <div className="flex space-x-2 mt-4">
                    <Button>View Details</Button>

                    <Button onClick={handleAddToCart}>
                        <ShoppingCart size={16} strokeWidth={1.75} />
                    </Button>
                </div>
                <Button className="mt-4 w-full">Buy</Button>
            </CardContent>
        </Card>
    );
};

export default ProductCard;
