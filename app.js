let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-Butn");
let newGameButn = document.querySelector("#new-Butn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

const disableBoxes=() => {
    for (let box of boxes){
        box.disabled=true;

    }
}


const showWinner =(winner) =>{
    msg.innerText='Congratulations, Winner is $(winner)';
    msgContainer.classList.remove("hide");
    disableBoxes();
}
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (box.innerText !== "") return;

        if (turn) {
            box.innerText = "0";
        } else {
            box.innerText = "X";
        }

        turn = !turn;
        checkWinner();
    });
});

resetBtn.addEventListener("click", () => {
    boxes.forEach((box) => {
        box.innerText = "";
    });
    turn = true;
    msgContainer.classList.add("hide");
});

c
};

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let post1Val = boxes[pattern[0]].innerText;
        let post2Val = boxes[pattern[1]].innerText;
        let post3Val = boxes[pattern[2]].innerText;

        if (post1Val !== "" && post1Val === post2Val && post2Val === post3Val) {
            console.log("Winner", post1Val);
            showWinner(post1Val);
        }
    }
};
