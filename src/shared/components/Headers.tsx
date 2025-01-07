
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import { NavLink } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { Button } from '@mui/material';
import Cart from './../../assets/cart.gif'
import './style.css'

const Headers = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark" style={{ height: "60px" }}>
                <Container>
                    <NavLink to="/" className="text-decoration-none text-light mx-3">Add to Cart</NavLink>
                    <Nav className="me-auto">
                        <NavLink to="/" className="text-decoration-none text-light mx-3">Home</NavLink>

                    </Nav>
                    <Badge badgeContent={4} color="primary"
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >
                        <ShoppingCartIcon style={{ color: "#fff", fontSize: 30, cursor: "pointer" }} />
                    </Badge>

                </Container>
            </Navbar>

            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <div className='card_details d-flex justify-content-center align-items-center' style={{ width: "24rem", padding: 10, position: "relative" }}>

                    <Button onClick={handleClose} style={{ position: "absolute", top: 2, right: 20,}}>   <CloseIcon style={{fontSize: 23, cursor: "pointer" }} /></Button>

                    <p style={{ fontSize: 22 }}>Your carts is empty</p>
                    <img src={Cart} alt="" className='emptycart_img' style={{ width: "5rem", padding: 10 }} />
                </div>
            </Menu>

        </>
    )
}

export default Headers
