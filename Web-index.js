const button = document.getElementById('Button');
const options = document.getElementById('OP-hold');

function showoptions() {
    document.getElementById('OP-hold').style.display = block;
    button.removeEventListener('click', showoptions);
}

button.addEventListener("click", showoptions);