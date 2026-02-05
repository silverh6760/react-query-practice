import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../services/UserService";
import type { User } from "../types/UserType";

export function useUsers() {
	// const [userList, setUserList] = useState<User[]>([]);
	// const [isLoading, setIsLoading] = useState(true);
	// const [error, setError] = useState("");

	const {
		data: userList = [],
		isLoading,
		error,
	} = useQuery<User[], Error>({
		queryKey: ["users"],
		queryFn: getUsers,
	});

	// useEffect(() => {
	// 	const fetchUsers = async () => {
	// 		try {
	// 			setIsLoading(true);

	// 			const users: User[] = await getUsers();
	// 			setUserList(users);
	// 		} catch (err) {
	// 			setError("Failed to fetch users");
	// 		} finally {
	// 			setIsLoading(false);
	// 		}
	// 	};
	// 	fetchUsers();
	// }, []);

	return { isLoading, userList, error: error ? "fail to fetch" : "" };
}
