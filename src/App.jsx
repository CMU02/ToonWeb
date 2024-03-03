import { Children } from "react"
import { useEffect, useState } from "react"
import { createBrowserRouter, Route, RouterProvider } from "react-router-dom"
import LoadingScreen from "./components/Loading-screen"
import Toons from "./router/Toons"
import ToonInfo from "./router/ToonInfo"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Toons />,
  },
  {
    path: `/:id`,
    element: <ToonInfo />
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
