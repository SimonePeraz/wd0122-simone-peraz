const JSON = '../json/users.json'

let tbody = document.querySelector('#tabUsers')

fetch(JSON)
.then(res => res.json())
.then(res => {
    console.log(res);
    for(let user of res){
        console.log(user.name);
        
        let tr = document.createElement('tr')
        tr.classList.add('row','p-3','pb-0','pt-0')

        let userTd = document.createElement('td')
        userTd.innerHTML = user.username
        userTd.classList.add('col','p-4','bg-success','text-center','pb-0','pt-0')

        let firstNameTd = document.createElement('td')
        firstNameTd.innerHTML = user.firstName
        firstNameTd.classList.add('col','p-4','bg-primary','text-center','pb-0','pt-0')

        let lastNameTd = document.createElement('td')
        lastNameTd.innerHTML = user.lastName
        lastNameTd.classList.add('col','p-4','bg-success','text-center','pb-0','pt-0')

        let genderTd = document.createElement('td')
        genderTd.innerHTML = user.gender
        genderTd.classList.add('col','p-4','bg-primary','text-center','pb-0','pt-0')

        let profileUrlTd = document.createElement('td')
        let pic = document.createElement('img')
        pic.setAttribute('src', user.profileURL )
        profileUrlTd.append(pic) 
        profileUrlTd.classList.add('col','p-4','bg-success','text-center','pb-0','pt-0')

        let emailTd = document.createElement('td')
        emailTd.innerHTML = user.email
        emailTd.classList.add('col','p-4','bg-primary','text-center','pb-0','pt-0')

        tr.append(userTd,firstNameTd,lastNameTd,genderTd,profileUrlTd,emailTd)
        tbody.append(tr)
    }
})

