import {GetServerSidePropsContext} from "next";
import {fetchLogs, sendLog} from "@/shared";
import {Profile} from "@/widgets/profile"
import {ImageOptimize} from "@/widgets/img-optimize-day";

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

export default function ProfilePage({sessionId, url, method}: { sessionId: string, url: string, method: string }) {
    return (
        <>
            <ImageOptimize/>
            <Profile sessionId={sessionId} url={url} method={method}/>
        </>
    )
}