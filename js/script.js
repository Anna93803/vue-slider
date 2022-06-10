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


const appVue = new Vue ({
    el: "#app",

    data: {
        listSlide: slides,
        index: 0,
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
        }
    }
});
