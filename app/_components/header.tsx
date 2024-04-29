import Image from "next/image";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";

export default function Header(){
    <div className={"flex justify-between pt-6"}>
        <Image src={"/logo.png"} alt={"Logo FSW Foods"}/>
        <Button
            size={"icon"}
            variant={"outline"}
            className={"border-none bg-transparent"}>
            <MenuIcon />
        </Button>
    </div>
}