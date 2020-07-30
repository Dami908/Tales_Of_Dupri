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
    var WinScene = /** @class */ (function (_super) {
        __extends(WinScene, _super);
        // Constructor
        function WinScene(assetManager) {
            var _this = _super.call(this, assetManager) || this;
            _this.Start();
            return _this;
        }
        // Method
        WinScene.prototype.Start = function () {
            // Initialize our variables
            this.background3 = new objects.Background3(this.assetManager);
            this.gameOverLabel = new objects.Label("Congratulations you did it!", "35px", "Consolas", "#FFFFFF", 315, 240, true);
            this.welcomeLabel1 = new objects.Label("Another excellent delivery ;).", "20px", "Consolas", "#FFFFFF", 320, 340, true);
            this.backButton = new objects.Button(this.assetManager, "backButton", 320, 440);
            this.Main();
        };
        WinScene.prototype.Update = function () { };
        WinScene.prototype.Main = function () {
            this.addChild(this.background3);
            this.addChild(this.gameOverLabel);
            this.addChild(this.welcomeLabel1);
            this.addChild(this.backButton);
            this.backButton.on("click", this.backButtonClick);
        };
        WinScene.prototype.backButtonClick = function () {
            managers.Game.currentScene = config.Scene.GAME;
        };
        return WinScene;
    }(objects.Scene));
    scenes.WinScene = WinScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=WinScene.js.map