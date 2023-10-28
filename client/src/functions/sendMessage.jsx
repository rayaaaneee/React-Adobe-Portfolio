export const sendMessage = async (formData) => {
    try {
        const response = await fetch('http://localhost:7000/send/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                'name': formData.get('name'),
                'email': formData.get('email'),
                'message': formData.get('message')
            })
        });
        return response.status;
    } catch (e) {
        // 103 : Connexion au serveur impossible
        return 103;
    }
}
