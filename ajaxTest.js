window.addEventListener('DOMContentLoaded', (item) => {

    const BASE_URL = 'http://localhost:63343/jsL/ajaxTest.html'

    // FOR AJAX
    const URL_PAR_STRING = window.location.search;
    const URL_PAR = new URLSearchParams(URL_PAR_STRING)
    let current_page = ''
    if (URL_PAR.get('page') && URL_PAR.get('page') >= 2) {
        current_page = '?page=' + URL_PAR.get('page')
        prev_page = '?page=' + (URL_PAR.get('page') - 1)
    }
    let prev_page_number = 1
    let next_page_number = 2
    if (URL_PAR.get('page')) {
        next_page_number = parseInt(URL_PAR.get('page')) + 1
        prev_page_number = parseInt(URL_PAR.get('page')) - 1
    }
    if (prev_page_number < 0) {
        prev_page_number = 0
    }

    function createNavDiv() {
        const navBlock = document.createElement('div')
        navBlock.classList.add('navBlock')
        const prevButton = document.createElement('div')
        prevButton.classList.add('navButton')
        if (current_page === '') {
            prevButton.classList.add('not-active')
        }
        const nextButton = document.createElement('div')
        nextButton.classList.add('navButton', 'right')
        prevButton.innerHTML = 'назад'
        nextButton.innerHTML = 'вперед'
        document.body.appendChild(navBlock)
        navBlock.appendChild(prevButton)
        navBlock.appendChild(nextButton)
    }

    function createMessageDiv(username, text) {
        const container = document.createElement('div')
        const content = document.createElement('div')
        const name = document.createElement('div')
        const message = document.createElement('div')
        container.classList.add('container')
        content.classList.add('content')
        name.classList.add('username')
        name.innerHTML = username
        message.innerHTML = text
        message.classList.add('text')
        document.body.appendChild(container)
        container.appendChild(content)
        content.appendChild(name)
        content.appendChild(message)
    }

    console.log(current_page)

    $.ajax({
        url: 'http://192.168.88.16/api/v1/messages/' + current_page,
    })
        .done(function (data) {
            const nextPageUrl = data['next']
            const prevPageUrl = data['previous']
            let bannedMessageList = []
            createNavDiv()
            for (let i = 0; i < data.results.length; i++) {
                let item = data.results[i]
                if (bannedMessageList.includes(item.id_user_from)) {
                    continue
                }
                bannedMessageList.push(item.id_user_from)
                createMessageDiv(item.full_name, item.text)
            }
            createNavDiv()
            const navButtons = document.querySelectorAll('.navButton')
            navButtons.forEach((item) => {
                if (item.innerHTML === 'назад' && prevPageUrl !== 'null') {
                    if (prev_page_number === 0) {
                        item.innerHTML = `назад`
                    } else {
                        item.innerHTML = `<a href="${BASE_URL}?page=${prev_page_number}">назад</a>`
                    }
                } else if (nextPageUrl != null) {
                    item.innerHTML = `<a href="${BASE_URL}?page=${next_page_number}">вперед</a>`
                }
            })
        })
})