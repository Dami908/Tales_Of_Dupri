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
var objects;
(function (objects) {
    var Background2 = /** @class */ (function (_super) {
        __extends(Background2, _super);
        // Constructor
        function Background2() {
            var _this = _super.call(this, managers.Game.assetManager.getResult("background2")) || this;
            // Variables
            _this.speedY = 0.5;
            console.log("Creating the background");
            _this.Start();
            return _this;
        }
        // Functions
        Background2.prototype.Start = function () {
            this.Reset();
        };
        Background2.prototype.Update = function () {
            this.Move();
            this.CheckBound();
        };
        Background2.prototype.Reset = function () {
            // Reset my background y position.
            console.log("RESET!");
        };
        Background2.prototype.Move = function () {
            this.y += this.speedY;
        };
        // Collision Detection
        Background2.prototype.CheckBound = function () {
            if (this.y >= 0) {
                this.Reset();
            }
        };
        return Background2;
    }(createjs.Bitmap));
    objects.Background2 = Background2;
})(objects || (objects = {}));
//# sourceMappingURL=background2.js.map