<script>
  document.addEventListener("DOMContentLoaded", function () {
    // Menangani klik pada tautan navbar
    const navbarLinks = document.querySelectorAll(".navbar-nav a.nav-link");

    navbarLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        // Menghapus kelas 'active' dari semua tautan navbar
        navbarLinks.forEach(function (link) {
          link.classList.remove("active");
        });

        // Menambahkan kelas 'active' pada tautan yang diklik
        link.classList.add("active");
      });
    });
  });
</script>