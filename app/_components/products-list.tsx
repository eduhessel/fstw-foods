import { db } from "../_lib/prisma";
import ProductsItem from "./products-item";

export async function ProductsList(){
    const products = await db.product.findMany({
        where: {
            discountPercentage: {
                gt: 0,
            },
        },
        take: 10,
        include: {
            restaurant: {
                select: {
                    name: true,
                }
            },
        },
    });
    return(
        <div className={"flex overflow-x-scroll [&::-webkit-scrollbar]:hidden px-5 gap-4"}>
            {products.map((product) =>(
                <ProductsItem
                    key={product.id}
                    product={product}
                />
            ))}
        </div>
    )
}