// Your web app's Firebase configuration

// require('dotenv').config();
// process.env.API_KEY,



var firebaseConfig = {
    apiKey: "AIzaSyAIsrHea_coLIGflHeF3CmUUNy50Xzuddw",
    authDomain: "un-portfolio.firebaseapp.com",
    databaseURL: "https://un-portfolio.firebaseio.com",
    projectId: "un-portfolio",
    storageBucket: "un-portfolio.appspot.com",
    messagingSenderId: "646838695984",
    appId: "1:646838695984:web:152f7599c9e475b1fd95f5",
    measurementId: "G-SJC4FQQRVW"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Get a reference to the database service
var database = firebase.database();


$(document).ready(function () {
    var name = "";
    var email = "";
    var message = "";

    $('.submit-btn').on("click", function (e) {
        e.preventDefault();

        var newMessage = {
            name: $('.formNameEntry').val().trim(),
            email: $('.formEmailEntry').val().trim(),
            message: $('.formMessageEntry').val().trim()
        };

        $('input').val("");
        $('textarea').val("");

        database.ref().push(newMessage);

        console.log(newMessage);
        $(".successMessage").html("Message sent!");
    });

    database.ref().on("child_added", function (snapshot) {

        console.log(snapshot.val().name);
        console.log(snapshot.val().email);
        console.log(snapshot.val().message);

        // var tr = $("<tr>");

        // var tdName = $("<td>").text(snapshot.val().name);
        // var tdEmail = $("<td>").text(snapshot.val().email);
        // var tdMessage = $("<td>").text(snapshot.val().message);

        // tr.append(tdName).append(tdEmail).append(tdMessage);

        // $('.messages tbody').append(tr);

        // $(".messages").append(snapshot.val().name).append("  |  " + snapshot.val().email).append("  |  " + snapshot.val().message).append("<br><br>");


        $(".nameDrop").append("<span class='nameCol'>" + snapshot.val().name + "</span>").append("<br><br>");
        $(".emailDrop").append("<span class='emailCol'>" + snapshot.val().email + "</span>").append("<br><br>");
        $(".messageDrop").append("<span class='messageCol'>" + snapshot.val().message + "</span>").append("<br><br>");




    });

    // lightbox pop up beginning

    const lightbox = document.createElement('div')
    lightbox.id = 'lightbox'
    document.body.appendChild(lightbox)

    const images = document.querySelectorAll('.lightboxy')
    images.forEach(image => {
        image.addEventListener('click', e => {
            lightbox.classList.add('active')
            const img = document.createElement('img')
            img.src = image.src
            while (lightbox.firstChild) {
                lightbox.removeChild(lightbox.firstChild)
            }
            lightbox.appendChild(img)
        })
    })

    lightbox.addEventListener('click', e => {
        if (e.target !== e.currentTarget) return
        lightbox.classList.remove('active')
    })

    // lightbox pop up ending


    // -----------------------------------------------------------------------------
    // ------------------------ pokemon :) start -----------------------------------

    var p1Pokemon = $("#p1Pokemon");
    var cpuPokemon = $("#cpuPokemon");
    var attackButton1 = $("#attackButton1");
    var attackButton2 = $("#attackButton2");
    var attackButton3 = $("#attackButton3");
    var attackButton4 = $("#attackButton4");
    var p1HealthText = $("#p1HealthText");
    var p1Health = $("#p1Health");
    var cpuHealthText = $("#cpuHealthText");
    var cpuHealth = $("#cpuHealth");
    var messageBar = $("#messageBar");
    var messageBar2 = $("#messageBar2");
    var cpuAttack = [7, 10, 13, 15];



    var characters = {
        "p1": {
            name: "charizard",
            health: 100,
            attack1: 7,
            attack1pp: 30,
            attack2: 10,
            attack2pp: 10,
            attack3: 15,
            attack3pp: 3,
            attack4: 17,
            attack4pp: 3,
            
        },
        "cpu": {
            name: "mewtwo",
            health: 240,
            attack: 10,
            enemyAttackBack: 20
        },
       
    };

   


    $(document).on("click", ".pokemonBtn", function () {

        $(".build").hide();

        $(".p1Pokemon").append


    })








});