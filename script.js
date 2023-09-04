const apiKey = process.env.SCHOOL_API_KEY;
const apiUrl = "https://api.schooldigger.com/v2.0/autocomplete/schools";

async function fetchSchools(location) {
    try {
        const url = `${apiUrl}?q=${location}&returnCount=5&appID=6e029654&appKey=${apiKey}`;
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        displaySchools(data.schoolMatches);
    } catch (error) {
        console.log('There was an error', error);
    }
}

function displaySchools(schools) {
    const schoolTableBody = document.getElementById('schoolTableBody');
    schoolTableBody.innerHTML = ''; // Clear previous results

    for (const school of schools) {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${school.schoolName}</td>
            <td>${school.city}, ${school.state} ${school.zip}</td>
            <td>${school.schoolLevel}</td>
            <td>${school.lowGrade} - ${school.highGrade}</td>
            <td>${school.rank} out of ${school.rankOf}, ${school.rankStars} stars</td>
        `;
        schoolTableBody.appendChild(row);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.getElementById('searchButton');
    searchButton.addEventListener('click', () => {
        const locationInput = document.getElementById('locationInput');
        const location = locationInput.value;
        fetchSchools(location);
    });
});
