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
    var GameOverScene = /** @class */ (function (_super) {
        __extends(GameOverScene, _super);
        // Constructor
        function GameOverScene() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // Method
        GameOverScene.prototype.Start = function () {
            // Initialize our variables
            this.background2 = new objects.Background4();
            this.gameOverLabel = new objects.Label("Best Delivery more like crappy delivery!", "25px", "Consolas", "#FFFFFF", 320, 240, true);
            this.backButton = new objects.Button("backButton", 370, 340);
            this.homeButton = new objects.Button("Home", 250, 340);
            this.Main();
        };
        GameOverScene.prototype.Update = function () { };
        GameOverScene.prototype.Main = function () {
            this.addChild(this.background2);
            this.addChild(this.gameOverLabel);
            this.addChild(this.backButton);
            this.addChild(this.homeButton);
            this.backButton.on("click", this.backButtonClick);
            this.homeButton.on("click", this.homeButtonClick);
        };
        GameOverScene.prototype.backButtonClick = function () {
            managers.Game.currentScene = config.Scene.GAME;
        };
        GameOverScene.prototype.homeButtonClick = function () {
            createjs.Sound.stop();
            managers.Game.currentScene = config.Scene.START;
        };
        return GameOverScene;
    }(objects.Scene));
    scenes.GameOverScene = GameOverScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=gameover.js.map