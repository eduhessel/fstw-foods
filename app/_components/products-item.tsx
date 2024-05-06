import { Prisma } from "@prisma/client";
import Image from "next/image";
import { calculateProductTotalPrice, formatCurrency } from "../_helpers/price";
import { ArrowDownIcon } from "lucide-react";

interface ProductItemProps{
    product: Prisma.ProductGetPayload<{
        include: {
            restaurant: {
                select: {
                    name: true
                };
            };
        };
    }>;
};

export default function ProductsItem({product}: ProductItemProps){
    return(
        <div className={"space-y-2 min-w-[150px] w-[150px] gap-4"}>
            {/* IMAGEM */}
            <div className={"h-[150px] w-full relative"}>
                <Image
                    fill
                    src={product.imageUrl}
                    alt={product.name}
                    className={"object-cover rounded-lg shadow-md"}
                />
                {product.discountPercentage && (
                    <div className={"absolute gap-[2px] top-2 left-2 bg-primary py-[2px] px-2 text-white rounded-full flex items-center"}>
                        <ArrowDownIcon size={12}/>
                        <span className={"font-semibold text-xs"}>{product.discountPercentage}%</span>
                    </div>
                )}
            </div>
            {/* TITULO, PREÇO E RESTAURANTE */}
            <div>
                <h2 className={"text-sm truncate"}>
                    {product.name}
                </h2>
                <div className={"flex gap-1 items-center"}>
                    <h3 className={"font-semibold"}>
                        {formatCurrency(calculateProductTotalPrice(product))}
                    </h3>
                    {product.discountPercentage > 0 && (
                        <span className={"line-through text-muted-foreground text-xs"}>
                            {formatCurrency(Number(product.price))}
                        </span>
                    )}
                </div>
                {/* NOME DA LOJA */}
                <span className={"text-xs text-muted-foreground truncate block"}>
                    {product.restaurant.name}
                </span>
            </div>
        </div>
    );
};