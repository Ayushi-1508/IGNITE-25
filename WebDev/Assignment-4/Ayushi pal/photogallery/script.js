
const images = [
    'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
    
    'https://images.unsplash.com/photo-1465101046530-73398c7f28ca',
  
    'https://images.pexels.com/photos/2208902/pexels-photo-2208902.jpeg?cs=srgb&dl=architecture-buildings-calm-waters-2208902.jpg&fm=jpg',
   
    'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?ixid=flower',
  
    'https://images.unsplash.com/photo-1506744038136-46273834b3fb'
];

const captions = [
    'Beautiful Sunset at Beach',
    'Mountain Landscape',
    'City Night View',
    'Flower Garden',
    'Forest Walk'
];

const galleryGrid = document.querySelector('.gallery-grid');
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImg');
const caption = document.getElementById('caption');
const closeBtn = document.querySelector('.close');
images.forEach((imgSrc, index) => {
    const galleryItem = document.createElement('div');
    galleryItem.className = 'gallery-item';
    galleryItem.innerHTML = `<img src="${imgSrc}" alt="Gallery Image ${index + 1}">`;
    galleryGrid.appendChild(galleryItem);

    galleryItem.addEventListener('click', () => {
        modal.style.display = 'block';
        modalImg.src = imgSrc;
        caption.textContent = captions[index];
    });
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        modal.style.display = 'none';
    }
});
