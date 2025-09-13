import {LogItem} from "@/shared";

export const fetchLogs = async (): Promise<LogItem[]> => {
    const res = await fetch("http://localhost:3000/api/logs");
    return await res.json();
}

export const sendLog = async (url:string, method:string) => {
    await fetch("http://localhost:3000/api/logs", {
        method: 'PUT',
        body: JSON.stringify({
            url: url,
            time: new Date().toString(),
            extra: {method: method},
        })
    })
}