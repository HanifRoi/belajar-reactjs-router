import { useParams } from "react-router"

export default function ProductDetail(){
    const params = useParams();//untuk mengambil ID
    return(
        <div>
            <h1>Product Detail {params.id}</h1>
            <p>This is a product detail</p>
        </div>
    )
}