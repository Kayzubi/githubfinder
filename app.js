// Init Github class
const github = new Github;

// Init UI class
const ui = new UI;

// Search input
const searchUser = document.getElementById('searchUser');




// Search input event listener
searchUser.addEventListener('keydown', (e) => {
    // Check for Enter key
  if(e.key === 'Enter') {
    // Get User text
    const userText = searchUser.value;
    // check if input is empty
    if(userText !== ''){
        // Make http request
        github.getUser(userText)
        .then(data => {
            // Check if user is found
            if(data.profile.message === 'Not Found') {
                // Show Alert
                ui.showAlert("User Not Found", "alert alert-dismissible alert-danger");
            } else {
                // Show profile
                ui.showProfile(data.profile);
            }
        })
    } else {
        // Show alert
        ui.showAlert("Enter a Username", "alert alert-dismissible alert-warning" )
    } 
  }
   
})

// clear page when input is cleared
searchUser.addEventListener('keyup', (e) => {
    // check if key is backspace
    if(e.key === 'Backspace') {
        const userText = searchUser.value;
        // clear current profile once input is cleared
        if(userText === '') {
            ui.clearProfile();
        }
    }
})