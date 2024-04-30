import React from "react";
import { Category } from "@prisma/client";
import Image from "next/image";

interface CategoryItemProps {
    category: Category;
}

export default function CategoryItem({category}: CategoryItemProps){
    return(
        <div className="flex items-center gap-3 py-3 px-4 bg-white cursor-pointer shadow-md rounded-full w-full">
            <Image
              src={category.imageUrl}
              alt={category.name}
              width={30}
              height={30}
            />
            <span className={"font-semibold text-sm"}>{category.name}</span>
        </div>
    );
};