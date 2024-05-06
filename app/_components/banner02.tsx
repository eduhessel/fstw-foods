import Image from "next/image"
export default function Banner02(){
    return(
        <Image
            src={"/promo-banner02.svg"}
            alt={"Banner a partir de R$17,90 em lanches"}
            width={0}
            height={0}
            className={"h-auto w-full object-contain"}
            sizes={"100vw"}
            quality={100}
        />
    )
}