
(function() {
    const spriteElement = document.getElementById('characterSprite');
    if (!spriteElement) {
        console.warn("Character sprite element (#characterSprite) not found.");
        return;
    }

    const SMILE_1 = 'images/smile_1.png';
    const SMILE_2 = 'images/smile_2.png';
    const SMILE_FUNNY = 'images/smile_funny.png';

    const preload1 = new Image();
    preload1.src = SMILE_1;
    const preload2 = new Image();
    preload2.src = SMILE_2;

    let isCurrentlySmiling = true;
    let currentTimeout = null;

    function showSmile2ThenReturn() {
        if (!isCurrentlySmiling) return;

        spriteElement.src = SMILE_2;
        isCurrentlySmiling = false;

        currentTimeout = setTimeout(() => {
            spriteElement.src = SMILE_1;
            isCurrentlySmiling = true;
            currentTimeout = null;
            scheduleNextCycle();
        }, 1000);
    }

    function scheduleNextCycle() {
        if (currentTimeout) {
            clearTimeout(currentTimeout);
            currentTimeout = null;
        }

        const minDelay = 5000;   // 5 seconds
        const maxDelay = 8000;   // 8 seconds
        const randomDelay = Math.floor(Math.random() * (maxDelay - minDelay + 1) + minDelay);

        currentTimeout = setTimeout(() => {
            showSmile2ThenReturn();
        }, randomDelay);
    }

    scheduleNextCycle();

    window.addEventListener('beforeunload', () => {
        if (currentTimeout) {
            clearTimeout(currentTimeout);
        }
    });
    spriteElement.addEventListener('click', () => {
        if (currentTimeout) {
            clearTimeout(currentTimeout);
            currentTimeout = null;
        }
        console.log("why.");
        spriteElement.src = SMILE_FUNNY;
        scheduleNextCycle();
    });
})();