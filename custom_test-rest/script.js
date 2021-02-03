window.addEventListener('DOMContentLoaded', () => {
    const statusMessage = $('.status');
    const answerMessage = $('.answer');
    let answer = $.get('http://127.0.0.1:8000/', (data) => {
        console.log(data)
    })
})