import React from "react";
import updateProperty from "@/app/actions/updateProperty";

const PropertyEditForm = ({ property }) => {
  const updatePropertyById = updateProperty.bind(null, property._id);

  return (
    <form action={updatePropertyById}>
      <h2 className="text-3xl text-center font-semibold mb-6">
        Edit your Venue
      </h2>

      <div className="mb-4">
        <label htmlFor="type" className="block text-gray-700 font-bold mb-2">
          Property Type
        </label>
        <select
          id="type"
          name="type"
          className="border rounded w-full py-2 px-3"
          defaultValue={property.type}
          required
        >
          <option value="Eateries">Eateries</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Events">Events</option>
          <option value="Hobbies and Acivities">Hobbies or Activities</option>
          <option value="Crafts and Arts">Crafts and Arts</option>
          <option value="Hotel">Hotel/Guest-house</option>
          <option value="Indoor Activity">Indoor Activities</option>
          <option value="Outdoor Activity">Outdoor Activities</option>
          <option value="Outreach">Outreach</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">
          Listing Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="border rounded w-full py-2 px-3 mb-2"
          placeholder="eg. Local weekly disco"
          defaultValue={property.name}
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="description"
          className="block text-gray-700 font-bold mb-2"
        >
          Description
        </label>
        <textarea
          id="description"
          name="description"
          className="border rounded w-full py-2 px-3"
          rows="4"
          defaultValue={property.description}
          placeholder="Add an optional description of your property"
        ></textarea>
      </div>

      <div className="mb-4 bg-blue-50 p-4">
        <label className="block text-gray-700 font-bold mb-2">Location</label>
        <input
          type="text"
          id="street"
          name="location.street"
          className="border rounded w-full py-2 px-3 mb-2"
          placeholder="Street"
          defaultValue={property.location.street}
        />
        <input
          type="text"
          id="city"
          name="location.city"
          className="border rounded w-full py-2 px-3 mb-2"
          placeholder="City"
          defaultValue={property.location.city}
          required
        />
        <input
          type="text"
          id="state"
          name="location.state"
          className="border rounded w-full py-2 px-3 mb-2"
          placeholder="State"
          defaultValue={property.location.county}
          required
        />
        <input
          type="text"
          id="zipcode"
          name="location.zipcode"
          className="border rounded w-full py-2 px-3 mb-2"
          defaultValue={property.location.postcode}
          placeholder="Zipcode"
        />
      </div>

      {/* <div className="mb-4 flex flex-wrap">
        <div className="w-full sm:w-1/3 pr-2">
          <label htmlFor="beds" className="block text-gray-700 font-bold mb-2">
            Beds
          </label>
          <input
            type="number"
            id="beds"
            name="beds"
            className="border rounded w-full py-2 px-3"
            defaultValue={property.beds}
            required
          />
        </div>
        <div className="w-full sm:w-1/3 px-2">
          <label htmlFor="baths" className="block text-gray-700 font-bold mb-2">
            Baths
          </label>
          <input
            type="number"
            id="baths"
            name="baths"
            className="border rounded w-full py-2 px-3"
            defaultValue={property.baths}
            required
          />
        </div>
        <div className="w-full sm:w-1/3 pl-2">
          <label
            htmlFor="square_feet"
            className="block text-gray-700 font-bold mb-2"
          >
            Square Feet
          </label>
          <input
            type="number"
            id="square_feet"
            name="square_feet"
            className="border rounded w-full py-2 px-3"
            defaultValue={property.square_feet}
            required
          />
        </div>
      </div> */}

      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Amenities</label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          <div>
            <input
              type="checkbox"
              id="amenity_wifi"
              name="amenities"
              value="Wifi"
              className="mr-2"
            />
            <label htmlFor="amenity_wifi">Wifi</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="amenity_guidedogs"
              name="amenities"
              value="Guide dogs"
              className="mr-2"
            />
            <label htmlFor="amenity_guidedogs">Guide Dogs</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="amenity_kitchen"
              name="amenities"
              value="Full kitchen"
              className="mr-2"
            />
            <label htmlFor="amenity_kitchen">Kitchen Facilities</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="amenity_elevator_access"
              name="amenities"
              value="Elevator Access"
              className="mr-2"
            />
            <label htmlFor="amenity_elevator_access">Elevator Access</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="amenity_transport_links"
              name="amenities"
              value="Transport Links"
              className="mr-2"
            />
            <label htmlFor="amenity_transport_links">Transport Links</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="amenity_pool"
              name="amenities"
              value="Swimming Pool"
              className="mr-2"
            />
            <label htmlFor="amenity_pool"> Heated Swimming Pool</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="amenity_hot_tub"
              name="amenities"
              value="Hot Tub"
              className="mr-2"
            />
            <label htmlFor="amenity_hot_tub">Hot Tub</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="amenity_wider_door_frames"
              name="amenities"
              value="Wider Doorframes"
              className="mr-2"
            />
            <label htmlFor="amenity_wider_door_frames">Wider Door Frames</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="amenity_coloured_door_frames"
              name="amenities"
              value="Wider Doorframes"
              className="mr-2"
            />
            <label htmlFor="amenity_coloured_door_frames">
              Coloured Door Frames
            </label>
          </div>
          <div>
            <input
              type="checkbox"
              id="amenity_wheelchair_accessible"
              name="amenities"
              value="Wheelchair Accessible"
              className="mr-2"
            />
            <label htmlFor="amenity_wheelchair_accessible">
              Wheelchair Accessible
            </label>
          </div>
          <div>
            <input
              type="checkbox"
              id="amenity_even_floors"
              name="amenities"
              value="Elevator Access"
              className="mr-2"
            />
            <label htmlFor="amenity_even_floors">Even Floors</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="amenity_dishwasher"
              name="amenities"
              value="Dishwasher"
              className="mr-2"
            />
            <label htmlFor="amenity_dishwasher">Dishwasher</label>
          </div>

          <div>
            <input
              type="checkbox"
              id="amenity_hoist_facilities"
              name="amenities"
              value="Hoist Facilities"
              className="mr-2"
            />
            <label htmlFor="amenity_hoist_facilities">Hoist Facilities</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="free_carers"
              name="amenities"
              value="Free carers"
              className="mr-2"
            />
            <label htmlFor="amenity_free_carers">Carers go free</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="amenity_changing_facilities"
              name="amenities"
              value="Changing facilities"
              className="mr-2"
            />
            <label htmlFor="amenity_changing_facilities">
              Changing facilities
            </label>
          </div>
          <div>
            <input
              type="checkbox"
              id="amenity_smart_tv"
              name="amenities"
              value="Smart TV"
              className="mr-2"
            />
            <label htmlFor="amenity_smart_tv">
              No Over-stimulating screens
            </label>
          </div>
          <div>
            <input
              type="checkbox"
              id="amenity_autism_friendly_times"
              name="amenities"
              value="Autism friendly times"
              className="mr-2"
            />
            <label htmlFor="amenity_autism_friendly_times">
              Autism friendly times/SEN times
            </label>
          </div>
        </div>
      </div>

      <div className="mb-4 bg-blue-50 p-4">
        <label className="block text-gray-700 font-bold mb-2">
          Rates (Leave blank if not applicable)
        </label>
        <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
          <div className="flex items-center">
            <label htmlFor="weekly_rate" className="mr-2">
              Weekly
            </label>
            <input
              type="number"
              id="weekly_rate"
              name="rates.weekly"
              className="border rounded w-full py-2 px-3"
              defaultValue={property.rates.weekly}
            />
          </div>
          <div className="flex items-center">
            <label htmlFor="monthly_rate" className="mr-2">
              Monthly
            </label>
            <input
              type="number"
              id="monthly_rate"
              name="rates.monthly"
              className="border rounded w-full py-2 px-3"
              defaultValue={property.rates.monthly}
            />
          </div>
          <div className="flex items-center">
            <label htmlFor="nightly_rate" className="mr-2">
              Nightly
            </label>
            <input
              type="number"
              id="nightly_rate"
              name="rates.nightly"
              className="border rounded w-full py-2 px-3"
              defaultValue={property.rates.nightly}
            />
          </div>
        </div>
      </div>

      <div className="mb-4">
        <label
          htmlFor="seller_name"
          className="block text-gray-700 font-bold mb-2"
        >
          Seller Name
        </label>
        <input
          type="text"
          id="seller_name"
          name="seller_info.name."
          className="border rounded w-full py-2 px-3"
          placeholder="Name"
          defaultValue={property.seller_info.name}
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="seller_email"
          className="block text-gray-700 font-bold mb-2"
        >
          Seller Email
        </label>
        <input
          type="email"
          id="seller_email"
          name="seller_info.email"
          className="border rounded w-full py-2 px-3"
          placeholder="Email address"
          defaultValue={property.seller_info.email}
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="seller_phone"
          className="block text-gray-700 font-bold mb-2"
        >
          Seller Phone
        </label>
        <input
          type="tel"
          id="seller_phone"
          name="seller_info.phone"
          className="border rounded w-full py-2 px-3"
          placeholder="Phone"
          defaultValue={property.seller_info.phone}
        />
      </div>

      <div>
        <div className="mb-4">
          <label
            htmlFor="images"
            className="block text-gray-700 font-bold mb-2"
          >
            Images (Select up to 4 images)
          </label>
          <input
            type="file"
            id="images"
            name="images"
            className="border rounded w-full py-2 px-3"
            accept="image/*"
            multiple
            required
          />
        </div>

        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Update your Venue
        </button>
      </div>
    </form>
  );
};

export default PropertyEditForm;
