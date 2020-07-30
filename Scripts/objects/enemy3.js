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
    var Enemy3 = /** @class */ (function (_super) {
        __extends(Enemy3, _super);
        // Variables
        // Constructor
        function Enemy3(assetManager) {
            var _this = _super.call(this, assetManager, "Spaceship") || this;
            _this.Start();
            return _this;
        }
        // Methods
        Enemy3.prototype.Start = function () {
            this.Reset();
        };
        Enemy3.prototype.Update = function () {
            this.Move();
            this.CheckBound();
        };
        Enemy3.prototype.Reset = function () {
            this.y = Math.floor(Math.random() * 840) + 50;
            this.x = Math.floor(Math.random() * 900) + 650;
        };
        Enemy3.prototype.Move = function () {
            this.x -= 8;
        };
        Enemy3.prototype.end = function () {
            this.x = null;
        };
        Enemy3.prototype.CheckBound = function () {
            if (this.x <= -400 + this.halfH + 25) {
                this.Reset();
            }
        };
        return Enemy3;
    }(objects.GameObject));
    objects.Enemy3 = Enemy3;
})(objects || (objects = {}));
//# sourceMappingURL=enemy3.js.map