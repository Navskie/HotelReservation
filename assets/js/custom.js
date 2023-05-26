const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
    threshold: 1,
};

 const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
    entries.forEach(enrty => {
        if (!enrty.isIntersecting) {
            return;
        } else {
            enrty.target.classList.add('appear');
            appearOnScroll.unobserve(enrty.target);
        }
    })
 }, appearOptions);

 faders.forEach(fader => {
    appearOnScroll.observe(fader);
 })