import React, { useEffect, useState } from 'react';
import './Cart.css';
import Navbar from './Navbar';
import { useSearchParams } from 'react-router-dom';
import PreviewPage from './PreviewPage';

const ECart = () => {

    const [product, setProduct] = useState([]);
    const [cart, setCart] = useState([]);
    const [isOpenPreview,setIsOpenPreview] = useState(false);
    const [selectedProduct,setSelectedProduct] = useState(null);

    const [searchParms] = useSearchParams();

    const search = searchParms.get("search")?.toLowerCase() || '';

    const fetchData = async () => {
        const response = await fetch('https://dummyjson.com/products');
        const result = await response.json();
        console.log(result);
        setProduct(result.products);
    }

    useEffect(() => {
        fetchData();

        let StoredCart = JSON.parse(localStorage.getItem('Cart')) || [];
        setCart(StoredCart);
    }, [])

    const handleProducts = (data) => {

        const Exists = cart.find((p) => p.id === data.id);
        if (Exists) return;

        const updatedCart = [...cart, data];
        setCart(updatedCart);

        localStorage.setItem('Cart', JSON.stringify(updatedCart));
        alert(`${data.title} is added in Cart...`);
    }

    const handlePreviewPage = (data) =>{
        setIsOpenPreview(true);
        setSelectedProduct(data);
    }

    const closePreview = () =>{
        setIsOpenPreview(false);
        setSelectedProduct(null);
    }

    // Pagination 
    const [currentPage, setCurrentPage] = useState(1);
    let itemPerPage = 6;

    const filteredProduct = product.filter(item => item?.title?.toLowerCase().includes(search));

    const totalPages = Math.ceil(filteredProduct.length / itemPerPage);
    console.log(totalPages);
    const startingIndex = (currentPage - 1) * itemPerPage;
    const currentProducts = filteredProduct.slice(startingIndex, startingIndex + itemPerPage);
    console.log(currentProducts);

    const goToPage = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    }

    if (!product.length) {
        <h1>Loading...</h1>
    }
    return (
        <div>
            <Navbar />
            {
                isOpenPreview && selectedProduct && (
                    <PreviewPage product={selectedProduct} onClose={closePreview} />
                )
            }
            <div className='Product-Container'>

                {
                    currentProducts?.length > 0 ? (
                        currentProducts?.map((data, _) => {
                            const alreadyInCart = cart.some((p) => p.id === data.id);
                            return (
                                <div key={data.id} className='product-Box'>
                                    <img
                                        src={data?.thumbnail}
                                        alt={data?.title}
                                        style={{ cursor: 'pointer' }}
                                        onClick={() =>{ handlePreviewPage(data)  }}
                                    />
                                   
                                    <h3>{data?.title}</h3>
                                    <div className='Options-Box'>
                                        <p>{data?.availabilityStatus}</p>
                                        <p>{Math.floor(data?.price)}$</p>
                                    </div>
                                    <div>
                                        <button>❤️ Wishlist</button>
                                        <button
                                            onClick={() => handleProducts(data)}
                                            disabled={alreadyInCart}
                                        >{alreadyInCart ? "Already In Cart" : "Buy It"}</button>
                                    </div>
                                </div>
                            )
                        })
                    ) : (
                        <h2>Not Product found...</h2>
                    )

                }
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1.5rem', gap: '0.5rem' }}>
                <button
                    onClick={() => goToPage(currentPage - 1)}
                    disabled={currentPage === 1}>
                    Prev
                </button>
                {
                    Array.from({ length: totalPages }, (_, i) => (
                        <button
                            key={i}
                            style={{ fontWeight: currentPage === i + 1 ? 'bold' : 'normal' }}
                            onClick={() => goToPage(i + 1)}
                        >
                            {i + 1}
                        </button>
                    ))
                }
                <button
                    onClick={() => goToPage(currentPage + 1)}
                    disabled={currentPage === 5}>
                    Next
                </button>
            </div>
        </div>
    )
}

export default ECart;