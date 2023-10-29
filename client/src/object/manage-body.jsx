export class ManageBody {

    static removeClass(){
        document.body.classList.forEach(className => {
            document.body.classList.remove(className);
        });
    }

    static setClass(className){
        document.body.classList.add(className);
    }

    static changeClass(className){
        ManageBody.removeClass();
        ManageBody.setClass(className);
    }

}