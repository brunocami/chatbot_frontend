import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'; // Importa usenavigate para redireccionar


const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    email: '',
    password: '',
  })

  const navigate = useNavigate();

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target
    setValues({
      ...values,
      [name]: value
    })
  }

  const verificarUsuario = async () => {
    // VERIFICAR SI EL MAIL DEL USUARIO INGRESADO EXISTE
    const res = await fetch(`http://localhost:8000/login`);

    const data = await res.json();

    let usuarioExistente = false;

    data.map(email => {
      if (email[2] === values.email && email[3] === values.password) {
        usuarioExistente = true;
      }
    });

    if (usuarioExistente) {
      setIsSubmitting(true)
    } else {
      alert('El usuario no esta registrado');
    }
  }

  const handleSubmit = async e => {
    e.preventDefault();

    setErrors(validate(values))
    verificarUsuario()
  }

  useEffect(() => {
    if (isSubmitting) {
      // GUARDAR LAS NOTICIAS EN EL SESSION STORAGE
      sessionStorage.setItem('user', JSON.stringify(values));
      navigate('/'); // Redirecciona a la ruta '/home'
      window.location.reload();
    }
  }, [isSubmitting]);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback()
    }
  }, [errors])

  return { handleChange, values, handleSubmit, errors }
};

export default useForm;