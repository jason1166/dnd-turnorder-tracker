const turnOrder = document.querySelector('ul');
const playerInput = document.querySelector('input');
const addBtn = document.querySelector('#addChar');
const newTurnBtn = document.querySelector('#newTurnBtn');
const deleteAllBtn = document.querySelector('#deleteAll');
const team1Preset = document.querySelector('#team-1');
const team2Preset = document.querySelector('#team-2');
const team1Players = ["Sojo", "Izaya", "Nico", "Neru"];
const team2Players = ["Grimm", "Caine", "Colt", "Ricochet", "Eirdain", "Leonard"];

function addPlayers(name) {
    const storePlayer = name;

    const newPlayer = document.createElement('li');
    const newPlayerName = document.createElement('span');
    const delBtn = document.createElement('button');
    delBtn.setAttribute('id', 'delBtn');
    delBtn.setAttribute('class', 'fa fa-trash');
    const doneBtn = document.createElement('button');
    doneBtn.setAttribute('id', 'doneBtn');
    doneBtn.setAttribute('class', 'fa fa-check-square')

    newPlayer.appendChild(newPlayerName);
    newPlayerName.textContent = storePlayer;
    newPlayer.appendChild(delBtn);
    newPlayer.appendChild(doneBtn);
    turnOrder.appendChild(newPlayer);

    delBtn.addEventListener('click', () => {
        turnOrder.removeChild(newPlayer);
    });

    doneBtn.addEventListener('click', () => {
        newPlayer.classList.toggle("turn-done");
    });
}

addBtn.addEventListener('click', () => {
    const storePlayer = playerInput.value;
    playerInput.value = '';
    
    addPlayers(storePlayer);
    playerInput.focus();
});

newTurnBtn.addEventListener('click', () => {
    const allPlayers = document.querySelectorAll('li');

    for (let i = 0; i < allPlayers.length; i++) {
        allPlayers[i].classList.remove('turn-done');
    }
});

deleteAllBtn.addEventListener('click', () => {
    const allPlayers = document.querySelectorAll('li');
    const turnOrder = document.querySelector('ul')

    for (let i = 0; i < allPlayers.length; i++) {
        turnOrder.removeChild(allPlayers[i]);
    }
});

team1Preset.addEventListener('click', () => {
    for (let i = 0; i < team1Players.length; i++) {
        addPlayers(team1Players[i]);
    }
});

team2Preset.addEventListener('click', () => {
    for (let i = 0; i < team2Players.length; i++) {
        addPlayers(team2Players[i]);
    }
});