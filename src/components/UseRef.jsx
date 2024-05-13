import { useRef, useState } from "react";

function UseRef() {
    const questions = [
        {
            question: "What is the national drink of Pakistan?",
            options: ["Green Tea", "Lassi", "Sugarcane Juice", "Rooh Afza"],
            correctAnswer: "Rooh Afza"
        },
        {
            question: "Which flower is the national flower of Pakistan?",
            options: ["Rose", "Jasmine", "Lily", "Sunflower"],
            correctAnswer: "Jasmine"
        },
        {
            question: "What is the national animal of Pakistan?",
            options: ["Markhor", "Snow Leopard", "Lion", "Peacock"],
            correctAnswer: "Markhor"
        },
        {
            question: "Which of the following is the national bird of Pakistan?",
            options: ["Sparrow", "Parrot", "Chukar", "Crow"],
            correctAnswer: "Chukar"
        },
        {
            question: "Which tree is the national tree of Pakistan?",
            options: ["Banyan Tree", "Neem Tree", "Deodar", "Oak Tree"],
            correctAnswer: "Deodar"
        },
        {
            question: "What is the national sport of Pakistan?",
            options: ["Cricket", "Hockey", "Football", "Polo"],
            correctAnswer: "Hockey"
        },
        {
            question: "Which mountain range runs through Pakistan and is famous for its scenic beauty and biodiversity?",
            options: ["Himalayas", "Andes", "Karakoram", "Alps"],
            correctAnswer: "Karakoram"
        },
        {
            question: "What is the national anthem of Pakistan called?",
            options: ["Jana Gana Mana", "Qaumi Taranah", "Vande Mataram", "Sare"],
            correctAnswer: "Qaumi Taranah"
        }
    ];

    const [questionIndex, setQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState("");
    const score = useRef(0);

    const handleNext = () => {
        if (selectedAnswer === questions[questionIndex].correctAnswer) {
            score.current++;
        }
        setSelectedAnswer("");
        setQuestionIndex(questionIndex + 1);
    };

    const handleAnswer = (e) => {
        setSelectedAnswer(e.target.value);
    };

    const handleRestart = () => {
        setQuestionIndex(0);
        setSelectedAnswer("");
        score.current = 0;
    };
    return (
        <div className="mx-10 shadow-md rounded-lg p-4 my-8 bg-gray-800">
            <h1 className="text-white text-center my-3 text-3xl font-serif">useRef Hook</h1>
            {questionIndex < questions.length ? (
                <div className="bg-blue-100 rounded p-5">
                    <h3 className="text-2xl">Q no. {questionIndex + 1}: {questions[questionIndex].question}</h3>
                    {questions[questionIndex].options.map((option, index) => (
                        <div key={index}>
                            <label htmlFor={`option${index}`} className="cursor-pointer">{option}</label>
                            <input
                                type="radio"
                                className="p-2 rounded shadow bg-green-200 m-2 hover:bg-green-300"
                                value={option}
                                onChange={handleAnswer}
                                name="options"
                                id={`option${index}`}
                                checked={selectedAnswer === option}
                                required
                            />
                        </div>
                    ))}
                    <button className="py-2 rounded shadow bg-blue-500 hover:bg-blue-700 text-white px-5" onClick={handleNext} disabled={selectedAnswer === ""}>Next</button>
                </div>
            ) : (
                <div className="bg-blue-100 rounded p-5">
                    <p>Your score is {score.current}</p>
                    <button className="p-2 rounded shadow bg-blue-500 m-2 px-3" onClick={handleRestart}>Restart</button>
                </div>
            )}
        </div>
    );
}

export default UseRef;
