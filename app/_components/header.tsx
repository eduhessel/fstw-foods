import Image from "next/image";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";

export default function Header(){
    return(
        <div className={"flex justify-between pt-6"}>
            <Image src={"/logo.svg"} alt={"Logo FSW Foods"} width={100} height={30}/>
            <Button
                size={"icon"}
                variant={"outline"}
                className={"border-none bg-transparent"}>
                <MenuIcon />
            </Button>
        </div>
    )
}