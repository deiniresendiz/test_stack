import { User } from "./getUsers";

export const getUser = async (idUser: number): Promise<User | null> => {
    try {
        const url_base = `http://127.0.0.1:5000/api/user/${idUser}`;
        const response = await fetch(url_base);

        if (!response.ok) {
            throw new Error("Failed to fetch user");
        }

        const userData = await response.json();
        const user: User = {
            id: userData.id,
            name: userData.name,
            username: userData.username,
            email: userData.email,
            phone: userData.phone,
            website: userData.website
        };

        return user;
    } catch (error) {
        console.error(error);
        return null;
    }
}