let input  = {
    "items": [
        {
            "itemid": 101,
            "itemname": "Sugar",
            "itemcost": 32.5
        }
    ],
    "hasMore": false,
    "limit": 0,
    "offset": 0,
    "count": 1,
    "links": [
        {
            "rel": "self",
            "href": "http://localhost:8080/ords/hr/rest-v3/item/Sugar"
        },
        {
            "rel": "describedby",
            "href": "http://localhost:8080/ords/hr/metadata-catalog/rest-v3/item/item"
        }
    ]
};

let json = JSON.parse(JSON.stringify(input));
json.items.map(item =>{
    console.log(item.itemcost)
})
