/* global Vue */
/* global axios */

let app = new Vue({
    el: '#deckbuilder',
    data: {
        loadingCard: false,
        card: {},
        cardCode: "01001",
        loadingCardList: false,
        cardlist: [],
        loadingSets: false,
        sets: [],
        
    },
    watch: {
        cardCode(value, oldvalue) {
            this.getCard();
        },
    },
    created() {
        this.getCard();
        this.getSets();
        this.viewSet("RIV");
    },
    methods: {
        async getCard() {
            try {
                this.loadingCard = true;
                const response = await axios.get("http://swdestinydb.com/api/public/card/" + this.cardCode);
                this.card = response.data;
                console.log(this.card);
                this.loadingCard = false;
            }
            catch (error) {
                console.log(error);
                this.cardCode = "01001";
            }
        },
        async getCardList() {
            try {
                this.loadingCardList = true;
                const response = await axios.get("http://swdestinydb.com/api/public/cards/");
                this.cardlist = response.data;  
                console.log(this.cardlist);
                this.loadingCardList = false;
            }
            catch (error) {
                console.log(error);
            }
        },
        async getSets() {
            try {
                this.loadingSets = true;
                const response = await axios.get("http://swdestinydb.com/api/public/sets/");
                this.sets = response.data;  
                console.log(this.sets);
                this.loadingSets = false;
            }
            catch (error) {
                console.log(error);
            }
        },
        async viewSet(setCode) {
            try {
                this.loadingCardList = true;
                const response = await axios.get("http://swdestinydb.com/api/public/cards/" + setCode);
                this.cardlist = response.data;  
                console.log(this.cardlist);
                this.loadingCardList = false;
            }
            catch (error) {
                console.log(error);
            }
        },
        getNewCard(cardCode) {
            this.cardCode = cardCode;
        }
    },
    
});