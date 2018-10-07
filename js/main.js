function showMood() {
    name = document.getElementById('name').value;
    mood = document.getElementById('mood').value;
    if (!name || !mood) {alert("plaese fill in all fields");
      return false;  
    }
    if (mood == "happy"){
        face = ":)";
    } 
    else if (mood == "sad"){
        face = ":(";
    }
    else {
        face = ":|";
    }           
    
    moodstring= name+" is "+mood+" today "+face;
    
    holder = document.getElementById('holder');
    
    holder.innerHTML = moodstring;

}
function clearMood() {
    document.getElementById("Moodform").rest;
    holder = document.getElementById('holder');
    
    holder.innerHTML = "";
   
}