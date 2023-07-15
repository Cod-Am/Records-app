import './App.css';
import Header from './components/Header';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Stack from '@mui/material/Stack';
import { useState } from 'react';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [data, setData] = useState([]);
  const addData = () => {
    setData([...data, { name: name, email: email }])
    setName('');
    setEmail('');
  }
  const removeItem = (index) => {
    let arr = data;
    arr.splice(index, 1);
    setData([...arr])
  }
  const handlePress = (e) => {
    if (e.key === 'Enter') {
      addData();
    }
  }
  return (
    <div className="App">
      <Header />
      <div className='form'>
        <Stack direction="row" spacing={5}>
          <TextField onKeyDown={(e)=>handlePress(e)} value={name} id="name" label="Name" variant="outlined" onChange={(event) => setName(event.target.value)} />
          <TextField onKeyDown={(e)=>handlePress(e)} value={email} id="email" label="Email" variant="outlined" onChange={(event) => setEmail(event.target.value)} />
          <Button onClick={addData} variant="contained" color="success"><AddIcon /></Button>
        </ Stack>
      </div>


      {/*Data */}
      <div className='data'>
        <div className='data_val'>
          <h4>Name</h4>
          <h4>Email</h4>
          <h4>Remove</h4>
        </div>
      </div>
      {
        data.map((element, index) => {
          return (
            <div key={index} className='data_val'>
              <h4>{element.name}</h4>
              <h4>{element.email}</h4>
              <h4>
                <Button onClick={() => removeItem(index)} variant="outlined" color="error">
                  <DeleteOutlineIcon />
                </Button>
              </h4>
            </div>
          )
        })
      }
    </div>
  );
}

export default App;
