// Navigation functionality
function navigateTo(pageId) {
  // Hide all pages
  const pages = document.querySelectorAll(".page");
  pages.forEach((page) => page.classList.remove("active"));

  // Show selected page
  const targetPage = document.getElementById(pageId);
  if (targetPage) {
    targetPage.classList.add("active");
  }

  // Update active nav item
  const navItems = document.querySelectorAll(".nav-item");
  navItems.forEach((item) => {
    item.classList.remove("active");
    if (item.getAttribute("data-page") === pageId) {
      item.classList.add("active");
    }
  });

  // Close mobile sidebar if open
  const sidebar = document.querySelector(".sidebar");
  if (window.innerWidth <= 1024) {
    sidebar.classList.remove("open");
  }

  // Scroll to top smoothly
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Mobile toggle
function toggleSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.classList.toggle("open");
}

// Close sidebar when clicking outside on mobile
document.addEventListener("click", function (event) {
  const sidebar = document.querySelector(".sidebar");
  const toggle = document.querySelector(".mobile-toggle");

  if (window.innerWidth <= 1024) {
    if (
      !sidebar.contains(event.target) &&
      !toggle.contains(event.target) &&
      sidebar.classList.contains("open")
    ) {
      sidebar.classList.remove("open");
    }
  }
});

// Handle window resize
window.addEventListener("resize", function () {
  const sidebar = document.querySelector(".sidebar");
  if (window.innerWidth > 1024) {
    sidebar.classList.remove("open");
  }
});

// Keyboard navigation
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    const sidebar = document.querySelector(".sidebar");
    sidebar.classList.remove("open");
  }
});

// Initialize - show home page by default
document.addEventListener("DOMContentLoaded", function () {
  navigateTo("home");
});
