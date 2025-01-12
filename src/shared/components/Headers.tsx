import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import { NavLink } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Button } from '@mui/material';
import Cart from './../../assets/cart.gif';
import Table from 'react-bootstrap/esm/Table';
import './style.css';
import { useDispatch, useSelector } from 'react-redux';
import DeleteIcon from '@mui/icons-material/Delete';
import { DLT } from '../../redux/actions/action';
import { Restaurant } from '../../data/CardsData';
const Headers: React.FC = () => {
    const [price,setPrice] = useState(0);
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        setAnchorEl(event.currentTarget);
    };


    const handleClose = () => {
        setAnchorEl(null);
    };

    const getdata = useSelector((state: any) => state.cartreducer.carts)
    const dispatch = useDispatch();
    const dlt = (id: number) => {
        dispatch(DLT(id))
    }

    const total = ()=>{
        let price = 0;
        getdata.map((ele:any)=>{
            price = ele.price * ele.qnty + price
        });
        setPrice(price);
    };

    useEffect(()=>{
        total();
    },[total])


    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark" style={{ height: "60px" }}>
                <Container>
                    <NavLink to="/" className="text-decoration-none text-light mx-3">
                        Add to Cart
                    </NavLink>
                    <Nav className="me-auto">
                        <NavLink to="/" className="text-decoration-none text-light mx-3">
                            Home
                        </NavLink>
                    </Nav>
                    <Badge
                        badgeContent={getdata.length}
                        color="primary"
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


                {
                    getdata.length ?
                        <div className='card_details' style={{ width: "24rem", padding: 10 }}>
                            <Table>
                                <thead>
                                    <tr>
                                        <th>Photo</th>
                                        <th>Restaurant Name</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        getdata.map((e: Restaurant) => {
                                            return (
                                                <>
                                                    <tr>
                                                        <td>
                                                            <NavLink to={`/cart/${e.id}`} onClick={handleClose}>
                                                                <img src={e.imgdata} style={{ width: "5rem", height: "5rem" }} alt="" />
                                                            </NavLink>
                                                        </td>
                                                        <td>
                                                            <p>{e.rname}</p>
                                                            <p>Price : ₹{e.price}</p>
                                                            <p>Quantity : {e.qnty}</p>

                                                        </td>
                                                        <td className='mt-5' onClick={() => dlt(e.id)}>
                                                            <DeleteIcon style={{ color: "red", fontSize: 20, cursor: "pointer" }} />
                                                        </td>


                                                    </tr>
                                                </>
                                            )
                                        })
                                    }
                                    <p className='text-center'>Total :₹ {price}</p>
                                </tbody>
                            </Table>
                        </div> :

                        <div
                            className="card_details d-flex justify-content-center align-items-center"
                            style={{
                                width: "24rem",
                                padding: 10,
                                position: "relative",
                            }}
                        >
                            <Button
                                onClick={handleClose}
                                style={{ position: "absolute", top: 2, right: 20 }}
                            >
                                <CloseIcon style={{ fontSize: 23, cursor: "pointer" }} />
                            </Button>
                            <p style={{ fontSize: 22 }}>Your cart is empty</p>
                            <img
                                src={Cart}
                                alt="Empty Cart"
                                className="emptycart_img"
                                style={{ width: "5rem", padding: 10 }}
                            />
                        </div>
                }


            </Menu>
        </>
    );
};

export default Headers;
