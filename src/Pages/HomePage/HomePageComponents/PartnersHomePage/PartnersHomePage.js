import React from "react";

import "./PartnersHomePage.css";

function PartnersHomePage() {
  return (
    <div className="PartnersHomePage">
      <div className="PartnersHomePage__headerWrapper">
        <h1>Meet Our Partners</h1>
      </div>
      <div className="PartnersHomePage__partnerHolder">
        <div className="PartnersHomePage__partners">
          <div className="partners">
            <img
              className="partners__image"
              src="https://www.metaltoad.com/sites/default/files/styles/large_personal_photo_870x500_/public/2020-05/aws-logo-blog-header.png?itok=t4o3meiH"
              alt="Aws_logo"
            />
          </div>
          <div className="partners">
            <img
              className="partners__image"
              src="data:image/png;base64,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"
              alt="Aws_logo"
            />
          </div>
          <div className="partners">
            <img
              className="partners__image"
              src="data:image/png;base64,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"
              alt="Aws_logo"
            />
          </div>
        </div>
        <div className="PartnersHomePage__partners">
          <div className="partners">
            <img
              className="partners__image"
              src="https://www.metaltoad.com/sites/default/files/styles/large_personal_photo_870x500_/public/2020-05/aws-logo-blog-header.png?itok=t4o3meiH"
              alt="Aws_logo"
            />
          </div>
          <div className="partners">
            <img
              className="partners__image"
              src="https://www.metaltoad.com/sites/default/files/styles/large_personal_photo_870x500_/public/2020-05/aws-logo-blog-header.png?itok=t4o3meiH"
              alt="Aws_logo"
            />
          </div>
          <div className="partners">
            <img
              className="partners__image"
              src="https://www.metaltoad.com/sites/default/files/styles/large_personal_photo_870x500_/public/2020-05/aws-logo-blog-header.png?itok=t4o3meiH"
              alt="Aws_logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PartnersHomePage;
