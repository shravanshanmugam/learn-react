import React from "react"
import Header from "../components/materialui/Header"
import Footer from "../components/materialui/Footer"
import { Outlet } from "react-router-dom";



export default function Root() {
    return (
        <div>
            <Header />
            <div id="outlet">
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}