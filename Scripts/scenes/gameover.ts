module scenes {
    export class GameOverScene extends objects.Scene {
        // Variables
        private gameOverLabel: objects.Label;
        private backButton: objects.Button;
        private homeButton:objects.Button;
        private background2: objects.Background4;

        // Constructor
        constructor() {
            super();

            this.Start();
        }

        // Method
        public Start():void {
            // Initialize our variables
            this.background2 = new objects.Background4();
            this.gameOverLabel = new objects.Label(
                "Best Delivery more like crappy delivery!", "25px", "Consolas", "#FFFFFF", 320, 240, true);

            this.backButton = new objects.Button( "backButton", 370, 340);
            this.homeButton=new objects.Button("Home",250,340);
            this.Main();
        }

        public Update():void {}

        public Main():void {
            this.addChild(this.background2);
            this.addChild(this.gameOverLabel);
            this.addChild(this.backButton);
            this.addChild(this.homeButton);

            this.backButton.on("click", this.backButtonClick);
            this.homeButton.on("click",this.homeButtonClick);
        }

        private backButtonClick():void {
            managers.Game.currentScene = config.Scene.GAME;
        }
        private homeButtonClick():void{
            createjs.Sound.stop();
            managers.Game.currentScene = config.Scene.START;
        }
    }
}