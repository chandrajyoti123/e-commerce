

import Table from 'react-bootstrap/Table'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react';
import { ADD, DLT, REMOVE } from '../../redux/actions/action';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';


const CardsDetail = () => {
    const navigate=useNavigate()
    const [data, setData] = useState([]);
    const { id } = useParams();
    const getdata = useSelector((state: any) => state.cartreducer.carts);
    const compare = () => {
        let comparedata = getdata.filter((e: any) => {
            return e.id == id
        });
        setData(comparedata);
    }
    useEffect(() => {
        compare();
    }, [id])

    const dispatch = useDispatch();
    
    const dlt = (id: number) => {
        dispatch(DLT(id))
        navigate("/")
    }

    const send = (e:any)=>{
        // console.log(e);
        dispatch(ADD(e));
      }

      const remove = (item:any)=>{
        dispatch(REMOVE(item))
      }
    return (
        <>
            <div className="container mt-2">
                <h2 className='text-center'>Iteams Details Page
                </h2>

                <section className='container mt-3'>
                    <div className="iteamsdetails">
                        {
                            data.map((ele: any) => {
                                return (
                                    <>
                                        <div className="items_img">
                                            <img src={ele.imgdata} alt="" />
                                        </div>

                                        <div className="details">
                                            <Table>
                                                <tr>
                                                    <td>
                                                        <p> <strong>Restaurant</strong>  : {ele.rname}</p>
                                                        <p> <strong>Price</strong>  : ₹{ele.price}</p>
                                                        <p> <strong>Dishes</strong>  : {ele.address}</p>
                                                        <p> <strong>Total</strong>  :₹  {ele.price * ele.qnty}</p>
                                                        <div className='mt-5 d-flex justify-content-between align-items-center' style={{ width: 100, cursor: "pointer", background: "#ddd", color: "#111" }}>
                                                            <span style={{ fontSize: 24 }} onClick={ele.qnty <= 1 ? () => dlt(ele.id) : () => remove(ele)}>-</span>
                                                            <span style={{ fontSize: 22 }}>{ele.qnty}</span>
                                                            <span style={{ fontSize: 24 }} onClick={() => send(ele)}>+</span>

                                                        </div>

                                                    </td>
                                                    <td>
                                                        <p><strong>Rating :</strong> <span style={{ background: "green", color: "#fff", padding: "2px 5px", borderRadius: "5px" }}>{ele.rating} ★	</span></p>
                                                        <p><strong>Order Review :</strong> <span >{ele.somedata}	</span></p>
                                                        <p><strong>Remove :</strong>
                                                            <span >
                                                                <td className='mt-5' onClick={() => dlt(ele.id)}>
                                                                    <DeleteIcon style={{ color: "red", fontSize: 20, cursor: "pointer" }} />
                                                                </td>

                                                            </span>
                                                        </p>
                                                    </td>
                                                </tr>
                                            </Table>
                                        </div>

                                    </>
                                )
                            })
                        }
                    </div>
                </section>
            </div >
        </>
    )
}

export default CardsDetail
