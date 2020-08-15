module scenes{
    export class WinScene extends objects.Scene{
         // Variables
         private gameOverLabel: objects.Label;
         private welcomeLabel1: objects.Label;
         private homeButton:objects.Button;
         private background3: objects.Background3;
         private backButton: objects.Button;
         private backgroundMusic: createjs.AbstractSoundInstance;
 
         // Constructor
         constructor() {
             super();
             this.Start();
         }
 
         // Method
         public Start():void {
             // Initialize our variables
             
             this.background3 = new objects.Background3();
             this.gameOverLabel = new objects.Label("Congratulations you did it!", "35px", "Consolas", "#FFFFFF", 315, 240, true);
             this.welcomeLabel1 = new objects.Label("Another excellent delivery ;).", "20px", "Consolas", "#FFFFFF", 320, 340, true);
             this.backButton = new objects.Button( "backButton", 370, 440);
             this.homeButton=new objects.Button("Home",2500,440);
             this.Main();
         }
 
         public Update():void {}
 
         public Main():void {
             this.addChild(this.background3);
             this.addChild(this.gameOverLabel);
             this.addChild(this.welcomeLabel1);
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