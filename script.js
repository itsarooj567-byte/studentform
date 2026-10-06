const studentGrid = document.getElementById("studentGrid");

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

renderStudents(students);
