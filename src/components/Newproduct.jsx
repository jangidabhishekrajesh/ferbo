let Newproduct = () => {

    const newImages = [
        {
            img:"https://www.ikea.com/in/en/images/products/ditte-curtains-with-tie-backs-1-pair-light-blue__0891947_pe685389_s5.jpg",
            title:"Lorem Ipsum",
            price:"980/ mtr ",
        },
        {
            img:"https://www.sivyabyhome.com/image/cache/Shop%20the%20Inspiration/13-1400x1400-1400x1400.jpg",
            title:"Lorem Ipsum",
            price:"20/ mtr ",
        },
        {
            img:"https://5.imimg.com/data5/BA/MM/MY-21370921/windows-curtains-500x500.jpg",
            title:"Lorem Ipsum",
            price:"100/ mtr ",
        },
    ]
    return (
        <>
        <div className="container">
            <h6 className="mt-5">SELECT LINING FABRIC</h6>
            <div className="row mt-3">
                {newImages.map((Newproduct ,index) => (
                <div className="col-md-3" key={index}>
                    <div className="product">
                        <img src={Newproduct.img} style={{width:"100%", height:"100%"}} alt="" />
                        <h6 className="text-center mt-3">{Newproduct.title}</h6>
                        <center className="mt-1"><small>{Newproduct.price}</small>
                        <br />
                        <input className="checkbox" type="checkbox" />
                        </center>
                    </div>
                </div>
                ))}
            </div>
        </div>
        </>
    );
}
export default Newproduct;