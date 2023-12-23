const isLocalhost = Boolean(
    window.location.hostname === 'localhost' ||
    // [::1] is the IPv6 localhost address.
    window.location.hostname === '[::1]' ||
    // 127.0.0.0/8 is the IPv4 localhost address
    window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)
);

const checkValidServiceWorker = (swUrl, config) => {
    fetch(swUrl)
        .then(response => {
            if (response.status === 404 || response.headers.get('content-type').indexOf('javascript') === -1) {
                navigator.serviceWorker.ready
                    .then(registration => registration.unregister()
                        .then(() => window.location.reload())
                    );
            } else registerValidSW(swUrl, config);
        })
        .catch(() => console.log('No internet connection found. App is running in offline mode.'));
}

const registerValidSW = (swUrl, config) => {
    navigator.serviceWorker
        .register(swUrl)
        .then(registration => {
            registration.onupdatefound = () => {
                const installingWorker = registration.installing;
                if (installingWorker === null) return;
                installingWorker.onstatechange = () => {
                    if (installingWorker.state === 'installed') {
                        if (navigator.serviceWorker.controller) console.log('New content is available; please refresh.');
                        else console.log('Content is cached for offline use.');
                    }
                }
            }
        })
        .catch(error => console.error('Error during service worker registration:', error.message));
}

export const register = (config) => {
    if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
        const publicUrl = new URL(process.env.PUBLIC_URL, window.location.href);
        if (publicUrl.origin !== window.location.origin) return;

        window.addEventListener('load', () => {

            const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;
            if (isLocalhost) {

                checkValidServiceWorker(swUrl, config);
                navigator.serviceWorker.ready
                    .then(() => console.log('This web app is being served cache-first by a service worker.'))
                    .catch(() => console.log('No internet connection found. App is running in offline mode.'));

            } else registerValidSW(swUrl, config);
        });
    }
}

export const unregister = () => {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.ready
            .then(registration => {
                registration.unregister()
            })
            .catch(error => console.error(error.message));
    }
}
