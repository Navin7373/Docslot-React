import photo from "./assets/img1.png";

function File1({ image = photo, Head = "Default heading", para }) {
    return (

        <div className="who-card" style={{ border: "solid", textAlign: "center", marginTop: "20px", borderRadius: "20px", overflow: "hidden" }}>
            <img src={image} alt="" style={{ borderTopLeftRadius: "20px", borderTopRightRadius: "20px" }} />
            <h3>{Head}</h3>
            <p>{para}</p>
        </div>
    


    )
}
export default File1