export class ModalInformations {

    message;

    #isSuccess;

    static successStatus = "success";

    static errorStatus = "error";

    constructor(messageSuccess, messageError, isSuccess = null) {
        this.message = {
            success: messageSuccess,
            error: messageError
        }

        if (isSuccess !== null) {
            this.#isSuccess = isSuccess;
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
                return ModalInformations.successStatus;
            case false:
                return ModalInformations.errorStatus;
            default:
                return null;
        }
    }
}