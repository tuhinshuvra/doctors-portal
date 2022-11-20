import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import About from "../Pages/About/About";
import Appointment from "../Pages/Appointment/Appointment/Appointment";
import AddDoctor from "../Pages/Dashboard/AddDoctor/AddDoctor";
import AllUsers from "../Pages/Dashboard/Dashboard/AllUsers/AllUsers";
import ManageDoctors from "../Pages/Dashboard/ManageDoctors/ManageDoctors";
import MyAppointment from "../Pages/Dashboard/MyAppointment/MyAppointment";
import Home from "../Pages/Home/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import AdminRoute from "./AdminRoutes";
import PrivateRoute from "./PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");

const route = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>, children: ([
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/appointment',
                element: <Appointment></Appointment>
            },

            {
                path: '/reviews',
            },
            {
                path: '/contact',
            },
        ])
    },
    {
        path: '/dashboard',
        element: <PrivateRoute> <DashboardLayout></DashboardLayout>  </PrivateRoute>,
        children: ([
            {
                path: '/dashboard',
                element: <MyAppointment></MyAppointment>
            },
            {
                path: '/dashboard/allusers',
                element: <AdminRoute> <AllUsers></AllUsers></AdminRoute>
            },
            {
                path: '/dashboard/adddoctor',
                element: <AdminRoute> <AddDoctor></AddDoctor> </AdminRoute>
            },
            {
                path: '/dashboard/managedoctors',
                element: <AdminRoute>  <ManageDoctors></ManageDoctors>  </AdminRoute>
            },
        ])
    },
])

export default route;