
function showSection(sectionId) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
      section.style.display = 'none';
    });

    const activeSection = document.getElementById(sectionId);
    if (activeSection) {
      activeSection.style.display = 'block';
    }
  }

  // On nav click, show corresponding section
  document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault(); // Stop default scroll
      const targetId = this.getAttribute('href').replace('#', '');
      showSection(targetId);
    });
  });

window.addEventListener("DOMContentLoaded", () =>{
  showSection("about")
});
/*  form Setup */

document.getElementById("contactForm").addEventListener("submit", async function (e) {
  e.preventDefault();
const form = document.getElementById("contactForm");
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  try {
    const res = await fetch("http://localhost:3000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, email, message })
    });

    if (res.ok) {
      document.getElementById("popup").style.display = "block";
      setTimeout(() => {
        document.getElementById("popup").style.display = "none";
      }, 3000);

      document.getElementById("contactForm").reset();
    } else {
      alert("Send Succesfully.");
    }
  } catch (err) {
    console.error(err);
    alert("Send Succesfully.");
  }
});
console.log(name, email, message);  // Check if the values are correct



