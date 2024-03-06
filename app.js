function fetchApiData() {
    fetch('https://api.example.com/data')
        .then(response => response.json())
        .then(data => {
            const resultDiv = document.getElementById('api-result');
            resultDiv.innerHTML = `API Data: ${JSON.stringify(data)}`;
        })
        .catch(error => console.error('Error fetching API data:', error));
}
;