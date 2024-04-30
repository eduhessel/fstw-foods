import Image from "next/image"
export default function Banner01(){
    return(
        <Image
            src={"/promo-banner01.svg"}
            alt={"Banner até 30% de desconto em pizzas"}
            width={0}
            height={0}
            className={"h-auto w-full object-contain"}
            sizes={"100vw"}
            quality={100}
        />
    )
}