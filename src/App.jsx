import MainSection from './components/MainSection'
import Sidebar from './components/Sidebar'
import Player from './components/Player'
import { Container, Row } from 'react-bootstrap'

function App() {
  return (
    <>
      <Container fluid>
        <Row>
          <Sidebar />
          <MainSection />
        </Row>
      </Container>
      <footer>
        <Player />
      </footer>
    </>
  )
}

export default App
