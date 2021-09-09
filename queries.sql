-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.
select p.ProductName, c.categoryname from Product as p join category as c on p.categoryid = c.id

-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.
select O.shipname, od.orderid, o.orderdate from 'order' as o join orderdetail as od on od.orderid = o.id
 where o.orderdate < "2012-08-09" group by od.orderid

-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.
select p.ProductName,od.quantity from 'product' as p join orderdetail as od on od.productid = p.id
 where od.orderid = 10251 order by p.productname

-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.
select o.id as Orderid, c.companyname as customers_Company_Name, e.lastname as employees_last_name from customer as c join 'order' as o on o.customerid = c.id join employee as e
 on e.id = o.employeeid