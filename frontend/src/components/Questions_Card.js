import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import { CardContent } from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import TextField from "@mui/material/TextField";


export default function Questions_Card() {
	var myHeaders = new Headers();
	myHeaders.append(
		"Authorization",
		"Token 663964d20c630d677b0076da4a9a396efe878b70"
	);

  const [data, setData] = useState([
    {
      id: "",
      stack: "",
      name:"",
      option1:"",
      option2:"",
      option3:"",
      option4:"",
      option5:"",
    },
  ]);

	var requestOptions = {
		method: "GET",
		headers: myHeaders,
		redirect: "follow",
	};
  useEffect(() => {
	fetch(
		"http://unicodeinterview.pythonanywhere.com/accounts/question/Frontend",
		requestOptions
	)
		.then((response) => response.json())
    .then((result) => {
      console.log(result);
      setData(result);
    })
		.catch((error) => console.log("error", error));
    
  },[])
console.log("hi")
	return (
		<Box >
			<Card variant="outlined">
      <React.Fragment>
		<CardContent>
			<Typography sx={{ fontSize: 24 }} color="text.primary" gutterBottom>
				Frontend
			</Typography>
		</CardContent>
		<FormControl>
			
      {data.map((item, index) => (
        <div key={index}>
        <FormLabel id="demo-row-radio-buttons-group-label">
        {item.name}
        </FormLabel>

        	<RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
        >
          <FormControlLabel value="1" control={<Radio />} label={item.option1} />
          <FormControlLabel value="2" control={<Radio />} label={item.option2} />
          <FormControlLabel value="3" control={<Radio />} label={item.option3} />
          <FormControlLabel value="4" control={<Radio />} label={item.option4} />
          <FormControlLabel value="5" control={<Radio />} label={item.option5} />
        </RadioGroup>
       
        </div>
      ))}
     
		 <TextField
          id="outlined-basic"
          label="Additional Point"
          variant="outlined"
          style={{ margin: "5px" }}
        />
		</FormControl>
		<CardActions>
			<Button size="small">Submit</Button>
		</CardActions>
	</React.Fragment>
      </Card>
		</Box>
	);
}
