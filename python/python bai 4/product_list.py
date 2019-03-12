from PyQt5.QtWidgets import *
from PyQt5.QtGui import *
from PyQt5.QtCore import *

class ProductList:
    def __init__(self, product_screen, products = []):
        self.window = QWidget()
        self.window.resize(600, 800)
        self.window.setWindowTitle('This is product list')
        # reference from productScreen
        self.product_screen = product_screen
        self.products = products
        self.setup_ui()
        print(self.products)
        self.window.show()


    def setup_ui(self):
        self.vbox = QVBoxLayout()
        self.vbox.setSpacing(10)
        self.window.setLayout(self.vbox)

        self.label_title = QLabel('This is the product list')
        self.label_title.setAlignment(Qt.AlignLeft)

        self.table = QTableWidget()
        self.table.horizontalHeader().setFixedHeight(50)
        self.table.setRowCount(len(self.products))
        self.table.setColumnCount(3)
        self.table.setColumnWidth(0, 200)
        self.table.setColumnWidth(1, 200)
        self.table.setColumnWidth(2, 200)
        row = 0
        for product in self.products:
            self.table.setItem(row, 0, QTableWidgetItem(product['name']))
            self.table.setItem(row, 1, QTableWidgetItem(product['year']))
            self.table.setItem(row, 2, QTableWidgetItem(product['status']))
            row = row + 1
        self.table.move(0, 0)
        self.table.setHorizontalHeaderLabels(["Tên sản phẩm", "Năm sản xuất", "Tinh trang"])

        self.vbox.addWidget(self.label_title)
        self.vbox.addWidget(self.table)

       
    