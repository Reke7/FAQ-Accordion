const showContents = document.querySelectorAll(".show-content");
    const descriptions = document.querySelectorAll('.description');

    showContents.forEach(showContent => {
        showContent.addEventListener('click', () => {
            const description = showContent.parentElement.nextElementSibling;
            const isOpen = !description.classList.contains('close');

            // Close all descriptions if the clicked one is not already open
            if (!isOpen) {
                descriptions.forEach(desc => {
                    desc.classList.add('close');
                });
                showContents.forEach(show => {
                    show.src = "assets/images/icon-plus.svg";
                })
            } else {
                showContent.src = "assets/images/icon-plus.svg";
            }
            
            // Toggle the state of the clicked description
            description.classList.toggle('close');
            showContent.src = isOpen ? "assets/images/icon-plus.svg" : "assets/images/icon-minus.svg";
        });
    });