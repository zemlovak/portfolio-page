export function createContactForm() {
    const form = document.createElement("form");
    form.id = "contact-form";
  
    // Left side inputs
    const leftDiv = document.createElement("div");
    leftDiv.classList.add("form-left");
  
    // Name and Surname
    const nameField = document.createElement("input");
    nameField.type = "text";
    nameField.name = "name";
    nameField.placeholder = "Name and Surname";
    nameField.required = true;
  
    // Company (Optional)
    const companyField = document.createElement("input");
    companyField.type = "text";
    companyField.name = "company";
    companyField.placeholder = "Company (Optional)";
  
    // Email
    const emailField = document.createElement("input");
    emailField.type = "email";
    emailField.name = "email";
    emailField.placeholder = "Email";
    emailField.required = true;
  
    // Custom Country Code Dropdown
    const countryDropdown = document.createElement("div");
    countryDropdown.classList.add("country-select");
    countryDropdown.id = "country-code";
    countryDropdown.setAttribute("data-value", "+420");
  
    const countryInput = document.createElement("div");
    countryInput.classList.add("select-input");
    countryInput.textContent = "+420"; // Default country code
    countryDropdown.appendChild(countryInput);
  
    const countryList = document.createElement("ul");
    countryList.classList.add("select-dropdown", "hidden");
  
    // Predefined countries and codes
    const countries = [
      { name: "United States", code: "+1" },
      { name: "United Kingdom", code: "+44" },
      { name: "India", code: "+91" },
      { name: "Australia", code: "+61" },
      { name: "Česká republika", code: "+420" },
      { name: "Slovensko", code: "+421" },
    ];
  
    countries.forEach((country) => {
      const listItem = document.createElement("li");
      listItem.setAttribute("data-value", country.code);
      listItem.textContent = `${country.name} (${country.code})`; // Full name and code in the dropdown
      countryList.appendChild(listItem);
    });
  
    countryDropdown.appendChild(countryList);
  
    // Phone Number Field
    const phoneField = document.createElement("input");
    phoneField.type = "tel";
    phoneField.name = "phone";
    phoneField.placeholder = "Phone Number";
    phoneField.required = true;
  
    const phoneDiv = document.createElement("div");
    phoneDiv.classList.add("phone-div");
    phoneDiv.appendChild(countryDropdown);
    phoneDiv.appendChild(phoneField);
  
    // Append left side inputs
    leftDiv.appendChild(nameField);
    leftDiv.appendChild(companyField);
    leftDiv.appendChild(phoneDiv);
    leftDiv.appendChild(emailField);
  
    // Right side - Message
    const rightDiv = document.createElement("div");
    rightDiv.classList.add("form-right");
  
    const messageField = document.createElement("textarea");
    messageField.name = "message";
    messageField.placeholder = "Your Message";
    messageField.rows = 10;
    messageField.required = true;
  
    rightDiv.appendChild(messageField);
  

    // Combine everything
    form.appendChild(leftDiv);
    form.appendChild(rightDiv);
  
    // Attach dropdown functionality
    attachDropdownFunctionality(countryDropdown);
  
    return form;
  }
  
  // Attach functionality for the custom dropdown
  function attachDropdownFunctionality(countryDropdown) {
    const countryInput = countryDropdown.querySelector(".select-input");
    const countryList = countryDropdown.querySelector(".select-dropdown");
    const countryOptions = countryList.querySelectorAll("li");
  
    // Toggle dropdown visibility
    function toggleDropdown() {
      countryList.classList.toggle("hidden");
      countryInput.classList.toggle("show");
    }
  
    // Update displayed value
    function updateSelectedCountry(option) {
      const countryCode = option.getAttribute("data-value");
      countryInput.textContent = countryCode; // Show only country code
      countryDropdown.setAttribute("data-value", countryCode); // Store selected value
    }
  
    // Event listeners
    countryInput.addEventListener("click", toggleDropdown);
  
    countryOptions.forEach((option) => {
      option.addEventListener("click", () => {
        updateSelectedCountry(option);
        toggleDropdown(); // Collapse the dropdown
      });
    });
  
    // Close dropdown when clicking outside
    document.addEventListener("click", (event) => {
      if (!countryDropdown.contains(event.target)) {
        countryList.classList.add("hidden");
        countryInput.classList.remove("show");
      }
    });
  }
  