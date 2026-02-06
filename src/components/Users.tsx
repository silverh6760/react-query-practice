import useDeleteUser from "../hooks/useDeleteUser";
import { useUsers } from "../hooks/UseUsers";

function Users() {
	const { isLoading, userList, error } = useUsers();
	const { mutate } = useDeleteUser();

	if (isLoading) {
		return <div>Is Loading ...</div>;
	}

	if (error) {
		return <div>{error}</div>;
	}

	return (
		<ul className="list">
			{userList.map((user) => (
				<div className="user">
					<li key={user.id}>
						{user.id}-{user.username}
						<button onClick={() => mutate(user.id)}>delete</button>
					</li>
				</div>
			))}
		</ul>
	);
}

export default Users;
