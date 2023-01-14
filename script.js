const l = []

function add() {
    const name = document.getElementById('name').value;
    const proffession = document.getElementById('proffession').value;
    const age = document.getElementById('age').value;
    console.log(name, proffession, age);

    if (name === '' || proffession === '' || age === '') {
        const m = document.getElementById('m')
        m.style.color = 'red';
        m.innerHTML = 'Error: Please make sure all the fields are filled before adding in an employee!'
        m.style.marginLeft = '30px';
    } else {
        m.innerHTML = 'Success : Employee Added!'
        m.style.color = 'green';
        m.style.marginLeft = '30px';

        const a = document.getElementById('a')
        a.style.display = 'none';

        l.push({
            name: name,
            proffession: proffession,
            age: age,})
    }

    let tb = document.getElementById('tb')
    tb.innerHTML = '';

    l.map((el, i)=> {
        tb.innerHTML += `
        <tbody>
        <tr>
        <td>${i+1}.</td>
        <td>Name:${el.name}</td>
        <td>Profession:${el.proffession}</td>
        <td>Age:${el.age}</td>
        <td><button onclick=d(${i}) type="button" class="btn">Delete</button></td>
        </tr>
        </tbody>`
    })
}

function d(el) {
    delete l[el]
    tb.innerHTML = ''
    l.map((el, i)=> {
        tb.innerHTML += `
        <tbody>
        <tr>
        <td>${i+1}.</td>
        <td>Name:${el.name}</td>
        <td>Profession:${el.proffession}</td>
        <td>Age:${el.age}</td>
        <td><button onclick=d(${i}) type="button" class="btn">Delete</button></td>
        </tr>
        </tbody>`
    })
}
console.log(tb)