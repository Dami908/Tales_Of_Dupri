module scenes {
    export class StartScene extends objects.Scene {
        // Variables
        private background: objects.Background;
        private welcomeLabel: objects.Label;
        private welcomeLabel1: objects.Label;
        private welcomeLabel3: objects.Label;
        private welcomeLabel2:objects.Label;
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

            this.welcomeLabel = new objects.Label("Tales Of Dupri.", "35px", "Consolas", "#FFFFFF", 305, 40, true);
            this.welcomeLabel3 = new objects.Label("Space Delivery Extraordinaire.", "35px", "Consolas", "#FFFFFF", 305, 100, true);
            this.welcomeLabel1 = new objects.Label("A World of Adventure  and steamy meals Awaits you.", "20px", "Consolas", "#FFFFFF", 305, 150, true);
            this.welcomeLabel2 = new objects.Label("Are you ready ;)!!!!!!!", "20px", "Consolas", "#FFFFFF", 305, 190, true);

            // NOTE: PreloadJS manifest id
            this.startButton = new objects.Button("nextButton", 320, 700);

            //Instantiate Sound
            
            this.backgroundMusic=createjs.Sound.play("start_music");
            this.backgroundMusic.loop=-1;
            this.backgroundMusic.volume=0.2;
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
            this.addChild(this.startButton);
            this.startButton.on("click", this.startButtonClick);
        }

        private startButtonClick():void {
            // Change from START to GAME scene
            managers.Game.currentScene = config.Scene.INFO;
        }
    }
}