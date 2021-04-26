import Job from "./Job";

const Jobs = (props) => {
  return (
    <div class="container">
      <Job
        className="red"
        title={"Full Time Sales Associate - Sydney Boutique"}
        contractType={"CDI"}
        country={"Australie"}
        city={"Sydney"}
      />
      <Job
        className="green"
        title={"Agent de Sécurité - Pantin"}
        contractType={"CDI"}
        country={"France"}
        city={"Pantin"}
      />
      <Job
        className="yellow"
        title={"Responsable d'Atelier (H/F)"}
        contractType={"CDI"}
        country={"France"}
        city={"Paris"}
      />
      <Job
        className="blue"
        title={"Chef de Projets"}
        contractType={"CDI"}
        country={"France"}
        city={"Paris"}
      />
      <Job
        className="beige"
        title={"Développeur React.js"}
        contractType={"CDI"}
        country={"France"}
        city={"Paris"}
      />
      <Job
        className="red"
        title={"Sales Associate Stockholm"}
        contractType={"CDI"}
        country={"Suède"}
        city={"Stockholm"}
      />
      <Job
        className="green"
        title={"Vendeur/se - Crans Montana"}
        contractType={"CDI"}
        country={"Suisse"}
        city={"Crans-Montana"}
      />
      <Job
        className="yellow"
        title={"CRM & Data Quality Analyst"}
        contractType={"CDI"}
        country={"USA"}
        city={"New York"}
      />
      <Job
        className="blue"
        title={"Infirmier (H/F)"}
        contractType={"CDI"}
        country={"France"}
        city={"Pantin"}
      />
    </div>
  );
};

export default Jobs;
