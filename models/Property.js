import { Schema, model, models } from "mongoose";

const PropertySchema = new Schema(
  {
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    location: {
      street: String,
      city: String,
      state: String,
      zipcode: String,
    },
    beds: {
      type: Number,
      required: true,
    },
    baths: {
      type: Number,
      required: true,
    },
    square_feet: {
      type: Number,
      required: true,
    },
    amenities: [
      {
        type: String,
      },
    ],
    rates: {
      nightly: Number,
      weekly: Number,
      monthly: Number,
    },
    seller_info: {
      name: String,
      email: String,
      phone: String,
    },
    images: [
      {
        type: String,
        required: true,
      },
    ],
    price: Number,
    is_featured: {
      type: Boolean,
      default: false,
    },
    subscription_paid: { type: Boolean, default: false },
  },

  {
    timestamps: true,
  }
);
// if (!models.Property) {
//   console.log("Defining Property model...");
//   models.Property = model("Property", PropertySchema);
// }

const Property = models.Property;

export default Property;
