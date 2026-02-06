import { useState, type FormEvent } from "react";
import { useCreateUser } from "../../hooks/useCreateUser";

function AddUser() {
	const [username, setName] = useState("");
	const { isPending, mutate } = useCreateUser();
	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		if (username.trim()) {
			mutate({ username } as any);
			setName("");
		}
	};
	return (
		<div>
			<form>
				<label htmlFor="">Username</label>
				<input
					type="text"
					value={username}
					onChange={(e) => setName(e.target.value)}
				/>
				<button onClick={handleSubmit} disabled={isPending}>
					Submit
				</button>
			</form>
		</div>
	);
}

export default AddUser;
