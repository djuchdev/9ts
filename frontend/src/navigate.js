import { useNavigate } from "react-router-dom"

function Navigate() {

    const navigate = useNavigate()

    function handleClick() {

        navigate("/verified")
    }

    handleClick()
}






export default Navigate