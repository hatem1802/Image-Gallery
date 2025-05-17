const images = [
    // 🚗 Car
    { id: "1", url: "https://i.abcnewsfe.com/a/f43853f3-9eaf-4048-9ae7-757332c5787e/mclaren-1-ht-gmh-240412_1712928561648_hpMain_16x9.jpg?w=1600", category: "Car" },
  { id: "2", url: "https://robbreport.com/wp-content/uploads/2024/08/temerario01.jpg?w=800", category: "Car" },
  { id: "3", url: "https://hips.hearstapps.com/hmg-prod/images/2-spectre-unveiled-the-first-fully-electric-rolls-royce-front-3-4-1666037303.jpg?crop=0.845xw:1.00xh;0.0714xw,0&resize=980:*", category: "Car" },
  { id: "4", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxQkpU20AwxVDvOBRfTjZ5f-WArJVT6IQS4A&s", category: "Car" },
  { id: "5", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzDhN6PT71Exuhr6j6KayhENg5ofz4iXGR1A&s", category: "Car" },
  { id: "6", url: "https://car-images.bauersecure.com/wp-images/2697/best-electric-cars-2025-renault-scenic-white-front-driving.jpg", category: "Car" },
  { id: "7", url: "https://cdn.luxe.digital/media/20230105073805/fastest-cars-world-2023-list-ranking-luxe-digital.jpg", category: "Car" },
  { id: "8", url: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c", category: "Car" },
  { id: "9", url: "https://images.unsplash.com/photo-1542362567-b07e54358753", category: "Car" },
  { id: "10", url: "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iJQ4i26icKGc/v0/-1x-1.webp", category: "Car" },

  // 🌿 Nature
  { id: "11", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFCI5bdKxoWqYMLfuxwDSxkHT4c17A9S9Mdw&s", category: "Nature" },
  { id: "12", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvimPzwOXCXDCFyo4gygMnyo_C3kJ6XoGCDQ&s", category: "Nature" },
  { id: "13", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRffDEyrQHlvpM4IGA-Y4hqN2iis1xUC4sk6w&s", category: "Nature" },
  { id: "14", url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb", category: "Nature" },
  { id: "15", url: "https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=1024x1024&w=0&k=20&c=z8_rWaI8x4zApNEEG9DnWlGXyDIXe-OmsAyQ5fGPVV8=", category: "Nature" },
  { id: "16", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZK4PAwYYjpkzaNd2qJQwiAJ0QCyqjucEvoQ&s", category: "Nature" },
  { id: "17", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3tat7BcxE4uFljbsgN564X2Jl766qwT0smg&s", category: "Nature" },
  { id: "18", url: "https://rukminim2.flixcart.com/image/850/1000/kgsb1jk0-0/poster/n/h/y/medium-twfnp2-beautiful-waterfall-nature-view-large-size-high-original-imafwy37qv2b5g3v.jpeg?q=90&crop=false", category: "Nature" },
  { id: "19", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvimPzwOXCXDCFyo4gygMnyo_C3kJ6XoGCDQ&s", category: "Nature" },

  // 🐾 Animal
  { id: "20", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZrhtASMHPI0gS-S7V3xwOQj-BS7dHBvhe1g&s", category: "Animal" },
  { id: "21", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAx3_HEc9k8TIFhF745u6G2iw6fZIZupdk5Q&s", category: "Animal" },
  { id: "22", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIzbYLu-_3LWy6J6Zcnv7IXork1rdrDagUhw&s", category: "Animal" },
  { id: "23", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd4qPNncC2VCeezvqlW3WnTZOL4Mjmz5onnQ&s", category: "Animal" },
  { id: "24", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZqQsSCEvoMPz5M4_p8kVsjpoRdr_uVsMkrA&s", category: "Animal" },
  { id: "25", url: "https://media.wired.com/photos/593261cab8eb31692072f129/master/pass/85120553.jpg", category: "Animal" },
  { id: "26", url: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d", category: "Animal" },
  { id: "27", url: "https://images.theconversation.com/files/633480/original/file-20241121-15-a5piur.jpg?ixlib=rb-4.1.0&rect=17%2C8%2C2890%2C1617&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip", category: "Animal" },
  { id: "28", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyA0TVsAAGr9K8hMpfJcQAAnySnleu4fcXXg&s", category: "Animal" },

  // 📚 Book
  { id: "29", url: "https://isbndb.com/blog/wp-content/uploads/2024/03/book-metadata.jpg", category: "Book" },
  { id: "30", url: "https://images.unsplash.com/photo-1512820790803-83ca734da794", category: "Book" },
  { id: "31", url: "https://images.squarespace-cdn.com/content/v1/5876279bbebafb82a7c81c00/f4e17d6a-81db-4a04-9bda-63c86c517778/IMG_3105.jpg", category: "Book" },
  { id: "32", url: "https://s26162.pcdn.co/wp-content/uploads/sites/2/2022/08/Books.jpg", category: "Book" },
  { id: "33", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgEvwXzhI5EKHsBc6d-ZMVGoHBD8TM0kne7A&s", category: "Book" },
  { id: "34", url: "https://images.unsplash.com/photo-1512820790803-83ca734da794", category: "Book" },
  { id: "35", url: "https://images.unsplash.com/photo-1512820790803-83ca734da794", category: "Book" },
  { id: "36", url: "https://images.unsplash.com/photo-1512820790803-83ca734da794", category: "Book" },
  { id: "37", url: "https://images.unsplash.com/photo-1512820790803-83ca734da794", category: "Book" },
];

// Shuffle the images arrayd
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
}

// Generate the HTML for the images
function generateGallery() {
    const gallery = document.getElementById('gallery');
    shuffleArray(images); // Shuffle images before adding to the gallery

    images.forEach(image => {
        const item = document.createElement('div');
        item.classList.add('item', image.category.toLowerCase(), 'active');

        const img = document.createElement('img');
        img.src = image.url;
        img.alt = image.category;

        const img_container = document.createElement('div');
        img_container.classList.add('img_container');

        img_container.appendChild(img)

        item.appendChild(img_container);

        gallery.appendChild(item);
    });
}

// Call the function to generate the gallery
generateGallery();

const buttons = document.querySelectorAll("button");
const items = document.querySelectorAll(".item");

let state = 'all' | 'nature' | 'cars' | 'books' | 'animals';

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        state = `${buttons[i].classList[1]}`
        console.log(state)
        for (let i = 0; i < items.length; i++) {
            items[i].classList.remove('active');
            if (state === items[i].classList[1]) {
                items[i].classList.add('active');
            } else if (state === 'all') {
                items[i].classList.add('active')
            }
        }
    })
}
