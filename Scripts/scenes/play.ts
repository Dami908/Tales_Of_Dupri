module scenes {
    export class PlayScene extends objects.Scene {
        // Variables
        private background2: objects.Background2;
        private player:objects.Player;
        private enemy:objects.Enemy;
        private enemies:objects.Enemy[];
        private enemyNum:number;
        private timer:number=0;
        private counter:number;

        // Constructor
        constructor(assetManager:createjs.LoadQueue) {
            super(assetManager);

            this.Start();
        }

        public Start():void {
            console.log("Play scene start");
            // Inintialize our variables
            this.background2 = new objects.Background2(this.assetManager);
            this.player = new objects.Player(this.assetManager);
            this.enemy = new objects.Enemy(this.assetManager);
            this.enemies = new Array<objects.Enemy>();
            this.enemyNum = 2;
            for(let i = 0; i < this.enemyNum; i++) {
                this.enemies[i] = new objects.Enemy(this.assetManager);
                
            }
          

            this.Main();
        }

        public Update():void {
            // this.background.Update();
            this.player.Update();
             //this.enemy.Update();
             this.counter=this.timer++;
             //Returns a message on the console log window when the position of the enemy is equall to the position of the player
             if (this.counter<10000){
                 console.log(this.counter);
                this.enemies.forEach(e => {
                    e.Update();
                    managers.Collision.Check(this.player,e);
                })
             }
             else if(this.counter>10000){
                this.enemies.forEach(e => {
                    e.end();
                })
             }
            
           
        }

       

        public Main():void {
            this.addChild(this.background2);
            this.addChild(this.player);
             this.addChild(this.enemy);
            this.enemies.forEach(e => {
                this.addChild(e);
            })
        }
    }
}