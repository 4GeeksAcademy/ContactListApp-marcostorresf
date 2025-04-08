import { Link } from "react-router-dom";

export const Navbar = () => {

	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-5 h1 "><i class="fa-solid fa-address-book"> MIAMI CLASS 77</i></span>
				</Link>
				<div className="ml-auto">
					<Link to="/create">
						<Link className="btn btn-outline-info" to={"/create"}><i class="fa-solid fa-user-plus"></i>  Add New Contact</Link>
					</Link>
				</div>
			</div>
		</nav>
	);
};