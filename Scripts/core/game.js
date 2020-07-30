// Immediate Invoked Anonymous Function
(function () {
    // Global Game Variables
    var canvas = document.getElementById("canvas");
    var stage;
    var assetManager;
    var assetManifest;
    // Store current scene information
    var currentScene;
    var currentState;
    var keyboardManager;
    assetManifest = [
        { id: "startButton", src: "./Assets/StartButton.png" },
        { id: "nextButton", src: "./Assets/Play.png" },
        { id: "backButton", src: "./Assets/22.png" },
        { id: "Home", src: "./Assets/ssss.png" },
        { id: "background2", src: "./Assets/space.jpg" },
        { id: "background3", src: "./Assets/jjj.jpg" },
        { id: "background4", src: "./Assets/kill.jpg" },
        { id: "Craft", src: "./Assets/craft.png" },
        { id: "explode", src: "./Audio/explode.wav" },
        { id: "Spaceship", src: "/Assets/Spaceship.png" },
        { id: "background", src: "./Assets/409.png" },
        { id: "player", src: "./Assets/Shut.png" },
        { id: "enemy", src: "./Assets/asteroids.png" },
        { id: "start_music", src: "./Audio/Melodic_House.mp3" }
    ];
    function Init() {
        console.log("Initializing Start");
        assetManager = new createjs.LoadQueue();
        assetManager.installPlugin(createjs.Sound);
        assetManager.loadManifest(assetManifest);
        assetManager.on("complete", Start, this);
    }
    function Start() {
        console.log("Starting Application...");
        // Initialize CreateJS
        stage = new createjs.Stage(canvas);
        stage.enableMouseOver(20);
        createjs.Ticker.framerate = 60;
        createjs.Ticker.on("tick", Update);
        // Set up default game states -- State Machine
        managers.Game.stage = stage;
        managers.Game.currentScene = config.Scene.START;
        currentState = config.Scene.START;
        keyboardManager = new managers.Keyboard;
        managers.Game.keyboardManager = keyboardManager;
        Main();
    }
    function Update() {
        // Has my state changed since the last check?
        if (currentState != managers.Game.currentScene) {
            console.log("Changing scenes to " + managers.Game.currentScene);
            Main();
        }
        currentScene.Update();
        stage.update();
    }
    function Main() {
        console.log("Game Start");
        // Finite State Machine
        switch (managers.Game.currentScene) {
            case config.Scene.START:
                stage.removeAllChildren();
                currentScene = new scenes.StartScene(assetManager);
                stage.addChild(currentScene);
                break;
            case config.Scene.GAME:
                stage.removeAllChildren();
                currentScene = new scenes.PlayScene(assetManager);
                stage.addChild(currentScene);
                break;
            case config.Scene.OVER:
                stage.removeAllChildren();
                currentScene = new scenes.GameOverScene(assetManager);
                stage.addChild(currentScene);
                break;
            case config.Scene.WIN:
                stage.removeAllChildren();
                currentScene = new scenes.WinScene(assetManager);
                stage.addChild(currentScene);
                break;
            case config.Scene.INFO:
                stage.removeAllChildren();
                currentScene = new scenes.InfoScene(assetManager);
                stage.addChild(currentScene);
                break;
        }
        currentState = managers.Game.currentScene;
    }
    window.onload = Init;
})();
//# sourceMappingURL=game.js.map