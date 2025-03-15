const container = document.getElementById('container');
const resizeBtn = document.getElementById('resize-btn')

function createGrid(size) {
    container.innerHTML = "";
    const blockCount = Math.pow(size,2);
    const blockSize = 800 / size;

    // create grid
    for (let i = 0; i < blockCount; i++) {
        const block = document.createElement('div');
        block.className = "block";
        block.style.width = `${blockSize}px`;
        block.style.height = `${blockSize}px`;
        block.style.background = "white";
        block.style.opacity = "0.1";

        block.addEventListener('mouseover', (e) => {
            if (block.style.background === "white") {
                block.style.background = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
                block.style.opacity = "1";
            }
        });

        container.appendChild(block);
    }
}

function getNewSize() {
    let newSize = Number(prompt("Enter side length (max 100): "));
    newSize ? createGrid(newSize) : newSize = 32;
    createGrid(newSize)
}

resizeBtn.addEventListener("click", (e) => {
    getNewSize();
})

createGrid(32);