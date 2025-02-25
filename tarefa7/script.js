const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach((link) => {
 link.addEventListener("click", (e) => {
  e.preventDefault();
  const targetId = link.getAttribute("href").substring(1);
  const targetSection = document.getElementById(targetId);

  window.scrollTo({
   top: targetSection.offsetTop - 50,
   behavior: "smooth",
  });
 });
});

const animatedElements = document.querySelectorAll(
 ".hero h2, .hero p, .produto-card, .footer p"
);

const checkScroll = () => {
 const windowHeight = window.innerHeight;

 animatedElements.forEach((element) => {
  const elementTop = element.getBoundingClientRect().top;

  if (elementTop < windowHeight - 100) {
   element.classList.add("animate");
  }
 });
};

window.addEventListener("scroll", checkScroll);

const btn = document.querySelector(".btn");

btn.addEventListener("mouseenter", () => {
 btn.style.transform = "scale(1.1)";
 btn.style.transition = "transform 0.3s ease-in-out";
});

btn.addEventListener("mouseleave", () => {
 btn.style.transform = "scale(1)";
});

window.addEventListener("load", checkScroll);
