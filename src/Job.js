const Job = (props) => {
  return (
    <div class="job">
      <div className={props.className}>
        <h3>{props.title}</h3>
        <div class="spans">
          <span>{props.contractType}</span> - <span>{props.country}</span> -{" "}
          <span>{props.city}</span>
        </div>
      </div>
    </div>
  );
};

export default Job;
