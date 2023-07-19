import React from 'react'

function ChatForm() {
    return (
        <form>
            <div className="form-group">
                <label htmlFor="exampleFormControlInput1">Sales Person Name</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Ted Lasso" />
            </div>
            <div className="form-group">
                <label htmlFor="exampleFormControlInput1">Sales Person Role</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Representante de Ventas" />
            </div>
            <div className="form-group">
                <label htmlFor="exampleFormControlInput1">Company Name</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Sleep Heaven" />
            </div>
            <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">Company Business</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Sleep Haven es una compañía de colchones premium que brinda...'></textarea>
            </div>
            <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">Company Values</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Nuestra misión en Sleep Haven es ayudar a las personas a lograr una mejor noche...'></textarea>
            </div>
            <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">Conversation Purpose</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Responder a las necesidades del cliente y buscar venderle uno de los colchones del catalogo'></textarea>
            </div>
        </form>
    )
}

export default ChatForm