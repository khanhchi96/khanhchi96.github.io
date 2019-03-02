class Person:
    base_salary = 10
    """Custom constructor"""
    def __init__(self, name, email, age):
        self.name = name
        self.email = email
        self.age = age
        self.loginAttempts = 0
    def login(self):
        self.loginAttempts+=1
    def __repr__(self):
        return "Name = {}, email = {}, age = {}, loginAttempts = {}, base_salary={}"\
            .format(self.name, self.email, self.age, self.loginAttempts, self.base_salary)