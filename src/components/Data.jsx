import { useState } from "react";

const Data = () => {
  const [data, setData] = useState(new Array(1).fill({id: 0}));
  const [showForm, setShowForm] = useState(false);
  const [selectedId, setSelectedId] = useState(0);
  const [counter, setCounter] = useState(0);
  const noData = Object.keys(data[0]).length === 1;

  function displayInfo(index) {
    return !this.showForm || this.selectedId != index
  }

  function displayForm(index) {
    return this.showForm && this.selectedId == index
  }

  function toggleEdit(e) {
    const index = e.target.getAttribute("data-index");
    setSelectedId(index);
    toggleShowForm(!showForm)
  }
  
  function toggleShowForm() {
    setShowForm(!showForm);
  }

  function addEntry() {
    const newItem = {id: counter+1};
    const dataCopy = [...data];
    dataCopy.push(newItem);
    setData(dataCopy)
    setSelectedId(newItem.id);
    setCounter(newItem.id)
    toggleShowForm(!showForm)
  }

  function createNewObject(form) {
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    return formJson
  }

  function isEmpty(object) {
    return Object.values(object).every(x => x == 0 || x === '');
  }

  function handleSubmit(e) {
    const ID = e.target.getAttribute("data-index")
    const index = data.findIndex(obj => obj.id == ID)
    e.preventDefault();
    toggleShowForm();
    const newObject = createNewObject(e.target);
    if (isEmpty(newObject)) return;
    newObject.id = ID;
    const dataCopy = [...data];
    dataCopy[index] = newObject;
    setData(dataCopy);
  }

  return { data, noData, showForm, selectedId, toggleShowForm, handleSubmit, addEntry, toggleEdit, displayInfo, displayForm };
}

export { Data };