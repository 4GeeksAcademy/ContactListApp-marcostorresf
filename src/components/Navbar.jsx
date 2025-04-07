import { Link } from "react-router-dom";

export const Navbar = () => {

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">CONTACTS LIST</span>
				</Link>
				<div className="ml-auto">
					<Link to="/create">
						<Link className="btn btn-dark" to={"/create"}>Create</Link>
					</Link>
				</div>
			</div>
		</nav>
	);
};