
function Game(scene) {
    var man = new Hangman();
    this.Start = function () {
        //var wordPad = document.getElementById("word");
        var keyPressed;
        var word = ["M", "E", "N", "D", "E", "L", "A"];
        var unknownWord = [];
        var badLetters = [];
        var dziala = false;
        var lives = 0;
        for (var i = 0; i < word.length ; i++) {
            unknownWord.push("_ ");
        };
        writeWordArray();
        function writeWordArray() {
            $("#word").text(unknownWord);
        }
        function writeLetterArray() {
            $("#badLetters").text(badLetters);
        }

        console.log(unknownWord);
        $("body").bind("keydown", function (e) {
            if (e.keyCode >= 65 && e.keyCode <= 90 || e.keyCode >= 97 && e.keyCode <= 122) {
                keyPressed = String.fromCharCode(e.keyCode);
                dziala = false;
                //niedziala = true;
                for (var j = 0; j < word.length; j++) {

                    if (keyPressed === word[j]) {
                        //console.log("tak, litera nr: " + (j + 1));
                        dziala = true;
                        unknownWord[j] = word[j];
                        writeWordArray();
                    }
                }
                //console.log(dziala);
                if (dziala === false) {
                    if (badLetters.length == 0) {
                        badLetters.push(keyPressed);
                        writeLetterArray();
                        lives++;
                        var hang = new man.losePoint(lives);
                        scene.add(hang);
                    }
                    for (var k = 0, pom = 0; k < badLetters.length; k++) {
                        if (keyPressed === badLetters[k]) {
                            pom += 1;
                        } else {
                            pom += 0;

                        }
                    }
                    if (pom == 0) {
                        badLetters.push(keyPressed);
                        writeLetterArray();
                        lives++;
                        var hang = new man.losePoint(lives);
                        scene.add(hang);
                    }
                }
                var pom2 = 0;
                for (var l = 0; l < unknownWord.length; l++) {
                    if (unknownWord[l] == "_ ") {
                        pom2 += 1;
                    } else {
                        pom2 += 0;
                    }

                }
                if (pom2 == 0) {
                    alert("Wygrałeś!");
                }
                if (lives == 10) {
                    alert("Przegrałeś! Albo wygrałeś? W końcu wisi");
                }
            }


        });
       
    }
}