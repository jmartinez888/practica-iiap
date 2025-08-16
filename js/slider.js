(function () {
    const sliders = [...document.querySelectorAll('.testimony__body')];
    const buttonNext = document.querySelector('#next');
    const buttonBefore = document.querySelector('#before');
    let value = 1;
    let sliderInterval;

    const changePosition = (add) => {
        // Eliminar la clase de todas las secciones
        sliders.forEach(slide => slide.classList.remove('testimony__body--show'));

        // Calcular nuevo valor
        value += add;
        if (value > sliders.length) value = 1;
        if (value < 1) value = sliders.length;

        // Mostrar la nueva sección
        sliders[value - 1].classList.add('testimony__body--show');
    };

    const resetInterval = () => {
        clearInterval(sliderInterval);
        sliderInterval = setInterval(() => {
            changePosition(1);
        }, 5000);
    };

    buttonNext.addEventListener('click', () => {
        changePosition(1);
        resetInterval();
    });

    buttonBefore.addEventListener('click', () => {
        changePosition(-1);
        resetInterval();
    });

    // Iniciar el primer slide y el temporizador
    sliders[0].classList.add('testimony__body--show');
    resetInterval();
})();
