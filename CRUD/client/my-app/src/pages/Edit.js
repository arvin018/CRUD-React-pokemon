import { useState,useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch,useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { editPokemon } from "../store/actions/action";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { useParams } from "react-router-dom";
import { fetchPokemonId } from "../store/actions/action";

export default function Edit() {
  const dispatch = useDispatch();
  const [addForm, setForm] = useState({
    name: "",
    description: "",
    weight: "",
    image: "",
    type: "",
  });

  const { id } = useParams();
  // console.log(id,"tanda id");
 
  const  {pokemonId}  = useSelector((state) => state);
  // console.log(pokemonId,"tanda pokemon by Id");
 
  useEffect(() => {
    dispatch(fetchPokemonId(id));
  }, []);

  useEffect(() => {
   
    setForm({
      name: pokemonId.name,
      description: pokemonId.description,
      weight: pokemonId.weight,
      image: pokemonId.image,
      type:pokemonId.type
    });
  }, [pokemonId]);
  
  // console.log(addForm.type,"ini typeenya")
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

 
  const handlerFormEdit = (e) => {
    e.preventDefault();
    console.log("masukHandler")
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
      
      dispatch(editPokemon(addForm,id));
      navigate("/");
    }
  };
  return (
    <div >
      <Form onSubmit={handlerFormEdit}>
        <h1>Form Edit Pokemon</h1>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            name="name"
            onChange={handlerIput}
            value = {addForm.name} 
          />
        </Form.Group>

        <FloatingLabel controlId="floatingTextarea2" label="description">
          <Form.Control
            as="textarea"
            style={{ height: "100px" }}
            name="description"
            onChange={handlerIput}
            value = {addForm.description} 
          />
        </FloatingLabel>

        <Form.Group className="mb-3">
          <Form.Label>Weight</Form.Label>
          <Form.Control
            type="text"
            placeholder="weight"
            name="weight"
            onChange={handlerIput}
            value = {addForm.weight} 
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Image</Form.Label>
          <Form.Control
            type="text"
            placeholder="image"
            name="image"
            onChange={handlerIput}
            value = {addForm.image} 
          />
        </Form.Group>

       
        <Button variant="primary" type="submit">
          Update
        </Button>
      </Form>

      <ToastContainer />
    </div>
  );
}
