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
    var InfoScene = /** @class */ (function (_super) {
        __extends(InfoScene, _super);
        // Constructor
        function InfoScene(assetManager) {
            var _this = _super.call(this, assetManager) || this;
            _this.Start();
            return _this;
        }
        // Methods
        InfoScene.prototype.Start = function () {
            // Initialize our objects for this scene
            this.background = new objects.Background(this.assetManager);
            this.welcomeLabel = new objects.Label("INFO.", "35px", "Consolas", "#FFFFFF", 305, 40, true);
            this.welcomeLabel3 = new objects.Label("1.) You start the level with 4 lives.", "25px", "Consolas", "#FFFFFF", 305, 100, true);
            this.welcomeLabel1 = new objects.Label("2.) Dodge all incoming traffic from both asteroids and ships.", "15px", "Consolas", "#FFFFFF", 305, 150, true);
            this.welcomeLabel2 = new objects.Label("3.)Outlast the timer and get the delivery to the client ;)!!!!!!!", "15px", "Consolas", "#FFFFFF", 305, 190, true);
            this.welcomeLabel4 = new objects.Label("3.)Key score periods 2500 and 5000", "25px", "Consolas", "#FFFFFF", 305, 230, true);
            // NOTE: PreloadJS manifest id
            this.startButton = new objects.Button(this.assetManager, "nextButton", 150, 700);
            //Instantiate Sound
            this.Main();
        };
        InfoScene.prototype.Update = function () {
            // this.background.Update();
        };
        InfoScene.prototype.Main = function () {
            // Add items to the scene
            this.addChild(this.background);
            this.addChild(this.welcomeLabel);
            this.addChild(this.welcomeLabel1);
            this.addChild(this.welcomeLabel2);
            this.addChild(this.welcomeLabel3);
            this.addChild(this.welcomeLabel4);
            this.addChild(this.startButton);
            this.startButton.on("click", this.startButtonClick);
        };
        InfoScene.prototype.startButtonClick = function () {
            // Change from START to GAME scene
            managers.Game.currentScene = config.Scene.GAME;
        };
        return InfoScene;
    }(objects.Scene));
    scenes.InfoScene = InfoScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=Info.js.map