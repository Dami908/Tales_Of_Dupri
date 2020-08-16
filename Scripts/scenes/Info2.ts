module scenes {
    export class InfoScene2 extends objects.Scene {
        // Variables
        private background: objects.Background;
        private welcomeLabel: objects.Label;
        private welcomeLabel1: objects.Label;
        private welcomeLabel3: objects.Label;
        private welcomeLabel2:objects.Label;
        private welcomeLabel4:objects.Label;
        private welcomeLabel5:objects.Label;
        private startButton: objects.Button;
        private backgroundMusic: createjs.AbstractSoundInstance;

        // Constructor
        constructor() {
            super();
            this.Start();
        }
        // Methods
        public Start():void {
            // Initialize our objects for this scene
            this.background = new objects.Background();

            this.welcomeLabel = new objects.Label("lEVEL 2 INFO.", "35px", "Consolas", "#FFFFFF", 305, 40, true);
            this.welcomeLabel3 = new objects.Label("1.) You start the level with 1 life.", "25px", "Consolas", "#FFFFFF", 305, 100, true);
            this.welcomeLabel1 = new objects.Label("2.) Dodge all incoming incoming asteroids and collect fuel rods", "15px", "Consolas", "#FFFFFF", 305, 150, true);
            this.welcomeLabel2 = new objects.Label("3.)Outlast the asteroids and get up to five fuel rods ;)!!!!!!!", "15px", "Consolas", "#FFFFFF", 305, 190, true);
            this.welcomeLabel4 = new objects.Label("3.)Remember youre monitoring systems have ben disabled", "15px", "Consolas", "#FFFFFF", 305, 230, true);
            this.welcomeLabel5 = new objects.Label("4.)Hope Youre good at math muahaahahahahahha", "15px", "Consolas", "#FFFFFF", 305, 370, true);

            // NOTE: PreloadJS manifest id
            this.startButton = new objects.Button("nextButton", 320, 700);

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
            this.addChild(this.welcomeLabel5);
            this.addChild(this.startButton);
            this.startButton.on("click", this.startButtonClick);
        }

        private startButtonClick():void {
            // Change from START to GAME scene
            managers.Game.currentScene = config.Scene.PLAY2;
        }
    }
}