import { App } from "@/App";
import { FC, Suspense } from "react";
import { Route, Routes, createBrowserRouter } from "react-router-dom";
//@ts-ignore
// import ShopApp from 'shop/Application'
//@ts-ignore
// import AdminApp from 'admin/Application'

export var AppRouter:FC = () => {
    return(
        <Suspense fallback={'Loading...'}>
            <Routes>
                    {/* <Route path="/admin/*" element={<AdminApp/>}/> */}
                    {/* <Route path="/shop/*" element={<ShopApp/>}/> */}
            </Routes>
        </Suspense>
    )
}