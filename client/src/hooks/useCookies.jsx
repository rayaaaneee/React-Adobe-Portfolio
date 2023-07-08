import Cookie from 'js-cookie';

export const setCookie = (name, value) => {
    Cookie.set(name, value, {
        expires: 31,
        secure: true,
        sameSite: 'strict',
        path: '/'
    });
}

export const getCookie = (name) => {
    return Cookie.get(name);
}

export const isCookie = (name) => {
    return getCookie(name) !== undefined;
}

export const removeCookie = (name) => {
    return Cookie.remove(name);
}

