import BookCard from "../BookCard";
import Section from "../Section";
import { items as books } from "../../testBookData.json";

function BookList() {
  return (
    <Section title="Results">
      {books.map((book) => (
        <BookCard book={book} />
      ))}
    </Section>
  );
}

export default BookList;
