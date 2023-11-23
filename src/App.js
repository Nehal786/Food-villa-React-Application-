import React  from "react"
import  ReactDOM from "react-dom/client"
import Header from "./components/Title"
import Body from "./components/Body"
import Footer from "./components/Footer"
import About from "./components/About"
import Error from "./components/Error"
import { createBrowserRouter, RouterProvider,Outlet} from "react-router-dom"
import Contact from "./components/Contact"
import RestaurantMenu from "./components/RestaurantMenu"
import Registration from "./components/Registrater"





const AppLayout = () => {
    return (
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    )
}

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/ >,
        errorElement: <Error/>,
        children : [
            {
                path:"About",
                element:<About/ >
            },
            {
                path :" Contact",
                element: <Contact/>
            },
            {
                path:"/",
                element : <Body/>
            },
            {
                path : "/restaurant/:id",
                element: <RestaurantMenu/>
            },
            {
                path:"register",
                element:<Registration/>
            }


        ]
        
    },
   
])

 
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<RouterProvider router = {appRouter}/>);