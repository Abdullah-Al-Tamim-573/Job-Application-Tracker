// job cards parent
let jobCardsParent = document.getElementById("job-cards-parent");
let jobCardsChildrensArry = jobCardsParent.children;
let interviewArry = [];
let rejectedArry = [];

// job tracker 2 card count number (Interview and Rejected)
let interviewCountNumber = document.querySelector(".interview-count-number");
let rejectedinterviewCountNumber = document.querySelector(
  ".rejected-count-number",
);
interviewCountNumber.innerText = interviewArry.length;
rejectedinterviewCountNumber.innerText = rejectedArry.length;

// job count number in available job section

let jobCountNumber = document.querySelector(".job-count-number");
jobCountNumber.innerText = jobCardsChildrensArry.length;

// job tracker 3 cards main part

// card (Total) 1
let totalTrackerCard = document.getElementById("total-tracker-card");
// card 1 count number
let allCard1CountNumber = document.querySelector(".all-card-1-count-number");
allCard1CountNumber.innerText = jobCardsChildrensArry.length;
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

  allBtn.classList.remove("btn-primary");
  interviewBtn.classList.remove("btn-primary");
  rejectedBtn.classList.remove("btn-primary");

  let changeColorBtn = document.getElementById(id);
  changeColorBtn.classList.add("btn-primary");

  if (id === "all-filter-btn") {
    jobCardsParent.style.display = "block";
    interviewSection.style.display = "none";
    rejectedSection.style.display = "none";
  } else if (id === "interview-filter-btn") {
    jobCardsParent.style.display = "none";
    interviewSection.style.display = "block";
    rejectedSection.style.display = "none";
  } else {
    jobCardsParent.style.display = "none";
    interviewSection.style.display = "none";
    rejectedSection.style.display = "block";
  }
}

// filter btn logic end

// add clcik handler in main parent

document.querySelector("main").addEventListener("click", function (e) {
  let jobCardTitle = document.querySelector(".job-card-title");
  let jobCardSubtitle = document.querySelector(".job-card-subtitle");
  let jobCardTypeAndSalary = document.querySelector(".job-card-type-and-salary",);
  let notAppliedJobCardStatus = document.querySelector(".not-applied-job-card-status",);
  let jobCardDescribtion = document.querySelector(".job-card-describtion");
  let jobCardInterviewBtn = document.querySelector(".job-card-interview-btn");
  let jobCardRejectedBtn = document.querySelector(".job-card-rejected-btn");

//   text
let jobCardTitleText = jobCardTitle.innerText;
let jobCardSubtitleText = jobCardSubtitle.innerText;
let jobCardTypeAndSalaryText = jobCardTypeAndSalary.innerText;
let notAppliedJobCardStatusText = notAppliedJobCardStatus.innerText;
let jobCardDescribtionText = jobCardDescribtion.innerText;
let jobCardInterviewBtnText = jobCardInterviewBtn.innerText;
let jobCardRejectedBtnText = jobCardRejectedBtn.innerText;

  let obj = {
    jobCardTitle,
    jobCardSubtitle,
    jobCardTypeAndSalary,
    notAppliedJobCardStatus,
    jobCardDescribtion,
    jobCardInterviewBtn,
    jobCardRejectedBtn
  }
  console.log(obj)
});
