"use client";

import { useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import styles from "./page.module.css";

export default function Home() {
  const initialFormData = {
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  };
  const [formData, setFormData] = useState(initialFormData);
  const [isFetching, setIsFetching] = useState(false);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!formData.firstName || !formData.email) return;
    setIsFetching(true);
    try {
      const response = await fetch("/api/send", {
        method: "POST",
        body: JSON.stringify({ ...formData }),
      });
      setFormData(initialFormData);
      const { data } = await response.json();
      if (data) toast.success(`Email ${data.id} was successfully sent!`);
    } catch (error) {
      toast.error("Something went wrong", error);
    }
    setIsFetching(false);
  };

  return (
    <main className={styles["hero"]}>
      <form className={styles["form"]} onSubmit={handleSubmit}>
        <legend className={styles["title"]}>Contact Form</legend>
        <fieldset className={styles["group"]}>
          <input
            className={styles["input"]}
            type="text"
            name="firstName"
            placeholder="First name *"
            value={formData.firstName}
            onChange={handleChange}
          />
          <input
            className={styles["input"]}
            type="text"
            name="lastName"
            placeholder="Last name"
            value={formData.lastName}
            onChange={handleChange}
          />
          <input
            className={styles["input"]}
            type="text"
            name="email"
            placeholder="Email *"
            value={formData.email}
            onChange={handleChange}
          />
          <textarea
            className={styles["textarea"]}
            placeholder="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </fieldset>
        <button className={styles["button"]} disabled={isFetching}>
          Submit
        </button>
      </form>
      <div>
        <ToastContainer></ToastContainer>
      </div>
    </main>
  );
}
