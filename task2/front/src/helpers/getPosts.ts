export interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export const getPosts = async (userId: number): Promise<Post[]> => {
    try {
        const url_base = `http://127.0.0.1:5000/api/posts/user/${userId}`;
        const response = await fetch(url_base);

        if (!response.ok) {
            throw new Error("Failed to fetch posts");
        }

        const data = await response.json();
        const posts: Post[] = data.map((post: any) => ({
            userId: post.userId,
            id: post.id,
            title: post.title,
            body: post.body
        }));

        return posts;
    } catch (error) {
        console.error(error);
        return [];
    }
}