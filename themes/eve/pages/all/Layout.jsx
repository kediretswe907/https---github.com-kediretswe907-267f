import React from "react";
import Area from "@components/common/Area";
import LoadingBar from "@components/common/LoadingBar";
import "../../css/global.scss";
import "./Layout.scss";
import "./tailwind.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube, faTiktok } from '@fortawesome/free-brands-svg-icons';

export default function Layout() {
  return (
    <>
      <LoadingBar />
      <div className="header">
        <div className="page-width flex justify-between">
          <Area
            id="header"
            noOuter
            coreComponents={[
              {
                component: { default: Area },
                props: {
                  id: "icon-wrapper",
                  className: "icon-wrapper flex justify-between space-x-1",
                },
                sortOrder: 20,
              },
            ]}
          />
        </div>
      </div>
      <main className="content">
        <Area id="content" className="" noOuter />
      </main>
      <div className="footer">
        <div className="footer-container">
          <div className="footer-column">
            <h4>About the Brand</h4>
            <p>Learn more about our mission, values, and what drives us to deliver the best products and services to our customers.</p>
            <h4>Customer Care</h4>
            <p>For customer support, contact us at <a href="mailto:support@afrifable.com">support@afrifable.com</a> or call us at +1234567890.</p>
          </div>
          <div className="footer-column">
            <h4>Policies</h4>
            <ul>
              <li><a href="/privacy-policy">Privacy Policy</a></li>
              <li><a href="/refund-policy">Refund and Cancellation Policy</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Socials</h4>
            <div className="social-icons">
              <a href="https://www.facebook.com" className="social-icon" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
                <span>Facebook</span>
              </a>
              <a href="https://www.instagram.com" className="social-icon" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
                <span>Instagram</span>
              </a>
              <a href="https://www.youtube.com" className="social-icon" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faYoutube} size="2x" />
                <span>YouTube</span>
              </a>
              <a href="https://www.tiktok.com" className="social-icon" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTiktok} size="2x" />
                <span>TikTok</span>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2024 Afrifable. All Rights Reserved.</p>
        </div>
      </div>
    </>
  );
}

export const layout = {
  areaId: "body",
  sortOrder: 1,
};
