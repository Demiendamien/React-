import React from 'react';
import { Card } from 'react-bootstrap';
import Name from './name';
import Price from './price';
import Description from './description';
import IImage from './image';

const firstName = "Jeanne"; // Changez votre prénom ici

const App = () => (
  <div style={{backgroundImage : "url(/depositphotos_347974822-stock-photo-multi-exposure-desktop-computer-technology.jpg)"}}>
    <div className="d-flex justify-content-center align-items-center vh-100 gap-3	">
      <Card style={{ width: "20rem", padding: "10px", textAlign: "center", backgroundColor: "rgba(255, 255, 255, 0.7)" }}>
        <IImage />
        <Card.Body>
          <Name />
          <Price />
          <Description />
        </Card.Body>
      </Card>
      <div style={{ marginTop: "20px", textAlign: "center" }}>
        <p>{firstName ? `Bonjour, ${firstName} !` : "Bonjour !"}</p>
        {firstName && <img src="/depositphotos_153426174-stock-photo-african-american-pretty-girl-raster.jpg" alt="Avatar" style={{width: "100px", height: "100px", borderRadius: "50%"}} />}
      </div>
    </div>
  </div>

);

export default App;