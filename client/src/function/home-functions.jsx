// Fonction qui retourne le nom d'un fichier à partir d'un path
export const baseName = (path) => {
    if (path.includes('/')) {
        return path.split('/').reverse()[0];
    } else {
        return path;
    }
}

// Fonction qui change le tag d'un noeud donné 
export const replaceTag = (element, typeNode) => {
    var that = element;

    var a = document.createElement(typeNode);
    a.setAttribute('id',that.getAttribute('id'));
    a.setAttribute('class',that.getAttribute('class'));
    a.setAttribute('onclick',that.getAttribute('onclick'));
    a.setAttribute('onmouseover',that.getAttribute('onmouseover'));
    a.setAttribute('onmouseout',that.getAttribute('onmouseout'));
    a.setAttribute('onmouseleave',that.getAttribute('onmouseleave'));
    

  // move all elements in the other container.
  while(that.firstChild) {
      a.appendChild(that.firstChild);
  }

  return a;
}