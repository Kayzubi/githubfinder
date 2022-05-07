class UI {
    constructor() {
        this.profileImage = document.getElementById('profile-image');
        
        this.profileInfo = document.getElementById('profile-info');
    }

    showProfile(user){

        // Get date in particular format
        const date = new Date(user.created_at);
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const month = months[date.getMonth()];
        const dateJoined = `${date.getDate()} ${month} ${date.getFullYear()}`;

        // Set bio information 
        let bio;

        if(user.bio !== null) {
             bio = user.bio
        } else {
            bio ="This user has no bio";
        }

        //display profile image
        this.profileImage.innerHTML = `<img class="img-fluid mb-2" src="${user.avatar_url} alt= "profile photo"> 
        <br> 
        <a class="btn btn-primary mb-3" href="${user.html_url}" target="_blank">View profile</a>`;

        //display profile info
        this.profileInfo.innerHTML = `
            <h1> ${user.name}</h1>
            <span class="text-muted">Joined ${dateJoined}</span>
            <p>@${user.login}</p>
            <p class="lead" >"${bio}"</p>
            <div class="row user-info card-body bg-dark mb-3">
                <div class="col-md-4 text-white">
                    <p>Repos</p>
                    <h1 class="card-title">${user.public_repos}</h1>
                </div>
                <div class="col-md-4 text-white">
                    <p>Followers</p>
                    <h1 class="card-title">${user.followers}</h1>
                </div>
                <div class="col-md-4 text-white">
                    <p>Following</p>
                    <h1 class="card-title">${user.following}</h1>
                    </div>
            </div> 
            <div class="row">
                <div class="col-md-6">
                    <p><i class="fa-solid fa-location-dot"></i> ${user.location}</p>
                    <p><i class="fa-solid fa-link"></i><a href="https://www.${user.blog}" target="_blank">${user.blog}</a></p>
                </div>
                <div class="col-md-6">
                    <p><i class="fa-brands fa-twitter"></i> ${user.twitter_username}</p>
                    <p><i class="fa-solid fa-envelope"></i> ${user.email}</p>
                </div>
            </div>
        `
    }

    showAlert(message, className) {
        // Clear current alert
        this.clearAlert();
        // create alertbox
        const div = document.createElement('div');
        div.className = className;
        // add alertbox content to alertbox
        div.innerHTML =`
            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
            <strong>${message}</strong>
        `
        //Get parent for alert
        const searchContainer = document.querySelector('.searchContainer');
        const search = document.querySelector('.search');

        searchContainer.insertBefore(div, search);

        // Remove Alert after 3 seconds
        setTimeout(()=> {
            this.clearAlert();
        }, 3000)

    }

    // Remove current alert
    clearAlert() {
        // clear current alert
        const currentAlert = document.querySelector('.alert');
        if(currentAlert) {
            currentAlert.remove();
        }
    }

    // Clear current profile
    clearProfile() {
        this.profileImage.innerHTML = '';
        this.profileInfo.innerHTML= '';

    }
}