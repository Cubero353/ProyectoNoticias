const app = Vue.createApp({
    data(){
        return{
            selectedItem:0,
            categories:[
                {id: 1, name: 'General'},
                {id: 2, name: 'Deportes'},
                {id: 3, name: 'Salud'},
                {id: 4, name: 'Tecnologia'},
                {id: 5, name: 'Entretenimiento'},
            ],
            news:[
                {id: 101, title: 'Conoce a los robots a control remoto más pequeños del mundo', subtitle:'The tech giants want to roll out FIDO passkey technology in the coming year', description:'Estos robots, dirigidos por control remoto e inspirados en el movimiento de los cangrejos, podrían ser el futuro de las cirugías mínimamente invasivas y otras funciones. Mira en el video cómo funcionan.', image: './imgs/acastro_210217_1777_passwords_0002.0.webp', available: true, date: ' May 5, 2022, 9:05am EDT', category: 'Tecnologia', likes: 80},
                {id: 102, title: 'Este bus autónomo se conduce solo entre un laberinto de delicadas vasijas chinas', subtitle:'The code hosting platform cited a responsibility to boost the security of the software supply chain overall', description:'Este autobús autónomo demostró toda su destreza ante un peculiar desafío: se condujo solo entre un laberinto de delicadas vasijas chinas. No te pierdas las imágenes del inusual momento.', image: './imgs/acastro_220504_STK121_0001.0.webp', available: true, date: 'May 4, 2022, 11:10am EDT', category: 'Tecnologia', likes: 80},
                {id: 103, title: 'Los "guerreros del teclado" en Ucrania también pelean una batalla cibernética contra Rusia', subtitle:'Warcraft Arclight Rumble brings the heroes of Azeroth together in a tower defense strategy game', description:'La resistencia ucraniana alcanza también el ámbito tecnológico. Los "guerreros del teclado" luchan contra Rusia desde sus computadoras. Te contamos en Conclusiones sobre esta batalla paralela con ataques cibernéticos que lidera un grupo de voluntarios en Odesa.', image: './imgs/Header-logo-enUS.webp', available: true, date: 'May 3, 2022, 1:20pm EDT', category: 'Tecnologia', likes: 80},
                {id: 104, title: 'Viruela del mono: 257 casos confirmados en todo el mundo, según la OMS', subtitle:'LetsGetChecked acquired Veritas, a genetic testing company', description:'La OMS ha recibido informes de 257 casos confirmados y 120 casos sospechosos de viruela del mono en 23 naciones donde el virus no es endémico. Te contamos la última actualización.', image: './imgs/VRG_ILLO_1777_AK_body_data.0.0.webp', available: true, date: 'Mar 31, 2022, 12:55pm EDT', category: 'Salud', likes: 80},
                {id: 105, title: 'El número mundial de casos de hepatitis infantil aumenta a 650 casos', subtitle:'Researchers are trying to figure out who’s at risk', description:'La Organización Mundial de la Salud (OMS) reportó el viernes que hay al menos 650 casos de hepatitis agua infantil bajo investigación en 33 países, un aumento de alrededor de 36 casos con respecto a la última actualización internacional, hace aproximadamente una semana. Otros 99 casos están en espera de clasificación.', image: './imgs/akrales_210917_4760_0331.0.webp', available: true, date: 'Mar 29, 2022, 2:59pm EDT', category: 'Salud', likes: 80},
                {id: 106, title: 'Exjugador de rugby conquistó una cima en el Himalaya', subtitle:'Researchers are trying to figure out who’s at risk', description:'El exjugador de rugby Ed Jackson acaba de alcanzar la cima del Himlung Himal, una montaña del Himalaya de 7.126 metros de altura. Es un récord para una persona con una lesión medular', image: './imgs/akrales_210917_4760_0331.0.webp', available: true, date: 'Mar 29, 2022, 2:59pm EDT', category: 'Deportes', likes: 80},
                {id: 107, title: '¿Por qué Kylian Mbappé decidió quedarse en el PSG?', subtitle:'Researchers are trying to figure out who’s at risk', description:'Con un protagonista carismático, políticos, dos de los clubes de fútbol más importantes del mundo y cientos de millones de dólares en juego, la saga de Kylian Mbappé mantuvo al mundo del fútbol en vilo mientras se debatía entre fichar por el Real Madrid o quedarse en el Paris-Saint-Germain (PSG).', image: './imgs/akrales_210917_4760_0331.0.webp', available: true, date: 'Mar 29, 2022, 2:59pm EDT', category: 'Deportes', likes: 80},
                {id: 108, title: '¡"Checo" Pérez, en todo lo alto! El piloto mexicano gana el GP de Mónaco y está en la pelea directa por el campeonato de F1', subtitle:'Researchers are trying to figure out who’s at risk', description:' Sergio "Checo" Pérez, piloto mexicano de la escudería Red Bull, se llevó este domingo el Gran Premio de Mónaco, con lo cual se mete directo en la pelea por el campeonato de Fórmula 1.', image: './imgs/akrales_210917_4760_0331.0.webp', available: true, date: 'Mar 29, 2022, 2:59pm EDT', category: 'Deportes', likes: 80},
                {id: 109, title: 'Las carreras de Depp y Heard se enfrentan a otro juicio: la opinión pública', subtitle:'Researchers are trying to figure out who’s at risk', description:' Cualesquiera que sean los veredictos, el destino de las carreras de Johnny Depp y Amber Heard se decidirá en el tribunal de la opinión pública, según expertos de Hollywood.', image: './imgs/akrales_210917_4760_0331.0.webp', available: true, date: 'Mar 29, 2022, 2:59pm EDT', category: 'Entretenimiento', likes: 80},
                {id: 110, title: 'Esposa de Bruce Willis muestra cómo sigue el actor tras ser diagnosticado con afasia', subtitle:'Researchers are trying to figure out who’s at risk', description:' Emma Heming, la esposa de Bruce Willis, compartió un video en sus redes sociales donde muestra al actor en actividades físicas. Mira todos los detalles de cómo sigue Willis después de saberse que fue diagnosticado con afasia, una enfermedad que afecta las capacidades cognitivas.', image: './imgs/akrales_210917_4760_0331.0.webp', available: true, date: 'Mar 29, 2022, 2:59pm EDT', category: 'Entretenimiento', likes: 80},
            ],

            all_news: [],
        }
    },
    mounted: function(){
       this.all_news = this.news;
    },
    methods: {
        showNewsInCategory(category){
            this.selectedItem = 0;
            if(category == "General"){
                this.news = this.all_news;
            }else{
                this.news = this.all_news;
                let newsInCategory = this.news.filter(function(el){
                    return el.category === category;
                });
                this.news = newsInCategory;
            }
        },
        showNewsDetails(index){
            this.selectedItem = index;
        },
    },
});

