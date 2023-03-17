function sendEmail2(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "nishansingh280911@gmail.com",
        Password : "E66B67914EC32292F37676D6B24DF93B3E00",
        To : 'zerotohero2805@gmail.com',
        From : "nishansingh280911@gmail.com",
        Subject : "This is the subject",
        Body : "Name : " + document.getElementById("name").value
             + "<br> Number : " + document.getElementById("number").value
    }).then(
      message => alert("Message sent succesfully")
    );
}