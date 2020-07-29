module managers {
    export class Scoreboard extends createjs.Container {
        // Variables
        public scoreLabel: objects.Label;
        public highScoreLabel: objects.Label;
        public TimerLabel:objects.Label;

        private score: number;
        private highScore: number;
        private Timer:number;

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
        get HighScore():number {
            return this.highScore;
        }
        set HighScore(newHighScore:number) {
            this.highScore = newHighScore;
            this.highScoreLabel.text = "High Score: " + this.highScore;
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
            this.highScoreLabel = new objects.Label("High score: 0", "20px", "Consolas", "#FFFF00", 460, 0, false);
            this.TimerLabel = new objects.Label("Time Left: 0", "20px", "Consolas", "#FFFF00", 230, 0, false);

            // Set a default score
            this.score = 0;
            this.highScore = 0;

            this.Main();
        }

        private Main():void {
            this.addChild(this.scoreLabel);
            this.addChild(this.highScoreLabel);
            this.addChild(this.TimerLabel);
        }
    }
}