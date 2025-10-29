// header
// Load header và highlight tab sau khi header load xong
function loadHeader() {
  fetch('components/header.html')
    .then(res => res.text())
    .then(data => {
      document.getElementById('header-placeholder').innerHTML = data;
      highlightActiveTab();
    });
}

// Hàm highlight tab hiện tại
function highlightActiveTab() {
  const navLinks = document.querySelectorAll('.nav-list li a');
  const currentPath = window.location.pathname.split("/").pop();

  navLinks.forEach(link => {
    const linkPath = link.getAttribute('href').split("/").pop();
    if (linkPath === currentPath) {
      link.classList.add('active');
    }
  });
}

// Chờ DOM sẵn sàng
document.addEventListener("DOMContentLoaded", () => {
  loadHeader();
});



// Import phần header
fetch("components/header.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("header-placeholder").innerHTML = data
  })

// Import phần footer
fetch("components/footer.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("footer-placeholder").innerHTML = data
  })

   const sections = document.querySelectorAll(".video-section, .feature-section");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("show");
    });
  }, { threshold: 0.3 });

  sections.forEach(section => observer.observe(section));


  
    AOS.init({
    duration: 1000, 
    easing: 'ease-out'
  });

  

   const gallery = document.querySelector('.sports-gallery')
  const nextBtn = document.querySelector('.next-btn')
  const prevBtn = document.querySelector('.prev-btn')
  const container = document.querySelector('.sports-slider-container')

  let index = 0
  const totalItems = document.querySelectorAll('.sports-item').length

  // Nhân đôi để loop mượt
  gallery.innerHTML += gallery.innerHTML

  const moveSlide = (direction) => {
    const items = document.querySelectorAll('.sports-item')
    const itemWidth = items[0].offsetWidth + 24
    index += direction

    gallery.style.transition = 'transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)'
    gallery.style.transform = `translateX(${-index * itemWidth}px)`

    setTimeout(() => {
      if (index >= totalItems) {
        gallery.style.transition = 'none'
        index = 0
        gallery.style.transform = `translateX(0)`
      } else if (index < 0) {
        gallery.style.transition = 'none'
        index = totalItems - 1
        gallery.style.transform = `translateX(${-index * itemWidth}px)`
      }
    }, 600)
  }

  // Hiện / ẩn nút điều hướng khi hover
  container.addEventListener('mouseenter', () => {
    prevBtn.classList.remove('hidden')
  })

  container.addEventListener('mouseleave', () => {
    prevBtn.classList.add('hidden')
  })

  nextBtn.addEventListener('click', () => moveSlide(1))
  prevBtn.addEventListener('click', () => moveSlide(-1))



   // Toggle mở/đóng câu hỏi
  document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
      question.parentElement.classList.toggle('active');
    });
  });

  // Tabs chuyển danh sách FAQ
  const tabs = document.querySelectorAll('.tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {

      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const tabId = tab.getAttribute('data-tab');
      document.querySelectorAll('.faq-list').forEach(list => list.style.display = 'none');
      document.getElementById(tabId).style.display = 'block';
    });
  });

  //animation 
  document.addEventListener("DOMContentLoaded", function () {
  const items = document.querySelectorAll(".why-item");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.3 }); 

  items.forEach((item) => observer.observe(item));
});

//animation product
document.addEventListener("DOMContentLoaded", function () {
  const products = document.querySelectorAll(".product-item");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.3 }); // 30% phần tử hiện lên là trigger

  products.forEach((item) => observer.observe(item));
});
  

  // liên hệ 
document.addEventListener("DOMContentLoaded", function() {
  const phoneInput = document.querySelector("#phone");
  const iti = window.intlTelInput(phoneInput, {
    initialCountry: "vn",
    separateDialCode: true,
    preferredCountries: ["vn", "us", "jp"],
    utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.19/js/utils.js"
  });
});