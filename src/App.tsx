//Styles
import "./styles/App.scss";

// Components
import Navbar from "./components/Navbar";
import Topbar from "./components/Topbar";
import Footer from "./components/Footer";
// ===> Topbar Components
import SearchBar from "./components/Topbar/SearchBar";
import Filters from "./components/Topbar/Filters";

// Pages
import Home from "./pages/Home";
import Search from "./pages/Search";
import Collection from "./pages/Collection";
import Download from "./pages/Download";

// Router
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useLocation,
} from "react-router-dom";

const topbarComponents = new Map([
  ["/search", <SearchBar />],
  ["/collection", <Filters />],
]);

function App() {
  const Layout = () => {
    const location = useLocation();
    return (
      <div className="app">
        <div className="top">
          <Navbar />
          <div className="content">
            <Topbar>
              {topbarComponents.get(location.pathname) !== null &&
                topbarComponents.get(location.pathname)}
            </Topbar>
            <main>
              <Outlet />
            </main>
          </div>
        </div>
        <Footer />
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
        { path: "/collection", element: <Collection /> },
        { path: "/download", element: <Download /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
