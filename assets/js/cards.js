const cardsContainer = document.getElementById('cards');

fetch('./data.json')
    .then(res => res.json())
    .then(data => {
        let cardUSer = data.map(user => {
            return `
            <div class="card-mentoring">
                <div class="mentor">
                    <img class="img-perfil" src="${user.mentor.foto_perfil}" class="card-img-top" alt="${user.mentor.nombre}">
                    <div class='info-mentor'>
                        <span>${user.mentor.rol}</span>
                        <h4 class="card-title">${user.mentor.nombre} ${user.mentor.apellido}</h4>
                    </div>
                    
                </div>
                <div class="sala">
                    <p class="text-sala">Sala: ${user.mentor.sala}
                </div>
                <div class="mentee">
                    <div class='info-mentee'>
                        <span>${user.mentee.rol}</span>
                        <h4 class="card-text">${user.mentee.nombre} ${user.mentee.apellido}</h4>
                    </div>
                    <img class="img-perfil" src="${user.mentee.foto_perfil}" class="card-img-top" alt="${user.mentor.nombre}">
                </div>
            </div>`
        })
        cardsContainer.innerHTML = cardUSer.join('');
    })
    .catch(err => console.log(err))
