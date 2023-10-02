import { schema } from "mongodb"

const userSechema = new schema({
  userName : {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  mail: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true
  }
});


export default userSechema;