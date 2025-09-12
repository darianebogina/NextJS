import {GetServerSidePropsContext} from "next";
import {useState} from "react";

type LogItem = {
    url: string
    time: string
    extra?: any
}

const fetchLogs = async (): Promise<LogItem[]> => {
    const res = await fetch("http://localhost:3000/api/logs");
    return await res.json();
}

const sendLog = async (url:string, method:string) => {
    await fetch("http://localhost:3000/api/logs", {
        method: 'PUT',
        body: JSON.stringify({
            url: url,
            time: new Date().toString(),
            extra: {method: method},
        })
    })
}

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
    const sessionId = context.req.headers.cookie?.includes("session_id=") &&
        context.req.headers.cookie.split("=")[1];

    const url = context.resolvedUrl;
    const method = context.req.method!;
    await sendLog(url, method);

    const currentLogs = await fetchLogs();
    console.log(currentLogs);

    if (!sessionId) {
        return {
            redirect: {
                destination: "/",
                permanent: false,
            },
        };
    }

    return {
        props: {sessionId, url, method},
    };
};

export default function Profile({sessionId, url, method}: {sessionId: string, url: string, method: string}) {
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
            <button onClick={() => fetchAndSetLogs()}>Логи</button>
            <button onClick={() => sendLogAndUpdate()}>Отправить лог</button>
            <p>`Session id: ${sessionId}`</p>
            <p>{logs.toString()}</p>
        </>
    )
}