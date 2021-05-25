import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import axios from "axios";
import BookSearchPage from "./components/BookSearch";
import SavedBooksPage from "./components/SavedBooks";
import { useEffect } from "react";
import NavBar from "./components/NavBar";

function App() {
  // =============== TEST FETCH REQUEST =============
  // useEffect(() => {
  //   axios
  //     .get("https://www.googleapis.com/books/v1/volumes?q=doorsofperception")
  //     .then(console.log)
  //     .catch(console.log);
  // });
  // ============== TEST FETCH REQUEST ==============
  return (
    <div>
      <img
        src="https://64.media.tumblr.com/23a38114e102323b5a475324e2e4972c/tumblr_inline_pg39xyDjM01u2s4s8_500.gifv"
        alt="logo"
      />
      <Router>
        <NavBar />
          <Switch>
            <Route exact path="/">
              <BookSearchPage />
            </Route>
            <Route path="/saved">
              <SavedBooksPage />
            </Route>
            <Redirect to="/" />
          </Switch>
      </Router>
    </div>
  );
}

export default App;
