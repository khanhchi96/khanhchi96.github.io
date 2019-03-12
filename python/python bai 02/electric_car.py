from car import Car
class ElectricalCar(Car):
    def __init__(self, name, color, year, charging_voltage):
        Car.__init__(self, name, color, year)
        self.charging_voltage = charging_voltage
    def __repr__(self):
        return Car.__repr__(self) + " charging voltage: "\
            +str(self.charging_voltage)