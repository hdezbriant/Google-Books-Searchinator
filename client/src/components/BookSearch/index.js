import axios from "axios";
import { useState } from "react";
import Hero from "../Hero";
import SearchForm from "../SearchForm";
import BookList from "../BookList";
import Wrapper from "../Wrapper";

function BookSearchPage() {
  const [search, setSearch] = useState("");
  const [books, setBooks] = useState([]);

  const handleSearchSubmit = async (e) => {
    try {
      e.preventDefault();
      const trimmedSearch = search.trim();
      if (!trimmedSearch) return;

      const url = `https://www.googleapis.com/books/v1/volumes?q=${trimmedSearch}`;
      const res = await axios.get(url);
      setBooks(res.data.items || []);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Wrapper>
      <Hero />
      <SearchForm
        search={search}
        onSearchChange={(e) => setSearch(e.target.value)}
        onSubmit={handleSearchSubmit}
      />
      <BookList books={books} />
    </Wrapper>
  );
}

export default BookSearchPage;
