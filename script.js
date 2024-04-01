import { userData } from "./data.js";

const TableHeadElement = document.getElementById("table-head");
const TableBodyElement = document.getElementById("table-body");
const previosButton = document.getElementById("previous-btn");
const nextButton = document.getElementById("next-btn");
const pageNotext = document.getElementById("page-no");

let currentPage = 1;
let dataLimit = 20;
let filteredData = [];

function getPaginatedData(data) {
  const startIndex = (currentPage - 1) * dataLimit;
  const endIndex = Math.min(startIndex + dataLimit, data.length);
  return data.slice(startIndex, endIndex);
}

function handleSearchInput(inputKey) {
  const SearchInputValue = document.getElementById(
    ${inputKey}-search-input
  ).value;
  const filterData = userData.filter((rowData) =>
    String(rowData[inputKey])
      .toLowerCase()
      .includes(String(SearchInputValue.toLowerCase()))
  );
  filteredData = filterData;
  currentPage = 1;
  pageNotext.innerText = currentPage;
  const getPaginatedData = getPaginatedData(filteredData);
  createTableBody(PaginatedfilteredData);
}
function createTableHeader(tableData) {
  const TableHeadkeys = Object.keys(tableData[0]);

  TableHeadkeys.forEach((headerkey) => {
    const TableHeaderkeyElement = document.createElement("th");
    const SearchInputElement = document.createElement("input");
    const searchInputId = ${headerkey}-search-input;

    SearchInputElement.setAttribute("type", "search");
    SearchInputElement.setAttribute("placeholder", Search ${headerkey});
    SearchInputElement.setAttribute("id", ${headerkey}-search-input);
    SearchInputElement.addEventListener("keyup", () =>
      handleSearchInput(headerkey)
    );

    TableHeaderkeyElement.innerText = headerkey;
    TableHeaderkeyElement.appendChild(SearchInputElement);
    TableHeadElement.appendChild(TableHeaderkeyElement);
  });
}

function createTableBody(tableData) {
  tableData.forEach((rowData) => {
    const tableRowElement = document.createElement("tr");
    const tableRowValue = Object.values(rowData);
    tableRowValue.forEach((DescriptionText) => {
      const tableDescriptionElement = document.createElement("td");
      tableDescriptionElement.innerText = DescriptionText;
      tableRowElement.appendChild(tableDescriptionElement);
    });

    TableBodyElement.appendChild(tableRowElement);
  });
}
previosButton.addEventListener("click", () => {
  const currentData =filterData.length ? filterData : userData

  currentPage = currentPage > 1 ? current - 1 : 1
  pageNotext.innerText = currentPage
  createTableBody(getPaginatedData(currentData))
});

nextButton.addEventListener("click", () => {
  const currentData = filteredData.length ? filteredData : userData;

  const totalPages = Math.ceil(currentData.length / dataLimit);
  currentPage = currentPage < totalPages ? currentPage + 1 : totalPages;
  pageNotext.innerText = currentPage;
  createTableBody(getPaginatedData(currentData));
});

pageNoText.innerText = currentPage;

const fetchTableData = async() => {
    const response = await fetch(URL);
    const data = await response.json();
    return data;
}

  fetchTableData().then((data)=>{
    createTableHeader(userData);
    createTableBody(getPaginatedData(userData));
}) .catch((error) => console.log(error));


fetch(URL) 
.then(response => response.json())
.then(data) => {
    createTableHeader(data);
    createTableBody(getPaginatedData(data));
};

