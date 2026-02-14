// ============================================
// FORM HANDLING & VALIDATION
// ============================================

// Training Request Form
const trainingForm = document.getElementById('trainingForm');
if (trainingForm) {
    trainingForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Honeypot check
        if (this.website.value) {
            console.log('Spam detected');
            return false;
        }

        // Get form data
        const formData = new FormData(this);
        const data = Object.fromEntries(formData.entries());

        // Tag as training_inquiry
        data.source = 'training_inquiry';
        data.timestamp = new Date().toISOString();

        // Simulate form submission
        console.log('Training Request Submitted:', data);

        // Track conversion (GA4 placeholder)
        if (typeof gtag !== 'undefined') {
            gtag('event', 'training_request_submit', {
                'training_type': data.trainingType,
                'organization': data.organization,
                'location': data.location
            });
        }

        // Show success message
        const email = data.email;
        document.getElementById('confirmEmail').textContent = email;
        trainingForm.style.display = 'none';
        document.getElementById('formSuccess').style.display = 'block';

        // Scroll to success message
        document.getElementById('formSuccess').scrollIntoView({ behavior: 'smooth' });

        // In production, send to backend/CRM
        // fetch('/api/training-request', { method: 'POST', body: JSON.stringify(data) })
    });
}

// Contact Form
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Honeypot check
        if (this.website && this.website.value) {
            console.log('Spam detected');
            return false;
        }

        const formData = new FormData(this);
        const data = Object.fromEntries(formData.entries());

        // Tag by inquiry type
        if (data.mediaInquiry) {
            data.source = 'media_request';
        } else if (data.trainingRequest) {
            data.source = 'training_inquiry';
        } else {
            data.source = 'general_contact';
        }

        data.timestamp = new Date().toISOString();

        console.log('Contact Form Submitted:', data);

        // Track conversion
        if (typeof gtag !== 'undefined') {
            gtag('event', 'contact_submit', {
                'source': data.source
            });
        }

        // Show success
        const email = data.email;
        document.getElementById('confirmEmail').textContent = email;
        contactForm.style.display = 'none';
        document.getElementById('formSuccess').style.display = 'block';
        document.getElementById('formSuccess').scrollIntoView({ behavior: 'smooth' });
    });
}

// Donation Module
const donationModule = document.getElementById('donationModule');
if (donationModule) {
    // Toggle between one-time and monthly
    const toggleBtns = document.querySelectorAll('.toggle-btn');
    toggleBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            toggleBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Amount selection
    const amountBtns = document.querySelectorAll('.amount-btn');
    const customAmountInput = document.getElementById('customAmount');

    amountBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            amountBtns.forEach(b => b.classList.remove('selected'));
            this.classList.add('selected');
            customAmountInput.value = '';
        });
    });

    customAmountInput.addEventListener('input', function () {
        if (this.value) {
            amountBtns.forEach(b => b.classList.remove('selected'));
        }
    });

    // Payment method buttons
    const paymentBtns = document.querySelectorAll('.payment-btn');
    paymentBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            const selectedAmount = document.querySelector('.amount-btn.selected');
            const customAmount = customAmountInput.value;
            const amount = customAmount || (selectedAmount ? selectedAmount.dataset.amount : null);
            const frequency = document.querySelector('.toggle-btn.active').dataset.frequency;
            const coverFees = document.getElementById('coverFees').checked;

            if (!amount) {
                alert('Please select or enter a donation amount');
                return;
            }

            console.log('Donation initiated:', {
                amount,
                frequency,
                coverFees,
                method: this.textContent
            });

            // Track conversion
            if (typeof gtag !== 'undefined') {
                gtag('event', 'donate_click', {
                    'amount': amount,
                    'frequency': frequency,
                    'method': this.textContent
                });
            }

            alert(`Donation module placeholder: $${amount} ${frequency}\nIn production, this would redirect to payment processor.`);
        });
    });
}

// Toolkit Download with Email Capture
function downloadToolkit(toolkitName) {
    const email = prompt('Enter your email to download the ' + toolkitName + ':');

    if (email && validateEmail(email)) {
        console.log('Toolkit download:', {
            toolkit: toolkitName,
            email: email,
            source: 'toolkit_download',
            timestamp: new Date().toISOString()
        });

        // Track conversion
        if (typeof gtag !== 'undefined') {
            gtag('event', 'toolkit_download', {
                'toolkit_name': toolkitName
            });
        }

        alert('Thank you! Your download will begin shortly.\n\nIn production, this would:\n1. Send confirmation email\n2. Tag contact as "toolkit_download"\n3. Trigger follow-up automation\n4. Download PDF');

        // In production: trigger download and email automation
    } else if (email) {
        alert('Please enter a valid email address');
    }
}

// Event RSVP
function rsvpEvent(eventId, eventName) {
    const name = prompt('Enter your name:');
    if (!name) return;

    const email = prompt('Enter your email:');
    if (!email || !validateEmail(email)) {
        alert('Please enter a valid email address');
        return;
    }

    console.log('Event RSVP:', {
        eventId,
        eventName,
        name,
        email,
        source: 'event_rsvp',
        timestamp: new Date().toISOString()
    });

    // Track conversion
    if (typeof gtag !== 'undefined') {
        gtag('event', 'event_rsvp_click', {
            'event_name': eventName
        });
    }

    alert('Thank you for your RSVP!\n\nConfirmation email sent to: ' + email);
}

// Volunteer/Envoy Form
const volunteerForm = document.getElementById('volunteerForm');
if (volunteerForm) {
    volunteerForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const formData = new FormData(this);
        const data = Object.fromEntries(formData.entries());
        data.source = 'volunteer_envoy';
        data.timestamp = new Date().toISOString();

        console.log('Volunteer Application:', data);

        const email = data.email;
        document.getElementById('confirmEmail').textContent = email;
        volunteerForm.style.display = 'none';
        document.getElementById('formSuccess').style.display = 'block';
        document.getElementById('formSuccess').scrollIntoView({ behavior: 'smooth' });
    });
}

// Newsletter Signup
const newsletterForm = document.getElementById('newsletterForm');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const email = this.querySelector('input[type="email"]').value;

        console.log('Newsletter signup:', {
            email,
            source: 'newsletter',
            timestamp: new Date().toISOString()
        });

        alert('Thank you for subscribing!\n\nConfirmation email sent to: ' + email);
        this.reset();
    });
}

// Make functions globally available
window.downloadToolkit = downloadToolkit;
window.rsvpEvent = rsvpEvent;
