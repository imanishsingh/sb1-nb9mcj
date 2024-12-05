import './style.css'
import { createSidebar } from './src/components/Sidebar.js'
import { createHeader } from './src/components/Header.js'
import { createPackageSection } from './src/components/Package.js'

// Initialize the app with the Package view
function initializeApp() {
  const app = document.querySelector('#app')
  app.innerHTML = `
    <div class="app-container">
      ${createSidebar('package')}
      <div class="main-content">
        ${createHeader()}
        ${createPackageSection()}
      </div>
    </div>
  `

  // Add event listeners after DOM is loaded
  setupEventListeners()
}

function setupEventListeners() {
  // Volume control buttons
  const minusBtn = document.querySelector('.volume-control .ph-minus').parentElement
  const plusBtn = document.querySelector('.volume-control .ph-plus').parentElement
  const rangeInput = document.querySelector('.neu-range')

  if (minusBtn && plusBtn && rangeInput) {
    minusBtn.addEventListener('click', () => {
      rangeInput.value = Math.max(0, parseInt(rangeInput.value) - 100000)
    })

    plusBtn.addEventListener('click', () => {
      rangeInput.value = Math.min(2000000, parseInt(rangeInput.value) + 100000)
    })
  }

  // Navigation items
  document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault()
      document.querySelectorAll('.nav-item').forEach(nav => nav.classList.remove('active'))
      item.classList.add('active')
    })
  })
}

// Initialize the app when the DOM is loaded
document.addEventListener('DOMContentLoaded', initializeApp)