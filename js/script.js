// job cards parent
let jobCardsParent = document.getElementById("job-cards-parent");
let jobCardsChildrensArry = jobCardsParent.children


// job count number in available job section

let jobCountNumber = document.querySelector(".job-count-number");
jobCountNumber.innerText = jobCardsChildrensArry.length

// job tracker 3 cards main part

// card (Total) 1
let totalTrackerCard = document.getElementById("total-tracker-card");
// card 1 count number
let allCard1CountNumber = document.querySelector(".all-card-1-count-number");
allCard1CountNumber.innerText = jobCardsChildrensArry.length
// card (Interview) 2
let interviewTrackerCard = document.getElementById("interview-tracker-card");
// card (Rejected) 3
let rejectedTrackerCard = document.getElementById("rejected-tracker-card");







// filter btn logic start



let interviewSection = document.getElementById("interview-section-parent");
let rejectedSection = document.getElementById("rejected-section-parent");

interviewSection.style.display = "none";
rejectedSection.style.display = "none";


function changePageAndColorBtn(id) {

   
//    3 filter btn
   let allBtn = document.getElementById("all-filter-btn");
   let interviewBtn = document.getElementById("interview-filter-btn");
   let rejectedBtn = document.getElementById("rejected-filter-btn");
     
   allBtn.classList.remove('btn-primary');
   interviewBtn.classList.remove('btn-primary');
   rejectedBtn.classList.remove('btn-primary');

   let changeColorBtn = document.getElementById(id);
   changeColorBtn.classList.add('btn-primary');


   if(id === "all-filter-btn") {
      jobCardsParent.style.display = "block"
       interviewSection.style.display = "none";
       rejectedSection.style.display = "none";
   }
   else if(id === "interview-filter-btn") {
       jobCardsParent.style.display = "none"
       interviewSection.style.display = "block";
       rejectedSection.style.display = "none";
   }
   else {
      jobCardsParent.style.display = "none"
       interviewSection.style.display = "none";
       rejectedSection.style.display = "block";
   }
}

// filter btn logic end