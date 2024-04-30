import Banner01 from "./_components/banner01"
import {CategoryList} from "./_components/category-list"
import Header from "./_components/header"
import Search from "./_components/search"

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
    </>
  )
}