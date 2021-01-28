document.addEventListener('DOMContentLoaded', () => {

    const user = document.querySelector('.user');
    // const target = document.querySelector('.target');
    const winWindow = document.querySelector('.win');
    const continueButton = document.querySelector('.continue');
    const field = document.querySelector('.field');
    const scoreField = document.querySelector('#score');

    const userData = {
        'score': 0,
        'x_pos': 0,
        'y_pos': 0
    };
    const targetData = {
        'x_pos': 0,
        'y_pos': 0
    }

    // Continue event
    continueButton.addEventListener('click', () => {
        winWindow.classList.remove('show');
        winWindow.classList.add('hide');
        spawnTarget();
    })

    // Key events
    window.addEventListener('keydown', (event) => {
        console.log(event.code);
        if (event.code === 'ArrowUp' || event.code === 'ArrowDown'
        || event.code === 'ArrowLeft' || event.code === 'ArrowRight') {
            moveUser(event.code);
            checkCollide();
        }
    })

    // Moving user
    function moveUser(where) {
        switch (where) {
            case 'ArrowUp':
                userData.y_pos = moveCheck(userData.y_pos - 40);
                user.style.top = userData.y_pos + 'px';
                break;
            case 'ArrowDown':
                userData.y_pos = moveCheck(userData.y_pos + 40);
                user.style.top = userData.y_pos + 'px';
                break;
            case 'ArrowLeft':
                userData.x_pos = moveCheck(userData.x_pos - 40);
                user.style.left = userData.x_pos + 'px';
                break;
            case 'ArrowRight':
                userData.x_pos = moveCheck(userData.x_pos + 40);
                user.style.left = userData.x_pos + 'px';
                break
            default:
                console.log('Error')
        }
        // console.log(`user coords x:${userData.x_pos} y:${userData.y_pos}`)
    }

    // Move allow check
    function moveCheck(position) {
        if (position <= 0) {
            return 0
        } else if (position > 360) {
            return 360
        } else {
            return position
        }
    }

    // Generate random position
    function genPos() {
        return Math.floor(Math.floor(Math.random()*(1-360+1)+360) / 40) * 40;
    }

    // Spawn user
    function spawnUser() {
        userData.x_pos = genPos();
        userData.y_pos = genPos();
        user.style.left = userData.x_pos + 'px';
        user.style.top = userData.y_pos + 'px';
    }

    // Spawn target
    function spawnTarget() {
        //generate position
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

    // Check collide
    function checkCollide() {
        if (userData.x_pos === targetData.x_pos && userData.y_pos === targetData.y_pos) {
            field.removeChild(document.querySelector('.target'));
            winWindow.classList.remove('hide');
            winWindow.classList.add('show');
            userData.score += 1;
            scoreField.innerHTML = userData.score;
        }
    }

    // Initialization
    function startGame() {
        spawnUser();
        spawnTarget();
        // console.log(`user coords x:${userData.x_pos} y:${userData.y_pos}`)
    }

    startGame();

})