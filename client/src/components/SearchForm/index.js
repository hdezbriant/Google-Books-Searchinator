import Section from "../Section";

function SearchForm({ search, onSearchChange, onSubmit }) {
  return (
    <Section title="Search for a Book!">
      <form className="d-flex flex-column" onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="bookSearch">Book</label>
          <input
            type="text"
            className="form-control bg-dark border-secondary text-white shadow rounded"
            id="bookSearch"
            value={search}
            onChange={onSearchChange}
          />
        </div>
        <button className="btn btn-secondary ml-auto shadow rounded px-4">
          Submit
        </button>
      </form>
    </Section>
  );
}

export default SearchForm;
