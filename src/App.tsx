// Components
import Navbar from "./components/Navbar";
import Topbar from "./components/Topbar";
import Bottombar from "./components/Bottombar";

// Pages
import Home from "./pages/Home";
import Search from "./pages/Search";

// Router
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

function App() {
  const Layout = () => {
    return (
      <div className="app">
        <Navbar />
        <Topbar />
        <main>
          <Outlet />
        </main>
        <Bottombar />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/search", element: <Search /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
