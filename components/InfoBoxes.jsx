import React from "react";
import InfoBox from "./InfoBox";

const InfoBoxes = () => {
  return (
    <section>
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <InfoBox
            heading="For Customers"
            buttonInfo={{
              text: "Browse Venues",
              link: "/properties",
              backgroundColor: "bg-black",
            }}
          >
            Locate new and exciting Venues near and afar to suit your
            requirements. Bookmark venues and contact the team to arrange a
            visit
          </InfoBox>
          <InfoBox
            heading="Venue Managers"
            backgroundColor="bg-blue-100"
            buttonInfo={{
              text: "Add Venues",
              link: "/properties/add",
              backgroundColor: "bg-blue-500",
            }}
          >
            List your venue to attract new and existing customers. Advertise
            your Venue by showcasing whats on offer.
          </InfoBox>
        </div>
      </div>
    </section>
  );
};

export default InfoBoxes;
