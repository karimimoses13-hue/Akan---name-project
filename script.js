document.getElementById("akanForm").addEventListener("submit", function (e) {
    e.preventDefault();

    // Get inputs
    const day = parseInt(document.getElementById("day").value);
    const month = parseInt(document.getElementById("month").value);
    const year = parseInt(document.getElementById("year").value);
    const gender = document.querySelector('input[name="gender"]:checked');

    // Validation
    if (!day || day < 1 || day > 31) {
        alert("Please enter a valid day (1-31)");
        return;g
    }

    if (!month || month < 1 || month > 12) {
        alert("Please enter a valid month (1-12)");
        return;
    }

    if (!year) {
        alert("Please enter a valid year");
        return;
    }

    if (!gender) {
        alert("Please select a gender");
        return;
    }

    // Extract CC and YY
    const CC = Math.floor(year / 100);
    const YY = year % 100;

    // Day of week formula
    const dayIndex = (
        (4 * CC - 2 * CC - 1) +
        (5 * YY / 4) +
        (26 * (month + 1) / 10) +
        day
    ) % 7;

    const index = Math.floor((dayIndex + 7) % 7);

    // Arrays
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

    // Determine Akan name
    let akanName;
    if (gender.value 
=== "male") {
        akanName = maleNames[index];
    } else {
        akanName = femaleNames[index];
    }

    // Display result
    document.getElementById("result").textContent =
        `You were born on a ${days[index]}. Your Akan name is ${akanName}.`;
});



