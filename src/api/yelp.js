import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer VX-I5fVghMt5vob9-DUXqUlSCEVMm8xXWg7mr3fS4THc-d9M_HjqAX6oRdg7gYqnk5IZaKFkZ5gq_TpWagZ2vLh_omLIthiXDZTs29Ebrvd-Xz5Xn0QCeC7f-dQ3YXYx",
  },
});
