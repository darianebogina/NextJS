import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async (context) => {
    const volumeId = context.params!.id;

    return {
        redirect: {
            destination: `/book/${volumeId}`,
            permanent: true,
        },
    };
};

export default function OldBookPage() {
    return (
        <></>
    );
}
