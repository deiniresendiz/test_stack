import { useEffect, useState } from "react";
import { getLogs, Log } from "../helpers";
import { LogRow } from "../components";

export const LogsPage = () => {
    const [logs, setLogs] = useState<Log[] | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchLogs = async () => {
            try {
                const logsData = await getLogs();
                setLogs(logsData);
            } catch (error) {
                console.error("Error fetching logs: ", error);
                setError("An error occurred while fetching logs.");
            } finally {
                setLoading(false);
            }
        };
        fetchLogs();
    }, []);

    return (
        <div>
            {loading && <p>Loading logs...</p>}
            {error && <p>{error}</p>}
            {!loading && !error && (
                <div className="container mx-auto mt-2">
                    <div className="flex flex-col">
                        <div className="-m-1.5 overflow-x-auto">
                            <div className="p-1.5 min-w-full inline-block align-middle">
                            <div className="overflow-hidden">
                                <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                                <thead className="bg-gray-50 dark:bg-neutral-700">
                                    <tr>
                                    <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-400">Id</th>
                                    <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-400">Type</th>
                                    <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-400">Url</th>
                                    <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-400">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    
                                    {logs?.map((log) => (
                                        <LogRow key={log.id} log={log} />
                                    ))}
                                </tbody>
                                </table>
                            </div>
                            </div>
                        </div>
                        </div>
                </div>
            )}
        </div>
    );
};