

export class ManageBody {

    static pageNames = [];

    static #verifyClassName(className) {
        if (!this.pageNames.includes(className)) {
            throw new Error(`The class name "${className}" is not in the list of page names.`);
        } else {
            return true;
        }
    }

    static #removeClass(){
        document.body.classList.forEach(className => {
            try {

                this.#verifyClassName(className)
                    && (document.body.classList.remove(className));

            } catch (_) {
                // Class name don't have to be removed;
            }
        });
    }

    static #setClass(className){
        (this.#verifyClassName(className)) && document.body.classList.add(className);
    }

    static changeClass(className){
        if (this.pageNames.length === 0) throw new Error("You must set **ManageBody.pageNames** before changing the class.");
        ManageBody.#removeClass();
        ManageBody.#setClass(className);
    }

    // Mandatory to use this class
    static setPageNames(pageNames){
        ManageBody.pageNames = pageNames;
    }
}