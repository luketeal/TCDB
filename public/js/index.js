const switchBtn = document.getElementById('switch-view');
const formContainer = document.getElementById('form-container');
const tableContainer = document.getElementById('table-container');
const dispostionList = document.getElementById('disposition-list');


let displayForm = true;

switchBtn.addEventListener('click', (event) => {
    if (displayForm === true) {

        fetch('/api/dispositions')
        .then((res) => {
            return res.json();
        })
        .then((dispositions) => {
            dispostionList.innerHTML = ''
            dispositions.forEach((disposition) => {
                let row = dispostionList.insertRow(0);
                let cell1 = row.insertCell(0);
                let cell2 = row.insertCell(1);
                let cell3 = row.insertCell(2);
                cell1.innerHTML = disposition.part_number;
                if(disposition.disposition) {
                    disposition.disposition = "Accept"
                } else {
                    disposition.disposition = "Reject"
                }
                cell2.innerHTML = disposition.disposition;
                cell3.innerHTML = disposition.user.first_name + " " + disposition.user.last_name;
              }
            )
        })

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