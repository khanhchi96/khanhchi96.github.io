from PyQt5.QtWidgets import *
from PyQt5.QtGui import *
from PyQt5.QtCore import *

class ProductList:
    def __init__(self):
        self.window = QWidget()
        self.window.resize(600, 800)
        self.window.setWindowTitle('This is product list')

        vbox = QVBoxLayout()
        vbox.setSpacing(10)
        
        

        self.window.setLayout(vbox)
        self.window.show()
        self.products = []
    