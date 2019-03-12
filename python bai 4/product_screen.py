from PyQt5.QtWidgets import *
from PyQt5.QtGui import *
from PyQt5.QtCore import *
from product_list import ProductList
class ProductScreen:
    def click_save(self):
        message_box = QMessageBox()
        typedName = self.txtName.text()
        typedYear = self.txtYear.text()
        if len(typedName) == 0 or len(typedYear) == 0:
            message_box.setText("Please enter product info")
        else:
            # self.dict_product = {'name': typedName, 'year': typedYear}
            self.dict_product["name"] = typedName
            self.dict_product["year"] = typedYear
            self.products.append(self.dict_product)
            self.txtName.setText('')
            self.txtYear.setText('')
            
        # message_box.exec_() 
    """ 
    def __init__(self):
        self.window = QWidget()
        self.window.resize(500, 400)
        self.window.setWindowTitle('This is product screen')

        vbox = QVBoxLayout()
        vbox.setSpacing(10)
        
        self.txtName = QLineEdit()
        self.txtName.setPlaceholderText('Enter product name')
        vbox.addWidget(self.txtName)

        self.txtYear = QLineEdit()
        self.txtYear.setPlaceholderText('Enter product year')
        vbox.addWidget(self.txtYear)

        # self.txtPassword = QLineEdit()
        # self.txtPassword.setPlaceholderText("Enter your password")
        # self.txtPassword.setEchoMode(QLineEdit.Password)
        # vbox.addWidget(self.txtPassword)

        vbox.addStretch(10)

        btn_save = QPushButton("Add Product")
        btn_show_list = QPushButton("Show product's list")
        btn_save.clicked.connect(self.click_save)
        btn_show_list.clicked.connect(self.btn_show_list)
        # btn_cancel = QPushButton("Cancel")
        vbox.addWidget(btn_save)
        vbox.addWidget(btn_show_list)
        
        # vbox.addLayout(hbox)

        self.window.setLayout(vbox)
        self.window.show()
        self.products = []
        self.product_list = None
       """ 

    def __init__(self):
        self.dict_product = {}
        self.window = QWidget()
        self.window.resize(500, 400)
        self.window.setWindowTitle('This is product screen')

        self.gridLayout = QGridLayout()
        self.gridLayout.setSpacing(10)
        
        self.gridLayout.addWidget(QLabel("Name"), 0, 0)
        self.txtName = QLineEdit()
        self.txtName.setPlaceholderText('Enter product name')
        self.gridLayout.addWidget(self.txtName, 0, 1)
        
        self.gridLayout.addWidget(QLabel("Year"), 1, 0)
        self.txtYear = QLineEdit()
        self.txtYear.setPlaceholderText('Enter product year')
        self.gridLayout.addWidget(self.txtYear, 1, 1)

        self.gridLayout.addWidget(QLabel("Status"), 2, 0)
        self.comboStatus = QComboBox()
        self.status = ['new', 'old']
        self.comboStatus.addItems(self.status)
        self.comboStatus.currentIndexChanged.connect(self.select_status)
        self.gridLayout.addWidget(self.comboStatus, 2, 1)

        # self.txtPassword = QLineEdit()
        # self.txtPassword.setPlaceholderText("Enter your password")
        # self.txtPassword.setEchoMode(QLineEdit.Password)
        # vbox.addWidget(self.txtPassword)

        

        btn_save = QPushButton("Add Product")
        btn_show_list = QPushButton("Show product's list")
        btn_save.clicked.connect(self.click_save)
        self.gridLayout.addWidget(btn_save, 3, 0)
        btn_show_list.clicked.connect(self.btn_show_list)
        self.gridLayout.addWidget(btn_show_list, 3, 1)
        # btn_cancel = QPushButton("Cancel")
        self.gridLayout.addWidget(btn_save)
        self.gridLayout.addWidget(btn_show_list)
        
        # vbox.addLayout(hbox)

        self.window.setLayout(self.gridLayout)
        self.window.show()
        self.products = []
        self.product_list = None

    def select_status(self, index):
        self.dict_product['status'] = self.status[index]

    def btn_show_list(self):
        if self.product_list ==None:
            self.product_list = ProductList(self, self.products)
