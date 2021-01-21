'use strict'
// 1.1

const array = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    registrationDate: "Tue, 12 Jan 2021 12: 28: 18 + 0000",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
    phone: "050 866-66-66",
    website: "hildegard.org",
    company: {
      name: "aaa",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    registrationDate: "Mon, 09 Jan 2021 12: 28: 18 + 0000",
    address: {
      street: "Victor Plains",
      suite: "Suite 879",
      city: "Wisokyburgh",
      zipcode: "90566-7771",
      geo: {
        lat: "-43.9509",
        lng: "-34.4618",
      },
    },
    phone: "050 877-77-77",
    website: "anastasia.net",
    company: {
      name: "Deckow-Crist",
      catchPhrase: "Proactive didactic contingency",
      bs: "synergize scalable supply-chains",
    },
  },
  {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
    registrationDate: "Mon, 11 Jan 2020 12: 28: 18 + 0000",
    address: {
      street: "Douglas Extension",
      suite: "Suite 847",
      city: "McKenziehaven",
      zipcode: "59590-4157",
      geo: {
        lat: "-68.6102",
        lng: "-47.0653",
      },
    },
    phone: "067 866-66-66",
    website: "ramiro.info",
    company: {
      name: "Romaguera-Jacobson",
      catchPhrase: "Face to face bifurcated interface",
      bs: "e-enable strategic applications",
    },
  },
  {
    id: 4,
    name: "Patricia Lebsack",
    username: "Karianne",
    email: "Julianne.OConner@kory.org",
    registrationDate: "Mon, 11 Jan 2021 18: 28: 18 + 0000",
    address: {
      street: "Hoeger Mall",
      suite: "Apt. 692",
      city: "South Elvis",
      zipcode: "53919-4257",
      geo: {
        lat: "29.4572",
        lng: "-164.2990",
      },
    },
    phone: "097 866-66-68",
    website: "kale.biz",
    company: {
      name: "Robel-Corkery",
      catchPhrase: "Multi-tiered zero tolerance productivity",
      bs: "transition cutting-edge web services",
    },
  },
  {
    id: 5,
    name: "Chelsey Dietrich",
    username: "Kamren",
    email: "Lucio_Hettinger@annie.ca",
    registrationDate: "Mon, 11 Jan 2021 18: 48: 18 + 0000",
    address: {
      street: "Skiles Walks",
      suite: "Suite 351",
      city: "Roscoeview",
      zipcode: "33263",
      geo: {
        lat: "-31.8129",
        lng: "62.5342",
      },
    },
    phone: "(067) 888-88-88",
    website: "demarco.info",
    company: {
      name: "aaa",
      catchPhrase: "User-centric fault-tolerant solution",
      bs: "revolutionize end-to-end systems",
    },
  },
  {
    id: 6,
    name: "Mrs. Dennis Schulist",
    username: "Leopoldo_Corkery",
    email: "Karley_Dach@jasper.info",
    registrationDate: "Mon, 11 Jan 2021 18: 18: 18 + 0000",
    address: {
      street: "Norberto Crossing",
      suite: "Apt. 950",
      city: "South Christy",
      zipcode: "23505-1337",
      geo: {
        lat: "-71.4197",
        lng: "71.7478",
      },
    },
    phone: "(067) 888-99-99",
    website: "ola.org",
    company: {
      name: "Considine-Lockman",
      catchPhrase: "Synchronised bottom-line interface",
      bs: "e-enable innovative applications",
    },
  },
  {
    id: 7,
    name: "Kurtis Weissnat",
    username: "Elwyn.Skiles",
    email: "Telly.Hoeger@billy.biz",
    registrationDate: "Mon, 11 Jan 2021 18: 48: 19 + 0000",

    address: {
      street: "Rex Trail",
      suite: "Suite 280",
      city: "Howemouth",
      zipcode: "58804-1099",
      geo: {
        lat: "24.8918",
        lng: "21.8984",
      },
    },
    phone: "(068) 777-58-88",
    website: "elvis.io",
    company: {
      name: "Johns Group",
      catchPhrase: "Configurable multimedia task-force",
      bs: "generate enterprise e-tailers",
    },
  },
  {
    id: 8,
    name: "Nicholas Runolfsdottir V",
    username: "Maxime_Nienow",
    email: "Sherwood@rosamond.me",
    registrationDate: "Mon, 11 Jan 2021 12: 18: 18 + 0000",
    address: {
      street: "Ellsworth Summit",
      suite: "Suite 729",
      city: "Aliyaview",
      zipcode: "45169",
      geo: {
        lat: "-14.3990",
        lng: "-120.7677",
      },
    },
    phone: "(068) 999-99-28",
    website: "jacynthe.com",
    company: {
      name: "Abernathy Group",
      catchPhrase: "Implemented secondary concept",
      bs: "e-enable extensible e-tailers",
    },
  },
  {
    id: 9,
    name: "Glenna Reichert",
    username: "Delphine",
    email: "Chaim_McDermott@dana.io",
    registrationDate: "Mon, 11 Jan 2021 12: 18: 18 + 0000",
    address: {
      street: "Dayna Park",
      suite: "Suite 449",
      city: "Bartholomebury",
      zipcode: "76495-3109",
      geo: {
        lat: "24.6463",
        lng: "-168.8889",
      },
    },
    phone: "(068) 999-44-28",
    website: "conrad.com",
    company: {
      name: "Yost and Sons",
      catchPhrase: "Switchable contextually-based project",
      bs: "aggregate real-time technologies",
    },
  },
  {
    id: 10,
    name: "Clementina DuBuque",
    username: "Moriah.Stanton",
    email: "Rey.Padberg@karina.biz",
    registrationDate: "Mon, 11 Jan 2021 17: 28: 18 + 0000",
    address: {
      street: "Kattie Turnpike",
      suite: "Suite 198",
      city: "Lebsackbury",
      zipcode: "31428-2261",
      geo: {
        lat: "-38.2386",
        lng: "57.2232",
      },
    },
    phone: "(067) 999-99-28",
    website: "ambrose.net",
    company: {
      name: "Hoeger LLC",
      catchPhrase: "Centralized empowering task-force",
      bs: "target end-to-end models",
    },
  },
];

let table = {};
array.forEach((item) => (table[item.id] = item))

//alert(JSON.stringify(table, null, 4))
//console.log(table)

// 1.2

const getById = () => {
    const userId = prompt('Enter your id')
    alert(JSON.stringify(table[userId] || 'This id is not registered', null, 4))
}

//getById()

// 1.3

const getAddr = () => {
    const userId = prompt('Enter your id')
    if(table[userId]){
        if(table[userId] != undefined){
            alert(JSON.stringify(table[userId].address , null, 4))
        }
    }else alert('This id is not registered or your address is not valid')
}

//getAddr()

// 1.4

const getByCompany = () => {
    const userCompany = prompt('Enter your company name')

    Object.prototype.getKey = function(value){
        for(var key in this){
          if(this[key].company.name == value){
            return this[key];
          } 
        } //alert('This id is not registered or your company name is not valid')
    };

    var key = table.getKey(userCompany);
    alert(JSON.stringify(key, null, 4)); 
}

//getByCompany()

// 1.5

function deepFreeze(object) {
    // Retrieve the property names defined on object
    const propNames = Object.getOwnPropertyNames(object);
  
    // Freeze properties before freezing self
  
    for (const name of propNames) {
      const value = object[name]
  
      if (value && typeof value === "object") {
        deepFreeze(value);
      }
    }  
    return Object.freeze(object);
}
 
//deepFreeze(table);

// 1.6

Object.values(table).forEach((user) => {
    Object.defineProperty(user, "phone", {
        get: () => { this._phone},
        set: function(value) {
            var regExp = /^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{2}-[0-9]{2}/;
            
            let check = value.toString().match(regExp)
            if (check != null) {
                console.log("All is set")
                this._phone = check[0]
                return
            } else {
                console.log("error")
            }
        }
    })
})


table[10].phone = "qwerqwerqw"
table[10].phone = "(123) 123-12-12"

// 2.4

const sortArrById = () => {
    console.log("Before: ", array);
    let sortedArray = [...array];
    console.log("After: ", sortedArray.sort((a, b) => b.id - a.id)
    );
};

//console.log(sortArrById(table))
