document.addEventListener("DOMContentLoaded", function() {
    const headings = [
        "A human who want to make a difference.",
        "Welcome to my Website!",
        "Discover my Projects",
        "Learn More About Me",
        "Get in Touch with me :D",
        "Our Journey Starts Here",
        "I like Hamsters",
        "I like Cats",
        "I like Dogs",
        "I like turtles",
    ];
    
    let currentHeadingIndex = 0;
    const headingElement = document.getElementById("dynamic-heading");
    const typingSpeed = 100; // Adjust typing speed
    const erasingSpeed = 50; // Adjust erasing speed
    const delayBetween = 2000; // Delay between typing and erasing

    function typeHeading(text, index, callback) {
        if (index < text.length) {
            headingElement.textContent += text.charAt(index);
            setTimeout(() => typeHeading(text, index + 1, callback), typingSpeed);
        } else {
            setTimeout(callback, delayBetween);
        }
    }

    function eraseHeading(text, index, callback) {
        if (index >= 0) {
            headingElement.textContent = text.substring(0, index);
            setTimeout(() => eraseHeading(text, index - 1, callback), erasingSpeed);
        } else {
            setTimeout(callback, typingSpeed);
        }
    }

    function changeHeading() {
        const currentHeading = headings[currentHeadingIndex];
        typeHeading(currentHeading, 0, () => {
            setTimeout(() => {
                eraseHeading(currentHeading, currentHeading.length - 1, () => {
                    currentHeadingIndex = (currentHeadingIndex + 1) % headings.length;
                    changeHeading();
                });
            }, delayBetween);
        });
    }

    changeHeading();
});
