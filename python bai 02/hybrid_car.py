from gasoline_car import GasolineCar
from electric_car import ElectricalCar

class HybridCar(GasolineCar, ElectricalCar):
    def __init__(self, name, color, year, charging_voltage, volume):
        GasolineCar.__init__(self, name, color, year, volume)
        ElectricalCar.__init__(self, name, color, year, charging_voltage)
    def __repr__(self):
        return ElectricalCar.__repr__(self) + " volume: "\
            +str(self.volume)

