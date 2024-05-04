const swaggerdocumentation=
{
    "openai":"3.2.0",
    "info":
    {
        "title":" Online Shop API",
        "description":"This is the API Specification for the OnlineShop app backend.",
        "contact":{"email":"belyseurwidukunda@gmail.com"},
        "license":{
            "name":"MIT",
            "url":"https://opensource.org/licenses/mit"
        },
        "version": "1.0.0"
    },
    "extrenalDocs":{
        "description":"Get source code",
        "url":"https://github.com/Be9321/E-Shop"
    },
    "basePath":"/api/Product",
    "servers":
    [
        {
            "url":"http://localhost:3000",
            "description":"Local server"
        },
        {
            "url":"https://EShop.onrender.com",
            "description":"production server"
        }
    ],
    "schemes":["http","https"],
    "tags":[
        {
            "name":"OnlineShop",
            "description":"Online operating store"
        }
    ],
    "paths":{
"/add":{
"post":
{
    "tags":["OnlineShop"],
    "summary":"Add a new product",
    "description":"Creates a new product with  the provided details",
    "requestBody":{
        "content":{
            "application/json":
            {
                "schema":{
                    "$ref": "#/definitions/OnlineShop"
                }
            }
        }
    },
    "response":{
        "201":
        {
            "description":"product added successfully",
            "content":{
                "application/json":
                {
                    "schema":{
                        "$ref":"#/definitions/OnlineShop"
                    }
                }
            }
        },
        "400":
        {
            "description":"bad request -Validation error",
            "content":{
                "application/json":{
                    "schema":{
                        "type": "object",
                        "properties":{
                            "message":{
                                "type":"string"
                            }
                        }
                    }
                }
            }
        }
    }
}

}
    },
    "definition":
    {
"schemas":
{
    "product":
    {
        "type":"object",
        "properties":
        {
            "_id":
            {
                "type":"string",
                "description":"Unique identifier of the product"
            },
            "name":
            {
                "type":"string",
                "required":true
                
            },

            "authorName":
            {
                "type":"string",
                "required":true
                
            },
            "description":{
                "type":"string",
              
            },
            "category":
            {
                "type":"string",
                "required":true,
                "enum":["Novels","History", "Science", "Poetry", "Recipe", "Comic"]
            },
            default: "Novels",

            "checkBook":{
                "completed":{
                    "type":"Boolean",
                   "require":false
                }
            }
            
                
                }
            }
        }
    }
}
    
export default swaggerdocumentation;