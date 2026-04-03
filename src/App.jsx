// import { Navbar } from "./components/Navbar";
// import Mytodos from "./components/Mytodos";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Aboutpage from "./pages/Aboutpage";
import { Taskpage } from "./pages/Taskpage";
import Registration from "./components/Registration";
import PrivateRoutes from "./routes/PrivateRoutes";
import Errorpages from "./pages/Errorpages";
import { AppcontextProvider } from "./context/Mycontext";

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <PrivateRoutes>
          <Homepage />
        </PrivateRoutes>
      )
    },
    {
      path: '/about',
      element: (
        <PrivateRoutes>
          <Aboutpage />
        </PrivateRoutes>
      )
    },
    {
      path: '/Taskpage',
      element: (
        <PrivateRoutes>
          <Taskpage />
        </PrivateRoutes>
      )
    },
    {
      path: '/Registration',
      element: <Registration />
    },
    {
      path: "*",
      element: <Errorpages />
    },
  ]);

  return (
    <AppcontextProvider>   {/* ✅ FIXED */}
      <RouterProvider router={router} />
    </AppcontextProvider>
  );
}

export default App;