import React, { useState } from 'react'
import "./quiz.scss"
import moment from 'moment';
export default function Quiz() {
    const [addNewQuiz, setAddNewQuiz] = useState(1)
    // const [filteredIndex, setFilteredIndex] = useState([])
    const [show, setshow] = useState(false)
    const [name, setName] = useState('')
    var mcq = []
    var date = moment().format('MMMM Do YYYY, h:mm:ss a');
    const item = { name, mcq, date }
    const [submited, setSubmited] = useState('')

    // api
    
    const handleSubmit = (e) => {
        e.preventDefault()
        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', token: JSON.parse(localStorage.getItem('login')).token },
            body: JSON.stringify(item)
        };

        fetch('https://edu-project.onrender.com/quiz/add', options)
            .then(response => response.json())
            .then(response => {console.log(response);setSubmited(response.value);console.log(submited)})
            .catch(err => console.error(err));
    }
    const add = (e) => {
        e.preventDefault()
        const data = new FormData(e.target)
        const getdata = Object.fromEntries(data.entries())
        return (
            mcq.some((c) => c.question === getdata.question) ? mcq : mcq.push(getdata)
        )
    }
    return (
        <div className="quiz">
            <div className="main-container">
                {submited==='done' && (
                <div className="submited"><p>Submited Successfully</p></div>
                )}
                <div className="buttons">
                    {!show && (
                        <button onClick={() => setshow(true)}>Add Quiz</button>
                    )}
                    {show && (
                        <button onClick={handleSubmit}>Submit All</button>
                    )}
                    {show &&(
                    <button onClick={() => { setshow(false); mcq = []; setAddNewQuiz(1);setSubmited('') }}>New Quiz</button>
                    )}
                </div>
                <div className="quistion-container">
                    <div className="heading">
                        <h1>Create A New Quiz</h1>
                        {show && (
                            <input type="text" placeholder="Enter Quiz Name" onChange={(e) => setName(e.target.value)} />
                        )}
                        {!show && (
                            <input type="text" placeholder="Enter Number Of Quistions" onChange={(e) => setAddNewQuiz(Number(e.target.value))} />
                        )}
                    </div>
                    {show && isNaN(addNewQuiz) ? (setshow(false)) : show && typeof addNewQuiz === 'number' ? [...Array(!isNaN(addNewQuiz) ? addNewQuiz : 1)].map((item, i) => {
                        return (
                            <div className="item" key={i}>
                                <h1>QU {i + 1}</h1>
                                <form onSubmit={add}>
                                    <input className="enter" name='question' type="text" placeholder="Enter The Quistion" />
                                    <input type="text" name={`answer1`} placeholder="1-answer" />
                                    <input type="text" name={`answer2`} placeholder="2-answer" />
                                    <input type="text" name={`answer3`} placeholder="3-answer" />
                                    <input type="text" name={`answer4`} placeholder="4-answer" />
                                    <input type="text" name={`answer`} placeholder="answer" />
                                    <button className="add">Add</button>
                                    {/* <button className="delete" onClick={() => {setFilteredIndex([...filteredIndex, i]);mcq.filter(b=>b.question===)}}>Delete</button> */}
                                </form>
                                <hr />
                            </div>
                        )
                    })
                        // .filter((_, index) => !(filteredIndex.includes(index)))
                        : <p className="wrong">please enter a number</p>
                    }
                </div>
            </div>
        </div>
    )
}
