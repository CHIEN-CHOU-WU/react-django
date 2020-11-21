import React, {
  //Component,
  useRef,
  useEffect,
  //nativeEvent,
  useState,
} from "react";
import "./mnist.css";
//import { saveAs } from "file-saver";
import { Button, Container, Alert } from "react-bootstrap";
import axios from "axios";

function Mnist() {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [send, setSend] = useState(false);
  const [result, setResult] = useState();

  const handleSubmit = () => {
    const canv = canvasRef.current.toDataURL();
    const canv_url = canvasRef.current.baseURI;
    //saveAs(canv, 'digit.jpg')
    sendData(canv, canv_url);
  };

  const sendData = (c, c_url) => {
    console.log(c);
    const headers = {
      accept: "application/json",
    };

    const fd = new FormData();
    fd.append("image", c);
    postData(c_url, fd, headers);
  };

  const postData = (curl, fd, headers) => {
    if (
      curl === "http://localhost:3000/mnist" ||
      curl === "http://127.0.0.1:8000/mnist"
    ) {
      curl = "http://127.0.0.1:8000/api/digits/create";
    } else if (curl === "https://react-django-wu.herokuapp.com/mnist") {
      curl = "https://react-django-wu.herokuapp.com/api/digits/create";
    }
    axios
      .post(curl, fd, {
        headers: headers,
      })
      .then(res => {
        console.log(res.data);
        setSend(true);
        getImageResult(res.data.id);
      })
      .catch(err => console.log(err));
  };

  const getImageResult = id => {
    const c_url = canvasRef.current.baseURI;
    if (
      c_url === "http://127.0.0.1:8000/mnist" ||
      c_url === "http://localhost:3000/mnist"
    ) {
      axios
        .get(`http://127.0.0.1:8000/api/digits/${id}/`)
        .then(res => setResult(res.data.result));
    } else if (c_url === "https://react-django-wu.herokuapp.com/mnist") {
      axios
        .get(`https://react-django-wu.herokuapp.com/api/digits/${id}/`)
        .then(res => setResult(res.data.result));
    }
  };

  const handleReset = () => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.width = `${window.innerWidth / 2}px`;
    canvas.style.height = `${window.innerHeight / 2}px`;
    const context = canvas.getContext("2d");
    context.scale(2, 2);
    context.lineCap = "round";
    context.strokeStyle = "white";
    context.fillStyle = "black";
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.lineWidth = 5;
    contextRef.current = context;
    setSend(false);
    setResult(false);
    //saveAs(canv, 'digit.jpg')
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.width = `${window.innerWidth / 2}px`;
    canvas.style.height = `${window.innerHeight / 2}px`;
    const context = canvas.getContext("2d");
    context.scale(2, 2);
    context.lineCap = "round";
    context.strokeStyle = "white";
    context.fillStyle = "black";
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.lineWidth = 5;
    contextRef.current = context;
  }, []);

  const startDrawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.beginPath();
    contextRef.current.moveTo(offsetX, offsetY);
    setIsDrawing(true);
  };

  const finishDrawing = () => {
    contextRef.current.closePath();
    setIsDrawing(false);
  };

  const draw = ({ nativeEvent }) => {
    if (!isDrawing) {
      return;
    }
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.lineTo(offsetX, offsetY);
    contextRef.current.stroke();
  };

  return (
    <React.Fragment>
      {send && <Alert variant="info">Succesfully submitted</Alert>}
      <Container>
        <section className="handwrite">
          <div>
            <br></br>
            <h1>Let's see what you write!</h1>
            <br></br>
            <p>
              Please write down one of the numbers from 0 to 9 in the box and
              press send at the bottom.
            </p>
            <canvas
              onMouseDown={startDrawing}
              onMouseUp={finishDrawing}
              onMouseMove={draw}
              ref={canvasRef}
            />
          </div>
          <div>
            <Button onClick={handleSubmit} variant="primary">
              Send
            </Button>
            <Button onClick={handleReset} variant="secondary">
              Reset
            </Button>
          </div>
          <div>
            <br></br>
            {result && <div> You put {result} in the box. </div>}
            <br></br>
          </div>
        </section>
      </Container>
      <section>
        <div>3D part</div>
      </section>
    </React.Fragment>
  );
}

export default Mnist;
