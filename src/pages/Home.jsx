const Home = () => {
  return (
    <section className="home-container">
      <img src="public/nikan.jpg" alt="Profiel foto" className="profile-pic" />

      <section className="home-text"> 
      <h1>Nikan Sartnipnia</h1>
      <h2>SOFTWARE DEVELOPER</h2>
      <p>Hoi! Ik ben Nikan, ik doe de opleiding software developer.  
        Ik studeer hoe ik moet coderen, websites ontwerpen, apps ontwikkelen en
         ik gebruik programmeertalen zoals JavaScript, HTML en CSS
      </p>

      <section className="home-button">
        <button className="btn">Contact Mij</button>
        <button className="btn btn-outline">Download CV</button>
      </section>
    </section>
    </section>
  );
};

export default Home;