let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const thumbnails = document.querySelectorAll('.thumbnail');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));

    thumbnails.forEach(thumbnail => thumbnail.classList.remove('active'));

    // تعيين الشريحة والصورة المصغرة المختارة كـ active
    currentSlide = (index + totalSlides) % totalSlides;
    slides[currentSlide].classList.add('active');
    thumbnails[currentSlide].classList.add('active');
}

function changeSlide(direction) {
    showSlide(currentSlide + direction);
    resetAutoSlide();
}

let autoSlide = setInterval(() => showSlide(currentSlide + 1), 3000);

function resetAutoSlide() {
    clearInterval(autoSlide);
    autoSlide = setInterval(() => showSlide(currentSlide + 1), 3000);
}

document.querySelector('.slider').addEventListener('mouseover', () => clearInterval(autoSlide));
document.querySelector('.slider').addEventListener('mouseout', resetAutoSlide);

showSlide(currentSlide);
