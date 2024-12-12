
document.getElementById('usernameForm').addEventListener('submit', function (e) {
    e.preventDefault(); 

    const username = document.getElementById('username').value;
    const messageElement = document.getElementById('message');

    // Sending AJAX request to the backend
    fetch('/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({ username })
    })
    .then(response => response.json())
    .then(data => {
        // Update the page based on the results returned by the backend
        if (data.exists) {
            messageElement.textContent = data.message;
            messageElement.style.color = 'red';
        } else {
            document.getElementById("country-menu").style.display="block"
            document.getElementById("welcome").style.display="none"
        }
    })
    .catch(error => {
        console.error('Error:', error);
        messageElement.textContent = 'An error occurred. Please try again later.';
        messageElement.style.color = 'red';
    });
});

document.querySelectorAll('.country-select-menu-button').forEach(button => {
    button.addEventListener('click', function (event) {
        event.preventDefault();

        const country = this.getAttribute('data-country');
        const resultMessage = document.getElementById('resultMessage');
        const airportMenu = document.getElementById('airport-menu');
        const airportList = document.getElementById('airport-list');

        airportMenu.style.display = 'none';
        airportList.innerHTML = ''; // Clear list
        resultMessage.textContent = '';

        fetch('/submit_country', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams({ country })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                resultMessage.textContent = `Airports in ${country}:`;
                resultMessage.style.color = 'green';

                // Display the list of airports and add a button
                data.airports.forEach(airport => {
                    const listItem = document.createElement('li');
                    listItem.textContent = airport;

                    // Creating a Select Button
                    const selectButton = document.createElement('button');
                    selectButton.textContent = "Select";
                    selectButton.addEventListener('click', function () {
                        selectAirport(airport);
                    });

                    listItem.appendChild(selectButton);
                    airportList.appendChild(listItem);
                });

                airportMenu.style.display = 'block';
            } else {
                resultMessage.textContent = data.message;
                resultMessage.style.color = 'red';
            }
        })
        .catch(error => {
            console.error('Error:', error);
            resultMessage.textContent = 'An error occurred. Please try again.';
            resultMessage.style.color = 'red';
        });
    });
});

document.querySelectorAll('.fly-to-country-select-menu-button').forEach(button => {
    button.addEventListener('click', function (event) {
        event.preventDefault();

        const country = this.getAttribute('data-country');
        const resultMessage = document.getElementById('resultMessage');
        const airportMenu = document.getElementById('airport-menu');
        const airportList = document.getElementById('airport-list');

        airportMenu.style.display = 'none';
        airportList.innerHTML = ''; // Clear list
        resultMessage.textContent = '';

        fetch('/submit_country', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams({ country })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                resultMessage.textContent = `Airports in ${country}:`;
                resultMessage.style.color = 'green';

                // Display the list of airports and add a button
                data.airports.forEach(airport => {
                    const listItem = document.createElement('li');
                    listItem.textContent = airport;

                    // Creating a Select Button
                    const selectButton = document.createElement('button');
                    selectButton.textContent = "Select";
                    selectButton.addEventListener('click', function () {
                        dest_selectAirport(airport);
                    });

                    listItem.appendChild(selectButton);
                    airportList.appendChild(listItem);
                });

                airportMenu.style.display = 'block';
            } else {
                resultMessage.textContent = data.message;
                resultMessage.style.color = 'red';
            }
        })
        .catch(error => {
            console.error('Error:', error);
            resultMessage.textContent = 'An error occurred. Please try again.';
            resultMessage.style.color = 'red';
        });
    });
});
function dest_selectAirport(airport) {
    fetch('/fly_to_airport', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({ airport })
    })
    .then(response => response.json())
    .then(data => {
        if(data.success){
            fly_to(data.dep_lat,data.dep_long,data.dest_lat,data.dest_long)
            document.getElementById("side-bar-money").innerHTML = data.money
            document.getElementById("side-bar-point").innerHTML = data.fuel
            document.getElementById("side-bar-location").innerHTML = data.airport
            document.getElementById("fly-to-country-menu").style.display = "none"
            document.getElementById("airport-menu").style.display = "none"
            document.getElementById("main-select-menu").style.display = "block"
            document.getElementById("side-bar-capacity").innerHTML = data.storage
            alert(data.message)
        }
        else{
            alert(data.message)
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
    });
}


function selectAirport(airport) {
    fetch('/select_airport', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({ airport })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("side-bar-money").innerHTML = data.money
        document.getElementById("side-bar-point").innerHTML = data.fuel
        document.getElementById("side-bar-location").innerHTML = data.airport
        document.getElementById("country-menu").style.display = "none"
        document.getElementById("airport-menu").style.display = "none"
        document.getElementById("main-select-menu").style.display = "block"
        document.getElementById("side-bar-username").innerHTML = data.username
        document.getElementById("side-bar-capacity").innerHTML = data.storage
        init(data.latitude,data.longitude);
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
    });
}



function loadGoods() {
    fetch('/get_goods', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            const goodsList = document.querySelector('.goods-list');
            goodsList.innerHTML = ''; // Clear list
            console.log(data.goods)
            data.goods.forEach(item => {
                const itemDiv = document.createElement('div');
                itemDiv.innerHTML = `
                    <p>${item.goods_name} - Weight: ${item.goods_weight}, Value: ${item.goods_value}</p>
                    <button onclick="buyItem(${item.goods_ID})">Buy</button>
                `;
                goodsList.appendChild(itemDiv);
            });
        }
    });
}
function buyItem(goodsId) {
    console.log(goodsId)
    fetch('/buy_item', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ goods_id: goodsId, quantity: 1 })
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message);
        document.getElementById("side-bar-money").innerHTML = data.money
        document.getElementById("side-bar-capacity").innerHTML = data.storage
        if (data.success) {
            loadGoods(); // Reload Items
        }
    });
}
function startFlight() {
    fetch('/start_flight', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ total_value: 1000 }) 
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message);
        if (data.success) {
            document.getElementById("side-bar-point").innerHTML = data.fuel
            document.getElementById("item-select-menu").style.display = "none"
            document.getElementById("fly-to-country-menu").style.display = "block"
        }
    });
}
function startTransportMission() {
    document.getElementById('main-select-menu').style.display = 'none';
    document.getElementById('item-select-menu').style.display = 'block';
    loadGoods();
}

function saveGame(){
    fetch('/save_game', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ total_value: 1000 }) 
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert(data.message)
        }
    });
}

function checkStatus(){
    fetch('/check_status', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ total_value: 1000 })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            document.getElementById('main-select-menu').style.display="none"
            document.getElementById('status').style.display="block"
            document.getElementById("status-username").innerHTML= data.username
            document.getElementById("status-money").innerHTML= data.point
            document.getElementById("status-round").innerHTML= data.round
        }
    });
}

function back_to_main(){
    document.getElementById('main-select-menu').style.display="block"
    document.getElementById('status').style.display="none"
}