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
            <p>`Session id: ${sessionId}`</p>
            <p>{logs.map(item => item.toString()+ "\n")}</p>
        </>
    )
}