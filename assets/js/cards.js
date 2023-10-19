const cardsContainer = document.getElementById('cards');
const search = document.getElementById('search-input');

fetch('./data.json')
    .then(res => res.json())
    .then(data => {
        // Mapea los datos para crear tarjetas
        const users = data.map(user => createCard(user)).join('');
        cardsContainer.innerHTML = users;

        function createCard(user) {
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
                    <p class="text-sala">Sala: ${user.mentor.sala}</p>
                </div>
                <div class="mentee">
                    <div class='info-mentee'>
                        <span>${user.mentee.rol}</span>
                        <h4 class="card-text">${user.mentee.nombre} ${user.mentee.apellido}</h4>
                    </div>
                    <img class="img-perfil" src="${user.mentee.foto_perfil}" class="card-img-top" alt="${user.mentor.nombre}">
                </div>
            </div>`;
        }

        search.addEventListener('keyup', (e) => {
            const busqueda = e.target.value.toLowerCase();
            const filteredUsers = data.filter(user => {
                const mentorName = `${user.mentor.nombre} ${user.mentor.apellido}`.toLowerCase();
                const menteeName = `${user.mentee.nombre} ${user.mentee.apellido}`.toLowerCase();
                return mentorName.includes(busqueda) || menteeName.includes(busqueda);
            });

            const filteredHTML = filteredUsers.map(user => createCard(user)).join('');
            cardsContainer.innerHTML = filteredHTML;
        });
    })
    .catch(err => console.log(err))
