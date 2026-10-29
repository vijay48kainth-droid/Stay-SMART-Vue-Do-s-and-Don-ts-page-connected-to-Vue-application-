
function threatsVerification(threats) {

    if (threats.length === 0) {
        console.log("threat is empty.")
        
        return false

    } else {
        return true
    }
    
}

function nameVerification(name){
    if (name === ""){
        
        return false
    } else if (name[0] >= "A" && name[0] <= "Z"){
        return true
    } else {
        return false
    }
}


function othernameVerification(othername){
    return true
}

function dateVerification(date){
    if (date !== "" ){
        // This line uses a JS function to get the current date and turn it into a string
        const today = new Date().toISOString().split("T")[0];
            
        if (date > today) {
            
            return false
        } else { // This else means the date is in the past
            return true
        }
    } else { 
        return true 
    }
}

function incidentVerification(incident){
    if (incident.length > 1000){
        return false
    } else{
        return true
    }
}

function emailVerification(email){
    if (email === "" || !email.includes("@")){
        return false
    } if (!email.endsWith(".com") && (!email.endsWith(".co.uk") && (!email.endsWith(".org")))){
        return false
    } else {
        return true
    }
}

function phoneVerification(phone){
    if (phone.length > 0) {
        if (!phone.startsWith("44") && !phone.startsWith("01") && !phone.startsWith("02")){
             return false
        }
        return true // Phone number has an accepted beginning number
    } else {
        return true // The phone number is empty
    }
}

function adviceOrAssistanceVerification(adviceOrAssistance){
    if (
        adviceOrAssistance === "Advice" ||
        adviceOrAssistance === "Assistance"
    ){
        return true
    } else {
        return false
    }
}


    module.exports = {
        threatsVerification,
        nameVerification,
        othernameVerification,
        dateVerification,
        incidentVerification,
        emailVerification,
        phoneVerification,
        adviceOrAssistanceVerification
    }
