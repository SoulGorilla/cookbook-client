import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Route, Link, Routes, useParams } from "react-router-dom";
import apiUrl from "../apiUrls";

const Authors = (props) => {
  const [displayData, setDisplayData] = useState([]);
  const [music, setMusic] = useState({});
  const [firstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [albumName, setAlbumName] = useState("");

  useEffect(() => {
    fetch(`${apiUrl}Authors`)
      .then((response) => response.json())
      .then((data) => setDisplayData(data.authors))
      .catch(() => console.log("Fetch not working"));
  }, []);

  const data1 = displayData.map((i) => {
    return (
      <li>
        {i.firstName}
        {i.lastName}
      </li>
    );
  });
  console.log(displayData);

  const handleChangeFirstName = (event) => {
    setFirstName(event.target.value);
  };
  const handleChangeLastName = (event) => {
    setLastName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(firstName);
    console.log(LastName);
    const submitObject = {
      firstName: firstName,
      lastName: LastName,
    };

    let current = [...displayData];

    fetch(`${apiUrl}Authors`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(submitObject),
    })
      .then((response) => response.json())
      .then((data) => current.push(data.vinyl))
      .then((data) => console.log(`it worked`, data))
      .then(() => setDisplayData(current))
      .catch(() => {
        console.log("Error:");
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} type="text">
        <input onChange={handleChangeFirstName} placeholder="Author"></input>
        <input onChange={handleChangeLastName} placeholder="Author"></input>
        <input type="submit"></input>
      </form>
      <ul>{data1}</ul>
    </div>
  );
};

export default Authors;
