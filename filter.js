document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const projects = document.querySelectorAll(".project-item");
    
    filterButtons.forEach(button => {
    button.addEventListener("click", () => {
    // Remove active class from all buttons
    filterButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");
    
    const filterValue = button.getAttribute("data-filter");
    
    projects.forEach(project => {
    if (filterValue === "all" || project.classList.contains(filterValue)) {
    project.style.display = "block";
    } else {
    project.style.display = "none";
    }
    });
    });
    });
    });
    