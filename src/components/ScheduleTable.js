import React from "react";

const ScheduleTable = (schedule) => {
  return (<table className="table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Mobile number</th>
        <th>Time</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      {
        schedule && schedule.list.length > 0
          ? schedule.list.map((item, index) => {
            return (<tr key={index}>
              <td>{item.name}</td>
              <td>{item.mobileNumber}</td>
              <td>{item.time}</td>
              <td>{item.text}</td>
            </tr>);
          })
          : null
      }

    </tbody>
  </table>);

}

export default ScheduleTable;
