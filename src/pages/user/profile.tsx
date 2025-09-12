import {GetServerSidePropsContext} from "next";

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
    const sessionId = context.req.headers.cookie?.includes("session_id=") &&
                        context.req.headers.cookie.split("=")[1];

    if (!sessionId) {
        return {
            redirect: {
                destination: "/",
                permanent: false,
            },
        };
    }

    return {
        props: {sessionId},
    };
};


export default function Profile() {
    return (
        <>
            <p>:)</p>
        </>
    )
}