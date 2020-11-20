const form = document.getElementById('form');
const submit = document.querySelector('.contact__submit-button');
const resultFormMessage = document.querySelector('.contact__submit-message');

const SUCCESS_MESSAGE = 'Thank you for your message!';
const ERROR_MESSAGE =
    'Sorry! Smth went wrong. Please try again later or just email me';

const checkInputs = () => {
    const inputs = document.querySelectorAll('.contact__input');

    inputs.forEach((input) => {
        input.classList.remove('contact__input--error');

        if (!input.validity.valid) {
            input.classList.add('contact__input--error');
        }
    });
};

const setSuccess = () => {
    resultFormMessage.textContent = SUCCESS_MESSAGE;

    form.reset();
};

const setError = () => {
    resultFormMessage.textContent = ERROR_MESSAGE;
};

const sendMessage = () => {
    const body = {};

    /* eslint-disable-next-line */
    for (let input of form.elements) {
        body[input.name] = input.value;
    }

    fetch('https://app.99inbound.com/api/e/CcNZ6kgC', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
        body: JSON.stringify(body),
    })
        .then((response) => response.status)
        .then((status) => (status === 201 ? setSuccess() : setError()))
        .catch((e) => {
            console.log(e);
            setError();
        });
};

export default () => {
    submit.addEventListener('click', (e) => {
        checkInputs();
        e.preventDefault();

        if (!form.checkValidity()) {
            return;
        }

        sendMessage();
    });
};
