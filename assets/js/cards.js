const cardsContainer = document.getElementById('cards');

fetch('./data.json')
    .then(res => res.json())
    .then(data => {
        let cardUSer = data.map(user => {
            return `
            <div class="card-mentoring">
                <div>
                    <h2>${user.mentor.rol}</h2>
                    <img src="${user.mentor.foto_perfil}" class="card-img-top" alt="${user.mentor.nombre}">
                    <h5 class="card-title">${user.mentor.nombre} ${user.mentor.apellido}</h5>
                </div>
                <div class="card-body">
                    <h2>${user.mentee.rol}</h2>
                    <img src="${user.mentee.foto_perfil}" class="card-img-top" alt="${user.mentor.nombre}">
                    <p class="card-text">${user.mentee.nombre} ${user.mentee.apellido}</p>
                </div>
            </div>`
        })
        cardsContainer.innerHTML = cardUSer.join('');
    })
    .catch(err => console.log(err))
