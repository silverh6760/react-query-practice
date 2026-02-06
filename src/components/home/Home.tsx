import Users from "../Users";
import AddUser from "./addUser";

function Home() {
	return (
		<div>
			<AddUser />
			<Users />
		</div>
	);
}

export default Home;
