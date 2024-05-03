import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getUser, User, Post, Photo, getPosts, getPhotos } from "../helpers";
import { ListPhoto, ListPost } from "../components";


export const UserPage: React.FC = () => {
    const { userId } = useParams();
    const [user, setUser] = useState<User | null>(null);
    const [posts, setPosts] = useState<Post[] | null>(null);
    const [photos, setPhotos] = useState<Photo[] | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const userData = await getUser(Number(userId));
                setUser(userData);
            } catch (error) {
                console.error("Error fetching user: ", error);
                setError("An error occurred while fetching user data.");
            } finally {
                setLoading(false);
            }
        };
        fetchUser();

        const fetchPosts = async () => {
            try {
                const postsData = await getPosts(Number(userId));
                setPosts(postsData);
            } catch (error) {
                console.error("Error fetching posts: ", error);
                setError("An error occurred while fetching posts.");
            }
        };
        fetchPosts();

        const fetchPhotos = async () => {
            try {
                const photosData = await getPhotos(Number(userId));
                setPhotos(photosData);
            } catch (error) {
                console.error("Error fetching photos: ", error);
                setError("An error occurred while fetching photos.");
            }
        };
        fetchPhotos();
    }, [userId]);

    return (
        <div className="md:container md:mx-auto">
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {user && (
                <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70 mb-2 mt-3 p-2">
                    <h1 className="text-lg font-bold text-gray-600 dark:text-neutral-400">{user.name}</h1>
                    <ul className="marker:text-blue-600 list-disc ps-5 space-y-2 text-sm text-gray-600 dark:text-neutral-400">
                        <li>Username: {user.username}</li>
                        <li>Email: {user.email}</li>
                        <li>Phone: {user.phone}</li>
                        <li>Website: {user.website}</li>
                    </ul>
                </div>
            )}
            <nav className="relative z-0 flex border rounded-xl overflow-hidden dark:border-neutral-700" aria-label="Tabs" role="tablist">
                <button type="button" className="hs-tab-active:border-b-blue-600 hs-tab-active:text-gray-900 dark:hs-tab-active:text-white relative dark:hs-tab-active:border-b-blue-600 min-w-0 flex-1 bg-white first:border-s-0 border-s border-b-2 py-4 px-4 text-gray-500 hover:text-gray-700 text-sm font-medium text-center overflow-hidden hover:bg-gray-50 focus:z-10 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-l-neutral-700 dark:border-b-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-400 active" id="bar-with-underline-item-1" data-hs-tab="#bar-with-underline-1" aria-controls="bar-with-underline-1" role="tab">
                    Photos
                </button>
                <button type="button" className="hs-tab-active:border-b-blue-600 hs-tab-active:text-gray-900 dark:hs-tab-active:text-white relative dark:hs-tab-active:border-b-blue-600 min-w-0 flex-1 bg-white first:border-s-0 border-s border-b-2 py-4 px-4 text-gray-500 hover:text-gray-700 text-sm font-medium text-center overflow-hidden hover:bg-gray-50 focus:z-10 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-l-neutral-700 dark:border-b-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-400" id="bar-with-underline-item-2" data-hs-tab="#bar-with-underline-2" aria-controls="bar-with-underline-2" role="tab">
                    Posts
                </button>
                </nav>

                <div className="mt-3">
                <div id="bar-with-underline-1" role="tabpanel" aria-labelledby="bar-with-underline-item-1">
                    <ListPhoto photos={photos} />
                </div>
                <div id="bar-with-underline-2" className="hidden" role="tabpanel" aria-labelledby="bar-with-underline-item-2">
                    <ListPost posts={posts} />
                </div>
            </div>
            
        </div>
    );
};