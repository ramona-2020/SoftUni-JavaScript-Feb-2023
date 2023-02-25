function focused() {
    let inputNodeList = document.querySelectorAll('input');
    
    for (let input of inputNodeList) {
        //handle focus
        input.addEventListener('focus', event => {
            input.parentElement.classList.add('focused');
        })
  
        //handle blur
        input.addEventListener('blur', event => {
            input.parentElement.classList.remove('focused');
        })
    }
}