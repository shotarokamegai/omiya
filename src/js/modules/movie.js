import gsap from 'gsap';


const movie = () => {
    const video = document.getElementById('video')
    const movie = document.getElementsByClassName('movie')[0]

    movie.addEventListener('click', () => {
        if (movie.classList.contains('active')) {
            movie.classList.remove('active');
            video.stop();
        } else {
            movie.classList.add('active');
            video.play();
        }
    })

    video.addEventListener("ended", (event) => {
        movie.classList.remove('active');
        video.stop();
    });
}

window.addEventListener("DOMContentLoaded", movie, false);