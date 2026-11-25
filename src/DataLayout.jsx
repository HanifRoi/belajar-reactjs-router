import { Outlet } from "react-router";

export default function DataLayout(){
    return(
        <>
            <div>
                <h1>This is Header</h1>
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