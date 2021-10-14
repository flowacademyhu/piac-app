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

