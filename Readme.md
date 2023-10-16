# Internshala TA assignment solution

### Problem statement 1 : 
#### Write a MongoDB query to find all documents in a collection where a particular field has avalue greater than a certain value.

### Solution : 
- Create database of student 
```
use students;
```
- Create collection named student_details to store detail about student
```
db.createCollection("student_detail")
```


- Insert data in student_detail collection
```
db.student_detail.insertOne({name: "Harsh", age: 21, batch: "2020 - 2024"})
```
```
db.student_detail.insertMany([{name: "Sumit", age: 24, batch: "2018 - 2022"}, {name: "Aryan", age: 220, batch: "2020 - 2024”}, {name: "Ronak", age: 24, batch: "2018 - 2022”}, {name: "Sahil", age: 22, batch: "2020 - 2024”}, {name: "Satyam", age: 22, batch: "2019 - 2023"}])
```


- Now we have required amount of data to 
- apply query to find documents in collection where age is greater than a certain number like in our case we are writing for age greater than 23

```
db.student_detail.find({age: {$gt: 23} })
```
- OUTPUT -> 

```
[
  {
    _id: ObjectId("652d58eea0c59a080b9e98a9"),
    name: 'Ronak',
    age: 24,
    batch: '2018 - 2022'
  },
  {
    _id: ObjectId("652d5a00a0c59a080b9e98aa"),
    name: 'Sumit',
    age: 24,
    batch: '2018 - 2022'
  },
  {
    _id: ObjectId("652d5a00a0c59a080b9e98ab"),
    name: 'Aryan',
    age: 220,
    batch: '2020 - 2024'
  }
]
```
