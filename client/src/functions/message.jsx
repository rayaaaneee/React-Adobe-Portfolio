export const sendMessage = async (message) => {
    try {
        const response = await fetch('http://localhost:7000/send/' + message, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response.status;
    } catch (error) {
        console.error(error);
    }
}
