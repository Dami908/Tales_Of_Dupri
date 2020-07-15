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
            this.enemyNum = 1;
            for (var i = 0; i < this.enemyNum; i++) {
                this.enemies[i] = new objects.Enemy(this.assetManager);
            }
            this.Main();
        };
        PlayScene.prototype.Update = function () {
            // this.background.Update();
            this.player.Update();
            this.enemy.Update();
            //Returns a message on the console log window when the position of the enemy is equall to the position of the player
            if (this.player.x == this.enemy.x || this.player.y == this.enemy.y) {
                console.log("collide");
            }
            this.enemies.forEach(function (e) {
                e.Update();
                //console.log(e.x);
                // if(e.x==this.player.x && e.y==this.player.y){
                //     console.log(e.y);
                //  }
            });
        };
        PlayScene.prototype.collission = function () {
            for (var i = 0; i < this.enemyNum; i++) {
            }
        };
        PlayScene.prototype.Main = function () {
            var _this = this;
            this.addChild(this.background2);
            this.addChild(this.player);
            this.addChild(this.enemy);
            this.enemies.forEach(function (e) {
                _this.addChild(e);
            });
        };
        return PlayScene;
    }(objects.Scene));
    scenes.PlayScene = PlayScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map