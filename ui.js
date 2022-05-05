class UI {
    constructor() {
        this.profileImage = document.getElementById('profile-image');
        
        this.profileInfo = document.querySelector('.profile-info');
    }

    showProfile(user){

        console.log(user);
        //display profile
        this.profileImage.innerHTML = `<img src="${user.avatar_url} alt= "profile photo" mb-3> 
        <br> 
        <a class="btn btn-primary" href="${user.html_url}" target="_blank">View profile</a>`;

    }
}