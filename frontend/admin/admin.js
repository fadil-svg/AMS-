const attendanceLog = document.querySelector('.attendance-log');
const sections = document.querySelectorAll(".section");

// sections.forEach(section => {
//   section.addEventListener("click", () => {
//     sections.forEach(s => s.classList.remove("bg-blue-500", "text-white"));
//     section.classList.add("bg-blue-500", "text-white");
//   });
// });

 attendanceLog.addEventListener('click', function() {
    window.location.href = "logs.html"
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
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);
const ctx = document.getElementById('myChart').getContext('2d');

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr'],
  datasets: [
    {
      label: 'Active Users',
      data: [65, 59, 80, 81],
      backgroundColor: 'rgba(75, 192, 192, 0.5)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
      // you can set other dataset-specific options here
    }
  ]
};

const options = {
  responsive: true, // auto resize
  maintainAspectRatio: false, // if you want to control sizing via CSS
  scales: {
    y: {
      beginAtZero: true,
      title: {
        display: true,
        text: 'Users'
      }
    },
    x: {
      title: {
        display: true,
        text: 'Month'
      }
    }
  },
  plugins: {
    tooltip: {
      enabled: true,
      callbacks: {
        label: (ctx) => `${ctx.dataset.label}: ${ctx.formattedValue}`
      }
    },
    legend: {
      position: 'top'
    }
  }
};


