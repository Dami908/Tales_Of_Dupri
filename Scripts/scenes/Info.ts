module scenes {
    export class InfoScene extends objects.Scene {
        // Variables
        private background: objects.Background;
        private welcomeLabel: objects.Label;
        private welcomeLabel1: objects.Label;
        private welcomeLabel3: objects.Label;
        private welcomeLabel2:objects.Label;
        private welcomeLabel4:objects.Label;
        private startButton: objects.Button;
        private backgroundMusic: createjs.AbstractSoundInstance;

        // Constructor
        constructor(assetManager:createjs.LoadQueue) {
            super(assetManager);
            this.Start();
        }
        // Methods
        public Start():void {
            // Initialize our objects for this scene
            this.background = new objects.Background(this.assetManager);

            this.welcomeLabel = new objects.Label("INFO.", "35px", "Consolas", "#FFFFFF", 305, 40, true);
            this.welcomeLabel3 = new objects.Label("1.) You start the level with 4 lives.", "25px", "Consolas", "#FFFFFF", 305, 100, true);
            this.welcomeLabel1 = new objects.Label("2.) Dodge all incoming traffic from both asteroids and ships.", "15px", "Consolas", "#FFFFFF", 305, 150, true);
            this.welcomeLabel2 = new objects.Label("3.)Outlast the timer and get the delivery to the client ;)!!!!!!!", "15px", "Consolas", "#FFFFFF", 305, 190, true);
            this.welcomeLabel4 = new objects.Label("3.)Key score periods 2500 and 5000", "25px", "Consolas", "#FFFFFF", 305, 230, true);

            // NOTE: PreloadJS manifest id
            this.startButton = new objects.Button(this.assetManager, "nextButton", 150, 700);

            //Instantiate Sound
            
           
            this.Main();
        }

        public Update():void {
            // this.background.Update();
        }

        public Main():void {
            // Add items to the scene
            this.addChild(this.background);
            this.addChild(this.welcomeLabel);
            this.addChild(this.welcomeLabel1);
            this.addChild(this.welcomeLabel2);
            this.addChild(this.welcomeLabel3);
            this.addChild(this.welcomeLabel4);
            this.addChild(this.startButton);
            this.startButton.on("click", this.startButtonClick);
        }

        private startButtonClick():void {
            // Change from START to GAME scene
            managers.Game.currentScene = config.Scene.GAME;
        }
    }
}