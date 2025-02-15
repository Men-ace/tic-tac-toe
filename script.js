body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    background-color: #f0f4f8;
    font-family: 'Arial', sans-serif;
}

.container {
    text-align: center;
}

.board {
    display: grid;
    grid-template-columns: repeat(3, 100px);
    grid-gap: 10px;
    margin: 20px auto;
}

.cell {
    width: 100px;
    height: 100px;
    background-color: #fff;
    border: 2px solid #333;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2.5em;
    cursor: pointer;
    border-radius: 10px;
    transition: background-color 0.3s;
}

.cell:hover {
    background-color: #e0e7ff;
}

.status {
    font-size: 1.5em;
    margin-bottom: 20px;
}

.reset-btn {
    padding: 10px 20px;
    font-size: 1em;
    border: none;
    border-radius: 5px;
    background-color: #007BFF;
    color: #fff;
    cursor: pointer;
    transition: background-color 0.3s;
}

.reset-btn:hover {
    background-color: #0056b3;
}