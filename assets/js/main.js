document.addEventListener('DOMContentLoaded', function () {
    var mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    var mobileNavMenu = document.querySelector('.mobile-nav-menu');

    mobileNavToggle.addEventListener('click', function () {
        this.classList.toggle('mobile-nav-toggle-open');
        if (mobileNavMenu.style.display === "none" || mobileNavMenu.style.display === "") {
            mobileNavMenu.style.display = "block";
            setTimeout(function () {
                mobileNavMenu.classList.add('mobile-nav-menu-visible');
            }, 10); // Delay to allow the display change to take effect
            document.body.style.overflow = "hidden";
        } else {
            mobileNavMenu.classList.remove('mobile-nav-menu-visible');
            setTimeout(function () {
                mobileNavMenu.style.display = "none";
            }, 300); // Delay to allow the opacity transition to complete
            document.body.style.overflow = "";
        }
    });
});