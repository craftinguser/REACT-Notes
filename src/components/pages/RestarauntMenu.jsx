import { useEffect } from "react"


export const RestarauntMenu =() =>{

useEffect(()=>{
    fetchMenu();
}, [])

const fetchMenu = async()=>{
    const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.65200&lng=77.16630&restaurantId=655882&catalog_qa=undefined&submitAction=ENTER")
const json = await data.json();
console.log("Api response of menu", json);

}

    return (
        <div className="menu">
            <h1>Name of the Restaraunt</h1>

            <h2>Menu</h2>
            <ul>
                <li>Biryani</li>
                <li>Burgers</li>
                <li>Diet Coke</li>
            </ul>
        </div>
    )
}