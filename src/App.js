import React, { useState } from 'react';
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import miImagen from './images/descarga.png'; 
import miImagen2 from './images/inta.png'; 

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [openDialog, setOpenDialog] = useState(false);
  const [dialogContent, setDialogContent] = useState('');

  const handleLogin = () => {
    if (email.includes('@hotmail.com') && password !== '') {
      setDialogContent('Usuario válido');
      setOpenDialog(true);
    } else {
      setDialogContent('Usuario no válido');
      setOpenDialog(true);
    }
  };

  const handleRegister = () => {
    if (email.includes('@hotmail.com') && password !== '') {
      setDialogContent('Usuario creado');
      setOpenDialog(true);
    } else {
      setDialogContent('Correo o contraseña inválidos');
      setOpenDialog(true);
    }
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <div style={{ position: 'absolute', top: 'calc(50% - 90px)', left: '50%', transform: 'translate(-50%, -50%)' }}>
      <img src={miImagen} alt="Logo" style={{ width: '400px', height:'60px', marginBottom: '1rem', position: 'relative', top:'210px'}} />
      <img src={miImagen2} alt="Logo" style={{ width: '400px', height:'200px', marginBottom: '1rem', position: 'relative', top:'120px', left:'600px'}} />
      <TextField
        label="Correo electrónico"
        variant="outlined"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
        style={{ marginBottom: '1rem' }}
      />
      <TextField
        label="Contraseña"
        variant="outlined"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        fullWidth
        style={{ marginBottom: '1rem',}}
      />
      <Button variant="contained" color="primary" onClick={handleLogin} style={{ marginBottom: '0.5rem', marginRight:'10px' }}>
        Ingresar
      </Button>
      <Button variant="contained" color="primary" onClick={handleRegister} style={{ marginBottom: '0.5rem' }}>
        Registrarse
      </Button>
      <p style={{ color: '#666', marginBottom: '0.5rem' }}>¿Olvidaste tu contraseña?</p>
      <p style={{ color: '#666' }}>No tengo cuenta. Registrarme</p>

      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Resultado</DialogTitle>
        <DialogContent>
          <p>{dialogContent}</p>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Cerrar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default App;
