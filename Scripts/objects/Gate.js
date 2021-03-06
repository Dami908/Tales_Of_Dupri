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
    var Gate = /** @class */ (function (_super) {
        __extends(Gate, _super);
        // Variables
        // Constructor
        function Gate() {
            var _this = _super.call(this, "laser1") || this;
            _this.Start();
            return _this;
        }
        // Methods
        Gate.prototype.Start = function () {
            this.Reset();
        };
        Gate.prototype.Update = function () {
            this.Move();
            this.CheckBound();
        };
        Gate.prototype.Reset = function () {
            this.x = Math.floor(Math.random() * 540) + 50;
            this.y = Math.floor(Math.random() * -800) - 50;
        };
        Gate.prototype.Move = function () {
            this.y += 4;
        };
        Gate.prototype.end = function () {
            this.y = null;
        };
        Gate.prototype.CheckBound = function () {
            if (this.y >= 900 + this.halfH + 25) {
                this.Reset();
            }
        };
        return Gate;
    }(objects.GameObject));
    objects.Gate = Gate;
})(objects || (objects = {}));
//# sourceMappingURL=Gate.js.map