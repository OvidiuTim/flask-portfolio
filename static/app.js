(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });

})();


// Select the button and the main text element
const lakeHomeBtn = document.getElementById('lake-home-btn');
const mainText = document.getElementById('main-text');
//text projects
const mainTextDescription1 = document.getElementById('main-text-description1');
const mainTextDescription2 = document.getElementById('main-text-description2');
const mainTextDescription3 = document.getElementById('main-text-description3');
const mainTextDescription4 = document.getElementById('main-text-description4');

//img projects
const mainImg = document.getElementById('main-img');

// Add an event listener to the button for the lake home
lakeHomeBtn.addEventListener('click', () => {
  mainText.textContent = 'THE LAKE HOME';
  mainTextDescription1.textContent = 'The Lake Home website was designed to showcase an exclusive collection of apartments in a premium lakeside community. Built to reflect the elegance and high-end lifestyle offered by The Lake Home, the website serves as both an informational platform and a marketing tool.';
  mainTextDescription2.textContent = 'One of the standout features of the website is its focus on showcasing the unique selling points of The Lake Home apartments. With a detailed presentation of the 81 available units, the website prominently features the remaining 14 apartments, creating a sense of urgency and exclusivity. Each listing highlights premium facilities, upscale amenities, and the picturesque location, helping visitors understand the unparalleled lifestyle offered by this residential complex.';
  mainTextDescription3.textContent = 'The website is optimized not only for aesthetics but also for functionality. Built to cater to both desktop and mobile users, it ensures smooth navigation and quick loading times, enhancing the overall user experience. Strategic calls to action encourage visitors to inquire about availability, schedule tours, or connect directly with the sales team, driving conversions and interest effectively.';
  mainTextDescription4.textContent = 'With a focus on elegance and performance, The Lake Home website serves as an exemplary digital representation of the brand. It reflects the brand’s core values of exclusivity and luxury while maintaining a user-centric approach. By combining advanced technology with creative design, this project showcases my ability to deliver high-quality, custom-tailored web solutions that align perfectly with client objectives.';

  mainImg.src = 'img/thelakehome.png'; // Update the image source


  // Make buttons disappear
  const controlButtons = document.querySelectorAll('.controls .control');
  controlButtons.forEach((btn) => {
    btn.classList.add('deactive'); // Add the 'deactive' class to each button
  });
  
});

//forwork app 

const formworkappbtn = document.getElementById('formwork-app-btn');
// Add an event listener to the button for the lake home
formworkappbtn.addEventListener('click', () => {
    mainText.textContent = 'Formwork Recycling ';
    mainTextDescription1.textContent = 'Designed and implemented a robust full-stack web application using Angular for the frontend and Django for the backend, creating a seamless platform for users to log in, register, and manage account recovery through secure email confirmation workflows. This project demonstrates expertise in building scalable, user-friendly interfaces and integrating secure authentication systems with advanced backend frameworks.';
    mainTextDescription2.textContent = 'Engineered a dynamic platform allowing users to list, browse, and manage formwork for recycling, ensuring efficient communication between buyers and sellers. Integrated real-time notifications for user activity, leveraging Angular s reactive features and Django s REST framework for optimal data handling and user interaction.';
    mainTextDescription3.textContent = 'Deployed the application on AWS, ensuring high availability, scalability, and reliability. Implemented a robust manual update pipeline using GitHub, showcasing proficiency in version control and maintaining server-side updates, aligning with industry best practices for deployment and maintenance.';
    mainTextDescription4.textContent = 'Delivered a user-centric, responsive application designed to function seamlessly across devices, emphasizing intuitive navigation and efficient data handling. By combining Angular s state management with Django s API development, this project highlights expertise in creating end-to-end solutions that prioritize performance, security, and maintainability.';
  
    mainImg.src = 'img/formwork.png'; // Update the image source

      // Make buttons disappear
  const controlButtons = document.querySelectorAll('.controls .control');
  controlButtons.forEach((btn) => {
    btn.classList.add('deactive'); // Add the 'deactive' class to each button
  });

});

const taskappbtn = document.getElementById('task-app-btn');
// Add an event listener to the button for the lake home
taskappbtn.addEventListener('click', () => {
    mainText.textContent = 'Task Management Application';
    mainTextDescription1.textContent = 'Developed a full-stack Task Management application using Angular (frontend) and Django (backend). The platform allows users to log in and perform role-specific actions, such as creating accounts for team members (admin) and assigning tasks. Demonstrated expertise in implementing secure authentication and managing permissions with fine-grained control, ensuring a scalable and secure user experience.';    
    mainTextDescription2.textContent = 'One of the standout features of the website is its focus on showcasing the unique selling points of The Lake Home apartments. With a detailed presentation of the 81 available units, the website prominently features the remaining 14 apartments, creating a sense of urgency and exclusivity. Each listing highlights premium facilities, upscale amenities, and the picturesque location, helping visitors understand the unparalleled lifestyle offered by this residential complex.';
    mainTextDescription2.textContent = 'Built a comprehensive system for assigning and managing tasks. Features include the ability to assign tasks to team members, attach photo proof for task completion, and approve or reassign tasks with updated descriptions. Angular s reactive forms and Django REST framework were used to ensure seamless task tracking and feedback workflows.';
    mainTextDescription3.textContent = 'Integrated real-time notifications to alert users of new tasks or task completion, enhancing team communication and productivity. Implemented an organizational chart feature to visualize team structure, leveraging Angular for dynamic rendering and Django for efficient backend data processing.';
    mainTextDescription4.textContent = 'Hosted the application on AWS to ensure high availability and scalability. Employed GitHub for version control and manual updates via server pulls, demonstrating proficiency in maintaining and deploying full-stack applications in production environments. Focused on delivering a user-friendly interface while maintaining robust backend functionality.';
      
    mainImg.src = 'img/taskapp.png'; // Update the image source

      // Make buttons disappear
  const controlButtons = document.querySelectorAll('.controls .control');
  controlButtons.forEach((btn) => {
    btn.classList.add('deactive'); // Add the 'deactive' class to each button
  });

});

const managementBtn = document.getElementById('inventorybtn');
// Add an event listener to the button for the lake home
managementBtn.addEventListener('click', () => {
  mainText.textContent = 'Tool and Material Management';
  mainTextDescription1.textContent = 'Developed a state-of-the-art inventory management application integrating a comprehensive tool database with NFC technology. Each tool is equipped with an NFC chip (NFC-3513-rd/NFC-2004), while workers IDs utilize EM4100 technology. The system leverages the ACR122U NFC card reader/writer to log tool usage, ensuring accurate real-time tracking of which worker last used a tool. This innovation has significantly reduced tool loss, saving time and resources while enhancing accountability on-site.';
  mainTextDescription2.textContent = 'Designed the application to streamline the process of tracking and managing tools and materials. Administrators can update tool status, monitor tool locations, and receive notifications when construction materials are depleted or when workers request new tools to be purchased. This feature-rich solution has dramatically improved the efficiency of material ordering and allocation, ensuring projects proceed without unnecessary delays.';
  mainTextDescription3.textContent = 'The application’s back-end, hosted on AWS, ensures reliability and scalability for continuous operation. GitHub serves as the version control platform, with manual updates pulled to maintain stability. The robust design supports seamless integration with NFC devices, offering a smooth experience for workers and administrators alike while meeting industry standards for security and efficiency.';
  mainTextDescription4.textContent = 'By maintaining a detailed record of tool usage and status, the application provides valuable insights into on-site operations. Administrators can make informed decisions, optimize resource allocation, and ensure tools are available when needed. Since implementation, the app has eliminated tool loss and substantially improved the workflow for ordering and managing construction materials, contributing to overall project success and cost efficiency.';
    
  mainImg.src = 'img/inventory2.png'; // Update the image source

      // Make buttons disappear
  const controlButtons = document.querySelectorAll('.controls .control');
  controlButtons.forEach((btn) => {
    btn.classList.add('deactive'); // Add the 'deactive' class to each button
  });

});

const novarionBtn = document.getElementById('novarion-btn');
// Add an event listener to the button for the lake home
novarionBtn.addEventListener('click', () => {
  mainText.textContent = 'Novarion Landing Page';
  mainTextDescription1.textContent = 'Developed a sleek and responsive landing page for Novarion using HTML, CSS, and JavaScript. The design focuses on a clean layout and intuitive navigation, creating a professional online presence that effectively showcases the brand. Optimized for both desktop and mobile devices, the page ensures an excellent user experience across all platforms.';
  mainTextDescription2.textContent = 'Integrated a PHP-based contact form to allow seamless communication between visitors and the Novarion team. The form is designed for easy use and securely handles inquiries, helping the company maintain strong connections with potential clients and partners.';
  mainTextDescription3.textContent = 'Hosted on Cloudflare, the website benefits from enhanced performance, fast loading times, and high availability. The hosting setup also provides robust security features, ensuring the page is protected against potential threats while maintaining optimal uptime.';
  mainTextDescription4.textContent = 'As a straightforward presentation page, the Novarion site emphasizes clarity and functionality. The minimalist approach ensures visitors can easily access key information about the brand, making it an ideal platform for building credibility and generating leads. This project highlights expertise in crafting user-focused web solutions that balance design and performance.';

  mainImg.src = 'img/novarion.png'; // Update the image source

      // Make buttons disappear
  const controlButtons = document.querySelectorAll('.controls .control');
  controlButtons.forEach((btn) => {
    btn.classList.add('deactive'); // Add the 'deactive' class to each button
  });

});

const TheriverBtn = document.getElementById('the-river-btn');
// Add an event listener to the button for the lake home
TheriverBtn.addEventListener('click', () => {
  mainText.textContent = 'The River Chalet Website';
  mainTextDescription1.textContent = 'Designed and developed a professional WordPress website for River Chalet, leveraging modern themes and plugins to create an intuitive and responsive user experience. The website effectively showcases the chalet s offerings, ensuring visitors can easily access information and interact with the brand.';
  mainTextDescription2.textContent = 'Integrated key plugins such as Elementor for dynamic page building, 3D FlipBook: Dflip Lite for interactive visual presentations, and WPForms Lite for creating user-friendly contact forms. These plugins enhance the site s functionality while maintaining ease of use for both visitors and administrators.';
  mainTextDescription3.textContent = 'Hosted the website on GlobeHosting to ensure fast loading times, improved security, and reliable performance. Features like Really Simple SSL were implemented to enhance site security, while WP Fastest Cache optimized loading speeds for a smooth user experience.';
  mainTextDescription4.textContent = 'The website includes tools for backup and recovery using UpdraftPlus, ensuring data safety and easy maintenance.';


  mainImg.src = 'img/theriver.png'; // Update the image source

      // Make buttons disappear
  const controlButtons = document.querySelectorAll('.controls .control');
  controlButtons.forEach((btn) => {
    btn.classList.add('deactive'); // Add the 'deactive' class to each button
  });

});


const DmxBtn = document.getElementById('dmx-btn');
// Add an event listener to the button for the lake home
DmxBtn.addEventListener('click', () => {
  mainText.textContent = 'DMX Construction';
  mainTextDescription1.textContent = 'Designed and implemented the DMX business website using WordPress with Elementor as the primary page builder. The website features a clean, responsive design that adapts seamlessly across devices, offering an engaging experience for visitors while effectively showcasing the company’s offerings.';
  mainTextDescription2.textContent = 'Integrated Premium Addons for Elementor to extend the site’s functionality with interactive features such as carousels, advanced sliders, and testimonials. Additionally, used the Elementor Header & Footer Builder to craft custom headers and footers tailored to the brand’s identity, providing a unique and cohesive look.';
  mainTextDescription3.textContent = 'Implemented UpdraftPlus for scheduled backups, ensuring data safety and quick recovery in case of unforeseen events. The inclusion of the WordPress Importer allows seamless data migration and management, highlighting proficiency in maintaining and scaling WordPress websites.';
  mainTextDescription4.textContent = 'The website is hosted on a robust WordPress-compatible environment, ensuring fast load times and consistent performance. The use of WPCode Lite enables quick customization with code snippets, further streamlining development and maintenance while ensuring scalability to accommodate future growth.';

  mainImg.src = 'img/dmx.png'; // Update the image source

      // Make buttons disappear
  const controlButtons = document.querySelectorAll('.controls .control');
  controlButtons.forEach((btn) => {
    btn.classList.add('deactive'); // Add the 'deactive' class to each button
  });

});



//go back
(function () {
    [...document.querySelectorAll(".goback")].forEach(button => {
        button.addEventListener("click", function() {
            // Remove 'active-btn' from the current active control
            document.querySelector(".active-btn").classList.remove("active-btn");
            
            // Make the 'portfolio' control the active-btn
            const portfolioControl = document.querySelector('.control[data-id="portfolio"]');
            portfolioControl.classList.add("active-btn");

            // Switch active section to portfolio
            document.querySelector(".active").classList.remove("active");
            document.getElementById("portfolio").classList.add("active");

            // Remove 'deactive' class from all .control elements
            document.querySelectorAll(".controls .control").forEach(control => {
                control.classList.remove("deactive");
            });
        });
    });


})();



document.getElementById("contactForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent default form submission

  let formData = new FormData(this);

  fetch("/contact", {
    method: "POST",
    body: formData,
  })
  .then(response => response.json())
  .then(data => {
    if (data.success) {
      alert(data.message);  // Show an alert with success message
      document.getElementById("contactForm").style.display = "none"; // Hide form
      document.getElementById("successMessage").style.display = "block"; // Show success message
    } else {
      alert("Error: " + data.message);
    }
  })
  .catch(error => {
    console.error("Error:", error);
    alert("There was an error sending your message.");
  });
});