class Github{
  constructor(){
    this.client_id ='bc21f54d36bda8d6778f';
    this.client_secret = 'cfc974f40a27f747fec8365b23ac22ca144ddb1e';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }
  async getUser(user){
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();
    const repos = await reposResponse.json();
// Returning an object
    return{
      profile,
      repos
    }
  }  
  
}