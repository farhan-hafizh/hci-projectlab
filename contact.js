function onSubmitContact(){
    var form = document.contactUs;
    if(form.name.value === ''){
        alert('Name should be filled!');
        return false;
    } 
    if(form.email.value === ''){
        alert('Email should be filled!');
        return false;
    } else {
        let emailSplitted = form.email.value.split('@');
        if (emailSplitted.length<2) {
            alert('Email field should filled with email!');
            return false;
        }
        emailSplitted = emailSplitted[1].split(".")
        if (emailSplitted.length<2) {
            alert('Email field should filled with email!');
            return false;
        }
    }
    if(form.reason.value === ''){
        alert('Contact reason should be filled!');
        return false;
    }
    if(form.message.value === ''){
        alert('Message should be filled!');
        return false;
    }
}