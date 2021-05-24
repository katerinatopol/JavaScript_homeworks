'use strict';
const settings = {
    rowCount: 10,
    colCount : 10,
    startPositionX: 0,
    startPositionY: 0,
    startDirection: 'right',
    stepsInSecond: 5,
    playerCellColor: '#AA3333',
    emptyCellColor: '#eee',
};

const player = {
    x: null,
    y: null,
    direction: null,

    setDirection(direction) {
        this.direction = direction;
    },

    init(startX, startY, direction) {
        this.x = startX;
        this.y = startY;
        this.setDirection(direction);
    },

    makeStep() {
        const nextPoint = this.getNextStepPoint();
        this.x = nextPoint.x;
        this.y = nextPoint.y;
    },

    getNextStepPoint() {
        const point = {
            x: this.x,
            y: this.y,
        };

        switch (this.direction) {
            case 'up':
                point.y--;
                break;
            case 'right':
                point.x++;
                break;
            case 'down':
                point.y++;
                break;
            case 'left':
                point.x--;
                break;
        }

        return point;
    },
};

const game = {
    settings,
    player,
    conteinerElement: null,
    cellElements: [],

    run() {
        this.init();
        this.render();

        setInterval(function () {
            if (this.canPlayerMakeStep()) {
                this.player.makeStep();
                this.render();
            }
        }.bind(this), 1000 / this.settings.stepsInSecond);
    },

    init() {
        this.conteinerElement = document.getElementById('game');
        this.player.init(this.settings.startPositionX, this.settings.startPositionY, this.settings.startDirection);
        this.initCells();
        this.initEventHandlers();
    },

    initCells() {
        this.conteinerElement.innerHTML = '';
        this.cellElements = [];

        for (let row = 0; row < this.settings.rowCount; row++) {
            const trElem = document.createElement('tr');
            this.conteinerElement.appendChild(trElem);

            for (let col = 0; col < this.settings.colCount; col++){
                const cell = document.createElement('td');
                trElem.appendChild(cell);

                this.cellElements.push(cell);
            }
        }
    },

    initEventHandlers() {
        document.addEventListener('keydown', function(event) {this.keyDownHendler(event)}.bind(this));
    },

    keyDownHendler(event) {
        // console.log(event);
        switch (event.code) {
            case 'KeyW':
            case 'ArrowUp':
                this.player.setDirection('up');
                break;
            case 'KeyD':
            case 'ArrowRight':
                this.player.setDirection('right');
                break;
            case 'KeyS':
            case 'ArrowDown':
                this.player.setDirection('down');
                break;
            case 'KeyA':
            case 'ArrowLeft':
                this.player.setDirection('left');
                break;
        }
    },

    render() {
        this.cellElements.forEach(function (td) {
            td.style.backgroundColor = this.settings.emptyCellColor;
        }.bind(this));

        const playerCell = document
            .querySelector(`tr:nth-child(${this.player.y + 1})`)
            .querySelector(`td:nth-child(${this.player.x + 1})`);
        
        
        
        
        playerCell.style.backgroundColor = this.settings.playerCellColor;
    },
    
    canPlayerMakeStep() {
        const nextPoint = this.player.getNextStepPoint();

        return nextPoint.x >= 0 &&
            nextPoint.x < this.settings.colCount &&
            nextPoint.y >= 0 &&
            nextPoint.y < this.settings.rowCount;
    }
};

game.run();