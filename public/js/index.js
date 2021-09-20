const switchBtn = document.getElementById('switch-view');
const formContainer = document.getElementById('form-container');
const tableContainer = document.getElementById('table-container');
const dispositionList = document.getElementById('disposition-list');
const dispositionEl = document.getElementById('disposition');
const BadgeIDEl = document.getElementById('badge-id');
const partNumberEl = document.getElementById('part-number');
// initiate display form variable to handle views
let displayForm = true;

// ------------ switch view --------------------
switchBtn.addEventListener('click', () => {
    // if display form variable is true when selected then the application is switching to the show table view.
    if (displayForm === true) {
        // fetch the dispositions in the database
        fetch('/api/dispositions')
        .then((res) => {
            // if there is a server error, throw the error to end the promise chain
            if(res.status === 500) {
                alert('Server Error')
                throw new Error ('Server Error')
            }
            // parse the response and pass it
            return res.json()
        })
        // take the parsed response object and generate a table of the data
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
            // update display form variable
            displayForm = false
            // update ui to show table instead of form
            formContainer.classList.add('d-none')
            tableContainer.classList.remove('d-none')
            switchBtn.innerText = 'Show Disposition Form'
        })
        .catch( (error) => {
            console.log(error)
        })
    } else {
        // if display form variable is false when selected then the application is switching to the show form view.
        // update the display form variable
        displayForm = true
        // update ui to show form instead of table
        formContainer.classList.remove('d-none')
        tableContainer.classList.add('d-none')
        switchBtn.innerText = 'Show Disposition Table'
        dispositionList.innerHTML = ''
    }
})

// form event listener
formContainer.addEventListener('submit', (event) => {
    event.preventDefault();
    // create disposition object
    let disposition = {
        part_number: partNumberEl.value,
        badge_id: BadgeIDEl.value,
        disposition: dispositionEl.value,
    }
    // if the part number is blank, set part_number to null so it is rejected by the database
    if(disposition.part_number === '') {
        disposition.part_number = null
    }
    // fetch request to create the disposition in the database
    fetch('/api/disposition', {
        method: 'POST',
        body: JSON.stringify(disposition),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then((res) => {
        // provide user feedback 
        if(res.status === 400) {
            alert('Bad Request')
        } else (alert('Disposition Added'))
    })
    .then (()=> {
    // clear form
    partNumberEl.value = ''
    BadgeIDEl.value = ''
    dispositionEl.value = 'true'
    })
    
})