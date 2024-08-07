import "./SearchImage.css"

function ImageByCategory({imageCollage, altImg, style}){
    return(
        <>
            <img className="collage" style={style} src={`./src/assets/images/${imageCollage}.jpg`} alt={altImg} />
        </>
    )
}

export {ImageByCategory}