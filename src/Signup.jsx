import Button from '@mui/material/Button';
import { Card, TextField, Typography } from '@mui/material';
import {useState} from "react";
import axios from "axios";

function Signup(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    return <div>
        
            <div style={{
                paddingTop: 150, 
                margginBottom: 10, 
                display: "flex", 
                justifyContent: "center"
                }}>
           
                <Typography varient={"h6"}>Welcome to Saanvi's Short Stories. Sign up below</Typography>
            </div>
            <div style={{
                display: "flex", 
                justifyContent: "center"}}>
        
        <Card variant={"outlined"} style={{
        
            width: 400,
            padding: 20
        }}>
        <TextField onChange={(evant11) => {
                        let elemt = evant11.target;
                        setEmail(elemt.value);
                    }}
                    fullWidth={true}
                    label="Email"
                    variant="outlined"
                />
                <br/><br/>
                <TextField
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                    fullWidth={true}
                    label="Password"
                    variant="outlined"
                    type={"password"}
                />
                <br/><br/>

                <Button
                    size={"large"}
                    variant="contained"
                    onClick={async() => {
                        const response = await axios.post("http://localhost:3000/admin/signup", {
                            username: email,
                            password: password
                        })
                        let data = response.data;
                        localStorage.setItem("token", data.token);
                        window.location = "/"
                    }}

                > Signup</Button>
            </Card>
        </div>
    </div>
}

export default Signup;