

window.onload = function () {
    var cntx = document.querySelector('canvas').getContext('2d');
    var sprites = initializeSprites();
    
    var enterprise = new PlayerObject(cntx.canvas.width/2, 450, sprites.enterprise, sprites.beam, sprites.ball, 0);
    var spaceships = new GameObjectsCollection(sprites.spaceship);
    beginGameWhenReady(sprites,()=>setInterval(mainLoop,25));

    var cmd;
    window.onkeydown = function (e) { cmd = e.key };
    var result = 800;
    //document.write(result);
    function mainLoop() {
    	
        cntx.clearRect(0, 0, cntx.canvas.width, cntx.canvas.height);
        cntx.font="20px Arial";
		cntx.strokeText("High score: " + result,10,70);
		cntx.strokeText("shotCounter: " + enterprise.shotCounter,10,20);
		cntx.strokeText("hits: " + enterprise.beams.hits,10,45);

        enterprise.parseCommand(cmd);
        cmd = undefined;

        spaceships.addNewObject(0, cntx.canvas.width - sprites.spaceship.img.width, 0, 0.01);
        spaceships.collection.forEach(el=>el.step(0, 1));
        spaceships.remove(obj=>obj.pos.y>cntx.canvas.height);

        enterprise.beams.collection.forEach(el=>el.step(0,-10));
        enterprise.beams.beamRemove(obj=>obj.pos.y < 0);
		
		enterprise.balls.collection.forEach(el=>el.step(0,0.3));
        enterprise.balls.remove(obj=>obj.pos < 0);

        //zestrzeliwanie
        enterprise.beams.collection.forEach(beam=>beam.pos.y);

        drawSprite(enterprise, cntx);
        spaceships.collection.forEach(el=>drawSprite(el, cntx));
        enterprise.beams.collection.forEach(el=>drawSprite(el, cntx));
		enterprise.balls.collection.forEach(el=>drawSprite(el, cntx));
    }
}

function initializeSprites() {
    return {
        enterprise: new SpriteImage('enterprise.png'),
        spaceship: new SpriteImage('spaceship.png'),
        beam: new SpriteImage('beam.png'),
		ball: new SpriteImage('ball.png')
    };
}

function beginGameWhenReady(sprites, callback) {
    var promises = [];
    for (var key in sprites) {
        promises.push(sprites[key].readyPromise);
    }

    Promise.all(promises).then(callback);

};

function drawSprite(obj, cntx) {
    cntx.drawImage(obj.sprite.img, obj.pos.x, obj.pos.y);
};

function SpriteImage(url) {
    let _img = new Image();

    let _readyPromise = new Promise((resolve, reject) => {
        _img.src = url;
        _img.onload = resolve;
    });

    _img.src = url;

    Object.defineProperty(this, 'img', {
        get: () =>_img
    });

    Object.defineProperty(this, 'readyPromise', {
        get: () =>_readyPromise
    });
}

function GameObject(x, y, sprite, shotCounter) {

    let _x = x;
    let _y = y;
    let _sprite = sprite;
    let _shotCounter = shotCounter;

    this.step = function (dx, dy) {
        
		_x += dx;
		_y += dy;
    };
    this.enterpriseStep = function (dx, dy) {
        
        if (this.pos.x+dx >=0 && this.pos.x+dx <= 540 )
		{
			_x += dx;
        }
        else
        {
        	_x = _x;
        }
        if (this.pos.y+dy >=0 && this.pos.y+dy <= 540 )
		{
			_y += dy;
        }
        else
        {
        	_y = _y;
        }
        //_y += dy;
    };

    this.enterpriseShot = function () {
        _shotCounter ++;
    };


    Object.defineProperty(this, 'pos', {
        get: () => {
            return {x: _x, y: _y}
        }
    });

    Object.defineProperty(this, 'sprite', {
        get: () => _sprite
    });

    Object.defineProperty(this, 'shotCounter', {
        get: () => _shotCounter
    });
}

function PlayerObject(x, y, sprite, beamSprite, ballSprite, shotCounter) {
    GameObject.call(this, x, y, sprite,shotCounter);

    let _stepSize = 35;
    let _commandList = [];
    _commandList['d'] = () =>this.enterpriseStep(_stepSize, 0);
    _commandList['s'] = () =>this.enterpriseStep(0, _stepSize);
    _commandList['a'] = () =>this.enterpriseStep(-_stepSize, 0);
    _commandList['w'] = () =>this.enterpriseStep(0,-_stepSize);
    _commandList['j'] = () =>{this.beams.addNewObject(this.pos.x, this.pos.x, this.pos.y, 1); (this.enterpriseShot())};
	_commandList['k'] = () =>this.balls.addNewObject(this.pos.x, this.pos.x, this.pos.y, 1);

    this.beams = new GameObjectsCollection(beamSprite);
    this.balls = new GameObjectsCollection(ballSprite);


	
    this.parseCommand = function (cmd) {
        if (cmd in _commandList) {
            _commandList[cmd]();
        }
    };
}

function GameObjectsCollection(sprite) {
    let _collection = [];
    let _hits = 0;
    let _sprite = sprite;

    this.addNewObject=function(xmin,xmax,y,prob){
        var r = Math.random();
        if (r < prob) {
            var x=Math.random()*(xmax-xmin)+xmin;
            _collection.push(new GameObject(x,y,_sprite));
        }
    }

    this.remove = function (filter) {
        var toRemove = [];
        for (var i = 0; i < _collection.length; i++) {
            var obj = _collection[i];
            if (filter(obj)==true) {
                toRemove.push(obj);
            }
        }
        for (var i = 0; i < toRemove.length; i++) {
            var ind = _collection.indexOf(toRemove[i]);
            _collection.splice(ind, 1);
        }
    }

    this.beamRemove = function (filter) {
        var toRemove = [];
        for (var i = 0; i < _collection.length; i++) {
            var obj = _collection[i];
            if (filter(obj)==true) {
                toRemove.push(obj);
                _hits++;
            }
        }
        for (var i = 0; i < toRemove.length; i++) {
            var ind = _collection.indexOf(toRemove[i]);
            _collection.splice(ind, 1);
        }
    }

    Object.defineProperty(this, 'collection', {
        get: ()=>_collection
    });

    Object.defineProperty(this, 'hits', {
        get: ()=>_hits
    });
}
