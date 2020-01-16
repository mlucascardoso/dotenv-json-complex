# dotenv-json-complex
> Load complex enviroment variable via JSON file

## Usage
```bash
npm install dotenv-json-complex
```

Create a `.env.json` file in the root of your project, like example below:
```json
{
    "my_app_env": {
      "nodeEnv": "development",
      "api": {
        "prefix": "/api"
      },
      "database": {
        "username": "foo",
        "password": "bar",
        "name": "awesome_db_name",
        "host": "my_db_host"
      }
    }
}
```

After that, load your environment variables on the top of your program and parse your complex json:
```js
require("dotenv-json-complex")();

const env = JSON.parse(process.env.my_app_env);

// this will print your complex json environment!
console.log(env)
```

```json
{
  "nodeEnv": "development",
  "api": {
    "prefix": "/api"
  },
  "database": {
    "username": "foo",
    "password": "bar",
    "name": "awesome_db_name",
    "host": "my_db_host"
  }
}
```