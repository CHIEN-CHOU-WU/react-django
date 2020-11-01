import React, { Component, useRef, useEffect, nativeEvent, useState} from 'react';
import { saveAs } from 'file-saver';
import { Button, Container, Row, Col } from 'react-bootstrap';

function Mnist() {
    const canvasRef = useRef(null)
    const contextRef = useRef(null)
    const [isDrawing, setIsDrawing] = useState(false)

    const handleSubmit = () => {
        const canv = canvasRef.current.toDataURL()
        saveAs(canv, 'digit.jpg')
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
                    <Button onClick={handleSubmit} variant='primary'>Save</Button>
                    <Button onClick={handleReset} variant='secondary'>Reset</Button>
                </div>
            </Container>
        </React.Fragment>
    );
}

export default Mnist;