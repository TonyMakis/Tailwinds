const burgerBtn = document.querySelector('#burger');
const menu = document.querySelector('#menu');
const devInfoBtn = document.querySelector('#devInfo');
const codeSection = document.querySelector('#tailwindDescription');
const codeSectionCloseBtn = document.querySelector('#devInfoClose');

burgerBtn.addEventListener('click', () => {
    if(menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
        menu.classList.add('flex', 'justify-evenly');
    } else {
        menu.classList.remove('flex', 'justify-evenly');
        menu.classList.add('hidden');
    }
});

if(devInfoBtn) {
    devInfoBtn.addEventListener('click', () => {
        codeSection.classList.remove('hidden');
        codeSection.classList.add('grid', 'grid-cols-1', 'md:grid-cols-2', 'md:gap-8');
        devInfoBtn.classList.add('hidden');
    });
}

if(codeSectionCloseBtn) {
    codeSectionCloseBtn.addEventListener('click', () => {
        codeSection.classList.remove('grid', 'grid-cols-1', 'md:grid-cols-2', 'md:gap-8');
        codeSection.classList.add('hidden');
        devInfoBtn.classList.remove('hidden');
    });
}
