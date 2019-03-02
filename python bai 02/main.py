import math
from person import Person

x= 10
print(x)
y=9
print(y)
z= x*y
print(z)
print("z= {}".format(z))

print("squared x= {}".format(x**2))
Person.base_salary = 123
person1 = Person("hoang", "aa@gmail.com", 20)
person1.login()
person1.login()
person1.login()

person2 = Person("chi", "khanhchi2596@gmail.com", 20)
person2.base_salary=333
print(str(person1))
print(str(person2))




from car import Car
from electric_car import ElectricalCar
Car1= Car("Audi", "yellow", "2018")
ElectricalCar1=ElectricalCar("Audi", "yellow", "2018", 220)
print(str(Car1))
print(str(ElectricalCar1))
from hybrid_car import HybridCar
HybridCar1 = HybridCar("Audi", "yellow", "2018", 220, 1000)
print(str(HybridCar1))