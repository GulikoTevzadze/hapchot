import { Outlet } from "react-router-dom"
import Navigation from "../components/Navigation"
import Footer from "../components/Footer"
import AminCursor from "../components/AnimCursor"
export default function RootLayout() {
  return (
    <>
      <AminCursor />
      <Navigation />
      <Outlet />
      <Footer />
    </>
  )
}