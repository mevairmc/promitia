// Styles
import './styles/contactUs.css'

function Contact() {
  return (
    <div className="contact">
      <div className="contact__bg"></div>
      <div className="contact__container">
        
        <form className="contact__form">
          <h3 className="form__title">Habla con nostros</h3>
          <div>
            <select name="subject">
              <option select>Choose Subject</option>
              <option>test</option>
              <option>test2</option>
              <option>test3</option>
            </select>
          </div>
          <div className="form__group">
            <div className="form__field">
              <svg className="form__icon" viewBox="0 0 32 32"><path d="M26.249 28H5.753a.756.756 0 0 1-.75-.83C5.338 23.752 8.898 20 16 20s10.662 3.752 10.997 7.17a.756.756 0 0 1-.75.83zM16 18c-3.201 0-5.997-2.778-5.997-7.25 0-3.85 2.421-6.75 5.997-6.75s5.997 2.9 5.997 6.75c0 4.472-2.796 7.25-5.997 7.25z" fill-rule="evenodd"></path></svg>
              <input type="text" name="firstName" placeholder="First Name"/>
            </div>
            <div className="form__field">
            <svg className="form__icon" viewBox="0 0 32 32"><path d="M26.249 28H5.753a.756.756 0 0 1-.75-.83C5.338 23.752 8.898 20 16 20s10.662 3.752 10.997 7.17a.756.756 0 0 1-.75.83zM16 18c-3.201 0-5.997-2.778-5.997-7.25 0-3.85 2.421-6.75 5.997-6.75s5.997 2.9 5.997 6.75c0 4.472-2.796 7.25-5.997 7.25z" fill-rule="evenodd"></path></svg>
              <input type="text" name="lastName" placeholder="Last Name"/>
            </div>
          </div>
          <div className="form__group">
            <div className="form__field">
              <svg className="form__icon" viewBox="0 0 64 64" ><path d="M52 52h-3a1 1 0 0 1-1-1V17a1 1 0 0 1 1-1h3a4 4 0 0 1 4 4v28a4 4 0 0 1-4 4zm-7 0H19a1 1 0 0 1-1-1V17a1 1 0 0 1 1-1h2v-3a5 5 0 0 1 5-5h12a5 5 0 0 1 5 5v3h2a1 1 0 0 1 1 1v34a1 1 0 0 1-1 1zm-6-39a1 1 0 0 0-1-1H26a1 1 0 0 0-1 1v3h14zM8 48V20a4 4 0 0 1 4-4h3a1 1 0 0 1 1 1v34a1 1 0 0 1-1 1h-3a4 4 0 0 1-4-4z" fill-rule="evenodd"></path></svg>
              <input type="text" name="company" placeholder="Company"/>
            </div>
            <div className="form__field">
              <svg className="form__icon"  viewBox="0 0 64 64" ><path d="M50.12 51.722c-.255.791-1 1.32-1.83 1.301-3.608-.074-13.628-1.386-24.765-12.523-11.138-11.138-12.449-21.16-12.523-24.767a1.878 1.878 0 0 1 1.301-1.83l8.548-2.79a1.95 1.95 0 0 1 2.384 1.085l3.412 7.905a1.906 1.906 0 0 1-.39 2.11L22.25 26.22a.942.942 0 0 0-.22.998 23.338 23.338 0 0 0 5.769 9.008 23.341 23.341 0 0 0 9.006 5.768.944.944 0 0 0 1-.22l4.005-4.005a1.909 1.909 0 0 1 2.114-.39l7.904 3.412a1.948 1.948 0 0 1 1.084 2.38z" fill-rule="evenodd"></path></svg>
              <input type="tel" name="phone" placeholder="Phone"/>
            </div>
          </div>
          <div className="form__field--large">
            <svg  className="form__icon" viewBox="0 0 64 64"><path d="M53.02 14.007h-42a3 3 0 0 0-3 3v2.266a3 3 0 0 0 1.202 2.4l21.001 15.741c1.066.8 2.533.8 3.599 0L54.82 21.675a3 3 0 0 0 1.2-2.4v-2.268a3 3 0 0 0-3-3zm1.817 10.154L35.021 39.014a5 5 0 0 1-5.998 0L9.205 24.16a.74.74 0 0 0-1.184.592v22.256a3 3 0 0 0 3 3h42a3 3 0 0 0 3-3V24.753a.74.74 0 0 0-1.184-.592z" fill-rule="evenodd"></path></svg>
            <input type="email" name="Email" placeholder="Email"/>
          </div>
          <div className="form__field--large textarea" rows="4" cols="50">
            <svg className="form__icon" viewBox="0 0 32 32" ><path d="M16 27a12.782 12.782 0 0 1-2.345-.249 1.293 1.293 0 0 0-1.027.266 10.545 10.545 0 0 1-5.029 1.976.545.545 0 0 1-.508-.849 7.764 7.764 0 0 0 1.48-2.983.806.806 0 0 0-.301-.785A10.58 10.58 0 0 1 4 16C4 9.932 9.373 5 16 5s12 4.932 12 11-5.373 11-12 11zm5-12h-4v-4a1 1 0 1 0-2 0v4h-4a1 1 0 0 0 0 2h4v4a1 1 0 1 0 2 0v-4h4a1 1 0 1 0 0-2z" fill-rule="evenodd"></path></svg>
            <textarea name="message" placeholder="Message"/>
          </div>
          <div className="form__submit">
            <input type="submit"/>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;