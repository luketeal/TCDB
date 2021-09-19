const switchBtn = document.getElementById('switch-view');
const formContainer = document.getElementById('form-container');
const tableContainer = document.getElementById('table-container');

let displayForm = true;

switchBtn.addEventListener('click', (event) => {
    if (displayForm === true) {
        displayForm = false
        formContainer.classList.add('d-none');
        tableContainer.classList.remove('d-none');
        switchBtn.innerText = 'Show Disposition Form'
    } else {
        displayForm = true
        formContainer.classList.remove('d-none');
        tableContainer.classList.add('d-none');
        switchBtn.innerText = 'Show Disposition Table'
    }
})