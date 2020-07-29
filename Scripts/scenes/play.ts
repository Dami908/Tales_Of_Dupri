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
        private scoreCounter:number;
        private label:objects.Label;
        private Stimer:number=100;
        private scoreBoard:managers.Scoreboard;

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
            this.scoreBoard = new managers.Scoreboard();
            

            this.scoreBoard.x = 10;
            this.scoreBoard.y = 10;
          

            this.Main();
        }

        public Update():void {
            // this.background.Update();
            this.player.Update();
             //this.enemy.Update();
             this.counter=this.timer++;
             this.scoreCounter=this.Stimer--;
             this.scoreBoard.scoreLabel.text="Score:"+this.counter;
             //Returns a message on the console log window when the position of the enemy is equall to the position of the player
             if (this.counter<10000){
                 console.log(this.counter);
                this.enemies.forEach(e => {
                    e.Update();
                    managers.Collision.Check(this.player,e);
                })
             }
             else if(this.counter>100){
                this.enemies.forEach(e => {
                    e.end();
                })
             }
            if(this.scoreCounter==0){
                managers.Game.currentScene=config.Scene.OVER;
            }
           
        }

       

        public Main():void {
            this.addChild(this.background2);
            this.addChild(this.player);
             this.addChild(this.enemy);
            this.enemies.forEach(e => {
                this.addChild(e);
            })
            this.addChild(this.scoreBoard);
        }
    }
}