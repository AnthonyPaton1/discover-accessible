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
    },
    location: {
      street: {
        type: String,
        required: true,
      },
      city: {
        type: String,
        required: true,
      },
      county: {
        type: String,
        required: true,
      },
      postcode: {
        type: String,
        required: true,
      },
    },
    beds: {
      type: Number,
      required: false,
    },
    baths: {
      type: Number,
      required: false,
    },
    square_feet: {
      type: Number,
      required: false,
    },
    amenities: [
      {
        type: String,
      },
    ],
    rates: {
      daily: {
        type: Number,
        default: 0,
      },
      weekly: {
        type: Number,
        default: 0,
      },
      monthly: {
        type: Number,
        default: 0,
      },
    },
    seller_info: {
      name: {
        type: String,
      },
      email: { type: String, match: /.+\@.+\..+/ },
      phone: { type: String, match: /^[0-9]{10,15}$/ },
      website: {
        type: String,
        required: false,
        match: /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})(\/[\w .-]*)*\/?$/,
      },
    },
    images: [
      {
        type: String,
      },
    ],
    is_featured: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Property = models.Property || model("Property", PropertySchema);

export default Property;
