const Contact = () => {
  return (
    <section className="app">
      <h1 className="title">Contact Ons</h1>
      <p>Hier kunt u ons contacteren.</p>


      <form>
        <label>Naam:</label>
        <input type="text" />


        <label>Email:</label>
        <input type="text" />




        <label>Bericht:</label>
        <input type="text" />


        <button>Verstuur</button>

        
      </form>




    </section>
  );
};

export default Contact;