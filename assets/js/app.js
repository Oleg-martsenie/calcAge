let btnVerufy = document.querySelector('#verify');
let yearForm = document.querySelector('#year');
let resultField = document.querySelector('.result');
let msex = document.getElementsByName('radiusgender');
let imgField = document.querySelector('#img')

btnVerufy.onclick = () => {
    let actualDate = new Date();
    let actualYear = actualDate.getFullYear();
    let formYear = yearForm.value;

    if(formYear.length == 0 || formYear > actualYear) {
        alert('Proofread the set date and try again! ')
    } else {
        msex;
        let age = (actualYear - formYear) * 1;
        let gender = '';

        if(msex[0].checked) {
            gender = 'Man';
            if(age >=0 && age < 12) {
                imgField.setAttribute('src', 'img/b.jpg')
            } else if (age >= 12 && age < 21) {
                imgField.setAttribute('src', 'img/waheed.jpg')
            } else if (age >=21 && age < 50 ) {
                imgField.setAttribute('src', 'img/abdulaah.jpg')
            } else {
                imgField.setAttribute('src', 'img/idoso.jpg')
            }
        } else if (msex[1].checked) {
            gender = 'Woman';
            if(age >=0 && age < 12) {
                imgField.setAttribute('src', 'img/g.png')
            } else if (age >= 12 && age < 21) {
                imgField.setAttribute('src', 'img/shaira.jpg')
            } else if (age >=21 && age < 50 ) {
                imgField.setAttribute('src', 'img/shahira.jpg')
            } else {
                imgField.setAttribute('src', 'img/idosa.jpg')
            }
        }
        resultField.innerHTML = `We detected ${gender} and ${age} years old`
        resultField.appendChild(imgField)
    }
}
