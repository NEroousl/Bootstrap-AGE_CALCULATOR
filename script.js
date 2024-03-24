document.addEventListener('DOMContentLoaded', function () {
    // Function to update the today's date
    function updateToday() {
        const todayElement = document.getElementById('today');
        const today = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        todayElement.textContent = today.toLocaleDateString('en-US', options);
    }

    // Function to calculate and update age
    function updateAge() {
        const dob = new Date(document.getElementById('dob').value);
        const now = new Date();

        const diff = now - dob;
        const ageDate = new Date(diff);

        const years = Math.abs(ageDate.getUTCFullYear() - 1970);
        const months = ageDate.getUTCMonth();
        const days = ageDate.getUTCDate() - 1;

        document.getElementById('year').textContent = `${years} years`;
        document.getElementById('month').textContent = `${months} months`;
        document.getElementById('date').textContent = `${days} days`;
    }

    // Event listener for form submission
    const form = document.getElementById('ageCalculatorForm');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        updateAge();
    });

    // Initial update for today's date
    updateToday();
});