"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './registerpage.module.css';


const Home = () => {
  const router = useRouter();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [profession, setProfession] = useState("");
  const [bedroom, setBedroom] = useState("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);

    let validationErrors: { [key: string]: string } = {};

    if (!firstName) validationErrors.firstName = "Please fill out this field.";
    if (!lastName) validationErrors.lastName = "Please fill out this field.";
    if (!emailAddress) validationErrors.emailAddress = "Please fill out this field.";
    if (!contactNumber) validationErrors.contactNumber = "Please fill out this field.";
    if (!profession) validationErrors.profession = "Please fill out this field.";
    if (!bedroom) validationErrors.bedroom = "Please fill out this field.";

    if (emailAddress && !emailAddress.includes("@")) {
      validationErrors.emailAddress = "Email must include @.";
    }

    const contactPattern = /^[0-9]{10}$/;
    if (contactNumber && !contactPattern.test(contactNumber)) {
      validationErrors.contactNumber = "Contact must be a 10-digit number.";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log("Form submitted.", { firstName, lastName, emailAddress, contactNumber, profession, bedroom });
      router.push('/thankyou');
    }
  };

  return (
    <main className={styles.main}>
      <section className={styles.formSection}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.colLeft}>
              <h2 className={styles.headingOne}>REGISTER TODAY</h2>
              <p className={styles.paragraphs}>
                Don't pass up this opportunity to embrace <br />
                contemporary living at its best.
              </p>
              <p className={styles.paragraphs}>
                Enter your information, and our team will contact you <br />
                shortly.
              </p>
              <div className={styles.contentLogo}>
                    <img src="https://lonsdalewp.wpenginepowered.com/wp-content/uploads/2024/04/content-logo.png" width="200" height="150" className={styles.imgFluid} alt="image" />
                  </div>
            </div>
            <div className={styles.colRight}>
              <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                  <input
                    type="text"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className={styles.textInput}
                  />
                  {errors.firstName && <div className={styles.error}>{errors.firstName}</div>}
                </div>
                <div className={styles.formGroup}>
                  <input
                    type="text"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className={styles.textInput}
                  />
                  {errors.lastName && <div className={styles.error}>{errors.lastName}</div>}
                </div>
                <div className={styles.formGroup}>
                  <input
                    type="email"
                    placeholder="Email"
                    value={emailAddress}
                    onChange={(e) => setEmailAddress(e.target.value)}
                    className={styles.emailInput}
                  />
                  {errors.emailAddress && <div className={styles.error}>{errors.emailAddress}</div>}
                </div>
                <div className={styles.formGroup}>
                  <input
                    type="text"
                    placeholder="Contact Number"
                    value={contactNumber}
                    onChange={(e) => setContactNumber(e.target.value)}
                    className={styles.textInput}
                  />
                  {errors.contactNumber && <div className={styles.error}>{errors.contactNumber}</div>}
                </div>
                <div className={styles.dropdown}>
                  <div className={styles.formGroup}>
                    <label className={styles.flexLabel}>I am a</label>
                    <select
                      value={profession}
                      onChange={(e) => setProfession(e.target.value)}
                      className={styles.selectInput}
                    >
                      <option value="">Select Investor / Owner occupier</option>
                      <option value="Investor">Investor</option>
                      <option value="Owner occupier">Owner occupier</option>
                    </select>
                    {errors.profession && <div className={styles.error}>{errors.profession}</div>}
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.flexLabel}>Interested in</label>
                    <select
                      value={bedroom}
                      onChange={(e) => setBedroom(e.target.value)}
                      className={styles.selectInput}
                    >
                      <option value="">Select number of bedrooms</option>
                      <option value="1">1 Bedroom</option>
                      <option value="2">2 Bedrooms</option>
                      <option value="3">3 Bedrooms</option>
                    </select>
                    {errors.bedroom && <div className={styles.error}>{errors.bedroom}</div>}
                  </div>
                </div>
                <div className={styles.formGroup}>
                  <input type="checkbox" className={styles.checkboxInput} required />
                  <label className={styles.label}> I accept the Privacy Statement</label>
                </div>
                <button className={styles.submitButton} type="submit">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
