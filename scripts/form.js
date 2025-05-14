

// Function to submit the form while also preventing page refresh
$('#contactForm').on('submit', function(e) {
    const msg = "Your message has been sent. If you do not hear back in three business days, please reach out directly to BrandonLysholm@gmail.com";

    // This is for displaying message
    $('#contactForm *').fadeOut(1000); // fading out 1s
    $('#contactForm').prepend(msg);
    // THis prevents the redirect
    e.preventDefault();

    // Generating the URL:
    let myURL = 'https://docs.google.com/forms/d/e/1FAIpQLSeWum7PtCOUbsv2Lp-DBQMO6ygT5-6o24TJhzzaHJn0gkPVeA/formResponse?usp=pp_url&'
    let nameVal = 'entry.882941231='+($('#name').val()).replaceAll(' ', '+');
    let emailVal = 'entry.1790766707='+$('#email').val();
    let selectVal = 'entry.1048297172='+$('#contactForm').find('option:selected').val();
    let commentVal = 'entry.764703748='+($('#comment').val()).replaceAll(' ','+');

    myURL += nameVal+'&'+emailVal+'&'+selectVal+'&'+commentVal;


    // This submits the data
    $.ajax({
        type: "POST",
        url: myURL,
    })

})
