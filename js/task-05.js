const inputNameEl = document.querySelector('#name-input')
const outputNameEl = document.querySelector('#name-output')


const outputNameElFillByInputNameEl = (event) => {
    outputNameEl.textContent = event.currentTarget.value
    
    if (event.currentTarget.value === '') {
        outputNameEl.textContent = 'Anonymous'
    }
};

inputNameEl.addEventListener('input', outputNameElFillByInputNameEl)