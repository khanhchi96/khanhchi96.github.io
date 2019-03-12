class Car:
    def __init__(self, name, color, year):
        self.name = name 
        self.color = color 
        self.year = year 
    def __repr__(self):
        return "Name={}, color ={}, year = {}"\
            .format(self.name, self.color, self.year)