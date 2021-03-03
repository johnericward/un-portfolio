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



});