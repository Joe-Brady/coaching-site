"use client";

import { Button } from "@/components/Button/Button";
import styles from "./application-form.module.css";
import { sendGAEvent } from "@next/third-parties/google";
import { useState } from "react";
import Image from "next/image";

export function ApplicationForm() {
  const [isSubmitPending, setIsSubmitPending] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsSubmitPending(true);
    const formData = new FormData(event.currentTarget);
    const formEntries: [string, string][] = Array.from(formData.entries()).map(
      ([key, value]) => [key, value.toString()]
    );
    const body = new URLSearchParams(formEntries).toString();

    sendGAEvent("event", "appliction_submitted", formData);

    await fetch("/__forms.html", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: body,
    });

    setSubmitted(true);
    setIsSubmitPending(false);
  };

  return (
    <div className={styles.formContainer}>
      {submitted ? (
        <div className={styles.success}>
          <Image src="/tick.svg" alt="Success tick" width={80} height={80} />
          <p className="h4">Application submitted</p>
          <p>Thank you for your interest! I will be in touch soon.</p>
        </div>
      ) : (
        <>
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

            <Button type="submit" disabled={isSubmitPending}>
              Submit
            </Button>
          </form>
        </>
      )}
    </div>
  );
}
