import barista from "../images/barista.webp";

import barista3 from "../images/barista3.jpg";

const EventsClosed = () => {
  return (
    <>
      <h1 className="text-5xl pl-10 pt-10">Events Closed</h1>
      
      <div className="grid grid-cols-2 p-10">
        <div>
          <img src={barista} className="h-64"/>
          <p>Bezzera Latte Art competition</p>
          <p>20 Feb 2023</p>
        </div>

        <div className="mx-10">

          <img src={barista3} className="w-96 h-64"/>
          <p>Sensory and cupping class</p>
          <p>20 Mar 2023</p>
        </div>
      </div>
      
      <div className="grid grid-cols-3 p-10">
        <div>
          <img src={barista3} className="w-96" />
          <p>Public Cupping</p>
          <p>20 Feb 2023</p>
        </div>

        <div>
          <img src={barista3}  className="w-96"/>
          <p>Competitions and Showcases</p>
          <p>20 Mar 2023</p>
        </div>

        <div>
          <img src={barista3} className="w-96"/>
          <p>Arts and Coffee festival</p>
          <p>20 Mar 2023</p>
        </div>
        
      </div>
      <div className="flex justify-center">
      <button className="p-5 border-2 border-amber-200">Load more</button>
      </div>
    </>
  );
};

export default EventsClosed;
