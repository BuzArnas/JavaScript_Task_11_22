// Data structure for book inventory
const inventory = [
    {
        "category": "Informacinės technologijos",
        "books": [
            {
                "title": "Programavimas linksmai",
                "ISBN": "IT-12345",
                "publishing_year": 2019, // New book
                "pages": 250,
                "quantity": 12,
                "price": 25
            },
            {
                "title": "JavaScript for Beginners",
                "ISBN": "IT-12346",
                "publishing_year": 2020,
                "pages": 300,
                "quantity": 8,
                "price": 30
            },
            {
                "title": "Web Development 101",
                "ISBN": "IT-12347",
                "publishing_year": 2018,
                "pages": 350,
                "quantity": 5,
                "price": 40
            },
            {
                "title": "AI Programming",
                "ISBN": "IT-12348",
                "publishing_year": 2021,
                "pages": 450,
                "quantity": 10,
                "price": 50
            },
            {
                "title": "Advanced Python",
                "ISBN": "IT-12349",
                "publishing_year": 2017,
                "pages": 500,
                "quantity": 7,
                "price": 60
            }
        ]
    },
    {
        "category": "Fizika",
        "books": [
            {
                "title": "Mechanika ir Judėjimas",
                "ISBN": "PH-12345",
                "publishing_year": 2015,
                "pages": 320,
                "quantity": 15,
                "price": 20
            },
            {
                "title": "Elektromagnetizmas",
                "ISBN": "PH-12346",
                "publishing_year": 2019,
                "pages": 280,
                "quantity": 10,
                "price": 22
            },
            {
                "title": "Šviesos teorija",
                "ISBN": "PH-12347",
                "publishing_year": 2020,
                "pages": 200,
                "quantity": 18,
                "price": 25
            },
            {
                "title": "Termodinamika",
                "ISBN": "PH-12348",
                "publishing_year": 2021,
                "pages": 400,
                "quantity": 12,
                "price": 30
            },
            {
                "title": "Kvantinė fizika",
                "ISBN": "PH-12349",
                "publishing_year": 2018,
                "pages": 450,
                "quantity": 8,
                "price": 40
            }
        ]
    },
    {
        "category": "Literatūra",
        "books": [
            {
                "title": "Shakespeare: Asmenybė ir kūryba",
                "ISBN": "LT-12345",
                "publishing_year": 2016,
                "pages": 350,
                "quantity": 20,
                "price": 15
            },
            {
                "title": "Poezija ir pasaka",
                "ISBN": "LT-12346",
                "publishing_year": 2018,
                "pages": 280,
                "quantity": 30,
                "price": 18
            },
            {
                "title": "Romanų pasaulis",
                "ISBN": "LT-12347",
                "publishing_year": 2017,
                "pages": 400,
                "quantity": 25,
                "price": 22
            },
            {
                "title": "Klasikiniai kūriniai",
                "ISBN": "LT-12348",
                "publishing_year": 2015,
                "pages": 500,
                "quantity": 10,
                "price": 35
            },
            {
                "title": "Moderni literatūra",
                "ISBN": "LT-12349",
                "publishing_year": 2020,
                "pages": 350,
                "quantity": 8,
                "price": 28
            }
        ]
    },
    {
        "category": "Matematika",
        "books": [
            {
                "title": "Algebra pradedantiesiems",
                "ISBN": "MA-12345",
                "publishing_year": 2016,
                "pages": 250,
                "quantity": 18,
                "price": 15
            },
            {
                "title": "Matematikos pagrindai",
                "ISBN": "MA-12346",
                "publishing_year": 2018,
                "pages": 300,
                "quantity": 12,
                "price": 20
            },
            {
                "title": "Geometrijos pradžiamokslis",
                "ISBN": "MA-12347",
                "publishing_year": 2019,
                "pages": 350,
                "quantity": 14,
                "price": 25
            },
            {
                "title": "Kalkuliacija",
                "ISBN": "MA-12348",
                "publishing_year": 2021,
                "pages": 400,
                "quantity": 10,
                "price": 30
            },
            {
                "title": "Statistika ir tikimybė",
                "ISBN": "MA-12349",
                "publishing_year": 2020,
                "pages": 500,
                "quantity": 5,
                "price": 40
            }
        ]
    },
    {
        "category": "Psichologija",
        "books": [
            {
                "title": "Psichologijos pagrindai",
                "ISBN": "PS-12345",
                "publishing_year": 2017,
                "pages": 280,
                "quantity": 25,
                "price": 20
            },
            {
                "title": "Kognityvinė psichologija",
                "ISBN": "PS-12346",
                "publishing_year": 2019,
                "pages": 320,
                "quantity": 12,
                "price": 22
            },
            {
                "title": "Psichologija ir žmogaus elgsena",
                "ISBN": "PS-12347",
                "publishing_year": 2020,
                "pages": 300,
                "quantity": 10,
                "price": 25
            },
            {
                "title": "Psichoterapija",
                "ISBN": "PS-12348",
                "publishing_year": 2021,
                "pages": 350,
                "quantity": 8,
                "price": 30
            },
            {
                "title": "Socialinė psichologija",
                "ISBN": "PS-12349",
                "publishing_year": 2020,
                "pages": 280,
                "quantity": 15,
                "price": 28
            }
        ]
    }
];

function writeNew(inventoryData){
    for(let i=0; i<inventoryData.length; i++){
        let books = inventoryData[i].books;
        for(let j=0; j<books.length; j++){
            if(books[j].publishing_year>=2021){
                console.log("Book: ", books[j].title, " Publishing Year: ", books[j].publishing_year, " [NEW BOOK]")
            }
            else{
                console.log("Book: ", books[j].title, " Publishing Year: ", books[j].publishing_year)
            }
        }
    }
}

function calculateValue(inventoryData){
    let categoryValue = [];
    let categoryName = [];
    let totalValue = 0;
    for(let i=0; i<inventoryData.length; i++){
        let categorySum = 0;
        let books = inventoryData[i].books;
        for(let j=0; j<books.length; j++){ // Calculating each book value and summing up category value
            let bookValue = books[j].price * books[j].quantity;
            categorySum = categorySum + bookValue;
        }
        categoryValue[i] = categorySum; // Inputing a summed up category value into an array for storage
        categoryName[i] = inventoryData[i].category
        totalValue = totalValue + categoryValue[i];
    }
    writeValues(categoryName, categoryValue, totalValue)
}


function writeValues(categoryName, categoryValue, totalValue){
    for(let i=0; i<categoryValue.length; i++){
        console.log('For the Category', categoryName[i], 'value is', categoryValue[i]);
    }
    console.log('For the Entire Inventroy the value is', totalValue);
}

writeNew(inventory);
calculateValue(inventory);