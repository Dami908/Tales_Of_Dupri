module managers{
    export class Collision{
        public static lives:number=100;
        private static enemy:objects.Enemy;
        public  scoreBoard:managers.Scoreboard;
       
        public static Check(obj1: objects.GameObject, obj2: objects.GameObject)
        {
          
            // Create a temp Vec2 object for each object passed in.
            let P1: math.Vec2 = new math.Vec2(obj1.x, obj1.y);
            let P2: math.Vec2 = new math.Vec2(obj2.x, obj2.y);
            let p3:number;
           

            if(math.Vec2.Distance(P1, P2) < (obj1.halfH + obj2.halfH)) {
               
                if(!obj2.isColliding)
                {
                   
                    // React to our collision
                    // Check what I am colliding with. 
                    switch(obj2.name) {
                        case "asteroids":

                           createjs.Sound.play("explode");
                           console.log("collision", this.lives-=25);
                            
                            //createjs.Sound.play("explosion");
                            //console.log("collision");
                        break;
                        case "craft":
                                createjs.Sound.play("explode");
                                console.log("collision", this.lives-=25);
                        break;
                        case "Spaceship":
                                createjs.Sound.play("explode");
                                console.log("collision", this.lives-=25);
                         break;
                        
                       
                    }
                   
                   
                    obj2.isColliding = true;
                    if(this.lives==0 ){
                        managers.Game.currentScene=config.Scene.PLAY2;
                        this.lives=100;
                     }
                }
            }
            else
            {
                obj2.isColliding = false;
            }
            
        }
       
      
    }
}