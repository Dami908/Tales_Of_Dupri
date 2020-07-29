module managers{
    export class Game{
        //Global Variables
        public static stage:createjs.Stage;
        public static assetManager:createjs.LoadQueue;
        public static currentScene:number;
        public static keyboardManager:managers.Keyboard;
    }
}