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
    var InfoScene2 = /** @class */ (function (_super) {
        __extends(InfoScene2, _super);
        // Constructor
        function InfoScene2() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // Methods
        InfoScene2.prototype.Start = function () {
            // Initialize our objects for this scene
            this.background = new objects.Background();
            this.welcomeLabel = new objects.Label("lEVEL 2 INFO.", "35px", "Consolas", "#FFFFFF", 305, 40, true);
            this.welcomeLabel3 = new objects.Label("1.) You start the level with 1 life.", "25px", "Consolas", "#FFFFFF", 305, 100, true);
            this.welcomeLabel1 = new objects.Label("2.) Dodge all incoming incoming asteroids and collect fuel rods", "15px", "Consolas", "#FFFFFF", 305, 150, true);
            this.welcomeLabel2 = new objects.Label("3.)Outlast the asteroids and get up to five fuel rods ;)!!!!!!!", "15px", "Consolas", "#FFFFFF", 305, 190, true);
            this.welcomeLabel4 = new objects.Label("3.)Remember youre monitoring systems have ben disabled", "15px", "Consolas", "#FFFFFF", 305, 230, true);
            this.welcomeLabel5 = new objects.Label("4.)Hope Youre good at math muahaahahahahahha", "15px", "Consolas", "#FFFFFF", 305, 370, true);
            // NOTE: PreloadJS manifest id
            this.startButton = new objects.Button("nextButton", 320, 700);
            //Instantiate Sound
            this.Main();
        };
        InfoScene2.prototype.Update = function () {
            // this.background.Update();
        };
        InfoScene2.prototype.Main = function () {
            // Add items to the scene
            this.addChild(this.background);
            this.addChild(this.welcomeLabel);
            this.addChild(this.welcomeLabel1);
            this.addChild(this.welcomeLabel2);
            this.addChild(this.welcomeLabel3);
            this.addChild(this.welcomeLabel4);
            this.addChild(this.welcomeLabel5);
            this.addChild(this.startButton);
            this.startButton.on("click", this.startButtonClick);
        };
        InfoScene2.prototype.startButtonClick = function () {
            // Change from START to GAME scene
            managers.Game.currentScene = config.Scene.PLAY2;
        };
        return InfoScene2;
    }(objects.Scene));
    scenes.InfoScene2 = InfoScene2;
})(scenes || (scenes = {}));
//# sourceMappingURL=Info2.js.map