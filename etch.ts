const container: HTMLElement = document.getElementById('container');
const resizeBtn: HTMLElement = document.getElementById('resize-btn');
const resetBtn: HTMLElement = document.getElementById('reset-btn');

function createGrid(size: number): void {
    container.innerHTML = "";
    const blockCount: number = Math.pow(size,2);
    const blockSize: number = 800 / size;

    // create grid
    for (let i = 0; i < blockCount; i++) {
        const block: HTMLElement = document.createElement('div');
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

function getNewSize() : void {
    let newSize: number = Number(prompt("Enter side length (max 100): "));
    newSize ? createGrid(newSize) : newSize = 32;
    createGrid(newSize)
}

resizeBtn.addEventListener("click", (e) => {
    getNewSize();
});

resetBtn.addEventListener("click", (e) => {
    let blockList: NodeListOf<HTMLElement> = document.querySelectorAll<HTMLElement>('.block');
    for (let i = 0; i < blockList.length; i++) {
        blockList[i].style.background = "white";
        blockList[i].style.opacity = "0.1";
    }
});

createGrid(32);