import './ExpenseItem.css';

function ExpenseItem(props) {
    const expenseDate = new Date(2023,3,24);
    const expenseTitle = 'Car Insurance';
    const expenseAmount = 430.23;
    return( 
    <div className="expense-item">
    <div> {expenseDate.toUTCString()} </div>
    <div className='expense-item__description'> 
    <h2> {expenseTitle}</h2>

    <div className='expense-item__price'> {expenseAmount} </div>
    </div>
    </div> 
    )
}

export default ExpenseItem;