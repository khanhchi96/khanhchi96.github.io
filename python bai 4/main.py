from PyQt5.QtWidgets import *
from PyQt5.QtGui import *
from PyQt5.QtCore import *
# from login_screen import LoginScreen
from product_screen import ProductScreen

app = QApplication([])
# login_screen = LoginScreen()
product_screen = ProductScreen()
app.exec_()