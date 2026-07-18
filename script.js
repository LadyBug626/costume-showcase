// 1. Select the button and the hidden text elements from the HTML
const revealBtn = document.getElementById('reveal-btn');
const extraInfo = document.getElementById('extra-info');

// 2. Add a click event listener to the button
revealBtn.addEventListener('click', function() {
    
    // 3. Toggle the 'hidden' CSS class to show or hide the extra information
    extraInfo.classList.toggle('hidden');
    
    // 4. Update the button text depending on whether the text is visible or hidden
    if (extraInfo.classList.contains('hidden')) {
        revealBtn.textContent = 'Read My Design Philosophy';
    } else {
        revealBtn.textContent = 'Hide Design Philosophy';
    }
});