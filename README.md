## Gateway Client

In a Gateway-Client System, a Miniserver acts as a Gateway to manage other Miniservers which are linked as Clients.

## Dev
1. Clone the repository
2. Install dependencies
3. Create an file `.env` and a copy `.env.template`
4. Set up the microservices
```
$ npm run start:dev
```
## NATs

```
$ docker run -d --name nats-server -p 4222:4222 -p 8222:8222 nats 
```