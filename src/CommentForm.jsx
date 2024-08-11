import { useState } from "react";

export default function CommentForm() {
  let [formData, setFormData] = useState({
    username: "",
    remarks: "",
    rating: 5,
  });

  let handleInputChange = (event) => {
    setFormData((currData) => {
      return { ...currData, [event.target.name]: event.target.value };
    });
  };
  let handleSubmit = (event) => {
    console.log(formData);
    event.preventDefault();
    setFormData({
      username: "",
      remarks: "",
      rating: 5,
    });
  };
  return (
    <div>
      <h2>Give a Comment !</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          placeholder="Enter Username"
          value={formData.username}
          onChange={handleInputChange}
          name="username"
        />
        <br />
        <br />
        <label htmlFor="remarks">Remarks</label>
        <textarea
          id="remarks"
          placeholder="Enter Remarks"
          value={formData.remarks}
          onChange={handleInputChange}
          name="remarks"
        ></textarea>
        <br />
        <br />
        <label htmlFor="rating">Rating</label>
        <input
          type="number"
          id="rating"
          min={1}
          max={5}
          value={formData.rating}
          onChange={handleInputChange}
          name="rating"
        />
        <br />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}
