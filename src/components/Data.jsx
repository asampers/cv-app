import { useState } from "react";

const Data = () => {
  const [data, setData] = useState(new Array(1).fill({}));
  const [showForm, setShowForm] = useState(false);
  const [selectedId, setSelectedId] = useState(0)
  const noData = Object.keys(data[0]).length === 0;

  function displayInfo(index) {
    return !this.showForm || this.selectedId != index
  }

  function displayForm(index) {
    return this.showForm && this.selectedId == index
  }

  function toggleEdit(e) {
    const index = e.target.getAttribute("data-index");
    console.log(index)
    setSelectedId(index);
    toggleShowForm(!showForm)
  }
  
  function toggleShowForm() {
    setShowForm(!showForm);
  }

  function addEntry() {
    const newItem = {};
    const dataCopy = [...data];
    dataCopy.push(newItem);
    const newIndex = `${dataCopy.length-1}`
    console.log(newIndex)
    setData(dataCopy)
    setSelectedId(newIndex);
    toggleShowForm(!showForm)
  }

  function handleSubmit(e) {
    const index = e.target.getAttribute("data-index")
    e.preventDefault();
    toggleShowForm();
    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    const dataCopy = [...data];
    dataCopy[index] = formJson;
    setData(dataCopy);
  }

  return { data, noData, showForm, selectedId, toggleShowForm, handleSubmit, addEntry, toggleEdit, displayInfo, displayForm };
}

export { Data };