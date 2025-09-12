import {GetServerSidePropsContext} from "next";
import {QueryMode} from "@/shared";

const parseLanguage = (headerLanguage: string) => {
    return headerLanguage.split(",")[0].split(';')[0] || 'en';
}

export const getSSRProps = (context: GetServerSidePropsContext) => {
    const acceptLanguage  = context.req.headers["accept-language"];
    const language = parseLanguage(acceptLanguage || '');

    const modeParam = context.query.mode;
    const modeQuery: QueryMode =
        modeParam === "compact" || modeParam === "full" ? modeParam : "full";

    return {language, modeQuery};
}