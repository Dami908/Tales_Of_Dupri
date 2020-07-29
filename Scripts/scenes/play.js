var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var scenes;
(function (scenes) {
    var PlayScene = /** @class */ (function (_super) {
        __extends(PlayScene, _super);
        // Constructor
        function PlayScene(assetManager) {
            var _this = _super.call(this, assetManager) || this;
            _this.timer = 0;
            _this.Stimer = 10000;
            _this.Start();
            return _this;
        }
        PlayScene.prototype.Start = function () {
            console.log("Play scene start");
            // Inintialize our variables
            this.background2 = new objects.Background2(this.assetManager);
            this.player = new objects.Player(this.assetManager);
            this.enemy = new objects.Enemy(this.assetManager);
            this.enemies = new Array();
            this.enemies2 = new Array();
            this.enemies3 = new Array();
            this.enemyNum = 2;
            this.enemyNum2 = 3;
            this.enemyNum3 = 4;
            for (var i = 0; i < this.enemyNum; i++) {
                this.enemies[i] = new objects.Enemy(this.assetManager);
            }
            for (var i = 0; i < this.enemyNum2; i++) {
                this.enemies2[i] = new objects.Enemy2(this.assetManager);
            }
            for (var i = 0; i < this.enemyNum3; i++) {
                this.enemies3[i] = new objects.Enemy3(this.assetManager);
            }
            this.scoreBoard = new managers.Scoreboard();
            this.scoreBoard.x = 10;
            this.scoreBoard.y = 10;
            this.Main();
        };
        PlayScene.prototype.Update = function () {
            var _this = this;
            // this.background.Update();
            this.player.Update();
            //this.enemy.Update();
            this.counter = this.timer++;
            this.scoreCounter = this.Stimer--;
            this.scoreBoard.scoreLabel.text = "Score:" + this.counter;
            this.scoreBoard.TimerLabel.text = "Time Left" + this.scoreCounter;
            //Returns a message on the onsole log window when the position of the enemy is equall to the position of the player
            if (this.counter < 2500) {
                console.log(this.counter);
                this.enemies.forEach(function (e) {
                    e.Update();
                    managers.Collision.Check(_this.player, e);
                });
            }
            else if (this.counter > 2500 && this.counter < 5000) {
                console.log(this.counter);
                this.enemies.forEach(function (e) {
                    e.Update();
                    managers.Collision.Check(_this.player, e);
                });
                this.enemies2.forEach(function (e) {
                    e.Update();
                    managers.Collision.Check(_this.player, e);
                });
            }
            else if (this.counter > 5000) {
                console.log(this.counter);
                this.enemies.forEach(function (e) {
                    e.Update();
                    managers.Collision.Check(_this.player, e);
                });
                this.enemies2.forEach(function (e) {
                    e.Update();
                    managers.Collision.Check(_this.player, e);
                });
                this.enemies3.forEach(function (e) {
                    e.Update();
                    managers.Collision.Check(_this.player, e);
                });
            }
            if (this.scoreCounter == 0) {
                managers.Game.currentScene = config.Scene.OVER;
            }
        };
        PlayScene.prototype.Main = function () {
            var _this = this;
            this.addChild(this.background2);
            this.addChild(this.player);
            this.enemies.forEach(function (e) {
                _this.addChild(e);
            });
            this.enemies2.forEach(function (e) {
                _this.addChild(e);
            });
            this.enemies3.forEach(function (e) {
                _this.addChild(e);
            });
            this.addChild(this.scoreBoard);
        };
        return PlayScene;
    }(objects.Scene));
    scenes.PlayScene = PlayScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map