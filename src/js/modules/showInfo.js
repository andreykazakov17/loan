export default class ShowInfo {
    constructor(triggers) {
        this.btns = document.querySelectorAll(triggers);
    }

    init() {
        this.btns.forEach(btn => {
            btn.addEventListener('click', () => {
                const sibling = btn.closest('.module__info-show').nextElementSibling;
                
                if (sibling.style.display === 'block') {
                    sibling.style.display = 'none';
                    btn.querySelector('svg path').setAttribute('fill', 'white');
                } else {
                    sibling.style.display = 'block';
                    btn.querySelector('svg path').setAttribute('fill', 'none');
                }
            });
        });
    }
}