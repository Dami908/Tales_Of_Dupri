module objects {
    export class Enemy extends objects.GameObject {
        // Variables
        // Constructor
        constructor() {
            super( "asteroids");
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
            this.x = Math.floor(Math.random() * 540) + 50;
            this.y = Math.floor(Math.random() * -800) - 50;
        }
        public Move():void {
            this.y += 5;
        }
        public end():void{
            this.y=null;
        }
        public CheckBound():void {
            if(this.y >= 900 + this.halfH + 25) {
                this.Reset();
            }
        }
    }
}