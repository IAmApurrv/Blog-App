import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="card not-found mt-5 text-center">
      <div className="card-body">
        <h1 className="text-danger">404 - Not Found</h1>
        <h2 className="lead">Oops! Looks like the page you are looking for does not exist.</h2>
        <p className="text-muted">The page you requested could not be found. Please check the URL or navigate back to the homepage.</p>
        <Link to="/" className="btn btn-primary" style={{ fontSize: '2rem' }}>Back to Homepage</Link>
      </div>
    </div>
  );
};

export default NotFound;
