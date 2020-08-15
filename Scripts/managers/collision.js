var managers;
(function (managers) {
    var Collision = /** @class */ (function () {
        function Collision() {
        }
        Collision.Check = function (obj1, obj2) {
            // Create a temp Vec2 object for each object passed in.
            var P1 = new math.Vec2(obj1.x, obj1.y);
            var P2 = new math.Vec2(obj2.x, obj2.y);
            var p3;
            if (math.Vec2.Distance(P1, P2) < (obj1.halfH + obj2.halfH)) {
                if (!obj2.isColliding) {
                    // React to our collision
                    // Check what I am colliding with. 
                    switch (obj2.name) {
                        case "asteroids":
                            createjs.Sound.play("explode");
                            console.log("collision", this.lives -= 25);
                            //createjs.Sound.play("explosion");
                            //console.log("collision");
                            break;
                        case "craft":
                            createjs.Sound.play("explode");
                            console.log("collision", this.lives -= 25);
                            break;
                        case "Spaceship":
                            createjs.Sound.play("explode");
                            console.log("collision", this.lives -= 25);
                            break;
                    }
                    obj2.isColliding = true;
                    if (this.lives == 0) {
                        managers.Game.currentScene = config.Scene.OVER;
                        this.lives = 100;
                    }
                }
            }
            else {
                obj2.isColliding = false;
            }
        };
        Collision.lives = 100;
        return Collision;
    }());
    managers.Collision = Collision;
})(managers || (managers = {}));
//# sourceMappingURL=collision.js.map