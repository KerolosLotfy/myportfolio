import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../parts/button";
import { Input } from "../parts/input";
export const NewProject = () => {
  const [message, setMessage] = useState(null);

  const x = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const body = () => {
      const form = new FormData(document.querySelector(" #portfolio form"));
      let body = {};
      for (const [key, value] of form) {
        body[key] = value;
      }
      return body;
    };

    console.log(body());

    await fetch("http://localhost:5500/api/projects", {
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
          <Input
            type="text"
            name="languages"
            value="HTML | CSS"
            id="lang"
            label="Languages"
          />
          <div style={{ display: "flex", gap: "20px" }}>
            <h4>Category</h4>
            <Input
              id="web"
              type="radio"
              name="category"
              value="web"
              label="web"
            />
            <Input
              id="app"
              type="radio"
              name="category"
              value="app"
              label="App"
            />
            <Input
              id="game"
              type="radio"
              name="category"
              value="game"
              label="Game"
            />
          </div>
          <Input type="file" name="img" label="image" id="image" img />
          <Input type="url" name="repo" label="Repo" id="repo" />
          <Input type="url" name="demo" label="demo" id="demo" />
          <textarea placeholder="Description" name="description"></textarea>
          <Button
            custom={{
              value: "Add",
              style: { color: "#0f0", borderColor: "#0f0" },
              class: "btn",
            }}
            click={(e) => handleSubmit(e)}
          />
        </form>
        <Button type="close" click={() => x("/dash/projects")} />
      </div>
    </>
  );
};
