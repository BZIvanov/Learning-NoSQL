# MongoDB with Docker Setup

This is a simple example of how to set up a **MongoDB** database using Docker, so you don't need to install anything locally.

For the best experience, make sure you have **Docker Desktop** installed and running.

---

## Running the Docker Containers

After adding the provided `docker-compose.yml` file to your project, start the services by running:

```bash
docker compose up -d
```

To stop the containers:

```bash
docker compose stop
```

---

## Accessing Mongo Express (Admin UI)

Once the containers are running, open your browser and go to:

```
http://localhost:8081
```

This will open **Mongo Express**, a web-based admin interface for MongoDB.

The login credentials are defined in your `docker-compose.yml` file under the `mongo-express` service: **Username**: `root`, **Password**: `example`

---

## Connecting to MongoDB from Your App

If you're using a Node.js app (e.g., with Mongoose), connect using the following URI:

```
mongodb://root:example@localhost:27017
```

You can also use this URI with tools like MongoDB Compass for GUI-based database access.

---

## Default Configuration Summary

- **MongoDB Service Name**: `mongodb`
- **MongoDB Port**: `27017`
- **Mongo Express Port**: `8081`
- **Root Username**: `root`
- **Root Password**: `example`
