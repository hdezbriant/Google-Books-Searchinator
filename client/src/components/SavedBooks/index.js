import BookList from "../BookList";
import Hero from "../Hero";
import Wrapper from "../Wrapper";

function SavedBooksPage() {
  
  return (
    <Wrapper>
      <Hero />
      <BookList books={[]}/>
    </Wrapper>
  );
}

export default SavedBooksPage;
