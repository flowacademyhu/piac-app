Build a docker image from the application:
```
docker build -t spring-boot-skeleton:latest . --no-cache
```

Run the docker compose file:
```
docker-compose up -d --build
```

now you can access:
 - frontend: http://localhost:8080/
 - backend: http://localhost:8080/backend/* e.g.: http://localhost:8080/backend/test
 - mongodb: host:[localhost:27017] user:[root] password:[example]

JSON body structure to add a market via Postman:

```json
{
"profilePic": <String>,
"name": <String>,
"place": <String>,
"openingDate": <Long, (epoch seconds)>,
"closingDate": <Long, (epoch seconds)>
}
```

Example:

```json
{
"profilePic": "https://scontent-vie1-1.xx.fbcdn.net/v/t1.6435-9/210791482_3810484415724737_5297100901497528974_n.png?_nc_cat=103&ccb=1-5&_nc_sid=973b4a&_nc_ohc=50OHr9toORgAX-EQihk&_nc_ht=scontent-vie1-1.xx&oh=9feb7da09adf0fabbe80030a480b3f54&oe=61985C8F",
"name": "Menő Piac",
"place": "Szeged Pláza",
"openingDate": 1634972400,
"closingDate": 1634986800
}
```

JSON body structure to add a vendor via Postman:

```json
{
"name": <String>,
"profilePic": <String>,
"cardPayment": <boolean>,
"intro": <String (100 character limit, including spaces)>,
"introductionLong": <String (1000 character limit, including spaces)>,
"marketId": Long,
"products": [<String>, <String> ...],
"email": <String>,
"facebook": <String>,
"instagram": <String>,
"phone": "<String>,
"webSite": <String>
}
```

Example:

```json
{
"name":"Chilikirály",
"profilePic": "https://nekedterem.hu/uploaded_files/termekek/14886/szecsuani-chili-150-g_1633350748.jpg",
"cardPayment": true,
"intro": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti ut sapiente dolore veritatis sequ",
"introductionLong": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti ut sapiente dolore veritatis sequi iste voluptate culpa sit ullam facilis et, maiores eligendi! Ea optio deleniti porro aut praesentium eum quis consequatur accusamus, autem maiores libero sed dolor minus architecto quisquam culpa sit, asperiores obcaecati soluta repellat laudantium temporibus! Delectus eveniet, iure, ipsum repellat unde libero distinctio quasi ratione modi voluptatem cum adipisci placeat eos est porro nemo numquam magni, harum minus voluptas voluptatibus nostrum facere. Hic eos sit quia maxime molestias praesentium. Cupiditate nam officiis itaque recusandae necessitatibus a obcaecati neque reprehenderit natus dolor! Officiis, minus nihil laborum consequuntur odio necessitatibus assumenda modi laudantium culpa facere eos pariatur! Voluptas quam corporis atque aliquid natus rem perferendis? Et, illum provident quas, unde asperiores quo enim autem at, non dicta aliquam eius earum alias perferendis ex dist",
"marketId": 1,
"products": ["táska","kabátka", "sapka", "sál"],
"email": "mail@example.com",
"facebook": "facebook.com",
"instagram": "instagram.com",
"phone": "+361555555",
"webSite": "www.example.com"
}
```
