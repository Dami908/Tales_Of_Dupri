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
    var textureAtlasData;
    var textureAtlas;
    textureAtlasData = {
        "images": [
            "./Assets/Sprites/textureAtlas2.png"
        ],
        "framerate": 20,
        "frames": [
            [0, 0, 100, 100, 0, 0, 0],
            [100, 0, 86, 86, 0, 0, 0],
            [186, 0, 75, 75, 0, 0, 0],
            [261, 0, 78, 52, 0, 0, 0],
            [339, 0, 16, 21, 0, 0, 0],
            [0, 100, 300, 80, 0, 0, 0],
            [300, 100, 52, 52, 0, 0, 0],
            [0, 180, 220, 172, 0, 0, 0],
            [220, 180, 100, 100, 0, 0, 0]
        ],
        "animations": {
            "backButton": { "frames": [0] },
            "asteroids": { "frames": [1] },
            "craft": { "frames": [2] },
            "Explosion": { "frames": [3] },
            "laser1": { "frames": [4] },
            "nextButton": { "frames": [5] },
            "Player": { "frames": [6] },
            "Spaceship": { "frames": [7] },
            "Home": { "frames": [8] }
        },
    };
    assetManifest = [
        { id: "background2", src: "./Assets/space.jpg" },
        { id: "background3", src: "./Assets/jjj.jpg" },
        { id: "background4", src: "./Assets/kill.jpg" },
        { id: "explode", src: "./Audio/explode.wav" },
        { id: "background", src: "./Assets/409.png" },
        { id: "start_music", src: "./Audio/Melodic_House.mp3" },
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
        // textureAtlasData.images = [ assetManager.getResult("textureAtlas2")];
        textureAtlas = new createjs.SpriteSheet(textureAtlasData);
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
        managers.Game.assetManager = assetManager;
        managers.Game.textureAtlas = textureAtlas;
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
                currentScene = new scenes.StartScene();
                stage.addChild(currentScene);
                break;
            case config.Scene.GAME:
                stage.removeAllChildren();
                currentScene = new scenes.PlayScene();
                stage.addChild(currentScene);
                break;
            case config.Scene.OVER:
                stage.removeAllChildren();
                currentScene = new scenes.GameOverScene();
                stage.addChild(currentScene);
                break;
            case config.Scene.WIN:
                stage.removeAllChildren();
                currentScene = new scenes.WinScene();
                stage.addChild(currentScene);
                break;
            case config.Scene.INFO:
                stage.removeAllChildren();
                currentScene = new scenes.InfoScene();
                stage.addChild(currentScene);
                break;
            case config.Scene.PLAY2:
                stage.removeAllChildren();
                currentScene = new scenes.Play2Scene();
                stage.addChild(currentScene);
                break;
        }
        currentState = managers.Game.currentScene;
        managers.Game.currentSceneObject = currentScene;
    }
    window.onload = Init;
})();
//# sourceMappingURL=game.js.map