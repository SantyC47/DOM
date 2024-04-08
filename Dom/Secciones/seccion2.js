const section2 = () => {
    const section = document.getElementById('seccion2');
    const products = [
        { name: 'Camisa tipo polo', image: './image/camisa.png', price: '$20.99' },
        { name: 'Pantalones vaqueros', image: './image/pantalon.png', price: '$29.99' },
        { name: 'Vestido estampado floral', image: './image/vestido.png', price: '$39.99' }
    ];

    const productList = document.createElement('div');
    productList.classList.add('product-list');

    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.classList.add('product-item');

        const image = document.createElement('img');
        image.src = product.image;
        image.alt = product.name;
        image.style.width = '200px';
        image.style.height = '250px';

        const name = document.createElement('h3');
        name.textContent = product.name;

        const price = document.createElement('p');
        price.textContent = product.price;

        productItem.appendChild(image);
        productItem.appendChild(name);
        productItem.appendChild(price);

        productList.appendChild(productItem);
    });

    section.appendChild(productList);
};


export default section2;
