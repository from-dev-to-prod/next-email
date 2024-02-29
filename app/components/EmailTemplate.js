import * as React from "react";

export const EmailTemplate = ({ firstName, lastName, email, message }) => {
  return (
    <div>
      <h2>You just received a new message!</h2>
      <p>
        <span>First name:</span>
        <strong>{firstName}</strong>
      </p>
      <p>
        <span>Last name:</span>
        <strong>{lastName}</strong>
      </p>
      <p>
        <span>Email:</span>
        <strong>{email}</strong>
      </p>
      <p>
        <span>Message:</span>
        <strong>{message}</strong>
      </p>
    </div>
  );
};
