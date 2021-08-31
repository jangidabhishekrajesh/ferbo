let Product = () => {

    const images = [
        {
            img:"https://rukminim1.flixcart.com/image/612/612/kn0n6a80/curtain/5/d/6/little-hearts-door-m1-rod-pocket-flipkart-smartbuy-original-imagfscydx5m4qps.jpeg",
            title:"Lorem Ipsum",
            price:"50/ mtr ",
        },
        {
            img:"https://m.media-amazon.com/images/I/91PqrCQszDL._SL1500_.jpg",
            title:"Lorem Ipsum",
            price:"499/ mtr ",
        },
        {
            img:"https://5.imimg.com/data5/BA/MM/MY-21370921/windows-curtains-500x500.jpg",
            title:"Lorem Ipsum",
            price:"99/ mtr ",
        },
        {
            img:"https://m.media-amazon.com/images/I/91PqrCQszDL._SL1500_.jpg",
            title:"Lorem Ipsum",
            price:"110/ mtr ",
        },
        {
            img:"https://5.imimg.com/data5/BA/MM/MY-21370921/windows-curtains-500x500.jpg",
            title:"Lorem Ipsum",
            price:"99/ mtr ",
        },
        {
            img:"https://stylesatlife.com/wp-content/uploads/2018/04/Top-Window-Curtain.jpeg",
            title:"Lorem Ipsum",
            price:"90/ mtr ",
        },
        {
            img:"https://pyxis.nymag.com/v1/imgs/174/aec/37f5fff5a0520bf51e8df364238afc1978-we-sheer.w600.jpg",
            title:"Lorem Ipsum",
            price:"40/ mtr ",
        },
        {
            img:"https://5.imimg.com/data5/BA/MM/MY-21370921/windows-curtains-500x500.jpg",
            title:"Lorem Ipsum",
            price:"150/ mtr ",
        },
    ]
     
    return(
        <>
        <div className="container">
            <h6 className="mt-5">SELECT FABRIC</h6>
            <div className="row mt-3">
                {images.map((Product, index) => (
                <div className="col-md-3" key={index}>
                    <div className="product my-1">
                        <img src={Product.img} style={{width:"100%", height:"100%"}} alt=""/>
                        <h6 className="text-center mt-3">{Product.title}</h6>
                        <center className="mt-1"><small>{Product.price}</small>
                        <br />
                        <input className="checkbox" type="checkbox"/>
                        </center>
                    </div>
                </div>
                ))}
            </div>
        </div>
        </>
    );
}
export default Product;