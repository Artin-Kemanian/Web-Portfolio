function Contact() {
    // function desaparecerPlaceholder() {
    //     var noPlaceholder = document.getElementsByName("placeholder");
    //     var siInput = document.getElementsByTagName("Input")
    //     var siTextarea = document.getElementsByTagName("Textarea");
      
    //     if (siInput || siTextarea != "") {
    //       noPlaceholder.textContent = ""
    //     }
    //   }
    // desaparecerPlaceholder()
    return (
        <section className="contact" id="contact">
            <h2>Contáctame</h2>
            <div className="contact-form-container">
                <div className="contact-form">
                    <form action="https://formspree.io/f/xvgprnrd" method="POST">
                        <div className="form-control">
                            <label htmlFor="name">Nombre</label>
                            <input type="text" id="name" name="sender-name" placeholder="Insertar nombre" className="input-field" required />
                        </div>
                        <div className="form-control">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="sender-email" placeholder="Insertar email" className="input-field" required />
                        </div>
                        <div className="form-control">
                            <label htmlFor="message">Mensaje</label>
                            <textarea id="message" cols="60" rows="10" placeholder="Escriba su mensaje" name="message" className="input-field" required ></textarea>
                        </div>
                        <input type="submit" value="Submit" id="submit-btn" className="submit-btn" />
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact