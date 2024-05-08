import { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import { LazyShopPage } from "../Pages/ShopPage.lazy";
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
        path: '/shop',
        element: <App/>,
        children: [
            {
                path: '/shop/',
                element: <Suspense fallback={'LOading...'}><LazyShopPage/></Suspense>
            }
        ]
    }
]

export var router = createBrowserRouter(routes)
export default routes