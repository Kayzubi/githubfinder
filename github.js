class Github {
    constructor() {

        this.client_id = 'e66843b5911ff051fd8f';
        this.client_secret = 'fa9e2488b0fa0d20d5891222974d5e2cdf729dff';
    }

    async getUser(user) {

        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();

        return {
            profile
        }


    }
}