//Get the name from begin page inputted there
window.addEventListener('load', () => {
    const k = sessionStorage.getItem('page');
    document.getElementById('result_name').innerHTML = k
    document.getElementById('score_name').innerHTML = k
    document.getElementById('conclusion_name').innerHTML = k
})


//hide all the contents except no. of rounds search button myform2
document.querySelector('.rps').style.display = 'none';
document.querySelector('#four').addEventListener('click', showBtn);
function showBtn(e) {
    document.querySelector('.rps').style.display = 'block';
    e.preventDefault();
}


// hide play_again, exit_game, conclusion, and the final_winner_of_game button
document.querySelector('.play_more').style.display = 'none';
document.querySelector('.end_game').style.display = 'none';
document.querySelector('.conclusion').style.display = 'none';
document.querySelector('#final_winner').style.display = 'none';


// hide submit button of no_of_rounds page
initial = document.querySelector('#four');
initial.addEventListener('click', () => {
    initial.style.display = "none";
})



function game() {

    // gets the name from begin page inputted there 
    const nem = sessionStorage.getItem('page');

    // hide the search button section for inputted_rounds   
    document.querySelector('#one').style.display = 'none';

    // collects the number of rounds to oplay
    var j = document.forms["myform2"]["nun"].value;
    if (j <= 0) {
        alert("Number of Rounds Cannot be ---> 0 \nEnter the Input Again.")
        window.location.reload();
    }


    // displays the moves left 
    document.querySelector(".mov_lft").innerHTML = j;
    let my_score = 0;
    let computer_score = 0;
    let total_moves = 0;

    // displays the move left is 0 for first interaction with page
    document.querySelector("#mine_score").innerText = `0`;



    // colects the button option for processing
    const rock_button = document.querySelector('#rock');
    const paper_button = document.querySelector('#paper');
    const scissor_button = document.querySelector('#scissor');
    const playerOptions = [rock_button, paper_button, scissor_button];
    // if clicked the any button from rock, paper, scissor , given below process will happen 
    playerOptions.forEach(option => {
        option.addEventListener('click', function () {

            // document.querySelector(".mov_lft").innerHTML = j;


            // collects the moves left number
            var move_left = document.querySelector(".mov_lft");
            total_moves++;
            // updatin the moves_left value after every click
            move_left.innerText = `${j - total_moves}`;


            // computer selecting the rock, paper and scissors option 
            var r = Math.floor(Math.random() * 3);
            if (r == 0) {
                computer = 'Scissor'
            }
            else if (r == 1) {
                computer = 'Rock'
            }
            else if (r == 2) {
                computer = 'Paper'
            }


            //  fuction for precessing the round winner by give computer and user choosen option 
            win_game(this.innerText, computer)

            // if moves_left becomes zero this step will run
            if (move_left.innerText == 0) {
                play_again(my_score, computer_score);
            }


            // displys the computer score and user score 
            var mysc = document.querySelector("#mine_score");
            mysc.innerText = `  ${my_score * 10}`;
            var comsc = document.querySelector("#com_score");
            comsc.innerText = `${computer_score * 10}`;


        })
    })

    // choosing the round winner
    function win_game(a, computer) {

        if (a == 'Rock') {
            document.getElementById("your_move").innerHTML = nem + " choose : <strong> <span id='here'> " + a + " </span></strong>";
            document.getElementById("computer_move").innerHTML = "Computer choosen  :  <strong> <span id='here'>" + computer + "</span> </strong>";
            if (a == 'Rock' && computer == 'Rock') {
                document.getElementById("round_winner").innerHTML = "Draw";
            }
            else if (a == 'Rock' && computer == 'Paper') {
                document.getElementById("round_winner").innerHTML = "Computer Won";
                computer_score++;
            }
            else if (a == 'Rock' && computer == 'Scissor') {
                document.getElementById("round_winner").innerHTML = nem + " Won";
                my_score++;
            }

        }
        else if (a == 'Paper') {
            document.getElementById("your_move").innerHTML = nem + " choose  :   <strong> <span id='here'>" + a + "</span> </strong>";
            document.getElementById("computer_move").innerHTML = "Computer choosen  :  <strong> <span id='here'>" + computer + "</span></strong>";
            if (a == 'Paper' && computer == 'Rock') {
                document.getElementById("round_winner").innerHTML = nem + " Won";
                my_score++;
            }
            else if (a == 'Paper' && computer == 'Paper') {
                document.getElementById("round_winner").innerHTML = "Draw";
            }
            else if (a == 'Paper' && computer == 'Scissor') {
                document.getElementById("round_winner").innerHTML = "Computer Won";
                computer_score++;
            }

        }
        else {
            document.getElementById("your_move").innerHTML = nem + " choose  :   <strong> <span id='here'> " + a + "</span> </strong>";
            document.getElementById("computer_move").innerHTML = "Computer choosen  : <strong> <span id='here'> " + computer + " </span> </strong>";
            if (a == 'Scissor' && computer == 'Rock') {
                document.getElementById("round_winner").innerHTML = "Computer Won";
                computer_score++;
            }
            else if (a == 'Scissor' && computer == 'Paper') {
                document.getElementById("round_winner").innerHTML = nem + " Won";
                my_score++;
            }
            else if (a == 'Scissor' && computer == 'Scissor') {
                document.getElementById("round_winner").innerHTML = "Draw";
            }
        }
    }

    // x is total my_score and y is total computer_score,
    // this function will run once the moves left value becomes zero
    function play_again(x, y) {

        // fetching the values 
        const nul_scor = document.querySelector("#nine1");
        const cm_sc = document.querySelector("#ten1");
        const mo_lt = document.querySelector("#ten2");
        const head = document.querySelector("#header");
        const ply_agn = document.querySelector(".play_more");
        const exit = document.querySelector(".end_game");
        const cnclsn = document.querySelector(".conclusion");
        const choose_button = document.querySelector(".chos_buton");

        // this will run automatically if the moves left value becomes 0
        playerOptions.forEach(option => {
            option.style.display = 'none';
            ply_agn.style.display = "block"
            exit.style.display = "block"
            final_winner.style.display = "block"
            your_move.style.display = "none"
            computer_move.style.display = "none"
            round_winner.style.display = "none"
            choose_button.style.display = "none"
        })

        // displaying the final winner 
        if (x === y) {
            document.querySelector("#final_winner").innerHTML = "Game Drawn";
            final_winner.style.fontSize = '20.5px';
            final_winner.style.fontWeight = '700'

        }
        else if (x > y) {
            document.querySelector("#final_winner").innerHTML = "Congratulation! ___<span id = 'no'>" + nem + "</span>___ Won the Game";
            final_winner.style.fontSize = '21.5px';
            no.style.color = 'red';
            no.style.fontWeight = '700'
            no.style.fontSize = '30.5px'
            final_winner.style.fontFamily = 'Cambria, Cochin, Georgia, Times, "Times New Roman", serif'

        }
        else {
            document.querySelector("#final_winner").innerHTML = " Opps!... Game Winner is : __<span id = 'no' >Computer </span>";
            no.style.color = 'red';
            no.style.fontSize = '30.5px'
            no.style.fontWeight = '700'
            final_winner.style.fontSize = '21.5px';
            final_winner.style.fontFamily = 'Cambria, Cochin, Georgia, Times, "Times New Roman", serif'

        }

        // if play_again option is clicked
        ply_agn.addEventListener('click', () => {
            window.location.reload();
        })

        // if exit option is clicked
        exit.addEventListener('click', () => {
            ply_agn.style.display = "none"
            exit.style.display = "none"
            final_winner.style.display = "none"
            nul_scor.style.display = "none"
            cm_sc.style.display = "none"
            mo_lt.style.display = "none"
            head.style.display = "none"
            cnclsn.style.display = "block";
            // window will close automatically after 2.5 seconds
            setTimeout("window.close()", 2500);
        })

    }
}