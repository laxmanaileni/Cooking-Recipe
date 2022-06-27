import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import classes from "./Form.module.css";
export default function Form(props) {
  const [name, setName] = useState(props.recipe.name ? props.recipe.name : "");
  const [serving, setServing] = useState(
    props.recipe.serving ? props.recipe.serving : ""
  );
  const [category, setCategory] = useState(
    props.recipe.category ? props.recipe.category : ""
  );
  const [ingredients, setIngredients] = useState(
    props.recipe.ingredients ? props.recipe.ingredients : ""
  );
  const [instructions, setInstructions] = useState(
    props.recipe.instructions ? props.recipe.instructions : ""
  );
  const [notes, setNotes] = useState(
    props.recipe.notes ? props.recipe.notes : ""
  );
  const [dateAdded, setDateAdded] = useState(
    props.recipe.dateAdded ? props.recipe.dateAdded : ""
  );
  const [dateEdited, setDateEdited] = useState(
    props.recipe.dateEdited ? props.recipe.dateEdited : ""
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit({
      id: props.recipe.id ? props.recipe.id : Math.random().toString(),
      name: name,
      serving: serving,
      category: category,
      ingredients: ingredients,
      instructions: instructions,
      notes: notes,
      dateAdded: dateAdded,
      dateEdited:props.recipe?dateEdited:dateAdded
    });
    props.handleClose();
  };

  return (
    <Box
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <form onSubmit={handleSubmit}>
        {!props.recipe?(<TextField
          required
          id="outlined-required"
          label="Recipe Name"
          placeholder="Recipe Name"
          defaultValue={name}
          onChange={(event) => setName(event.target.value)}
        />):(<TextField
        disabled
        id="outlined-required"
        label="Recipe Name"
        placeholder="Recipe Name"
        defaultValue={name}
        // onChange={(event) => setName(event.target.value)}
      />)}
        
        <FormControl sx={{ m: 1, minWidth: 250 }}>
          <InputLabel id="demo-simple-select-helper-label">Serving</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={serving}
            label="Serving"
            onChange={(event) => setServing(event.target.value)}
          >
            <MenuItem value={1}>One</MenuItem>
            <MenuItem value={2}>Two</MenuItem>
            <MenuItem value={3}>Three</MenuItem>
            <MenuItem value={4}>Four</MenuItem>
            <MenuItem value={5}>Five</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 250 }}>
          <InputLabel id="demo-simple-select-helper-label">Category</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={category}
            label="Category"
            onChange={(event) => setCategory(event.target.value)}
          >
            <MenuItem value={"Breakfast recipes"}>Breakfast recipes</MenuItem>
            <MenuItem value={"Lunch recipes"}>Lunch recipes</MenuItem>
            <MenuItem value={"Dinner recipes"}>Dinner recipes</MenuItem>
            <MenuItem value={"Appetizer recipes"}>Appetizer recipes</MenuItem>
            <MenuItem value={"Dessert recipes"}>Dessert recipes</MenuItem>
            <MenuItem value={"Vegetarian Dishes"}>Vegetarian Dishes</MenuItem>
          </Select>
        </FormControl>
        <TextField
          id="filled-multiline-static"
          label="Ingredients"
          multiline
          rows={4}
          defaultValue={ingredients}
          placeholder="Ingredients"
          variant="filled"
          onChange={(event) => setIngredients(event.target.value)}
        />
        <TextField
          id="filled-multiline"
          label="Instructions"
          multiline
          rows={4}
          defaultValue={instructions}
          placeholder="Lets note Instructions"
          variant="filled"
          onChange={(event) => setInstructions(event.target.value)}
        />
        <TextField
          id="filled-multiline-notes"
          label="Notes"
          multiline
          rows={4}
          defaultValue={notes}
          placeholder="Any additional instructions"
          variant="filled"
          onChange={(event) => setNotes(event.target.value)}
        />
        <TextField
          id="datetime-local"
          label={props.recipe?"Date Edited":"Date Added"}
          type="datetime-local"
          defaultValue={dateAdded}
          onChange={(event) => props.recipe?setDateEdited(event.target.value):setDateAdded(event.target.value)}
          sx={{ width: 250 }}
          InputLabelProps={{
            shrink: true,
          }}
        />

        <Box>
          <button type="submit" className={classes.button}>
            {!props.recipe?"Add":"Edit"}
          </button>

          <button className={classes.button} onClick={props.handleClose}>
            Close
          </button>
        </Box>
      </form>
    </Box>
  );
}
