document.addEventListener('DOMContentLoaded', function () {
    
    const buttons = document.querySelectorAll('.rotate-button');

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            
            this.classList.toggle('rotated');
        });
    });
});
document.addEventListener('DOMContentLoaded', function () {
    
    const headers = document.querySelectorAll('.header');

    function handleScroll() {
       
        const documentHeight = document.documentElement.scrollHeight;

       
        const viewportHeight = window.innerHeight;

        
        const scrollTop = window.scrollY || window.pageYOffset;
        const scrollPercent = (scrollTop / (documentHeight - viewportHeight)) * 100;

        
        headers.forEach(header => {
            if (scrollPercent > 50) { 
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

   
    window.addEventListener('scroll', handleScroll);

   
    handleScroll();
});

let rotation = 0;
        let extended = false;
        const paragraph = document.getElementById('paragraph');
        const button = document.getElementById('rotate-button');
        const extendedText = ' on breakfast-inclusive rates and celebrate new beginnings with us.';
        const originalText = paragraph.textContent.replace(button.textContent, '').trim();

        function toggleText() {
            rotation = (rotation + (extended ? -180 : 180)) % 360;
            button.style.transform = `rotate(${rotation}deg)`;

            if (extended) {
                paragraph.textContent = originalText;
            } else {
                paragraph.textContent = originalText + extendedText;
            }

            extended = !extended;

            const buttonClone = button.cloneNode(true);
            buttonClone.addEventListener('click', toggleText);
            button.remove();
            paragraph.appendChild(buttonClone);
        }

        button.addEventListener('click', toggleText);

function showDropdown() {
    document.getElementById('dropdown').style.display = 'block';
}

document.addEventListener('click', function(event) {
    if (!event.target.matches('#search-bar')) {
        document.getElementById('dropdown').style.display = 'none';
    }
});
document.addEventListener('DOMContentLoaded', function () {
    const dateRangeInput = document.querySelector('#date-range');
    const dateDisplay = document.querySelector('#date-display');

    flatpickr(dateRangeInput, {
        mode: 'range',
        dateFormat: 'd-m-Y',
        onChange: function(selectedDates, dateStr) {
            if (selectedDates.length === 2) {
                const fromDate = selectedDates[0].toLocaleDateString(''); 
                const toDate = selectedDates[1].toLocaleDateString(''); 
                dateDisplay.innerText = `From: ${fromDate} To: ${toDate}`;
            } else {
                dateDisplay.innerText = dateStr;
            }
        }
    });
});
let roomId = 1;
    let rooms = {};

    function updateTotalSummary() {
        let totalAdults = 0;
        let totalChildren = 0;
        let totalRooms = Object.keys(rooms).length;

        for (let id in rooms) {
            totalAdults += rooms[id].adults;
            totalChildren += rooms[id].children;
        }

        document.getElementById('totalAdults').innerText = 'Total Adults: ' + totalAdults;
        document.getElementById('totalChildren').innerText = 'Total Children: ' + totalChildren;
        document.getElementById('totalRooms').innerText = 'Total Rooms: ' + totalRooms;
    }

    function changeCount(roomId, type, amount) {
        let room = rooms[roomId];
        room[type] += amount;
        if (room[type] < 0) room[type] = 0; // Ensure the count does not go below 0
        document.getElementById(`${roomId}-${type}Counter`).innerText = room[type] + ' ' + type;
        updateTotalSummary();
    }

    function removeRoom(roomId) {
        let roomDiv = document.getElementById(`room${roomId}`);
        if (roomDiv) {
            roomDiv.remove();
            delete rooms[roomId];
            updateTotalSummary();
        }
    }

    function createRoom() {
        let roomDiv = document.createElement('div');
        roomDiv.classList.add('room');
        roomDiv.id = `room${roomId}`;

        roomDiv.innerHTML = `
            <h3>Room ${roomId}</h3>
            <div class="dropdown">
                <button class="button" onclick="changeCount(${roomId}, 'children', -1)">-</button>
                <span class="counter" id="${roomId}-childrenCounter">0 children</span>
                <button class="button" onclick="changeCount(${roomId}, 'children', 1)">+</button>
            </div>
            <div class="dropdown">
                <button class="button" onclick="changeCount(${roomId}, 'adults', -1)">-</button>
                <span class="counter" id="${roomId}-adultsCounter">0 adults</span>
                <button class="button" onclick="changeCount(${roomId}, 'adults', 1)">+</button>
            </div>
            <button class="remove-room-button" onclick="removeRoom(${roomId})">Remove Room</button>
        `;

        document.getElementById('roomsContainer').appendChild(roomDiv);

        rooms[roomId] = { children: 0, adults: 0 };
        roomId++;
        updateTotalSummary();
    }

    document.getElementById('toggleButton').addEventListener('click', function() {
        const modal = document.getElementById('countersModal');
        const button = document.getElementById('toggleButton');

        if (modal.style.display === 'none' || modal.style.display === '') {
            modal.style.display = 'flex';
            button.classList.add('rotate');
            button.innerText = 'Hide Counters';
        } else {
            modal.style.display = 'none';
            button.classList.remove('rotate');
            button.innerText = 'Show Counters';
        }
    });

    document.getElementById('closeButton').addEventListener('click', function() {
        document.getElementById('countersModal').style.display = 'none';
        document.getElementById('toggleButton').classList.remove('rotate');
        document.getElementById('toggleButton').innerText = 'Show Counters';
    });

    document.getElementById('tbutton').addEventListener('click', function() {
        const list = document.getElementById('myList');
        if (list.style.display === 'none') {
            list.style.display = 'block';
            this.textContent = '';
        } else {
            list.style.display = 'none';
            this.textContent = '';
        }
    });
    
