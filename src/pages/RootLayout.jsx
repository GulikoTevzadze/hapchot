import { Outlet } from "react-router-dom"
import Navigation from "../components/Navigation"
import Footer from "../components/Footer"
export default function RootLayout() {
  return (
    <>
      <Navigation />
      <Outlet />
      <Footer />
    </>
  )
}