import { NavLink } from "react-router-dom";
function FAQ() {
  return (
    <div className="faq">
      <h1>Frequently Asked Questions</h1>

      <div className="faq-item">
        <h2>What is this website?</h2>
        <p>
          This is a photobooth web app that lets you take pictures, apply
          frames, add stickers, and download your creations - all in your
          browser.
        </p>
      </div>

      <div className="faq-item">
        <h2>Do you store my photos?</h2>
        <p>
          No. All photos and edits are stored locally in your browser and never
          uploaded anywhere.
        </p>
      </div>

      <div className="faq-item">
        <h2>Can I customize the photo?</h2>
        <p>
          Yes! You can add frames, stickers, and filters by clicking the options
          in the editor panel.
        </p>
      </div>

      <div className="faq-item">
        <h2>How do I save my photo?</h2>
        <p>
          Click the "Download" button to save your edited photo directly to your
          device.
        </p>
      </div>

      <div className="faq-item">
        <h2>Still have questions?</h2>
        <p>
          Head to the
          <NavLink className="faq-link" to="/contact">
            CONTACT ME
          </NavLink>
          page.
        </p>
      </div>
    </div>
  );
}

export default FAQ;
