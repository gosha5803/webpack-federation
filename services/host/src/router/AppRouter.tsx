import { App } from "@/App";
import { FC, Suspense } from "react";
import { Route, Routes, createBrowserRouter } from "react-router-dom";
//@ts-ignore
import shopRoutes from 'shop/Router'
//@ts-ignore
import adminRoutes from 'admin/Router'
// import { LazyShopPage } from "../Pages/ShopPage.lazy";
// import { LazyAboutPage } from "../Pages/AboutPage.lazy";

// export var AppRouter:FC = () => {
//     return(
//         <Suspense fallback={'Loading...'}>
//             <Routes>
//                     {/* <Route path="/shop" element={<LazyShopPage/>}/> */}
//                     {/* <Route path="/about" element={<LazyAboutPage/>}/> */}
//             </Routes>
//         </Suspense>
//     )
// }

export var router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            ...shopRoutes,
            ...adminRoutes
        ]
    }
])