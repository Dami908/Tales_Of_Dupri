var managers;
(function (managers) {
    var Collision2 = /** @class */ (function () {
        function Collision2() {
        }
        Collision2.Check = function (obj1, obj2) {
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
                            var p = document.getElementById("new");
                            p.innerHTML = "" + this.lives;
                            console.log("collision", this.lives -= 25);
                            break;
                        case "Spaceship":
                            createjs.Sound.play("explode");
                            console.log("collision", this.lives -= 25);
                            break;
                        case "laser1":
                            createjs.Sound.play("explode");
                            console.log("Power cell", this.lives += 25);
                    }
                    obj2.isColliding = true;
                    if (this.lives == 0) {
                        managers.Game.currentScene = config.Scene.OVER;
                        //this.lives=100;
                    }
                    else if (this.lives == 125) {
                        managers.Game.currentScene = config.Scene.WIN;
                    }
                }
            }
            else {
                obj2.isColliding = false;
            }
        };
        Collision2.lives = 0;
        return Collision2;
    }());
    managers.Collision2 = Collision2;
})(managers || (managers = {}));
//# sourceMappingURL=collision2.js.map