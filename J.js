function showDropdown() {
    document.getElementById('dropdown').style.display = 'block';
}

function hideDropdown() {
    document.getElementById('dropdown').style.display = 'none';
}

function selectOption(option) {
    document.getElementById('search-bar').value = option;
    hideDropdown(); // Hide dropdown after selection
}

// Hide dropdown when clicking outside
document.addEventListener('click', function(event) {
    const searchBar = document.getElementById('search-bar');
    const dropdown = document.getElementById('dropdown');
    if (!searchBar.contains(event.target) && !dropdown.contains(event.target)) {
        hideDropdown();
    }
});


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
    const activeAnchorElements1 = document.querySelectorAll('.active button'); 

    
    if (scrollPercentage > 5) {
      headElement.classList.add('scrolled');
      ttElement.classList.add('scrolled');
     
      otherElement1.classList.add('scrolled');
      otherElement2.classList.add('scrolled');
      
    
     
      imageElement.src = 'Tajv2.png'; 
      activeAnchorElements1.forEach(button =>{
        button.classList.add('scrolled')
      });

      activeAnchorElements.forEach(anchor => {
        anchor.classList.add('scrolled');
        
      });
    } else {
      headElement.classList.remove('scrolled');
      ttElement.classList.remove('scrolled');
      activeAnchorElements.forEach(anchor => {
        anchor.classList.remove('scrolled');
      });
      activeAnchorElements1.forEach(button =>{
        button.classList.remove('scrolled')
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



// document.getElementById('toggleButton').addEventListener('click', function(event) {
//     event.stopPropagation(); 
//     const dropdown = document.getElementById('countersDropdown');
    
//     if (dropdown.style.display === 'none' || dropdown.style.display === '') {
//         dropdown.style.display = 'block';
//     } else {
//         dropdown.style.display = 'none';
//     }
// });


// document.getElementById('closeButton').addEventListener('click', function() {
//     document.getElementById('countersDropdown').style.display = 'none';
// });

// document.addEventListener('click', function(event) {
//     const dropdown = document.getElementById('countersDropdown');
//     if (!dropdown.contains(event.target) && event.target.id !== 'toggleButton') {
//         dropdown.style.display = 'none';
//     }
// });


// document.getElementById('countersDropdown').addEventListener('click', function(event) {
//     event.stopPropagation();
// });


// document.getElementById('addRoomButton').addEventListener('click', function() {
//     createRoom();
// });

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
        infoStar.style.background= 'none';
        infoStar.style.border='none';
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


document.getElementById('terraInput').addEventListener('click', function() {
    var dropdown = document.getElementById('dropdownMars');
    if (dropdown.style.display === 'block') {
        dropdown.style.display = 'none';
    } else {
        dropdown.style.display = 'block';
    }
});

document.addEventListener('click', function(event) {
    var dropdown = document.getElementById('dropdownMars');
    var input = document.getElementById('terraInput');
    if (!input.contains(event.target) && !dropdown.contains(event.target)) {
        dropdown.style.display = 'none';
    }
});

function updateInput() {
    var earthSurface = document.getElementById('earthSurface');
    var rooms = earthSurface.children.length;
    var adultCount = 0;
    var childCount = 0;

    Array.from(earthSurface.children).forEach(room => {
        adultCount += parseInt(room.querySelector('[id^="adultCount"]').textContent, 10);
        childCount += parseInt(room.querySelector('[id^="childCount"]').textContent, 10);
    });

    var input = document.getElementById('terraInput');
    input.value = `Rooms: ${rooms}, Adults: ${adultCount}, Children: ${childCount}`;
}

function changeCount(type, change) {
    var countElement = document.getElementById(type);
    if (countElement) {
        var currentCount = parseInt(countElement.textContent, 10);
        var newCount = currentCount + change;
        if (newCount >= 0) { // Ensure count does not go below 0
            countElement.textContent = newCount;
            updateInput(); // Update the input box with the latest counts
        }
    }
}

document.getElementById('addRoomButton').addEventListener('click', function() {
    var earthSurface = document.getElementById('earthSurface');
    var roomCount = earthSurface.children.length + 1; // Adjust for room count
    var roomDiv = document.createElement('div');
    roomDiv.className = 'earth-room';
    roomDiv.innerHTML = `
        <div class="dropdown-header">Room ${roomCount}</div>
        <div class="earth-counters">
            <div class="earth-counter">
                <span>Adults:</span>
                <button class="counter-button" onclick="changeCount('adultCount_${roomCount}', -1)">-</button>
                <span id="adultCount_${roomCount}">0</span>
                <button class="counter-button" onclick="changeCount('adultCount_${roomCount}', 1)">+</button>
            </div>
            <div class="earth-counter">
                <span>Children:</span>
                <button class="counter-button" onclick="changeCount('childCount_${roomCount}', -1)">-</button>
                <span id="childCount_${roomCount}">0</span>
                <button class="counter-button" onclick="changeCount('childCount_${roomCount}', 1)">+</button>
            </div>
        </div>
        <button class="delete-button" onclick="removeLastRoom()">X</button>
    `;
    earthSurface.appendChild(roomDiv);
    updateInput(); // Update the input box with the latest counts after adding a new room
});

function removeLastRoom() {
    var earthSurface = document.getElementById('earthSurface');
    var lastRoom = earthSurface.lastElementChild;
    if (lastRoom) {
        earthSurface.removeChild(lastRoom);
        updateInput(); // Update the input box with the latest counts after removing a room
    }
}

// Ensure the dropdown does not disappear when clicking inside it
document.getElementById('dropdownMars').addEventListener('click', function(event) {
    event.stopPropagation(); // Prevent click events inside the dropdown from closing it
});

// Initialize the input box with the initial room counts
updateInput();
