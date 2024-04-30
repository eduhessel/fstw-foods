import React from "react";
import { Category } from "@prisma/client";
import Image from "next/image";

interface CategoryItemProps {
    category: Category;
}

export default function CategoryItem({category}: CategoryItemProps){
    return(
        <React.Fragment>
            <Image
              src={category.imageUrl}
              alt={category.name}
              width={30}
              height={30}
            />
            <span className={"font-semibold text-sm"}>{category.name}</span>
        </React.Fragment>
    );
};