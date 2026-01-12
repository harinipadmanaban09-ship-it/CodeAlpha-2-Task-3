/* Resume modal */
function openResume(){
  document.getElementById("resumeModal").style.display="block";
}
function closeResume(){
  document.getElementById("resumeModal").style.display="none";
}

/* Dark mode */
document.getElementById("themeToggle").onclick=()=>{
  document.body.classList.toggle("dark");
};

/* Scroll reveal */
const reveals=document.querySelectorAll(".reveal");
window.addEventListener("scroll",()=>{
  reveals.forEach(el=>{
    if(el.getBoundingClientRect().top < window.innerHeight-100){
      el.classList.add("active");
    }
  });
});

/* Contact form */
document.querySelector(".contact-form").addEventListener("submit",e=>{
  e.preventDefault();
  alert("Message sent successfully!");
});
