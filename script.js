const turnOrder = document.querySelector('ul');
const playerInput = document.querySelector('input');
const addBtn = document.querySelector('#addChar');
const newTurnBtn = document.querySelector('#newTurnBtn');
const deleteAllBtn = document.querySelector('#deleteAll');
const team1Preset = document.querySelector('#team-1');
const team2Preset = document.querySelector('#team-2');
const team1Players = ["Sojo", "Izaya", "Nico", "Neru", "Desmond"];
const team1HP = [40, 52, 39, 59, "Desmond"];
const team1SP = [15, 24, 27, 24, "Desmond"];
const team2Players = ["Grimm", "Caine", "Colt", "Ricochet", "Eirdain", "Leonard", "Miwa"];
const team2HP = [73, 52, 60, 67, 39, 44, "Miwa"];
const team2SP = [21, 18, 15, 15, 18, 18, "Miwa"];
const hpBar = document.querySelector('#hpBar');
const spBar = document.querySelector('#spBar');

function addPlayers(name, hp, sp) {
    const storePlayer = name;

    const newPlayer = document.createElement('li');
    const newPlayerName = document.createElement('span');
    
    const delBtn = document.createElement('button');
    delBtn.setAttribute('id', 'delBtn');
    delBtn.setAttribute('class', 'fa fa-trash');
    
    const doneBtn = document.createElement('button');
    doneBtn.setAttribute('id', 'doneBtn');
    doneBtn.setAttribute('class', 'fa fa-check-square')
    
    const currentHP = document.createElement('p')
    currentHP.setAttribute('id', 'currentHP');
    currentHP.setAttribute('contenteditable', 'true');

    const HPseperator = document.createElement('p');
    HPseperator.setAttribute('id', 'seperator');

    const maxHP = document.createElement('p');
    maxHP.setAttribute('id', 'maxHP');
    maxHP.setAttribute('contenteditable', 'true');
    
    maxHP.textContent = hp;
    currentHP.textContent = hp;
    HPseperator.textContent = '/';

    const HPstat = document.createElement('div');
    HPstat.setAttribute('style', 'display: flex');
    HPstat.classList.add('HPstat');
    HPstat.appendChild(currentHP);
    HPstat.appendChild(HPseperator);
    HPstat.appendChild(maxHP);

    maxHP.textContent = hp;
    currentHP.textContent = hp;
    HPseperator.textContent = '/';

    const currentSP = document.createElement('p')
    currentSP.setAttribute('id', 'currentSP');
    currentSP.setAttribute('contenteditable', 'true');

    const SPseperator = document.createElement('p');
    SPseperator.setAttribute('id', 'seperator');

    const maxSP = document.createElement('p');
    maxSP.setAttribute('id', 'maxSP');
    maxSP.setAttribute('contenteditable', 'true');
    
    maxSP.textContent = sp;
    currentSP.textContent = sp;
    SPseperator.textContent = '/';

    const SPstat = document.createElement('div');
    SPstat.setAttribute('style', 'display: flex');
    SPstat.classList.add('SPstat');
    SPstat.appendChild(currentSP);
    SPstat.appendChild(SPseperator);
    SPstat.appendChild(maxSP);

    newPlayer.appendChild(newPlayerName);
    newPlayerName.textContent = storePlayer;
    newPlayer.appendChild(delBtn);
    newPlayer.appendChild(doneBtn);
    newPlayer.appendChild(HPstat);
    newPlayer.appendChild(SPstat);
    turnOrder.appendChild(newPlayer);

    delBtn.addEventListener('click', () => {
        turnOrder.removeChild(newPlayer);
    });

    doneBtn.addEventListener('click', () => {
        newPlayer.classList.toggle("turn-done");
    });
}

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
        addPlayers(team1Players[i], team1HP[i], team1SP[i]);
    }
});

team2Preset.addEventListener('click', () => {
    for (let i = 0; i < team2Players.length; i++) {
        addPlayers(team2Players[i], team2HP[i], team2SP[i]);
    }
});

/* experimental */
addBtn.addEventListener('click', () => {
    let charName = prompt("Character Name: ", "");
    let charHP = prompt("Max HP: ", "");
    let charSP = prompt("Max SP: ", "");

    addPlayers(charName, charHP, charSP);
}); 