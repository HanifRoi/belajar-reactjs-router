import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router";

export default function ProductSearch(){
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    const [search,setSearch] = useState(searchParams.get("search") | "");

    function handleSearch(){
        if(search){
            navigate({
                pathname: "/data/products/search",
                search: `?search=${search}`
            });
        }
    }

    function handleChange(e){
        setSearch(e.target.value)
    }

    return(
        <div>
            <h1>Search Product</h1>
            <input type="text" value={search} onChange={handleChange}/>
            <button onClick={handleSearch}>Search</button>
            <p>
                Kamu mencari: {searchParams.get("search")}
            </p>
        </div>
    )
}