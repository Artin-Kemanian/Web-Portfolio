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
        <section class="contact" id="contact">
            <h2>Contáctame</h2>
            <div class="contact-form-container">
                <div class="contact-form">
                    <form action="https://formspree.io/f/xyylnggw" method="POST">
                        <div class="form-control">
                            <label for="name">Nombre</label>
                            <input type="text" id="name" name="sender-name" placeholder="Insertar nombre" class="input-field" required />
                        </div>
                        <div class="form-control">
                            <label for="email">Email</label>
                            <input type="email" id="email" name="sender-email" placeholder="Insertar email" class="input-field" required />
                        </div>
                        <div class="form-control">
                            <label for="message">Mensaje</label>
                            <textarea id="message" cols="60" rows="10" placeholder="Escriba su mensaje" name="message" class="input-field" required ></textarea>
                        </div>
                        <input type="submit" value="Submit" id="submit-btn" class="submit-btn" />
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact