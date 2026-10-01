
  document.getElementById('partnerForm').addEventListener('submit', function (e) {
    e.preventDefault();
    document.querySelectorAll('.error-message').forEach(el => el.remove());

    let isValid = true;

    const name = document.getElementById('partnerName');
    const email = document.getElementById('partnerEmail');
    const phone = document.getElementById('partnerPhone');
    const company = document.getElementById('partnerCompany');
    const website = document.getElementById('partnerWebsite');
    const country = document.getElementById('partnerCountry');
    const state = document.getElementById('interestArea');
    const privacy = document.getElementById('privacyCheckbox');
    const thankmg = document.getElementsByClassName('thanks-mg')[0];
    const spinderloading =  document.getElementById('spinerload');


    // Name
    if (name.value.trim() === '') {
      showError(name, "Name is required");
      isValid = false;
    }

    // Email
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,6}$/i;
    if (email.value.trim() === '') {
      showError(email, "Email is required");
      isValid = false;
    } else if (!emailPattern.test(email.value.trim())) {
      showError(email, "Enter a valid email");
      isValid = false;
    }

    // Phone
    const phonePattern = /^[0-9]{7,15}$/;
    if (phone.value.trim() === '') {
      showError(phone, "Phone number is required");
      isValid = false;
    } else if (!phonePattern.test(phone.value.trim())) {
      showError(phone, "Enter a valid phone number (7 to 15 digits)");
      isValid = false;
    }

    // Company
    if (company.value.trim() === '') {
      showError(company, "Company name is required");
      isValid = false;
    }

    // Website
    if (website.value.trim() === '') {
      showError(website, "Website is required");
      isValid = false;
    }

    // Country
    if (country.value === '' || country.selectedIndex === 0) {
      showError(country, "Please select a country");
      isValid = false;
    }

    // State
    // if (state.value === '' || state.selectedIndex === 0) {
    //   showError(state, "Please select a state");
    //   isValid = false;
    // }

    // Privacy
    if (!privacy.checked) {
      showError(privacy, "You must accept the privacy terms");
      isValid = false;
    }

    // If all fields valid
    
    if (isValid) {
      const formData = {
    name: name.value.trim(),
    email: email.value.trim(),
    phone: phone.value.trim(),
    company: company.value.trim(),
    website: website.value.trim(),
    country: country.value,
    privacyAccepted: privacy.checked,
    // state: state.value
    formid: "6",
    apikey: "a68031bf_1948_4752_8d7a_c75484ab1780",
    SourceURL: "",
    pagereferrerurl: "",
    rid: "",
    cid: "",
    pagetitle: ""
    
  };
  
  spinerload.classList.remove('d-none'); 

  fetch('https://formapiv5.resul.io/Subscription/formSubmission', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  })
  .then(response => {
    if (!response.ok) throw new Error('Network response was not ok');
    return response.json();
  })
  .then(data => {
  console.log('Success:', data);
  document.getElementById('partnerForm').reset();


  setTimeout(() => {
    spinerload.classList.add('d-none'); // hide spinner
    thankmg.style.display = 'block';    // show thank you message
  }, 2000);
});

    
    }
  });

  function showError(element, message) {
    const error = document.createElement('div');
    error.className = 'error-message';
    error.innerText = message;

    if (element.type === 'checkbox') {
      element.parentElement.appendChild(error);
    } else {
      element.closest('.mb-3').appendChild(error);
    }
  }

  // Open/Close with smooth fade
  document.querySelectorAll('.becomepartneropenclose').forEach(button => {
    button.addEventListener('click', () => {
      const form = document.getElementById('becomePartnerFormWrapper');
      form.classList.toggle('d-none');
    });
  });


  document.getElementById("partnerCountry").addEventListener("change", function () {
  const selectedOption = this.options[this.selectedIndex];
  const cleanText = selectedOption.textContent.trim(); // removes &nbsp;

  selectedOption.textContent = cleanText;
});