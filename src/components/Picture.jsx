import jsonFile from '../assets/jsonIcon.webp'
import pdfFile from '../assets/pdfIcon.webp'
import textFile from '../assets/textIcon.webp'

const Picture = ({ file="" }) => {
    let pic = "";

    switch (file) {
        case "application/pdf":
            pic = pdfFile
            break
        case "text/plain":
            pic = textFile
            break
        case "application/json":
            pic = jsonFile
            break
        default:
            break
    }

    return (
        <img src={pic} />
    )
}

export default Picture;