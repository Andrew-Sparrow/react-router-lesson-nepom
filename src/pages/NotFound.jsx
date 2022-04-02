import {Link} from 'react-router-dom'

function NotFound() {
  return (
    <div className="header-container">
      <h1>404. Page Not Found</h1>
      <Link style={{color: 'black'}} to="/">Go to Home page</Link>
    </div>
  );
}

export default NotFound;
