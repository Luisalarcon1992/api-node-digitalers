import mongoose, { Schema } from 'mongoose';

const productSechema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      max: 100,
      min: 5,
    },
    description: {
      type: String,
      max: 500,
    },
    price: {
      type: Number,
      required: true,
      min: 4,
      max: 4,
    },
    direction: {
      type: String,
      required: true,
      min: 4,
      max: 50,
    },
    cathegoryProperty: {
      type: String,
      required: true,
    },
    editorial: {
      type: String,
    },
    state: {
      type: String,
      required: true,
      min: 4,
      max: 50,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    urlimage: {
      type: String,
      required: true,
      unique: true,
    },
    bathroom: {
      type: String,
      required: true,
    },
    room: {
      type: String,
      required: true,
    },
    dimension: {
      type: String,
      required: true,
    },
  },
  {
    Timestamp: true,
  },
);

export default mongoose.model('Product', productSechema);
