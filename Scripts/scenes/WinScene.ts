module scenes{
    export class WinScene extends objects.Scene{
         // Variables
         private gameOverLabel: objects.Label;
         private welcomeLabel1: objects.Label;
         private background3: objects.Background3;
         private backButton: objects.Button;
 
         // Constructor
         constructor(assetManager:createjs.LoadQueue) {
             super(assetManager);
             this.Start();
         }
 
         // Method
         public Start():void {
             // Initialize our variables
             this.background3 = new objects.Background3(this.assetManager);
             this.gameOverLabel = new objects.Label("Congratulations you did it!", "35px", "Consolas", "#FFFFFF", 315, 240, true);
             this.welcomeLabel1 = new objects.Label("Another excellent delivery ;).", "20px", "Consolas", "#FFFFFF", 320, 340, true);
             this.backButton = new objects.Button(this.assetManager, "backButton", 320, 440);
             this.Main();
         }
 
         public Update():void {}
 
         public Main():void {
             this.addChild(this.background3);
             this.addChild(this.gameOverLabel);
             this.addChild(this.welcomeLabel1);
             this.addChild(this.backButton);
             
 
             this.backButton.on("click", this.backButtonClick);
         }
 
         private backButtonClick():void {
             managers.Game.currentScene = config.Scene.GAME;

         }
    }
}