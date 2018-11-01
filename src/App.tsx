import * as React from 'react'
import './App.css'
import Button from './components/Button'
import Card from './components/Card'
import Container from './components/Container'
import Input from './components/Input'
import Link from './components/Link'
import Title from './components/Title'

class App extends React.Component {
  public render() {
    return (
      <Container>
        <Card>
          <Title>Iniciar sesión</Title>
          <Input placeholder="Correo" label="Correo" />
          <Input placeholder="Contraseña" label="Contraseña" />
          <Button block={true}>Enviar</Button>
          <Link>Ir al registro</Link>
        </Card>
      </Container>
    );
  }
}

export default App;
