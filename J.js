document.addEventListener('DOMContentLoaded', function () {
    
    const buttons = document.querySelectorAll('.rotate-button');

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            
            this.classList.toggle('rotated');
        });
    });
});
window.addEventListener('scroll', function() {
   
    const scrollPosition = window.scrollY;
   
    const documentHeight = document.documentElement.scrollHeight;

    const viewportHeight = window.innerHeight;

    
    const scrollPercentage = (scrollPosition / (documentHeight - viewportHeight)) * 100;


    const headElement = document.querySelector('.head');
    const ttElement = document.querySelector('.tt');
   
    const otherElement1 = document.querySelector('.active');
    const otherElement2 = document.querySelector('.dt a');
    const imageElement = document.querySelector('.tt img');
    const activeAnchorElements = document.querySelectorAll('.active a'); 

    
    if (scrollPercentage > 5) {
      headElement.classList.add('scrolled');
      ttElement.classList.add('scrolled');
     
      otherElement1.classList.add('scrolled');
      otherElement2.classList.add('scrolled');
     
      imageElement.src = 'Tajv2.png'; 

      activeAnchorElements.forEach(anchor => {
        anchor.classList.add('scrolled');
      });
    } else {
      headElement.classList.remove('scrolled');
      ttElement.classList.remove('scrolled');
      activeAnchorElements.forEach(anchor => {
        anchor.classList.remove('scrolled');
      });
      otherElement1.classList.remove('scrolled');
      otherElement2.classList.remove('scrolled');
      // Revert the image source
      imageElement.src = 'Taj.png'; 
    }
  });
document.querySelectorAll('.img-item').forEach(item => {
    let rotation = 0;
    let extended = false;
    const paragraph = item.querySelector('.paragraph');
    const button = item.querySelector('.rotate-button');
    let originalText = paragraph.textContent.trim().replace(button.textContent.trim(), '');

    const extendedTextMap = {
        'Embrace the allure of Taj City Centre, Patna where history': ' meets modernity in a vibrant urban setting, offering luxury and comfort at every turn.',
        'Dive into bliss at Taj Malabar Resort & Spa, Kochi, where every': ' moment is a blend of heritage and tranquility, overlooking the serene waters of the Arabian Sea.',
        'Explore the charm of Nagpur, while you unwind to an unparalleled': ' experience at Ginger, a short drive away from Nagpur Airport.',
        'Nestled within Deolali\'s tranquil surroundings in Nashik, Butterfly': ' Villa offers a serene sanctuary for nature lovers seeking refuge from urban chaos.',
        'This villa in Kerala has an infinity pool with a scenic view': ' , a rainwater harvesting pond, and spacious lawns with landscaped paths. The entry façade includes a mesh wall and a swing seating area, providing an ideal spot to capture the picturesque Western Ghats for the guests.'
    };

    const extendedText = extendedTextMap[originalText.trim()];

    function toggleText() {
        rotation = (rotation + (extended ? -180 : 180)) % 360;
        button.style.transform = `rotate(${rotation}deg)`;

        if (extended) {
            
            paragraph.textContent = originalText;
            paragraph.appendChild(button); 
        } else {
            
            paragraph.textContent = originalText + extendedText;
            paragraph.appendChild(button);
        }

        extended = !extended;
    }

    button.addEventListener('click', toggleText);
});


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
    console.log('Filtering with:', filter);
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



const btn = document.querySelector('.xyz');
const extTxt = document.querySelector('.def');
const orgTxt = document.querySelector('.ghi');
const parentDiv = document.querySelector('.abc');

btn.addEventListener('click', function() {
    this.classList.toggle('rot');
    extTxt.classList.toggle('shw');

    if (this.classList.contains('rot')) {
        extTxt.appendChild(this);  
    } else {
        parentDiv.appendChild(this); 
    }
});





const spaceImages = [
    {
        src: '101.webp',
        heading: 'Welcome to Image 101',
        text: 'Enjoy special room rates, earn and redeem NeuCoins and indulge in exceptional benefits with NeuPass Loyalty Program.'
    },
    {
        src: '102.webp',
        heading: 'Discover Image 102',
        text: 'This is the text for Image 2.',
        extendedText: 'This is the extended text for Image 2.'
    },
    {
        src: '103.webp',
        heading: 'Explore Image 103',
        text: 'This is the text for Image 3.',
        extendedText: 'This is the extended text for Image 3.'
    },
    {
        src: '104.webp',
        heading: 'Experience Image 104',
        text: 'This is the text for Image 4.'
    },
    {
        src: '105.webp',
        heading: 'Uncover Image 105',
        text: 'This is the text for Image 5.',
        extendedText: 'This is the extended text for Image 5.'
    },
    {
        src: '106.webp',
        heading: 'Journey through Image 106',
        text: 'This is the text for Image 6.',
        extendedText: 'This is the extended text for Image 6.'
    }
];

let currentPlanetIndex = 0;

const cosmicBg = document.getElementById('cosmic-bg');
const planetImg = document.getElementById('planet-img');
const planetDesc = document.getElementById('planet-desc');
const planetHeading = document.getElementById('planet-heading'); // New element for heading
const infoStar = document.getElementById('info-star');
const extendedText = document.getElementById('extended-text');

document.getElementById('left-star').addEventListener('click', () => {
    currentPlanetIndex = (currentPlanetIndex === 0) ? spaceImages.length - 1 : currentPlanetIndex - 1;
    updateSpaceContent();
});
  
document.getElementById('right-star').addEventListener('click', () => {
    currentPlanetIndex = (currentPlanetIndex === spaceImages.length - 1) ? 0 : currentPlanetIndex + 1;
    updateSpaceContent();
});

infoStar.addEventListener('click', () => {
    toggleText(infoStar);
});

function updateSpaceContent() {
    const current = spaceImages[currentPlanetIndex];
    cosmicBg.src = current.src;
    planetImg.src = current.src;
    planetDesc.textContent = current.text;
    planetHeading.textContent = current.heading; // Update heading

    // Show or hide the button based on the current image
    const showButton = ['102.webp', '103.webp', '105.webp', '106.webp'].includes(current.src);

    if (showButton) {
        infoStar.style.display = 'block';
        extendedText.style.display = 'none';
        infoStar.classList.remove('rotate');
    } else {
        infoStar.style.display = 'none';
        extendedText.style.display = 'none';
        infoStar.classList.remove('rotate');
    }
}

function toggleText(button) {
    const isExtended = extendedText.style.display === 'block';
    
    if (isExtended) {
        extendedText.style.display = 'none';
        button.classList.remove('rotate');
    } else {
        extendedText.style.display = 'block';
        button.classList.add('rotate');
        // Move button to the end of the extended text
        document.querySelector('.text-vortex').appendChild(button);
    }
}

// Initialize content
updateSpaceContent();




function togDro() {
    var Nit = document.querySelector('.Nit');
    var Ura = document.querySelector('.Ura');

    if (Nit.style.display === 'block') {
        Nit.style.display = 'none';
        Ura.textContent = '+';
        Ura.style.transform = 'rotate(0deg)';
    } else {
        Nit.style.display = 'block';
        Ura.textContent = '-';
        Ura.style.transform = 'rotate(180deg)';
    }
}
