import { Route, Routes } from "react-router-dom"
import { router } from "../hooks/useRoute"
import { ReactNode } from "react"
interface RouteType {
    id:number,
    path:string,
    element:ReactNode
}
export const RouterPath = () => {
    
return (
    <Routes>
        {router.map((item:RouteType) => <Route key={item.id} path={item.path} element={item.element} />)}
    </Routes>
)
}
