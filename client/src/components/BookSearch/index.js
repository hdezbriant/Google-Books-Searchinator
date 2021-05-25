import Hero from "../Hero";
import SearchForm from "../SearchForm";
import BookList from "../BookList";
import Wrapper from "../Wrapper";

function BookSearchPage() {
  return (
    <Wrapper>
      <Hero />
      <SearchForm />
      <BookList />
    </Wrapper>
  );
}

export default BookSearchPage;
