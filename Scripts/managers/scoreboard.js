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
var managers;
(function (managers) {
    var Scoreboard = /** @class */ (function (_super) {
        __extends(Scoreboard, _super);
        // Constructor
        function Scoreboard() {
            var _this = _super.call(this) || this;
            _this.Init();
            return _this;
        }
        Object.defineProperty(Scoreboard.prototype, "Lives", {
            get: function () {
                return this.lives;
            },
            set: function (LivesTotal) {
                this.lives = LivesTotal;
                this.livesLabel.text = "Total Lives: " + this.lives;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Scoreboard.prototype, "Time", {
            get: function () {
                return this.Timer;
            },
            set: function (newTime) {
                this.Timer = newTime;
                this.scoreLabel.text = "Time Left: " + this.Timer;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Scoreboard.prototype, "Score", {
            get: function () {
                return this.score;
            },
            set: function (newScore) {
                this.score = newScore;
                this.scoreLabel.text = "Score: " + this.score;
            },
            enumerable: false,
            configurable: true
        });
        // Methods
        Scoreboard.prototype.Init = function () {
            // Create our labels
            this.scoreLabel = new objects.Label("Score: 999999", "20px", "Consolas", "#FFFF00", 0, 0, false);
            this.TimerLabel = new objects.Label("Time Left: 0", "20px", "Consolas", "#FFFF00", 230, 0, false);
            this.livesLabel = new objects.Label("Food Integrity: 0", "20px", "Consolas", "#FFFF00", 460, 0, false);
            // Set a default score
            this.score = 0;
            this.Main();
        };
        Scoreboard.prototype.Main = function () {
            this.addChild(this.scoreLabel);
            this.addChild(this.TimerLabel);
            this.addChild(this.livesLabel);
        };
        return Scoreboard;
    }(createjs.Container));
    managers.Scoreboard = Scoreboard;
})(managers || (managers = {}));
//# sourceMappingURL=scoreboard.js.map