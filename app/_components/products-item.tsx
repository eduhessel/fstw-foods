import { Product } from "@prisma/client";
import Image from "next/image";

interface ProductItemProps{
    product: Product
};

export default function ProductsItem({product}: ProductItemProps){
    return(
        <div className={"space-y-2 min-w-[150px] w-[150px] h-[219px] gap-4"}>
            {/* IMAGEM */}
            <div className={"h-[150px] w-full relative"}>
                <Image
                    fill
                    src={product.imageUrl}
                    alt={product.name}
                    className={"object-cover rounded-lg shadow-md"}
                />
            </div>
            {/* TITULO, PREÇO E RESTAURANTE */}
            <div>
                <h2 className={"text-sm"}>
                    {product.name}
                </h2>
                <h3>
                    
                </h3>
            </div>
        </div>
    );
};