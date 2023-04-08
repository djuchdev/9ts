# Project setup for development

## Create the environments

```bash
$ cp .env.example .env
```

## Update with correct values

```bash
ENV_VAR=value
```

## Start the servers (tested on linux)

# WARNING: You might have to modify the docker-compose command in the .aliases file to match your system!

```bash
$ source .aliases
$ dc up -d
[+] Running 3/0
 ✔ Container 9ts_db            Running     0.0s
 ✔ Container 9ts_backend       Running     0.0s
 ✔ Container 9ts_frontend      Running     0.0s
```

## View logs (assuming that you sourced .aliases)

```bash
$ dclogs <service name>

example:

$ dclogs backend
9ts_backend  |
9ts_backend  | > backend@1.0.0 dev
9ts_backend  | > ./node_modules/.bin/nodemon server.js
9ts_backend  |
9ts_backend  | [nodemon] 2.0.20
9ts_backend  | [nodemon] to restart at any time, enter `rs`
9ts_backend  | [nodemon] watching path(s): *.*
9ts_backend  | [nodemon] watching extensions: js,mjs,json
9ts_backend  | [nodemon] starting `node server.js`
9ts_backend  | Server Started
9ts_backend  | Connected to MongoDB as root@db:27017
9ts_backend  | sending to next page
```

## Use mongo on the shell (assuming that you sourced .aliases)

```bash
$ dc exec db bash
root@bf32c802d775:/# mongosh
Current Mongosh Log ID: 641d205916f7a56a64b8b14f
Connecting to:          mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.8.0
Using MongoDB:          5.0.15
Using Mongosh:          1.8.0

For mongosh info see: https://docs.mongodb.com/mongodb-shell/

------
   The server generated these startup warnings when booting
   2023-03-24T03:52:13.472+00:00: Using the XFS filesystem is strongly recommended with the WiredTiger storage engine. See http://dochub.mongodb.org/core/prodnotes-filesystem
   2023-03-24T03:52:14.276+00:00: Access control is not enabled for the database. Read and write access to data and configuration is unrestricted
   2023-03-24T03:52:14.276+00:00: /sys/kernel/mm/transparent_hugepage/enabled is 'always'. We suggest setting it to 'never'
------

------
   Enable MongoDB's free cloud-based monitoring service, which will then receive and display
   metrics about your deployment (disk utilization, CPU, operation statistics, etc).

   The monitoring data will be available on a MongoDB website with a unique URL accessible to you
   and anyone you share the URL with. MongoDB may use this information to make product
   improvements and to suggest MongoDB products and deployment options to you.

   To enable free monitoring, run the following command: db.enableFreeMonitoring()
   To permanently disable this reminder, run the following command: db.disableFreeMonitoring()
------

test> use musicapp
switched to db musicapp
musicapp> show collections
users
musicapp> db.users.find()
[
  {
    _id: ObjectId("641d1e3c6cd736ea21137868"),
    name: 'John Smith',
    email: 'john.smith@gmail.com',
    password: '$2b$10$MaG4xoEopgwPz1MfDpUdReSsIQ6D98XLOtDxfS2f5PvGYxdgsngJe',
    __v: 0
  },
  {
    _id: ObjectId("641d1ea4ad48b04b31b9d80b"),
    name: 'Victor Frankenstein',
    email: 'victor@example.com',
    password: '$2b$10$KkUVJo8TkMAfyJsMV1N9WeKLeHFXoNV5QROLmT2FWsv9eL.i/LhXW',
    __v: 0
  }
]
```

To exit the mongo shell use Ctl-C or Ctl-D and then type `exit` to exit the container

```bash
musicApp>
root@bf32c802d775:/# exit
exit
```

## Closing the environment (assuming that you sourced .aliases)

```bash
$ dc down
[+] Running 5/5
 ✔ Container 9ts_frontend          Removed   0.9s 
 ✔ Container 9ts_backend           Removed   1.1s 
 ✔ Container 9ts_db                Removed   0.4s 
 ✔ Network 9ts_backend-mongo       Removed   0.2s 
 ✔ Network 9ts_backend-frontend    Removed   0.3s 
```

## Getting Help

```bash
$ dc
Usage:  docker compose [OPTIONS] COMMAND

Docker Compose

Options:
      --ansi string                Control when to print ANSI control characters
                                   ("never"|"always"|"auto") (default "auto")
      --compatibility              Run compose in backward compatibility mode
      --env-file stringArray       Specify an alternate environment file.
  -f, --file stringArray           Compose configuration files
      --parallel int               Control max parallelism, -1 for unlimited
                                   (default -1)
      --profile stringArray        Specify a profile to enable
      --project-directory string   Specify an alternate working directory
                                   (default: the path of the, first specified,
                                   Compose file)
  -p, --project-name string        Project name

Commands:
  build       Build or rebuild services
  config      Parse, resolve and render compose file in canonical format
  cp          Copy files/folders between a service container and the local filesystem
  create      Creates containers for a service.
  down        Stop and remove containers, networks
  events      Receive real time events from containers.
  exec        Execute a command in a running container.
  images      List images used by the created containers
  kill        Force stop service containers.
  logs        View output from containers
  ls          List running compose projects
  pause       Pause services
  port        Print the public port for a port binding.
  ps          List containers
  pull        Pull service images
  push        Push service images
  restart     Restart service containers
  rm          Removes stopped service containers
  run         Run a one-off command on a service.
  start       Start services
  stop        Stop services
  top         Display the running processes
  unpause     Unpause services
  up          Create and start containers
  version     Show the Docker Compose version information

Run 'docker compose COMMAND --help' for more information on a command.
```
