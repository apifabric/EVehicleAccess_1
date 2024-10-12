import decimal

import logging



logging.getLogger('sqlalchemy.engine.Engine').disabled = True  # remove for additional logging

import sqlalchemy



from sqlalchemy.sql import func  # end imports from system/genai/create_db_models_inserts/create_db_models_prefix.py

from logic_bank.logic_bank import Rule

from sqlalchemy import create_engine, Column, Integer, String, ForeignKey, DateTime, Float
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
import datetime

Base = declarative_base()

class Customer(Base):
    """description: Represents a customer in the system."""
    __tablename__ = 'customers'
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    email = Column(String, nullable=False)

class Product(Base):
    """description: Represents a product available for purchase."""
    __tablename__ = 'products'
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    price = Column(Float, nullable=False)

class Order(Base):
    """description: Represents a customer's order."""
    __tablename__ = 'orders'
    id = Column(Integer, primary_key=True, autoincrement=True)
    customer_id = Column(Integer, ForeignKey('customers.id'), nullable=False)
    order_date = Column(DateTime, default=datetime.datetime.utcnow)

class OrderItem(Base):
    """description: Represents an item within an order."""
    __tablename__ = 'order_items'
    id = Column(Integer, primary_key=True, autoincrement=True)
    order_id = Column(Integer, ForeignKey('orders.id'), nullable=False)
    product_id = Column(Integer, ForeignKey('products.id'), nullable=False)
    quantity = Column(Integer, default=1)

class Supplier(Base):
    """description: Represents a supplier of products."""
    __tablename__ = 'suppliers'
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)

class ProductSupply(Base):
    """description: Represents a supply record of products from suppliers."""
    __tablename__ = 'product_supply'
    id = Column(Integer, primary_key=True, autoincrement=True)
    product_id = Column(Integer, ForeignKey('products.id'), nullable=False)
    supplier_id = Column(Integer, ForeignKey('suppliers.id'), nullable=False)
    supply_date = Column(DateTime, default=datetime.datetime.utcnow)

class Employee(Base):
    """description: Represents an employee within the company."""
    __tablename__ = 'employees'
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    position = Column(String, nullable=False)

class Department(Base):
    """description: Represents a department within the company."""
    __tablename__ = 'departments'
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)

class EmployeeDepartment(Base):
    """description: Represents the association of employees to departments."""
    __tablename__ = 'employee_departments'
    id = Column(Integer, primary_key=True, autoincrement=True)
    employee_id = Column(Integer, ForeignKey('employees.id'), nullable=False)
    department_id = Column(Integer, ForeignKey('departments.id'), nullable=False)

class Project(Base):
    """description: Represents a project in the company."""
    __tablename__ = 'projects'
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    start_date = Column(DateTime, nullable=False)
    end_date = Column(DateTime, nullable=True)

class EmployeeProject(Base):
    """description: Represents the association of employees to projects."""
    __tablename__ = 'employee_projects'
    id = Column(Integer, primary_key=True, autoincrement=True)
    employee_id = Column(Integer, ForeignKey('employees.id'), nullable=False)
    project_id = Column(Integer, ForeignKey('projects.id'), nullable=False)

class Inventory(Base):
    """description: Represents the inventory of products."""
    __tablename__ = 'inventory'
    id = Column(Integer, primary_key=True, autoincrement=True)
    product_id = Column(Integer, ForeignKey('products.id'), nullable=False)
    stock_level = Column(Integer, default=0)

# Database setup
engine = create_engine('sqlite:///system/genai/temp/create_db_models.sqlite')
Base.metadata.create_all(engine)

# Creating session
Session = sessionmaker(bind=engine)
session = Session()

# Adding sample data
customer = Customer(name='John Doe', email='john.doe@example.com')
product = Product(name='Gadget', price=99.99)
order = Order(customer_id=1)
order_item = OrderItem(order_id=1, product_id=1, quantity=2)
supplier = Supplier(name='Supplier A')
product_supply = ProductSupply(product_id=1, supplier_id=1)
employee = Employee(name='Jane Smith', position='Developer')
department = Department(name='Software')
employee_department = EmployeeDepartment(employee_id=1, department_id=1)
project = Project(name='AI Project', start_date=datetime.datetime(2023, 1, 1))
employee_project = EmployeeProject(employee_id=1, project_id=1)
inventory = Inventory(product_id=1, stock_level=100)

session.add_all([customer, product, order, order_item, supplier, product_supply, employee, department, employee_department, project, employee_project, inventory])

# Committing the session
session.commit()

# Closing the session
session.close()
