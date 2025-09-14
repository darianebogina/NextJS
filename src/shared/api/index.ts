import {LogItem} from "@/shared";

const API_URL = "http://localhost:3000/api/logs";

export const fetchLogs = async (): Promise<LogItem[]> => {
    return (await fetch(API_URL)).json();
}

export const sendLog = async (url: string, method: string) => {
    await fetch(API_URL, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            url: url,
            time: new Date().toString(),
            extra: { method: method },
        }),
    });
};