import { Suspense, FC } from "react";
import { Route, Routes, createBrowserRouter } from "react-router-dom";
import { LazyShopPage } from "../Pages/ShopPage.lazy";
import { LazySecondPage } from "@/Pages/SeconPage/LazySecondPage";

export var AppRouter:FC = () => {
    return(
        <Suspense fallback={'Loading...'}>
            <Routes>
                <Route path="main" element={<LazyShopPage/>}/>
                <Route path="second" element={<LazySecondPage/>}/>
            </Routes>
        </Suspense>
    )
}

// var routes = [
//     {
//         path: '/shop',
//         element: <App/>,
//         children: [
//             {
//                 path: '/shop/',
//                 element: <Suspense fallback={'LOading...'}><LazyShopPage/></Suspense>
//             }
//         ]
//     }
// ]