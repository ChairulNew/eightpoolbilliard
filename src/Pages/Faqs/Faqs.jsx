import React from "react";
import "./Faqs.css";

const Faqs = () => {
  return (
    <div className="container-faqs">
      <h1 className="faqs-title">FAQS</h1>

      <div className="list-content-faqs">
        <div className="faqs-section">
          <h2 className="faqs-section-title">Current Offers</h2>
          <p className="faqs-section-text">
            Ladies nights are on Wednesdays, all ladies get a free first drink
            after 6pm. Happy hour is 5-7pm daily. Buy 2 kura kura beers and get
            1 free. All cocktails are IDR 99K each on Fridays. We always have
            new specials, follow us on social media to get the latest deals!
          </p>
        </div>

        <div className="faqs-section">
          <h2 className="faqs-section-title">Opening Hours</h2>
          <p className="faqs-section-text">
            We are open everyday from 2PM to 2AM
          </p>
        </div>

        <button className="book-table-button">Book The Table</button>

        <div className="faqs-section">
          <h2 className="faqs-section-title">Our Located</h2>
          <p className="faqs-section-text">
            8pool billiard is located on the second floor of Kini Social Club.
            Jalan Sei Serayu No. 93/95.
          </p>
        </div>

        <div className="faqs-section">
          <h2 className="faqs-section-title">Venue for Private Hire</h2>
          <p className="faqs-section-text">
            At 8Pool Billiard, we endeavour to offer the venue privately to mark
            your special occasion where possible. We ask interested parties to
            contact us so we can organise a meeting and discuss our private
            function options.
          </p>
        </div>

        <div className="faqs-section">
          <h2 className="faqs-section-title">Do you accept walk-ins?</h2>
          <p className="faqs-section-text">
            Yes we do, where availability permits. However, reservations are
            encouraged where possible.
          </p>
        </div>

        <div className="faqs-section">
          <h2 className="faqs-section-title">
            When do new bookings become available?
          </h2>
          <p className="faqs-section-text">
            Reservations are available for the current month, and two months in
            advance.
          </p>
        </div>
      </div>

      {/* Footer Section */}
      <div className="faqs-footer">
        <div className="footer-content">
          <div className="footer-logo">
            <h3>8POOL BILLIARD</h3>
            <p>Premium Billiard Experience</p>
          </div>

          <div className="footer-info">
            <div className="footer-column">
              <h4>Contact Info</h4>
              <p>📍 Jalan Sei Serayu No. 93/95</p>
              <p>2nd Floor, Kini Social Club</p>
              <p>📞 +62 123 4567 890</p>
              <p>✉️ info@8poolbilliard.com</p>
            </div>

            <div className="footer-column">
              <h4>Opening Hours</h4>
              <p>Monday - Sunday</p>
              <p>2:00 PM - 2:00 AM</p>
              <br />
              <h4>Follow Us</h4>
              <div className="social-links">
                <span>📘 Facebook</span>
                <span>📷 Instagram</span>
                <span>🐦 Twitter</span>
              </div>
            </div>

            <div className="footer-column">
              <h4>Quick Links</h4>
              <p>• Book Table</p>
              <p>• Menu</p>
              <p>• Private Events</p>
              <p>• Contact Us</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 8Pool Billiard Medan. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
