// Função para controlar o carrossel de imagens
let currentIndex = 0;
const images = document.querySelectorAll('.carousel-images img');
const totalImages = images.length;

function changeImage() {
    // Move as imagens para a esquerda
    currentIndex = (currentIndex + 1) % totalImages;
    document.querySelector('.carousel-images').style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Configura a troca automática de imagens no carrossel
setInterval(changeImage, 3000); // Troca a cada 3 segundos

// Função para adicionar produto ao carrinho (simulado)
document.getElementById('add-to-cart')?.addEventListener('click', function() {
    alert("Produto adicionado ao carrinho!");
});

// Limpa o formulário de cadastro quando o botão de envio for clicado
document.getElementById('signup-form')?.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio real do formulário
    alert("Cadastro realizado com sucesso!");
    
    // Limpa os campos do formulário
    document.getElementById('signup-form').reset();
});
