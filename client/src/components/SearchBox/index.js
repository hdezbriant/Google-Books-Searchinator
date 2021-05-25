function SearchBox() {
  return (
    <div className="card bg-dark text-white shadow rounded">
      <div className="card-body">
        <h4 className="card-title">Search for a Book!</h4>
        <form className="d-flex flex-column">
          <div className="form-group">
            <label htmlFor="bookSearch">Book</label>
            <input
              type="text"
              className="form-control bg-dark border-secondary text-white shadow rounded"
              id="bookSearch"
            />
          </div>
          <button className="btn btn-secondary ml-auto shadow rounded px-4">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default SearchBox;
