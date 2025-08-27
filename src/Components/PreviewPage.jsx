import React from 'react';
import { IoMdCloseCircleOutline } from "react-icons/io";

const PreviewPage = ({ product, onClose }) => {
    console.log(product);
    console.log(product?.dimensions);
    const ProductDiamensions = Object.entries(product?.dimensions);

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            zIndex: 999,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'

        }}>
            <div style={{
                backgroundColor: '#fff',
                padding: '0px 30px',
                borderRadius: '8px',
                boxShadow: '0 5px 15px rgba(0, 0, 0, 0.2)',
                textAlign: 'center',
                position: 'relative',
                width: '40rem',
                height: 'auto'
            }}>

                <h3
                    style={{
                        cursor: 'pointer',
                        position: 'absolute',
                        top: '-0.8rem',
                        right: '0.5rem',
                        fontSize: '1.3rem'

                    }} onClick={onClose}>
                    <IoMdCloseCircleOutline />
                </h3>
                <div>
                    <img src={product?.thumbnail} alt={product.title} />
                    <h2>{product.title}</h2>
                    <h2>Diamensions of Product</h2>
                    <ul style={{ textDecoration: 'none', listStyle: 'none' }}>
                        {
                            ProductDiamensions?.map(([key, value]) => (
                                <li key={key}>{`${key}: ${value}`}</li>
                            ))
                        }
                    </ul>

                </div>
            </div>

        </div>

    )
}

export default PreviewPage;