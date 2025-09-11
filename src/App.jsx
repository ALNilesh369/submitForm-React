import React, { useState } from "react";
import "./App.css";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [gender, setGender] = useState("male");
  const [subjects, setSubjects] = useState({
    english: true,
    maths: false,
    physics: false,
  });
  const [resume, setResume] = useState(null);
  const [url, setUrl] = useState("");
  const [selectOption, setSelectOption] = useState("");
  const [about, setAbout] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      firstName,
      lastName,
      email,
      contact,
      gender,
      subjects,
      resume,
      url,
      selectOption,
      about,
    });
  };

  const handleSubjectChange = (sub) => {
    setSubjects((prev) => ({
      ...prev,
      [sub]: !prev[sub],
    }));
  };

  const handleReset = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setContact("");
    setGender("male");
    setSubjects({
      english: true,
      maths: false,
      physics: false,
    });
    setResume(null);
    setUrl("");
    setSelectOption("");
    setAbout("");
  };

  return (
    <div className="App">
      <h1>Form in React</h1>
      <fieldset>
        <form>
          <label htmlFor="firstName">First Name*</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Enter First Name"
            required
          />

          <label htmlFor="lastName">Last Name*</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Enter Last Name"
            required
          />

          <label htmlFor="email">Email*</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email"
            required
          />

          <label htmlFor="contact">Contact No*</label>
          <input
            type="tel"
            id="contact"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            placeholder="Enter Contact no"
            required
          />

          <label>Gender</label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={gender === "male"}
            onChange={(e) => setGender(e.target.value)}
          />{" "}
          Male
          <input
            type="radio"
            name="gender"
            value="female"
            checked={gender === "female"}
            onChange={(e) => setGender(e.target.value)}
          />{" "}
          Female
          <input
            type="radio"
            name="gender"
            value="other"
            checked={gender === "other"}
            onChange={(e) => setGender(e.target.value)}
          />{" "}
          Other

          <label>Your best subject</label>
          <input
            type="checkbox"
            checked={subjects.english}
            onChange={() => handleSubjectChange("english")}
          />{" "}
          English
          <input
            type="checkbox"
            checked={subjects.maths}
            onChange={() => handleSubjectChange("maths")}
          />{" "}
          Maths
          <input
            type="checkbox"
            checked={subjects.physics}
            onChange={() => handleSubjectChange("physics")}
          />{" "}
          Physics

          <label htmlFor="file">Resume</label>
          <input
            type="file"
            id="file"
            onChange={(e) => setResume(e.target.files[0])}
            required
          />

          <label htmlFor="url">Enter Url</label>
          <input
            type="url"
            id="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Enter Url"
            required
          />

          <label>Select your choice</label>
          <select
            id="select"
            value={selectOption}
            onChange={(e) => setSelectOption(e.target.value)}
          >
            <option value="" disabled>
              Select your ans
            </option>
            <optgroup label="Beginers">
              <option value="1">HTML</option>
              <option value="2">CSS</option>
              <option value="3">JavaScript</option>
            </optgroup>
            <optgroup label="Advance">
              <option value="4">React</option>
              <option value="5">Node</option>
              <option value="6">Express</option>
              <option value="7">MongoDB</option>
            </optgroup>
          </select>

          <label htmlFor="about">About</label>
          <textarea
            id="about"
            cols="30"
            rows="3"
            value={about}
            onChange={(e) => setAbout(e.target.value)}
            placeholder="About yourself?"
            required
          ></textarea>

          <button type="reset" onClick={handleReset}>
            Reset
          </button>
          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </fieldset>
    </div>
  );
}

export default App;
