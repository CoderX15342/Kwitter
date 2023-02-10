//YOUR FIREBASE LINKS
const firebaseConfig = {
      apiKey: "AIzaSyACKPMe5LRi5k2ey0QbrJkqmI45xoh8d7E",
      authDomain: "kwitterdatabase-ca26d.firebaseapp.com",
      databaseURL: "https://kwitterdatabase-ca26d-default-rtdb.firebaseio.com",
      projectId: "kwitterdatabase-ca26d",
      storageBucket: "kwitterdatabase-ca26d.appspot.com",
      messagingSenderId: "1055446044661",
      appId: "1:1055446044661:web:b97980232ce20959bb5abc"
    };
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("Username");
    room_name = localStorage.getItem("room_name");
    
function send(){
msg = document.getElementById("msg").value; 
firebase.database().ref(room_name).push({
      name: user_name,
      message:msg,
      like:0
});
document.getElementById("msg").value = " ";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
var name = message_data['name'];
var message = message_data['message'];
var like = message_data['like'];
var name_with_tag = "<h4>" + name + "<img class='user_tick' src='tick.png'><h4>";
var message_with_tag = "<h4 class='message_h4'>" + message + "<h4>";
var like_with_tag = "<button class='btn btn-warning' id=" + firebase_message_id + " + value = " + like + "onclick = 'updateLike(this.id)'>";
var span_with_tag = "<span class='glyphicon glyphicon-thumbs-up' Like: " + like + "</span></button><hr>";
var rows = name_with_tag + message_with_tag + like_with_tag + span_with_tag;
document.getElementById("output").innerHTML += rows;
//End code
      }});});}
getData();
function updateLike(message_id){
      console.log("Clicked On Like Button: " + message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      update_likes = Number(likes) + 1;
      console.log(update_likes);
      firebase.database().ref(room_name).child(message_id).update({
            like: update_likes
      });
}
function logout(){
      localStorage.removeItem("Username");
      localStorage.removeItem("room_name");
      window.location.replace = ("index.html");
}

