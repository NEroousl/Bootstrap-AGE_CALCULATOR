const form = document.getElementById('ageCalculatorForm');
const resultDiv = document.getElementById('result');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    const dob = new Date(document.getElementById('dob').value);
    const age = calculateAge(dob);
    resultDiv.innerHTML = `Your age is: ${age.years} years, ${age.months} months, and ${age.days} days`;
});

function calculateAge(dob) {
    const now = new Date();
    let years = now.getFullYear() - dob.getFullYear();
    let months = now.getMonth() - dob.getMonth();
    let days = now.getDate() - dob.getDate();

    if (months < 0 || (months === 0 && now.getDate() < dob.getDate())) {
        years--;
        months += 12;
    }

    if (days < 0) {
        months--;
        const prevMonth = new Date(now.getFullYear(), now.getMonth() - 1, dob.getDate());
        days = Math.floor((now - prevMonth) / (1000 * 60 * 60 * 24));
    }

    return {
        years: years,
        months: months,
        days: days
    };
}