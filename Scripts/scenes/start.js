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
    var StartScene = /** @class */ (function (_super) {
        __extends(StartScene, _super);
        // Constructor
        function StartScene(assetManager) {
            var _this = _super.call(this, assetManager) || this;
            _this.Start();
            return _this;
        }
        // Methods
        StartScene.prototype.Start = function () {
            // Initialize our objects for this scene
            this.background = new objects.Background(this.assetManager);
            this.welcomeLabel = new objects.Label("Tales Of Dupri.", "35px", "Consolas", "#FFFFFF", 320, 90, true);
            this.welcomeLabel3 = new objects.Label("Space delivery extraordinaire.", "35px", "Consolas", "#FFFFFF", 320, 130, true);
            this.welcomeLabel1 = new objects.Label("A World of Adventure  and steamy meals Awaits you.", "20px", "Consolas", "#FFFFFF", 320, 160, true);
            this.welcomeLabel2 = new objects.Label("Are you ready ;)!!!!!!!", "20px", "Consolas", "#FFFFFF", 320, 180, true);
            // NOTE: PreloadJS manifest id
            this.startButton = new objects.Button(this.assetManager, "nextButton", 320, 300);
            this.Main();
        };
        StartScene.prototype.Update = function () {
            // this.background.Update();
        };
        StartScene.prototype.Main = function () {
            // Add items to the scene
            this.addChild(this.background);
            this.addChild(this.welcomeLabel);
            this.addChild(this.welcomeLabel1);
            this.addChild(this.welcomeLabel2);
            this.addChild(this.welcomeLabel3);
            this.addChild(this.startButton);
            this.startButton.on("click", this.startButtonClick);
        };
        StartScene.prototype.startButtonClick = function () {
            // Change from START to GAME scene
            objects.Game.currentScene = config.Scene.GAME;
        };
        return StartScene;
    }(objects.Scene));
    scenes.StartScene = StartScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=start.js.map