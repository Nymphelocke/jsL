window.addEventListener('DOMContentLoaded', () => {

    // TABS

    const tabs = document.querySelectorAll('.tabheader__item');
    const tabsContent = document.querySelectorAll('.tabcontent');
    const tabsParent = document.querySelector('.tabheader__items');

    function hideTabContent() {
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        })
        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active')
        })
    }

    function showTabContent(i = 0) {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide')
        tabs[i].classList.add('tabheader__item_active');
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (event) => {
        const target = event.target;

        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i)
                }
            })
        }
    })

    // TIMER

    const deadline = '2021-03-28 13:00';

    function getTimeRemaining(deadline) {

        const t = Date.parse(deadline) - Date.parse(new Date()); // return ms
        let days = Math.floor(t / (1000 * 60 * 60 * 24)); // округление
        let hours = Math.floor((t / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((t / 1000 / 60) % 60);
        const seconds = Math.floor((t / 1000) % 60);

        // ADD ZEROES - TYPE 1
        // if (days < 10) {
        //     days = '0' + days;
        // }
        // if (hours < 10) {
        //     hours = '0' + hours
        // }

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        } // return object
    }

    // ADD ZEROES - TYPE 2
    function getZero(num) {
        if (num < 10 && num >= 0) {
            return `0${num}`
        } else {
            return num
        }
    }

    function setClock(selector, deadline) {

        const timer = document.querySelector(selector);
        const days = timer.querySelector('#days');
        const hours = timer.querySelector('#hours');
        const minutes = timer.querySelector('#minutes');
        const seconds = timer.querySelector('#seconds');
        const timeInterval = setInterval(updateClock, 1000);

        updateClock(); // перебиваем дефолтные значения при загрузке страницы

        function updateClock() {
            const t = getTimeRemaining(deadline);
            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
                document.querySelector('.timer').remove();
                document.querySelector('#timerTitle').innerHTML = 'Акция завершена!';

            }
        }
    }

    setClock('.timer', deadline)

    // MODAL

    // TYPE 1 - VIA JS SELECTOR

    // const modal = document.querySelector('.modal');
    // const modalClose = document.querySelector('.modal__close');
    // const secondOfferButton = document.querySelector('.header__right-block').parentNode;
    // const offerButton = document.querySelector('.offer__action').parentNode;
    //
    // modalClose.addEventListener('click', () => {
    //     modal.style.display = 'none';
    // })
    //
    // secondOfferButton.addEventListener('click', () => {
    //     modal.style.display = 'block';
    // })
    //
    // offerButton.addEventListener('click', () => {
    //     modal.style.display = 'block';
    // })

    // TYPE 2 - VIA DATA SELECTOR IN HTML
    const modalWindow = document.querySelector('.modal');
    const offerButtons = document.querySelectorAll('[data-modal]');
    const closeModalButton = document.querySelector('[data-close]');

    offerButtons.forEach((item) => {
        item.addEventListener('click', openModal)
    })

    function openModal() {
        modalWindow.classList.remove('hide');
        modalWindow.classList.add('show');
        document.body.style.overflow = 'hidden'; // убираем прокрутку
        clearInterval(modalTimerId); // очищаем таймер
    }

    function closeModal() {
        modalWindow.classList.add('hide');
        modalWindow.classList.remove('show');
        document.body.style.overflow = ''; // возвращаем прокрутку
    }

    // закрытие на клики вне области окна
    modalWindow.addEventListener('click', (event) => {
        if (event.target && event.target === modalWindow) {
            closeModal()
        }
    })

    // закрытие по кнопке
    closeModalButton.addEventListener('click', closeModal)

    // закрытие по нажатии клавиши ESC
    document.addEventListener('keydown', (event) => {
        console.log(event.code) // вывод кнопки которая нажимается
        if (event.code === 'Escape' && modalWindow.classList.contains('show')) {
            closeModal()
        }
    })

    // таймер открытия модального окна
    const modalTimerId = setTimeout(openModal, 15000);

    // показ окна по прокрутке
    function showModalByScroll() {
        // window.pageYOffset - сколько пикселей прокручено
        // document.documentElement.clientHeight - высота экрана
        // document.documentElement.scrollHeight - высота прокрутки в пикселях
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModal();
            window.removeEventListener('scroll', showModalByScroll); // убираем обработчик после первого показа
        }
    }

    // открытие модального окна по достижении конца страницы
    window.addEventListener('scroll', showModalByScroll);

})