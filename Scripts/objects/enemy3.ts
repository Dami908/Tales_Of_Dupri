module objects {
    export class Enemy3 extends objects.GameObject {
        // Variables
        // Constructor
        constructor(assetManager:createjs.LoadQueue) {
            super(assetManager, "enemy");
            this.Start();
        }
        // Methods
        public Start():void {
            this.Reset();
        }
        public Update():void {
            this.Move();
            this.CheckBound();
        }
        public Reset():void {
            this.y = Math.floor(Math.random() * 540) + 50;
            this.x = Math.floor(Math.random() * 900) + 650;
        }
        public Move():void {
            this.x -= 8;
        }
        public end():void{
            this.x=null;
        }
        public CheckBound():void {
            if(this.x <= -400 +this.halfH + 25) {
                this.Reset();
            }
        }
    }
}