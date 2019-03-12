from PyQt5.QtWidgets import *
from PyQt5.QtGui import *
from PyQt5.QtCore import *

class LoginScreen:
    def click_ok(self):
        message_box = QMessageBox()
        typedName = self.txtName.text()
        typedEmail = self.txtEmail.text()
        if len(typedName) == 0 or len(typedEmail) == 0:
            message_box.setText("Please enter your info")
        else:
            message_box.setText("Ban da nhap name:" + typedName + " ,email:" + typedEmail)
        message_box.exec_() 
        
    def __init__(self):
        self.window = QWidget()
        self.window.resize(500, 400)
        self.window.setWindowTitle('This is login screen')

        vbox = QVBoxLayout()
        vbox.setSpacing(10)
        
        self.txtName = QLineEdit()
        self.txtName.setPlaceholderText('Enter your name')
        vbox.addWidget(self.txtName)

        self.txtEmail = QLineEdit()
        self.txtEmail.setPlaceholderText('Enter your email')
        vbox.addWidget(self.txtEmail)

        self.txtPassword = QLineEdit()
        self.txtPassword.setPlaceholderText("Enter your password")
        self.txtPassword.setEchoMode(QLineEdit.Password)
        vbox.addWidget(self.txtPassword)

        vbox.addStretch(10)

        hbox = QHBoxLayout()
        btn_ok = QPushButton("OK")
        btn_ok.clicked.connect(self.click_ok)
        btn_cancel = QPushButton("Cancel")
        hbox.addWidget(btn_ok)
        hbox.addWidget(btn_cancel)

        vbox.addLayout(hbox)

        self.window.setLayout(vbox)
        self.window.show()
        
