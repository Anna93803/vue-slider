const slides = [
    {
        image: 'img/01.jpg',
        title: 'Svezia',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    },
    {
        image: 'img/02.jpg',
        title: 'Svizzera',
        text: 'Lorem ipsum.',
    },
    {
        image: 'img/03.jpg',
        title: 'Gran Bretagna',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    },
    {
        image: 'img/04.jpg',
        title: 'Germania',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
    },
    {
        image: 'img/05.jpg',
        title: 'Paradise',
        text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.',
    }
];

console.log(slides);

// Far funzionare lo slider partendo dall’html ricevuto.
// Al click su una freccia, l’immagine mostrata cambia.
// la lista delle thumbs deve essere generata tramite un v-for


// Bonus:
// 1- al click su una thumb, visualizzare in grande l’immagine corrispondente
// 2 - Al click sulle frecce, cambia l’immagine, ma si evidenzia anche la thumbnail corrispondente


const appVue = new Vue ({
    el: "#app",

    data: {
        listSlide: slides,
        index: 0,
        indexImg: slides[0],
    },

    methods: {
        prev() {
            // const arrayDiOggetti = this.listSlide;
            // const indice = this.index;
            // const oggettoSelezionato = arrayDiOggetti[indice]
            // const image = oggettoSelezionato.image
            this.listSlide[this.index].image;
            this.index ++;

            if(this.index == 5) {
                this.index = 0
            }
        },

        next() {
            
            this.listSlide[this.index].image;
            this.index --;

            if(this.index < 0) {
                this.index = 4
            }
        },

        active(i) {
            this.indexImg = this.listSlide[i];
            this.index = i;
        },

        selected(i) {
            if(i === this.index) {
                return "active";
            }
        },

    }
});


// 3- applicare l’autoplay allo slider: ogni 3 secondi,
//  cambia immagine automaticamente (vi servirà l’evento mounted() di vue)
// 4- quando il mouse va in hover sullo slider, bloccare l’autoplay e farlo riprendere quando esce