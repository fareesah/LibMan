document.getElementById('quizForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
  
    fetch('/match', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(data).toString()
    })
    .then(res => res.json())
    .then(data => {
      const resultDiv = document.getElementById('result');
      if (data.message) {
        resultDiv.innerHTML = `<p>${data.message}</p>`;
      } else {
        resultDiv.innerHTML = `
          <h2>Your Match: ${data.name}</h2>
          <p><strong>Hours:</strong> ${data.hours}</p>
          <p><strong>Policies:</strong> ${data.policies}</p>
          <p><strong>Seating:</strong> ${data.seating_capacity}</p>
          <p><strong>Noise:</strong> ${data.noise_level}</p>
          <p><strong>Special:</strong> ${data.special_features}</p>
        `;
      }
    });
  });
  