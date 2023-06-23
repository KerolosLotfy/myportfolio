import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../parts/button";
import { Input } from "../parts/input";
export const NewSkill = () => {
  const [message, setMessage] = useState(null);

  const x = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const body = () => {
      const form = new FormData(document.querySelector(" #dash_skills form"));
      let body = {};
      for (const [key, value] of form) {
        body[key] = value;
      }
      return body;
    };

    await fetch("http://localhost:5500/api/skills", {
      method: "POST",
      body: JSON.stringify(body()),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.text())
      .then((data) => {
        setMessage(data);
      })
      .finally(() => {
        setTimeout(() => {
          setMessage(null);
        }, 2000);
      });
  };

  return (
    <>
      {message ? <div className="popup">{message}</div> : false}
      <div className="form">
        <form method="POST" action="/">
          <Input type="text" name="title" label="Title" id="title" />
          <Input type="text" name="percent" id="percent" label="Percent" />
          <Button
            custom={{
              value: "Add",
              style: { color: "#0f0", borderColor: "#0f0" },
              class: "btn",
            }}
            click={(e) => handleSubmit(e)}
          />
        </form>
        <Button type="close" click={() => x("/dash/skills")} />
      </div>
    </>
  );
};
