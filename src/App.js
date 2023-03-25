import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/ExpenseItem';
// import './components/ExpensesItem'

function App() {
  const expenses = [
    {
      id: 'e1', title : 'Car Insurance', amount : 520.3, date : new Date(2023,3, 24),
    },
    {
      id: 'e2',title : 'New Desk', amount : 450.4, date : new Date(2023,3,25),
    },
    {
      id: 'e3',title : 'New TV', amount : 20.23, date : new Date(2023,3,26),
    },
    {
      id: 'e4',title : 'Toilet Paper', amount : 10.47, date : new Date(2023,3,27),
    }
  ];
  return (
  <div>
    <h2>Lets's Start!</h2>
  <ExpenseItem title= {expenses[0].title} amount= {expenses[0].amount} date={expenses[0].date} ></ExpenseItem>
  <ExpenseItem title= {expenses[1].title} amount= {expenses[1].amount} date={expenses[1].date}></ExpenseItem>
  <ExpenseItem title= {expenses[2].title} amount= {expenses[2].amount} date={expenses[2].date}></ExpenseItem>
  </div>
  );
}

export default App;

// function App() {

{/* <ExpenseIteam text = "abc"></ExpenseIteam> */}
{/* <ExpenseIteam text = "abc"></ExpenseIteam> */}

// </div>
//   return (
//     // <div className="App">
//     <div>
//       {/* <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p> */}
//         <h3>Let's get started!</h3>
//         <p>All the best! Do well.</p>
//         {/* <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         > */}
//           {/* VV Let's Learn React */}
//         {/* </a> */}
//       {/* </header> */}
//     </div>
//   );
// }

// export default App;
