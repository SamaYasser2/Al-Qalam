import React from 'react'
import Home from './Components/Home/Home'
import SubjectArabic from './Components/SubjectArabic/SubjectArabic'
import SubjectReligion from './Components/SubjectReligion/SubjectReligion'
import Selectedarabic from'./Components/Selectedarabic/Selectedarabic'
import Selectedreligion from './Components/Selectedreligion/Selectedreligion'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import LoginPage from './Components/LoginPage/LoginPage'
import SignUp from './Components/SignUp/SignUp'
import ClassroomArabic from './Components/ClassroomArabic/ClassroomArabic'


let routers=createBrowserRouter([
    {path:'',element:<Layout/>, children:[
        { index:true, element:<Home/>},
        { path:'SubjectArabic', element:<SubjectArabic/>},
        { path:'SubjectReligion', element:<SubjectReligion/>},
        { path:'Selectedarabic', element:<Selectedarabic/>},
        { path:'Selectedreligion', element:<Selectedreligion/>},
        { path:'LoginPage', element:<LoginPage/>},
        { path:'SignUp', element:<SignUp/>},
        { path:'ClassroomArabic', element:<ClassroomArabic/>},
        { path:'Home', element:<Home/>},
    ]}

])

export default function App() {
  return <>
<RouterProvider router={routers}></RouterProvider>
  </>
}
