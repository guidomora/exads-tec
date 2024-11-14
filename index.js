document.addEventListener("DOMContentLoaded", function () {
    const options1 = document.getElementById("options-1");
    const options2 = document.getElementById("options-2");
    const options3 = document.getElementById("options-3");
    const options4 = document.getElementById("options-4");
    const options5 = document.getElementById("options-5");
    const circle1 = document.getElementById("circle1");
    const circle2 = document.getElementById("circle2");
    const circle3 = document.getElementById("circle3");
    const text = document.getElementById("text");
    const title = document.getElementById("title");

    const titleText = "Which one do you like the most?";
    const textText = "QUESTION 2 OF 3:";
    // Ocultar `options-2` y `options-3` al inicio
    options2.style.display = "none";
    options3.style.display = "none";
    options4.style.display = "none";
    options5.style.display = "none";
    circle1.style.backgroundColor = "#22daa8";

    function showNextOption(currentOption, nextOption) {
        currentOption.style.display = "none";
        nextOption.style.display = "flex";
    }

    const movies1 = options1.querySelectorAll(".movie");
    movies1.forEach((movie) => {
        movie.addEventListener("click", () => {
            if (movie.src.includes('image1')) {
                showNextOption(options1, options2);
                circle1.style.backgroundColor = "white";
                circle2.style.backgroundColor = "#22daa8";
                title.innerHTML = titleText;
                text.innerHTML = textText;
            } else if (movie.src.includes('image2')) {
                showNextOption(options1, options4);
                circle1.style.backgroundColor = "white";
                circle2.style.backgroundColor = "#22daa8";
                title.innerHTML = titleText;
                text.innerHTML = textText;
            } else if (movie.src.includes('image3')) {
                showNextOption(options1, options5);
                circle1.style.backgroundColor = "white";
                circle2.style.backgroundColor = "#22daa8";
                title.innerHTML = titleText;
                text.innerHTML = textText;
            } 
        });
    });

    function showOptions3() {
        showNextOption(options2, options3);
        showNextOption(options4, options3);
        showNextOption(options5, options3);
        circle2.style.backgroundColor = "white";
        circle3.style.backgroundColor = "#22daa8";
        text.innerHTML = "QUESTION 3 OF 3:";
        title.innerHTML = "Which one do you want to watch now?";
    }

    const movies2 = options2.querySelectorAll(".movie");
    const movies4 = options4.querySelectorAll(".movie");
    const movies5 = options5.querySelectorAll(".movie");

    [movies2, movies4, movies5].forEach((movies) => {
        movies.forEach((movie) => {
            movie.addEventListener("click", showOptions3);
        });
    });
});
