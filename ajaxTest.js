window.addEventListener('DOMContentLoaded', (item) => {

    // генерация блока навигации
    function createNavDiv() {
        const navBlock = document.createElement('div')
        navBlock.classList.add('navBlock')
        const prevButton = document.createElement('div')
        prevButton.classList.add('navButton')
        const nextButton = document.createElement('div')
        nextButton.classList.add('navButton', 'right')
        prevButton.innerHTML = 'назад'
        nextButton.innerHTML = 'вперед'
        document.body.appendChild(navBlock)
        navBlock.appendChild(prevButton)
        prevButton.setAttribute('data-prev', 1)
        navBlock.appendChild(nextButton)
        nextButton.setAttribute('data-next', 1)
    }

    // генерация блока сообщения
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
    // следующая страница
    const changePage = function (url) {
        clearContent()
        getContent(url)
    }
    // динамическая подгрузка
    function getContent(pageUrl='http://192.168.88.16/api/v1/messages/') {
        $.ajax( {
            url: pageUrl
        })
            .done(function (data) {
                let nextURL = data['next']
                let prevURL = data['previous']
                let prevButton = document.querySelector('[data-prev]')
                let nextButton = document.querySelector('[data-next]')
                if (prevURL) {
                    prevButton.addEventListener('click', function () {
                        clearContent()
                        getContent(prevURL)
                    })
                }
                if (nextURL) {
                    nextButton.addEventListener('click', function () {
                        clearContent()
                        getContent(nextURL)
                    })
                }
                let bannedMessageList = []
                for (let i = 0; i < data.results.length; i++) {
                    let item = data.results[i]
                    if (bannedMessageList.includes(item.id_user_from)) {
                        continue
                    }
                    bannedMessageList.push(item.id_user_from)
                    createMessageDiv(item.full_name, item.text)
                }
                console.log(pageUrl)
                console.log(data.results)
                data.results = []
            })
    }
    // очистка блоков сообщений
    function clearContent() {
        let messages = document.querySelectorAll('.container')
        let buttonBlock = document.querySelector('.navBlock')
        buttonBlock.remove()
        messages.forEach((item) => {
            item.remove()
        })
        createNavDiv()
    }
    createNavDiv()
    getContent()
})