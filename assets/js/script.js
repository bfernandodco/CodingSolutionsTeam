    //Menu 

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

    //Form
  
    const form = document.getElementById('psicologoForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
  
        const formData = new FormData(form);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });
  
        // Aqui você faria a requisição ao seu backend Java (exemplo usando fetch)
        fetch('http://localhost:8080/enviarFormulario', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('Dados enviados com sucesso:', data);
            // Você pode fazer algo com a resposta do backend, se necessário
        })
        .catch(error => {
            console.error('Erro ao enviar dados:', error);
        });
    });
  
  