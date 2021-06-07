import React from "react";
import { useFormik } from "formik";

function CreateTrip() {
  const formik = useFormik({
    initialValues: {
      name: "",
      destination: "",
      startDate: "",
      endDate: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div>
      <h1>Create Trip</h1>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="name">Trip Name</label>
        <input
          id="name"
          name="name"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        <label htmlFor="destination">What's your destination?</label>
        <input
          id="destination"
          name="destination"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.destination}
        />
        <label htmlFor="startDate">What's your start date? </label>
        <input
          id="startDate"
          name="startDate"
          type="date"
          onChange={formik.handleChange}
          value={formik.values.startDate}
        />
        <label htmlFor="endDate">What's your return date? </label>
        <input
          id="endDate"
          name="endDate"
          type="date"
          onChange={formik.handleChange}
          value={formik.values.endDate}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CreateTrip;
