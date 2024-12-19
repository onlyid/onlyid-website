import React from "react"
import Banner from "../components/user-landing/Banner"
import Guide from "../components/user-landing/Guide"
import Download from "../components/user-landing/Download"
import Footer from "@theme/Footer"

export default function () {
    return (
        <div>
            <Banner />
            <Guide />
            <Download />
            <Footer />
        </div>
    )
}
