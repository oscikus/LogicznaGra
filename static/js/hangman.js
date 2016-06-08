/// <reference path="../libs/three.js" />

function Hangman() {
    var floor = new THREE.PlaneGeometry(150, 20);
    var gallows1 = new THREE.CubeGeometry(10,100, 10);
    var gallows2 = new THREE.CubeGeometry(3,100,3);
    var cord = new THREE.CylinderGeometry(3, 3, 7, 20);
    var head = new THREE.CircleGeometry(12, 30);
    var body = new THREE.PlaneGeometry(3, 40);
    var rarm = new THREE.PlaneGeometry(2, 20);
    var larm = new THREE.PlaneGeometry(2, 20);
    var lleg = new THREE.PlaneGeometry(2, 30);
    var rleg = new THREE.PlaneGeometry(2, 30);
    //
    var mat = new THREE.MeshBasicMaterial({ color: 0xffffff, side: THREE.DoubleSide });
    var mat2 = new THREE.MeshBasicMaterial({ color: 0xffffff, side: THREE.DoubleSide });
    var woodMat = new THREE.MeshBasicMaterial({ map: THREE.ImageUtils.loadTexture("imgs/wood.jpg"), side: THREE.DoubleSide });
    var grassMat = new THREE.MeshBasicMaterial({ map: THREE.ImageUtils.loadTexture("imgs/grass.jpg"), side: THREE.DoubleSide });
    var ropeMat = new THREE.MeshBasicMaterial({ map: THREE.ImageUtils.loadTexture("imgs/rope.jpg"), side: THREE.DoubleSide });
    var headMat = new THREE.MeshBasicMaterial({ map: THREE.ImageUtils.loadTexture("imgs/panda.png"), side: THREE.DoubleSide });
    //
    var floorMesh = new THREE.Mesh(floor, grassMat);
    var gallows1Mesh = new THREE.Mesh(gallows1, woodMat);
    var gallows2Mesh = new THREE.Mesh(gallows2, woodMat);
    var cordMesh = new THREE.Mesh(cord, ropeMat);
    var headMesh = new THREE.Mesh(head, headMat);
    var bodyMesh = new THREE.Mesh(body, mat);
    var llegMesh = new THREE.Mesh(lleg, mat);
    var rlegMesh = new THREE.Mesh(rleg, mat);
    var rarmMesh = new THREE.Mesh(rarm, mat);
    var larmMesh = new THREE.Mesh(larm, mat);
    //
    floorMesh.position.set(55, 0, 0);
    floorMesh.rotateX(Math.PI / 2);
    gallows1Mesh.position.set(0, 50, 0);
    gallows2Mesh.position.set(45, 100, 0);
    gallows2Mesh.rotateZ(Math.PI / 2);
    cordMesh.position.set(80, 95, 0);
    headMesh.position.set(80, 80, 0);
    bodyMesh.position.set(80, 60, 0);
    llegMesh.position.set(68, 33, 0);
    llegMesh.rotateZ(2 * Math.PI / 3);
    rlegMesh.position.set(92, 33, 0);
    rlegMesh.rotateZ(Math.PI / 3);
    rarmMesh.position.set(72, 60, 0);
    rarmMesh.rotateZ(2 * Math.PI / 3);
    larmMesh.position.set(88, 60, 0);
    larmMesh.rotateZ(Math.PI / 3);
    //
    var czyde = new THREE.Object3D();
    //czyde.add(floorMesh);
    //czyde.add(gallows1Mesh);
    //czyde.add(gallows2Mesh);
    //czyde.add(cordMesh);
    //czyde.add(headMesh);
    //czyde.add(bodyMesh);
    //czyde.add(llegMesh);
    //czyde.add(rlegMesh);
    //czyde.add(rarmMesh);
    //czyde.add(larmMesh);
   // console.log(floorMesh)
    this.losePoint = function (lives){
        switch (lives) {
            case 1:
                czyde.add(floorMesh);
                break;
            case 2:
                czyde.add(gallows1Mesh);
                break;
            case 3:
                czyde.add(gallows2Mesh);
                break;
            case 4:
                czyde.add(cordMesh);
                break;
            case 5:
                czyde.add(headMesh);
                break;
            case 6:
                czyde.add(bodyMesh);
                break;
            case 7:
                czyde.add(larmMesh);
                break;
            case 8:
                czyde.add(rarmMesh);
                break;
            case 9:
                czyde.add(llegMesh);
                break;
            case 10:
                czyde.add(rlegMesh);
                break;
        }
        return czyde;
        }
    this.getFloor = function () {
        return czyde;
    }
}