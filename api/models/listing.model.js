import mongoose from "mongoose";

const listingSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    regularPrice: {
      type: Number,
      required: true,
    },
    discountPrice: {
      type: Number,
      required: true,
    },
    bathrooms: {
      type: Number,
      required: true,
    },
    bedrooms: {
      type: Number,
      required: true,
    },
    furnished: {
      type: Boolean,
      required: true,
    },
    parking: {
      type: Boolean,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    offer: {
      type: Boolean,
      required: true,
    },
    imageUrls: {
      type: Array,
      required: true,
    },
    userRef: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
const Listing = mongoose.model("Listing", listingSchema);

export default Listing;
// {
//   "name":"test",
//   "description":"test desc",
//   "address":"test adress",
//   "regularPrice":5000,
//   "discountPrice":500,
//   "bathrooms":5,
//   "bedrooms":5,
//   "furnished":true,
//   "parking":true,
//   "type":"rent",
//   "offer":true,
//   "imageUrls":["abcd","efgh"],
//   "userRef":"asdfghjkl"
// }
