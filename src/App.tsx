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
import NotFound from "./pages/NotFound";

// Router
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useLocation,
  Navigate,
} from "react-router-dom";

const topbarComponents = new Map([
  ["search", <SearchBar />],
  ["collection", <Filters />],
]);

const code = new URLSearchParams(window.location.search).get("code");

function App() {
  const Layout = () => {
    const location = useLocation();

    if(location.pathname === "/collection") return <Navigate to="collection/playlists" replace/>

    return (
      <div className="app">
        <div className="top">
          <Navbar />
          <div className="content">
            <Topbar code={code}>
              {topbarComponents.get(location.pathname.split("/")[1]) !== null &&
                topbarComponents.get(location.pathname.split("/")[1])}
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
        { path: `/collection/playlists`, element: <Collection /> },
        { path: `/collection/podcasts`, element: <Collection /> },
        { path: `/collection/artists`, element: <Collection /> },
        { path: `/collection/albums`, element: <Collection /> },
        { path: "/download", element: <Download /> },
        { path: "*", element: <NotFound />}
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
