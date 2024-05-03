export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    website: string;
}

export const getUsers = async (): Promise<User[]> => {
    try {
        const url_base = "http://127.0.0.1:5000/api/users";
        const response = await fetch(url_base);

        if (!response.ok) {
            throw new Error("Failed to fetch users");
        }

        const data = await response.json();
        const users: [] = data.map((userData: any) => ({
            id: userData.id,
            name: userData.name,
            username: userData.username,
            email: userData.email,
            phone: userData.phone,
            website: userData.website
        }));

        return users;
    } catch (error) {
        console.error(error);
        return [];
    }
}