function BookCard({ book }) {
  const { title, authors, description, imageLinks, infoLink } = book.volumeInfo;
  console.log(imageLinks);
  return (
    <div className="card mb-3 bg-dark">
      <div className="row no-gutters">
        <div className="col-md-4">
          <img
            src={imageLinks.thumbnail}
            alt={`thumbnail of ${title}`}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">
              {title}
            </h5>
            <p className="card-text">{authors.join(", ")}</p>
            <p className="card-text">{description}</p>
            <div className="d-flex justify-content-end">
              <a
                className="btn btn-warning mx-1 shadow rounded px-4 d-block"
                href={infoLink}
                rel="noopener noreferrer"
                target="_blank"
              >
                View
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookCard;
