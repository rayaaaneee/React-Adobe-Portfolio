import Cookie from 'js-cookie';

export const setCookie = (name, usrin) => {
    Cookie.set(name, usrin, {
        expires: 31,
        secure: true,
        sameSite: 'strict',
        path: '/'
    });
}

export const getCookie = (name) => {
    return Cookie.get(name);
}

export const removeCookie = (name) => {
    return Cookie.remove(name);
}

