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
            if(data.profile.message !== 'Not found') {
                // Show profile

                ui.showProfile(data.profile)

                console.log(data.profile);
                
                

            } else {
                // Show alert
           

            }
            
        })
        
    } else {
        
    } 
    
  }
   
})