// import React from 'react';
// import { Badge, Calendar } from 'antd';
// import "./Availability.css";

// const getListData = (value) => {
//   const data = {
//     3: {
//       17: [
//         { type: 'warning', content: '7 Available.' },
//         { type: 'success', content: '5 not Available.' },
//       ],
//       18: [
//         { type: 'warning', content: '10 Available.' },
//         { type: 'success', content: '1 not Available.' },
//       ],
//       19: [
//         { type: 'warning', content: '11 Available.' },
//         { type: 'success', content: '1 not Available.' },
//       ],
//       20: [
//         { type: 'warning', content: '9 Available.' },
//         { type: 'success', content: '3 not Available.' },
//       ],
//     },
//     4: {
//       10: [
//         { type: 'warning', content: 'This is warning event.' },
//         { type: 'success', content: 'This is usual event.' },
//         { type: 'error', content: 'This is error event.' },
//       ],
//       16: [
//         { type: 'warning', content: 'This is warning event.' },
//         { type: 'success', content: 'This is usual event.' },
//         { type: 'error', content: 'This is error event.' },
//       ],
//     },
//     5: {
//       8: [
//         { type: 'warning', content: 'This is warning event' },
//         { type: 'success', content: 'This is very long usual event......' },
//         { type: 'error', content: 'This is error event 1.' },
//         { type: 'error', content: 'This is error event 2.' },
//         { type: 'error', content: 'This is error event 3.' },
//         { type: 'error', content: 'This is error event 4.' },
//       ],
//     },
//   };

//   return data?.[value.month()]?.[value.date()] || [];
// };

// const Availability = () => {
//   const dateCellRender = (value) => {
//     const listData = getListData(value);
//     return (
//       <ul className="events">
//         {listData.map((item) => (
//           <li key={item.content}>
//             <Badge status={item.type} text={item.content} />
//           </li>
//         ))}
//       </ul>
//     );
//   };

//   const cellRender = (current, info) => {
//     if (info.type === 'date') return dateCellRender(current);
//     return info.originNode;
//   };

//   return (
//     <div className="availability-container">
//       <h2 className="availability-heading">Availability</h2>
//       <Calendar cellRender={cellRender} />
//     </div>
//   );
// };

// export default Availability;


import React from 'react';
import { Badge, Calendar } from 'antd';
import "./Availability.css";

const getListData = (value) => {
  const dateKey = value.format('YYYY-MM-DD');
  const storedAvailability = JSON.parse(localStorage.getItem(dateKey)) || {};

  console.log(`Data for ${dateKey}:`, storedAvailability);

  const availableCount = Object.values(storedAvailability).filter(room => room.available).length;
  const notAvailableCount = Object.values(storedAvailability).filter(room => room.notAvailable).length;

  console.log(`Available: ${availableCount}, Not Available: ${notAvailableCount}`);

  const listData = [];
  if (availableCount > 0) {
    listData.push({ type: 'warning', content: `${availableCount} Available` });
  }
  if (notAvailableCount > 0) {
    listData.push({ type: 'error', content: `${notAvailableCount} Not Available` });
  }

  return listData;
};

const Availability = () => {
  const dateCellRender = (value) => {
    const listData = getListData(value);
    return (
      <ul className="events">
        {listData.map((item) => (
          <li key={item.content}>
            <Badge status={item.type} text={item.content} />
          </li>
        ))}
      </ul>
    );
  };

  const cellRender = (current, info) => {
    if (info.type === 'date') return dateCellRender(current);
    return info.originNode;
  };

  return (
    <div className="availability-container">
      <h2 className="availability-heading">Availability</h2>
      <Calendar cellRender={cellRender} />
    </div>
  );
};

export default Availability;
