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
//ADD YOUR FIREBASE LINKS HERE
var user_name = localStorage.getItem("Username");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
function add_room(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Roomname = " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>";
      function redirectToRoomName(name){
            console.log(name);
            localStorage.setItem("room_name", name);
            window.location = "kwitter_page.html";
      }
      //End code
      });});}
getData();

function logout(){
      localStorage.removeItem("Username");
      localStorage.removeitem("room_name");
      window.location = "index.html";
}