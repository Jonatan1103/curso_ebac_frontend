document.addEventListener('DOMContentLoaded', () => {
  const avatar = document.getElementById('avatar')
  const name = document.getElementById('name')
  const userName = document.getElementById('username')
  const repository = document.getElementById('repository')
  const followers = document.getElementById('followers')
  const following = document.getElementById('following')
  const link = document.getElementById('link')


  async function fetchData () {
    const response = await fetch('https://api.github.com/users/Jonatan1103')
    const data = await response.json()
    return data
  }
  
  fetchData()
    .then(person => {
      avatar.src = person.avatar_url
      name.innerText = person.name
      userName.innerText = person.login
      repository.innerText = person.public_repos
      followers.innerText = person.followers
      following.innerText = person.following
      link.href = person.html_url
    })
    .catch(error => console.log(`Algo não deu certo ${error}`))

})