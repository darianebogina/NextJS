import {useState} from "react";
import {fetchLogs, LogItem, sendLog} from "@/shared";

export const Profile = ({sessionId, url, method}: {sessionId: string, url: string, method: string}) => {
    const [logs, setLogs] = useState<LogItem[]>([])

    const fetchAndSetLogs = async () => {
        setLogs(await fetchLogs());
    }

    const sendLogAndUpdate = async () => {
        await sendLog(url, method);
        await fetchAndSetLogs();
    }

    console.log(logs);

    return (
        <>
            <p>:)</p>
            <button onClick={() => fetchAndSetLogs()}>Logs</button>
            <button onClick={() => sendLogAndUpdate()}>Send log</button>
            <p>Session id: {sessionId}</p>
            <ul>
                {logs.map((item, index) => (
                    <li key={index}>
                        <p>Time: {item.time}</p>
                        <p>Method: {item.extra?.method}</p>
                        <p>URL: {item.url}</p>
                    </li>
                ))}
            </ul>
        </>
    )
}