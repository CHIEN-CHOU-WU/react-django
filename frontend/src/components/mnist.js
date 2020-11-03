import React, { Component, useRef, useEffect, nativeEvent, useState} from 'react';
import { saveAs } from 'file-saver';
import { Button, Container, Row, Col, Alert } from 'react-bootstrap';
import axios from 'axios';

function Mnist() {
    const canvasRef = useRef(null)
    const contextRef = useRef(null)
    const [isDrawing, setIsDrawing] = useState(false)
    const [send, setSend] = useState(false)
    const [result, setResult] = useState()

    const handleSubmit = () => {
        const canv = canvasRef.current.toDataURL()
        const canv_url = canvasRef.current.baseURI
        //saveAs(canv, 'digit.jpg')
        sendData(canv, canv_url)
    }

    const sendData = (c, c_url) => {
        console.log(c)
        const headers = {
            "accept": 'application/json'
        }

        const fd = new FormData()
        fd.append('image', c)

        if (c_url == "http://127.0.0.1:8000/mnist" || c_url == "http://localhost:3000/mnist"){
            axios.post('http://127.0.0.1:8000/api/digits/', fd, {headers:headers})
            .then(res=>{
                console.log(res.data)
                setSend(true)
                getImageResult(res.data.id)
            })
            .catch(err=>console.log(err))
        } else if (c_url == "https://react-django-wu.herokuapp.com/mnist") {
            axios.post('https://react-django-wu.herokuapp.com/api/digits/', fd, {headers:headers})
            .then(res=>{
                console.log(res.data)
                setSend(true)
            })
            .catch(err=>console.log(err))
        }
    }

    const getImageResult = (id) => {
        const c_url = canvasRef.current.baseURI
        console.log('2222222222222', c_url)
        if (c_url == "http://127.0.0.1:8000/mnist" || c_url == "http://localhost:3000/mnist"){
            axios.get(`http://127.0.0.1:8000/api/digits/${id}/`)
            .then(res=>
                setResult(res.data.result)
            )
        } else if (c_url == "https://react-django-wu.herokuapp.com/mnist") {
            axios.get(`https://react-django-wu.herokuapp.com/api/digits/${id}/`)
            .then(res=>
                setResult(res.data.result)
            )
        }
    }


    const handleReset = () => {
        const canvas = canvasRef.current;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        canvas.style.width = `${window.innerWidth/2}px`;
        canvas.style.height = `${window.innerHeight/2}px`;
        const context = canvas.getContext("2d")
        context.scale(2,2)
        context.lineCap = "round"
        context.strokeStyle = "white"
        context.fillStyle = "black";
        context.fillRect(0, 0, canvas.width, canvas.height);
        context.lineWidth = 5
        contextRef.current = context;
        setSend(false)
        setResult(false)
    }

    useEffect(() => {
        const canvas = canvasRef.current;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        canvas.style.width = `${window.innerWidth/2}px`;
        canvas.style.height = `${window.innerHeight/2}px`;
        const context = canvas.getContext("2d")
        context.scale(2,2)
        context.lineCap = "round"
        context.strokeStyle = "white"
        context.fillStyle = "black";
        context.fillRect(0, 0, canvas.width, canvas.height);
        context.lineWidth = 5
        contextRef.current = context;
    }, [])

    const startDrawing = ({nativeEvent}) => {
        const {offsetX, offsetY} = nativeEvent;
        contextRef.current.beginPath()
        contextRef.current.moveTo(offsetX, offsetY)
        setIsDrawing(true)
    }

    const finishDrawing = () => {
    contextRef.current.closePath()
    setIsDrawing(false)
    }

    const draw = ({nativeEvent}) => {
        if(!isDrawing){
        return
        }
        const {offsetX, offsetY} = nativeEvent;
        contextRef.current.lineTo(offsetX, offsetY)
        contextRef.current.stroke()
    }

    return (
        <React.Fragment>
        {send && <Alert variant="info">Succesfully submitted</Alert>}
            <Container>
                <div>
                    <br></br>
                    <canvas
                    onMouseDown={startDrawing}
                    onMouseUp={finishDrawing}
                    onMouseMove={draw}
                    ref={canvasRef}
                    />
                </div>
                <div>
                    <Button onClick={handleSubmit} variant='primary'>Send</Button>
                    <Button onClick={handleReset} variant='secondary'>Reset</Button>
                </div>
                <div>
                    <br></br>
                    {result && <div> Your result is {result} </div>}
                </div>
                </Container>
        </React.Fragment>
    );
}

export default Mnist;