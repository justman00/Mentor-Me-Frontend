import React, { useState } from "react";
import { MainContent } from "../ask/Ask";
import { BtnPrimary } from "../main/Search";

function ProfileEditForm(props) {
  console.log(props);
  const [values, setValues] = useState({
    name: props.user.fullName,
    role: props.user.role,
    photo: props.user.photoUrl,
    about: props.user.about || ""
  });

  function handleChange(e) {
    setValues({ ...values, [e.target.name]: e.target.value });
  }

  return (
    <MainContent>
      <form onSubmit={e => props.handleSubmit(e, values)}>
        <label>Full Name</label>
        <input
          onChange={handleChange}
          value={values.name}
          name="name"
          type="text"
        />
        <label>Role</label>
        <input
          onChange={handleChange}
          value={values.role}
          name="role"
          type="text"
        />
        <label>Photo</label>
        <input
          onChange={handleChange}
          value={values.photo}
          name="photo"
          type="text"
        />
        <label>About</label>
        <textarea
          onChange={handleChange}
          value={values.about}
          name="about"
          cols="30"
          rows="10"
          placeholder="Let the others know more about you"
        />
        <BtnPrimary width="100%" type="submit">
          Submit
        </BtnPrimary>
      </form>
    </MainContent>
  );
}

export default ProfileEditForm;
