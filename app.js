

    function handleSubmit() {
        const name = document.getElementById('name').value.trim();
        const phone = document.getElementById('phone').value.trim();

       
        if (!name || !phone) {
            alert('Пожалуйста, заполните оба поля!');
            return;
        }
        
        alert('Мы приняли вашу заявку! Через 15 минут мы с вами созвонимся.');
    }



