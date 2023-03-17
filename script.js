function sendEmail(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "hearingsolutionsofic@gmail.com",
        Password : "26BD24972843F2D262EDDE61DAC14F84D8DC",
        To : 'zerotohero2805@gmail.com',
        From : "hearingsolutionsofic@gmail.com",
        Subject : "This is the subject",
        Body : "Name : " + document.getElementById("name").value
             + "<br> Number : " + document.getElementById("number").value
            //  + "<br> Email : " + document.getElementById("email").value
             + "<br> Problem : " + document.getElementById("prblm").value
             + "<br> Gclid : " + document.getElementById("gclid_field").value
    }).then(
      message => alert("Message sent succesfully")
    );
}