"use client";

import { Button } from "@/components/Button/Button";
import styles from "./application-form.module.css";

export function ApplicationForm() {
  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formEntries: [string, string][] = Array.from(formData.entries()).map(
      ([key, value]) => [key, value.toString()]
    );
    const body = new URLSearchParams(formEntries).toString();
    await fetch("/__forms.html", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: body,
    });
  };

  return (
    <div className={styles.formContainer}>
      <h1 id="apply-now">Apply now</h1>
      <form
        className={styles.form}
        name="application"
        onSubmit={handleFormSubmit}
      >
        <input type="hidden" name="form-name" value="application" />
        <label>
          {"Name"}
          <input type="text" name="name" required />
        </label>
        <label>
          {"Email address"}
          <input type="text" name="email" required />
        </label>
        <label>
          {"Phone number (optional)"}
          <input type="text" name="phone" />
        </label>
        <label>
          {"Message"}
          <textarea
            name="message"
            rows={10}
            placeholder={`E.g. "I am looking for my first job in the industry. So far I have attended a bootcamp and want to refine my skills."`}
          />
        </label>

        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}
