const form = document.querySelector('form');
const liste = document.querySelector('ul');
const input = document.querySelector('form input');
let toutesLesTaches = [];

form.addEventListener('submit', event => {
    event.preventDefault();

    const text = input.value.trim();
    if(text !== ""){
        rajouterUneTache(text);
        input.value = "";
    }
})

function rajouterUneTache(text){
    
    const todo = {
        text,
        id : Date.now()
    }
    afficherListe(todo);
}

function afficherListe(todo){
    const item = document.createElement('li');
    item.setAttribute('data-key', todo.id);
    
    const input = document.createElement('input');
    input.setAttribute('type','checkbox');
    input.addEventListener('click', tacheFaite);
    item.appendChild(input);

    const txt = document.createElement('span');
    txt.innerText = todo.text;
    item.appendChild(txt)

    const btn = document.createElement('button');
    item.appendChild(btn);
    btn.addEventListener('click', supprimerTache);

    // const img = document.createElement('img');
    // img.setAttribute('src', 'ressources/fermer.svg');
    // btn.appendChild(img);

    liste.appendChild(item);
    setTimeout(() => item.style.opacity = "1", 10);
    toutesLesTaches.push(item);
}

function tacheFaite(e){
    e.target.parentNode.classList.toggle('finDeTache');
}

function supprimerTache(e){
    toutesLesTaches.forEach(el => {
        if(e.target.parentNode.getAttribute('data-key') === el.getAttribute('data-key')){
            el.style.opacity = 0;
            setTimeout(() => el.remove(),500)
            toutesLesTaches.filter(li => {
                return li.dataset.key !== el.dataset.key;
            })
        }
    })
}