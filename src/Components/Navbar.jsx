import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {

  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {

    if (search.trim()) {
      navigate(`/?search=${search}`);
    } else {
      navigate('/');
    }
  }
  return (
    <div style={{ display: "flex", alignItems: 'center', justifyContent: 'space-between', padding: '0rem 1rem',backgroundColor:'#D3D3D3',position:'sticky',top:0}}>
      <h2>
        <Link to="/">React</Link>
      </h2>
      <div style={{ display: 'flex', gap: '1px' }}>
        <input
          type="text"
          placeholder='Search...'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ width: '18rem', height: '1.9rem', borderRadius: '1rem', border: 'none', paddingLeft: '1rem', boxShadow: '0px 0px 3px grey' }} />

        <button style={{ width: '7rem' }} onClick={handleSearch}>Search</button>
      </div>

      <p><Link to="/Cart">Cart</Link></p>
    </div>
  )
}

export default Navbar;