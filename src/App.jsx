import { useEffect, useState } from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { styled } from "styled-components"
import LoadingScreen from "./components/Loading-screen"
import Toons from "./router/Toons"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Toons />
  }
])


export default function App() {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    async function init() {
      await new Promise((r) => setTimeout(r, 3000))
      setLoading(false)
    }
    init()
  }, [])
  return (
    <div>
      {isLoading ? <LoadingScreen /> : <RouterProvider router={router} />}
    </div>
  )
}
