function getInfo() {
    let stopId = Number(document.getElementById('stopId').value);
    let stopName = document.getElementById('stopName');
    let busesUL = document.getElementById('buses');

    const asyncFunc = async () => {
        const resource = `http://localhost:3030/jsonstore/bus/businfo/${stopId}`
        const response = await fetch(resource);

        if (response.status === 200) {
            const data = await response.json();
            return data;
        }

    }
    
    asyncFunc().then(data => {
        console.log(data);

        stopName.textContent = '';
        busesUL.innerHTML = '';

        if (data !== undefined) {
            stopName.textContent = data.name;
    
            let buses = data.buses;
            for (let busId in buses) {
                busId = Number(busId);
                let time = buses[busId];
                let li = document.createElement('li');
                li.textContent = `Bus ${busId} arrives in ${time} minutes`;
                busesUL.appendChild(li);
            }
        } else {
            stopName.textContent = 'Error';
        }

    });
}