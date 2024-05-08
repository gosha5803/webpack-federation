import { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import { LazyAboutPage } from "../Pages/AboutPage.lazy";
import { App } from "@/App";

// export var AppRouter:FC = () => {
//     return(
//         <Suspense fallback={'Loading...'}>
//             <Routes>
//                     <Route path="/shop" element={<LazyShopPage/>}/>
//             </Routes>
//         </Suspense>
//     )
// }

var routes = [
    {
        path: '/',
        element: <App/>,
        children: [
            {
                path: '/About',
                element: <Suspense fallback={'LOading...'}><LazyAboutPage/></Suspense>
            }
        ]
    }
]

export var router = createBrowserRouter(routes)
export default routes