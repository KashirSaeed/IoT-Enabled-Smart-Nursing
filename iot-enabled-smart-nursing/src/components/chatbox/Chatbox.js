import React, { useState } from 'react';
import { Paper, TextField, Button, List, ListItem, ListItemText, IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send'; // Import the Send icon
import { Grid } from '@mui/material';
import queryingBard from '../../services/queryBard';
import Slide from '@mui/material/Slide';

import Alert from '@mui/material/Alert';
function Chatbox() {
    const [records, setValue] = useState('');
    const [showError, setShowError] = useState(false);
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');

    const handleSendMessage = async () => {
        if (newMessage) {
            setMessages((messages)=>([...messages, { text: newMessage, sender: 'user' }]));
            setNewMessage('');
            let obj = {
                records: records,
                query: newMessage
            }
            let BardResponse;
            await queryingBard(obj).then((response) =>BardResponse= response ).catch((error)=> console.log(error))
            setMessages((messages)=>([...messages, { text: BardResponse, sender: 'Bard' }]));

        }
    };
    const handleInputKeyPress = (e) => {
        if (e.key === 'Enter' && newMessage) {
            handleSendMessage();
        }
    };
    const handleRecordChange = (event) => {
        console.log("change detected")
        const inputValue = event.target.value;
        setValue(inputValue)
        if (inputValue > 50 || inputValue < 5) {
            // Display a warning, prevent setting the value, or take other actions
            // alert('Value should not exceed 50');
            setShowError(true);
            setInterval(()=>{
                setShowError(false)
            },5000)
            setValue(5)
        } else {
            // Update the state if the value is within the allowed range
            setShowError(false);
        }
    };

    return (
        <React.Fragment>
            <Slide timeout={1000} direction="down" in={showError} mountOnEnter unmountOnExit>
                <Alert severity="error" sx={{ marginTop: '8px' }}>
                    Records in range 5-50 allowed only
                </Alert>
            </Slide>


            <div className={`chatbox`}>

                <Paper elevation={3}>
                    <List>
                        {messages.map((message, index) => (
                            <ListItem key={index} alignItems="flex-start">
                                <ListItemText
                                    primary={message.sender === 'user' ? 'You' : 'Bard'}
                                    secondary={message.text}
                                />
                            </ListItem>
                        ))}
                    </List>
                </Paper>
                <Grid padding={2} container className="input-container" alignItems={'center'}>
                    <Grid item sm={1}>
                        <TextField value={records} onChange={handleRecordChange} id="outlined-basic" label="# of Records" variant="outlined" sx={{ paddingRight: '5px' }} type='number' />
                    </Grid>
                    <Grid item sm={10}>
                        <TextField
                            label="Type your Query"
                            variant="outlined"
                            fullWidth
                            value={newMessage}
                            onChange={(e) => setNewMessage(e.target.value)}
                            onKeyPress={handleInputKeyPress}
                        />
                    </Grid>
                    <Grid item sm={1}>
                        <IconButton color="primary" onClick={handleSendMessage} aria-label="Send">
                            <SendIcon />
                        </IconButton>
                    </Grid>
                </Grid>
            </div>
        </React.Fragment>
    );
}

export default Chatbox;
