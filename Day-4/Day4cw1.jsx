import React, { useState } from "react";
import { TextField, Button, Autocomplete, Box } from "@mui/material";

const FruitForm = () => {
  const [name, setName] = useState("");
  const [fruit, setFruit] = useState("");
  const [greeting, setGreeting] = useState("");

  const fruits = ["Apple", "Banana", "Cherry", "Durian", "Elderberry"];

  const handleSubmit = (event) => {
    event.preventDefault();
    setGreeting(`Hello, ${name}! Your favorite fruit is ${fruit}.`);
  };

  return (
    <Box 
      component="form" 
      onSubmit={handleSubmit} 
      
    >
      <TextField
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        data-testid="name"
        fullWidth
      />
      <Autocomplete
        options={fruits}
        onChange={(event, value) => setFruit(value)}
        renderInput={(params) => (
          <TextField
          />
        )}
        fullWidth
      />
      <Button 
        type="submit" 
        variant="contained" 
        color="primary" 
        data-testid="button"
      >
        Submit
      </Button>
      {greeting && <Box mt={2}>{greeting}</Box>}
    </Box>
  );
};

export default FruitForm;
