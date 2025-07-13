# Introduction to NoSQL

## What is NoSQL?

NoSQL stands for **"Not Only SQL"**. It refers to a broad class of database systems that do not follow the traditional relational database model.

Unlike SQL databases, which store data in tables with fixed schemas, NoSQL databases offer flexible data models that are well-suited for modern applications with large volumes of structured, semi-structured, or unstructured data.

## Why NoSQL?

Here are a few key reasons why developers choose NoSQL databases:

- **Scalability**: Easily handles large amounts of data and traffic.
- **Flexibility**: Supports dynamic or evolving data models.
- **Performance**: Optimized for specific types of queries and workloads.
- **Developer-Friendly**: Often works naturally with modern development stacks.

## Types of NoSQL Databases

1. **Document-based** (e.g., MongoDB)

   - Stores data as JSON-like documents.
   - Great for hierarchical data and fast development.

2. **Key-Value Stores** (e.g., Redis, DynamoDB)

   - Stores data as key-value pairs.
   - Extremely fast for simple lookup operations.

3. **Column-Family Stores** (e.g., Apache Cassandra, HBase)

   - Stores data in columns instead of rows.
   - Optimized for large-scale data analytics.

4. **Graph Databases** (e.g., Neo4j)
   - Stores data as nodes and edges.
   - Perfect for relationships and network-style queries.

## NoSQL vs SQL

| Feature      | SQL (Relational)       | NoSQL (Non-relational)                                   |
| ------------ | ---------------------- | -------------------------------------------------------- |
| Schema       | Fixed schema           | Dynamic schema                                           |
| Data Format  | Tables & rows          | Documents, key-value, graphs                             |
| Scaling      | Vertical (scale-up)    | Horizontal (scale-out)                                   |
| Transactions | Strong ACID compliance | Varies (some offer ACID, others prioritize availability) |
| Examples     | PostgreSQL, MySQL      | MongoDB, Redis, Cassandra                                |

## When to Use NoSQL

Consider using NoSQL if:

- You have large-scale, rapidly growing data.
- You need high availability and scalability.
- Your data model changes frequently.
- You are building real-time web or mobile applications.

## Focus of This Repository

This repository uses **MongoDB** as the primary NoSQL database for learning purposes, due to its popularity, flexibility, and strong ecosystem. Concepts here will apply broadly to NoSQL, but examples will default to MongoDB.
