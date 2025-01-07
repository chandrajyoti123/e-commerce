

import Table from 'react-bootstrap/Table'

const CardsDetail = () => {
    return (
        <>
            <div className="container mt-2">
                <h2 className='text-center'>Iteams Details Page
                </h2>

                <section className='container mt-3'>
                    <div className="iteamsdetails">


                        <div className="items_img">
                            <img src={'https://b.zmtcdn.com/data/pictures/9/18857339/8f53919f1175c08cf0f0371b73704f9b_o2_featured_v2.jpg?output-format=webp'} alt="" />
                        </div>

                        <div className="details">
                            <Table>
                                <tr>
                                    <td>
                                        <p> <strong>Restaurant</strong>  : Massala Theoryy</p>
                                        <p> <strong>Price</strong>  : ₹350</p>
                                        <p> <strong>Dishes</strong>  : North Indian, Biryani, Mughlai</p>
                                        <p> <strong>Total</strong>  :₹  350</p>
                                        <div className='mt-5 d-flex justify-content-between align-items-center' style={{ width: 100, cursor: "pointer", background: "#ddd", color: "#111" }}>
                                            <span style={{ fontSize: 24 }}>-</span>
                                            <span style={{ fontSize: 22 }}>1</span>
                                            <span style={{ fontSize: 24 }}>+</span>

                                        </div>

                                    </td>
                                    <td>
                                        <p><strong>Rating :</strong> <span style={{ background: "green", color: "#fff", padding: "2px 5px", borderRadius: "5px" }}>3.8★	</span></p>
                                        <p><strong>Order Review :</strong> <span >1175 + order placed from here recently	</span></p>
                                        <p><strong>Remove :</strong> <span ><i className='fas fa-trash' style={{ color: "red", fontSize: 20, cursor: "pointer" }}></i>	</span></p>
                                    </td>
                                </tr>
                            </Table>
                        </div>
                    </div>




            
        </section >
    </div >
  </>
  )
}

export default CardsDetail
