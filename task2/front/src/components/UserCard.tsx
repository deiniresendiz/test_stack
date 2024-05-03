import { Link } from "react-router-dom";
import { User } from '../helpers';

type UserCardProps = {
    user: User;
  };
  

export const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
      <div className="p-4 md:p-7">
        <h3 className="text-lg font-bold text-gray-800 dark:text-white">
          {user.name}
        </h3>
        <ul className="marker:text-blue-600 list-disc ps-5 space-y-2 text-sm text-gray-600 dark:text-neutral-400">
          <li>{user.username}</li>
          <li>{user.email}</li>
          <li>{user.phone}</li>
        </ul>
        <Link
          className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400"
          to={`/user/${user.id}`}
        >
          View more
          <svg
            className="flex-shrink-0 size-4"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg>
        </Link>
      </div>
    </div>
  );
};