//Styles
import "./styles/App.scss";

// Components
import Navbar from "./components/Navbar";
import Topbar from "./components/Topbar";
import Bottombar from "./components/Footer";

// Pages
import Home from "./pages/Home";
import Search from "./pages/Search";

// Router
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

function App() {
  const Layout = () => {
    return (
      <div className="app">
        <div className="top">
          <Navbar />
          <div className="content">
            <Topbar />
            <main>
              <Outlet />
            </main>
          </div>
        </div>
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
