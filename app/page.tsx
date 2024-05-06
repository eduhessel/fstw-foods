import { ChevronRightIcon } from "lucide-react"
import Banner01 from "./_components/banner01"
import {CategoryList} from "./_components/category-list"
import Header from "./_components/header"
import {ProductsList} from "./_components/products-list"
import Search from "./_components/search"
import { Button } from "./_components/ui/button"

export default function Home(){
  return(
    <>
        <div className={"pt-6 px-5"}>
            <Header/>
        </div>
        <div className={"px-5 pt-6"}>
            <Search/>
        </div>
        <div className={"px-5 pt-6"}>
            <CategoryList/>
        </div>
        <div className={"px-5 pt-6"}>
            <Banner01/>
        </div>
        <div className={"pt-6 space-y-4"}>
            <div className={"px-5 flex justify-between items-center"}>
                <h2 className={"font-semibold"}>Pedidos Recomendados</h2>
                <Button variant={"ghost"} className={"text-primary p-0 hover:bg-transparent h-fit"}>
                    Ver todos
                    <ChevronRightIcon size={16}/>
                </Button>
            </div>
            <ProductsList/>
        </div>
    </>
  )
}