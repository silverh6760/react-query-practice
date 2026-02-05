import { useUsers } from "../hooks/UseUsers";

function Users() {
	const { isLoading, userList, error } = useUsers();
	if (isLoading) {
		return <div>Is Loading ...</div>;
	}

	if (error) {
		return <div>{error}</div>;
	}

	return (
		<ul>
			{userList.map((user) => (
				<li key={user.id}>
					{user.id}-{user.username}
				</li>
			))}
		</ul>
	);
}

export default Users;
