export class ModalInformations {

    message = {
        success: null,
        error: null
    }

    isVisible = false;

    isSuccess;

    static #successStatus = "success";

    static #errorStatus = "error";

    static initRow (information) {
        let tmp = new ModalInformations();

        tmp.setMessages(information.message.success, information.message.error);
        tmp.isSuccess = information.isSuccess;
        tmp.isVisible = information.isVisible;

        return tmp;
    }


    setMessages(messageSuccess, messageError) {
        this.message = {
            success: messageSuccess,
            error: messageError
        }
    }

    setMessageSuccess(messageSuccess) {
        this.message.success = messageSuccess;
    }

    setMessageError(messageError) {
        this.message.error = messageError;
    }

    getMessage() {
        switch (this.isSuccess) {
            case true:
                return this.message.success;
            case false:
                return this.message.error;
            default:
                return null;
        }
    }

    getStatus() {
        switch (this.isSuccess) {
            case true:
                return ModalInformations.#successStatus;
            case false:
                return ModalInformations.#errorStatus;
            default:
                return null;
        }
    }
}