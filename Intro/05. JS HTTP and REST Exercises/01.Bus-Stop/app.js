async function getInfo() {
    const stopId = document.getElementById('stopId').value;
    const busesUL = document.getElementById('buses');
    let stopName = document.getElementById('stopName');

    // Clear the result list:
    busesUL.innerHTML = '';

    try {
        const response = await fetch(`http://localhost:3030/jsonstore/bus/businfo/${stopId}`);

        if (!response.status) {
            let error = new Error();
            error.status = response.status;
            console.statusText = response.statusText;
            throw error;
        }

        const data = await response.json();
        stopName.textContent = data.name;

        Object.entries(data.buses).forEach(([busId, busTime]) => {
            let listItem = document.createElement('li');
            listItem.textContent = `"Bus ${busId} arrives in ${busTime} minutes"`;
            busesUL.appendChild(listItem);
        });

    } catch (error) {
        stopName.textContent = 'Error!';
    }
}