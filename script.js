// Fetch the JSON data
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        // Get references to the dropdown elements
        const dropdown1 = document.getElementById('dropdown1');
        const dropdown2 = document.getElementById('dropdown2');

        // Populate the first dropdown
        data.dropdown1Options.forEach(option => {
            const optionElement = document.createElement('option');
            optionElement.textContent = option;
            dropdown1.appendChild(optionElement);
        });

        // Populate the second dropdown
        data.dropdown2Options.forEach(option => {
            const optionElement = document.createElement('option');
            optionElement.textContent = option;
            dropdown2.appendChild(optionElement);
        });
    })
    .catch(error => console.error('Error fetching JSON data:', error));
