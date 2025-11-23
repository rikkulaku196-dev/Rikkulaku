<!-- /* FILE: script.js */ -->
<script>
/*
    Save this block into script.js
*/
(function(){
    // Basic interactive behaviors
    document.getElementById('year').textContent = new Date().getFullYear();


    var menuBtn = document.getElementById('menuToggle');
    var nav = document.getElementById('nav');
    menuBtn && menuBtn.addEventListener('click', function(){
        if(nav.style.display === 'flex') nav.style.display = '';
        else nav.style.display = 'flex';
});


    // Call WA button
    var callBtn = document.getElementById('callBtn');
    callBtn && callBtn.addEventListener('click', function(){
    // change number accordingly
    window.open('https://wa.me/6281234567890?text=Halo%20Rikkulaku%20saya%20ingin%20booking', '_blank');
});


    // Simple form validation before submit
    var form = document.getElementById('contactForm');
    form && form.addEventListener('submit', function(e){
        var name = document.getElementById('name').value.trim();
        var phone = document.getElementById('phone').value.trim();
        if(!name || !phone){
            e.preventDefault();
            alert('Isi nama dan nomor telepon/WA terlebih dahulu.');
        } else {
            // If using mailto or external form provider, you may let it submit.
            // To use AJAX, replace this block with fetch() to your server or form endpoint.
        }
    });


    // Accessibility: close menu on resize
    window.addEventListener('resize', function(){
        if(window.innerWidth > 640) nav.style.display = 'flex';
        else nav.style.display = '';
    });
})();
window.addEventListener('scroll', () => {
    const header = document.querySelector('.site-header');
    if (window.scrollY > 40) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

</script>
<!-- END script.js -->