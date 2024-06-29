document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var nomeCompleto = document.getElementById('nomeCompleto').value;
    var cpf = document.getElementById('cpf').value;

    if (nomeCompleto === 'Rodrigo Sena' && cpf === '6622287615') {
        window.location.href = 'https://www.google.com';
    } else {
        alert('Nome completo ou CPF incorretos.');
    }
});

// Efeito de fundo estilo "Matrix"
const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
document.querySelector('.matrix-background').appendChild(canvas);

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const letters = Array(256).join(1).split('');
const fontSize = 10;

function draw() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#0f0';
    letters.map((y_pos, index) => {
        const text = String.fromCharCode(3e4 + Math.random() * 33);
        const x_pos = index * fontSize;
        ctx.fillText(text, x_pos, y_pos);
        letters[index] = y_pos > 758 + Math.random() * 1e4 ? 0 : y_pos + fontSize;
    });
}

setInterval(draw, 33);
