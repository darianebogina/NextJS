export const setCookie = (name: string,
                          value: string, maxAge?: number): void => {

    let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

    if (maxAge) {
        updatedCookie += `; max-age=${maxAge}`;
    }
    updatedCookie += "; path=/";
    document.cookie = updatedCookie;
}

export const getCookie = (name: string): string | undefined => {
    const cookies = document.cookie.split(";");
    for (let cookie of cookies) {
        const [key, value] = cookie.split("=");
        if (decodeURIComponent(key) === name) {
            return decodeURIComponent(value);
        }
    }
    return undefined;
}

export const deleteCookie = (name: string): void => {
    setCookie(name, "", 0);
}
