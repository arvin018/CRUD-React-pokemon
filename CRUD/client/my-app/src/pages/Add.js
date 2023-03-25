import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { postPokemon } from "../store/actions/action";
import FloatingLabel from "react-bootstrap/FloatingLabel";

export default function Add() {
  const dispatch = useDispatch();
  const [addForm, setForm] = useState({
    name: "",
    description: "",
    weight: "",
    image: "",
    type: "",
  });

  const navigate = useNavigate();
  const handlerIput = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    let formInput = {
      ...addForm,
    };
    formInput[key] = value;

    setForm(formInput);
  };

  const handlerSumbit = (e) => {
    e.preventDefault();
    if (addForm.name === "") {
      toast.warn("name is required");
    } else if (addForm.description === "") {
      toast.warn("description is required");
    } else if (addForm.weight === "") {
      toast.warn("weight is required");
    } else if (addForm.image === "") {
      toast.warn("image is required");
    } else if (addForm.type === "") {
      toast.warn("type is required");
    } else {
      
      dispatch(postPokemon(addForm));
      navigate("/");
    }
  };
  return (
    <div >
      <Form onSubmit={handlerSumbit}>
        <h1>Form Add Pokemon</h1>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            name="name"
            onChange={handlerIput}
          />
        </Form.Group>

        <FloatingLabel controlId="floatingTextarea2" label="description">
          <Form.Control
            as="textarea"
           
            style={{ height: "100px" }}
            name="description"
            onChange={handlerIput}
          />
        </FloatingLabel>

        <Form.Group className="mb-3">
          <Form.Label>Weight</Form.Label>
          <Form.Control
            type="text"
            placeholder="weight"
            name="weight"
            onChange={handlerIput}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Image</Form.Label>
          <Form.Control
            type="text"
            placeholder="image"
            name="image"
            onChange={handlerIput}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Type</Form.Label>
          <Form.Select
            aria-label="Default select example"
            name="type"
            onChange={handlerIput}
          >
            <option>--Selected--</option>
            <option value="Fire">Fire</option>
            <option value="Water">Water</option>
            <option value="Grass">Grass</option>
          </Form.Select>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

      <ToastContainer />
    </div>
  );
}
