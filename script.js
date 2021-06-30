document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    const select = document.getElementById('cars'),
        output = document.getElementById('output');

    async function getData() {
        const url = './cars.json'
        return await fetch(url)
    }

    select.addEventListener('change', () => {
        getData()
            .then(res => res.json())
            .then((res) => {
                res.cars.forEach(item => {
                    if (item.brand === select.value) {
                        const { brand, model, price } = item;
                        output.innerHTML = `Тачка ${brand} ${model} <br>
                            Цена: ${price}$`;
                    }
                });
            })
            .catch(err => console.error(err))
    });

});