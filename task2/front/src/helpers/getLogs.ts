export interface Log {
    id: string;
    request_type: number;
    request_url: string;
    response_status: string;
}

export const getLogs = async (): Promise<Log[]> => {
    try {
        const url_base = "http://127.0.0.1:5000/api/logs";
        const response = await fetch(url_base);

        if (!response.ok) {
            throw new Error("Failed to fetch logs");
        }

        const data = await response.json();
        const logs: Log[] = data.data.map((log: any) => ({
            id: log.id,
            request_type: log.request_type,
            request_url: log.request_url,
            response_status: log.response_status
        }));

        return logs;
    } catch (error) {
        console.error(error);
        return [];
    }
};