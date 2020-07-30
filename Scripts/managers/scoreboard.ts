module managers {
    export class Scoreboard extends createjs.Container {
        // Variables
        public scoreLabel: objects.Label;
        public TimerLabel:objects.Label;
        public livesLabel:objects.Label;

        private score: number;
        private Timer:number;
        private lives:number;

        get Lives():number{
            return this.lives;
        }
        set Lives(LivesTotal:number){
            this.lives=LivesTotal;
            this.livesLabel.text = "Total Lives: " + this.lives;
        }

        get Time():number{
            return this.Timer;
        }
        set Time(newTime:number){
            this.Timer=newTime;
            this.scoreLabel.text = "Time Left: " + this.Timer;
        }

        get Score():number {
            return this.score;
        }
        set Score(newScore:number) {
            this.score = newScore;
            this.scoreLabel.text = "Score: " + this.score;
        }
       
        // Constructor
        constructor() {
            super();
            this.Init();
        }
        // Methods
        private Init():void {
            // Create our labels
            this.scoreLabel = new objects.Label("Score: 999999", "20px", "Consolas", "#FFFF00", 0, 0, false);
            this.TimerLabel = new objects.Label("Time Left: 0", "20px", "Consolas", "#FFFF00", 230, 0, false);
            this.livesLabel = new objects.Label("Food Integrity: 0", "20px", "Consolas", "#FFFF00", 460, 0, false);

            // Set a default score
            this.score = 0;

            this.Main();
        }

        private Main():void {
            this.addChild(this.scoreLabel);
            this.addChild(this.TimerLabel);
            this.addChild(this.livesLabel);
        }
    }
}