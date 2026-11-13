(() => {
    const bar = document.querySelector('.floating-header');
    const masthead = document.querySelector('.site-masthead');
    if (!bar || !masthead) return;

    let pending = false;
    const update = () => {
        pending = false;
        // Keep focused controls available even when scrolling back to the full masthead.
        const visible = masthead.getBoundingClientRect().bottom <= 0 || bar.contains(document.activeElement);
        bar.inert = !visible;
        bar.classList.toggle('is-visible', visible);
    };
    const schedule = () => {
        if (pending) return;
        pending = true;
        requestAnimationFrame(update);
    };
    const measure = () => {
        document.documentElement.style.setProperty('--floating-header-offset', `${bar.offsetHeight + 16}px`);
        schedule();
    };

    bar.hidden = false;
    update();
    measure();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', measure, { passive: true });
    window.addEventListener('pageshow', schedule);
    bar.addEventListener('focusout', schedule);
    if ('ResizeObserver' in window) {
        const observer = new ResizeObserver(measure);
        observer.observe(bar);
        observer.observe(masthead);
    }
})();
