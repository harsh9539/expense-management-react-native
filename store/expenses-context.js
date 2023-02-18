import { createContext, useReducer } from "react";

const DUMMY_EXPENSES = [
    {
        id:'e1',
        description:'A pair of Shoes',
        amount: 59.99,
        date: new Date('2022-01-19')
    },
    {
        id:'e2',
        description:'A pair of trousers',
        amount: 39.99,
        date: new Date('2021-01-19')
    },
    {
        id:'e3',
        description:'Some Bananas',
        amount: 5.99,
        date: new Date('2022-06-19')
    },
    {
        id:'e4',
        description:'A book',
        amount: 29.99,
        date: new Date('2022-09-19')
    },
    {
        id:'e5',
        description:'Keyboard',
        amount: 89.99,
        date: new Date('2022-12-19')
    },
    {
        id:'e6',
        description:'A pair of Shoes',
        amount: 59.99,
        date: new Date('2023-02-14')
    },
    {
        id:'e7',
        description:'A pair of trousers',
        amount: 39.99,
        date: new Date('2023-02-16')
    },
    {
        id:'e8',
        description:'Some Bananas',
        amount: 5.99,
        date: new Date('2022-06-19')
    },
    {
        id:'e9',
        description:'A book',
        amount: 29.99,
        date: new Date('2022-09-19')
    },
    {
        id:'e10',
        description:'Keyboard',
        amount: 89.99,
        date: new Date('2022-12-19')
    },
]


export const ExpensesContext = createContext({
    expenses: [],
    addExpense: ({ description, amount, date }) => { },
    deleteExpense: (id) => { },
    updateExpense: (id, { description, amount, date }) => { },
});



function expenseReducer(state, action) {
    switch (action.type) {
        case 'ADD':
            const id = new Date().toString() + Math.random().toString();
            return [{...action.payload,id:id},...state];
        case 'UPDATE':
            const updateExpenseIndex = state.findIndex((expense)=>expense.id === action.payload.id);
            const updateableExpense = state[updateExpenseIndex];
            const updateItem = {...updateableExpense,...action.payload.expenseData}
            const updatedExpenses = [...state];
            updatedExpenses[updateExpenseIndex] = updateItem;
            console.log(updatedExpenses)
            return updatedExpenses;
        case 'DELETE':
            return state.filter((expense)=>expense.id !== action.payload)
        default:
            return state;
    }
}



export default function ExpensesContextProvider({ children }) {
    const [expenseState, dispatch] = useReducer(expenseReducer,DUMMY_EXPENSES);

    function addExpense(expenseData) {
        dispatch({ type: 'ADD', payload: expenseData });
    }
    function deleteExpense(id) {
        dispatch({ type: 'DELETE', payload: id });
    }
    function updateExpense(id, expenseData) {
        dispatch({ type: 'UPDATE', payload: { id: id, expenseData: expenseData } });
    }

    const value = {
        expenses:expenseState,
        addExpense:addExpense,
        deleteExpense:deleteExpense,
        updateExpense:updateExpense
    }
    return (
        <ExpensesContext.Provider value={value}>
            {children}
        </ExpensesContext.Provider>
    )
}