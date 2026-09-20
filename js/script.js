 // Handle Booking Form Submission via URL Parameters (Bypasses LocalStorage Port Issues)
const bookingForm = document.getElementById('bookingForm');

if (bookingForm) {
    bookingForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form values
        const fullName = document.getElementById('fullName').value;
        const vehicleNo = document.getElementById('vehicleNo').value;
        const parkingLocation = document.getElementById('parkingLocation').value;
        const bookingDate = document.getElementById('bookingDate').value;
        const bookingTime = document.getElementById('bookingTime').value;

        // Redirect to mybookings.html with data in URL parameters
        window.location.href = `mybookings.html?name=${encodeURIComponent(fullName)}&vehicle=${encodeURIComponent(vehicleNo)}&location=${encodeURIComponent(parkingLocation)}&date=${encodeURIComponent(bookingDate)}&time=${encodeURIComponent(bookingTime)}`;
    });
}

// Display Booking on My Bookings Page from URL Parameters
const bookingsList = document.getElementById('bookingsList');

if (bookingsList) {
    const urlParams = new URLSearchParams(window.location.search);
    const fullName = urlParams.get('name');
    const vehicleNo = urlParams.get('vehicle');
    const parkingLocation = urlParams.get('location');
    const bookingDate = urlParams.get('date');
    const bookingTime = urlParams.get('time');

    if (fullName && vehicleNo && parkingLocation) {
        // Save to LocalStorage permanently for this session
        const booking = { id: Date.now(), fullName, vehicleNo, parkingLocation, bookingDate, bookingTime };
        let bookings = JSON.parse(localStorage.getItem('parkEasySavedBookings')) || [];
        
        // Avoid duplicate push on refresh
        if (!bookings.some(b => b.vehicleNo === vehicleNo && b.bookingDate === bookingDate)) {
            bookings.push(booking);
            localStorage.setItem('parkEasySavedBookings', JSON.stringify(bookings));
        }
    }

    // Load all saved bookings
    loadSavedBookings();
}

function loadSavedBookings() {
    let bookings = JSON.parse(localStorage.getItem('parkEasySavedBookings')) || [];

    if (bookings.length === 0) {
        bookingsList.innerHTML = `<div class="col-12 text-center"><p class="text-muted fs-5">No bookings found yet. Book your parking spot now!</p></div>`;
        return;
    }

    let html = '';
    bookings.forEach((booking) => {
        html += `
            <div class="col-md-4 mb-4">
                <div class="card shadow-sm border-0 h-100">
                    <div class="card-body d-flex flex-column">
                        <h4 class="card-title fw-bold text-dark">${booking.parkingLocation}</h4>
                        <p class="text-muted mb-1">👤 <strong>Name:</strong> ${booking.fullName}</p>
                        <p class="text-muted mb-1">🚗 <strong>Vehicle:</strong> ${booking.vehicleNo}</p>
                        <p class="text-muted mb-1">📅 <strong>Date:</strong> ${booking.bookingDate}</p>
                        <p class="text-muted mb-3">⏰ <strong>Time:</strong> ${booking.bookingTime}</p>
                        <div class="mt-auto">
                            <button onclick="removeBooking(${booking.id})" class="btn btn-outline-danger w-100 fw-bold">Cancel Booking</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });

    bookingsList.innerHTML = html;
}

function removeBooking(id) {
    let bookings = JSON.parse(localStorage.getItem('parkEasySavedBookings')) || [];
    bookings = bookings.filter(b => b.id !== id);
    localStorage.setItem('parkEasySavedBookings', JSON.stringify(bookings));
    loadSavedBookings();
}

// Auto-fill location if coming from "Find Parking" page
window.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const locationParam = urlParams.get('location');
    const locationSelect = document.getElementById('parkingLocation');

    if (locationParam && locationSelect) {
        locationSelect.value = locationParam;
    }
});