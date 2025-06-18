import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import ItemList from "./components/ItemList";
import { useLocation } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";
import Favorites from "./components/Favorites";
import Home from "./components/Home";
import Details from "./components/Details";

function App() {
  const [search, setSearch] = useState("pizza");
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [favoritesList, setFavoritesList] = useState([]);

  async function handle(event) {
    setLoading(true); // Set loading to true when the request starts
    setItems([]);
    try {
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${search}`
      );
      const data = await res.json();

      setItems(data.data.recipes || []); // Assuming the API returns an array of meals
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false); // Set loading to false when the request ends
    }
  }
  // async function handle_view_recipes(event) {
  //   setLoading(true); // Set loading to true when the request starts

  //   try {
  //     const res = await fetch(
  //       `https://forkify-api.herokuapp.com/api/v2/recipes/664c8f193e7aa067e94e897b?`
  //     );
  //     const data = await res.json();
  //     console.log(data);

  //     setItems(data.data.recipes || []); // Assuming the API returns an array of meals
  //   } catch (e) {
  //     console.log(e);
  //   } finally {
  //     setLoading(false); // Set loading to false when the request ends
  //   }
  // }
  useEffect(() => {
    handle();
  }, [search]);

  const location = useLocation();
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar search={search} setSearch={setSearch} handle={handle} />,
              <ItemList
                search={search}
                loading={loading}
                items={items}
                setFavoritesList={setFavoritesList}
                favoritesList={favoritesList}
              />
            </>
          }
        />
        <Route
          path="/favorites"
          element={<Favorites favoritesList={favoritesList} setFavoritesList={setFavoritesList}/>}
        />
        <Route path="/recipe-item/:id" element={<Details />} />
      </Routes>
    </>
  );
}

export default App;
