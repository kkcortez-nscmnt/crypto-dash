import { Link } from "react-router"

const NotFoundPage = () => {
  return (
        <div className="about">
      <h1>ERROR 404</h1>
      <p>
        404 NOT FOUND.
      </p>
      <p>
        Oops! The page you are looking for does not exist.
      </p>
      <Link to="/">Go back Home</Link>
    </div>
  )
}

export default NotFoundPage