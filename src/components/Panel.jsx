let Panel = () => {

const panelImage = [
    {
        img:"https://m.media-amazon.com/images/I/81-y9dh8ecS._AC_SL1500_.jpg"
    },
    {
        img:"http://www.drawingforall.net/wp-content/uploads/2018/01/5-curtains-drawing.jpg"
    },
    {
        img:"https://media.istockphoto.com/vectors/open-window-white-frame-with-glass-and-curtains-interior-design-vector-id1221568471?k=20&m=1221568471&s=612x612&w=0&h=Bx_x3xjF_aotuxYhK4x7_EUtfBEpQDN3kC87FiDUZyE="
    }
]

    return(
        <>
        <div className="container-fluid mb-5">
            <h6 className="mt-5 p-2 bg text-center">Estimated Price : 2500/-</h6>
            <div className="container">
                <h6 className="mt-5 p-2">SINGLE PANEL OR PAIR</h6>
                <div className="row">
                {panelImage.map((Panel ,index) => (
                    <div className="col-md-4 mt-5" key={index}>
                        <div className="product">
                            <img src={Panel.img} style={{width:"100%", height:"100%"}} alt="" />
                        </div>
                    </div>
                ))}
                </div>
            </div>
        </div>
        </>
    );
}
export default Panel;