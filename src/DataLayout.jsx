import { Link, NavLink, Outlet } from "react-router";
import "./data.css";

export default function DataLayout(){
    return(
        <>
            <div>
                <h1>This is Header</h1>
            </div>
            {/* <div>
                <ul>
                    <li><a href="/data/products">Product</a></li>
                    <li><a href="/data/sellers">Seller</a></li>
                    <li><a href="/data/customers">Customers</a></li>
                </ul>
            </div> Tidak bagus karena bakal mereload ulang semua */}

            {/* <div>
                <ul>
                    <li><Link to={{ 
                        pathname: "/data/products",
                        search: "?category=shoes",
                        hash: "#top"
                     }}>Product</Link></li>
                    <li><Link to="/data/sellers">Seller</Link></li>
                    <li><Link to="/data/customers">Customer</Link></li> // Lebih bagus tanpa reload 
                </ul>
            </div> */}
            <div>
                <ul>
                    <li><NavLink to={{ 
                        pathname: "/data/products",
                        search: "?category=shoes",
                        hash: "#top"
                     }}>Product</NavLink></li>
                     <li><NavLink to="/data/sellers">Seller</NavLink></li>
                     <li><NavLink to="/data/customers">Customer</NavLink></li>
                </ul>
            </div>
            <div>
                <Outlet/>
            </div>
            <div>
                <h2>This is Footer</h2>
            </div>
        </>
    )
}