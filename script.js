document.addEventListener("DOMContentLoaded", function () {
    const listItems = document.querySelectorAll(".unorder-list .list-item");
  
    // Add 'active' class to the first item by default
    if (listItems.length > 0) {
      listItems[0].classList.add("active");
    }
  
    listItems.forEach(item => {
      item.addEventListener("click", function () {
        // Remove 'active' class from all items
        listItems.forEach(li => li.classList.remove("active"));
  
        // Add 'active' to the clicked item
        this.classList.add("active");
      });
    });
  });

  
  window.addEventListener("scroll", function () {
    const navbar = document.getElementById("navbar");
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  document.getElementById('ToggleBtn').addEventListener('click', function() {
    const navbarMenu = document.getElementById('UnOrderList');
    navbarMenu.classList.toggle('activeul');
  });

  function parallax(e) {
    document.querySelectorAll('.elements').forEach(layer => {
      const speed = layer.getAttribute('data-speed');
      const x = (window.innerWidth - e.pageX * speed) / 100;
      layer.style.transform = `translateX(${x}px)`;
    });
  }

  document.addEventListener('mousemove', parallax);

  const cursor = document.querySelector(".custom-cursor");

  document.addEventListener("mousemove", (e) => {
    cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
  });
  
