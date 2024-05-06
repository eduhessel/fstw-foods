import { Prisma } from "@prisma/client";
import ProductsItem from "./products-item";

interface ProductListProps {
    products: Prisma.ProductGetPayload<{
        include: {
            restaurant: {
                select: {
                    name: true
                };
            };
        };
    }>[];
}

export async function ProductsList({ products }: ProductListProps) {
    return (
        <div className="flex overflow-x-scroll px-5 gap-4">
            {products.map((product) => (
                <ProductsItem
                    key={product.id}
                    product={product}
                />
            ))}
        </div>
    );
}
