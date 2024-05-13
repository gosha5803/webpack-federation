import { Suspense, FC } from "react";
import { Route, Routes, createBrowserRouter } from "react-router-dom";
import { LazyAboutPage } from "../Pages/AboutPage.lazy";
import { App } from "@/App";
import { LazySecondPage } from "@/Pages/SecondPage/SecondPage.async";

export var AppRouter:FC = () => {
    return(
        <Suspense fallback={'Loading...'}>
            <Routes>
                <Route path="about" element={<LazyAboutPage/>}/>
                <Route path="second" element={<LazySecondPage/>}/>
            </Routes>
        </Suspense>
    )
}

// var routes = [
//     {
//         path: '/',
//         element: <App/>,
//         children: [
//             {
//                 path: '/About',
//                 element: <Suspense fallback={'LOading...'}><LazyAboutPage/></Suspense>
//             }
//         ]
//     }
// ]

// export var router = createBrowserRouter(routes)
export default AppRouter