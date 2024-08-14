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
    if (room[type] < 0) room[type] = 0;
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
    roomId++
    updateTotalSummary();
}


document.getElementById('toggleButton').addEventListener('click', function(event) {
    event.stopPropagation(); 
    const dropdown = document.getElementById('countersDropdown');
    
    if (dropdown.style.display === 'none' || dropdown.style.display === '') {
        dropdown.style.display = 'block';
    } else {
        dropdown.style.display = 'none';
    }
});


document.getElementById('closeButton').addEventListener('click', function() {
    document.getElementById('countersDropdown').style.display = 'none';
});

document.addEventListener('click', function(event) {
    const dropdown = document.getElementById('countersDropdown');
    if (!dropdown.contains(event.target) && event.target.id !== 'toggleButton') {
        dropdown.style.display = 'none';
    }
});


document.getElementById('countersDropdown').addEventListener('click', function(event) {
    event.stopPropagation();
});


document.getElementById('addRoomButton').addEventListener('click', function() {
    createRoom();
});

document.getElementById('tbutton').addEventListener('click', function() {
    var list = document.getElementById('myList');
    if (list.style.display === "none") {
        list.style.display = "block";
    } else {
        list.style.display = "none";
    }
});

document.getElementById('sbox').addEventListener('input', function() {
    let filter = this.value.toLowerCase();
    console.log('Filtering with:', filter); // Debugging line
    document.querySelectorAll('.img-item').forEach(item => {
        let keys = item.getAttribute('data-keys').toLowerCase().split(',');
        if (keys.some(key => key.includes(filter))) {
            item.classList.remove('hid');
            item.classList.add('dsp');
        } else {
            item.classList.remove('dsp');
            item.classList.add('hid');
        }
    });
});



document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const cont = btn.closest('.cont');
            const txt = cont.querySelector('.text');
            cont.classList.toggle('exp');
            txt.textContent = btn.getAttribute('data-text');
            btn.classList.toggle('rot');
            btn.classList.toggle('mov');
        });
    });
});