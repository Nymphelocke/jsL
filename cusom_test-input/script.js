document.addEventListener('DOMContentLoaded', () => {

    // const user = document.querySelector('.user');
    // const target = document.querySelector('.target');
    const winWindow = document.querySelector('.win');
    const continueButton = document.querySelector('.continue');
    const field = document.querySelector('.field');
    const scoreField = document.querySelector('#score');
    const levelField = document.querySelector('#level');
    const clearScore = document.querySelector('.clearScore');
    let treeElements = []

    const gameData = {
        state: 'play',
        level: 0,
        score: 0,
        baseScore: 15,
        trees: []
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
        removeTrees();
        spawnTrees();
        spawnTarget();
        spriteAnimate(true);
        console.log(gameData)
    }
    continueButton.addEventListener('click', nextLevel)

    // События
    window.addEventListener('keydown', (event) => {
        let user = document.querySelector('.user');
        if (event.code === 'ArrowUp' || event.code === 'ArrowDown'
        || event.code === 'ArrowLeft' || event.code === 'ArrowRight') {
            moveUser(user, event.code);
            console.log(targetData)
            console.log(userData)
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
        user.classList.add('idle_anim-4');
        field.prepend(user);
        user.style.left = userData.x_pos + 'px';
        user.style.top = userData.y_pos + 'px';
    }

    // Анимация игрока
    function spriteAnimate(restart=false) {
        let user = document.querySelector('.user');
        let target = document.querySelector('.target');
        let animationTimer = setInterval(() => {
            setTimeout(() => {
                user.classList.remove('idle_anim-4');
                user.classList.add('idle_anim-1');
                target.classList.remove('target_anim-4');
                target.classList.add('target_anim-1');
            }, 0);
            setTimeout(() => {
                user.classList.remove('idle_anim-1');
                user.classList.add('idle_anim-2');
                target.classList.remove('target_anim-1');
                target.classList.add('target_anim-2');
            }, 500);
            setTimeout(() => {
                user.classList.remove('idle_anim-2');
                user.classList.add('idle_anim-3');
                target.classList.remove('target_anim-2');
                target.classList.add('target_anim-3');
            }, 1000);
            setTimeout(() => {
                user.classList.remove('idle_anim-3');
                user.classList.add('idle_anim-4');
                target.classList.remove('target_anim-3');
                target.classList.add('target_anim-4');
            }, 1500);
        }, 2000);
        if (restart) {
            clearInterval(animationTimer);
            spriteAnimate();
        }
    }

    // Спавн цели
    function spawnTarget() {
        // генерация позиции
        let target = document.createElement('div');
        target.classList.add('target');
        target.classList.add('target_anim-4');
        while (true) {
            targetData.x_pos = genPos();
            targetData.y_pos = genPos();
            if (targetData.x_pos === userData.x_pos && targetData.y_pos === userData.y_pos) {
                console.log('STONKS! SAME POSITION GENERATED')
            } else {
                break
            }
        }
        ;
        field.prepend(target);
        target.style.left = targetData.x_pos + 'px';
        target.style.top = (targetData.y_pos + 40) + 'px';
    }

    // Создание деревьев
    function spawnTrees() {
        function getRandomInt(max) {
            return Math.floor(Math.random() * Math.floor(max));
        }
        let treeCount = getRandomInt(8);
        for (let i = 1; i <= treeCount + 1; i++) {
            let treeObject = document.createElement('div');
            treeObject.classList.add('tree');
            let pos_x = genPos();
            let pos_y = genPos();
            field.appendChild(treeObject);
            treeObject.style.left = pos_x + 'px';
            treeObject.style.top = (pos_y - 80 * i) + 'px';
            gameData.trees.push([pos_x, pos_y]);
            treeElements.push(treeObject);
        }
    }

    // Удаление деревьев
    function removeTrees() {
        treeElements.forEach((item) => {
            item.remove();
        })
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
        spawnTrees();
        spawnUser();
        spawnTarget();
        spriteAnimate();
        console.log(gameData.trees.pos_y)
        // console.log(`user coords x:${userData.x_pos} y:${userData.y_pos}`)
    }

    startGame();

})