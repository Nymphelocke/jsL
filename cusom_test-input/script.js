document.addEventListener('DOMContentLoaded', () => {

    // const user = document.querySelector('.user');
    // const target = document.querySelector('.target');
    const winWindow = document.querySelector('.win');
    const continueButton = document.querySelector('.continue');
    const field = document.querySelector('.field');
    const scoreField = document.querySelector('#score');
    const levelField = document.querySelector('#level');
    const clearScore = document.querySelector('.clearScore');

    const gameData = {
        state: 'play',
        level: 0,
        score: 0,
        baseScore: 15
    }

    const userData = {
        x_pos: 0,
        y_pos: 0
    }

    const targetData = {
        x_pos: 0,
        y_pos: 0
    }

    // Следующий уровень
    function nextLevel() {
        gameData.state = 'play';
        winWindow.classList.remove('show');
        winWindow.classList.add('hide');
        updateGameStat();
        gameData.baseScore = 15 + gameData.level;
        spawnTarget();
        console.log(gameData)
    }
    continueButton.addEventListener('click', nextLevel)

    // События
    window.addEventListener('keydown', (event) => {
        let user = document.querySelector('.user');
        if (event.code === 'ArrowUp' || event.code === 'ArrowDown'
        || event.code === 'ArrowLeft' || event.code === 'ArrowRight') {
            moveUser(user, event.code);
            checkCollide();
        } else if (event.code === 'Space' && gameData.state === 'win') {
            nextLevel();
        }
    })

    // Сброс очков
    clearScore.addEventListener('click', function () {
        clearData();

    })

    // Движение игрока
    function moveUser(user, where) {
        switch (where) {
            case 'ArrowUp':
                userData.y_pos = moveCheck(userData.y_pos - 40);
                user.style.top = userData.y_pos + 'px';
                gameData.baseScore -= 1;
                break;
            case 'ArrowDown':
                userData.y_pos = moveCheck(userData.y_pos + 40);
                user.style.top = userData.y_pos + 'px';
                gameData.baseScore -= 1;
                break;
            case 'ArrowLeft':
                userData.x_pos = moveCheck(userData.x_pos - 40);
                user.style.left = userData.x_pos + 'px';
                gameData.baseScore -= 1;
                break;
            case 'ArrowRight':
                userData.x_pos = moveCheck(userData.x_pos + 40);
                user.style.left = userData.x_pos + 'px';
                gameData.baseScore -= 1;
                break
            default:
                console.log('Error')
        }
        // console.log(`user coords x:${userData.x_pos} y:${userData.y_pos}`)
    }

    // Проверка доступности хода
    function moveCheck(position) {
        if (position <= 0) {
            return 0
        } else if (position > 360) {
            return 360
        } else {
            return position
        }
    }

    // Генерация координаты
    function genPos() {
        return Math.floor(Math.floor(Math.random()*(1-360+1)+360) / 40) * 40;
    }

    // Спавн игрока
    function spawnUser() {
        userData.x_pos = genPos();
        userData.y_pos = genPos();
        let user = document.createElement('div');
        user.classList.add('user');
        field.appendChild(user);
        user.style.left = userData.x_pos + 'px';
        user.style.top = userData.y_pos + 'px';
    }

    // Спавн цели
    function spawnTarget() {
        // генерация позиции
        let target = document.createElement('div');
        target.classList.add('target');
        while (true) {
            targetData.x_pos = genPos();
            targetData.y_pos = genPos();
            if (targetData.x_pos === userData.x_pos && targetData.y_pos === userData.y_pos) {
                console.log('STONKS! SAME POSITION GENERATED')
            } else {
                break
            }
        }
        field.appendChild(target);
        target.style.left = targetData.x_pos + 'px';
        target.style.top = (targetData.y_pos - 40) + 'px';
    }

    // Проверка столкновения
    function checkCollide() {
        if (userData.x_pos === targetData.x_pos && userData.y_pos === targetData.y_pos) {
            field.removeChild(document.querySelector('.target'));
            winWindow.classList.remove('hide');
            winWindow.classList.add('show');
            if (gameData.baseScore <= 0) {
                gameData.baseScore = 0
            }
            gameData.score += gameData.baseScore;
            gameData.state = 'win';
            updateGameStat();
            gameData.level += 1;
            saveData();
        }
    }

    function saveData() {
        localStorage.setItem('level', gameData.level);
        localStorage.setItem('score', gameData.score);
    }

    function loadData() {
        gameData.level = parseInt(localStorage.getItem('level'));
        gameData.score = parseInt(localStorage.getItem('score'));
        updateGameStat();
    }

    function clearData() {
        localStorage.setItem('level', '0');
        localStorage.setItem('score', '0');
        gameData.score = 0;
        gameData.level = 0;
        updateGameStat();
    }

    function updateGameStat() {
        levelField.innerHTML = gameData.level;
        scoreField.innerHTML = gameData.score;
    }

    function stopGame() {

    }

    // Загрузка
    function startGame() {
        if (localStorage.getItem('level')) {
            loadData();
        }
        spawnUser();
        spawnTarget();
        console.log(gameData)
        // console.log(`user coords x:${userData.x_pos} y:${userData.y_pos}`)
    }

    startGame();

})