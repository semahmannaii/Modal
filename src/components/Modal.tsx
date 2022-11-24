import Monster from "../assets/monster.jpg"

function Modal({ showModal, onClose }: any) {
    if (!showModal) return null

    return (
        <div onClick={onClose} className="overlay">
            <div onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => e.stopPropagation()} className="container">
                <img src={Monster} alt="Monster" />
                <div className="content">
                    <button className="close-btn" onClick={onClose}>X</button>
                    <div className="desc">
                        <h1>Monster</h1>
                        <p>The story revolves around Kenzo Tenma, a Japanese surgeon living in Düsseldorf, Germany whose life enters turmoil after getting himself involved with Johan Liebert, one of his former patients, who is revealed to be a dangerous serial killer.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal