import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
// import axios from "axios";
import BookSearchPage from "./components/BookSearch";
import SavedBooksPage from "./components/SavedBooks";
// import { useEffect } from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

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
    <div className="bg-dark">
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
        <Footer />
      </Router>
    </div>
  );
}

export default App;
