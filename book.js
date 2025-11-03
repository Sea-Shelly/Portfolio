const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");
const book = document.querySelector("#book");

// const paper1 = document.querySelector("#p1");
// const paper2 = document.querySelector("#p2");
// const paper3 = document.querySelector("#p3");

const papers = document.querySelectorAll(".paper");
const numPapers = papers.length;
let curr = 1;
const max = numPapers +1;

var thing = document.querySelector(':root');

papers.forEach((paper,index) =>{
    paper.style.zIndex = numPapers - index;
});


// Event Listener
prevBtn.addEventListener("click", goPrevPage);
nextBtn.addEventListener("click", goNextPage);




function changeArtZ(num){
    page.setProperty('--zPaper',num);
}
function openBook() {
    book.style.transform = "translateX(25%)";
    prevBtn.style.transform = "translateX(-40%)";
    nextBtn.style.transform = "translateX(25%)";

}

function closeBook(isAtBeginning) {
    if(isAtBeginning) {
        book.style.transform = "translateX(0%)";
    } else {
        book.style.transform = "translateX(65%)";
    }

    prevBtn.style.transform = "translateX(0%)";
    nextBtn.style.transform = "translateX(0%)";
}

function goNextPage() {
    if(curr < max) {
        const paper = papers[curr - 1];
        paper.classList.add("flipped");
        paper.style.zIndex = curr;

        if (curr === 1) openBook();
        if (curr === numPapers) closeBook(false);
        curr++;
    }
}

function goPrevPage() {
    if(curr > 1) {
        curr--;
        const paper = papers[curr-1];
        paper.classList.remove("flipped");
        paper.style.zIndex = numPapers - curr + 1;

        if(curr===1) closeBook(true);
        if(curr === numPapers) openBook()
    }
}