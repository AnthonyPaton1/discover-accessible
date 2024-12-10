import React from "react";
import CareerApplyButton from "./CareerApplyButton";

const Careers = () => {
  return (
    <div className="relative bg-white p-4 rounded-md shadow-md border-grey-200">
      <h2 className="text-xl mb-4">
        <span className="font-bold">Vacancy:</span> Software Developer
      </h2>
      <p className="text-grey-700">
        We are looking for a skilled software developer to join our team, with
        Next.js knowledge minimum 3 years experience
      </p>
      <ul className="mt-4">
        <li>
          <strong>Reply Email: </strong>{" "}
          <a href="mailto:anthonypaton1@sky.com" className="text-blue-500">
            anthonypaton1@sky.com
          </a>
        </li>
        <li>
          <strong>Reply Phone: </strong>{" "}
          <a href="tel:07864316768" className="text-blue-500">
            07864316768
          </a>
        </li>
      </ul>
      <CareerApplyButton className="mt-4 mr-3 bg-blue-500 text-white py-1 px-3 rounded-md">
        Apply
      </CareerApplyButton>
    </div>
  );
};

export default Careers;
