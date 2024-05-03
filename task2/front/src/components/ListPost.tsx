import { Post } from '../helpers';

type ListPostProps = {
    posts: Post[] | null
  };

export const ListPost: React.FC<ListPostProps> = ({ posts }) => {
    return (
        <div className='grid grid-cols-2 sm:grid-cols-4 gap-2'>
            {
                posts?.map((post) => (
                    <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
                    <div className="p-4 md:p-7">
                        <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                        {post.title}
                        </h3>
                        <p className="mt-2 text-gray-500 dark:text-neutral-400">
                        {post.body}
                        </p>
                    </div>
                    </div>
                ))
            }
        </div>
    );
}