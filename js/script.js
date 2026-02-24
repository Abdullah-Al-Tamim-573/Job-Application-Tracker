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
    if (e.target.matches('.job-card-interview-btn')) {
        let parentNode = e.target.parentNode.parentNode;
        //    job card element details
        let jobCardTitle = parentNode.querySelector(".job-card-title");
        let jobCardSubtitle = parentNode.querySelector(".job-card-subtitle");
        let jobCardTypeAndSalary = parentNode.querySelector(".job-card-type-and-salary",);
        let notAppliedJobCardStatus = parentNode.querySelector(".not-applied-job-card-status",);
        let jobCardDescribtion = parentNode.querySelector(".job-card-describtion");
        let jobCardInterviewBtn = parentNode.querySelector(".job-card-interview-btn");
        let jobCardRejectedBtn = parentNode.querySelector(".job-card-rejected-btn");

        //   job card element text details
        let jobCardTitleText = jobCardTitle.innerText;
        let jobCardSubtitleText = jobCardSubtitle.innerText;
        let jobCardTypeAndSalaryText = jobCardTypeAndSalary.innerText;
        let notAppliedJobCardStatusText = notAppliedJobCardStatus.innerText;
        let jobCardDescribtionText = jobCardDescribtion.innerText;
        let jobCardInterviewBtnText = jobCardInterviewBtn.innerText;
        let jobCardRejectedBtnText = jobCardRejectedBtn.innerText;

        //  job card element text details covert to object
        let jobCardDetailsObj = {
            jobCardTitleText,
            jobCardSubtitleText,
            jobCardTypeAndSalaryText,
            notAppliedJobCardStatusText: "Interview",
            jobCardDescribtionText,
            jobCardInterviewBtnText,
            jobCardRejectedBtnText
        }

        // add card details object in interviewArry

        let findObj = interviewArry.find(item => item.jobCardTitleText === jobCardDetailsObj.jobCardTitleText)
        // interviewArry.push(jobCardDetailsObj);
        if (!findObj) {
            interviewArry.push(jobCardDetailsObj);
        }

         rejectedArry = rejectedArry.filter(item => item.jobCardTitleText != jobCardDetailsObj.jobCardTitleText);
         rejectedinterviewCountNumber.innerText = rejectedArry.length;
        
        interviewCountNumber.innerText = interviewArry.length;

           addElemetsToInterViewPart(interviewArry);
           addElemetsToRejectPart(rejectedArry);
        // not applied job card parent add interview
        let notAppliedJobCardParent = parentNode.querySelector(".not-applied-job-card-parent")
          
        notAppliedJobCardParent.innerHTML = `
        
           <span class="text-[green] border-[green] font-semibold px-3 py-2 border text-[14px] not-applied-job-card-status">
                     ${jobCardDetailsObj.notAppliedJobCardStatusText}
              </span>
        
        `
    }
    else if (e.target.matches('.job-card-rejected-btn')) {
        let parentNode = e.target.parentNode.parentNode;
        //    job card element details
        let jobCardTitle = parentNode.querySelector(".job-card-title");
        let jobCardSubtitle = parentNode.querySelector(".job-card-subtitle");
        let jobCardTypeAndSalary = parentNode.querySelector(".job-card-type-and-salary",);
        let notAppliedJobCardStatus = parentNode.querySelector(".not-applied-job-card-status",);
        let jobCardDescribtion = parentNode.querySelector(".job-card-describtion");
        let jobCardInterviewBtn = parentNode.querySelector(".job-card-interview-btn");
        let jobCardRejectedBtn = parentNode.querySelector(".job-card-rejected-btn");

        //   job card element text details
        let jobCardTitleText = jobCardTitle.innerText;
        let jobCardSubtitleText = jobCardSubtitle.innerText;
        let jobCardTypeAndSalaryText = jobCardTypeAndSalary.innerText;
        let notAppliedJobCardStatusText = notAppliedJobCardStatus.innerText;
        let jobCardDescribtionText = jobCardDescribtion.innerText;
        let jobCardInterviewBtnText = jobCardInterviewBtn.innerText;
        let jobCardRejectedBtnText = jobCardRejectedBtn.innerText;

        //  job card element text details covert to object
        let jobCardDetailsObj = {
            jobCardTitleText,
            jobCardSubtitleText,
            jobCardTypeAndSalaryText,
            notAppliedJobCardStatusText: "Rejected",
            jobCardDescribtionText,
            jobCardInterviewBtnText,
            jobCardRejectedBtnText
        }

        // add card details object in interviewArry

        let findObj = rejectedArry.find(item => item.jobCardTitleText === jobCardDetailsObj.jobCardTitleText)
        // interviewArry.push(jobCardDetailsObj);
        if (!findObj) {
            rejectedArry.push(jobCardDetailsObj);
        }

        interviewArry = interviewArry.filter(item => item.jobCardTitleText != jobCardDetailsObj.jobCardTitleText)
        interviewCountNumber.innerText = interviewArry.length;

        rejectedinterviewCountNumber.innerText = rejectedArry.length;

        addElemetsToInterViewPart(interviewArry);
         addElemetsToRejectPart(rejectedArry);
       
        
        
        // not applied job card parent add interview
        let notAppliedJobCardParent = parentNode.querySelector(".not-applied-job-card-parent")

        notAppliedJobCardParent.innerHTML = `
        
           <span class="text-[red] border-[red] font-semibold px-3 py-2 border text-[14px] not-applied-job-card-status">
                     ${jobCardDetailsObj.notAppliedJobCardStatusText}
              </span>
        
        `
    }



});


// jobs card adding interview section part

let jobsCardAddingInterviewSectionPart = document.querySelector('#jobs-card-adding-interview-section-part');



function addElemetsToInterViewPart(interviewArry) {
   
    if (interviewArry.length === 0) {
        document.getElementById("No-jobs-available-and-image-part").style.display = "flex";
        jobsCardAddingInterviewSectionPart.innerHTML = ''; 
    }
    else{
        document.getElementById("No-jobs-available-and-image-part").style.display = "none";
        jobsCardAddingInterviewSectionPart.innerHTML = ''
        for (let interviewItem of interviewArry) {
             
            // create jobs card adding interview section child div
            let createJobsCardDivInInterViewSection = document.createElement('div');
            createJobsCardDivInInterViewSection.classList.add("border", "p-5", "flex", "justify-between");
            createJobsCardDivInInterViewSection.innerHTML = `
                     <!-- card text part -->
          <div class="space-y-5">
            <div>
              <h3 class="text-[#002c5cFF] text-[18px] font-medium job-card-title">
                ${interviewItem.jobCardTitleText}
              </h3>
              <p class="text-[#64748bFF] job-card-subtitle">${interviewItem.jobCardTitleText}</p>
            </div>
            <p class="flex items-center gap-3 text-[#64748bFF] job-card-type-and-salary">
              ${interviewItem.jobCardTypeAndSalaryText}
            </p>

             <div class="not-applied-job-card-parent">
              <span class="text-[#002c5cFF] bg-[#eef4ff] font-semibold px-3 py-2 border text-[14px] not-applied-job-card-status">
                   ${interviewItem.notAppliedJobCardStatusText}
              </span>
            </div>

            <p class="text-[14px] text-[#323b49FF] job-card-describtion">
              ${interviewItem.jobCardDescribtionText}
            </p>

             <div class="flex gap-2">
              <button
                class="btn INTERVIEW-btn border border-[#10b981FF] font-semibold text-[#10b981FF] job-card-interview-btn"
              >
                INTERVIEW
              </button>
              <button
                class="btn border REJECTED-btn border-[#ef4444FF] font-semibold text-[#ef4444FF] job-card-rejected-btn"
              >
                REJECTED
              </button>
            </div>
          </div>

          <!-- card deleate icon part -->
          <div id="card-deleate-icon-part">
            <button class="btn job-card-deleate-btn">
              <i class="fa-solid fa-trash-can"></i>
            </button>
          </div>
               `
           
               jobsCardAddingInterviewSectionPart.appendChild(createJobsCardDivInInterViewSection)
        }
    }

}
// jobs card adding reject section part

let jobsCardAddingRejectSectionPart = document.querySelector('#jobs-card-adding-reject-section-part');



function addElemetsToRejectPart(rejectedArry) {
    
    if (rejectedArry.length === 0) {
        document.querySelector(".No-jobs-available-and-image-reject-part").style.display = "flex";
        jobsCardAddingRejectSectionPart.innerHTML = '';
    }
    else {
        document.querySelector(".No-jobs-available-and-image-reject-part").style.display = "none";
        jobsCardAddingRejectSectionPart.innerHTML = '';
        for (let rejecteItems of rejectedArry) {
             
            // create jobs card adding reject section child div
            let createJobsCardDivRejectSection = document.createElement('div');
            createJobsCardDivRejectSection.classList.add("border", "p-5", "flex", "justify-between");
            createJobsCardDivRejectSection.innerHTML = `
                     <!-- card text part -->
          <div class="space-y-5">
            <div>
              <h3 class="text-[#002c5cFF] text-[18px] font-medium job-card-title">
                ${rejecteItems.jobCardTitleText}
              </h3>
              <p class="text-[#64748bFF] job-card-subtitle">${rejecteItems.jobCardTitleText}</p>
            </div>
            <p class="flex items-center gap-3 text-[#64748bFF] job-card-type-and-salary">
              ${rejecteItems.jobCardTypeAndSalaryText}
            </p>

             <div class="not-applied-job-card-parent">
              <span class="text-[red] bg-[#9d040444] font-semibold px-3 py-2 border text-[14px] not-applied-job-card-status">
                   ${rejecteItems.notAppliedJobCardStatusText}
              </span>
            </div>

            <p class="text-[14px] text-[#323b49FF] job-card-describtion">
              ${rejecteItems.jobCardDescribtionText}
            </p>

             <div class="flex gap-2">
              <button
                class="btn INTERVIEW-btn border border-[#10b981FF] font-semibold text-[#10b981FF] job-card-interview-btn"
              >
                INTERVIEW
              </button>
              <button
                class="btn border REJECTED-btn border-[#ef4444FF] font-semibold text-[#ef4444FF] job-card-rejected-btn"
              >
                REJECTED
              </button>
            </div>
          </div>

          <!-- card deleate icon part -->
          <div id="card-deleate-icon-part">
            <button class="btn job-card-deleate-btn">
              <i class="fa-solid fa-trash-can"></i>
            </button>
          </div>
               `
           
               jobsCardAddingRejectSectionPart.appendChild(createJobsCardDivRejectSection);
        }
    }

    

}






