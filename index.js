import './index.css'

import Alpine from 'alpinejs'
window.Alpine = Alpine
Alpine.start()

const currentYearSpan = document.getElementById('currentYear');
const date = new Date();
currentYearSpan.textContent = date.getFullYear();