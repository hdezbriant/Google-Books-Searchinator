import Hero from "../Hero";
import SearchBox from "../SearchBox";
import BookList from "../BookList";
import Wrapper from "../Wrapper";

function BookSearchPage() {
  return (
    <Wrapper>
      <Hero />
      <SearchBox />
      <BookList />
    </Wrapper>
  );
}

export default BookSearchPage;
