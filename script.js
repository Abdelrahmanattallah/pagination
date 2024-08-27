// 1. Create Fake Data
const data = Array.from({ length: 100 }, (_, i) => i + 1);

// 2- Define the Elements Number Inside Each Page
const itemsPerPage = 10;

//3- Calculate the Number Of Pages
const totalPages = Math.ceil(data.length / itemsPerPage);

// 4-Define the Next Page
let currentPage = 1;

// 5-Function To Get The Items In the Current Page
function getPaginatedItems(data, page, itemsPerPage) {
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  return data.slice(startIndex, endIndex);
}

// 6- render The Page Functionality
function renderPage(page) {
  const dataList = document.getElementById("dataList");
  const pageNumberSpan = document.getElementById("pageNumber");

  const paginatedItems = getPaginatedItems(data, page, itemsPerPage);
  dataList.innerHTML = paginatedItems
    .map((item) => `<li>${item}</li>`)
    .join("");
  pageNumberSpan.textContent = `Page ${page}`;

  // disable the previous btn if it the first page
  document.getElementById("prevButton").disabled = page === 1;
  // disable the previous btn if it the last page
  document.getElementById("nextButton").disabled = page === totalPages;
}

// 7- Go To Next Page Function
function goToNextPage() {
  if (currentPage < totalPages) {
    currentPage++;
    renderPage(currentPage);
  }
}

// 8- Go To Previous Page Function
function goToPreviousPage() {
  if (currentPage > 1) {
    currentPage--;
    renderPage(currentPage);
  }
}

//9- Events Handling
document.getElementById("nextButton").addEventListener("click", goToNextPage);
document
  .getElementById("prevButton")
  .addEventListener("click", goToPreviousPage);

// 10- Show the first page when loading
renderPage(currentPage);
