var container = document.getElementById('container');
var resizeBtn = document.getElementById('resize-btn');
var resetBtn = document.getElementById('reset-btn');
function createGrid(size) {
    container.innerHTML = "";
    var blockCount = Math.pow(size, 2);
    var blockSize = 800 / size;
    var _loop_1 = function (i) {
        var block = document.createElement('div');
        block.className = "block";
        block.style.width = "".concat(blockSize, "px");
        block.style.height = "".concat(blockSize, "px");
        block.style.background = "white";
        block.style.opacity = "0.1";
        block.addEventListener('mouseover', function (e) {
            if (block.style.background === "white") {
                block.style.background = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
                block.style.opacity = "1";
            }
        });
        container.appendChild(block);
    };
    // create grid
    for (var i = 0; i < blockCount; i++) {
        _loop_1(i);
    }
}
function getNewSize() {
    var newSize = Number(prompt("Enter side length (max 100): "));
    newSize ? createGrid(newSize) : newSize = 32;
    createGrid(newSize);
}
resizeBtn.addEventListener("click", function (e) {
    getNewSize();
});
resetBtn.addEventListener("click", function (e) {
    var blockList = document.querySelectorAll('.block');
    for (var i = 0; i < blockList.length; i++) {
        blockList[i].style.background = "white";
        blockList[i].style.opacity = "0.1";
    }
});
createGrid(32);
//# sourceMappingURL=etch.js.map