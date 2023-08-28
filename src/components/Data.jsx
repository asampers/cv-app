import { useState } from "react";

const Data = () => {
  const [data, setData] = useState({});
  const [showForm, setShowForm] = useState(false);
  const noData = Object.keys(data).length === 0;

  function toggleShowForm() {
    setShowForm(!showForm);
  }

  function handleSubmit(e) {
    e.preventDefault();
    toggleShowForm();
    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    setData(formJson);
  }

  return { data, noData, showForm, toggleShowForm, handleSubmit };
}

export { Data };