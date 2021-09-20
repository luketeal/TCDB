const switchBtn = document.getElementById('switch-view');
const formContainer = document.getElementById('form-container');
const tableContainer = document.getElementById('table-container');
const dispositionList = document.getElementById('disposition-list');
const dispositionEl = document.getElementById('disposition');
const BadgeIDEl = document.getElementById('badge-id');
const partNumberEl = document.getElementById('part-number');

let displayForm = true;

switchBtn.addEventListener('click', (event) => {
    if (displayForm === true) {

        fetch('/api/dispositions')
        .then((res) => {
            if(res.status === 500) {
                alert('Server Error')
                throw new Error ('Server Error')
            } 
            return res.json()
        })
        .then((dispositions) => {
            dispositionList.innerHTML = ''
            dispositions.forEach((disposition) => {
                let row = dispositionList.insertRow(0);
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
                cell3.innerHTML = disposition.user.first_name + " " + disposition.user.last_name
              }
            )
            displayForm = false
            formContainer.classList.add('d-none')
            tableContainer.classList.remove('d-none')
            switchBtn.innerText = 'Show Disposition Form'
        })
        .catch( (error) => {
            console.log(error)
        })
    } else {
        displayForm = true
        formContainer.classList.remove('d-none')
        tableContainer.classList.add('d-none')
        switchBtn.innerText = 'Show Disposition Table'
        dispositionList.innerHTML = ''
    }
})

formContainer.addEventListener('submit', (event) => {
    event.preventDefault();
    let disposition = {
        part_number: partNumberEl.value,
        badge_id: BadgeIDEl.value,
        disposition: dispositionEl.value,
    }

    if(disposition.part_number === '') {
        disposition.part_number = null
    }

    fetch('/api/disposition', {
        method: 'POST',
        body: JSON.stringify(disposition),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then((res) => {
        if(res.status === 400) {
            alert('Bad Request')
        } else (alert('Disposition Added'))
    })
    .then (()=> {
    partNumberEl.value = ''
    BadgeIDEl.value = ''
    dispositionEl.value = 'true'
    })
    
})