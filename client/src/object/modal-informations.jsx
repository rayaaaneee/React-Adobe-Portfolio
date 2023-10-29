export class ModalInformations {

    message = {
        success: null,
        error: null
    }

    isVisible = false;

    #isSuccess;

    static #successStatus = "success";

    static #errorStatus = "error";


    setMessages(messageSuccess, messageError) {
        this.message = {
            success: messageSuccess,
            error: messageError
        }
    }

    setSuccess(isSuccess) {
        this.#isSuccess = isSuccess;
    }

    getMessage() {
        switch (this.#isSuccess) {
            case true:
                return this.message.success;
            case false:
                return this.message.error;
            default:
                return null;
        }
    }

    getStatus() {
        switch (this.#isSuccess) {
            case true:
                return ModalInformations.#successStatus;
            case false:
                return ModalInformations.#errorStatus;
            default:
                return null;
        }
    }
}