import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from './Form.module.css';

const Form = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    designation: '',
    institute: '',
    department: '',
    twitter: '',
    linkedin: '',
    scopes: '',
    email: '',
    phone: '',
    publications: '',
    phdGuided: '',
    fundings: '',
    citations: '',
    about: '',
    researchInterests: ''
  });

  const [entryId, setEntryId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/form');
        if (response.data) {
          setFormData(response.data);
          setEntryId(response.data._id); // Assuming _id is the ID field
        }
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures useEffect runs only once on mount

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (entryId) {
        await axios.put(`http://localhost:3000/api/form`, formData);
        console.log("doen till  here")
        alert('Form updated successfully!');
        navigate('/');
      } else {
        await axios.post('http://localhost:3000/api/form', formData);
        alert('Form submitted successfully!');
      }
    } catch (error) {
      console.error('Error submitting form', error);
      alert('Error submitting form');
    }
  };

  return (
    <div className={styles.frm}>
      <div className={styles.container}>
        <form onSubmit={handleSubmit}>
          {/* Details section */}
          <div className={styles.formGroup}>
            <h2>Details</h2>
            <label className={styles.label}>Name</label>
            <input
              className={styles.inputField}
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            <label className={styles.label}>Designation</label>
            <input
              className={styles.inputField}
              type="text"
              name="designation"
              value={formData.designation}
              onChange={handleChange}
            />
            <label className={styles.label}>Institute</label>
            <input
              className={styles.inputField}
              type="text"
              name="institute"
              value={formData.institute}
              onChange={handleChange}
            />
            <label className={styles.label}>Department</label>
            <input
              className={styles.inputField}
              type="text"
              name="department"
              value={formData.department}
              onChange={handleChange}
            />
          </div>

          {/* Contact section */}
          <div className={styles.formGroup}>
            <h2>Contact</h2>
            <label className={styles.label}>Twitter</label>
            <input
              className={styles.inputField}
              type="text"
              name="twitter"
              value={formData.twitter}
              onChange={handleChange}
            />
            <label className={styles.label}>LinkedIn</label>
            <input
              className={styles.inputField}
              type="text"
              name="linkedin"
              value={formData.linkedin}
              onChange={handleChange}
            />
            <label className={styles.label}>Scopes</label>
            <input
              className={styles.inputField}
              type="text"
              name="scopes"
              value={formData.scopes}
              onChange={handleChange}
            />
            <label className={styles.label}>Email</label>
            <input
              className={styles.inputField}
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <label className={styles.label}>Phone No.</label>
            <input
              className={styles.inputField}
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          {/* Work section */}
          <div className={styles.formGroup}>
            <h2>Work</h2>
            <label className={styles.label}>Publications</label>
            <input
              className={styles.inputField}
              type="text"
              name="publications"
              value={formData.publications}
              onChange={handleChange}
            />
            <label className={styles.label}>PhD Guided</label>
            <input
              className={styles.inputField}
              type="text"
              name="phdGuided"
              value={formData.phdGuided}
              onChange={handleChange}
            />
            <label className={styles.label}>Fundings</label>
            <input
              className={styles.inputField}
              type="text"
              name="fundings"
              value={formData.fundings}
              onChange={handleChange}
            />
            <label className={styles.label}>Citations</label>
            <input
              className={styles.inputField}
              type="text"
              name="citations"
              value={formData.citations}
              onChange={handleChange}
            />
          </div>

          {/* Description section */}
          <div className={styles.formGroup}>
            <h2>Description</h2>
            <label className={styles.label}>About</label>
            <textarea
              className={`${styles.inputField} ${styles.aboutField}`}
              name="about"
              value={formData.about}
              onChange={handleChange}
            />
            <label className={styles.label}>
              Research Interests (separate with semicolons)
            </label>
            <textarea
              className={styles.inputField}
              name="researchInterests"
              value={formData.researchInterests}
              onChange={handleChange}
            />
          </div>

          {/* Submit button */}
          <button className={styles.button} type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
