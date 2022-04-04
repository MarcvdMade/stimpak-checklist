import {v4 as uuid} from "uuid";
import gezondheid from "../img/categories/gezondheid.png";
import klimaatActie from "../img/categories/klimaatActie.png";
import economisch from "../img/categories/economisch.png";
import betaalbareEnergie from "../img/categories/betaalbareEnergie.png";

export const itemsFromBackend = [
    {id: uuid(),
        item: {
            color: "#4ca145",
            headerTitle: "1. Gezondheid",
            imgPath: gezondheid,
            title: "Voorkom burnouts",
            body: "Evalueer vakantie dagen",
            value: 50,
        }
    },
    {id: uuid(),
        item: {
            color: "#407f46",
            headerTitle: "2. Klimaat actie",
            imgPath:klimaatActie,
            title: "Recycling",
            body: "Voorkom verspilling",
            value: 50,
        }
    },
    {id: uuid(),
        item: {
            color: "#a31c43",
            headerTitle: "5. Economisch",
            imgPath:economisch,
            title: "Eerlijke kilometer vergoeding",
            body: "Betaal een eerlijke vergoeding",
            value: 50,
        }
    },
    {id: uuid(),
        item: {
            color: "#fac412",
            headerTitle: "6. Betaalbare energie",
            imgPath:betaalbareEnergie,
            title: "Duurzame energie",
            body: "Overgaan op gloeilampen",
            value: 50,
        }
    },
];
