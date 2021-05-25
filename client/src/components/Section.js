function Section({ title, children }) {
  return (
    <div className="card bg-dark text-white shadow rounded">
      <div className="card-body">
        <h4 className="card-title">{title}</h4>
        {children}
      </div>
    </div>
  );
}

export default Section;
