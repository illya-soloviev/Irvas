import calcScroll from "./calcScroll";

const images = () => {
    const worksSection = document.querySelector('.works'),
          imgPopup = document.createElement('div'),
          bigImage = document.createElement('img'),
          scrollWidth = calcScroll();

    imgPopup.classList.add('popup');
    worksSection.appendChild(imgPopup);

    imgPopup.style.justifyContent = 'center';
    imgPopup.style.alignItems = 'center';
    imgPopup.style.display = 'none';

    bigImage.style.display = 'block';
    bigImage.style.maxWidth = '100%';
    bigImage.style.height = 'auto';

    imgPopup.appendChild(bigImage);

    worksSection.addEventListener('click', (e) => {
        e.preventDefault();

        let target = e.target;

        if (target && target.classList.contains('preview')) {
            let path = target.parentNode.getAttribute('href');
            bigImage.setAttribute('src', path);

            document.body.style.overflow = 'hidden';
            document.body.style.marginRight = `${scrollWidth}px`;
            imgPopup.style.display = 'flex';
        }

        if (target && target.matches('div.popup')) {
            document.body.style.overflow = '';
            document.body.style.marginRight = `0px`;
            imgPopup.style.display = 'none';
        }
    });
};

export default images;