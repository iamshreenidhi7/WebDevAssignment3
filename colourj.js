// Greeting logic
document.getElementById('greetBtn').onclick = function() {
  let name = document.getElementById('nameInput').value.trim();
  let greetingText = name ? `Hello, ${name}` : 'Hello';
  document.getElementById('greeting').textContent = greetingText;
};

// Box color logic
const colors = ['red', 'blue', 'green', 'yellow'];
colors.forEach(color => {
  document.getElementById(color).onclick = function() {
    this.style.backgroundColor = color;
    this.style.color = '#fff';
  };
});
