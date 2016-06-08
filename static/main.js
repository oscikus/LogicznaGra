function Main() {
    //klasy
    var man = new Hangman();
    var game;
    //var ajax = new Ajax();
    //////
    var scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(
        45, // kąt patrzenia kamery (FOV - field of view)
        (innerWidth - 200) / innerHeight, // proporcje widoku
        1, // min renderowana odległość
        100000 // max renderowana odległość
      );
    renderer = new THREE.WebGLRenderer();
    renderer.setClearColor(0x000000);
    renderer.setSize(innerWidth / 3, innerHeight - 20);
    document.getElementById("hangman").appendChild(renderer.domElement);
    camera.position.x = 50;
    camera.position.y = 50;
    camera.position.z = 150
    game = new Game(scene);
    game.Start();
    animateScene();
    function animateScene() {
        requestAnimationFrame(animateScene);
        renderer.render(scene, camera);
        camera.updateProjectionMatrix();
    }

    document.getElementById("start")
        .addEventListener("click", function() {
            $("#menu").toggleClass("animuj");
        });
}