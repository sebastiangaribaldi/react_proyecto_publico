import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';
import Style from './Login.module.css';

// No se pide para la pre-entrega
const Login = () => {
  const [usuario, setUsuario] = useState('');
  const [contrasenia, setContrasenia] = useState('');
  
  const { login } = useAuthContext();
  const navigate = useNavigate();
  
  const manejarSubmit = (evento) => {
    evento.preventDefault();
    // Simulamos la Autenticacion
    if(usuario == 'admin' && contrasenia == '1234') {
      login(usuario);
      navigate('/admin');
    } else {
      alert('Usuario o Contraseña invalido');
    }
  }

  return (
    <>
      <form className={Style.formulario} onSubmit={manejarSubmit}>
        <h3>Iniciar Sesion</h3>
        <label className={Style.etiqueta} htmlFor=''>Usuario</label>
        <input className={Style.campos}
          type='text'
          value={usuario}
          onChange={(evento) => setUsuario(evento.target.value)}
        />
        <br/>
        <label className={Style.etiqueta} htmlFor=''>Contraseña</label>
        <input className={Style.campos}
          type='text'
          value={contrasenia}
          onChange={(evento) => setContrasenia(evento.target.value)}
        />
        <br/>
        <br/>
        <button className={Style.btnEnviar} type='submit'>Iniciar Sesion</button>
      </form>
    </>    
  );
}

export default Login;