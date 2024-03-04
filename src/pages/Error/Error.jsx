import "./Error.css";

export default function Error() {
  return (
    <>
      <div className="container">
        <div className="row">
          <span className="sofia-regular">Opps Sth Error...</span>

          <div className=" d-flex col-md-4">
            <img src="circle-xmark-regular.svg" />
          </div>
        </div>
      </div>
    </>
  );
}
