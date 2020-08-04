
const container_div = document.querySelector(".container");
const reset_button = document.querySelector("button");

//main function, prompts user for grid size and calls the createGrid function
function main()
{  
    let n = prompt("Choose Grid Size");
    createGrid(n);
    reset_button.addEventListener('click', reset);
}

//creates a grid and calls drawSketch function
function createGrid(n)
{
    for (i = 0; i < n ** 2; i++)
    {
        const newDiv = document.createElement('div');
        container_div.appendChild(newDiv);
        newDiv.classList.add('newGrid');
        newDiv.style.width = `${1/n*100}%`;
        newDiv.style.height = newDiv.style.width;

        newDiv.addEventListener('mouseover', drawSketch);
    }

}

//draws on the sketchpad
function drawSketch(e)
{
    e.target.style.backgroundColor = "black";
}

//refreshes the page, creating a clean slate
function reset()
{
    location.reload();
}


main();