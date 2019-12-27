
    // contains the questions
    questions = {};
    index = 0;

		// see dashboard https://jsonbox.io/dashboard.html?box=box_638e0bc908f98bdbc087
		// delete a row by ID: https://jsonbox.io/box_638e0bc908f98bdbc087/ID

    console.time("AJAX call");
		// get data from json database  -  ?q=sezione:01&#58;Costituzione
		let url = "https://jsonbox.io/box_638e0bc908f98bdbc087?q=sezione:*Costituzione";
		let record = {};
		fetch(url, {
			method: 'GET',
			cache: 'no-cache',
			headers: { 'Content-Type': 'application/json' }
		}).then(x => x.json())
    .then((myJson) => questions = myJson)
    .then(() => console.timeEnd("AJAX call"))
    //.then(() => console.table(questions))
    .then(() => ask())
    .catch( () => console.log('%c Ajax Error ', 'color: white; background-color: red',
        'error loading data')
    );

    function cleanAndRandomize() {
        let classesToRemove = ['btn-success', 'btn-danger', 'btn-outline-primary', 'btn-outline-info']

        // Get the paragraphs
        let a1 = document.getElementById("answer1");
        let a2 = document.getElementById("answer2");
        let a3 = document.getElementById("answer3");
        let a4 = document.getElementById("answer4");

        a1.classList.remove(...classesToRemove);
        a2.classList.remove(...classesToRemove);
        a3.classList.remove(...classesToRemove);
        a4.classList.remove(...classesToRemove);

        a1.classList.add('btn-outline-primary');
        a2.classList.add('btn-outline-info');
        a3.classList.add('btn-outline-primary');
        a4.classList.add('btn-outline-info');
    }

    function ask() {
        cleanAndRandomize();
        console.log("creating question from " + questions.length);

        index = Math.floor(Math.random() * questions.length);
        console.log("indice: " + index);
        let question = questions[index];
        console.log(question);

        // Get the paragraphs
        let q = document.getElementById("question");
        let a1 = document.getElementById("answer1");
        let a2 = document.getElementById("answer2");
        let a3 = document.getElementById("answer3");
        let a4 = document.getElementById("answer4");

        q.value = question.domanda;
        a1.value = question.risposta1;
        a2.value = question.risposta2;
        a3.value = question.risposta3;
        a4.value = question.risposta4;
    }

    function check(obj) {
        cleanAndRandomize();
        let question = questions[index];

        console.log("indice: " + index + ", risposta esatta: " + question.numRispostaEsatta);

        let a1 = document.getElementById("answer1");
        let a2 = document.getElementById("answer2");
        let a3 = document.getElementById("answer3");
        let a4 = document.getElementById("answer4");

        a1.classList.add(question.numRispostaEsatta == 1 ? "btn-success" : "btn-danger");
        a2.classList.add(question.numRispostaEsatta == 2 ? "btn-success" : "btn-danger");
        a3.classList.add(question.numRispostaEsatta == 3 ? "btn-success" : "btn-danger");
        a4.classList.add(question.numRispostaEsatta == 4 ? "btn-success" : "btn-danger");
    }
