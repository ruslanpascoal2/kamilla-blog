import { Modal } from "../layout/Modal";
import { AiOutlineCloseSquare } from "react-icons/ai"
import { GiCircle } from "react-icons/gi"

export default function Menu(props) {
    return (
        <div>
          
                <Modal size={{ h: '100vh', w: '100vw' }} background="#0165fe" >
                    <div className="p-3">
                        <div className="flex justify-end">
                            <a onClick={props.changed} role="button"> <AiOutlineCloseSquare className="text-white text-4xl" /></a>
                        </div>
                        <section className="h-screen w-full flex justify-center items-center">
                            <ul className="pb-40 space-y-4  w-full">
                                <li className="text-5xl p-2 flex items-center space-x-4" style={menuStyle}>
                                    <GiCircle className="text-light text-xl" />
                                    <a role="button">Blog</a>
                                </li>
                                <li className="text-5xl p-2 flex items-center space-x-4" style={menuStyle}>
                                    <GiCircle className="text-light text-xl" />
                                    <a role="button">Sobre</a>
                                </li>
                                <li className="text-5xl p-2 flex items-center space-x-4" style={menuStyle}>
                                    <GiCircle className="text-light text-xl" />
                                    <a role="button">Contato</a>
                                </li>
                            </ul>
                        </section>
                    </div>
                </Modal>
      
        </div>
    )
}

export const menuStyle = {
    color: "white",
    width: "100%",
}