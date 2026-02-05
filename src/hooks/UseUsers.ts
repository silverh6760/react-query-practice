import { getUsers } from "../services/UserService";
import { useEffect, useState } from "react";
import type { User } from "../types/UserType";

export function useUsers() {
  const [userList, setUserList] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setIsLoading(true);

        const users: User[] = await getUsers();
        setUserList(users);
      } catch (err) {
        setError("Failed to fetch users");
      } finally {
        setIsLoading(false);
      }
    };
    fetchUsers();
  }, []);

  return { isLoading, userList, error };
}
