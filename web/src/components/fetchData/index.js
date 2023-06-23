export const getData = async () =>
  await fetch("http://localhost:5500/api/all")
    .then((res) => res.text())
    .then((data) => JSON.parse(data))
    .catch((e) => e.message);
