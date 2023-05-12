
const menu = document.querySelector("#menu");
const toggleOpen = document.querySelector("#toggle-open");
const toggleClose = document.querySelector("#toggle-close");
const $form = document.querySelector("#form");

toggleOpen.addEventListener('click', toggleMenu);
toggleClose.addEventListener('click', toggleMenu);
$form.addEventListener('submit', handleSubmit);

function toggleMenu () {
    menu.classList.toggle('show-menu');

    if(menu.classList.contains('show-menu')) {
        toggleOpen.style.display = 'none';
        toggleClose.style.display = 'flex';
    } else {
        toggleOpen.style.display = 'flex';
        toggleClose.style.display = 'none';
    }
}

async function handleSubmit(event) {
    event.preventDefault();
    const form = new FormData(this);
    const responde = await fetch(this.action, {
        method: this.method,
        body: form,
        headers: {
            'Accept': 'application/json'
        }
    })
    if (responde.ok) {
        this.reset();
        $('#exampleModal').modal('show');
    } else {
        $('#exampleModal').modal('hide');
    }
}

