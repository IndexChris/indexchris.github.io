var smstrs = 1;
var info = [];

function insertar() {
    if (smstrs > 5) { return; }
    const nuevoSemestre = document.createElement('div');
    nuevoSemestre.className = 'semestre';
    nuevoSemestre.innerHTML =
    `
    <h2>Semestre ${smstrs+1}</h2>
    <p>Ingrese su calificacion:</p>
    <input type="number">
    `
    const a = document.querySelector('#sacar-prom');
    const parent = a.parentNode;
    parent.insertBefore(nuevoSemestre, a);
    smstrs++;
}

function quitar() {
    const semestres = document.querySelectorAll('.semestre');
    if (semestres.length < 2) { return; }
    const ultimo = semestres[semestres.length - 1];
    ultimo.remove();
    smstrs--;
}

function calcular() {
    const valores = [];
    const semestres = document.querySelectorAll('.semestre');
    semestres.forEach(valor => {
        const inputs = valor.querySelectorAll('input');
        inputs.forEach(input => {
            valores.push(input.value);
        });
    });
    let resultado = 0;
    valores.forEach(index => {
        resultado += Number(index);
    });
    resultado = resultado / valores.length;
    resultado = resultado.toFixed(2);
    
    document.getElementById('prom').innerHTML = `Tu promedio es de: <b>${resultado}</b>`;

    infoAdicional(resultado);
}

function infoAdicional(res) {
    info1 = "";
    info2 = "";
    if (res == 10) {
        info1 = "Promedio perfecto?!";
        info2 = "Debes estar bromeando, pero si es asi, enhorabuena por tal logro! Eso significa que puedes ingresar a universidades de alto prestigio, eres considerado(a) un(a) estudiante de alto rendimiento y eres apto para dichas becas."
    } else if (res < 10 && res > 8.99) {
        info1 = "Tienes un excelente promedio!";
        info2 = "Calificas para la mayoria de universidades a nivel nacional e internacional. Eres considerado(a) un(a) estudiante de alto rendimiento y estoy seguro de que no ha sido nada facil llegar hasta aqui. Muchas felicidades!"
    } else if (res < 9 && res > 8.49) {
        info1 = "Tienes un buen promedio!";
        info2 = "Tienes un buen rendimiento academico. Aplicas para la mayoria de universidades a nivel nacional e internacional. Tu desempeno es digno de admirar, muchas felicidades por haber llegado hasta aqui."
    } else if (res < 8.5 && res > 7.99) {
        info1 = "Tienes un promedio  p r o m e d i o!";
        info2 = "Aplicas para la mayoria de las universidades a nivel nacional. Muy buen desempeno. Ha sido complicado, lo se, pero quiza sea una senal de que debes esforzarte mas."
    } else if (res < 8 && res > 7.49) {
        info1 = "Tienes un promedio bajo :(";
        info2 = "Tu promedio esta mas abajo del promedio. Se que ha sido dificil, pero quiza sea una senal para que te esfuerces mas!";
    } else if (res < 7.5 && res > 6.99) {
        info1 = "Tienes un promedio malo :(";
        info2 = "Tu promedio es estadisticamente malo. Es hora de poner manos a la obra y trabajar en ello!";
    } else if (res < 7 && res > 4.99) {
        info1 = "No se que haces con tu vida...";
        info2 = "Sinceramente, no se que haces con tu vida.";
    } else if (res < 5 && res > 0) {
        info1 = "No vienes a la escuela.";
        info2 = "Para que checas tu promedio?"
    }
    const info = document.createElement('div');
    info.className = 'informacion'
    info.innerHTML =
    `
    <hr>
    <h1>${info1}</h1>
    <p>${info2}</p>
    `
    document.body.appendChild(info);
}