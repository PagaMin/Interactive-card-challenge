let activeRatingNumber;
const contentMain = document.querySelector('.container');
const subContent = document.querySelector('.thank-you');
const value = document.querySelector('#selectedDom');

function selectRating(number) {
    const ratingNumbers = document.querySelectorAll('.rate-select')
    const selectedNumbers = ratingNumbers[number - 1];
    selectedNumbers.classList.add('active');


    if (activeRatingNumber) {
        const activeRating = ratingNumbers[activeRatingNumber - 1];
        activeRating.classList.remove('active');
    }

    activeRatingNumber = number;
}

function submit() {
    if (activeRatingNumber) {
        contentMain.classList.add('hide');
        subContent.classList.remove('hide');
        value.textContent = activeRatingNumber;
    }

}
