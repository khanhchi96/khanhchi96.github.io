import json
import re
fruits=["apple", "orange", "banana"]
for fruit in fruits:
    print(fruit)
if "lemon" in fruits:
    print("Co tim thay")
else:
    print("Khong tim thay")

cars=[{'name':'Toyota', 'year': 2005},{'name':'Lexus', 'year': 2006},{'name':'Mitsubishi', 'year': 2007}
]


# cars.sort(key=lambda car:car['year'])
# for car in cars:
#     print('My car is: {}'.format(car))

# cars.sort(reverse=True, key=lambda car:car['name'])
# for car in cars:
#     print('My car is: {}'.format(car))
# # cars.append({'name':"Toyota", 'year': 2014})
# # for car in cars:
# #     print(car)
# cars.insert(1, {'name':'Vinfast', 'year': 2019})
# for car in cars:
#     print(car)

tuple_fruits = ('orange', 'kiwi', 'mango')
print(fruits[0])
fruits[0] = 'banana'
print(fruits[0])

flowers = {'rose', 'violet', 'sunflower'}
flowers.clear()
for flower in flowers:
    print('flower = {}'.format(flower))

mrHoang = {'name': 'Hoang', 'age': 30}
# mrHoang['email'] = ''
print(mrHoang)

for key, value in mrHoang.items():
    print('key = {}, value={}'.format(key, value))

if 'email' in mrHoang:
    print("Da co truong email")
else:
    print("Chua co truong email")

if len(mrHoang) > 0:
    print("This object has value")
else:
    print("This object has no value")
json_text='{"name": "Hoang", "email": "hoang123@gmail.com"}'
json_person=json.loads(json_text)
print(json_person)
students={'name': 'Alex', 'dob':'2000-12-12'}
text_students = json.dumps(students)
print(text_students)

if re.match('^The.*Italia$', "The rain is in Spain"):
    print("tim thay roi")
else: 
    print("khong tim thay")
listResult = re.findall('^The.*Spain$', "The rain is in Spain")
for x in listResult:
    print(x)


points=[("3.2", "2.3"), ("5.7", "26.3"), ("5.8", "26.3")]
for point in points:
    if point[0] =='5.8'
dict_points = {"3.2": "2.3", "5.7": "26.3", "5.8": "26.3"}
dict_points["5.8"]