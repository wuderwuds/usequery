import { Outlet } from "react-router-dom"
import { MemoFooter } from "./Footer"
import { MemoHeader } from "./Header"

export const Layout = () => {
  return (
    <div className="container py-5">
      <MemoHeader />
      <main className="py-5">
        <Outlet />
      </main>
      <MemoFooter />
    </div>
  )
}
