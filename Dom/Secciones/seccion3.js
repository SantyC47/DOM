
const section3 = () => {
    const section = document.getElementById('seccion3');
    const footer = document.createElement('footer');

    const githubButton = document.createElement('a');
    githubButton.href = 'https://github.com'; 
    githubButton.innerHTML = '<i class="fab fa-github"></i>';

    const instagramButton = document.createElement('a');
    instagramButton.href = 'https://instagram.com';
    instagramButton.innerHTML = '<i class="fab fa-instagram"></i>';

    const gmailButton = document.createElement('a');
    gmailButton.href = 'mailto:correo@gmail.com'; 
    gmailButton.innerHTML = '<i class="fas fa-envelope"></i>'; 

    const rightsText = document.createElement('p');
    rightsText.textContent = '© 2024 Todos los derechos reservados';

    // Estilos CSS
    footer.style.backgroundColor = '#333';
    footer.style.color = '#fff';
    footer.style.padding = '10px';
    footer.style.textAlign = 'center';
    footer.style.position = 'fixed';
    footer.style.bottom = '0';
    footer.style.left = '0';
    footer.style.width = '100%';

    footer.appendChild(githubButton);
    footer.appendChild(instagramButton);
    footer.appendChild(gmailButton);
    footer.appendChild(rightsText);

    section.appendChild(footer);
};

export default section3;

