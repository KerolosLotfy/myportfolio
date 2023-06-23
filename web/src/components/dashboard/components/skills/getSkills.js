import React, { useEffect, useState } from "react";
import { getData } from "../../../fetchData";
import { Button } from "../parts/button";

export const GetSkills = () => {
  const [skills, setSkills] = useState(null);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    (async () => await getData())().then((data) =>
      typeof data === "object" ? setSkills(data.skills) : setSkills(data)
    );
  }, [skills]);

  const del = async (id) => {
    await fetch(`http://localhost:5500/api/skill/${id}`, {
      method: "DELETE",
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

  const update = async (id) => {
    await fetch(`http://localhost:5500/api/skill/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        title: document.querySelector(`#title${id}`).innerHTML,
        percent: document.querySelector(`#percent${id}`).innerHTML,
      }),
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

  const editable = (e) => {
    e.target.setAttribute("contenteditable", true);
    e.target.onblur = () => {
      e.target.setAttribute("contenteditable", false);
    };
  };
  return (
    <table>
      {message ? <div className="popup">{message}</div> : false}
      <thead>
        <tr>
          <th>Title</th>
          <th>percent (%)</th>
          <th>delete</th>
          <th>update</th>
        </tr>
      </thead>
      <tbody>
        {skills
          ? skills.map((s) => (
              <tr key={s.id}>
                <td id={"title" + s.id} onClick={(e) => editable(e)}>
                  {s.title}
                </td>
                <td id={"percent" + s.id} onClick={(e) => editable(e)}>
                  {s.percent}
                </td>
                <td>
                  <Button
                    type="delete"
                    custom={{ value: "Delete" }}
                    click={() => del(s.id)}
                  />
                </td>
                <td>
                  <Button
                    type="update"
                    custom={{ value: "Update" }}
                    click={() => update(s.id)}
                  />
                </td>
              </tr>
            ))
          : "NO Skills"}
      </tbody>
    </table>
  );
};
