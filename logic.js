document.addEventListener('DOMContentLoaded', function () {
    const answers = document.querySelectorAll('.answer-block');
    const finishBtn = document.querySelector('[data-finish]');
    const nextBtn = document.querySelector('[data-next]');
    let selectedAnswer = null;

    const results = {
        "result1": [
            "1,1,1,1,1", "1,1,1,1,2", "1,1,1,1,3",
            "1,1,1,2,1", "1,1,1,2,2", "1,1,1,2,3",
            "1,1,1,3,1", "1,1,1,3,2", "1,1,1,3,3",
            "1,1,2,1,1", "1,1,2,1,2", "1,1,2,1,3",
            "1,1,2,2,1", "1,1,2,2,2", "1,1,2,2,3",
            "1,1,2,3,1", "1,1,2,3,2", "1,1,2,3,3",
            "1,1,3,1,1", "1,1,3,1,2", "1,1,3,1,3",
            "1,1,3,2,1", "1,1,3,2,2", "1,1,3,2,3",
            "1,1,3,3,1", "1,1,3,3,2", "1,1,3,3,3",
            "1,2,1,1,1", "1,2,1,1,2", "1,2,1,1,3",
            "1,2,1,2,1", "1,2,1,2,2", "1,2,1,2,3",
            "1,2,1,3,1", "1,2,1,3,2", "1,2,1,3,3",
            "1,2,2,1,1", "1,2,2,1,2", "1,2,2,1,3",
            "1,2,2,2,1", "1,2,2,2,2", "1,2,2,2,3",
            "1,2,2,3,1", "1,2,2,3,2", "1,2,2,3,3",
            "1,2,3,1,1", "1,2,3,1,2", "1,2,3,1,3",
            "1,2,3,2,1", "1,2,3,2,2", "1,2,3,2,3",
            "1,2,3,3,1", "1,2,3,3,2", "1,2,3,3,3"
        ],

        "result2": [
            "3,1,1,1,2", "3,1,1,1,3", "3,1,1,2,2", "3,1,1,2,3", "3,1,1,3,2", "3,1,1,3,3",
            "3,1,2,1,2", "3,1,2,1,3", "3,1,2,2,2", "3,1,2,2,3", "3,1,2,3,2", "3,1,2,3,3",
            "3,1,3,1,2", "3,1,3,1,3", "3,1,3,2,2", "3,1,3,2,3", "3,1,3,3,2", "3,1,3,3,3",
            "3,2,1,1,2", "3,2,1,1,3", "3,2,1,2,2", "3,2,1,2,3", "3,2,1,3,2", "3,2,1,3,3",
            "3,2,2,1,2", "3,2,2,1,3", "3,2,2,2,2", "3,2,2,2,3", "3,2,2,3,2", "3,2,2,3,3",
            "3,2,3,1,2", "3,2,3,1,3", "3,2,3,2,2", "3,2,3,2,3", "3,2,3,3,2", "3,2,3,3,3",

            "3,1,1,1,2", "3,1,1,1,3", "3,1,1,2,2", "3,1,1,2,3", "3,1,1,3,2", "3,1,1,3,3",
            "3,1,2,1,2", "3,1,2,1,3", "3,1,2,2,2", "3,1,2,2,3", "3,1,2,3,2", "3,1,2,3,3",
            "3,1,3,1,2", "3,1,3,1,3", "3,1,3,2,2", "3,1,3,2,3", "3,1,3,3,2", "3,1,3,3,3",
            "3,2,1,1,2", "3,2,1,1,3", "3,2,1,2,2", "3,2,1,2,3", "3,2,1,3,2", "3,2,1,3,3",
            "3,2,2,1,2", "3,2,2,1,3", "3,2,2,2,2", "3,2,2,2,3", "3,2,2,3,2", "3,2,2,3,3",
            "3,2,3,1,2", "3,2,3,1,3", "3,2,3,2,2", "3,2,3,2,3", "3,2,3,3,2", "3,2,3,3,3"
        ],

        "result3": [
            "1,2,2,1,1", "1,2,2,1,2", "1,2,2,1,3",
            "1,2,2,3,1", "1,2,2,3,2", "1,2,2,3,3",
            "1,2,3,1,1", "1,2,3,1,2", "1,2,3,1,3",
            "1,2,3,3,1", "1,2,3,3,2", "1,2,3,3,3",
            "1,3,2,1,1", "1,3,2,1,2", "1,3,2,1,3",
            "1,3,2,3,1", "1,3,2,3,2", "1,3,2,3,3",
            "1,3,3,1,1", "1,3,3,1,2", "1,3,3,1,3",
            "1,3,3,3,1", "1,3,3,3,2", "1,3,3,3,3",
            "2,2,2,1,1", "2,2,2,1,2", "2,2,2,1,3",
            "2,2,2,3,1", "2,2,2,3,2", "2,2,2,3,3",
            "2,2,3,1,1", "2,2,3,1,2", "2,2,3,1,3",
            "2,2,3,3,1", "2,2,3,3,2", "2,2,3,3,3",
            "2,3,2,1,1", "2,3,2,1,2", "2,3,2,1,3",
            "2,3,2,3,1", "2,3,2,3,2", "2,3,2,3,3",
            "2,3,3,1,1", "2,3,3,1,2", "2,3,3,1,3",
            "2,3,3,3,1", "2,3,3,3,2", "2,3,3,3,3", "2,2,2,2,2"
        ],

        "result4": [
            "1,3,1,2,1", "1,3,1,2,2", "1,3,1,2,3",
            "1,3,1,3,1", "1,3,1,3,2", "1,3,1,3,3",
            "1,3,2,2,1", "1,3,2,2,2", "1,3,2,2,3",
            "1,3,2,3,1", "1,3,2,3,2", "1,3,2,3,3",
            "1,3,3,2,1", "1,3,3,2,2", "1,3,3,2,3",
            "1,3,3,3,1", "1,3,3,3,2", "1,3,3,3,3",
            "2,3,1,2,1", "2,3,1,2,2", "2,3,1,2,3",
            "2,3,1,3,1", "2,3,1,3,2", "2,3,1,3,3",
            "2,3,2,2,1", "2,3,2,2,2", "2,3,2,2,3",
            "2,3,2,3,1", "2,3,2,3,2", "2,3,2,3,3",
            "2,3,3,2,1", "2,3,3,2,2", "2,3,3,2,3",
            "2,3,3,3,1", "2,3,3,3,2", "2,3,3,3,3",
            "3,3,1,2,1", "3,3,1,2,2", "3,3,1,2,3",
            "3,3,1,3,1", "3,3,1,3,2", "3,3,1,3,3",
            "3,3,2,2,1", "3,3,2,2,2", "3,3,2,2,3",
            "3,3,2,3,1", "3,3,2,3,2", "3,3,2,3,3",
            "3,3,3,2,1", "3,3,3,2,2", "3,3,3,2,3",
            "3,3,3,3,1", "3,3,3,3,2", "3,3,3,3,3"
        ]
    };

    answers.forEach(block => {
        block.addEventListener('click', () => {
            answers.forEach(b => b.classList.remove('selected'));
            block.classList.add('selected');
            selectedAnswer = Number(block.dataset.answer);
            console.log(selectedAnswer);


            if (selectedAnswer !== null && selectedAnswer !== undefined && selectedAnswer !== "") {
                let currentQuestionIndex = parseInt(document.querySelector(".question").textContent.split("/")[0]) - 1;
                let allAnswers = JSON.parse(localStorage.getItem("milkaAnswers") || "[]");

                if (!Array.isArray(allAnswers)) {
                    allAnswers = [];
                }

                allAnswers[currentQuestionIndex] = selectedAnswer;
                localStorage.setItem("milkaAnswers", JSON.stringify(allAnswers));
            }
        });
    });


    if (nextBtn) {
        nextBtn.addEventListener('click', (e) => {
            let allAnswers = JSON.parse(localStorage.getItem("milkaAnswers") || "[]");

            if (!Array.isArray(allAnswers)) {
                allAnswers = [];
            }


            if (!allAnswers[selectedAnswer]) {
                e.preventDefault();
                alert("Please choose your answer ");
            }
        });
    }

    if (finishBtn) {
        finishBtn.addEventListener('click', (e) => {
            let allAnswers = JSON.parse(localStorage.getItem("milkaAnswers") || "[]");

            if (!Array.isArray(allAnswers)) {
                allAnswers = [];
            }


            if (allAnswers.filter(answer => answer !== null && answer !== undefined && answer !== "").length < 5) {
                e.preventDefault();
                alert("Please choose your answer ");
                return;
            }

            const resultKey = allAnswers.join(",");
            console.log("Final key:", resultKey);

            let resultPage = null;

            for (let [milkaType, combinations] of Object.entries(results)) {
                if (combinations.includes(resultKey)) {
                    resultPage = `${milkaType.toLowerCase().replace(/\s+/g, '-')}.html`;
                    break;
                }
            }

            if (!resultPage) {
                alert("Sorry, no matching result was found.");
            } else {
                window.location.href = `./${resultPage}`;
            }
        });
    }
});