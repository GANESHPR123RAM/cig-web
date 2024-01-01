import React,{useState} from 'react'
import './Modal.css';


function ModalBox() {
    const [Showmodal, setShowmodal] = useState(false)
    const closeModal=()=>setShowmodal(false)
    const MyModal1 = () => {
        return (
            <>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur eum cum molestias minus atque, totam quo ipsum quis dignissimos nesciunt ullam sed minima velit distinctio eos quod voluptatibus cupiditate libero!</p>
                <button onClick={closeModal}>Accept</button>
            </>

        );
    };
    return (
        <>
            <button onClick={() => setShowmodal(true)}>ShowModal</button>
            {Showmodal && <MyModal1 closeModal={closeModal}/>}
        </>
    )

}

export default ModalBox
