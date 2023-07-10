export class JSONParser {

    static parse = (path) => {
        return new Promise((resolve, reject) => {
            fetch(path)
            .then(response => response.json())
            .then(data => {
                resolve(data);
            }
            ).catch(error => {
                reject(error);
            }
            );
        });
    }
    
}