const studentGrid = document.getElementById("studentGrid");
const searchInput = document.getElementById("searchInput");
const statusFilter = document.getElementById("statusFilter");
const resetButton = document.getElementById("resetButton");
const resultCount = document.getElementById("resultCount");
const noResults = document.getElementById("noResults");

/* Build the photo, or a placeholder with the student's initials */
function createPhoto(student) {
  if (!student.image) {
    return createPlaceholder(student);
  }

  const img = document.createElement("img");
  img.className = "card-photo";
  img.src = student.image;
  img.alt = "Photo of " + student.name;
  img.loading = "lazy";
  return img;
}

function createPlaceholder(student) {
  const placeholder = document.createElement("div");
  placeholder.className = "card-photo-placeholder";
  placeholder.textContent = getInitials(student.name);
  placeholder.setAttribute("aria-hidden", "true");
  return placeholder;
}

function getInitials(name) {
  const words = name.trim().split(/\s+/);
  const first = words[0][0] || "";
  const last = words.length > 1 ? words[words.length - 1][0] : "";
  return (first + last).toUpperCase();
}

function createStatusBadge(status) {
  const badge = document.createElement("span");
  badge.className = "status-badge status-" + status.toLowerCase();
  badge.textContent = status;
  return badge;
}

function createDetail(label, value) {
  const line = document.createElement("p");
  line.className = "card-detail";
  line.textContent = label + ": " + value;
  return line;
}

/* Build one complete card for one student */
function createCard(student) {
  const card = document.createElement("article");
  card.className = "student-card";

  const name = document.createElement("h2");
  name.className = "card-name";
  name.textContent = student.name;
  name.title = student.name;            // full name on hover

  const header = document.createElement("div");
  header.className = "card-header";
  header.append(name, createStatusBadge(student.status));

  const description = document.createElement("p");
  description.className = "card-description";
  description.textContent = student.description;

  const body = document.createElement("div");
  body.className = "card-body";
  body.append(
    header,
    createDetail("Email", student.email),
    createDetail("Department", student.department),
    createDetail("Course", student.course),
    createDetail("Mobile", student.mobile),
    description
  );

  card.append(createPhoto(student), body);
  return card;
}

/* Draw a list of students into the grid */
function renderStudents(list) {
  studentGrid.innerHTML = "";
  list.forEach(function (student) {
    studentGrid.appendChild(createCard(student));
  });
}

/* ===== Search and filter ===== */

/* Case-insensitive search across name, email, department and course */
function matchesSearch(student, searchText) {
  if (searchText === "") {
    return true;
  }
  const searchableText = [
    student.name,
    student.email,
    student.department,
    student.course
  ].join(" ").toLowerCase();

  return searchableText.includes(searchText);
}

function matchesStatus(student, selectedStatus) {
  return selectedStatus === "all" || student.status === selectedStatus;
}

/* A student must pass BOTH the search and the status filter */
function getFilteredStudents() {
  const searchText = searchInput.value.trim().toLowerCase();
  const selectedStatus = statusFilter.value;

  return students.filter(function (student) {
    return matchesSearch(student, searchText) && matchesStatus(student, selectedStatus);
  });
}

function updateResultCount(count) {
  resultCount.textContent = "Showing " + count + " of " + students.length + " students";
}

function updateNoResultsMessage(count) {
  noResults.hidden = count !== 0;
}

/* Re-draw the page using the current search and filter values */
function updatePage() {
  const filtered = getFilteredStudents();
  renderStudents(filtered);
  updateResultCount(filtered.length);
  updateNoResultsMessage(filtered.length);
}

function resetFilters() {
  searchInput.value = "";
  statusFilter.value = "all";
  updatePage();
}

function setupEventListeners() {
  searchInput.addEventListener("input", updatePage);   // filters as the user types
  statusFilter.addEventListener("change", updatePage);
  resetButton.addEventListener("click", resetFilters);
}

setupEventListeners();
updatePage();
