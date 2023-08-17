import React from "react"
import Footer from "../components/Footer"
import Header from "../components/Header"
import MaterialUIHeader from "../components/MaterialUIHeader"
import MaterialUIFooter from "../components/MaterialUIFooter"
import { Outlet } from "react-router-dom";



export default function Root() {
    return (
        <div>
            <MaterialUIHeader />
            <div id="outlet">
                <Outlet />
            </div>
            <MaterialUIFooter />
        </div>
    )
}