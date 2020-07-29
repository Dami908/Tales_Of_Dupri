module objects {
    export class Enemy2 extends objects.GameObject {
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
            this.x = Math.floor(Math.random() * -800) - 50;
        }
        public Move():void {
            this.x += 5;
        }
        public end():void{
            this.x=null;
        }
        public CheckBound():void {
            if(this.x >= 900 + this.halfH + 25) {
                this.Reset();
            }
        }
    }
}