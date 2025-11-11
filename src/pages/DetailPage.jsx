import { useState } from "react";



const DetailPage = () => {
    return (  

       <section className="Project1">
        <img src="public/project_1.png" alt="project1"  className="left-img"/>
        <img src="public/project_2.png" alt="project2"  className="right-img"/>  

        <h1 className="title">Escape Room in de ruimte</h1>
        <p>Ik heb  met 3 studenten een online escaperoom gemaakt based in de ruimte 
           en er waren in totaal 60 kamers en in elke kamer staan er vragen waar je minimaal 
           10 minuten hebt om ze te beantwoorden, 
           als je binnen 10 minuten de vragen niet kunt beantwoorden  ga je automatisch helemaal terug naar de start.
           Mijn taak was om 10 kamers te maken 
           met elke kamer een spel. Ik heb voornamelijk PHP gebruikt met deze opdracht
        </p>


       </section>

     
    );
};
 
export default DetailPage;