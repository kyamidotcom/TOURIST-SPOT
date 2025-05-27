// Tourist spots data
const touristSpots = [
    {
        id: 1,
        title: "Echo Valley & Hanging Coffins",
        image: "images/sagada8.jpg",
        shortDesc: "Witness the ancient burial tradition of hanging coffins on limestone cliffs while enjoying the valley's natural echo phenomenon.",
        longDesc: "The Hanging Coffins of Sagada are one of the most famous attractions in the region. This ancient burial practice involves placing coffins on cliffs, either nailed to the rock or placed in caves. The Igorot people believe this brings the deceased closer to their ancestral spirits. Some coffins are centuries old, and the practice continues to this day, though less frequently. Echo Valley gets its name from the natural echo phenomenon that occurs when you shout across the valley.",
        location: "Central Sagada",
        duration: "2-3 hours tour"
    },
    {
        id: 2,
        title: "Sumaguing Cave",
        image: "images/sagada6.jpg",
        shortDesc: "Explore the 'Big Cave' with its stunning rock formations, underground pools, and challenging spelunking routes.",
        longDesc: "Sumaguing Cave, also known as the Big Cave, is the most popular spelunking destination in Sagada. Visitors can explore its chambers filled with magnificent stalactites and stalagmites shaped like animals, curtains, and other fascinating forms. The cave requires some physical effort to navigate, with sections where you'll need to climb, crawl, or rappel down using ropes. The highlight is the underground pools with crystal clear water where visitors can take a refreshing dip.",
        location: "30 min from town",
        duration: "3-4 hours adventure"
    },
    {
        id: 3,
        title: "Bomod-ok Falls",
        image: "images/sagada5.jpg",
        shortDesc: "Also known as the Big Falls, this majestic 200-foot waterfall is surrounded by rice terraces and lush vegetation.",
        longDesc: "Bomod-ok Falls, often called the Big Falls, is a breathtaking waterfall with a height of about 200 feet. The water cascades into a deep, clear pool perfect for swimming. To reach the falls, visitors must trek through beautiful rice terraces and mountain trails, which takes about 45 minutes to an hour. The challenging hike is rewarded with the spectacular view of the powerful waterfall. The area is surrounded by lush vegetation and offers a cool respite from the tropical heat.",
        location: "Barangay Bangaan",
        duration: "1.5 hours hike"
    },
    {
        id: 4,
        title: "Marlboro Country",
        image: "images/sagada9.jpg",
        shortDesc: "Experience breathtaking sunrise views over the sea of clouds in this vast mountain landscape resembling the American West.",
        longDesc: "Marlboro Country, named after the cigarette brand due to its resemblance to the Marlboro Country advertisements, offers one of the most spectacular sunrise views in Sagada. Visitors can witness a stunning sea of clouds covering the valleys below. The hills are covered with pine trees and grassy slopes, creating a picturesque landscape that's perfect for photography and nature appreciation. The area is particularly beautiful during the early morning hours when the mist creates a magical atmosphere.",
        location: "Kiltepan area",
        duration: "Early morning trip"
    },
    {
        id: 5,
        title: "Kiltepan Viewpoint",
        image: "images/sagada3.jpg",
        shortDesc: "Famous for its spectacular sunrise and sea of clouds, offering panoramic views of rice terraces and mountain ranges.",
        longDesc: "Kiltepan Viewpoint is renowned for its breathtaking sunrise views and the famous 'sea of clouds' phenomenon. The viewpoint offers panoramic vistas of the surrounding rice terraces and mountain ranges. Visitors typically arrive before dawn to witness the spectacular sunrise as it illuminates the landscape. The viewpoint is situated at an elevation that often creates the perfect conditions for the sea of clouds formation, where the valleys below appear to be filled with a fluffy white ocean.",
        location: "30 min from town",
        duration: "Sunrise viewing"
    },
    {
        id: 6,
        title: "Sagada Weaving",
        image: "images/sagada1.jpg",
        shortDesc: "Visit the traditional weaving center to see how locals create beautiful textiles using age-old techniques.",
        longDesc: "Sagada Weaving is a traditional craft center where visitors can observe the intricate process of creating handwoven textiles. The center preserves the ancient weaving techniques passed down through generations of Igorot women. Using wooden looms, artisans create beautiful fabrics with geometric patterns that represent their cultural heritage. Visitors can watch the weaving process, learn about the significance of different patterns, and purchase high-quality woven products as souvenirs.",
        location: "Town proper",
        duration: "1 hour visit"
    }
];

// DOM Elements
const spotsGrid = document.querySelector('.spots-grid');
const modal = document.getElementById('modal');
const modalContent = document.querySelector('.modal-content');
const navLinks = document.querySelector('.nav-links');
const burger = document.querySelector('.burger');
const header = document.querySelector('header');
const contactForm = document.getElementById('contact-form');

// Display tourist spots
function displaySpots() {
    spotsGrid.innerHTML = touristSpots.map(spot => `
        <div class="spot-card" data-id="${spot.id}">
            <img src="${spot.image}" alt="${spot.title}" class="spot-image">
            <div class="spot-content">
                <h3 class="spot-name">${spot.title}</h3>
                <p class="spot-description">${spot.shortDesc}</p>
                <div class="spot-info">
                    <span><i class="fas fa-map-marker-alt"></i> ${spot.location}</span>
                    <span><i class="fas fa-clock"></i> ${spot.duration}</span>
                </div>
            </div>
        </div>
    `).join('');
}

// Display modal with spot details
function showModal(id) {
    const spot = touristSpots.find(spot => spot.id === id);
    if (spot) {
        modalContent.innerHTML = `
            <span class="close-btn">&times;</span>
            <img src="${spot.image}" alt="${spot.title}" class="modal-img">
            <div class="modal-text">
                <h3>${spot.title}</h3>
                <p><i class="fas fa-map-marker-alt"></i> ${spot.location}</p>
                <p><i class="fas fa-clock"></i> ${spot.duration}</p>
                <div class="modal-description">${spot.longDesc}</div>
            </div>
        `;
        modal.style.display = 'block';
        document.body.classList.add('no-scroll');
        
        // Add event listener to the new close button
        document.querySelector('.close-btn').addEventListener('click', closeModal);
    }
}

// Close modal
function closeModal() {
    modal.style.display = 'none';
    document.body.classList.remove('no-scroll');
}

// Mobile Navigation Toggle
function toggleMobileMenu() {
    navLinks.classList.toggle('active');
    burger.classList.toggle('active');
    document.body.classList.toggle('no-scroll');
}

// Close mobile menu when clicking a link
function closeMobileMenu() {
    navLinks.classList.remove('active');
    burger.classList.remove('active');
    document.body.classList.remove('no-scroll');
}

// Header scroll effect
function handleScroll() {
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}

// Smooth scrolling for anchor links
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (navLinks.classList.contains('active')) {
                    closeMobileMenu();
                }
            }
        });
    });
}

// Form submission handler
function handleFormSubmit(e) {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    this.reset();
}

// Initialize the page
function init() {
    displaySpots();
    setupSmoothScrolling();
    
    // Event listeners
    document.addEventListener('click', (e) => {
        // Open modal when clicking on card
        if (e.target.closest('.spot-card')) {
            const card = e.target.closest('.spot-card');
            const id = parseInt(card.getAttribute('data-id'));
            showModal(id);
        }
        
        // Close modal when clicking outside content
        if (e.target === modal) {
            closeModal();
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeModal();
        }
    });

    // Mobile menu toggle
    burger.addEventListener('click', toggleMobileMenu);
    
    // Close mobile menu when clicking a link
    navLinks.addEventListener('click', (e) => {
        if (e.target.tagName === 'A') {
            closeMobileMenu();
        }
    });

    // Header scroll effect
    window.addEventListener('scroll', handleScroll);

    // Form submission
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', init);