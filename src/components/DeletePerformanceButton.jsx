import axios from "axios";

function DeletePerformance({ performanceId, urlAPI, navigate }) {

    console.log(performanceId)

  const deletePerformance = (e) => {
    e.preventDefault();

  const confirmDelete = window.confirm(
    "Are you sure you want to delete this event?"
  );

  if (confirmDelete) {
    axios
      .delete(`${urlAPI}/api/performances/${performanceId}`)
      .then((response) => {
        console.log("Event successfully removed");
        console.log(response);
        navigate(`/performances`);
      })
      .catch((error) => {
        console.log("Error deleting from the API..." + error);
      });
  }
  }
  
  

  return <button onClick={deletePerformance}>Delete Performance</button>;
}

export default DeletePerformance;
