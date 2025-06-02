document.addEventListener('DOMContentLoaded', function() {
    // Навигация по секциям
    const navItems = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('.section');
    
    // Плавный скролл по клику
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            const targetSection = document.getElementById(targetId);
            
            // Удаляем активный класс у всех пунктов
            navItems.forEach(navItem => navItem.classList.remove('active'));
            // Добавляем активный класс текущему пункту
            this.classList.add('active');
            
            // Плавный скролл к секции
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    // Изменение активного пункта при скролле
    window.addEventListener('scroll', function() {
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= sectionTop - 100 && pageYOffset < sectionTop + sectionHeight - 100) {
                currentSection = section.getAttribute('id');
            }
        });
        
        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('data-target') === currentSection) {
                item.classList.add('active');
            }
        });
    });
    
    // Слайдер сотрудников
    const sliderContainer = document.querySelector('.slider-container');
    const teamMembers = document.querySelectorAll('.team-member');
    const prevBtn = document.querySelector('.slider-btn.prev');
    const nextBtn = document.querySelector('.slider-btn.next');
    
    let currentIndex = 0;
    const memberWidth = teamMembers[0].offsetWidth + 30; // width + gap
    
    function updateSlider() {
        sliderContainer.style.transform = `translateX(-${currentIndex * memberWidth}px)`;
    }
    
    nextBtn.addEventListener('click', function() {
        if (currentIndex < teamMembers.length - 1) {
            currentIndex++;
            updateSlider();
        }
    });
    
    prevBtn.addEventListener('click', function() {
        if (currentIndex > 0) {
            currentIndex--;
            updateSlider();
        }
    });
    
    // Адаптация слайдера при ресайзе
    window.addEventListener('resize', function() {
        memberWidth = teamMembers[0].offsetWidth + 30;
        updateSlider();
    });
});