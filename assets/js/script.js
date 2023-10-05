// Menu 
function menuShow() {
  let menuMobile = document.querySelector('.mobile-menu');
  let icon = document.querySelector('.mobile-menu-icon i');

  if (menuMobile.classList.contains('open')) {
    menuMobile.classList.remove('open');
    icon.classList.remove('fa-xmark');
    icon.classList.add('fa-bars');
  } else {
    menuMobile.classList.add('open');
    icon.classList.remove('fa-bars');
    icon.classList.add('fa-xmark');
  }
}

// Forms e questões
let currentSection = 'form';

function showNextSection() {
  if (currentSection === 'form') {
    const formInputs = document.querySelectorAll('#dataForm input[required]');
    const answered = Array.from(formInputs).every(input => input.value !== '');
    if (answered) {
      currentSection = 'questions1';
      hideElement('dataForm');
      showElement('questions1');
      setButtonText('nextButton', 'Próximo');
      showElement(`backButton${currentSection}`);
      smoothScrollTo('questions1');
    } else {
      alert('Por favor, responda a todas as perguntas.');
    }
  } else {
    const sectionNumber = parseInt(currentSection.slice(-1));
    if (sectionNumber < 6) {
      currentSection = `questions${sectionNumber + 1}`;
      hideElement(`questions${sectionNumber}`);
      showElement(`questions${sectionNumber + 1}`);
      setButtonText('nextButton', 'Próximo');
      showElement(`backButton${currentSection}`);
      smoothScrollTo(`questions${sectionNumber + 1}`);
    } else {
      hideElement('questions6');
      showElement('submitSection');
      showFinishButton();
      displaySuccessMessage();  // Exibe a mensagem de sucesso
    }
  }
}

function showPreviousSection(sectionId) {
  hideElement(sectionId);
  const sectionNumber = parseInt(sectionId.slice(-1));
  if (sectionNumber === 1) {
    currentSection = 'form';
    showElement('dataForm');
  } else {
    currentSection = `questions${sectionNumber - 1}`;
    showElement(`questions${sectionNumber - 1}`);
  }
  showElement(`backButton${currentSection}`);
  setButtonText('nextButton', 'Próximo');
  smoothScrollTo(currentSection);
}

function displaySuccessMessage() {
  const successMessage = document.createElement('div');
  successMessage.innerHTML = '<h2>Dados enviados com sucesso!</h2>';
  successMessage.setAttribute('id', 'successMessage');  // Adiciona o ID para a mensagem
  const submitSection = document.getElementById('submitSection');
  submitSection.innerHTML = '';  // Limpa o conteúdo existente na div
  submitSection.appendChild(successMessage);
}

function hideElement(id) {
  const element = document.getElementById(id);
  if (element) {
    element.style.display = 'none'; // Oculta instantaneamente
  }
}

function showElement(id) {
  const element = document.getElementById(id);
  if (element) {
    element.style.display = 'block';
    element.style.opacity = '0'; // Começa com opacidade 0

    setTimeout(() => {
      element.style.opacity = '1'; // Aplica a transição de fade in
    }, 150);
  }
}

function setButtonText(id, text) {
  const button = document.getElementById(id);
  if (button) {
    button.innerText = text;
  }
}

function smoothScrollTo(id) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
}


function finishForm() {
  // Show the success message
  const successMessage = document.getElementById('successMessage');
  if (successMessage) {
    successMessage.style.display = 'block';
  }

  // Delay the reset by 2 seconds
  setTimeout(function() {
    // Reset the form to its initial state
    document.getElementById('dataForm').reset();

    // Hide the success message
    if (successMessage) {
      successMessage.style.display = 'none';
    }

    // Show the initial form section
    currentSection = 'form';
    hideElement('questions1');
    hideElement('questions2');
    hideElement('questions3');
    hideElement('questions4');
    hideElement('questions5');
    hideElement('questions6');
    hideElement('submitSection');
    showElement('dataForm');
  }, 2000); // 2 seconds delay
}


// Máscara para o telefone
$(document).ready(function () {
  $('#phone').inputmask('(99) 99999-9999');
});
