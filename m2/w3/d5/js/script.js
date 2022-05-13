const JSON = '../json/users.json'

let table = document.querySelector('#tabUsers')

fetch(JSON)
.then(res => res.json())
.then(res => {
    console.log(res);
    for(let user of res){
        console.log(user.name);
        let visualized = ["username","firstName","lastName","gender","profileURL","email"]
        let tr = document.createElement('tr')
        let userTd = document.createElement('td')
        userTd.innerHTML = user.username
        let firstNameTd = document.createElement('td')
        firstNameTd.innerHTML = user.firstName
        let lastNameTd = document.createElement('td')
        lastNameTd.innerHTML = user.lastName
        let genderTd = document.createElement('td')
        genderTd.innerHTML = user.gender
        let profileUrlTd = document.createElement('td')
        profileUrlTd.innerHTML = user.profileUrl
        let emailTd = document.createElement('td')
        emailTd.innerHTML = user.email
        tr.append(userTd,firstNameTd,lastNameTd,genderTd,profileUrlTd,emailTd)
        table.append(tr)
    }
})

