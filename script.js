
let activeTab = "ALL";

// Job array
let jobs = [
  { id: 1, company: "Mobile First Corp", role: "React Native Developer", location: "Remote", type: "Full-time", salary: "$1,500/month", description: "Build cross-platform mobile applications using React Native.", status: "ALL" },
  { id: 2, company: "CloudNova", role: "Frontend Engineer", location: "Berlin", type: "Full-time", salary: "$1,700/month", description: "Develop modern web interfaces for cloud platforms.", status: "ALL" },
  { id: 3, company: "PayFlow", role: "UI Engineer", location: "London", type: "Full-time", salary: "$1,600/month", description: "Design clean and accessible fintech user interfaces.", status: "ALL" },
  { id: 4, company: "HealthSync", role: "Frontend Developer", location: "Toronto", type: "Full-time", salary: "$1,800/month", description: "Build patient-facing healthcare applications.", status: "ALL" },
  { id: 5, company: "EduSpark", role: "JavaScript Developer", location: "Remote", type: "Part-time", salary: "$1,200/month", description: "Create interactive learning tools for students.", status: "ALL" },
  { id: 6, company: "RetailX", role: "Frontend Specialist", location: "Amsterdam", type: "Full-time", salary: "$1,700/month", description: "Improve conversion-focused e-commerce UI.", status: "ALL" },
  { id: 7, company: "TravelLoop", role: "Web UI Developer", location: "Remote", type: "Contract", salary: "$1,300/month", description: "Develop booking and travel management tools.", status: "ALL" },
  { id: 8, company: "DataNest", role: "Junior Web Developer", location: "Remote", type: "Contract", salary: "$1,100/month", description: "Maintain dashboards and internal tools.", status: "ALL" },
];


// Function: Switch tabs

function setTab(tabName) {
  activeTab = tabName;


  const tabButtons = document.querySelectorAll(".tab-btn");
  tabButtons.forEach(button => {
    button.className = "tab-btn px-3 sm:px-4 py-1.5 sm:py-2 rounded-md text-xs sm:text-sm font-medium border bg-white text-slate-700";
  });


  const activeButton = document.getElementById(`tab-${tabName.toLowerCase()}`);
  activeButton.className = "tab-btn px-3 sm:px-4 py-1.5 sm:py-2 rounded-md text-xs sm:text-sm font-medium bg-blue-500 text-white";

  render();
}


function updateStatus(jobId, newStatus) {
  jobs = jobs.map(job => {
    if (job.id === jobId) {

      return job.status === newStatus ? { ...job, status: "ALL" } : { ...job, status: newStatus };
    }
    return job;
  });

  render();
}


function deleteJob(jobId) {
  jobs = jobs.filter(job => job.id !== jobId);
  render();
}


function render() {
  const jobList = document.getElementById("jobList");
  const emptyJob = document.getElementById("emptyJob");

  const filteredJobs = activeTab === "ALL" ? jobs : jobs.filter(job => job.status === activeTab);

  document.getElementById("totalCount").innerText = jobs.length;
  document.getElementById("interviewCount").innerText = jobs.filter(job => job.status === "INTERVIEW").length;
  document.getElementById("rejectedCount").innerText = jobs.filter(job => job.status === "REJECTED").length;
  document.getElementById("tabCount").innerText = filteredJobs.length + " jobs";


  jobList.innerHTML = "";


  if (filteredJobs.length === 0) {
    emptyJob.classList.remove("hidden");
    return;
  } else {
    emptyJob.classList.add("hidden");
  }

  filteredJobs.forEach(job => {
    const badgeText = job.status === "ALL" ? "NOT APPLIED" : job.status;
    const badgeColor =
      job.status === "INTERVIEW" ? "bg-green-100 text-green-700" :
        job.status === "REJECTED" ? "bg-red-100 text-red-700" :
          "bg-slate-100 text-slate-700";

    jobList.innerHTML += `
      <div class="job-card bg-white border rounded-xl p-4 sm:p-6 relative">
        <button onclick="deleteJob(${job.id})" class="absolute top-3 right-3 sm:top-4 sm:right-4 text-slate-400 hover:text-red-500 text-sm sm:text-base">
          <i class="fa-regular fa-trash-can"></i>
        </button>

        <h3 class="text-base sm:text-lg font-semibold text-slate-900">${job.company}</h3>
        <p class="job-role text-sm sm:text-base text-slate-600">${job.role}</p>
        <p class="job-meta text-xs sm:text-sm text-slate-500 mt-1 sm:mt-2">${job.location} • ${job.type} • ${job.salary}</p>

        <span class="inline-block mt-2 sm:mt-3 px-2 sm:px-3 py-0.5 sm:py-1 text-xs rounded ${badgeColor}">${badgeText}</span>
        <p class="job-desc text-xs sm:text-sm text-slate-600 mt-2 sm:mt-3">${job.description}</p>

        <div class="flex gap-2 sm:gap-3 mt-3 sm:mt-5">
          <button onclick="updateStatus(${job.id}, 'INTERVIEW')" class="action-btn px-3 sm:px-4 py-1.5 sm:py-2 rounded border text-xs sm:text-sm ${job.status === 'INTERVIEW' ? 'bg-green-500 text-white' : 'text-green-600 border-green-500 hover:bg-green-50'
      }">INTERVIEW</button>

          <button onclick="updateStatus(${job.id}, 'REJECTED')" class="action-btn px-3 sm:px-4 py-1.5 sm:py-2 rounded border text-xs sm:text-sm ${job.status === 'REJECTED' ? 'bg-red-500 text-white' : 'text-red-600 border-red-500 hover:bg-red-50'
      }">REJECTED</button>
        </div>
      </div>
    `;
  });
}

setTab('ALL'); 
