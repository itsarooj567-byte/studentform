# Student Applications

A simple page that shows student records as cards, with live search, a status filter and a reset button.
Plain HTML, CSS and JavaScript only - no libraries, no backend.

## How to run
Open `index.html` in any browser.

## Files
- `index.html` - page structure (header, main, footer)
- `style.css`  - layout, cards, responsive grid
- `data.js`    - the student records (edit this to change the data)
- `script.js`  - rendering, search, filter and reset logic

## Features
- Cards created with JavaScript from the data array
- Search by name, email, department or course (case-insensitive, updates as you type)
- Status filter: Pending / Accepted / Rejected (works together with search)
- Reset button clears everything
- "No results found" message
- Missing or broken photos fall back to an initials placeholder
- 3 columns on desktop, 2 on tablet, 1 on mobile (tested down to 320px)
- Long names, emails and descriptions wrap or get cut off with "..."
