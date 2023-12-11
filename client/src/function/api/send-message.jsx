export const sendMessage = (formData, callback, errcallback) => {
    fetch(`${process.env.REACT_APP_API_URL}/send`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: formData.get('name'),
            email: formData.get('email'),
            message: formData.get('message')
        })
    })
    .then(res => res.json())
    .then(data => {
        callback(data);
    })
    .catch(err => {
        errcallback(err);
    });
}