import axios from 'axios';


const BASE_URL = 'https://expense-management-b95c9-default-rtdb.firebaseio.com/'



export async function storeExpense(expenseData) {
    const response = await axios.post(`${BASE_URL}expenses.json`,
        expenseData)
    const id = response.data.name;
    console.log(response.data.name);
    return id;
    
}

export async function fetchExpenses() {
    const response = await axios.get(`${BASE_URL}expenses.json`);
    // console.log(response)
    const expenses = [];
    for (const key in response.data) {
        const { amount, date, description } = response.data[key];
        const expenseObj = {
            id: key,
            amount: amount,
            date: new Date(date),
            description: description
        }
        expenses.push(expenseObj);
    }
    return expenses;
}

export async function updateExpenseHdandler(id, expenseData) {
    return await axios.put(BASE_URL + `expenses/${id}.json`, expenseData);
}
export async  function deleteExpenseHandle(expenseId) {
    console.log(expenseId);
    return await axios.delete(BASE_URL + `expenses/${expenseId}.json`);
}