 // alert banner 

 const alertBanner = document.querySelector("#alert");
    // create the html for the banner
    alertBanner.innerHTML =
    `<div class="alert-banner">
    <p><strong>Alert:</strong> You have <strong>6</strong> overdue tasks
    to complete</p>
    <p class="alert-banner-close">x</p>
    </div>
    `;

   
    alertBanner.addEventListener('click', e => {
        const element = e.target;
        if (element.classList.contains("alert-banner-close")) {
        alertBanner.style.display = "none"
        }
        });