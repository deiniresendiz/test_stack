import { useEffect, useState } from "react";
import { getUsers, User } from "../helpers";
import { UserCard } from "../components/UserCard";

export const UsersPage = () => {
    const [users, setUsers] = useState<User[] | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const usersData = await getUsers();
                setUsers(usersData);
            } catch (error) {
                console.error("Error fetching users: ", error);
                setError("An error occurred while fetching users.");
            } finally {
                setLoading(false);
            }
        };
        fetchUsers();
    }, []);

    return (
        <div className="container mx-auto mt-2">
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {users && (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                    {users.map((user: User) => (
                        <UserCard key={user.id} user={user} />
                    ))}
                </div>
            )}
        </div>
    );
};