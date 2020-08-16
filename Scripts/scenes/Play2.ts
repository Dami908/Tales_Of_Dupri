module scenes{
    export class Play2Scene extends objects.Scene{
        // Variables
        private background2: objects.Background5;
        private player:objects.Player;
        private enemy:objects.Enemy;
        private enemies:objects.Enemy[];
        private enemies2:objects.Enemy2[];
        private enemies3:objects.Enemy3[];
        private enemyNum2:number;
        private enemyNum:number;
        private enemyNum3:number;
        private timer:number=0;
        private counter:number;
        private scoreCounter:number;
        private Stimer:number=10000;
        private collided:boolean;
        private scoreBoard:managers.Scoreboard;
        private lives:managers.Collision2;
        private Ring:objects.Gate;
        private Rings:objects.Gate[];
        private ringNum:number;

        // Constructor
        constructor() {
            super();
            this.Start();
        }

        public Start():void {
            console.log("Play scene start");
            // Inintialize our variables
            this.background2 = new objects.Background5();
            this.player = new objects.Player();
            this.enemy = new objects.Enemy();
            this.enemies = new Array<objects.Enemy>();
            this.enemies2=new Array<objects.Enemy>();
            this.enemies3=new Array<objects.Enemy3>();
            this.Ring=new objects.Gate();
            this.Rings=new Array<objects.Gate>();
            this.ringNum=1;
            this.enemyNum = 3;
            this.enemyNum2 = 3
            this.enemyNum3 = 4;
            for(let i = 0; i < this.enemyNum; i++) {
                this.enemies[i] = new objects.Enemy();
            }
            for(let i=0;i<this.enemyNum2;i++){
                this.enemies2[i]=new objects.Enemy();
            }
            for(let i=0;i<this.ringNum;i++){
                this.Rings[i]=new objects.Gate();
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
             this.scoreBoard.TimerLabel.text="Time Left:"+this.scoreCounter;
             //Returns a message on the onsole log window when the position of the enemy is equall to the position of the player
             
                //console.log(this.counter);
                this.enemies.forEach(e => {
                    e.Update();
                    managers.Collision2.Check(this.player,e);
                });

                this.Rings.forEach(e=>{
                    e.Update();
                    managers.Collision2.Check(this.player,e);
                })
                if(this.counter>500){
                    this.Rings.forEach(e=>{
                        e.Update();
                        managers.Collision2.Check(this.player,e);
                    })
                    this.enemies.forEach(e => {
                        e.Update();
                        managers.Collision2.Check(this.player,e);
                        
                    });
                    this.enemies2.forEach(e => {
                        console.log("wave2");
                        e.Update();
                        managers.Collision2.Check(this.player,e);
                    });
                   

                }
            
            if(this.scoreCounter==0){
                managers.Game.currentScene=config.Scene.WIN;
            }
            
           
        }

       

        public Main():void {
            this.addChild(this.background2);
            this.addChild(this.player);
            this.enemies.forEach(e => {
                this.addChild(e);

            });
            this.enemies2.forEach(e=>{
                this.addChild(e);
            });

            this.Rings.forEach(e=>{
                this.addChild(e);
            })
            
            this.addChild(this.scoreBoard);
        }
    }
}