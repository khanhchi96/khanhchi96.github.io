from car import Car
class GasolineCar(Car):
    def __init__(self, name, color, year, volume):
        Car.__init__(self, name, color, year)
        self.volume = volume
    def __repr__(self):
        return Car.__repr__(self) + " volume: "\
            +str(self.volume)