const attendanceLog = document.querySelector('.attendance-log');
const sections = document.querySelectorAll(".section");

// sections.forEach(section => {
//   section.addEventListener("click", () => {
//     sections.forEach(s => s.classList.remove("bg-blue-500", "text-white"));
//     section.classList.add("bg-blue-500", "text-white");
//   });
// });

 attendanceLog.addEventListener('click', function() {
    window.location.href = "logs.html";
 });
 attendanceLog.addEventListener('click', () => {
    const isActive = attendanceLog.classList.contains("bg-blue-500");

    if (isActive) {
      // deactivate
      attendanceLog.classList.remove("bg-blue-500", "text-white");
      attendanceLog.classList.add("bg-gray-200", "text-gray-800");
      attendanceLog.setAttribute("aria-current", "false");
    } else {
      // activate
      attendanceLog.classList.add("bg-blue-500", "text-white");
      attendanceLog.classList.remove("bg-gray-200", "text-gray-800");
      attendanceLog.setAttribute("aria-current", "page");
    }
 });
 
 // Theme toggle functionality
        const themeToggle = document.getElementById('theme-toggle');
        themeToggle.addEventListener('click', function() {
            const icon = this.querySelector('i');
            if (icon.classList.contains('fa-moon')) {
                icon.classList.remove('fa-moon');
                icon.classList.add('fa-sun');
                document.documentElement.classList.add('light');
            } else {
                icon.classList.remove('fa-sun');
                icon.classList.add('fa-moon');
                document.documentElement.classList.remove('dark');
            }
        });
   //charts
   new Chart(ctx, {
  type: 'bar',
  data: { labels: ['Jan', 'Feb'], datasets: [{ data: [10, 20] }] }
});

