import photo from "./assets/img1.png";

function File1({ image = photo, Head = "Default heading", para }) {
    return (

        <div style={{ height: "400px", width: "350px", border: "solid", textAlign: "center", marginTop: "20px",borderRadius:"20px" }}>
            <img src={image} height="300px" width="345px" style={{borderTopLeftRadius:"20px",borderTopRightRadius:"20px"}} />
            <h3>{Head}</h3>
            <p>{para}</p>
        </div>
    


    )
}
export default File1