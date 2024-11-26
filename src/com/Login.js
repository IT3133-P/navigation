import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Login() {

    const data = [
        {userName:'mini', password:'mini123'},
        {userName:'thattaya', password:'thattaya123'}
    ]

    const [stuData, setStuData] = useState({
        userName:'',
        password:''
    })

    const [error, setError] = useState(null)

    function getDetails(e) {
        setError(null)
        const {name, value} = e.target;
        setStuData((pre) => (
            {
                ...pre,
                [name]:value
            }
        ))
    }

    const navigate = useNavigate()

    function login() {

        if(!stuData.userName || !stuData.password) {
            setError('Every field is required')
        }
        else {
            const res = data.some((stu) => stu.userName === stuData.userName && stu.password === stuData.password)
            if(res) {
                setError(null)
                navigate('/login-dash')
            }
            else {
                setError('Invalied UserName or Password')
            }
        }
    }

    return (
        <>
            <center>
                <h2>Login</h2>
                <hr></hr>

                UserName : <input type="text" name='userName' value={stuData.userName} onChange={getDetails}></input>
                <br></br>
                Password : <input type="text" name='password' value={stuData.password} onChange={getDetails}></input>
                <br></br>
                <button onClick={login}>Login</button>
                {
                    error ? (
                        <p>{error}</p>
                    ) : (
                        <></>
                    )
                }
            </center>
        </>
    )
}