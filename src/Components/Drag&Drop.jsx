import React, { useState } from 'react'

const DragDrop = () => {

    const [box1, setBox1] = useState(["Apple", "Banana"]);
    const [box2, setBox2] = useState(["Grapes"]);

    const handleDragStart = (e, item, fromBox) => {
        e.dataTransfer.setData("item", item);
        e.dataTransfer.setData('fromBox', fromBox);
    }

    const handleDrop = (e, toBox) => {

        // Read the values we stored during Drag Start
        const item = e.dataTransfer.getData("item");
        const fromBox = e.dataTransfer.getData("fromBox");

        if (fromBox === toBox) return;

        if (fromBox === 'box1') {
            setBox1(box1.filter((i) => i !== item))
        } else {
            setBox2(box2.filter((i) => i !== item));
        }


        if (toBox === 'box1') {
            setBox1([...box1, item]);
        } else {
            setBox2([...box2, item])
        }
    }
    const allowDrop = (e) => { e.preventDefault(); };

    return (
        <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>

            <div
                onDragOver={allowDrop}
                onDrop={(e) => handleDrop(e, "box1")}
                style={{
                    flex: 1,
                    minHeight: '200px',
                    border: '2px dashed grey',
                    padding: '10px'
                }}>
                <h3>Box 1</h3>
                {
                    box1.map((item, i) => (
                        <div
                            key={i}
                            draggable
                            onDragStart={(e) => handleDragStart(e, item, "box1")}
                            style={{
                                margin: '5px 0px',
                                padding: '8px',
                                background: 'lightblue',
                                cursor: 'grab'
                            }}>
                            {item}
                        </div>
                    ))
                }
            </div>

            <div
                onDragOver={allowDrop}
                onDrop={(e) => handleDrop(e, "box2")}
                style={{
                    flex: 1,
                    minHeight: '200px',
                    border: '2px dashed grey',
                    padding: '10px'
                }}>
                <h3>Box 2</h3>
                {
                    box2.map((item, i) => (
                        <div
                            key={i}
                            draggable
                            onDragStart={(e) => handleDragStart(e, item, "box2")}
                            style={{
                                margin:"5px 0",
                                padding:'8px',
                                background:'lightgreen',
                                cursor:'grab'
                            }}
                        >

                            {item}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default DragDrop;