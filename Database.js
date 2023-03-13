//Database for COEN 163
//
//The database is an array of items.
//The database variable is called "Items"
//
//Each item is an object that stores the:
//      name (a string), 
//      type (a string),
//      location (a tuple with x and y), 
//      description (a string),
//      image (a string containing a web URL)
//
//Here is a template of an item for easy copy and pasting
/*
name: "",
type: "",
location: (,),
description: "",
image: ""
*/
//
//For easy searching, the types are: 
//Shoe, Men's Shirt, Men's Pants, Women's Shirt, Women's Pants, Kid's Shirt, and Kid's Pants
let Types = ["Shoe", "Men's Shirt", "Men's Pants", "Women's Shirt", "Women's Pants", "Kid's Shirt", "Kid's Pants"];

let Items = [
    //Shoes
    {
        name: "Red Nike Shoe",
        type: "Shoe",
        location: [1, 1],
        description: "It is a red shoe",
        image: "https://n4.sdlcdn.com/imgs/a/6/l/Nike-Red-Basketball-Sports-Shoes-SDL413059472-1-32cc8.jpg"
    },
    {
        name: "Blue Nike Shoe",
        type: "Shoe",
        location: [1, 2],
        description: "It is a blue shoe",
        image: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fn1.sdlcdn.com%2Fimgs%2Fb%2Fm%2F4%2FNike-Blue-Running-Shoes-SDL685685373-1-fe96c.jpg&f=1&nofb=1&ipt=19df762439f46020e6d2a1c669d410738af69d46606b7cc7bd220d1c211c2049&ipo=images"
    },
    {
        name: "Yellow Nike Shoe",
        type: "Shoe",
        location: [1, 3],
        description: "It is a yellow shoe",
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdna.lystit.com%2Fphotos%2Fstockx%2F6e0bb617%2Fnike-Varsity-MaizeVarsity-Maize-Ligh-Air-Max-90-Vt-Varsity-Maize.jpeg&f=1&nofb=1&ipt=85053b2830720f886f5ee74431f87993cdba2f12ba28cb32ae58052daa39f568&ipo=images"
    },
    {
        name: "Black Adidas Shoe",
        type: "Shoe",
        location: [1, 4],
        description: "A black shoe",
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fn2.sdlcdn.com%2Fimgs%2Fh%2Fw%2F0%2FAdidas-Lifestyle-Black-Casual-Shoes-SDL865005169-3-c77f6.jpg&f=1&nofb=1&ipt=1c738b26bf9aa7cda3f33a6ef9ce4dc3ca06ce37ec0593b30ea94514ef75a876&ipo=images"
    },
    {
        name: "Purple Adidas Shoe",
        type: "Shoe",
        location: [1, 5],
        description: "A purple shoe",
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fn4.sdlcdn.com%2Fimgs%2Fg%2F3%2Fg%2FAdidas-Purple-Running-Shoes-SDL863384732-1-2c1e8.jpeg&f=1&nofb=1&ipt=c2286990b1b5e5dde0dba7b2b4f088cde4f288cf8762a016a2445d72dac2ffd0&ipo=images"
    },
    {
        name: "White Vans Shoe",
        type: "Shoe",
        location: [1, 6],
        description: "A white shoe",
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.surfstitch.com%2Fon%2Fdemandware.static%2F-%2FSites-ss-master-catalog%2Fdefault%2Fdw5e566ac0%2Fimages%2FSSVN-0EE3W00M%2FTRUE-WHITE-MENS-FOOTWEAR-VANS-SKATE-SHOES-SSVN-0EE3W00M_5.JPG&f=1&nofb=1&ipt=b63a61676bb26695d18a914db40bbb07efc60bbbe0561fd64ba85665fcfac477&ipo=images"
    },

    //Men's Clothes
    {
        name: "Men's Blue Shirt",
        type: "Men's Shirt",
        location: (2,1),
        description: "A blue button up shirt for men",
        image: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fswaywear.weebly.com%2Fuploads%2F4%2F1%2F5%2F5%2F41555551%2Fs632714205645351846_p1_i1_w1500.jpeg&f=1&nofb=1&ipt=1b5cae01da20b3ad100504570ff52a94efdff1ee9b75a174cc9368f9849f873c&ipo=images"
    },
    {
        name: "Men's Red Shirt",
        type: "Men's Shirt",
        location: (2,2),
        description: "A red button up shirt for men",
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdna.lystit.com%2Fphotos%2Fc72e-2014%2F02%2F27%2Fami-red-button-down-shirt-product-1-18060448-0-934347369-normal.jpeg&f=1&nofb=1&ipt=7ef322f543e8936f3eb5ee616055a48832aca522d2c7a04501e91c3121338661&ipo=images"
    },
    {
        name: "Men's Pink Shirt",
        type: "Men's Shirt",
        location: (2,3),
        description: "A pink button up shirt for men",
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi5.walmartimages.com%2Fasr%2Fd0d3bca4-dc1b-4428-90ea-cd5641e6dec9_1.69fe8ecb1320cccd6efaa244e742409c.jpeg&f=1&nofb=1&ipt=40a68fab84db81fe8538205f05e9dd349c51e2aedf6eb887917318604ce307d9&ipo=images"
    },
    {
        name: "Men's Black Pants",
        type: "Men's Pants",
        location: (2,4),
        description: "A pair of black pants for men",
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdnb.lystit.com%2Fphotos%2Fbdea-2013%2F12%2F17%2Fburberry-black-steadman-black-slim-fit-jeans-product-1-5068153-1-202911326-normal.jpeg&f=1&nofb=1&ipt=e47360a5dce1e885b1f408f50eb3f7e3df147e6428fd848068f080171c4d1b70&ipo=images"
    },
    {
        name: "Men's Brown Pants",
        type: "Men's Pants",
        location: (2,5),
        description: "A pair of brown pants for men",
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.surfstitch.com%2Fon%2Fdemandware.static%2F-%2FSites-ss-master-catalog%2Fdefault%2Fdw5ba2e157%2Fimages%2FA1111703VBN%2FVINTAGE-BROWN-MENS-CLOTHING-VOLCOM-PANTS-A1111703VBN_1.JPG&f=1&nofb=1&ipt=99d1310e3cc1f5804ef168fc4363f353bbd6715c8f1cae322225c80c0c7a0aa2&ipo=images"
    },
    {
        name: "Men's Tan Pants",
        type: "Men's Pants",
        location: (2,6),
        description: "A pair of tan pants for men",
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F45%2F05%2F68%2F450568d9c9ffc192e2d3615139e867c7.jpg&f=1&nofb=1&ipt=f8464950b083ab2d1867fa7c2dcf182cfbac972a96ec880c43e2c72426871bd2&ipo=images"
    },

    //Women's Clothes
    {
        name: "Women's White Shirt",
        type: "Women's Shirt",
        location: (3,1),
        description: "A white button up shirt for women",
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpurewows3.imgix.net%2Fimages%2Farticles%2F2017_08%2Fwhite_shirt_equipment.jpg%3Fauto%3Dformat%2Ccompress%26cs%3Dstrip&f=1&nofb=1&ipt=521e69f3994a10c15d6619a590a7fbb045d137b10ed9324b8cef37e65f05d179&ipo=images"
    },
    {
        name: "Women's Blue Shirt",
        type: "Women's Shirt",
        location: (3,2),
        description: "A blue button up shirt for women",
        image: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fep.yimg.com%2Fay%2Fyhst-54326505879580%2Fsr61lb-short-sleeve-women-s-light-blue-oxford-executive-button-down-shirt-11.jpg&f=1&nofb=1&ipt=e7e2cc7e0d20c3dc1d688b7d61590f274cc0d7dda82c1cdb68044f9f37bc0d41&ipo=images"
    },
    {
        name: "Women's Yellow Shirt",
        type: "Women's Shirt",
        location: (3,3),
        description: "A yellow button up shirt for women",
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F2e%2F14%2F2b%2F2e142b00ae8f1a64e2288e387f504df7.jpg&f=1&nofb=1&ipt=958077f5ad9e553e28897ea99843fcef0bf15f53d4b27b603eeecc328ceebe24&ipo=images"
    },
    {
        name: "Women's Black Pants",
        type: "Women's Pants",
        location: (3,4),
        description: "A pair of black pants for women",
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi5.walmartimages.com%2Fasr%2F46801cf4-1edf-41d7-97db-c58c53e57037.9a6d7e55c79666d9e2c0275041b1ae03.jpeg&f=1&nofb=1&ipt=150be3bec2b89826a11d5f0c199b493c3c8e70a7b2a0aa79a0482f66a30208e5&ipo=images"
    },
    {
        name: "Women's Tan Pants",
        type: "Women's Pants",
        location: (3,5),
        description: "A pair of tan pants for women",
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fd3%2F12%2F9b%2Fd3129ba5ddde211d08c621e89d0e049e.jpg&f=1&nofb=1&ipt=a9f6b5e3ba62d2b60ffc04dbe6b8a058b984c015a2f79d3029ede03a9b0d8280&ipo=images"
    },
    {
        name: "Women's White Pants",
        type: "Women's Pants",
        location: (3,6),
        description: "A pair of white pants for women",
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi5.walmartimages.com%2Fasr%2Faea630d1-aa38-4531-981d-53a6c642da5f.c19c59bcc5b232551f3191c827195ff8.jpeg&f=1&nofb=1&ipt=8b0397fc4e9d6c4fe367298db4e28a05e2fb8e16931c6eb31acc07befd24b043&ipo=images"
    },

    //Kid's Clothes
    {
        name: "Kid's Yellow Shirt",
        type: "Kid's Shirt",
        location: (4,1),
        description: "A yellow shirt for kids",
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmodishshirt.com%2Fwp-content%2Fuploads%2F2020%2F03%2FKids-T-Shirts-Yellow.jpg&f=1&nofb=1&ipt=c8a85b1c3aaacee2abdc994ef5f58e734fefc053f63d1d2dce432c793ac50dc6&ipo=images"
    },
    {
        name: "Kid's Red Shirt",
        type: "Kid's Shirt",
        location: (4,2),
        description: "A red shirt for kids",
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fae01.alicdn.com%2Fkf%2FHTB16DoHucyYBuNkSnfoq6AWgVXaV%2F2017-Summer-Top-quality-boys-girls-plain-red-t-shirt-for-kids-toddler-big-boy-clothing.jpg&f=1&nofb=1&ipt=a4002619e179f7de9370e416346ebfd1cd0c0f06ef7151f792d236b44ea37679&ipo=images"
    },
    {
        name: "Kid's Blue Shirt",
        type: "Kid's Shirt",
        location: (4,3),
        description: "A blue shirt for kids",
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2F75%2Fa9%2F94%2F75a9942602292815d5247170274db690.jpg&f=1&nofb=1&ipt=d62231b1b9b6f7099fea43f3d7af8260ca36555184f4556910672c390679304d&ipo=images"
    },
    {
        name: "Kid's Black Pants",
        type: "Kid's Pants",
        location: (4,1),
        description: "A pair of black pants for kids",
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.kidrepublic.co.nz%2Fuser%2Fimages%2F35834.jpg%3Ft%3D2003312139&f=1&nofb=1&ipt=a9cab1c11c14afeb4687dd76b86c646185ea3f5946ed83bf68ade58fade0680b&ipo=images"
    },
    {
        name: "Kid's Tan Pants",
        type: "Kid's Pants",
        location: (4,1),
        description: "A pair of tan pants for kids",
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fae01.alicdn.com%2Fkf%2FHTB1.vucPFXXXXanapXXq6xXFXXXw%2FBrand-2017-Spring-child-kid-baby-boy-casual-pants-trousers-unisex-toddler-cargo-pants-pockets-Khaki.jpg&f=1&nofb=1&ipt=c50b821fd1ab8cfc6bda557091ff7a9a874b1a7d64d2a535ebec5fafe4938dc6&ipo=images"
    },
    {
        name: "Kid's White Pants",
        type: "Kid's Pants",
        location: (4,1),
        description: "A pair of white pants for kids",
        image: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fep.yimg.com%2Fay%2Fyhst-11683221621812%2Fboys-white-pants-4.jpg&f=1&nofb=1&ipt=98cfdce3a6160044ee5f91305709edcd1694f5556980e3a32eae69aee8a3ca11&ipo=images"
    }
];

//********Functions for database: ********
//Checks if the given "search_type" is a type within the database
//and returns true if it is and false if it is not
//Input: a string
//Output: true or false (boolean)
function Is_type(search_type){
    //search Types looking for "search_type"
    for(let i = 0; i < Items.length; i++){
        if(Types[i] === search_type){
            //if "search_type" is found, return true
            return true;
        }
    } 
    //if "search_type" is not found, return false
    return false;
}

//Finds and returns all items of type "search_type"
//NOTE: Please make sure to check that "search_type" is valid by calling "Is_type(search_type)"
//before calling this function
//Input: a string
//Output: A list of items
function Search_Database(search_type){
    //make an empty array
    found = [];
    if(!Is_type(search_type)) return false;

    //search database looking for "search_type"
    for(let i = 0; i < Items.length; i++){
        if(Items[i].type === search_type){
            //if the current item has type equal to 
            //"search_type" then, add it to the found list
            found.push(Items[i]);
        }
    } 
    //return the found items
    return found;
}

function searchItem(item){
    for(let i = 0; i < Items.length; i++){
        if(item === Items[i].name){
            return Items[i];
        }
    }
    console.log("item not found");
}