export const getAge = (birthDate) => {
    const today = new Date();
    const birthDateTab = birthDate.split('/');
    const birthDateObject = new Date(birthDateTab[2], birthDateTab[1] - 1, birthDateTab[0]);
    let age = today.getFullYear() - birthDateObject.getFullYear();
    const m = today.getMonth() - birthDateObject.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDateObject.getDate())) {
        age--;
    }
    return age;
}